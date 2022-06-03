import { Request, Response } from "express";
import {
  TransactionReturnType as Transaction_Return_Type,
  Transaction_Items_Insert_Input,
  Transaction_Payment_Type_Enum_Enum,
  Transaction_Status_Enum_Enum,
} from "../graphql/gql-generated";
import { getAdminSdk } from "../utils";
import to from "await-to-js";

export default async (req: Request, res: Response) => {
  const params: Transaction_ReturnTransactionArgs = req.body.input;
  console.log(
    "🚀 ~ file: Transaction_ReturnTransaction.ts ~ line 8 ~ params",
    params
  );

  const defaultOutput: Transaction_ReturnTransactionOutput = {
    invoice_number: params.invoice_number,
    isError: true,
    errorMessage: "",
    return_type: params.return_type,
    total_transaction: params.total_transaction,
    cash_in_amount: params.cash_in_amount,
  };
  const sdk = getAdminSdk();

  const [errFoundTransact, resFoundTransact] = await to(
    sdk.Transaction_GetTransactionByPK({
      invoice_number: params.invoice_number,
    })
  );

  const foundTransact = resFoundTransact?.data.transaction_by_pk;
  console.log(
    "🚀 ~ file: Transaction_ReturnTransaction.ts ~ line 35 ~ foundTransact",
    foundTransact
  );

  if (errFoundTransact || !foundTransact) {
    console.log(
      "🚀 ~ file: Transaction_ReturnTransaction.ts ~ line 21 ~ errFoundTransact",
      errFoundTransact
    );
    const out: Transaction_ReturnTransactionOutput = {
      ...defaultOutput,
      errorMessage: errFoundTransact?.message,
    };
    return res.send(out);
  }

  if (
    params.return_type ===
    (Transaction_Return_Type.ReturnAll as unknown as TransactionReturnType)
  ) {
    const [errRefund, resRefund] = await to(
      sdk.Transaction_UpdateTransactionForRefundAll({
        invoice_number: params.invoice_number,
        items_transaction_status: Transaction_Status_Enum_Enum.ReturnAll,
        main_transaction_status: Transaction_Status_Enum_Enum.ReturnAll,
        return_reason: params.return_reason,
        karyawan_name: params.karyawan_name,
      })
    );
    if (errRefund || !resRefund) {
      console.log(
        "🚀 ~ file: Transaction_ReturnTransaction.ts ~ line 43 ~ errRefund",
        errRefund
      );
      const out: Transaction_ReturnTransactionOutput = {
        ...defaultOutput,
        errorMessage: errRefund.message,
      };
      return res.send(out);
    }
    console.log(
      "🚀 ~ file: Transaction_ReturnTransaction.ts ~ line 43 ~ resRefund",
      resRefund
    );

    const out: Transaction_ReturnTransactionOutput = {
      ...defaultOutput,
      isError: false,
      total_transaction_compare: "minus" as TotalTransactionCompare,
      cash_change: foundTransact?.total_transaction,
      cash_in_amount: 0,
      total_transaction: 0,
    };
    return res.send(out);
  } else if (
    params.return_type ===
    (Transaction_Return_Type.ReturnPart as unknown as TransactionReturnType)
  ) {
    const updateItemsToReturned = await Promise.all(
      params.returned_items.map(async (item) => {
        const subtotal =
          item?.selling_price * item.returned_qty -
          (item.selling_price * item.returned_qty * item.discount) / 100;
        const profit = subtotal - item.capital_price * item.returned_qty;
        return sdk.Transaction_UpdateTransactionItemByPK({
          transaction_item_id: item.transaction_item_id,
          transaction_item: {
            transaction_status: Transaction_Status_Enum_Enum.ReturnAll,
            purchase_qty: item.returned_qty,
            subtotal,
            profit,
          },
        });
      })
    );

    console.log(
      "🚀 ~ file: Transaction_ReturnTransaction.ts ~ line 96 ~ updateToReturned",
      updateItemsToReturned
    );

    if (params.added_items.length > 0) {
      const transaction_items: Transaction_Items_Insert_Input[] =
        params.added_items.map((item) => {
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
        });
      const [err, res] = await to(
        sdk.Transaction_InsertTransactionItems({
          objects: transaction_items,
        })
      );
      if (err || !res) {
        console.log(
          "🚀 ~ file: Transaction_ReturnTransaction.ts ~ line 133 ~ err",
          err
        );
      }
    }

    const [errUpdateInvMain, resUpdateInvMain] = await to(
      sdk.Transaction_UpdateMainTransaction({
        invoice_number: params.invoice_number,
        main_transaction: {
          transaction_status: Transaction_Status_Enum_Enum.ReturnPart,
          return_reason: params.return_reason,
          total_transaction: params.total_transaction,
          cash_in_amount: params.total_transaction,
          cash_change:
            params.total_transaction > foundTransact.total_transaction
              ? params.cash_in_amount - params.total_transaction
              : 0,
          payment_type: Transaction_Payment_Type_Enum_Enum.Cash,
          karyawan_name: params.karyawan_name,
        },
      })
    );
    if (errUpdateInvMain || !resUpdateInvMain) {
      console.log(
        "🚀 ~ file: Transaction_ReturnTransaction.ts ~ line 86 ~ errUpdateInvMain",
        errUpdateInvMain
      );
      const out: Transaction_ReturnTransactionOutput = {
        ...defaultOutput,
        errorMessage: errUpdateInvMain.message,
      };
      return res.send(out);
    }

    const out: Transaction_ReturnTransactionOutput = {
      ...defaultOutput,
      isError: false,
      total_transaction_compare:
        params.total_transaction > foundTransact.total_transaction
          ? ("plus" as TotalTransactionCompare)
          : ("minus" as TotalTransactionCompare),
      cash_change:
        params.total_transaction > foundTransact.total_transaction
          ? params.cash_in_amount - params.total_transaction
          : foundTransact.total_transaction - params.total_transaction,
    };
    return res.send(out);
  } else {
    const out: Transaction_ReturnTransactionOutput = {
      ...defaultOutput,
      errorMessage: "Refund type not found in the TransactionRefundType!",
    };
    return res.send(out);
  }
};
