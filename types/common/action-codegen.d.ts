type Maybe<T> = T | null;

type uuid = string;

type timestamptz = string;

enum TransactionStatusEnum {
  failed = "failed",
  return_all = "return_all",
  return_part = "return_part",
  success = "success",
}

enum TransactionPaymentTypeEnum {
  CASH = "CASH",
  EDC_BCA = "EDC_BCA",
  EDC_BRI = "EDC_BRI",
  EDC_MANDIRI = "EDC_MANDIRI",
  EWALLET_GOPAY = "EWALLET_GOPAY",
  EWALLET_LINKAJA = "EWALLET_LINKAJA",
  EWALLET_SHOPEEPAY = "EWALLET_SHOPEEPAY",
}

enum TransactionReceiptTypeEnum {
  email = "email",
  whatsapp = "whatsapp",
}

enum TransactionReturnType {
  return_all = "return_all",
  return_part = "return_part",
}

enum TotalTransactionCompare {
  plus = "plus",
  minus = "minus",
}

enum TimeMode {
  daily = "daily",
  weekly = "weekly",
  monthly = "monthly",
}

type InventoryVariantMetadataInsertInput = {
  variant_title?: Maybe<string>;
  variant_value?: Maybe<string>;
};

type InventoryVariantMetadataNeedUpdateInput = {
  id: number;
  variant_value?: Maybe<string>;
};

type InventoryVariantsMetadaUpsertInput = {
  id?: Maybe<number>;
  variant_title?: Maybe<string>;
  variant_value?: Maybe<string>;
};

type transaction_items_input = {
  product_inventory_id: uuid;
  product_name_concise: string;
  capital_price: number;
  selling_price: number;
  discount: number;
  purchace_qty: number;
  inventory_product_updated_at: string;
  product_updated_at: string;
};

type CustomerInput = {
  id?: Maybe<uuid>;
  email?: Maybe<string>;
  name?: Maybe<string>;
  phone_number?: Maybe<string>;
};

type Transaction_ReturnedItem = {
  transaction_item_id: string;
  capital_price: number;
  selling_price: number;
  discount: number;
  returned_qty: number;
};

type User_SignUpOutput = {
  email?: Maybe<string>;
  displayName?: Maybe<string>;
  isError: boolean;
  errorMessage?: Maybe<string>;
};

type Whatsapp_GetAuthStatusOutput = {
  is_authenticated: boolean;
  is_qr_ready: boolean;
  is_client_ready: boolean;
  qrcode?: Maybe<string>;
  client_state?: Maybe<string>;
  client_name?: Maybe<string>;
  client_phone_number?: Maybe<string>;
  client_platform?: Maybe<string>;
  isError: boolean;
  errorMessage?: Maybe<string>;
};

type Whatsapp_SignOutOutput = {
  is_success: boolean;
  errorMessage?: Maybe<string>;
};

type BulkUpdateVariantsMetadataOutput = {
  variant_title?: Maybe<string>;
  is_any_update?: Maybe<boolean>;
};

type Cashier_CreateTransactionOutput = {
  isError: boolean;
  errorMessage?: Maybe<string>;
  invoice_number?: Maybe<string>;
  total_transaction?: Maybe<number>;
  cash_change?: Maybe<number>;
  cash_in_amount?: Maybe<number>;
  payment_type?: Maybe<string>;
  store_id?: Maybe<number>;
  transaction_status: TransactionStatusEnum;
};

type sendReceiptOutput = {
  email?: Maybe<string>;
  id: uuid;
  name?: Maybe<string>;
  phone_number?: Maybe<string>;
  created_at: timestamptz;
  is_sent: boolean;
};

type Transaction_SendReceiptOutput = {
  email?: Maybe<string>;
  id?: Maybe<uuid>;
  name?: Maybe<string>;
  phone_number?: Maybe<string>;
  created_at: timestamptz;
  isError?: Maybe<boolean>;
  errorMessage?: Maybe<string>;
};

type Transaction_RefundTransactionOutput = {
  invoice_number?: Maybe<string>;
  isError: boolean;
  errorMessage?: Maybe<string>;
  total_transaction?: Maybe<number>;
  cash_in_amount?: Maybe<number>;
  cash_change?: Maybe<number>;
  return_type?: Maybe<TransactionReturnType>;
  total_transaction_compare?: Maybe<TotalTransactionCompare>;
};

type Transaction_ReturnTransactionOutput = {
  invoice_number?: Maybe<string>;
  isError: boolean;
  errorMessage?: Maybe<string>;
  total_transaction?: Maybe<number>;
  cash_in_amount?: Maybe<number>;
  cash_change?: Maybe<number>;
  return_type?: Maybe<TransactionReturnType>;
  total_transaction_compare?: Maybe<TotalTransactionCompare>;
};

type Dashboard_GetDashboardDataOutput = {
  isCanBackwards: boolean;
  isCanForwards: boolean;
  firstTransactionDate: string;
  totalCustomer: number;
  paymentTypePercentage: Array<PaymentTypePercentage>;
  totalOmset: number;
  totalProfit: number;
  totalOperasional: number;
  totalSuccessTransaction: number;
  totalReturnedTransaction: number;
  totalItemSold: number;
  totalItemReturned: number;
  omsetChart: NumberChartData;
  profitChart: NumberChartData;
  operasionalChart: NumberChartData;
  itemSoldChart: NumberChartData;
  stores: Array<number>;
};

type PaymentTypePercentage = {
  name: string;
  total_transaksi: number;
};

type NumberChartData = {
  labels: Array<string>;
  datasets: Array<NumberChartDatasets>;
};

type ChartPerStore = {
  store_name: string;
  data: NumberChartData;
};

type NumberChartDatasets = {
  store_id: number;
  data: Array<number>;
};

type Query = {
  Dashboard_GetDashboardData?: Maybe<Dashboard_GetDashboardDataOutput>;
  Whatsapp_GetAuthStatus?: Maybe<Whatsapp_GetAuthStatusOutput>;
};

type Mutation = {
  Cashier_CreateTransaction?: Maybe<Cashier_CreateTransactionOutput>;
  Transaction_ReturnTransaction?: Maybe<Transaction_ReturnTransactionOutput>;
  Transaction_SendReceipt?: Maybe<Transaction_SendReceiptOutput>;
  User_SignUp?: Maybe<User_SignUpOutput>;
  Whatsapp_SignOut?: Maybe<Whatsapp_SignOutOutput>;
};

type Dashboard_GetDashboardDataArgs = {
  startDate: string;
  untilDate: string;
  mode: TimeMode;
  stores: Array<number>;
};

type Whatsapp_GetAuthStatusArgs = {};

type Cashier_CreateTransactionArgs = {
  karyawan_name?: Maybe<string>;
  payment_type: TransactionPaymentTypeEnum;
  total_transaction: number;
  cash_in_amount: number;
  transaction_items: Array<transaction_items_input>;
  store_id: number;
};

type Transaction_ReturnTransactionArgs = {
  invoice_number: string;
  karyawan_name: string;
  return_type: TransactionReturnType;
  return_reason: string;
  total_transaction: number;
  cash_in_amount: number;
  returned_items: Array<Transaction_ReturnedItem>;
  added_items: Array<transaction_items_input>;
};

type Transaction_SendReceiptArgs = {
  customer: CustomerInput;
  receipt_type: TransactionReceiptTypeEnum;
  invoice_number: string;
};

type User_SignUpArgs = {
  email: string;
  password: string;
  displayName?: Maybe<string>;
  defaultRole: string;
  defaultStore?: Maybe<number>;
};

type Whatsapp_SignOutArgs = {};
