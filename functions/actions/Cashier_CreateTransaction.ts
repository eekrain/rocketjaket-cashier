import { Request, Response } from "express";
import to from "await-to-js";
import { getRandomAlphabet, getUserSdk } from "../../utils";
import dayjs from "dayjs";
import {
  Transaction_Payment_Type_Enum_Enum,
  Transaction_Status_Enum_Enum,
} from "../../graphql/gql-generated";
import { Transaction_Items_Arr_Rel_Insert_Input } from "../../graphql/gql-generated";

enum InventoryErrorEnum {
  "success",
  "not_found",
  "unavailable_qty",
}

export default async (req: Request, res: Response) => {
  const params: Cashier_CreateTransactionArgs = req.body.input;

  const defaultRespons: Cashier_CreateTransactionOutput = {
    cash_in_amount: params.cash_in_amount,
    isError: true,
    payment_type: params.payment_type,
    store_id: params.store_id,
    total_transaction: params.total_transaction,
    transaction_status:
      Transaction_Status_Enum_Enum.Failed as unknown as TransactionStatusEnum,
    cash_change: null,
    errorMessage: null,
    invoice_number: null,
  };

  if (params.cash_in_amount < params.total_transaction) {
    console.log(
      "🚀 ~ file: createTransaction.ts ~ line 17 ~ handler ~ params.cash_in_amount < params.total_transaction",
      params.cash_in_amount < params.total_transaction
    );
    const out: Cashier_CreateTransactionOutput = {
      ...defaultRespons,
      errorMessage: "Jumlah uang masuk kurang dari total transaksi!",
    };
    return res.send(out);
  }

  const sdk = getUserSdk(req);

  const newInvoiceNumber = await getNewInvoiceNumber(defaultRespons, sdk, res);
  if (typeof newInvoiceNumber !== "string") return;

  const [errUpdatedAt, resUpdatedAt] = await to(
    sdk.Inventory_GetInventoryProductAvailableQtytByIds({
      _in: params.transaction_items.map((item) => item.product_inventory_id),
    })
  );
  if (errUpdatedAt || !resUpdatedAt) {
    console.log(
      "🚀 ~ file: Cashier_CreateTransaction.ts ~ line 37 ~ errUpdatedAt",
      errUpdatedAt
    );
    const out: Cashier_CreateTransactionOutput = {
      ...defaultRespons,
      errorMessage: errUpdatedAt.message,
    };
    return res.send(out);
  }
  const updatedAtData = resUpdatedAt
    ? resUpdatedAt.data?.inventory_products || []
    : [];

  const errorInventory = {
    not_found: false,
    unavailable_qty: false,
  };
  const checkInventory = params.transaction_items.map((item) => {
    const found_inv_pdk = updatedAtData.find(
      (inv_pdk) => inv_pdk.id === item.product_inventory_id
    );
    if (!found_inv_pdk) {
      errorInventory.not_found = true;
      return {
        error: InventoryErrorEnum.not_found,
        item: item.product_name_concise,
      };
    } else if (found_inv_pdk.available_qty < item.purchace_qty) {
      errorInventory.unavailable_qty = true;
      return {
        error: InventoryErrorEnum.unavailable_qty,
        item: item.product_name_concise,
      };
    }
  });

  if (errorInventory.not_found || errorInventory.unavailable_qty) {
    let err = "";
    if (errorInventory.not_found) {
      checkInventory
        .filter((x) => x?.error === InventoryErrorEnum.not_found)
        .forEach((x) => (err += `\nProduk ${x?.item} tidak ditemukan.`));
    }
    if (errorInventory.unavailable_qty) {
      checkInventory
        .filter((x) => x?.error === InventoryErrorEnum.not_found)
        .forEach((x) => (err += `\nStok produk ${x?.item} tidak mencukupi.`));
    }
    const out: Cashier_CreateTransactionOutput = {
      ...defaultRespons,
      errorMessage: `${err}\nSilahkan refresh data kasir dahulu!`,
    };
    return res.send(out);
  }

  const transaction_items: Transaction_Items_Arr_Rel_Insert_Input = {
    data: params.transaction_items.map((item) => {
      const subtotal =
        item?.selling_price * item.purchace_qty -
        (item.selling_price * item.purchace_qty * item.discount) / 100;
      const profit = subtotal - item.capital_price * item.purchace_qty;

      return {
        product_name: item.product_name_concise,
        capital_price: item.capital_price,
        selling_price: item.selling_price,
        discount: item.discount,
        purchase_qty: item.purchace_qty,
        subtotal,
        profit,
        inventory_product_id: item.product_inventory_id,
        transaction_status: Transaction_Status_Enum_Enum.Success,
      };
    }),
  };

  const [errCreate, resCreate] = await to(
    sdk.Transaction_CreateOneTransaction({
      object: {
        invoice_number: newInvoiceNumber,
        cash_in_amount: params.cash_in_amount,
        payment_type:
          params.payment_type as unknown as Transaction_Payment_Type_Enum_Enum,
        karyawan_name: params.karyawan_name,
        transaction_items,
        transaction_status: Transaction_Status_Enum_Enum.Success,
        store_id: params.store_id,
      },
    })
  );
  if (errCreate || !resCreate) {
    console.log(
      "🚀 ~ file: Cashier_CreateTransaction.ts ~ line 143 ~ errCreate",
      errCreate
    );
    const out: Cashier_CreateTransactionOutput = {
      ...defaultRespons,
      errorMessage: `${errCreate.message}`,
    };
    return res.send(out);
  }

  const output: Cashier_CreateTransactionOutput = {
    invoice_number: resCreate.data?.insert_transaction_one?.invoice_number,
    payment_type: params.payment_type,
    cash_change: params.cash_in_amount - params.total_transaction,
    total_transaction: params.total_transaction,
    cash_in_amount: params.cash_in_amount,
    store_id: params.store_id,
    transaction_status:
      Transaction_Status_Enum_Enum.Success as unknown as TransactionStatusEnum,
    isError: false,
    errorMessage: null,
  };
  console.log(
    "🚀 ~ file: createTransaction.ts ~ line 122 ~ handler ~ output",
    output
  );
  res.send(output);
};

const getNewInvoiceNumber = async (
  defaultRespons: Cashier_CreateTransactionOutput,
  sdk: ReturnType<typeof getUserSdk>,
  res: Response
) => {
  const created_at_gte = dayjs().startOf("day").toISOString();

  const [err, getLastTrans] = await to(
    sdk.Transaction_GetLastTransactionNumber({
      created_at_gte: created_at_gte,
    })
  );
  if (err || !getLastTrans) {
    const out: Cashier_CreateTransactionOutput = {
      ...defaultRespons,
      errorMessage: err?.message,
    };
    return res.send(out);
  }

  const lastInvoiceNumber =
    getLastTrans.data?.transaction?.[0]?.invoice_number.split("/");

  const newInvoiceNumber = lastInvoiceNumber?.[1]
    ? `${lastInvoiceNumber?.[0]}/${lastInvoiceNumber?.[1]}/${getRandomAlphabet(
        3
      )}/${parseInt(lastInvoiceNumber?.[3], 10) + 1}`
    : `INV/${dayjs().format("YYYYMMDD")}/${getRandomAlphabet(3)}/1`;

  return newInvoiceNumber;
};
