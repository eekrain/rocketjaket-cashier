import { Request, Response } from "express";
import axios from "axios";
import to from "await-to-js";
import {
  Customers_Bool_Exp,
  InputMaybe,
  Transaction_GetTransactionByPkQuery,
  Transaction_Receipt_Type_Enum_Enum,
  Transaction_Status_Enum_Enum,
} from "../graphql/gql-generated";
import { getAdminSdk } from "../utils";
import { myNumberFormat } from "../utils/myFormat";

interface Customer {
  id: string;
  name?: string | null;
  email?: string | null;
  phone_number?: string | null;
  isError: boolean;
  errorMessage?: string | null;
}

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

  const customer = await getCustomer(params);

  if (customer.isError) {
    const out: Transaction_SendReceiptOutput = {
      ...defaultOutput,
      errorMessage: customer.errorMessage,
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

  if (sendReceipt.isError) {
    const out: Transaction_SendReceiptOutput = {
      ...defaultOutput,
      errorMessage: sendReceipt.errorMessage,
    };
    return res.send(out);
  }

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
    isError: false,
    errorMessage: "",
  };

  return res.send(out);
};

const getCustomer = async (
  params: Transaction_SendReceiptArgs
): Promise<Customer> => {
  const sdk = getAdminSdk();

  const customerSearch:
    | InputMaybe<Customers_Bool_Exp | Customers_Bool_Exp[]>
    | undefined = [];
  if (params.customer?.email) {
    customerSearch.push({
      email: {
        _eq: params.customer.email,
      },
    });
  }
  if (params.customer?.phone_number) {
    params.customer.phone_number =
      params.customer.phone_number.charAt(0) === "0"
        ? `62${params.customer.phone_number.slice(1)}`
        : `62${params.customer.phone_number}`;
    customerSearch.push({
      phone_number: { _eq: params.customer.phone_number },
    });
  }
  if (params.customer?.id) {
    customerSearch.push({
      id: {
        _eq: params.customer?.id,
      },
    });
  }

  const [errGet, resGet] = await to(
    sdk.Customer_GetCustomerByEmailOrPhone({
      _or: customerSearch,
    })
  );
  if (errGet || !resGet)
    return { isError: true, errorMessage: errGet.message, id: "asd" };

  const customerFound = resGet.data.customers?.[0];

  const [errNewCustomer, resNewCustomer] = await to(
    sdk.Customer_CreateCustomer({
      customer: {
        id: customerFound?.id,
        name: params.customer.name,
        email: params.customer.email,
        phone_number: params.customer.phone_number,
      },
    })
  );
  const newCustomer = resNewCustomer?.data?.insert_customers_one;
  if (errNewCustomer || !resNewCustomer || !newCustomer?.id) {
    return {
      isError: true,
      errorMessage: errNewCustomer?.message,
      id: "asd",
    };
  }
  return {
    id: newCustomer.id,
    name: newCustomer.name,
    email: newCustomer.email,
    phone_number: newCustomer.phone_number,
    isError: false,
  };
};

interface MyWASendMessageResponse {
  isError: boolean;
  errorMessage?: string | null;
}

const sendWhatsappMessage = async (
  params: Transaction_SendReceiptArgs,
  customer: Customer,
  invoice: Transaction_GetTransactionByPkQuery
): Promise<MyWASendMessageResponse> => {
  let isError = true;
  let errorMessage: string = "";
  if (customer?.phone_number) {
    const message = {
      success: `Terimakasih ${
        customer.name
      } telah berbelanja di Rocketjaket!\nInvoice: ${
        params.invoice_number
      }\nItem dibeli:\n${invoice.transaction_by_pk?.transaction_items
        .map((item) => {
          return `${item.product_name}(x${
            item.purchase_qty
          }): ${myNumberFormat.rp(item.subtotal)}`;
        })
        .join("\n")}\nTotal: ${myNumberFormat.rp(
        invoice.transaction_by_pk?.total_transaction
      )}`,
      refundAll: `Transaksi anda dengan nomor invoice ${
        params.invoice_number
      } telah di-refund.\nTotal dana yang di-refund sebesar ${myNumberFormat.rp(
        invoice.transaction_by_pk?.total_transaction
      )}.\nMohon maaf atas ketidaknyamanan.`,
    };
    // const tes
    const [errWa, resWa] = await to(
      axios.post<MyWASendMessageResponse>(
        `${process.env.WHATSAPP_API_URL}/chat/sendmessage/${params.customer?.phone_number}`,
        {
          message:
            invoice.transaction_by_pk?.transaction_status ===
            Transaction_Status_Enum_Enum.Success
              ? message.success
              : invoice.transaction_by_pk?.transaction_status ===
                Transaction_Status_Enum_Enum.Refund
              ? message.refundAll
              : "",
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
