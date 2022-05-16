type Maybe<T> = T | null;

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

type Query = {
  Whatsapp_GetAuthStatus?: Maybe<Whatsapp_GetAuthStatusOutput>;
};

type Mutation = {
  User_SignUp?: Maybe<User_SignUpOutput>;
  Whatsapp_SignOut?: Maybe<Whatsapp_SignOutOutput>;
};

type Whatsapp_GetAuthStatusArgs = {};

type User_SignUpArgs = {
  email: string;
  password: string;
  displayName?: Maybe<string>;
  defaultRole: string;
  defaultStore?: Maybe<number>;
};

type Whatsapp_SignOutArgs = {};
