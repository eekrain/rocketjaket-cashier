import { Request, Response } from "express";
import { Transaction_Status_Enum_Enum } from "../graphql/gql-generated";
import { getAdminSdk } from "../utils";
import to from "await-to-js";

export default async (req: Request, res: Response) => {
  const params: Transaction_RefundTransactionArgs = req.body.input;
  console.log(
    "🚀 ~ file: Transaction_RefundTransaction.ts ~ line 8 ~ params",
    params
  );

  const defaultOutput: Transaction_RefundTransactionOutput = {
    invoice_number: params.invoice_number,
    isError: true,
    errorMessage: "",
  };
  const sdk = getAdminSdk();

  const [errFoundTransact, foundTransact] = await to(
    sdk.Transaction_GetTransactionByPK({
      invoice_number: params.invoice_number,
    })
  );

  if (errFoundTransact || !foundTransact) {
    console.log(
      "🚀 ~ file: Transaction_RefundTransaction.ts ~ line 21 ~ errFoundTransact",
      errFoundTransact
    );
    const out: Transaction_RefundTransactionOutput = {
      ...defaultOutput,
      errorMessage: errFoundTransact.message,
    };
    res.send(out);
  }

  if (params.refund_type === "refund_all") {
    const [errRefund, resRefund] = await to(
      sdk.Transaction_UpdateTransactionForRefund({
        invoice_number: params.invoice_number,
        items_transaction_status: Transaction_Status_Enum_Enum.Refund,
        main_transaction_status: Transaction_Status_Enum_Enum.Refund,
        refund_reason: params.refund_reason,
      })
    );
    if (errRefund || !resRefund) {
      console.log(
        "🚀 ~ file: Transaction_RefundTransaction.ts ~ line 43 ~ errRefund",
        errRefund
      );
      const out: Transaction_RefundTransactionOutput = {
        ...defaultOutput,
        errorMessage: errRefund.message,
      };
      res.send(out);
    }
    console.log(
      "🚀 ~ file: Transaction_RefundTransaction.ts ~ line 43 ~ resRefund",
      resRefund
    );

    const out: Transaction_RefundTransactionOutput = {
      ...defaultOutput,
      isError: false,
    };
    res.send(out);
  } else {
    const out: Transaction_RefundTransactionOutput = {
      ...defaultOutput,
      errorMessage: "Refund type not found in the TransactionRefundType!",
    };
    res.send(out);
  }
};
