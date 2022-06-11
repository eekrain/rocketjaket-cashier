import { Request, Response } from "express";
import axios from "axios";
import to from "await-to-js";
import {
  Customer_CreateCustomerMutation,
  Transaction_GetTransactionByPkQuery,
  Transaction_Receipt_Type_Enum_Enum,
  Transaction_Status_Enum_Enum,
} from "../../graphql/gql-generated";
import { getAdminSdk } from "../../utils";
import { myNumberFormat } from "../../utils/myFormat";

export default async (req: Request, res: Response) => {
  const params: Transaction_SendReceiptArgs = req.body.input;
  console.log(
    "🚀 ~ file: Transaction_SendReceipt.ts ~ line 7 ~ params",
    params
  );

  const defaultOutput: Transaction_SendReceiptOutput = {
    created_at: new Date().toISOString(),
    id: null,
    isError: true,
    email: null,
    name: null,
    phone_number: null,
    errorMessage: "",
  };

  const sdk = getAdminSdk();

  const [errNewCustomer, resNewCustomer] = await to(
    sdk.Customer_CreateCustomer({
      customer: {
        name: params.customer.name,
        email: params.customer.email,
        phone_number: params.customer.phone_number,
      },
    })
  );
  const customer = resNewCustomer?.data.insert_customers_one;

  if (errNewCustomer || !customer) {
    const out: Transaction_SendReceiptOutput = {
      ...defaultOutput,
      errorMessage: errNewCustomer?.message,
    };
    return res.send(out);
  }
  console.log(
    "🚀 ~ file: Transaction_SendReceipt.ts ~ line 43 ~ customer",
    customer
  );

  const [errInv, foundInv] = await to(
    sdk.Transaction_GetTransactionByPK({
      invoice_number: params.invoice_number,
    })
  );
  if (errInv || !foundInv) {
    console.log(
      "🚀 ~ file: Transaction_SendReceipt.ts ~ line 41 ~ errInv",
      errInv
    );
    const out: Transaction_SendReceiptOutput = {
      ...defaultOutput,
      errorMessage: errInv.message,
    };
    return res.send(out);
  }

  const sendReceipt = await sendWhatsappMessage(
    params,
    customer,
    foundInv.data
  );

  const [errReceipt, resReceipt] = await to(
    sdk.Transaction_CreateTransactionReceipt({
      receipt: {
        is_sent: !sendReceipt.isError,
        receipt_type:
          params.receipt_type as unknown as Transaction_Receipt_Type_Enum_Enum,
        customer_id: customer.id,
        transaction_invoice_number: params.invoice_number,
      },
    })
  );

  if (errReceipt || !resReceipt) {
    console.log(
      "🚀 ~ file: Transaction_SendReceipt.ts ~ line 41 ~ errInv",
      errInv
    );
    const out: Transaction_SendReceiptOutput = {
      ...defaultOutput,
      errorMessage: errReceipt.message,
    };
    return res.send(out);
  }

  const receipt = resReceipt.data.insert_transaction_receipts_one;
  const out: Transaction_SendReceiptOutput = {
    id: receipt?.id,
    created_at: receipt?.created_at,
    name: customer.name,
    email: customer.email,
    phone_number: customer.phone_number,
    isError: sendReceipt.isError,
    errorMessage: sendReceipt.errorMessage,
  };

  return res.send(out);
};

interface MyWASendMessageResponse {
  isError: boolean;
  errorMessage?: string | null;
}

const sendWhatsappMessage = async (
  params: Transaction_SendReceiptArgs,
  customer: Customer_CreateCustomerMutation["insert_customers_one"],
  invoice: Transaction_GetTransactionByPkQuery
): Promise<MyWASendMessageResponse> => {
  let isError = true;
  let errorMessage: string = "";
  if (customer?.phone_number) {
    let message = "";
    const item_bought = invoice.transaction_by_pk?.transaction_items
      .filter(
        (item) =>
          item.transaction_status === Transaction_Status_Enum_Enum.Success
      )
      .map((item) => {
        return `${item.product_name}(x${
          item.purchase_qty
        }): ${myNumberFormat.rp(item.subtotal)}`;
      })
      .join("\n");
    const item_refunded = invoice.transaction_by_pk?.transaction_items
      .filter(
        (item) =>
          item.transaction_status === Transaction_Status_Enum_Enum.ReturnAll ||
          item.transaction_status === Transaction_Status_Enum_Enum.ReturnPart
      )
      .map((item) => {
        return `${item.product_name}(x${
          item.purchase_qty
        }): - ${myNumberFormat.rp(item.subtotal)}`;
      })
      .join("\n");
    if (
      invoice.transaction_by_pk?.transaction_status ===
      Transaction_Status_Enum_Enum.ReturnAll
    ) {
      message = `Transaksi anda dengan nomor invoice ${
        params.invoice_number
      } telah di-refund.\nTotal dana yang di-refund sebesar ${myNumberFormat.rp(
        invoice.transaction_by_pk?.total_transaction
      )}.\nMohon maaf atas ketidaknyamanan-nya.`;
    } else if (
      invoice.transaction_by_pk?.transaction_status ===
      Transaction_Status_Enum_Enum.ReturnPart
    ) {
      message = `Terimakasih ${
        customer.name
      } telah berbelanja di Rocketjaket!\nInvoice: ${
        params.invoice_number
      }\nItem dibeli:\n${item_bought}\n
        Item di-refund:\n${item_refunded}\n
        Total: ${myNumberFormat.rp(
          invoice.transaction_by_pk?.total_transaction
        )}`;
    } else {
      message = `Terimakasih ${
        customer.name
      } telah berbelanja di Rocketjaket!\nInvoice: ${
        params.invoice_number
      }\nItem dibeli:\n${item_bought}\nTotal: ${myNumberFormat.rp(
        invoice.transaction_by_pk?.total_transaction
      )}`;
    }
    const [errWa, resWa] = await to(
      axios.post<MyWASendMessageResponse>(
        `${process.env.WHATSAPP_API_URL}/chat/sendmessage/62${params.customer?.phone_number}`,
        {
          message,
        },
        {
          headers: {
            "x-mywa-secret": process.env.WHATSAPP_API_SECRET || "",
          },
        }
      )
    );
    if (errWa || !resWa) {
      console.log(
        "🚀 ~ file: Transaction_SendReceipt.ts ~ line 178 ~ errWa",
        errWa
      );
      isError = true;
      errorMessage = errWa.message;
    } else {
      isError = resWa.data.isError;
      errorMessage = resWa.data.errorMessage || "";
    }
  }

  return { isError, errorMessage };
};
