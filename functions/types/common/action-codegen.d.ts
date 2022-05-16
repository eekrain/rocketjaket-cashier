type Maybe<T> = T | null;

type uuid = string;

enum TransactionStatusEnum {
  failed = "failed",
  refund = "refund",
  refund_part = "refund_part",
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
};

type BulkUpdateVariantsMetadataOutput = {
  variant_title?: Maybe<string>;
  is_any_update?: Maybe<boolean>;
};

type Cashier_CreateTransactionOutput = {
  isError: boolean;
  errorMessage?: Maybe<string>;
  invoice_number?: Maybe<string>;
  total_transaction: number;
  cash_change?: Maybe<number>;
  cash_in_amount: number;
  payment_type: string;
  store_id: number;
  transaction_status: `${TransactionStatusEnum}`;
};

type Query = {
  Whatsapp_GetAuthStatus?: Maybe<Whatsapp_GetAuthStatusOutput>;
};

type Mutation = {
  Cashier_CreateTransaction?: Maybe<Cashier_CreateTransactionOutput>;
  User_SignUp?: Maybe<User_SignUpOutput>;
  Whatsapp_SignOut?: Maybe<Whatsapp_SignOutOutput>;
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

type User_SignUpArgs = {
  email: string;
  password: string;
  displayName?: Maybe<string>;
  defaultRole: string;
  defaultStore?: Maybe<number>;
};

type Whatsapp_SignOutArgs = {};
