import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  citext: any;
  jsonb: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

export type BulkUpdateVariantsMetadataOutput = {
  __typename?: 'BulkUpdateVariantsMetadataOutput';
  is_any_update?: Maybe<Scalars['Boolean']>;
  variant_title?: Maybe<Scalars['String']>;
};

export type CustomerInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type InventoryVariantMetadataInsertInput = {
  variant_title?: Maybe<Scalars['String']>;
  variant_value?: Maybe<Scalars['String']>;
};

export type InventoryVariantMetadataNeedUpdateInput = {
  id: Scalars['Int'];
  variant_value?: Maybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

export enum TransactionPaymentTypeEnum {
  /** Cash */
  Cash = 'CASH',
  /** BCA */
  EdcBca = 'EDC_BCA',
  /** BRI */
  EdcBri = 'EDC_BRI',
  /** MANDIRI */
  EdcMandiri = 'EDC_MANDIRI',
  /** GOPAY */
  EwalletGopay = 'EWALLET_GOPAY',
  /** LINKAJA */
  EwalletLinkaja = 'EWALLET_LINKAJA',
  /** SHOPEEPAY */
  EwalletShopeepay = 'EWALLET_SHOPEEPAY'
}

export enum TransactionReceiptTypeEnum {
  /** Email */
  Email = 'email',
  /** Whatsapp */
  Whatsapp = 'whatsapp'
}

export enum TransactionStatusEnum {
  /** Gagal */
  Failed = 'failed',
  /** Refund */
  Refund = 'refund',
  /** Refund Sebagian */
  RefundPart = 'refund_part',
  /** Sukses */
  Success = 'success'
}

/** columns and relationships of "auth.account_providers" */
export type Auth_Account_Providers = {
  __typename?: 'auth_account_providers';
  /** An object relationship */
  account: Auth_Accounts;
  account_id: Scalars['uuid'];
  auth_provider: Scalars['String'];
  auth_provider_unique_id: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  provider: Auth_Providers;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "auth.account_providers" */
export type Auth_Account_Providers_Aggregate = {
  __typename?: 'auth_account_providers_aggregate';
  aggregate?: Maybe<Auth_Account_Providers_Aggregate_Fields>;
  nodes: Array<Auth_Account_Providers>;
};

/** aggregate fields of "auth.account_providers" */
export type Auth_Account_Providers_Aggregate_Fields = {
  __typename?: 'auth_account_providers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_Account_Providers_Max_Fields>;
  min?: Maybe<Auth_Account_Providers_Min_Fields>;
};


/** aggregate fields of "auth.account_providers" */
export type Auth_Account_Providers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.account_providers" */
export type Auth_Account_Providers_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Auth_Account_Providers_Max_Order_By>;
  min?: Maybe<Auth_Account_Providers_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.account_providers" */
export type Auth_Account_Providers_Arr_Rel_Insert_Input = {
  data: Array<Auth_Account_Providers_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Auth_Account_Providers_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.account_providers". All fields are combined with a logical 'AND'. */
export type Auth_Account_Providers_Bool_Exp = {
  _and?: Maybe<Array<Auth_Account_Providers_Bool_Exp>>;
  _not?: Maybe<Auth_Account_Providers_Bool_Exp>;
  _or?: Maybe<Array<Auth_Account_Providers_Bool_Exp>>;
  account?: Maybe<Auth_Accounts_Bool_Exp>;
  account_id?: Maybe<Uuid_Comparison_Exp>;
  auth_provider?: Maybe<String_Comparison_Exp>;
  auth_provider_unique_id?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  provider?: Maybe<Auth_Providers_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.account_providers" */
export enum Auth_Account_Providers_Constraint {
  /** unique or primary key constraint */
  AccountProvidersAccountIdAuthProviderKey = 'account_providers_account_id_auth_provider_key',
  /** unique or primary key constraint */
  AccountProvidersAuthProviderAuthProviderUniqueIdKey = 'account_providers_auth_provider_auth_provider_unique_id_key',
  /** unique or primary key constraint */
  AccountProvidersPkey = 'account_providers_pkey'
}

/** input type for inserting data into table "auth.account_providers" */
export type Auth_Account_Providers_Insert_Input = {
  account?: Maybe<Auth_Accounts_Obj_Rel_Insert_Input>;
  account_id?: Maybe<Scalars['uuid']>;
  auth_provider?: Maybe<Scalars['String']>;
  auth_provider_unique_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  provider?: Maybe<Auth_Providers_Obj_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Auth_Account_Providers_Max_Fields = {
  __typename?: 'auth_account_providers_max_fields';
  account_id?: Maybe<Scalars['uuid']>;
  auth_provider?: Maybe<Scalars['String']>;
  auth_provider_unique_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "auth.account_providers" */
export type Auth_Account_Providers_Max_Order_By = {
  account_id?: Maybe<Order_By>;
  auth_provider?: Maybe<Order_By>;
  auth_provider_unique_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Account_Providers_Min_Fields = {
  __typename?: 'auth_account_providers_min_fields';
  account_id?: Maybe<Scalars['uuid']>;
  auth_provider?: Maybe<Scalars['String']>;
  auth_provider_unique_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "auth.account_providers" */
export type Auth_Account_Providers_Min_Order_By = {
  account_id?: Maybe<Order_By>;
  auth_provider?: Maybe<Order_By>;
  auth_provider_unique_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "auth.account_providers" */
export type Auth_Account_Providers_Mutation_Response = {
  __typename?: 'auth_account_providers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Account_Providers>;
};

/** on conflict condition type for table "auth.account_providers" */
export type Auth_Account_Providers_On_Conflict = {
  constraint: Auth_Account_Providers_Constraint;
  update_columns?: Array<Auth_Account_Providers_Update_Column>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.account_providers". */
export type Auth_Account_Providers_Order_By = {
  account?: Maybe<Auth_Accounts_Order_By>;
  account_id?: Maybe<Order_By>;
  auth_provider?: Maybe<Order_By>;
  auth_provider_unique_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  provider?: Maybe<Auth_Providers_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: auth_account_providers */
export type Auth_Account_Providers_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.account_providers" */
export enum Auth_Account_Providers_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  AuthProvider = 'auth_provider',
  /** column name */
  AuthProviderUniqueId = 'auth_provider_unique_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "auth.account_providers" */
export type Auth_Account_Providers_Set_Input = {
  account_id?: Maybe<Scalars['uuid']>;
  auth_provider?: Maybe<Scalars['String']>;
  auth_provider_unique_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "auth.account_providers" */
export enum Auth_Account_Providers_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  AuthProvider = 'auth_provider',
  /** column name */
  AuthProviderUniqueId = 'auth_provider_unique_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "auth.account_roles" */
export type Auth_Account_Roles = {
  __typename?: 'auth_account_roles';
  /** An object relationship */
  account: Auth_Accounts;
  account_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  is_custom?: Maybe<Scalars['Boolean']>;
  role: Scalars['String'];
  /** An object relationship */
  roleByRole: Auth_Roles;
};

/** aggregated selection of "auth.account_roles" */
export type Auth_Account_Roles_Aggregate = {
  __typename?: 'auth_account_roles_aggregate';
  aggregate?: Maybe<Auth_Account_Roles_Aggregate_Fields>;
  nodes: Array<Auth_Account_Roles>;
};

/** aggregate fields of "auth.account_roles" */
export type Auth_Account_Roles_Aggregate_Fields = {
  __typename?: 'auth_account_roles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_Account_Roles_Max_Fields>;
  min?: Maybe<Auth_Account_Roles_Min_Fields>;
};


/** aggregate fields of "auth.account_roles" */
export type Auth_Account_Roles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.account_roles" */
export type Auth_Account_Roles_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Auth_Account_Roles_Max_Order_By>;
  min?: Maybe<Auth_Account_Roles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.account_roles" */
export type Auth_Account_Roles_Arr_Rel_Insert_Input = {
  data: Array<Auth_Account_Roles_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Auth_Account_Roles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.account_roles". All fields are combined with a logical 'AND'. */
export type Auth_Account_Roles_Bool_Exp = {
  _and?: Maybe<Array<Auth_Account_Roles_Bool_Exp>>;
  _not?: Maybe<Auth_Account_Roles_Bool_Exp>;
  _or?: Maybe<Array<Auth_Account_Roles_Bool_Exp>>;
  account?: Maybe<Auth_Accounts_Bool_Exp>;
  account_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  is_custom?: Maybe<Boolean_Comparison_Exp>;
  role?: Maybe<String_Comparison_Exp>;
  roleByRole?: Maybe<Auth_Roles_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.account_roles" */
export enum Auth_Account_Roles_Constraint {
  /** unique or primary key constraint */
  AccountRolesPkey = 'account_roles_pkey',
  /** unique or primary key constraint */
  UserRolesAccountIdRoleKey = 'user_roles_account_id_role_key'
}

/** input type for inserting data into table "auth.account_roles" */
export type Auth_Account_Roles_Insert_Input = {
  account?: Maybe<Auth_Accounts_Obj_Rel_Insert_Input>;
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  is_custom?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['String']>;
  roleByRole?: Maybe<Auth_Roles_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Auth_Account_Roles_Max_Fields = {
  __typename?: 'auth_account_roles_max_fields';
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "auth.account_roles" */
export type Auth_Account_Roles_Max_Order_By = {
  account_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Account_Roles_Min_Fields = {
  __typename?: 'auth_account_roles_min_fields';
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "auth.account_roles" */
export type Auth_Account_Roles_Min_Order_By = {
  account_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
};

/** response of any mutation on the table "auth.account_roles" */
export type Auth_Account_Roles_Mutation_Response = {
  __typename?: 'auth_account_roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Account_Roles>;
};

/** on conflict condition type for table "auth.account_roles" */
export type Auth_Account_Roles_On_Conflict = {
  constraint: Auth_Account_Roles_Constraint;
  update_columns?: Array<Auth_Account_Roles_Update_Column>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.account_roles". */
export type Auth_Account_Roles_Order_By = {
  account?: Maybe<Auth_Accounts_Order_By>;
  account_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_custom?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  roleByRole?: Maybe<Auth_Roles_Order_By>;
};

/** primary key columns input for table: auth_account_roles */
export type Auth_Account_Roles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.account_roles" */
export enum Auth_Account_Roles_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsCustom = 'is_custom',
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "auth.account_roles" */
export type Auth_Account_Roles_Set_Input = {
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  is_custom?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['String']>;
};

/** update columns of table "auth.account_roles" */
export enum Auth_Account_Roles_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsCustom = 'is_custom',
  /** column name */
  Role = 'role'
}

/** columns and relationships of "auth.accounts" */
export type Auth_Accounts = {
  __typename?: 'auth_accounts';
  /** An array relationship */
  account_providers: Array<Auth_Account_Providers>;
  /** An aggregate relationship */
  account_providers_aggregate: Auth_Account_Providers_Aggregate;
  /** An array relationship */
  account_roles: Array<Auth_Account_Roles>;
  /** An aggregate relationship */
  account_roles_aggregate: Auth_Account_Roles_Aggregate;
  active: Scalars['Boolean'];
  created_at: Scalars['timestamptz'];
  custom_register_data?: Maybe<Scalars['jsonb']>;
  default_role: Scalars['String'];
  email?: Maybe<Scalars['citext']>;
  id: Scalars['uuid'];
  is_anonymous: Scalars['Boolean'];
  mfa_enabled: Scalars['Boolean'];
  new_email?: Maybe<Scalars['citext']>;
  otp_secret?: Maybe<Scalars['String']>;
  password_hash?: Maybe<Scalars['String']>;
  /** An array relationship */
  refresh_tokens: Array<Auth_Refresh_Tokens>;
  /** An aggregate relationship */
  refresh_tokens_aggregate: Auth_Refresh_Tokens_Aggregate;
  /** An object relationship */
  role: Auth_Roles;
  ticket: Scalars['uuid'];
  ticket_expires_at: Scalars['timestamptz'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsAccount_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsAccount_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsAccount_RolesArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsAccount_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsCustom_Register_DataArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsRefresh_TokensArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsRefresh_Tokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};

/** aggregated selection of "auth.accounts" */
export type Auth_Accounts_Aggregate = {
  __typename?: 'auth_accounts_aggregate';
  aggregate?: Maybe<Auth_Accounts_Aggregate_Fields>;
  nodes: Array<Auth_Accounts>;
};

/** aggregate fields of "auth.accounts" */
export type Auth_Accounts_Aggregate_Fields = {
  __typename?: 'auth_accounts_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_Accounts_Max_Fields>;
  min?: Maybe<Auth_Accounts_Min_Fields>;
};


/** aggregate fields of "auth.accounts" */
export type Auth_Accounts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Accounts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.accounts" */
export type Auth_Accounts_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Auth_Accounts_Max_Order_By>;
  min?: Maybe<Auth_Accounts_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Auth_Accounts_Append_Input = {
  custom_register_data?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "auth.accounts" */
export type Auth_Accounts_Arr_Rel_Insert_Input = {
  data: Array<Auth_Accounts_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Auth_Accounts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.accounts". All fields are combined with a logical 'AND'. */
export type Auth_Accounts_Bool_Exp = {
  _and?: Maybe<Array<Auth_Accounts_Bool_Exp>>;
  _not?: Maybe<Auth_Accounts_Bool_Exp>;
  _or?: Maybe<Array<Auth_Accounts_Bool_Exp>>;
  account_providers?: Maybe<Auth_Account_Providers_Bool_Exp>;
  account_roles?: Maybe<Auth_Account_Roles_Bool_Exp>;
  active?: Maybe<Boolean_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  custom_register_data?: Maybe<Jsonb_Comparison_Exp>;
  default_role?: Maybe<String_Comparison_Exp>;
  email?: Maybe<Citext_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  is_anonymous?: Maybe<Boolean_Comparison_Exp>;
  mfa_enabled?: Maybe<Boolean_Comparison_Exp>;
  new_email?: Maybe<Citext_Comparison_Exp>;
  otp_secret?: Maybe<String_Comparison_Exp>;
  password_hash?: Maybe<String_Comparison_Exp>;
  refresh_tokens?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
  role?: Maybe<Auth_Roles_Bool_Exp>;
  ticket?: Maybe<Uuid_Comparison_Exp>;
  ticket_expires_at?: Maybe<Timestamptz_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.accounts" */
export enum Auth_Accounts_Constraint {
  /** unique or primary key constraint */
  AccountsEmailKey = 'accounts_email_key',
  /** unique or primary key constraint */
  AccountsNewEmailKey = 'accounts_new_email_key',
  /** unique or primary key constraint */
  AccountsPkey = 'accounts_pkey',
  /** unique or primary key constraint */
  AccountsUserIdKey = 'accounts_user_id_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Auth_Accounts_Delete_At_Path_Input = {
  custom_register_data?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Auth_Accounts_Delete_Elem_Input = {
  custom_register_data?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Auth_Accounts_Delete_Key_Input = {
  custom_register_data?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.accounts" */
export type Auth_Accounts_Insert_Input = {
  account_providers?: Maybe<Auth_Account_Providers_Arr_Rel_Insert_Input>;
  account_roles?: Maybe<Auth_Account_Roles_Arr_Rel_Insert_Input>;
  active?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  custom_register_data?: Maybe<Scalars['jsonb']>;
  default_role?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  is_anonymous?: Maybe<Scalars['Boolean']>;
  mfa_enabled?: Maybe<Scalars['Boolean']>;
  new_email?: Maybe<Scalars['citext']>;
  otp_secret?: Maybe<Scalars['String']>;
  password_hash?: Maybe<Scalars['String']>;
  refresh_tokens?: Maybe<Auth_Refresh_Tokens_Arr_Rel_Insert_Input>;
  role?: Maybe<Auth_Roles_Obj_Rel_Insert_Input>;
  ticket?: Maybe<Scalars['uuid']>;
  ticket_expires_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Auth_Accounts_Max_Fields = {
  __typename?: 'auth_accounts_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  default_role?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  new_email?: Maybe<Scalars['citext']>;
  otp_secret?: Maybe<Scalars['String']>;
  password_hash?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['uuid']>;
  ticket_expires_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.accounts" */
export type Auth_Accounts_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  default_role?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  new_email?: Maybe<Order_By>;
  otp_secret?: Maybe<Order_By>;
  password_hash?: Maybe<Order_By>;
  ticket?: Maybe<Order_By>;
  ticket_expires_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Accounts_Min_Fields = {
  __typename?: 'auth_accounts_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  default_role?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  new_email?: Maybe<Scalars['citext']>;
  otp_secret?: Maybe<Scalars['String']>;
  password_hash?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['uuid']>;
  ticket_expires_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.accounts" */
export type Auth_Accounts_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  default_role?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  new_email?: Maybe<Order_By>;
  otp_secret?: Maybe<Order_By>;
  password_hash?: Maybe<Order_By>;
  ticket?: Maybe<Order_By>;
  ticket_expires_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "auth.accounts" */
export type Auth_Accounts_Mutation_Response = {
  __typename?: 'auth_accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Accounts>;
};

/** input type for inserting object relation for remote table "auth.accounts" */
export type Auth_Accounts_Obj_Rel_Insert_Input = {
  data: Auth_Accounts_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Auth_Accounts_On_Conflict>;
};

/** on conflict condition type for table "auth.accounts" */
export type Auth_Accounts_On_Conflict = {
  constraint: Auth_Accounts_Constraint;
  update_columns?: Array<Auth_Accounts_Update_Column>;
  where?: Maybe<Auth_Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.accounts". */
export type Auth_Accounts_Order_By = {
  account_providers_aggregate?: Maybe<Auth_Account_Providers_Aggregate_Order_By>;
  account_roles_aggregate?: Maybe<Auth_Account_Roles_Aggregate_Order_By>;
  active?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  custom_register_data?: Maybe<Order_By>;
  default_role?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_anonymous?: Maybe<Order_By>;
  mfa_enabled?: Maybe<Order_By>;
  new_email?: Maybe<Order_By>;
  otp_secret?: Maybe<Order_By>;
  password_hash?: Maybe<Order_By>;
  refresh_tokens_aggregate?: Maybe<Auth_Refresh_Tokens_Aggregate_Order_By>;
  role?: Maybe<Auth_Roles_Order_By>;
  ticket?: Maybe<Order_By>;
  ticket_expires_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: auth_accounts */
export type Auth_Accounts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Auth_Accounts_Prepend_Input = {
  custom_register_data?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "auth.accounts" */
export enum Auth_Accounts_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomRegisterData = 'custom_register_data',
  /** column name */
  DefaultRole = 'default_role',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'is_anonymous',
  /** column name */
  MfaEnabled = 'mfa_enabled',
  /** column name */
  NewEmail = 'new_email',
  /** column name */
  OtpSecret = 'otp_secret',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticket_expires_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "auth.accounts" */
export type Auth_Accounts_Set_Input = {
  active?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  custom_register_data?: Maybe<Scalars['jsonb']>;
  default_role?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  is_anonymous?: Maybe<Scalars['Boolean']>;
  mfa_enabled?: Maybe<Scalars['Boolean']>;
  new_email?: Maybe<Scalars['citext']>;
  otp_secret?: Maybe<Scalars['String']>;
  password_hash?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['uuid']>;
  ticket_expires_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "auth.accounts" */
export enum Auth_Accounts_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomRegisterData = 'custom_register_data',
  /** column name */
  DefaultRole = 'default_role',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'is_anonymous',
  /** column name */
  MfaEnabled = 'mfa_enabled',
  /** column name */
  NewEmail = 'new_email',
  /** column name */
  OtpSecret = 'otp_secret',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticket_expires_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "auth.providers" */
export type Auth_Providers = {
  __typename?: 'auth_providers';
  /** An array relationship */
  account_providers: Array<Auth_Account_Providers>;
  /** An aggregate relationship */
  account_providers_aggregate: Auth_Account_Providers_Aggregate;
  provider: Scalars['String'];
};


/** columns and relationships of "auth.providers" */
export type Auth_ProvidersAccount_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};


/** columns and relationships of "auth.providers" */
export type Auth_ProvidersAccount_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};

/** aggregated selection of "auth.providers" */
export type Auth_Providers_Aggregate = {
  __typename?: 'auth_providers_aggregate';
  aggregate?: Maybe<Auth_Providers_Aggregate_Fields>;
  nodes: Array<Auth_Providers>;
};

/** aggregate fields of "auth.providers" */
export type Auth_Providers_Aggregate_Fields = {
  __typename?: 'auth_providers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_Providers_Max_Fields>;
  min?: Maybe<Auth_Providers_Min_Fields>;
};


/** aggregate fields of "auth.providers" */
export type Auth_Providers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Providers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type Auth_Providers_Bool_Exp = {
  _and?: Maybe<Array<Auth_Providers_Bool_Exp>>;
  _not?: Maybe<Auth_Providers_Bool_Exp>;
  _or?: Maybe<Array<Auth_Providers_Bool_Exp>>;
  account_providers?: Maybe<Auth_Account_Providers_Bool_Exp>;
  provider?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.providers" */
export enum Auth_Providers_Constraint {
  /** unique or primary key constraint */
  ProvidersPkey = 'providers_pkey'
}

/** input type for inserting data into table "auth.providers" */
export type Auth_Providers_Insert_Input = {
  account_providers?: Maybe<Auth_Account_Providers_Arr_Rel_Insert_Input>;
  provider?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Auth_Providers_Max_Fields = {
  __typename?: 'auth_providers_max_fields';
  provider?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Auth_Providers_Min_Fields = {
  __typename?: 'auth_providers_min_fields';
  provider?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.providers" */
export type Auth_Providers_Mutation_Response = {
  __typename?: 'auth_providers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Providers>;
};

/** input type for inserting object relation for remote table "auth.providers" */
export type Auth_Providers_Obj_Rel_Insert_Input = {
  data: Auth_Providers_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Auth_Providers_On_Conflict>;
};

/** on conflict condition type for table "auth.providers" */
export type Auth_Providers_On_Conflict = {
  constraint: Auth_Providers_Constraint;
  update_columns?: Array<Auth_Providers_Update_Column>;
  where?: Maybe<Auth_Providers_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.providers". */
export type Auth_Providers_Order_By = {
  account_providers_aggregate?: Maybe<Auth_Account_Providers_Aggregate_Order_By>;
  provider?: Maybe<Order_By>;
};

/** primary key columns input for table: auth_providers */
export type Auth_Providers_Pk_Columns_Input = {
  provider: Scalars['String'];
};

/** select columns of table "auth.providers" */
export enum Auth_Providers_Select_Column {
  /** column name */
  Provider = 'provider'
}

/** input type for updating data in table "auth.providers" */
export type Auth_Providers_Set_Input = {
  provider?: Maybe<Scalars['String']>;
};

/** update columns of table "auth.providers" */
export enum Auth_Providers_Update_Column {
  /** column name */
  Provider = 'provider'
}

/** columns and relationships of "auth.refresh_tokens" */
export type Auth_Refresh_Tokens = {
  __typename?: 'auth_refresh_tokens';
  /** An object relationship */
  account: Auth_Accounts;
  account_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  expires_at: Scalars['timestamptz'];
  refresh_token: Scalars['uuid'];
};

/** aggregated selection of "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Aggregate = {
  __typename?: 'auth_refresh_tokens_aggregate';
  aggregate?: Maybe<Auth_Refresh_Tokens_Aggregate_Fields>;
  nodes: Array<Auth_Refresh_Tokens>;
};

/** aggregate fields of "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Aggregate_Fields = {
  __typename?: 'auth_refresh_tokens_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_Refresh_Tokens_Max_Fields>;
  min?: Maybe<Auth_Refresh_Tokens_Min_Fields>;
};


/** aggregate fields of "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Auth_Refresh_Tokens_Max_Order_By>;
  min?: Maybe<Auth_Refresh_Tokens_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Arr_Rel_Insert_Input = {
  data: Array<Auth_Refresh_Tokens_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Auth_Refresh_Tokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type Auth_Refresh_Tokens_Bool_Exp = {
  _and?: Maybe<Array<Auth_Refresh_Tokens_Bool_Exp>>;
  _not?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
  _or?: Maybe<Array<Auth_Refresh_Tokens_Bool_Exp>>;
  account?: Maybe<Auth_Accounts_Bool_Exp>;
  account_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  expires_at?: Maybe<Timestamptz_Comparison_Exp>;
  refresh_token?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum Auth_Refresh_Tokens_Constraint {
  /** unique or primary key constraint */
  RefreshTokensPkey = 'refresh_tokens_pkey'
}

/** input type for inserting data into table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Insert_Input = {
  account?: Maybe<Auth_Accounts_Obj_Rel_Insert_Input>;
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  refresh_token?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Auth_Refresh_Tokens_Max_Fields = {
  __typename?: 'auth_refresh_tokens_max_fields';
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  refresh_token?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Max_Order_By = {
  account_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  expires_at?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Refresh_Tokens_Min_Fields = {
  __typename?: 'auth_refresh_tokens_min_fields';
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  refresh_token?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Min_Order_By = {
  account_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  expires_at?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Mutation_Response = {
  __typename?: 'auth_refresh_tokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Refresh_Tokens>;
};

/** on conflict condition type for table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_On_Conflict = {
  constraint: Auth_Refresh_Tokens_Constraint;
  update_columns?: Array<Auth_Refresh_Tokens_Update_Column>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type Auth_Refresh_Tokens_Order_By = {
  account?: Maybe<Auth_Accounts_Order_By>;
  account_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  expires_at?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
};

/** primary key columns input for table: auth_refresh_tokens */
export type Auth_Refresh_Tokens_Pk_Columns_Input = {
  refresh_token: Scalars['uuid'];
};

/** select columns of table "auth.refresh_tokens" */
export enum Auth_Refresh_Tokens_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  RefreshToken = 'refresh_token'
}

/** input type for updating data in table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Set_Input = {
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  refresh_token?: Maybe<Scalars['uuid']>;
};

/** update columns of table "auth.refresh_tokens" */
export enum Auth_Refresh_Tokens_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  RefreshToken = 'refresh_token'
}

/** columns and relationships of "auth.roles" */
export type Auth_Roles = {
  __typename?: 'auth_roles';
  /** An array relationship */
  account_roles: Array<Auth_Account_Roles>;
  /** An aggregate relationship */
  account_roles_aggregate: Auth_Account_Roles_Aggregate;
  /** An array relationship */
  accounts: Array<Auth_Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Auth_Accounts_Aggregate;
  role: Scalars['String'];
};


/** columns and relationships of "auth.roles" */
export type Auth_RolesAccount_RolesArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


/** columns and relationships of "auth.roles" */
export type Auth_RolesAccount_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


/** columns and relationships of "auth.roles" */
export type Auth_RolesAccountsArgs = {
  distinct_on?: Maybe<Array<Auth_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Accounts_Order_By>>;
  where?: Maybe<Auth_Accounts_Bool_Exp>;
};


/** columns and relationships of "auth.roles" */
export type Auth_RolesAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Accounts_Order_By>>;
  where?: Maybe<Auth_Accounts_Bool_Exp>;
};

/** aggregated selection of "auth.roles" */
export type Auth_Roles_Aggregate = {
  __typename?: 'auth_roles_aggregate';
  aggregate?: Maybe<Auth_Roles_Aggregate_Fields>;
  nodes: Array<Auth_Roles>;
};

/** aggregate fields of "auth.roles" */
export type Auth_Roles_Aggregate_Fields = {
  __typename?: 'auth_roles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_Roles_Max_Fields>;
  min?: Maybe<Auth_Roles_Min_Fields>;
};


/** aggregate fields of "auth.roles" */
export type Auth_Roles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Roles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type Auth_Roles_Bool_Exp = {
  _and?: Maybe<Array<Auth_Roles_Bool_Exp>>;
  _not?: Maybe<Auth_Roles_Bool_Exp>;
  _or?: Maybe<Array<Auth_Roles_Bool_Exp>>;
  account_roles?: Maybe<Auth_Account_Roles_Bool_Exp>;
  accounts?: Maybe<Auth_Accounts_Bool_Exp>;
  role?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.roles" */
export enum Auth_Roles_Constraint {
  /** unique or primary key constraint */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "auth.roles" */
export type Auth_Roles_Insert_Input = {
  account_roles?: Maybe<Auth_Account_Roles_Arr_Rel_Insert_Input>;
  accounts?: Maybe<Auth_Accounts_Arr_Rel_Insert_Input>;
  role?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Auth_Roles_Max_Fields = {
  __typename?: 'auth_roles_max_fields';
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Auth_Roles_Min_Fields = {
  __typename?: 'auth_roles_min_fields';
  role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.roles" */
export type Auth_Roles_Mutation_Response = {
  __typename?: 'auth_roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Roles>;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type Auth_Roles_Obj_Rel_Insert_Input = {
  data: Auth_Roles_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Auth_Roles_On_Conflict>;
};

/** on conflict condition type for table "auth.roles" */
export type Auth_Roles_On_Conflict = {
  constraint: Auth_Roles_Constraint;
  update_columns?: Array<Auth_Roles_Update_Column>;
  where?: Maybe<Auth_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.roles". */
export type Auth_Roles_Order_By = {
  account_roles_aggregate?: Maybe<Auth_Account_Roles_Aggregate_Order_By>;
  accounts_aggregate?: Maybe<Auth_Accounts_Aggregate_Order_By>;
  role?: Maybe<Order_By>;
};

/** primary key columns input for table: auth_roles */
export type Auth_Roles_Pk_Columns_Input = {
  role: Scalars['String'];
};

/** select columns of table "auth.roles" */
export enum Auth_Roles_Select_Column {
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "auth.roles" */
export type Auth_Roles_Set_Input = {
  role?: Maybe<Scalars['String']>;
};

/** update columns of table "auth.roles" */
export enum Auth_Roles_Update_Column {
  /** column name */
  Role = 'role'
}

export type BulkUpdateInventoryProductOutput = {
  __typename?: 'bulkUpdateInventoryProductOutput';
  insert_inventory_product_variants_affected_rows?: Maybe<Scalars['Int']>;
  inventory_product_name?: Maybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: Maybe<Scalars['citext']>;
  _gt?: Maybe<Scalars['citext']>;
  _gte?: Maybe<Scalars['citext']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['citext']>;
  _in?: Maybe<Array<Scalars['citext']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['citext']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['citext']>;
  _lt?: Maybe<Scalars['citext']>;
  _lte?: Maybe<Scalars['citext']>;
  _neq?: Maybe<Scalars['citext']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['citext']>;
  _nin?: Maybe<Array<Scalars['citext']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['citext']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['citext']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['citext']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['citext']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['citext']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['citext']>;
};

export type CreateTransactionOutput = {
  __typename?: 'createTransactionOutput';
  cash_change?: Maybe<Scalars['Int']>;
  cash_in_amount: Scalars['Int'];
  invoice_number?: Maybe<Scalars['String']>;
  isOutOfSync?: Maybe<Scalars['Boolean']>;
  payment_type: Scalars['String'];
  store_id: Scalars['Int'];
  total_transaction: Scalars['Int'];
  transaction_status: TransactionStatusEnum;
};

export type GetWhatsappAuthStatusOutput = {
  __typename?: 'getWhatsappAuthStatusOutput';
  client_device_manufacturer?: Maybe<Scalars['String']>;
  client_device_model?: Maybe<Scalars['String']>;
  client_name?: Maybe<Scalars['String']>;
  client_phone_number?: Maybe<Scalars['String']>;
  client_platform?: Maybe<Scalars['String']>;
  client_state?: Maybe<Scalars['String']>;
  is_authenticated: Scalars['Boolean'];
  qr_code?: Maybe<Scalars['String']>;
};

export type Insert_Inventory_Product_Variants = {
  inventory_product_id?: Maybe<Scalars['uuid']>;
  inventory_variant_metadata_id?: Maybe<Scalars['Int']>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  bulkUpdateInventoryProduct?: Maybe<BulkUpdateInventoryProductOutput>;
  bulkUpdateVariantsMetadata?: Maybe<BulkUpdateVariantsMetadataOutput>;
  createTransaction?: Maybe<CreateTransactionOutput>;
  /** delete data from the table: "auth.account_providers" */
  delete_auth_account_providers?: Maybe<Auth_Account_Providers_Mutation_Response>;
  /** delete single row from the table: "auth.account_providers" */
  delete_auth_account_providers_by_pk?: Maybe<Auth_Account_Providers>;
  /** delete data from the table: "auth.account_roles" */
  delete_auth_account_roles?: Maybe<Auth_Account_Roles_Mutation_Response>;
  /** delete single row from the table: "auth.account_roles" */
  delete_auth_account_roles_by_pk?: Maybe<Auth_Account_Roles>;
  /** delete data from the table: "auth.accounts" */
  delete_auth_accounts?: Maybe<Auth_Accounts_Mutation_Response>;
  /** delete single row from the table: "auth.accounts" */
  delete_auth_accounts_by_pk?: Maybe<Auth_Accounts>;
  /** delete data from the table: "auth.providers" */
  delete_auth_providers?: Maybe<Auth_Providers_Mutation_Response>;
  /** delete single row from the table: "auth.providers" */
  delete_auth_providers_by_pk?: Maybe<Auth_Providers>;
  /** delete data from the table: "auth.refresh_tokens" */
  delete_auth_refresh_tokens?: Maybe<Auth_Refresh_Tokens_Mutation_Response>;
  /** delete single row from the table: "auth.refresh_tokens" */
  delete_auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>;
  /** delete data from the table: "auth.roles" */
  delete_auth_roles?: Maybe<Auth_Roles_Mutation_Response>;
  /** delete single row from the table: "auth.roles" */
  delete_auth_roles_by_pk?: Maybe<Auth_Roles>;
  /** delete data from the table: "rocketjaket.customer" */
  delete_rocketjaket_customer?: Maybe<Rocketjaket_Customer_Mutation_Response>;
  /** delete single row from the table: "rocketjaket.customer" */
  delete_rocketjaket_customer_by_pk?: Maybe<Rocketjaket_Customer>;
  /** delete data from the table: "rocketjaket.inventory_product" */
  delete_rocketjaket_inventory_product?: Maybe<Rocketjaket_Inventory_Product_Mutation_Response>;
  /** delete single row from the table: "rocketjaket.inventory_product" */
  delete_rocketjaket_inventory_product_by_pk?: Maybe<Rocketjaket_Inventory_Product>;
  /** delete data from the table: "rocketjaket.inventory_product_variant" */
  delete_rocketjaket_inventory_product_variant?: Maybe<Rocketjaket_Inventory_Product_Variant_Mutation_Response>;
  /** delete single row from the table: "rocketjaket.inventory_product_variant" */
  delete_rocketjaket_inventory_product_variant_by_pk?: Maybe<Rocketjaket_Inventory_Product_Variant>;
  /** delete data from the table: "rocketjaket.inventory_variant_metadata" */
  delete_rocketjaket_inventory_variant_metadata?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Mutation_Response>;
  /** delete single row from the table: "rocketjaket.inventory_variant_metadata" */
  delete_rocketjaket_inventory_variant_metadata_by_pk?: Maybe<Rocketjaket_Inventory_Variant_Metadata>;
  /** delete data from the table: "rocketjaket.notification" */
  delete_rocketjaket_notification?: Maybe<Rocketjaket_Notification_Mutation_Response>;
  /** delete single row from the table: "rocketjaket.notification" */
  delete_rocketjaket_notification_by_pk?: Maybe<Rocketjaket_Notification>;
  /** delete data from the table: "rocketjaket.product" */
  delete_rocketjaket_product?: Maybe<Rocketjaket_Product_Mutation_Response>;
  /** delete single row from the table: "rocketjaket.product" */
  delete_rocketjaket_product_by_pk?: Maybe<Rocketjaket_Product>;
  /** delete data from the table: "rocketjaket.product_category" */
  delete_rocketjaket_product_category?: Maybe<Rocketjaket_Product_Category_Mutation_Response>;
  /** delete single row from the table: "rocketjaket.product_category" */
  delete_rocketjaket_product_category_by_pk?: Maybe<Rocketjaket_Product_Category>;
  /** delete data from the table: "rocketjaket.store" */
  delete_rocketjaket_store?: Maybe<Rocketjaket_Store_Mutation_Response>;
  /** delete single row from the table: "rocketjaket.store" */
  delete_rocketjaket_store_by_pk?: Maybe<Rocketjaket_Store>;
  /** delete data from the table: "rocketjaket.transaction" */
  delete_rocketjaket_transaction?: Maybe<Rocketjaket_Transaction_Mutation_Response>;
  /** delete single row from the table: "rocketjaket.transaction" */
  delete_rocketjaket_transaction_by_pk?: Maybe<Rocketjaket_Transaction>;
  /** delete data from the table: "rocketjaket.transaction_item" */
  delete_rocketjaket_transaction_item?: Maybe<Rocketjaket_Transaction_Item_Mutation_Response>;
  /** delete single row from the table: "rocketjaket.transaction_item" */
  delete_rocketjaket_transaction_item_by_pk?: Maybe<Rocketjaket_Transaction_Item>;
  /** delete data from the table: "rocketjaket.transaction_payment_type_enum" */
  delete_rocketjaket_transaction_payment_type_enum?: Maybe<Rocketjaket_Transaction_Payment_Type_Enum_Mutation_Response>;
  /** delete single row from the table: "rocketjaket.transaction_payment_type_enum" */
  delete_rocketjaket_transaction_payment_type_enum_by_pk?: Maybe<Rocketjaket_Transaction_Payment_Type_Enum>;
  /** delete data from the table: "rocketjaket.transaction_receipt" */
  delete_rocketjaket_transaction_receipt?: Maybe<Rocketjaket_Transaction_Receipt_Mutation_Response>;
  /** delete single row from the table: "rocketjaket.transaction_receipt" */
  delete_rocketjaket_transaction_receipt_by_pk?: Maybe<Rocketjaket_Transaction_Receipt>;
  /** delete data from the table: "rocketjaket.transaction_receipt_type_enum" */
  delete_rocketjaket_transaction_receipt_type_enum?: Maybe<Rocketjaket_Transaction_Receipt_Type_Enum_Mutation_Response>;
  /** delete single row from the table: "rocketjaket.transaction_receipt_type_enum" */
  delete_rocketjaket_transaction_receipt_type_enum_by_pk?: Maybe<Rocketjaket_Transaction_Receipt_Type_Enum>;
  /** delete data from the table: "rocketjaket.transaction_status_enum" */
  delete_rocketjaket_transaction_status_enum?: Maybe<Rocketjaket_Transaction_Status_Enum_Mutation_Response>;
  /** delete single row from the table: "rocketjaket.transaction_status_enum" */
  delete_rocketjaket_transaction_status_enum_by_pk?: Maybe<Rocketjaket_Transaction_Status_Enum>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "users_fcm_token" */
  delete_users_fcm_token?: Maybe<Users_Fcm_Token_Mutation_Response>;
  /** delete single row from the table: "users_fcm_token" */
  delete_users_fcm_token_by_pk?: Maybe<Users_Fcm_Token>;
  /** insert data into the table: "auth.account_providers" */
  insert_auth_account_providers?: Maybe<Auth_Account_Providers_Mutation_Response>;
  /** insert a single row into the table: "auth.account_providers" */
  insert_auth_account_providers_one?: Maybe<Auth_Account_Providers>;
  /** insert data into the table: "auth.account_roles" */
  insert_auth_account_roles?: Maybe<Auth_Account_Roles_Mutation_Response>;
  /** insert a single row into the table: "auth.account_roles" */
  insert_auth_account_roles_one?: Maybe<Auth_Account_Roles>;
  /** insert data into the table: "auth.accounts" */
  insert_auth_accounts?: Maybe<Auth_Accounts_Mutation_Response>;
  /** insert a single row into the table: "auth.accounts" */
  insert_auth_accounts_one?: Maybe<Auth_Accounts>;
  /** insert data into the table: "auth.providers" */
  insert_auth_providers?: Maybe<Auth_Providers_Mutation_Response>;
  /** insert a single row into the table: "auth.providers" */
  insert_auth_providers_one?: Maybe<Auth_Providers>;
  /** insert data into the table: "auth.refresh_tokens" */
  insert_auth_refresh_tokens?: Maybe<Auth_Refresh_Tokens_Mutation_Response>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  insert_auth_refresh_tokens_one?: Maybe<Auth_Refresh_Tokens>;
  /** insert data into the table: "auth.roles" */
  insert_auth_roles?: Maybe<Auth_Roles_Mutation_Response>;
  /** insert a single row into the table: "auth.roles" */
  insert_auth_roles_one?: Maybe<Auth_Roles>;
  /** insert data into the table: "rocketjaket.customer" */
  insert_rocketjaket_customer?: Maybe<Rocketjaket_Customer_Mutation_Response>;
  /** insert a single row into the table: "rocketjaket.customer" */
  insert_rocketjaket_customer_one?: Maybe<Rocketjaket_Customer>;
  /** insert data into the table: "rocketjaket.inventory_product" */
  insert_rocketjaket_inventory_product?: Maybe<Rocketjaket_Inventory_Product_Mutation_Response>;
  /** insert a single row into the table: "rocketjaket.inventory_product" */
  insert_rocketjaket_inventory_product_one?: Maybe<Rocketjaket_Inventory_Product>;
  /** insert data into the table: "rocketjaket.inventory_product_variant" */
  insert_rocketjaket_inventory_product_variant?: Maybe<Rocketjaket_Inventory_Product_Variant_Mutation_Response>;
  /** insert a single row into the table: "rocketjaket.inventory_product_variant" */
  insert_rocketjaket_inventory_product_variant_one?: Maybe<Rocketjaket_Inventory_Product_Variant>;
  /** insert data into the table: "rocketjaket.inventory_variant_metadata" */
  insert_rocketjaket_inventory_variant_metadata?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Mutation_Response>;
  /** insert a single row into the table: "rocketjaket.inventory_variant_metadata" */
  insert_rocketjaket_inventory_variant_metadata_one?: Maybe<Rocketjaket_Inventory_Variant_Metadata>;
  /** insert data into the table: "rocketjaket.notification" */
  insert_rocketjaket_notification?: Maybe<Rocketjaket_Notification_Mutation_Response>;
  /** insert a single row into the table: "rocketjaket.notification" */
  insert_rocketjaket_notification_one?: Maybe<Rocketjaket_Notification>;
  /** insert data into the table: "rocketjaket.product" */
  insert_rocketjaket_product?: Maybe<Rocketjaket_Product_Mutation_Response>;
  /** insert data into the table: "rocketjaket.product_category" */
  insert_rocketjaket_product_category?: Maybe<Rocketjaket_Product_Category_Mutation_Response>;
  /** insert a single row into the table: "rocketjaket.product_category" */
  insert_rocketjaket_product_category_one?: Maybe<Rocketjaket_Product_Category>;
  /** insert a single row into the table: "rocketjaket.product" */
  insert_rocketjaket_product_one?: Maybe<Rocketjaket_Product>;
  /** insert data into the table: "rocketjaket.store" */
  insert_rocketjaket_store?: Maybe<Rocketjaket_Store_Mutation_Response>;
  /** insert a single row into the table: "rocketjaket.store" */
  insert_rocketjaket_store_one?: Maybe<Rocketjaket_Store>;
  /** insert data into the table: "rocketjaket.transaction" */
  insert_rocketjaket_transaction?: Maybe<Rocketjaket_Transaction_Mutation_Response>;
  /** insert data into the table: "rocketjaket.transaction_item" */
  insert_rocketjaket_transaction_item?: Maybe<Rocketjaket_Transaction_Item_Mutation_Response>;
  /** insert a single row into the table: "rocketjaket.transaction_item" */
  insert_rocketjaket_transaction_item_one?: Maybe<Rocketjaket_Transaction_Item>;
  /** insert a single row into the table: "rocketjaket.transaction" */
  insert_rocketjaket_transaction_one?: Maybe<Rocketjaket_Transaction>;
  /** insert data into the table: "rocketjaket.transaction_payment_type_enum" */
  insert_rocketjaket_transaction_payment_type_enum?: Maybe<Rocketjaket_Transaction_Payment_Type_Enum_Mutation_Response>;
  /** insert a single row into the table: "rocketjaket.transaction_payment_type_enum" */
  insert_rocketjaket_transaction_payment_type_enum_one?: Maybe<Rocketjaket_Transaction_Payment_Type_Enum>;
  /** insert data into the table: "rocketjaket.transaction_receipt" */
  insert_rocketjaket_transaction_receipt?: Maybe<Rocketjaket_Transaction_Receipt_Mutation_Response>;
  /** insert a single row into the table: "rocketjaket.transaction_receipt" */
  insert_rocketjaket_transaction_receipt_one?: Maybe<Rocketjaket_Transaction_Receipt>;
  /** insert data into the table: "rocketjaket.transaction_receipt_type_enum" */
  insert_rocketjaket_transaction_receipt_type_enum?: Maybe<Rocketjaket_Transaction_Receipt_Type_Enum_Mutation_Response>;
  /** insert a single row into the table: "rocketjaket.transaction_receipt_type_enum" */
  insert_rocketjaket_transaction_receipt_type_enum_one?: Maybe<Rocketjaket_Transaction_Receipt_Type_Enum>;
  /** insert data into the table: "rocketjaket.transaction_status_enum" */
  insert_rocketjaket_transaction_status_enum?: Maybe<Rocketjaket_Transaction_Status_Enum_Mutation_Response>;
  /** insert a single row into the table: "rocketjaket.transaction_status_enum" */
  insert_rocketjaket_transaction_status_enum_one?: Maybe<Rocketjaket_Transaction_Status_Enum>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert data into the table: "users_fcm_token" */
  insert_users_fcm_token?: Maybe<Users_Fcm_Token_Mutation_Response>;
  /** insert a single row into the table: "users_fcm_token" */
  insert_users_fcm_token_one?: Maybe<Users_Fcm_Token>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  refundTransaction?: Maybe<RefundTransactionOutput>;
  sendReceipt?: Maybe<SendReceiptOutput>;
  /** update data of the table: "auth.account_providers" */
  update_auth_account_providers?: Maybe<Auth_Account_Providers_Mutation_Response>;
  /** update single row of the table: "auth.account_providers" */
  update_auth_account_providers_by_pk?: Maybe<Auth_Account_Providers>;
  /** update data of the table: "auth.account_roles" */
  update_auth_account_roles?: Maybe<Auth_Account_Roles_Mutation_Response>;
  /** update single row of the table: "auth.account_roles" */
  update_auth_account_roles_by_pk?: Maybe<Auth_Account_Roles>;
  /** update data of the table: "auth.accounts" */
  update_auth_accounts?: Maybe<Auth_Accounts_Mutation_Response>;
  /** update single row of the table: "auth.accounts" */
  update_auth_accounts_by_pk?: Maybe<Auth_Accounts>;
  /** update data of the table: "auth.providers" */
  update_auth_providers?: Maybe<Auth_Providers_Mutation_Response>;
  /** update single row of the table: "auth.providers" */
  update_auth_providers_by_pk?: Maybe<Auth_Providers>;
  /** update data of the table: "auth.refresh_tokens" */
  update_auth_refresh_tokens?: Maybe<Auth_Refresh_Tokens_Mutation_Response>;
  /** update single row of the table: "auth.refresh_tokens" */
  update_auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>;
  /** update data of the table: "auth.roles" */
  update_auth_roles?: Maybe<Auth_Roles_Mutation_Response>;
  /** update single row of the table: "auth.roles" */
  update_auth_roles_by_pk?: Maybe<Auth_Roles>;
  /** update data of the table: "rocketjaket.customer" */
  update_rocketjaket_customer?: Maybe<Rocketjaket_Customer_Mutation_Response>;
  /** update single row of the table: "rocketjaket.customer" */
  update_rocketjaket_customer_by_pk?: Maybe<Rocketjaket_Customer>;
  /** update data of the table: "rocketjaket.inventory_product" */
  update_rocketjaket_inventory_product?: Maybe<Rocketjaket_Inventory_Product_Mutation_Response>;
  /** update single row of the table: "rocketjaket.inventory_product" */
  update_rocketjaket_inventory_product_by_pk?: Maybe<Rocketjaket_Inventory_Product>;
  /** update data of the table: "rocketjaket.inventory_product_variant" */
  update_rocketjaket_inventory_product_variant?: Maybe<Rocketjaket_Inventory_Product_Variant_Mutation_Response>;
  /** update single row of the table: "rocketjaket.inventory_product_variant" */
  update_rocketjaket_inventory_product_variant_by_pk?: Maybe<Rocketjaket_Inventory_Product_Variant>;
  /** update data of the table: "rocketjaket.inventory_variant_metadata" */
  update_rocketjaket_inventory_variant_metadata?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Mutation_Response>;
  /** update single row of the table: "rocketjaket.inventory_variant_metadata" */
  update_rocketjaket_inventory_variant_metadata_by_pk?: Maybe<Rocketjaket_Inventory_Variant_Metadata>;
  /** update data of the table: "rocketjaket.notification" */
  update_rocketjaket_notification?: Maybe<Rocketjaket_Notification_Mutation_Response>;
  /** update single row of the table: "rocketjaket.notification" */
  update_rocketjaket_notification_by_pk?: Maybe<Rocketjaket_Notification>;
  /** update data of the table: "rocketjaket.product" */
  update_rocketjaket_product?: Maybe<Rocketjaket_Product_Mutation_Response>;
  /** update single row of the table: "rocketjaket.product" */
  update_rocketjaket_product_by_pk?: Maybe<Rocketjaket_Product>;
  /** update data of the table: "rocketjaket.product_category" */
  update_rocketjaket_product_category?: Maybe<Rocketjaket_Product_Category_Mutation_Response>;
  /** update single row of the table: "rocketjaket.product_category" */
  update_rocketjaket_product_category_by_pk?: Maybe<Rocketjaket_Product_Category>;
  /** update data of the table: "rocketjaket.store" */
  update_rocketjaket_store?: Maybe<Rocketjaket_Store_Mutation_Response>;
  /** update single row of the table: "rocketjaket.store" */
  update_rocketjaket_store_by_pk?: Maybe<Rocketjaket_Store>;
  /** update data of the table: "rocketjaket.transaction" */
  update_rocketjaket_transaction?: Maybe<Rocketjaket_Transaction_Mutation_Response>;
  /** update single row of the table: "rocketjaket.transaction" */
  update_rocketjaket_transaction_by_pk?: Maybe<Rocketjaket_Transaction>;
  /** update data of the table: "rocketjaket.transaction_item" */
  update_rocketjaket_transaction_item?: Maybe<Rocketjaket_Transaction_Item_Mutation_Response>;
  /** update single row of the table: "rocketjaket.transaction_item" */
  update_rocketjaket_transaction_item_by_pk?: Maybe<Rocketjaket_Transaction_Item>;
  /** update data of the table: "rocketjaket.transaction_payment_type_enum" */
  update_rocketjaket_transaction_payment_type_enum?: Maybe<Rocketjaket_Transaction_Payment_Type_Enum_Mutation_Response>;
  /** update single row of the table: "rocketjaket.transaction_payment_type_enum" */
  update_rocketjaket_transaction_payment_type_enum_by_pk?: Maybe<Rocketjaket_Transaction_Payment_Type_Enum>;
  /** update data of the table: "rocketjaket.transaction_receipt" */
  update_rocketjaket_transaction_receipt?: Maybe<Rocketjaket_Transaction_Receipt_Mutation_Response>;
  /** update single row of the table: "rocketjaket.transaction_receipt" */
  update_rocketjaket_transaction_receipt_by_pk?: Maybe<Rocketjaket_Transaction_Receipt>;
  /** update data of the table: "rocketjaket.transaction_receipt_type_enum" */
  update_rocketjaket_transaction_receipt_type_enum?: Maybe<Rocketjaket_Transaction_Receipt_Type_Enum_Mutation_Response>;
  /** update single row of the table: "rocketjaket.transaction_receipt_type_enum" */
  update_rocketjaket_transaction_receipt_type_enum_by_pk?: Maybe<Rocketjaket_Transaction_Receipt_Type_Enum>;
  /** update data of the table: "rocketjaket.transaction_status_enum" */
  update_rocketjaket_transaction_status_enum?: Maybe<Rocketjaket_Transaction_Status_Enum_Mutation_Response>;
  /** update single row of the table: "rocketjaket.transaction_status_enum" */
  update_rocketjaket_transaction_status_enum_by_pk?: Maybe<Rocketjaket_Transaction_Status_Enum>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update data of the table: "users_fcm_token" */
  update_users_fcm_token?: Maybe<Users_Fcm_Token_Mutation_Response>;
  /** update single row of the table: "users_fcm_token" */
  update_users_fcm_token_by_pk?: Maybe<Users_Fcm_Token>;
  whatsappSignout?: Maybe<WhatsappSignoutOutput>;
};


/** mutation root */
export type Mutation_RootBulkUpdateInventoryProductArgs = {
  insert_update_inventory_product: Array<Insert_Inventory_Product_Variants>;
  inventory_product_id: Scalars['uuid'];
  set_inventory_product: Update_Inventory_Product;
};


/** mutation root */
export type Mutation_RootBulkUpdateVariantsMetadataArgs = {
  needAddVariantMetadata: Array<InventoryVariantMetadataInsertInput>;
  needDeleteIds: Array<Scalars['Int']>;
  needUpdateVariantMetadata: Array<InventoryVariantMetadataNeedUpdateInput>;
  new_variant_title: Scalars['String'];
  old_variant_title: Scalars['String'];
};


/** mutation root */
export type Mutation_RootCreateTransactionArgs = {
  cash_in_amount: Scalars['Int'];
  payment_type: TransactionPaymentTypeEnum;
  store_id: Scalars['Int'];
  total_transaction: Scalars['Int'];
  transaction_items: Array<Transaction_Items>;
  user_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_Account_ProvidersArgs = {
  where: Auth_Account_Providers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Account_Providers_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_Account_RolesArgs = {
  where: Auth_Account_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Account_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_AccountsArgs = {
  where: Auth_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Accounts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_ProvidersArgs = {
  where: Auth_Providers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Providers_By_PkArgs = {
  provider: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_Refresh_TokensArgs = {
  where: Auth_Refresh_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Refresh_Tokens_By_PkArgs = {
  refresh_token: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_RolesArgs = {
  where: Auth_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Roles_By_PkArgs = {
  role: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_CustomerArgs = {
  where: Rocketjaket_Customer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Customer_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Inventory_ProductArgs = {
  where: Rocketjaket_Inventory_Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Inventory_Product_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Inventory_Product_VariantArgs = {
  where: Rocketjaket_Inventory_Product_Variant_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Inventory_Product_Variant_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Inventory_Variant_MetadataArgs = {
  where: Rocketjaket_Inventory_Variant_Metadata_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Inventory_Variant_Metadata_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_NotificationArgs = {
  where: Rocketjaket_Notification_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Notification_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_ProductArgs = {
  where: Rocketjaket_Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Product_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Product_CategoryArgs = {
  where: Rocketjaket_Product_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Product_Category_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_StoreArgs = {
  where: Rocketjaket_Store_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Store_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_TransactionArgs = {
  where: Rocketjaket_Transaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Transaction_By_PkArgs = {
  invoice_number: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Transaction_ItemArgs = {
  where: Rocketjaket_Transaction_Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Transaction_Item_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Transaction_Payment_Type_EnumArgs = {
  where: Rocketjaket_Transaction_Payment_Type_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Transaction_Payment_Type_Enum_By_PkArgs = {
  payment_type: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Transaction_ReceiptArgs = {
  where: Rocketjaket_Transaction_Receipt_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Transaction_Receipt_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Transaction_Receipt_Type_EnumArgs = {
  where: Rocketjaket_Transaction_Receipt_Type_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Transaction_Receipt_Type_Enum_By_PkArgs = {
  receipt_type: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Transaction_Status_EnumArgs = {
  where: Rocketjaket_Transaction_Status_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Transaction_Status_Enum_By_PkArgs = {
  transaction_status: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Users_Fcm_TokenArgs = {
  where: Users_Fcm_Token_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_Fcm_Token_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_Auth_Account_ProvidersArgs = {
  objects: Array<Auth_Account_Providers_Insert_Input>;
  on_conflict?: Maybe<Auth_Account_Providers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Account_Providers_OneArgs = {
  object: Auth_Account_Providers_Insert_Input;
  on_conflict?: Maybe<Auth_Account_Providers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Account_RolesArgs = {
  objects: Array<Auth_Account_Roles_Insert_Input>;
  on_conflict?: Maybe<Auth_Account_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Account_Roles_OneArgs = {
  object: Auth_Account_Roles_Insert_Input;
  on_conflict?: Maybe<Auth_Account_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_AccountsArgs = {
  objects: Array<Auth_Accounts_Insert_Input>;
  on_conflict?: Maybe<Auth_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Accounts_OneArgs = {
  object: Auth_Accounts_Insert_Input;
  on_conflict?: Maybe<Auth_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_ProvidersArgs = {
  objects: Array<Auth_Providers_Insert_Input>;
  on_conflict?: Maybe<Auth_Providers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Providers_OneArgs = {
  object: Auth_Providers_Insert_Input;
  on_conflict?: Maybe<Auth_Providers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Refresh_TokensArgs = {
  objects: Array<Auth_Refresh_Tokens_Insert_Input>;
  on_conflict?: Maybe<Auth_Refresh_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Refresh_Tokens_OneArgs = {
  object: Auth_Refresh_Tokens_Insert_Input;
  on_conflict?: Maybe<Auth_Refresh_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_RolesArgs = {
  objects: Array<Auth_Roles_Insert_Input>;
  on_conflict?: Maybe<Auth_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Roles_OneArgs = {
  object: Auth_Roles_Insert_Input;
  on_conflict?: Maybe<Auth_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_CustomerArgs = {
  objects: Array<Rocketjaket_Customer_Insert_Input>;
  on_conflict?: Maybe<Rocketjaket_Customer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Customer_OneArgs = {
  object: Rocketjaket_Customer_Insert_Input;
  on_conflict?: Maybe<Rocketjaket_Customer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Inventory_ProductArgs = {
  objects: Array<Rocketjaket_Inventory_Product_Insert_Input>;
  on_conflict?: Maybe<Rocketjaket_Inventory_Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Inventory_Product_OneArgs = {
  object: Rocketjaket_Inventory_Product_Insert_Input;
  on_conflict?: Maybe<Rocketjaket_Inventory_Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Inventory_Product_VariantArgs = {
  objects: Array<Rocketjaket_Inventory_Product_Variant_Insert_Input>;
  on_conflict?: Maybe<Rocketjaket_Inventory_Product_Variant_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Inventory_Product_Variant_OneArgs = {
  object: Rocketjaket_Inventory_Product_Variant_Insert_Input;
  on_conflict?: Maybe<Rocketjaket_Inventory_Product_Variant_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Inventory_Variant_MetadataArgs = {
  objects: Array<Rocketjaket_Inventory_Variant_Metadata_Insert_Input>;
  on_conflict?: Maybe<Rocketjaket_Inventory_Variant_Metadata_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Inventory_Variant_Metadata_OneArgs = {
  object: Rocketjaket_Inventory_Variant_Metadata_Insert_Input;
  on_conflict?: Maybe<Rocketjaket_Inventory_Variant_Metadata_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_NotificationArgs = {
  objects: Array<Rocketjaket_Notification_Insert_Input>;
  on_conflict?: Maybe<Rocketjaket_Notification_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Notification_OneArgs = {
  object: Rocketjaket_Notification_Insert_Input;
  on_conflict?: Maybe<Rocketjaket_Notification_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_ProductArgs = {
  objects: Array<Rocketjaket_Product_Insert_Input>;
  on_conflict?: Maybe<Rocketjaket_Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Product_CategoryArgs = {
  objects: Array<Rocketjaket_Product_Category_Insert_Input>;
  on_conflict?: Maybe<Rocketjaket_Product_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Product_Category_OneArgs = {
  object: Rocketjaket_Product_Category_Insert_Input;
  on_conflict?: Maybe<Rocketjaket_Product_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Product_OneArgs = {
  object: Rocketjaket_Product_Insert_Input;
  on_conflict?: Maybe<Rocketjaket_Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_StoreArgs = {
  objects: Array<Rocketjaket_Store_Insert_Input>;
  on_conflict?: Maybe<Rocketjaket_Store_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Store_OneArgs = {
  object: Rocketjaket_Store_Insert_Input;
  on_conflict?: Maybe<Rocketjaket_Store_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_TransactionArgs = {
  objects: Array<Rocketjaket_Transaction_Insert_Input>;
  on_conflict?: Maybe<Rocketjaket_Transaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Transaction_ItemArgs = {
  objects: Array<Rocketjaket_Transaction_Item_Insert_Input>;
  on_conflict?: Maybe<Rocketjaket_Transaction_Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Transaction_Item_OneArgs = {
  object: Rocketjaket_Transaction_Item_Insert_Input;
  on_conflict?: Maybe<Rocketjaket_Transaction_Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Transaction_OneArgs = {
  object: Rocketjaket_Transaction_Insert_Input;
  on_conflict?: Maybe<Rocketjaket_Transaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Transaction_Payment_Type_EnumArgs = {
  objects: Array<Rocketjaket_Transaction_Payment_Type_Enum_Insert_Input>;
  on_conflict?: Maybe<Rocketjaket_Transaction_Payment_Type_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Transaction_Payment_Type_Enum_OneArgs = {
  object: Rocketjaket_Transaction_Payment_Type_Enum_Insert_Input;
  on_conflict?: Maybe<Rocketjaket_Transaction_Payment_Type_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Transaction_ReceiptArgs = {
  objects: Array<Rocketjaket_Transaction_Receipt_Insert_Input>;
  on_conflict?: Maybe<Rocketjaket_Transaction_Receipt_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Transaction_Receipt_OneArgs = {
  object: Rocketjaket_Transaction_Receipt_Insert_Input;
  on_conflict?: Maybe<Rocketjaket_Transaction_Receipt_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Transaction_Receipt_Type_EnumArgs = {
  objects: Array<Rocketjaket_Transaction_Receipt_Type_Enum_Insert_Input>;
  on_conflict?: Maybe<Rocketjaket_Transaction_Receipt_Type_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Transaction_Receipt_Type_Enum_OneArgs = {
  object: Rocketjaket_Transaction_Receipt_Type_Enum_Insert_Input;
  on_conflict?: Maybe<Rocketjaket_Transaction_Receipt_Type_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Transaction_Status_EnumArgs = {
  objects: Array<Rocketjaket_Transaction_Status_Enum_Insert_Input>;
  on_conflict?: Maybe<Rocketjaket_Transaction_Status_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Transaction_Status_Enum_OneArgs = {
  object: Rocketjaket_Transaction_Status_Enum_Insert_Input;
  on_conflict?: Maybe<Rocketjaket_Transaction_Status_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_Fcm_TokenArgs = {
  objects: Array<Users_Fcm_Token_Insert_Input>;
  on_conflict?: Maybe<Users_Fcm_Token_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_Fcm_Token_OneArgs = {
  object: Users_Fcm_Token_Insert_Input;
  on_conflict?: Maybe<Users_Fcm_Token_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootRefundTransactionArgs = {
  invoice_number: Scalars['String'];
  isRefundAll: Scalars['Boolean'];
  refund_reason: Scalars['String'];
};


/** mutation root */
export type Mutation_RootSendReceiptArgs = {
  customer?: Maybe<CustomerInput>;
  invoice_number: Scalars['String'];
  receipt_type: TransactionReceiptTypeEnum;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Account_ProvidersArgs = {
  _set?: Maybe<Auth_Account_Providers_Set_Input>;
  where: Auth_Account_Providers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Account_Providers_By_PkArgs = {
  _set?: Maybe<Auth_Account_Providers_Set_Input>;
  pk_columns: Auth_Account_Providers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Account_RolesArgs = {
  _set?: Maybe<Auth_Account_Roles_Set_Input>;
  where: Auth_Account_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Account_Roles_By_PkArgs = {
  _set?: Maybe<Auth_Account_Roles_Set_Input>;
  pk_columns: Auth_Account_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_AccountsArgs = {
  _append?: Maybe<Auth_Accounts_Append_Input>;
  _delete_at_path?: Maybe<Auth_Accounts_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Auth_Accounts_Delete_Elem_Input>;
  _delete_key?: Maybe<Auth_Accounts_Delete_Key_Input>;
  _prepend?: Maybe<Auth_Accounts_Prepend_Input>;
  _set?: Maybe<Auth_Accounts_Set_Input>;
  where: Auth_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Accounts_By_PkArgs = {
  _append?: Maybe<Auth_Accounts_Append_Input>;
  _delete_at_path?: Maybe<Auth_Accounts_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Auth_Accounts_Delete_Elem_Input>;
  _delete_key?: Maybe<Auth_Accounts_Delete_Key_Input>;
  _prepend?: Maybe<Auth_Accounts_Prepend_Input>;
  _set?: Maybe<Auth_Accounts_Set_Input>;
  pk_columns: Auth_Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_ProvidersArgs = {
  _set?: Maybe<Auth_Providers_Set_Input>;
  where: Auth_Providers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Providers_By_PkArgs = {
  _set?: Maybe<Auth_Providers_Set_Input>;
  pk_columns: Auth_Providers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Refresh_TokensArgs = {
  _set?: Maybe<Auth_Refresh_Tokens_Set_Input>;
  where: Auth_Refresh_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Refresh_Tokens_By_PkArgs = {
  _set?: Maybe<Auth_Refresh_Tokens_Set_Input>;
  pk_columns: Auth_Refresh_Tokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_RolesArgs = {
  _set?: Maybe<Auth_Roles_Set_Input>;
  where: Auth_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Roles_By_PkArgs = {
  _set?: Maybe<Auth_Roles_Set_Input>;
  pk_columns: Auth_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_CustomerArgs = {
  _set?: Maybe<Rocketjaket_Customer_Set_Input>;
  where: Rocketjaket_Customer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Customer_By_PkArgs = {
  _set?: Maybe<Rocketjaket_Customer_Set_Input>;
  pk_columns: Rocketjaket_Customer_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Inventory_ProductArgs = {
  _inc?: Maybe<Rocketjaket_Inventory_Product_Inc_Input>;
  _set?: Maybe<Rocketjaket_Inventory_Product_Set_Input>;
  where: Rocketjaket_Inventory_Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Inventory_Product_By_PkArgs = {
  _inc?: Maybe<Rocketjaket_Inventory_Product_Inc_Input>;
  _set?: Maybe<Rocketjaket_Inventory_Product_Set_Input>;
  pk_columns: Rocketjaket_Inventory_Product_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Inventory_Product_VariantArgs = {
  _inc?: Maybe<Rocketjaket_Inventory_Product_Variant_Inc_Input>;
  _set?: Maybe<Rocketjaket_Inventory_Product_Variant_Set_Input>;
  where: Rocketjaket_Inventory_Product_Variant_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Inventory_Product_Variant_By_PkArgs = {
  _inc?: Maybe<Rocketjaket_Inventory_Product_Variant_Inc_Input>;
  _set?: Maybe<Rocketjaket_Inventory_Product_Variant_Set_Input>;
  pk_columns: Rocketjaket_Inventory_Product_Variant_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Inventory_Variant_MetadataArgs = {
  _inc?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Inc_Input>;
  _set?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Set_Input>;
  where: Rocketjaket_Inventory_Variant_Metadata_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Inventory_Variant_Metadata_By_PkArgs = {
  _inc?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Inc_Input>;
  _set?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Set_Input>;
  pk_columns: Rocketjaket_Inventory_Variant_Metadata_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_NotificationArgs = {
  _set?: Maybe<Rocketjaket_Notification_Set_Input>;
  where: Rocketjaket_Notification_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Notification_By_PkArgs = {
  _set?: Maybe<Rocketjaket_Notification_Set_Input>;
  pk_columns: Rocketjaket_Notification_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_ProductArgs = {
  _inc?: Maybe<Rocketjaket_Product_Inc_Input>;
  _set?: Maybe<Rocketjaket_Product_Set_Input>;
  where: Rocketjaket_Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Product_By_PkArgs = {
  _inc?: Maybe<Rocketjaket_Product_Inc_Input>;
  _set?: Maybe<Rocketjaket_Product_Set_Input>;
  pk_columns: Rocketjaket_Product_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Product_CategoryArgs = {
  _inc?: Maybe<Rocketjaket_Product_Category_Inc_Input>;
  _set?: Maybe<Rocketjaket_Product_Category_Set_Input>;
  where: Rocketjaket_Product_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Product_Category_By_PkArgs = {
  _inc?: Maybe<Rocketjaket_Product_Category_Inc_Input>;
  _set?: Maybe<Rocketjaket_Product_Category_Set_Input>;
  pk_columns: Rocketjaket_Product_Category_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_StoreArgs = {
  _inc?: Maybe<Rocketjaket_Store_Inc_Input>;
  _set?: Maybe<Rocketjaket_Store_Set_Input>;
  where: Rocketjaket_Store_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Store_By_PkArgs = {
  _inc?: Maybe<Rocketjaket_Store_Inc_Input>;
  _set?: Maybe<Rocketjaket_Store_Set_Input>;
  pk_columns: Rocketjaket_Store_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_TransactionArgs = {
  _inc?: Maybe<Rocketjaket_Transaction_Inc_Input>;
  _set?: Maybe<Rocketjaket_Transaction_Set_Input>;
  where: Rocketjaket_Transaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Transaction_By_PkArgs = {
  _inc?: Maybe<Rocketjaket_Transaction_Inc_Input>;
  _set?: Maybe<Rocketjaket_Transaction_Set_Input>;
  pk_columns: Rocketjaket_Transaction_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Transaction_ItemArgs = {
  _inc?: Maybe<Rocketjaket_Transaction_Item_Inc_Input>;
  _set?: Maybe<Rocketjaket_Transaction_Item_Set_Input>;
  where: Rocketjaket_Transaction_Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Transaction_Item_By_PkArgs = {
  _inc?: Maybe<Rocketjaket_Transaction_Item_Inc_Input>;
  _set?: Maybe<Rocketjaket_Transaction_Item_Set_Input>;
  pk_columns: Rocketjaket_Transaction_Item_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Transaction_Payment_Type_EnumArgs = {
  _set?: Maybe<Rocketjaket_Transaction_Payment_Type_Enum_Set_Input>;
  where: Rocketjaket_Transaction_Payment_Type_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Transaction_Payment_Type_Enum_By_PkArgs = {
  _set?: Maybe<Rocketjaket_Transaction_Payment_Type_Enum_Set_Input>;
  pk_columns: Rocketjaket_Transaction_Payment_Type_Enum_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Transaction_ReceiptArgs = {
  _set?: Maybe<Rocketjaket_Transaction_Receipt_Set_Input>;
  where: Rocketjaket_Transaction_Receipt_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Transaction_Receipt_By_PkArgs = {
  _set?: Maybe<Rocketjaket_Transaction_Receipt_Set_Input>;
  pk_columns: Rocketjaket_Transaction_Receipt_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Transaction_Receipt_Type_EnumArgs = {
  _set?: Maybe<Rocketjaket_Transaction_Receipt_Type_Enum_Set_Input>;
  where: Rocketjaket_Transaction_Receipt_Type_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Transaction_Receipt_Type_Enum_By_PkArgs = {
  _set?: Maybe<Rocketjaket_Transaction_Receipt_Type_Enum_Set_Input>;
  pk_columns: Rocketjaket_Transaction_Receipt_Type_Enum_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Transaction_Status_EnumArgs = {
  _set?: Maybe<Rocketjaket_Transaction_Status_Enum_Set_Input>;
  where: Rocketjaket_Transaction_Status_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Transaction_Status_Enum_By_PkArgs = {
  _set?: Maybe<Rocketjaket_Transaction_Status_Enum_Set_Input>;
  pk_columns: Rocketjaket_Transaction_Status_Enum_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_Fcm_TokenArgs = {
  _set?: Maybe<Users_Fcm_Token_Set_Input>;
  where: Users_Fcm_Token_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_Fcm_Token_By_PkArgs = {
  _set?: Maybe<Users_Fcm_Token_Set_Input>;
  pk_columns: Users_Fcm_Token_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "auth.account_providers" */
  auth_account_providers: Array<Auth_Account_Providers>;
  /** fetch aggregated fields from the table: "auth.account_providers" */
  auth_account_providers_aggregate: Auth_Account_Providers_Aggregate;
  /** fetch data from the table: "auth.account_providers" using primary key columns */
  auth_account_providers_by_pk?: Maybe<Auth_Account_Providers>;
  /** fetch data from the table: "auth.account_roles" */
  auth_account_roles: Array<Auth_Account_Roles>;
  /** fetch aggregated fields from the table: "auth.account_roles" */
  auth_account_roles_aggregate: Auth_Account_Roles_Aggregate;
  /** fetch data from the table: "auth.account_roles" using primary key columns */
  auth_account_roles_by_pk?: Maybe<Auth_Account_Roles>;
  /** fetch data from the table: "auth.accounts" */
  auth_accounts: Array<Auth_Accounts>;
  /** fetch aggregated fields from the table: "auth.accounts" */
  auth_accounts_aggregate: Auth_Accounts_Aggregate;
  /** fetch data from the table: "auth.accounts" using primary key columns */
  auth_accounts_by_pk?: Maybe<Auth_Accounts>;
  /** fetch data from the table: "auth.providers" */
  auth_providers: Array<Auth_Providers>;
  /** fetch aggregated fields from the table: "auth.providers" */
  auth_providers_aggregate: Auth_Providers_Aggregate;
  /** fetch data from the table: "auth.providers" using primary key columns */
  auth_providers_by_pk?: Maybe<Auth_Providers>;
  /** fetch data from the table: "auth.refresh_tokens" */
  auth_refresh_tokens: Array<Auth_Refresh_Tokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  auth_refresh_tokens_aggregate: Auth_Refresh_Tokens_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>;
  /** fetch data from the table: "auth.roles" */
  auth_roles: Array<Auth_Roles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  auth_roles_aggregate: Auth_Roles_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  auth_roles_by_pk?: Maybe<Auth_Roles>;
  getWhatsappAuthStatus?: Maybe<GetWhatsappAuthStatusOutput>;
  /** fetch data from the table: "rocketjaket.customer" */
  rocketjaket_customer: Array<Rocketjaket_Customer>;
  /** fetch aggregated fields from the table: "rocketjaket.customer" */
  rocketjaket_customer_aggregate: Rocketjaket_Customer_Aggregate;
  /** fetch data from the table: "rocketjaket.customer" using primary key columns */
  rocketjaket_customer_by_pk?: Maybe<Rocketjaket_Customer>;
  /** fetch data from the table: "rocketjaket.inventory_product" */
  rocketjaket_inventory_product: Array<Rocketjaket_Inventory_Product>;
  /** fetch aggregated fields from the table: "rocketjaket.inventory_product" */
  rocketjaket_inventory_product_aggregate: Rocketjaket_Inventory_Product_Aggregate;
  /** fetch data from the table: "rocketjaket.inventory_product" using primary key columns */
  rocketjaket_inventory_product_by_pk?: Maybe<Rocketjaket_Inventory_Product>;
  /** fetch data from the table: "rocketjaket.inventory_product_variant" */
  rocketjaket_inventory_product_variant: Array<Rocketjaket_Inventory_Product_Variant>;
  /** fetch aggregated fields from the table: "rocketjaket.inventory_product_variant" */
  rocketjaket_inventory_product_variant_aggregate: Rocketjaket_Inventory_Product_Variant_Aggregate;
  /** fetch data from the table: "rocketjaket.inventory_product_variant" using primary key columns */
  rocketjaket_inventory_product_variant_by_pk?: Maybe<Rocketjaket_Inventory_Product_Variant>;
  /** fetch data from the table: "rocketjaket.inventory_variant_metadata" */
  rocketjaket_inventory_variant_metadata: Array<Rocketjaket_Inventory_Variant_Metadata>;
  /** fetch aggregated fields from the table: "rocketjaket.inventory_variant_metadata" */
  rocketjaket_inventory_variant_metadata_aggregate: Rocketjaket_Inventory_Variant_Metadata_Aggregate;
  /** fetch data from the table: "rocketjaket.inventory_variant_metadata" using primary key columns */
  rocketjaket_inventory_variant_metadata_by_pk?: Maybe<Rocketjaket_Inventory_Variant_Metadata>;
  /** fetch data from the table: "rocketjaket.notification" */
  rocketjaket_notification: Array<Rocketjaket_Notification>;
  /** fetch aggregated fields from the table: "rocketjaket.notification" */
  rocketjaket_notification_aggregate: Rocketjaket_Notification_Aggregate;
  /** fetch data from the table: "rocketjaket.notification" using primary key columns */
  rocketjaket_notification_by_pk?: Maybe<Rocketjaket_Notification>;
  /** fetch data from the table: "rocketjaket.product" */
  rocketjaket_product: Array<Rocketjaket_Product>;
  /** fetch aggregated fields from the table: "rocketjaket.product" */
  rocketjaket_product_aggregate: Rocketjaket_Product_Aggregate;
  /** fetch data from the table: "rocketjaket.product" using primary key columns */
  rocketjaket_product_by_pk?: Maybe<Rocketjaket_Product>;
  /** fetch data from the table: "rocketjaket.product_category" */
  rocketjaket_product_category: Array<Rocketjaket_Product_Category>;
  /** fetch aggregated fields from the table: "rocketjaket.product_category" */
  rocketjaket_product_category_aggregate: Rocketjaket_Product_Category_Aggregate;
  /** fetch data from the table: "rocketjaket.product_category" using primary key columns */
  rocketjaket_product_category_by_pk?: Maybe<Rocketjaket_Product_Category>;
  /** fetch data from the table: "rocketjaket.store" */
  rocketjaket_store: Array<Rocketjaket_Store>;
  /** fetch aggregated fields from the table: "rocketjaket.store" */
  rocketjaket_store_aggregate: Rocketjaket_Store_Aggregate;
  /** fetch data from the table: "rocketjaket.store" using primary key columns */
  rocketjaket_store_by_pk?: Maybe<Rocketjaket_Store>;
  /** fetch data from the table: "rocketjaket.transaction" */
  rocketjaket_transaction: Array<Rocketjaket_Transaction>;
  /** fetch aggregated fields from the table: "rocketjaket.transaction" */
  rocketjaket_transaction_aggregate: Rocketjaket_Transaction_Aggregate;
  /** fetch data from the table: "rocketjaket.transaction" using primary key columns */
  rocketjaket_transaction_by_pk?: Maybe<Rocketjaket_Transaction>;
  /** fetch data from the table: "rocketjaket.transaction_item" */
  rocketjaket_transaction_item: Array<Rocketjaket_Transaction_Item>;
  /** fetch aggregated fields from the table: "rocketjaket.transaction_item" */
  rocketjaket_transaction_item_aggregate: Rocketjaket_Transaction_Item_Aggregate;
  /** fetch data from the table: "rocketjaket.transaction_item" using primary key columns */
  rocketjaket_transaction_item_by_pk?: Maybe<Rocketjaket_Transaction_Item>;
  /** fetch data from the table: "rocketjaket.transaction_payment_type_enum" */
  rocketjaket_transaction_payment_type_enum: Array<Rocketjaket_Transaction_Payment_Type_Enum>;
  /** fetch aggregated fields from the table: "rocketjaket.transaction_payment_type_enum" */
  rocketjaket_transaction_payment_type_enum_aggregate: Rocketjaket_Transaction_Payment_Type_Enum_Aggregate;
  /** fetch data from the table: "rocketjaket.transaction_payment_type_enum" using primary key columns */
  rocketjaket_transaction_payment_type_enum_by_pk?: Maybe<Rocketjaket_Transaction_Payment_Type_Enum>;
  /** fetch data from the table: "rocketjaket.transaction_receipt" */
  rocketjaket_transaction_receipt: Array<Rocketjaket_Transaction_Receipt>;
  /** fetch aggregated fields from the table: "rocketjaket.transaction_receipt" */
  rocketjaket_transaction_receipt_aggregate: Rocketjaket_Transaction_Receipt_Aggregate;
  /** fetch data from the table: "rocketjaket.transaction_receipt" using primary key columns */
  rocketjaket_transaction_receipt_by_pk?: Maybe<Rocketjaket_Transaction_Receipt>;
  /** fetch data from the table: "rocketjaket.transaction_receipt_type_enum" */
  rocketjaket_transaction_receipt_type_enum: Array<Rocketjaket_Transaction_Receipt_Type_Enum>;
  /** fetch aggregated fields from the table: "rocketjaket.transaction_receipt_type_enum" */
  rocketjaket_transaction_receipt_type_enum_aggregate: Rocketjaket_Transaction_Receipt_Type_Enum_Aggregate;
  /** fetch data from the table: "rocketjaket.transaction_receipt_type_enum" using primary key columns */
  rocketjaket_transaction_receipt_type_enum_by_pk?: Maybe<Rocketjaket_Transaction_Receipt_Type_Enum>;
  /** fetch data from the table: "rocketjaket.transaction_status_enum" */
  rocketjaket_transaction_status_enum: Array<Rocketjaket_Transaction_Status_Enum>;
  /** fetch aggregated fields from the table: "rocketjaket.transaction_status_enum" */
  rocketjaket_transaction_status_enum_aggregate: Rocketjaket_Transaction_Status_Enum_Aggregate;
  /** fetch data from the table: "rocketjaket.transaction_status_enum" using primary key columns */
  rocketjaket_transaction_status_enum_by_pk?: Maybe<Rocketjaket_Transaction_Status_Enum>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "users_fcm_token" */
  users_fcm_token: Array<Users_Fcm_Token>;
  /** fetch aggregated fields from the table: "users_fcm_token" */
  users_fcm_token_aggregate: Users_Fcm_Token_Aggregate;
  /** fetch data from the table: "users_fcm_token" using primary key columns */
  users_fcm_token_by_pk?: Maybe<Users_Fcm_Token>;
};


export type Query_RootAuth_Account_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};


export type Query_RootAuth_Account_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};


export type Query_RootAuth_Account_Providers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuth_Account_RolesArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


export type Query_RootAuth_Account_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


export type Query_RootAuth_Account_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuth_AccountsArgs = {
  distinct_on?: Maybe<Array<Auth_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Accounts_Order_By>>;
  where?: Maybe<Auth_Accounts_Bool_Exp>;
};


export type Query_RootAuth_Accounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Accounts_Order_By>>;
  where?: Maybe<Auth_Accounts_Bool_Exp>;
};


export type Query_RootAuth_Accounts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuth_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Providers_Order_By>>;
  where?: Maybe<Auth_Providers_Bool_Exp>;
};


export type Query_RootAuth_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Providers_Order_By>>;
  where?: Maybe<Auth_Providers_Bool_Exp>;
};


export type Query_RootAuth_Providers_By_PkArgs = {
  provider: Scalars['String'];
};


export type Query_RootAuth_Refresh_TokensArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};


export type Query_RootAuth_Refresh_Tokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};


export type Query_RootAuth_Refresh_Tokens_By_PkArgs = {
  refresh_token: Scalars['uuid'];
};


export type Query_RootAuth_RolesArgs = {
  distinct_on?: Maybe<Array<Auth_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Roles_Order_By>>;
  where?: Maybe<Auth_Roles_Bool_Exp>;
};


export type Query_RootAuth_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Roles_Order_By>>;
  where?: Maybe<Auth_Roles_Bool_Exp>;
};


export type Query_RootAuth_Roles_By_PkArgs = {
  role: Scalars['String'];
};


export type Query_RootRocketjaket_CustomerArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Customer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Customer_Order_By>>;
  where?: Maybe<Rocketjaket_Customer_Bool_Exp>;
};


export type Query_RootRocketjaket_Customer_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Customer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Customer_Order_By>>;
  where?: Maybe<Rocketjaket_Customer_Bool_Exp>;
};


export type Query_RootRocketjaket_Customer_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRocketjaket_Inventory_ProductArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Inventory_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Inventory_Product_Order_By>>;
  where?: Maybe<Rocketjaket_Inventory_Product_Bool_Exp>;
};


export type Query_RootRocketjaket_Inventory_Product_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Inventory_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Inventory_Product_Order_By>>;
  where?: Maybe<Rocketjaket_Inventory_Product_Bool_Exp>;
};


export type Query_RootRocketjaket_Inventory_Product_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRocketjaket_Inventory_Product_VariantArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Inventory_Product_Variant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Inventory_Product_Variant_Order_By>>;
  where?: Maybe<Rocketjaket_Inventory_Product_Variant_Bool_Exp>;
};


export type Query_RootRocketjaket_Inventory_Product_Variant_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Inventory_Product_Variant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Inventory_Product_Variant_Order_By>>;
  where?: Maybe<Rocketjaket_Inventory_Product_Variant_Bool_Exp>;
};


export type Query_RootRocketjaket_Inventory_Product_Variant_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootRocketjaket_Inventory_Variant_MetadataArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Inventory_Variant_Metadata_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Inventory_Variant_Metadata_Order_By>>;
  where?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Bool_Exp>;
};


export type Query_RootRocketjaket_Inventory_Variant_Metadata_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Inventory_Variant_Metadata_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Inventory_Variant_Metadata_Order_By>>;
  where?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Bool_Exp>;
};


export type Query_RootRocketjaket_Inventory_Variant_Metadata_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootRocketjaket_NotificationArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Notification_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Notification_Order_By>>;
  where?: Maybe<Rocketjaket_Notification_Bool_Exp>;
};


export type Query_RootRocketjaket_Notification_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Notification_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Notification_Order_By>>;
  where?: Maybe<Rocketjaket_Notification_Bool_Exp>;
};


export type Query_RootRocketjaket_Notification_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRocketjaket_ProductArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Product_Order_By>>;
  where?: Maybe<Rocketjaket_Product_Bool_Exp>;
};


export type Query_RootRocketjaket_Product_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Product_Order_By>>;
  where?: Maybe<Rocketjaket_Product_Bool_Exp>;
};


export type Query_RootRocketjaket_Product_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRocketjaket_Product_CategoryArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Product_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Product_Category_Order_By>>;
  where?: Maybe<Rocketjaket_Product_Category_Bool_Exp>;
};


export type Query_RootRocketjaket_Product_Category_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Product_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Product_Category_Order_By>>;
  where?: Maybe<Rocketjaket_Product_Category_Bool_Exp>;
};


export type Query_RootRocketjaket_Product_Category_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootRocketjaket_StoreArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Store_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Store_Order_By>>;
  where?: Maybe<Rocketjaket_Store_Bool_Exp>;
};


export type Query_RootRocketjaket_Store_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Store_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Store_Order_By>>;
  where?: Maybe<Rocketjaket_Store_Bool_Exp>;
};


export type Query_RootRocketjaket_Store_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootRocketjaket_TransactionArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Bool_Exp>;
};


export type Query_RootRocketjaket_Transaction_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Bool_Exp>;
};


export type Query_RootRocketjaket_Transaction_By_PkArgs = {
  invoice_number: Scalars['String'];
};


export type Query_RootRocketjaket_Transaction_ItemArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Item_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Item_Bool_Exp>;
};


export type Query_RootRocketjaket_Transaction_Item_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Item_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Item_Bool_Exp>;
};


export type Query_RootRocketjaket_Transaction_Item_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRocketjaket_Transaction_Payment_Type_EnumArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Payment_Type_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Payment_Type_Enum_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Payment_Type_Enum_Bool_Exp>;
};


export type Query_RootRocketjaket_Transaction_Payment_Type_Enum_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Payment_Type_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Payment_Type_Enum_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Payment_Type_Enum_Bool_Exp>;
};


export type Query_RootRocketjaket_Transaction_Payment_Type_Enum_By_PkArgs = {
  payment_type: Scalars['String'];
};


export type Query_RootRocketjaket_Transaction_ReceiptArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Receipt_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Receipt_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Receipt_Bool_Exp>;
};


export type Query_RootRocketjaket_Transaction_Receipt_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Receipt_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Receipt_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Receipt_Bool_Exp>;
};


export type Query_RootRocketjaket_Transaction_Receipt_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRocketjaket_Transaction_Receipt_Type_EnumArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Receipt_Type_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Receipt_Type_Enum_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Receipt_Type_Enum_Bool_Exp>;
};


export type Query_RootRocketjaket_Transaction_Receipt_Type_Enum_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Receipt_Type_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Receipt_Type_Enum_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Receipt_Type_Enum_Bool_Exp>;
};


export type Query_RootRocketjaket_Transaction_Receipt_Type_Enum_By_PkArgs = {
  receipt_type: Scalars['String'];
};


export type Query_RootRocketjaket_Transaction_Status_EnumArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Status_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Status_Enum_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Status_Enum_Bool_Exp>;
};


export type Query_RootRocketjaket_Transaction_Status_Enum_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Status_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Status_Enum_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Status_Enum_Bool_Exp>;
};


export type Query_RootRocketjaket_Transaction_Status_Enum_By_PkArgs = {
  transaction_status: Scalars['String'];
};


export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsers_Fcm_TokenArgs = {
  distinct_on?: Maybe<Array<Users_Fcm_Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Fcm_Token_Order_By>>;
  where?: Maybe<Users_Fcm_Token_Bool_Exp>;
};


export type Query_RootUsers_Fcm_Token_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Fcm_Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Fcm_Token_Order_By>>;
  where?: Maybe<Users_Fcm_Token_Bool_Exp>;
};


export type Query_RootUsers_Fcm_Token_By_PkArgs = {
  id: Scalars['uuid'];
};

export type RefundTransactionOutput = {
  __typename?: 'refundTransactionOutput';
  invoice_number: Scalars['String'];
  is_success: Scalars['Boolean'];
};

/** columns and relationships of "rocketjaket.customer" */
export type Rocketjaket_Customer = {
  __typename?: 'rocketjaket_customer';
  email?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  /** An array relationship */
  transaction_receipts: Array<Rocketjaket_Transaction_Receipt>;
  /** An aggregate relationship */
  transaction_receipts_aggregate: Rocketjaket_Transaction_Receipt_Aggregate;
};


/** columns and relationships of "rocketjaket.customer" */
export type Rocketjaket_CustomerTransaction_ReceiptsArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Receipt_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Receipt_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Receipt_Bool_Exp>;
};


/** columns and relationships of "rocketjaket.customer" */
export type Rocketjaket_CustomerTransaction_Receipts_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Receipt_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Receipt_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Receipt_Bool_Exp>;
};

/** aggregated selection of "rocketjaket.customer" */
export type Rocketjaket_Customer_Aggregate = {
  __typename?: 'rocketjaket_customer_aggregate';
  aggregate?: Maybe<Rocketjaket_Customer_Aggregate_Fields>;
  nodes: Array<Rocketjaket_Customer>;
};

/** aggregate fields of "rocketjaket.customer" */
export type Rocketjaket_Customer_Aggregate_Fields = {
  __typename?: 'rocketjaket_customer_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Rocketjaket_Customer_Max_Fields>;
  min?: Maybe<Rocketjaket_Customer_Min_Fields>;
};


/** aggregate fields of "rocketjaket.customer" */
export type Rocketjaket_Customer_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Rocketjaket_Customer_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "rocketjaket.customer". All fields are combined with a logical 'AND'. */
export type Rocketjaket_Customer_Bool_Exp = {
  _and?: Maybe<Array<Rocketjaket_Customer_Bool_Exp>>;
  _not?: Maybe<Rocketjaket_Customer_Bool_Exp>;
  _or?: Maybe<Array<Rocketjaket_Customer_Bool_Exp>>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  phone_number?: Maybe<String_Comparison_Exp>;
  transaction_receipts?: Maybe<Rocketjaket_Transaction_Receipt_Bool_Exp>;
};

/** unique or primary key constraints on table "rocketjaket.customer" */
export enum Rocketjaket_Customer_Constraint {
  /** unique or primary key constraint */
  CustomerPhoneNumberEmailKey = 'customer_phone_number_email_key',
  /** unique or primary key constraint */
  CustomerPkey = 'customer_pkey'
}

/** input type for inserting data into table "rocketjaket.customer" */
export type Rocketjaket_Customer_Insert_Input = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  transaction_receipts?: Maybe<Rocketjaket_Transaction_Receipt_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Rocketjaket_Customer_Max_Fields = {
  __typename?: 'rocketjaket_customer_max_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Rocketjaket_Customer_Min_Fields = {
  __typename?: 'rocketjaket_customer_min_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "rocketjaket.customer" */
export type Rocketjaket_Customer_Mutation_Response = {
  __typename?: 'rocketjaket_customer_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rocketjaket_Customer>;
};

/** input type for inserting object relation for remote table "rocketjaket.customer" */
export type Rocketjaket_Customer_Obj_Rel_Insert_Input = {
  data: Rocketjaket_Customer_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Rocketjaket_Customer_On_Conflict>;
};

/** on conflict condition type for table "rocketjaket.customer" */
export type Rocketjaket_Customer_On_Conflict = {
  constraint: Rocketjaket_Customer_Constraint;
  update_columns?: Array<Rocketjaket_Customer_Update_Column>;
  where?: Maybe<Rocketjaket_Customer_Bool_Exp>;
};

/** Ordering options when selecting data from "rocketjaket.customer". */
export type Rocketjaket_Customer_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone_number?: Maybe<Order_By>;
  transaction_receipts_aggregate?: Maybe<Rocketjaket_Transaction_Receipt_Aggregate_Order_By>;
};

/** primary key columns input for table: rocketjaket_customer */
export type Rocketjaket_Customer_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "rocketjaket.customer" */
export enum Rocketjaket_Customer_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneNumber = 'phone_number'
}

/** input type for updating data in table "rocketjaket.customer" */
export type Rocketjaket_Customer_Set_Input = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
};

/** update columns of table "rocketjaket.customer" */
export enum Rocketjaket_Customer_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneNumber = 'phone_number'
}

/** columns and relationships of "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product = {
  __typename?: 'rocketjaket_inventory_product';
  available_qty: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An array relationship */
  inventory_product_variants: Array<Rocketjaket_Inventory_Product_Variant>;
  /** An aggregate relationship */
  inventory_product_variants_aggregate: Rocketjaket_Inventory_Product_Variant_Aggregate;
  min_available_qty?: Maybe<Scalars['Int']>;
  override_capital_price?: Maybe<Scalars['Int']>;
  override_discount?: Maybe<Scalars['Int']>;
  override_selling_price?: Maybe<Scalars['Int']>;
  /** An object relationship */
  product: Rocketjaket_Product;
  product_id: Scalars['uuid'];
  store_id: Scalars['Int'];
  /** An array relationship */
  transaction_items: Array<Rocketjaket_Transaction_Item>;
  /** An aggregate relationship */
  transaction_items_aggregate: Rocketjaket_Transaction_Item_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_ProductInventory_Product_VariantsArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Inventory_Product_Variant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Inventory_Product_Variant_Order_By>>;
  where?: Maybe<Rocketjaket_Inventory_Product_Variant_Bool_Exp>;
};


/** columns and relationships of "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_ProductInventory_Product_Variants_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Inventory_Product_Variant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Inventory_Product_Variant_Order_By>>;
  where?: Maybe<Rocketjaket_Inventory_Product_Variant_Bool_Exp>;
};


/** columns and relationships of "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_ProductTransaction_ItemsArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Item_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Item_Bool_Exp>;
};


/** columns and relationships of "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_ProductTransaction_Items_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Item_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Item_Bool_Exp>;
};

/** aggregated selection of "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Aggregate = {
  __typename?: 'rocketjaket_inventory_product_aggregate';
  aggregate?: Maybe<Rocketjaket_Inventory_Product_Aggregate_Fields>;
  nodes: Array<Rocketjaket_Inventory_Product>;
};

/** aggregate fields of "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Aggregate_Fields = {
  __typename?: 'rocketjaket_inventory_product_aggregate_fields';
  avg?: Maybe<Rocketjaket_Inventory_Product_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Rocketjaket_Inventory_Product_Max_Fields>;
  min?: Maybe<Rocketjaket_Inventory_Product_Min_Fields>;
  stddev?: Maybe<Rocketjaket_Inventory_Product_Stddev_Fields>;
  stddev_pop?: Maybe<Rocketjaket_Inventory_Product_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rocketjaket_Inventory_Product_Stddev_Samp_Fields>;
  sum?: Maybe<Rocketjaket_Inventory_Product_Sum_Fields>;
  var_pop?: Maybe<Rocketjaket_Inventory_Product_Var_Pop_Fields>;
  var_samp?: Maybe<Rocketjaket_Inventory_Product_Var_Samp_Fields>;
  variance?: Maybe<Rocketjaket_Inventory_Product_Variance_Fields>;
};


/** aggregate fields of "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Rocketjaket_Inventory_Product_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Aggregate_Order_By = {
  avg?: Maybe<Rocketjaket_Inventory_Product_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Rocketjaket_Inventory_Product_Max_Order_By>;
  min?: Maybe<Rocketjaket_Inventory_Product_Min_Order_By>;
  stddev?: Maybe<Rocketjaket_Inventory_Product_Stddev_Order_By>;
  stddev_pop?: Maybe<Rocketjaket_Inventory_Product_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Rocketjaket_Inventory_Product_Stddev_Samp_Order_By>;
  sum?: Maybe<Rocketjaket_Inventory_Product_Sum_Order_By>;
  var_pop?: Maybe<Rocketjaket_Inventory_Product_Var_Pop_Order_By>;
  var_samp?: Maybe<Rocketjaket_Inventory_Product_Var_Samp_Order_By>;
  variance?: Maybe<Rocketjaket_Inventory_Product_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Arr_Rel_Insert_Input = {
  data: Array<Rocketjaket_Inventory_Product_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Rocketjaket_Inventory_Product_On_Conflict>;
};

/** aggregate avg on columns */
export type Rocketjaket_Inventory_Product_Avg_Fields = {
  __typename?: 'rocketjaket_inventory_product_avg_fields';
  available_qty?: Maybe<Scalars['Float']>;
  min_available_qty?: Maybe<Scalars['Float']>;
  override_capital_price?: Maybe<Scalars['Float']>;
  override_discount?: Maybe<Scalars['Float']>;
  override_selling_price?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Avg_Order_By = {
  available_qty?: Maybe<Order_By>;
  min_available_qty?: Maybe<Order_By>;
  override_capital_price?: Maybe<Order_By>;
  override_discount?: Maybe<Order_By>;
  override_selling_price?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "rocketjaket.inventory_product". All fields are combined with a logical 'AND'. */
export type Rocketjaket_Inventory_Product_Bool_Exp = {
  _and?: Maybe<Array<Rocketjaket_Inventory_Product_Bool_Exp>>;
  _not?: Maybe<Rocketjaket_Inventory_Product_Bool_Exp>;
  _or?: Maybe<Array<Rocketjaket_Inventory_Product_Bool_Exp>>;
  available_qty?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  inventory_product_variants?: Maybe<Rocketjaket_Inventory_Product_Variant_Bool_Exp>;
  min_available_qty?: Maybe<Int_Comparison_Exp>;
  override_capital_price?: Maybe<Int_Comparison_Exp>;
  override_discount?: Maybe<Int_Comparison_Exp>;
  override_selling_price?: Maybe<Int_Comparison_Exp>;
  product?: Maybe<Rocketjaket_Product_Bool_Exp>;
  product_id?: Maybe<Uuid_Comparison_Exp>;
  store_id?: Maybe<Int_Comparison_Exp>;
  transaction_items?: Maybe<Rocketjaket_Transaction_Item_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "rocketjaket.inventory_product" */
export enum Rocketjaket_Inventory_Product_Constraint {
  /** unique or primary key constraint */
  InventoryProductPkey = 'inventory_product_pkey'
}

/** input type for incrementing numeric columns in table "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Inc_Input = {
  available_qty?: Maybe<Scalars['Int']>;
  min_available_qty?: Maybe<Scalars['Int']>;
  override_capital_price?: Maybe<Scalars['Int']>;
  override_discount?: Maybe<Scalars['Int']>;
  override_selling_price?: Maybe<Scalars['Int']>;
  store_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Insert_Input = {
  available_qty?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  inventory_product_variants?: Maybe<Rocketjaket_Inventory_Product_Variant_Arr_Rel_Insert_Input>;
  min_available_qty?: Maybe<Scalars['Int']>;
  override_capital_price?: Maybe<Scalars['Int']>;
  override_discount?: Maybe<Scalars['Int']>;
  override_selling_price?: Maybe<Scalars['Int']>;
  product?: Maybe<Rocketjaket_Product_Obj_Rel_Insert_Input>;
  product_id?: Maybe<Scalars['uuid']>;
  store_id?: Maybe<Scalars['Int']>;
  transaction_items?: Maybe<Rocketjaket_Transaction_Item_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Rocketjaket_Inventory_Product_Max_Fields = {
  __typename?: 'rocketjaket_inventory_product_max_fields';
  available_qty?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  min_available_qty?: Maybe<Scalars['Int']>;
  override_capital_price?: Maybe<Scalars['Int']>;
  override_discount?: Maybe<Scalars['Int']>;
  override_selling_price?: Maybe<Scalars['Int']>;
  product_id?: Maybe<Scalars['uuid']>;
  store_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Max_Order_By = {
  available_qty?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  min_available_qty?: Maybe<Order_By>;
  override_capital_price?: Maybe<Order_By>;
  override_discount?: Maybe<Order_By>;
  override_selling_price?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Rocketjaket_Inventory_Product_Min_Fields = {
  __typename?: 'rocketjaket_inventory_product_min_fields';
  available_qty?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  min_available_qty?: Maybe<Scalars['Int']>;
  override_capital_price?: Maybe<Scalars['Int']>;
  override_discount?: Maybe<Scalars['Int']>;
  override_selling_price?: Maybe<Scalars['Int']>;
  product_id?: Maybe<Scalars['uuid']>;
  store_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Min_Order_By = {
  available_qty?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  min_available_qty?: Maybe<Order_By>;
  override_capital_price?: Maybe<Order_By>;
  override_discount?: Maybe<Order_By>;
  override_selling_price?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Mutation_Response = {
  __typename?: 'rocketjaket_inventory_product_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rocketjaket_Inventory_Product>;
};

/** input type for inserting object relation for remote table "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Obj_Rel_Insert_Input = {
  data: Rocketjaket_Inventory_Product_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Rocketjaket_Inventory_Product_On_Conflict>;
};

/** on conflict condition type for table "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_On_Conflict = {
  constraint: Rocketjaket_Inventory_Product_Constraint;
  update_columns?: Array<Rocketjaket_Inventory_Product_Update_Column>;
  where?: Maybe<Rocketjaket_Inventory_Product_Bool_Exp>;
};

/** Ordering options when selecting data from "rocketjaket.inventory_product". */
export type Rocketjaket_Inventory_Product_Order_By = {
  available_qty?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inventory_product_variants_aggregate?: Maybe<Rocketjaket_Inventory_Product_Variant_Aggregate_Order_By>;
  min_available_qty?: Maybe<Order_By>;
  override_capital_price?: Maybe<Order_By>;
  override_discount?: Maybe<Order_By>;
  override_selling_price?: Maybe<Order_By>;
  product?: Maybe<Rocketjaket_Product_Order_By>;
  product_id?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
  transaction_items_aggregate?: Maybe<Rocketjaket_Transaction_Item_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: rocketjaket_inventory_product */
export type Rocketjaket_Inventory_Product_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "rocketjaket.inventory_product" */
export enum Rocketjaket_Inventory_Product_Select_Column {
  /** column name */
  AvailableQty = 'available_qty',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MinAvailableQty = 'min_available_qty',
  /** column name */
  OverrideCapitalPrice = 'override_capital_price',
  /** column name */
  OverrideDiscount = 'override_discount',
  /** column name */
  OverrideSellingPrice = 'override_selling_price',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  StoreId = 'store_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Set_Input = {
  available_qty?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  min_available_qty?: Maybe<Scalars['Int']>;
  override_capital_price?: Maybe<Scalars['Int']>;
  override_discount?: Maybe<Scalars['Int']>;
  override_selling_price?: Maybe<Scalars['Int']>;
  product_id?: Maybe<Scalars['uuid']>;
  store_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Rocketjaket_Inventory_Product_Stddev_Fields = {
  __typename?: 'rocketjaket_inventory_product_stddev_fields';
  available_qty?: Maybe<Scalars['Float']>;
  min_available_qty?: Maybe<Scalars['Float']>;
  override_capital_price?: Maybe<Scalars['Float']>;
  override_discount?: Maybe<Scalars['Float']>;
  override_selling_price?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Stddev_Order_By = {
  available_qty?: Maybe<Order_By>;
  min_available_qty?: Maybe<Order_By>;
  override_capital_price?: Maybe<Order_By>;
  override_discount?: Maybe<Order_By>;
  override_selling_price?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Rocketjaket_Inventory_Product_Stddev_Pop_Fields = {
  __typename?: 'rocketjaket_inventory_product_stddev_pop_fields';
  available_qty?: Maybe<Scalars['Float']>;
  min_available_qty?: Maybe<Scalars['Float']>;
  override_capital_price?: Maybe<Scalars['Float']>;
  override_discount?: Maybe<Scalars['Float']>;
  override_selling_price?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Stddev_Pop_Order_By = {
  available_qty?: Maybe<Order_By>;
  min_available_qty?: Maybe<Order_By>;
  override_capital_price?: Maybe<Order_By>;
  override_discount?: Maybe<Order_By>;
  override_selling_price?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Rocketjaket_Inventory_Product_Stddev_Samp_Fields = {
  __typename?: 'rocketjaket_inventory_product_stddev_samp_fields';
  available_qty?: Maybe<Scalars['Float']>;
  min_available_qty?: Maybe<Scalars['Float']>;
  override_capital_price?: Maybe<Scalars['Float']>;
  override_discount?: Maybe<Scalars['Float']>;
  override_selling_price?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Stddev_Samp_Order_By = {
  available_qty?: Maybe<Order_By>;
  min_available_qty?: Maybe<Order_By>;
  override_capital_price?: Maybe<Order_By>;
  override_discount?: Maybe<Order_By>;
  override_selling_price?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Rocketjaket_Inventory_Product_Sum_Fields = {
  __typename?: 'rocketjaket_inventory_product_sum_fields';
  available_qty?: Maybe<Scalars['Int']>;
  min_available_qty?: Maybe<Scalars['Int']>;
  override_capital_price?: Maybe<Scalars['Int']>;
  override_discount?: Maybe<Scalars['Int']>;
  override_selling_price?: Maybe<Scalars['Int']>;
  store_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Sum_Order_By = {
  available_qty?: Maybe<Order_By>;
  min_available_qty?: Maybe<Order_By>;
  override_capital_price?: Maybe<Order_By>;
  override_discount?: Maybe<Order_By>;
  override_selling_price?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
};

/** update columns of table "rocketjaket.inventory_product" */
export enum Rocketjaket_Inventory_Product_Update_Column {
  /** column name */
  AvailableQty = 'available_qty',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MinAvailableQty = 'min_available_qty',
  /** column name */
  OverrideCapitalPrice = 'override_capital_price',
  /** column name */
  OverrideDiscount = 'override_discount',
  /** column name */
  OverrideSellingPrice = 'override_selling_price',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  StoreId = 'store_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Rocketjaket_Inventory_Product_Var_Pop_Fields = {
  __typename?: 'rocketjaket_inventory_product_var_pop_fields';
  available_qty?: Maybe<Scalars['Float']>;
  min_available_qty?: Maybe<Scalars['Float']>;
  override_capital_price?: Maybe<Scalars['Float']>;
  override_discount?: Maybe<Scalars['Float']>;
  override_selling_price?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Var_Pop_Order_By = {
  available_qty?: Maybe<Order_By>;
  min_available_qty?: Maybe<Order_By>;
  override_capital_price?: Maybe<Order_By>;
  override_discount?: Maybe<Order_By>;
  override_selling_price?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Rocketjaket_Inventory_Product_Var_Samp_Fields = {
  __typename?: 'rocketjaket_inventory_product_var_samp_fields';
  available_qty?: Maybe<Scalars['Float']>;
  min_available_qty?: Maybe<Scalars['Float']>;
  override_capital_price?: Maybe<Scalars['Float']>;
  override_discount?: Maybe<Scalars['Float']>;
  override_selling_price?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Var_Samp_Order_By = {
  available_qty?: Maybe<Order_By>;
  min_available_qty?: Maybe<Order_By>;
  override_capital_price?: Maybe<Order_By>;
  override_discount?: Maybe<Order_By>;
  override_selling_price?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Rocketjaket_Inventory_Product_Variance_Fields = {
  __typename?: 'rocketjaket_inventory_product_variance_fields';
  available_qty?: Maybe<Scalars['Float']>;
  min_available_qty?: Maybe<Scalars['Float']>;
  override_capital_price?: Maybe<Scalars['Float']>;
  override_discount?: Maybe<Scalars['Float']>;
  override_selling_price?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Variance_Order_By = {
  available_qty?: Maybe<Order_By>;
  min_available_qty?: Maybe<Order_By>;
  override_capital_price?: Maybe<Order_By>;
  override_discount?: Maybe<Order_By>;
  override_selling_price?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
};

/** columns and relationships of "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant = {
  __typename?: 'rocketjaket_inventory_product_variant';
  id: Scalars['Int'];
  /** An object relationship */
  inventory_product: Rocketjaket_Inventory_Product;
  inventory_product_id: Scalars['uuid'];
  /** An object relationship */
  inventory_variant_metadata: Rocketjaket_Inventory_Variant_Metadata;
  inventory_variant_metadata_id: Scalars['Int'];
};

/** aggregated selection of "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_Aggregate = {
  __typename?: 'rocketjaket_inventory_product_variant_aggregate';
  aggregate?: Maybe<Rocketjaket_Inventory_Product_Variant_Aggregate_Fields>;
  nodes: Array<Rocketjaket_Inventory_Product_Variant>;
};

/** aggregate fields of "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_Aggregate_Fields = {
  __typename?: 'rocketjaket_inventory_product_variant_aggregate_fields';
  avg?: Maybe<Rocketjaket_Inventory_Product_Variant_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Rocketjaket_Inventory_Product_Variant_Max_Fields>;
  min?: Maybe<Rocketjaket_Inventory_Product_Variant_Min_Fields>;
  stddev?: Maybe<Rocketjaket_Inventory_Product_Variant_Stddev_Fields>;
  stddev_pop?: Maybe<Rocketjaket_Inventory_Product_Variant_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rocketjaket_Inventory_Product_Variant_Stddev_Samp_Fields>;
  sum?: Maybe<Rocketjaket_Inventory_Product_Variant_Sum_Fields>;
  var_pop?: Maybe<Rocketjaket_Inventory_Product_Variant_Var_Pop_Fields>;
  var_samp?: Maybe<Rocketjaket_Inventory_Product_Variant_Var_Samp_Fields>;
  variance?: Maybe<Rocketjaket_Inventory_Product_Variant_Variance_Fields>;
};


/** aggregate fields of "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Rocketjaket_Inventory_Product_Variant_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_Aggregate_Order_By = {
  avg?: Maybe<Rocketjaket_Inventory_Product_Variant_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Rocketjaket_Inventory_Product_Variant_Max_Order_By>;
  min?: Maybe<Rocketjaket_Inventory_Product_Variant_Min_Order_By>;
  stddev?: Maybe<Rocketjaket_Inventory_Product_Variant_Stddev_Order_By>;
  stddev_pop?: Maybe<Rocketjaket_Inventory_Product_Variant_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Rocketjaket_Inventory_Product_Variant_Stddev_Samp_Order_By>;
  sum?: Maybe<Rocketjaket_Inventory_Product_Variant_Sum_Order_By>;
  var_pop?: Maybe<Rocketjaket_Inventory_Product_Variant_Var_Pop_Order_By>;
  var_samp?: Maybe<Rocketjaket_Inventory_Product_Variant_Var_Samp_Order_By>;
  variance?: Maybe<Rocketjaket_Inventory_Product_Variant_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_Arr_Rel_Insert_Input = {
  data: Array<Rocketjaket_Inventory_Product_Variant_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Rocketjaket_Inventory_Product_Variant_On_Conflict>;
};

/** aggregate avg on columns */
export type Rocketjaket_Inventory_Product_Variant_Avg_Fields = {
  __typename?: 'rocketjaket_inventory_product_variant_avg_fields';
  id?: Maybe<Scalars['Float']>;
  inventory_variant_metadata_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_Avg_Order_By = {
  id?: Maybe<Order_By>;
  inventory_variant_metadata_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "rocketjaket.inventory_product_variant". All fields are combined with a logical 'AND'. */
export type Rocketjaket_Inventory_Product_Variant_Bool_Exp = {
  _and?: Maybe<Array<Rocketjaket_Inventory_Product_Variant_Bool_Exp>>;
  _not?: Maybe<Rocketjaket_Inventory_Product_Variant_Bool_Exp>;
  _or?: Maybe<Array<Rocketjaket_Inventory_Product_Variant_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  inventory_product?: Maybe<Rocketjaket_Inventory_Product_Bool_Exp>;
  inventory_product_id?: Maybe<Uuid_Comparison_Exp>;
  inventory_variant_metadata?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Bool_Exp>;
  inventory_variant_metadata_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "rocketjaket.inventory_product_variant" */
export enum Rocketjaket_Inventory_Product_Variant_Constraint {
  /** unique or primary key constraint */
  InventoryProductVariantPkey = 'inventory_product_variant_pkey'
}

/** input type for incrementing numeric columns in table "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  inventory_variant_metadata_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  inventory_product?: Maybe<Rocketjaket_Inventory_Product_Obj_Rel_Insert_Input>;
  inventory_product_id?: Maybe<Scalars['uuid']>;
  inventory_variant_metadata?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Obj_Rel_Insert_Input>;
  inventory_variant_metadata_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Rocketjaket_Inventory_Product_Variant_Max_Fields = {
  __typename?: 'rocketjaket_inventory_product_variant_max_fields';
  id?: Maybe<Scalars['Int']>;
  inventory_product_id?: Maybe<Scalars['uuid']>;
  inventory_variant_metadata_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_Max_Order_By = {
  id?: Maybe<Order_By>;
  inventory_product_id?: Maybe<Order_By>;
  inventory_variant_metadata_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Rocketjaket_Inventory_Product_Variant_Min_Fields = {
  __typename?: 'rocketjaket_inventory_product_variant_min_fields';
  id?: Maybe<Scalars['Int']>;
  inventory_product_id?: Maybe<Scalars['uuid']>;
  inventory_variant_metadata_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_Min_Order_By = {
  id?: Maybe<Order_By>;
  inventory_product_id?: Maybe<Order_By>;
  inventory_variant_metadata_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_Mutation_Response = {
  __typename?: 'rocketjaket_inventory_product_variant_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rocketjaket_Inventory_Product_Variant>;
};

/** on conflict condition type for table "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_On_Conflict = {
  constraint: Rocketjaket_Inventory_Product_Variant_Constraint;
  update_columns?: Array<Rocketjaket_Inventory_Product_Variant_Update_Column>;
  where?: Maybe<Rocketjaket_Inventory_Product_Variant_Bool_Exp>;
};

/** Ordering options when selecting data from "rocketjaket.inventory_product_variant". */
export type Rocketjaket_Inventory_Product_Variant_Order_By = {
  id?: Maybe<Order_By>;
  inventory_product?: Maybe<Rocketjaket_Inventory_Product_Order_By>;
  inventory_product_id?: Maybe<Order_By>;
  inventory_variant_metadata?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Order_By>;
  inventory_variant_metadata_id?: Maybe<Order_By>;
};

/** primary key columns input for table: rocketjaket_inventory_product_variant */
export type Rocketjaket_Inventory_Product_Variant_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "rocketjaket.inventory_product_variant" */
export enum Rocketjaket_Inventory_Product_Variant_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  InventoryProductId = 'inventory_product_id',
  /** column name */
  InventoryVariantMetadataId = 'inventory_variant_metadata_id'
}

/** input type for updating data in table "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  inventory_product_id?: Maybe<Scalars['uuid']>;
  inventory_variant_metadata_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Rocketjaket_Inventory_Product_Variant_Stddev_Fields = {
  __typename?: 'rocketjaket_inventory_product_variant_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  inventory_variant_metadata_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  inventory_variant_metadata_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Rocketjaket_Inventory_Product_Variant_Stddev_Pop_Fields = {
  __typename?: 'rocketjaket_inventory_product_variant_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  inventory_variant_metadata_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  inventory_variant_metadata_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Rocketjaket_Inventory_Product_Variant_Stddev_Samp_Fields = {
  __typename?: 'rocketjaket_inventory_product_variant_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  inventory_variant_metadata_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  inventory_variant_metadata_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Rocketjaket_Inventory_Product_Variant_Sum_Fields = {
  __typename?: 'rocketjaket_inventory_product_variant_sum_fields';
  id?: Maybe<Scalars['Int']>;
  inventory_variant_metadata_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_Sum_Order_By = {
  id?: Maybe<Order_By>;
  inventory_variant_metadata_id?: Maybe<Order_By>;
};

/** update columns of table "rocketjaket.inventory_product_variant" */
export enum Rocketjaket_Inventory_Product_Variant_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  InventoryProductId = 'inventory_product_id',
  /** column name */
  InventoryVariantMetadataId = 'inventory_variant_metadata_id'
}

/** aggregate var_pop on columns */
export type Rocketjaket_Inventory_Product_Variant_Var_Pop_Fields = {
  __typename?: 'rocketjaket_inventory_product_variant_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  inventory_variant_metadata_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  inventory_variant_metadata_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Rocketjaket_Inventory_Product_Variant_Var_Samp_Fields = {
  __typename?: 'rocketjaket_inventory_product_variant_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  inventory_variant_metadata_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  inventory_variant_metadata_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Rocketjaket_Inventory_Product_Variant_Variance_Fields = {
  __typename?: 'rocketjaket_inventory_product_variant_variance_fields';
  id?: Maybe<Scalars['Float']>;
  inventory_variant_metadata_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_Variance_Order_By = {
  id?: Maybe<Order_By>;
  inventory_variant_metadata_id?: Maybe<Order_By>;
};

/** columns and relationships of "rocketjaket.inventory_variant_metadata" */
export type Rocketjaket_Inventory_Variant_Metadata = {
  __typename?: 'rocketjaket_inventory_variant_metadata';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An array relationship */
  inventory_product_variants: Array<Rocketjaket_Inventory_Product_Variant>;
  /** An aggregate relationship */
  inventory_product_variants_aggregate: Rocketjaket_Inventory_Product_Variant_Aggregate;
  updated_at: Scalars['timestamptz'];
  variant_title: Scalars['String'];
  variant_value: Scalars['String'];
};


/** columns and relationships of "rocketjaket.inventory_variant_metadata" */
export type Rocketjaket_Inventory_Variant_MetadataInventory_Product_VariantsArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Inventory_Product_Variant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Inventory_Product_Variant_Order_By>>;
  where?: Maybe<Rocketjaket_Inventory_Product_Variant_Bool_Exp>;
};


/** columns and relationships of "rocketjaket.inventory_variant_metadata" */
export type Rocketjaket_Inventory_Variant_MetadataInventory_Product_Variants_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Inventory_Product_Variant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Inventory_Product_Variant_Order_By>>;
  where?: Maybe<Rocketjaket_Inventory_Product_Variant_Bool_Exp>;
};

/** aggregated selection of "rocketjaket.inventory_variant_metadata" */
export type Rocketjaket_Inventory_Variant_Metadata_Aggregate = {
  __typename?: 'rocketjaket_inventory_variant_metadata_aggregate';
  aggregate?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Aggregate_Fields>;
  nodes: Array<Rocketjaket_Inventory_Variant_Metadata>;
};

/** aggregate fields of "rocketjaket.inventory_variant_metadata" */
export type Rocketjaket_Inventory_Variant_Metadata_Aggregate_Fields = {
  __typename?: 'rocketjaket_inventory_variant_metadata_aggregate_fields';
  avg?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Max_Fields>;
  min?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Min_Fields>;
  stddev?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Stddev_Fields>;
  stddev_pop?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Stddev_Samp_Fields>;
  sum?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Sum_Fields>;
  var_pop?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Var_Pop_Fields>;
  var_samp?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Var_Samp_Fields>;
  variance?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Variance_Fields>;
};


/** aggregate fields of "rocketjaket.inventory_variant_metadata" */
export type Rocketjaket_Inventory_Variant_Metadata_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Rocketjaket_Inventory_Variant_Metadata_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Rocketjaket_Inventory_Variant_Metadata_Avg_Fields = {
  __typename?: 'rocketjaket_inventory_variant_metadata_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "rocketjaket.inventory_variant_metadata". All fields are combined with a logical 'AND'. */
export type Rocketjaket_Inventory_Variant_Metadata_Bool_Exp = {
  _and?: Maybe<Array<Rocketjaket_Inventory_Variant_Metadata_Bool_Exp>>;
  _not?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Bool_Exp>;
  _or?: Maybe<Array<Rocketjaket_Inventory_Variant_Metadata_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  inventory_product_variants?: Maybe<Rocketjaket_Inventory_Product_Variant_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  variant_title?: Maybe<String_Comparison_Exp>;
  variant_value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "rocketjaket.inventory_variant_metadata" */
export enum Rocketjaket_Inventory_Variant_Metadata_Constraint {
  /** unique or primary key constraint */
  InventoryVariantMetadataPkey = 'inventory_variant_metadata_pkey'
}

/** input type for incrementing numeric columns in table "rocketjaket.inventory_variant_metadata" */
export type Rocketjaket_Inventory_Variant_Metadata_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "rocketjaket.inventory_variant_metadata" */
export type Rocketjaket_Inventory_Variant_Metadata_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  inventory_product_variants?: Maybe<Rocketjaket_Inventory_Product_Variant_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  variant_title?: Maybe<Scalars['String']>;
  variant_value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Rocketjaket_Inventory_Variant_Metadata_Max_Fields = {
  __typename?: 'rocketjaket_inventory_variant_metadata_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  variant_title?: Maybe<Scalars['String']>;
  variant_value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Rocketjaket_Inventory_Variant_Metadata_Min_Fields = {
  __typename?: 'rocketjaket_inventory_variant_metadata_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  variant_title?: Maybe<Scalars['String']>;
  variant_value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "rocketjaket.inventory_variant_metadata" */
export type Rocketjaket_Inventory_Variant_Metadata_Mutation_Response = {
  __typename?: 'rocketjaket_inventory_variant_metadata_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rocketjaket_Inventory_Variant_Metadata>;
};

/** input type for inserting object relation for remote table "rocketjaket.inventory_variant_metadata" */
export type Rocketjaket_Inventory_Variant_Metadata_Obj_Rel_Insert_Input = {
  data: Rocketjaket_Inventory_Variant_Metadata_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Rocketjaket_Inventory_Variant_Metadata_On_Conflict>;
};

/** on conflict condition type for table "rocketjaket.inventory_variant_metadata" */
export type Rocketjaket_Inventory_Variant_Metadata_On_Conflict = {
  constraint: Rocketjaket_Inventory_Variant_Metadata_Constraint;
  update_columns?: Array<Rocketjaket_Inventory_Variant_Metadata_Update_Column>;
  where?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Bool_Exp>;
};

/** Ordering options when selecting data from "rocketjaket.inventory_variant_metadata". */
export type Rocketjaket_Inventory_Variant_Metadata_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inventory_product_variants_aggregate?: Maybe<Rocketjaket_Inventory_Product_Variant_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  variant_title?: Maybe<Order_By>;
  variant_value?: Maybe<Order_By>;
};

/** primary key columns input for table: rocketjaket_inventory_variant_metadata */
export type Rocketjaket_Inventory_Variant_Metadata_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "rocketjaket.inventory_variant_metadata" */
export enum Rocketjaket_Inventory_Variant_Metadata_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VariantTitle = 'variant_title',
  /** column name */
  VariantValue = 'variant_value'
}

/** input type for updating data in table "rocketjaket.inventory_variant_metadata" */
export type Rocketjaket_Inventory_Variant_Metadata_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  variant_title?: Maybe<Scalars['String']>;
  variant_value?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Rocketjaket_Inventory_Variant_Metadata_Stddev_Fields = {
  __typename?: 'rocketjaket_inventory_variant_metadata_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Rocketjaket_Inventory_Variant_Metadata_Stddev_Pop_Fields = {
  __typename?: 'rocketjaket_inventory_variant_metadata_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Rocketjaket_Inventory_Variant_Metadata_Stddev_Samp_Fields = {
  __typename?: 'rocketjaket_inventory_variant_metadata_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Rocketjaket_Inventory_Variant_Metadata_Sum_Fields = {
  __typename?: 'rocketjaket_inventory_variant_metadata_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "rocketjaket.inventory_variant_metadata" */
export enum Rocketjaket_Inventory_Variant_Metadata_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VariantTitle = 'variant_title',
  /** column name */
  VariantValue = 'variant_value'
}

/** aggregate var_pop on columns */
export type Rocketjaket_Inventory_Variant_Metadata_Var_Pop_Fields = {
  __typename?: 'rocketjaket_inventory_variant_metadata_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Rocketjaket_Inventory_Variant_Metadata_Var_Samp_Fields = {
  __typename?: 'rocketjaket_inventory_variant_metadata_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Rocketjaket_Inventory_Variant_Metadata_Variance_Fields = {
  __typename?: 'rocketjaket_inventory_variant_metadata_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "rocketjaket.notification" */
export type Rocketjaket_Notification = {
  __typename?: 'rocketjaket_notification';
  id: Scalars['uuid'];
  notification_body: Scalars['String'];
  notification_title: Scalars['String'];
};

/** aggregated selection of "rocketjaket.notification" */
export type Rocketjaket_Notification_Aggregate = {
  __typename?: 'rocketjaket_notification_aggregate';
  aggregate?: Maybe<Rocketjaket_Notification_Aggregate_Fields>;
  nodes: Array<Rocketjaket_Notification>;
};

/** aggregate fields of "rocketjaket.notification" */
export type Rocketjaket_Notification_Aggregate_Fields = {
  __typename?: 'rocketjaket_notification_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Rocketjaket_Notification_Max_Fields>;
  min?: Maybe<Rocketjaket_Notification_Min_Fields>;
};


/** aggregate fields of "rocketjaket.notification" */
export type Rocketjaket_Notification_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Rocketjaket_Notification_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "rocketjaket.notification". All fields are combined with a logical 'AND'. */
export type Rocketjaket_Notification_Bool_Exp = {
  _and?: Maybe<Array<Rocketjaket_Notification_Bool_Exp>>;
  _not?: Maybe<Rocketjaket_Notification_Bool_Exp>;
  _or?: Maybe<Array<Rocketjaket_Notification_Bool_Exp>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  notification_body?: Maybe<String_Comparison_Exp>;
  notification_title?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "rocketjaket.notification" */
export enum Rocketjaket_Notification_Constraint {
  /** unique or primary key constraint */
  NotificationPkey = 'notification_pkey'
}

/** input type for inserting data into table "rocketjaket.notification" */
export type Rocketjaket_Notification_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
  notification_body?: Maybe<Scalars['String']>;
  notification_title?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Rocketjaket_Notification_Max_Fields = {
  __typename?: 'rocketjaket_notification_max_fields';
  id?: Maybe<Scalars['uuid']>;
  notification_body?: Maybe<Scalars['String']>;
  notification_title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Rocketjaket_Notification_Min_Fields = {
  __typename?: 'rocketjaket_notification_min_fields';
  id?: Maybe<Scalars['uuid']>;
  notification_body?: Maybe<Scalars['String']>;
  notification_title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "rocketjaket.notification" */
export type Rocketjaket_Notification_Mutation_Response = {
  __typename?: 'rocketjaket_notification_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rocketjaket_Notification>;
};

/** on conflict condition type for table "rocketjaket.notification" */
export type Rocketjaket_Notification_On_Conflict = {
  constraint: Rocketjaket_Notification_Constraint;
  update_columns?: Array<Rocketjaket_Notification_Update_Column>;
  where?: Maybe<Rocketjaket_Notification_Bool_Exp>;
};

/** Ordering options when selecting data from "rocketjaket.notification". */
export type Rocketjaket_Notification_Order_By = {
  id?: Maybe<Order_By>;
  notification_body?: Maybe<Order_By>;
  notification_title?: Maybe<Order_By>;
};

/** primary key columns input for table: rocketjaket_notification */
export type Rocketjaket_Notification_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "rocketjaket.notification" */
export enum Rocketjaket_Notification_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  NotificationBody = 'notification_body',
  /** column name */
  NotificationTitle = 'notification_title'
}

/** input type for updating data in table "rocketjaket.notification" */
export type Rocketjaket_Notification_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  notification_body?: Maybe<Scalars['String']>;
  notification_title?: Maybe<Scalars['String']>;
};

/** update columns of table "rocketjaket.notification" */
export enum Rocketjaket_Notification_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  NotificationBody = 'notification_body',
  /** column name */
  NotificationTitle = 'notification_title'
}

/** columns and relationships of "rocketjaket.product" */
export type Rocketjaket_Product = {
  __typename?: 'rocketjaket_product';
  capital_price: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  discount: Scalars['Int'];
  id: Scalars['uuid'];
  /** An array relationship */
  inventory_products: Array<Rocketjaket_Inventory_Product>;
  /** An aggregate relationship */
  inventory_products_aggregate: Rocketjaket_Inventory_Product_Aggregate;
  name: Scalars['String'];
  photo_url?: Maybe<Scalars['String']>;
  /** An object relationship */
  product_category: Rocketjaket_Product_Category;
  product_category_id: Scalars['Int'];
  selling_price: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "rocketjaket.product" */
export type Rocketjaket_ProductInventory_ProductsArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Inventory_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Inventory_Product_Order_By>>;
  where?: Maybe<Rocketjaket_Inventory_Product_Bool_Exp>;
};


/** columns and relationships of "rocketjaket.product" */
export type Rocketjaket_ProductInventory_Products_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Inventory_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Inventory_Product_Order_By>>;
  where?: Maybe<Rocketjaket_Inventory_Product_Bool_Exp>;
};

/** aggregated selection of "rocketjaket.product" */
export type Rocketjaket_Product_Aggregate = {
  __typename?: 'rocketjaket_product_aggregate';
  aggregate?: Maybe<Rocketjaket_Product_Aggregate_Fields>;
  nodes: Array<Rocketjaket_Product>;
};

/** aggregate fields of "rocketjaket.product" */
export type Rocketjaket_Product_Aggregate_Fields = {
  __typename?: 'rocketjaket_product_aggregate_fields';
  avg?: Maybe<Rocketjaket_Product_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Rocketjaket_Product_Max_Fields>;
  min?: Maybe<Rocketjaket_Product_Min_Fields>;
  stddev?: Maybe<Rocketjaket_Product_Stddev_Fields>;
  stddev_pop?: Maybe<Rocketjaket_Product_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rocketjaket_Product_Stddev_Samp_Fields>;
  sum?: Maybe<Rocketjaket_Product_Sum_Fields>;
  var_pop?: Maybe<Rocketjaket_Product_Var_Pop_Fields>;
  var_samp?: Maybe<Rocketjaket_Product_Var_Samp_Fields>;
  variance?: Maybe<Rocketjaket_Product_Variance_Fields>;
};


/** aggregate fields of "rocketjaket.product" */
export type Rocketjaket_Product_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Rocketjaket_Product_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "rocketjaket.product" */
export type Rocketjaket_Product_Aggregate_Order_By = {
  avg?: Maybe<Rocketjaket_Product_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Rocketjaket_Product_Max_Order_By>;
  min?: Maybe<Rocketjaket_Product_Min_Order_By>;
  stddev?: Maybe<Rocketjaket_Product_Stddev_Order_By>;
  stddev_pop?: Maybe<Rocketjaket_Product_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Rocketjaket_Product_Stddev_Samp_Order_By>;
  sum?: Maybe<Rocketjaket_Product_Sum_Order_By>;
  var_pop?: Maybe<Rocketjaket_Product_Var_Pop_Order_By>;
  var_samp?: Maybe<Rocketjaket_Product_Var_Samp_Order_By>;
  variance?: Maybe<Rocketjaket_Product_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "rocketjaket.product" */
export type Rocketjaket_Product_Arr_Rel_Insert_Input = {
  data: Array<Rocketjaket_Product_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Rocketjaket_Product_On_Conflict>;
};

/** aggregate avg on columns */
export type Rocketjaket_Product_Avg_Fields = {
  __typename?: 'rocketjaket_product_avg_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  product_category_id?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "rocketjaket.product" */
export type Rocketjaket_Product_Avg_Order_By = {
  capital_price?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  product_category_id?: Maybe<Order_By>;
  selling_price?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "rocketjaket.product". All fields are combined with a logical 'AND'. */
export type Rocketjaket_Product_Bool_Exp = {
  _and?: Maybe<Array<Rocketjaket_Product_Bool_Exp>>;
  _not?: Maybe<Rocketjaket_Product_Bool_Exp>;
  _or?: Maybe<Array<Rocketjaket_Product_Bool_Exp>>;
  capital_price?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  discount?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  inventory_products?: Maybe<Rocketjaket_Inventory_Product_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  photo_url?: Maybe<String_Comparison_Exp>;
  product_category?: Maybe<Rocketjaket_Product_Category_Bool_Exp>;
  product_category_id?: Maybe<Int_Comparison_Exp>;
  selling_price?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** columns and relationships of "rocketjaket.product_category" */
export type Rocketjaket_Product_Category = {
  __typename?: 'rocketjaket_product_category';
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  products: Array<Rocketjaket_Product>;
  /** An aggregate relationship */
  products_aggregate: Rocketjaket_Product_Aggregate;
};


/** columns and relationships of "rocketjaket.product_category" */
export type Rocketjaket_Product_CategoryProductsArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Product_Order_By>>;
  where?: Maybe<Rocketjaket_Product_Bool_Exp>;
};


/** columns and relationships of "rocketjaket.product_category" */
export type Rocketjaket_Product_CategoryProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Product_Order_By>>;
  where?: Maybe<Rocketjaket_Product_Bool_Exp>;
};

/** aggregated selection of "rocketjaket.product_category" */
export type Rocketjaket_Product_Category_Aggregate = {
  __typename?: 'rocketjaket_product_category_aggregate';
  aggregate?: Maybe<Rocketjaket_Product_Category_Aggregate_Fields>;
  nodes: Array<Rocketjaket_Product_Category>;
};

/** aggregate fields of "rocketjaket.product_category" */
export type Rocketjaket_Product_Category_Aggregate_Fields = {
  __typename?: 'rocketjaket_product_category_aggregate_fields';
  avg?: Maybe<Rocketjaket_Product_Category_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Rocketjaket_Product_Category_Max_Fields>;
  min?: Maybe<Rocketjaket_Product_Category_Min_Fields>;
  stddev?: Maybe<Rocketjaket_Product_Category_Stddev_Fields>;
  stddev_pop?: Maybe<Rocketjaket_Product_Category_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rocketjaket_Product_Category_Stddev_Samp_Fields>;
  sum?: Maybe<Rocketjaket_Product_Category_Sum_Fields>;
  var_pop?: Maybe<Rocketjaket_Product_Category_Var_Pop_Fields>;
  var_samp?: Maybe<Rocketjaket_Product_Category_Var_Samp_Fields>;
  variance?: Maybe<Rocketjaket_Product_Category_Variance_Fields>;
};


/** aggregate fields of "rocketjaket.product_category" */
export type Rocketjaket_Product_Category_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Rocketjaket_Product_Category_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Rocketjaket_Product_Category_Avg_Fields = {
  __typename?: 'rocketjaket_product_category_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "rocketjaket.product_category". All fields are combined with a logical 'AND'. */
export type Rocketjaket_Product_Category_Bool_Exp = {
  _and?: Maybe<Array<Rocketjaket_Product_Category_Bool_Exp>>;
  _not?: Maybe<Rocketjaket_Product_Category_Bool_Exp>;
  _or?: Maybe<Array<Rocketjaket_Product_Category_Bool_Exp>>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  products?: Maybe<Rocketjaket_Product_Bool_Exp>;
};

/** unique or primary key constraints on table "rocketjaket.product_category" */
export enum Rocketjaket_Product_Category_Constraint {
  /** unique or primary key constraint */
  ProductCategoryPkey = 'product_category_pkey'
}

/** input type for incrementing numeric columns in table "rocketjaket.product_category" */
export type Rocketjaket_Product_Category_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "rocketjaket.product_category" */
export type Rocketjaket_Product_Category_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  products?: Maybe<Rocketjaket_Product_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Rocketjaket_Product_Category_Max_Fields = {
  __typename?: 'rocketjaket_product_category_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Rocketjaket_Product_Category_Min_Fields = {
  __typename?: 'rocketjaket_product_category_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "rocketjaket.product_category" */
export type Rocketjaket_Product_Category_Mutation_Response = {
  __typename?: 'rocketjaket_product_category_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rocketjaket_Product_Category>;
};

/** input type for inserting object relation for remote table "rocketjaket.product_category" */
export type Rocketjaket_Product_Category_Obj_Rel_Insert_Input = {
  data: Rocketjaket_Product_Category_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Rocketjaket_Product_Category_On_Conflict>;
};

/** on conflict condition type for table "rocketjaket.product_category" */
export type Rocketjaket_Product_Category_On_Conflict = {
  constraint: Rocketjaket_Product_Category_Constraint;
  update_columns?: Array<Rocketjaket_Product_Category_Update_Column>;
  where?: Maybe<Rocketjaket_Product_Category_Bool_Exp>;
};

/** Ordering options when selecting data from "rocketjaket.product_category". */
export type Rocketjaket_Product_Category_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  products_aggregate?: Maybe<Rocketjaket_Product_Aggregate_Order_By>;
};

/** primary key columns input for table: rocketjaket_product_category */
export type Rocketjaket_Product_Category_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "rocketjaket.product_category" */
export enum Rocketjaket_Product_Category_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "rocketjaket.product_category" */
export type Rocketjaket_Product_Category_Set_Input = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Rocketjaket_Product_Category_Stddev_Fields = {
  __typename?: 'rocketjaket_product_category_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Rocketjaket_Product_Category_Stddev_Pop_Fields = {
  __typename?: 'rocketjaket_product_category_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Rocketjaket_Product_Category_Stddev_Samp_Fields = {
  __typename?: 'rocketjaket_product_category_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Rocketjaket_Product_Category_Sum_Fields = {
  __typename?: 'rocketjaket_product_category_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "rocketjaket.product_category" */
export enum Rocketjaket_Product_Category_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Rocketjaket_Product_Category_Var_Pop_Fields = {
  __typename?: 'rocketjaket_product_category_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Rocketjaket_Product_Category_Var_Samp_Fields = {
  __typename?: 'rocketjaket_product_category_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Rocketjaket_Product_Category_Variance_Fields = {
  __typename?: 'rocketjaket_product_category_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** unique or primary key constraints on table "rocketjaket.product" */
export enum Rocketjaket_Product_Constraint {
  /** unique or primary key constraint */
  ProductPkey = 'product_pkey'
}

/** input type for incrementing numeric columns in table "rocketjaket.product" */
export type Rocketjaket_Product_Inc_Input = {
  capital_price?: Maybe<Scalars['Int']>;
  discount?: Maybe<Scalars['Int']>;
  product_category_id?: Maybe<Scalars['Int']>;
  selling_price?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "rocketjaket.product" */
export type Rocketjaket_Product_Insert_Input = {
  capital_price?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  discount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  inventory_products?: Maybe<Rocketjaket_Inventory_Product_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  photo_url?: Maybe<Scalars['String']>;
  product_category?: Maybe<Rocketjaket_Product_Category_Obj_Rel_Insert_Input>;
  product_category_id?: Maybe<Scalars['Int']>;
  selling_price?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Rocketjaket_Product_Max_Fields = {
  __typename?: 'rocketjaket_product_max_fields';
  capital_price?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  discount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  photo_url?: Maybe<Scalars['String']>;
  product_category_id?: Maybe<Scalars['Int']>;
  selling_price?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "rocketjaket.product" */
export type Rocketjaket_Product_Max_Order_By = {
  capital_price?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  photo_url?: Maybe<Order_By>;
  product_category_id?: Maybe<Order_By>;
  selling_price?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Rocketjaket_Product_Min_Fields = {
  __typename?: 'rocketjaket_product_min_fields';
  capital_price?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  discount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  photo_url?: Maybe<Scalars['String']>;
  product_category_id?: Maybe<Scalars['Int']>;
  selling_price?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "rocketjaket.product" */
export type Rocketjaket_Product_Min_Order_By = {
  capital_price?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  photo_url?: Maybe<Order_By>;
  product_category_id?: Maybe<Order_By>;
  selling_price?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "rocketjaket.product" */
export type Rocketjaket_Product_Mutation_Response = {
  __typename?: 'rocketjaket_product_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rocketjaket_Product>;
};

/** input type for inserting object relation for remote table "rocketjaket.product" */
export type Rocketjaket_Product_Obj_Rel_Insert_Input = {
  data: Rocketjaket_Product_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Rocketjaket_Product_On_Conflict>;
};

/** on conflict condition type for table "rocketjaket.product" */
export type Rocketjaket_Product_On_Conflict = {
  constraint: Rocketjaket_Product_Constraint;
  update_columns?: Array<Rocketjaket_Product_Update_Column>;
  where?: Maybe<Rocketjaket_Product_Bool_Exp>;
};

/** Ordering options when selecting data from "rocketjaket.product". */
export type Rocketjaket_Product_Order_By = {
  capital_price?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inventory_products_aggregate?: Maybe<Rocketjaket_Inventory_Product_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  photo_url?: Maybe<Order_By>;
  product_category?: Maybe<Rocketjaket_Product_Category_Order_By>;
  product_category_id?: Maybe<Order_By>;
  selling_price?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: rocketjaket_product */
export type Rocketjaket_Product_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "rocketjaket.product" */
export enum Rocketjaket_Product_Select_Column {
  /** column name */
  CapitalPrice = 'capital_price',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Discount = 'discount',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PhotoUrl = 'photo_url',
  /** column name */
  ProductCategoryId = 'product_category_id',
  /** column name */
  SellingPrice = 'selling_price',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rocketjaket.product" */
export type Rocketjaket_Product_Set_Input = {
  capital_price?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  discount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  photo_url?: Maybe<Scalars['String']>;
  product_category_id?: Maybe<Scalars['Int']>;
  selling_price?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Rocketjaket_Product_Stddev_Fields = {
  __typename?: 'rocketjaket_product_stddev_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  product_category_id?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "rocketjaket.product" */
export type Rocketjaket_Product_Stddev_Order_By = {
  capital_price?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  product_category_id?: Maybe<Order_By>;
  selling_price?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Rocketjaket_Product_Stddev_Pop_Fields = {
  __typename?: 'rocketjaket_product_stddev_pop_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  product_category_id?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "rocketjaket.product" */
export type Rocketjaket_Product_Stddev_Pop_Order_By = {
  capital_price?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  product_category_id?: Maybe<Order_By>;
  selling_price?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Rocketjaket_Product_Stddev_Samp_Fields = {
  __typename?: 'rocketjaket_product_stddev_samp_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  product_category_id?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "rocketjaket.product" */
export type Rocketjaket_Product_Stddev_Samp_Order_By = {
  capital_price?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  product_category_id?: Maybe<Order_By>;
  selling_price?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Rocketjaket_Product_Sum_Fields = {
  __typename?: 'rocketjaket_product_sum_fields';
  capital_price?: Maybe<Scalars['Int']>;
  discount?: Maybe<Scalars['Int']>;
  product_category_id?: Maybe<Scalars['Int']>;
  selling_price?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "rocketjaket.product" */
export type Rocketjaket_Product_Sum_Order_By = {
  capital_price?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  product_category_id?: Maybe<Order_By>;
  selling_price?: Maybe<Order_By>;
};

/** update columns of table "rocketjaket.product" */
export enum Rocketjaket_Product_Update_Column {
  /** column name */
  CapitalPrice = 'capital_price',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Discount = 'discount',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PhotoUrl = 'photo_url',
  /** column name */
  ProductCategoryId = 'product_category_id',
  /** column name */
  SellingPrice = 'selling_price',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Rocketjaket_Product_Var_Pop_Fields = {
  __typename?: 'rocketjaket_product_var_pop_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  product_category_id?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "rocketjaket.product" */
export type Rocketjaket_Product_Var_Pop_Order_By = {
  capital_price?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  product_category_id?: Maybe<Order_By>;
  selling_price?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Rocketjaket_Product_Var_Samp_Fields = {
  __typename?: 'rocketjaket_product_var_samp_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  product_category_id?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "rocketjaket.product" */
export type Rocketjaket_Product_Var_Samp_Order_By = {
  capital_price?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  product_category_id?: Maybe<Order_By>;
  selling_price?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Rocketjaket_Product_Variance_Fields = {
  __typename?: 'rocketjaket_product_variance_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  product_category_id?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "rocketjaket.product" */
export type Rocketjaket_Product_Variance_Order_By = {
  capital_price?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  product_category_id?: Maybe<Order_By>;
  selling_price?: Maybe<Order_By>;
};

/** columns and relationships of "rocketjaket.store" */
export type Rocketjaket_Store = {
  __typename?: 'rocketjaket_store';
  address?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  /** An array relationship */
  transactions: Array<Rocketjaket_Transaction>;
  /** An aggregate relationship */
  transactions_aggregate: Rocketjaket_Transaction_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "rocketjaket.store" */
export type Rocketjaket_StoreTransactionsArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Bool_Exp>;
};


/** columns and relationships of "rocketjaket.store" */
export type Rocketjaket_StoreTransactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Bool_Exp>;
};

/** aggregated selection of "rocketjaket.store" */
export type Rocketjaket_Store_Aggregate = {
  __typename?: 'rocketjaket_store_aggregate';
  aggregate?: Maybe<Rocketjaket_Store_Aggregate_Fields>;
  nodes: Array<Rocketjaket_Store>;
};

/** aggregate fields of "rocketjaket.store" */
export type Rocketjaket_Store_Aggregate_Fields = {
  __typename?: 'rocketjaket_store_aggregate_fields';
  avg?: Maybe<Rocketjaket_Store_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Rocketjaket_Store_Max_Fields>;
  min?: Maybe<Rocketjaket_Store_Min_Fields>;
  stddev?: Maybe<Rocketjaket_Store_Stddev_Fields>;
  stddev_pop?: Maybe<Rocketjaket_Store_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rocketjaket_Store_Stddev_Samp_Fields>;
  sum?: Maybe<Rocketjaket_Store_Sum_Fields>;
  var_pop?: Maybe<Rocketjaket_Store_Var_Pop_Fields>;
  var_samp?: Maybe<Rocketjaket_Store_Var_Samp_Fields>;
  variance?: Maybe<Rocketjaket_Store_Variance_Fields>;
};


/** aggregate fields of "rocketjaket.store" */
export type Rocketjaket_Store_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Rocketjaket_Store_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Rocketjaket_Store_Avg_Fields = {
  __typename?: 'rocketjaket_store_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "rocketjaket.store". All fields are combined with a logical 'AND'. */
export type Rocketjaket_Store_Bool_Exp = {
  _and?: Maybe<Array<Rocketjaket_Store_Bool_Exp>>;
  _not?: Maybe<Rocketjaket_Store_Bool_Exp>;
  _or?: Maybe<Array<Rocketjaket_Store_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  latitude?: Maybe<String_Comparison_Exp>;
  longitude?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  transactions?: Maybe<Rocketjaket_Transaction_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "rocketjaket.store" */
export enum Rocketjaket_Store_Constraint {
  /** unique or primary key constraint */
  StoreNameKey = 'store_name_key',
  /** unique or primary key constraint */
  StorePkey = 'store_pkey'
}

/** input type for incrementing numeric columns in table "rocketjaket.store" */
export type Rocketjaket_Store_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "rocketjaket.store" */
export type Rocketjaket_Store_Insert_Input = {
  address?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  transactions?: Maybe<Rocketjaket_Transaction_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Rocketjaket_Store_Max_Fields = {
  __typename?: 'rocketjaket_store_max_fields';
  address?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Rocketjaket_Store_Min_Fields = {
  __typename?: 'rocketjaket_store_min_fields';
  address?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "rocketjaket.store" */
export type Rocketjaket_Store_Mutation_Response = {
  __typename?: 'rocketjaket_store_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rocketjaket_Store>;
};

/** input type for inserting object relation for remote table "rocketjaket.store" */
export type Rocketjaket_Store_Obj_Rel_Insert_Input = {
  data: Rocketjaket_Store_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Rocketjaket_Store_On_Conflict>;
};

/** on conflict condition type for table "rocketjaket.store" */
export type Rocketjaket_Store_On_Conflict = {
  constraint: Rocketjaket_Store_Constraint;
  update_columns?: Array<Rocketjaket_Store_Update_Column>;
  where?: Maybe<Rocketjaket_Store_Bool_Exp>;
};

/** Ordering options when selecting data from "rocketjaket.store". */
export type Rocketjaket_Store_Order_By = {
  address?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  transactions_aggregate?: Maybe<Rocketjaket_Transaction_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: rocketjaket_store */
export type Rocketjaket_Store_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "rocketjaket.store" */
export enum Rocketjaket_Store_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rocketjaket.store" */
export type Rocketjaket_Store_Set_Input = {
  address?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Rocketjaket_Store_Stddev_Fields = {
  __typename?: 'rocketjaket_store_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Rocketjaket_Store_Stddev_Pop_Fields = {
  __typename?: 'rocketjaket_store_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Rocketjaket_Store_Stddev_Samp_Fields = {
  __typename?: 'rocketjaket_store_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Rocketjaket_Store_Sum_Fields = {
  __typename?: 'rocketjaket_store_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "rocketjaket.store" */
export enum Rocketjaket_Store_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Rocketjaket_Store_Var_Pop_Fields = {
  __typename?: 'rocketjaket_store_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Rocketjaket_Store_Var_Samp_Fields = {
  __typename?: 'rocketjaket_store_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Rocketjaket_Store_Variance_Fields = {
  __typename?: 'rocketjaket_store_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "rocketjaket.transaction" */
export type Rocketjaket_Transaction = {
  __typename?: 'rocketjaket_transaction';
  cash_change?: Maybe<Scalars['Int']>;
  cash_in_amount: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  invoice_number: Scalars['String'];
  payment_type: Rocketjaket_Transaction_Payment_Type_Enum_Enum;
  refund_reason?: Maybe<Scalars['String']>;
  /** An object relationship */
  store?: Maybe<Rocketjaket_Store>;
  store_id?: Maybe<Scalars['Int']>;
  total_transaction: Scalars['Int'];
  /** An array relationship */
  transaction_items: Array<Rocketjaket_Transaction_Item>;
  /** An aggregate relationship */
  transaction_items_aggregate: Rocketjaket_Transaction_Item_Aggregate;
  /** An object relationship */
  transaction_payment_type_enum: Rocketjaket_Transaction_Payment_Type_Enum;
  /** An array relationship */
  transaction_receipts: Array<Rocketjaket_Transaction_Receipt>;
  /** An aggregate relationship */
  transaction_receipts_aggregate: Rocketjaket_Transaction_Receipt_Aggregate;
  transaction_status: Rocketjaket_Transaction_Status_Enum_Enum;
  /** An object relationship */
  transaction_status_enum: Rocketjaket_Transaction_Status_Enum;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};


/** columns and relationships of "rocketjaket.transaction" */
export type Rocketjaket_TransactionTransaction_ItemsArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Item_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Item_Bool_Exp>;
};


/** columns and relationships of "rocketjaket.transaction" */
export type Rocketjaket_TransactionTransaction_Items_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Item_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Item_Bool_Exp>;
};


/** columns and relationships of "rocketjaket.transaction" */
export type Rocketjaket_TransactionTransaction_ReceiptsArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Receipt_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Receipt_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Receipt_Bool_Exp>;
};


/** columns and relationships of "rocketjaket.transaction" */
export type Rocketjaket_TransactionTransaction_Receipts_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Receipt_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Receipt_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Receipt_Bool_Exp>;
};

/** aggregated selection of "rocketjaket.transaction" */
export type Rocketjaket_Transaction_Aggregate = {
  __typename?: 'rocketjaket_transaction_aggregate';
  aggregate?: Maybe<Rocketjaket_Transaction_Aggregate_Fields>;
  nodes: Array<Rocketjaket_Transaction>;
};

/** aggregate fields of "rocketjaket.transaction" */
export type Rocketjaket_Transaction_Aggregate_Fields = {
  __typename?: 'rocketjaket_transaction_aggregate_fields';
  avg?: Maybe<Rocketjaket_Transaction_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Rocketjaket_Transaction_Max_Fields>;
  min?: Maybe<Rocketjaket_Transaction_Min_Fields>;
  stddev?: Maybe<Rocketjaket_Transaction_Stddev_Fields>;
  stddev_pop?: Maybe<Rocketjaket_Transaction_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rocketjaket_Transaction_Stddev_Samp_Fields>;
  sum?: Maybe<Rocketjaket_Transaction_Sum_Fields>;
  var_pop?: Maybe<Rocketjaket_Transaction_Var_Pop_Fields>;
  var_samp?: Maybe<Rocketjaket_Transaction_Var_Samp_Fields>;
  variance?: Maybe<Rocketjaket_Transaction_Variance_Fields>;
};


/** aggregate fields of "rocketjaket.transaction" */
export type Rocketjaket_Transaction_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Rocketjaket_Transaction_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "rocketjaket.transaction" */
export type Rocketjaket_Transaction_Aggregate_Order_By = {
  avg?: Maybe<Rocketjaket_Transaction_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Rocketjaket_Transaction_Max_Order_By>;
  min?: Maybe<Rocketjaket_Transaction_Min_Order_By>;
  stddev?: Maybe<Rocketjaket_Transaction_Stddev_Order_By>;
  stddev_pop?: Maybe<Rocketjaket_Transaction_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Rocketjaket_Transaction_Stddev_Samp_Order_By>;
  sum?: Maybe<Rocketjaket_Transaction_Sum_Order_By>;
  var_pop?: Maybe<Rocketjaket_Transaction_Var_Pop_Order_By>;
  var_samp?: Maybe<Rocketjaket_Transaction_Var_Samp_Order_By>;
  variance?: Maybe<Rocketjaket_Transaction_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "rocketjaket.transaction" */
export type Rocketjaket_Transaction_Arr_Rel_Insert_Input = {
  data: Array<Rocketjaket_Transaction_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Rocketjaket_Transaction_On_Conflict>;
};

/** aggregate avg on columns */
export type Rocketjaket_Transaction_Avg_Fields = {
  __typename?: 'rocketjaket_transaction_avg_fields';
  cash_change?: Maybe<Scalars['Float']>;
  cash_in_amount?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
  total_transaction?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "rocketjaket.transaction" */
export type Rocketjaket_Transaction_Avg_Order_By = {
  cash_change?: Maybe<Order_By>;
  cash_in_amount?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
  total_transaction?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "rocketjaket.transaction". All fields are combined with a logical 'AND'. */
export type Rocketjaket_Transaction_Bool_Exp = {
  _and?: Maybe<Array<Rocketjaket_Transaction_Bool_Exp>>;
  _not?: Maybe<Rocketjaket_Transaction_Bool_Exp>;
  _or?: Maybe<Array<Rocketjaket_Transaction_Bool_Exp>>;
  cash_change?: Maybe<Int_Comparison_Exp>;
  cash_in_amount?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  invoice_number?: Maybe<String_Comparison_Exp>;
  payment_type?: Maybe<Rocketjaket_Transaction_Payment_Type_Enum_Enum_Comparison_Exp>;
  refund_reason?: Maybe<String_Comparison_Exp>;
  store?: Maybe<Rocketjaket_Store_Bool_Exp>;
  store_id?: Maybe<Int_Comparison_Exp>;
  total_transaction?: Maybe<Int_Comparison_Exp>;
  transaction_items?: Maybe<Rocketjaket_Transaction_Item_Bool_Exp>;
  transaction_payment_type_enum?: Maybe<Rocketjaket_Transaction_Payment_Type_Enum_Bool_Exp>;
  transaction_receipts?: Maybe<Rocketjaket_Transaction_Receipt_Bool_Exp>;
  transaction_status?: Maybe<Rocketjaket_Transaction_Status_Enum_Enum_Comparison_Exp>;
  transaction_status_enum?: Maybe<Rocketjaket_Transaction_Status_Enum_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "rocketjaket.transaction" */
export enum Rocketjaket_Transaction_Constraint {
  /** unique or primary key constraint */
  TransactionPkey = 'transaction_pkey'
}

/** input type for incrementing numeric columns in table "rocketjaket.transaction" */
export type Rocketjaket_Transaction_Inc_Input = {
  cash_change?: Maybe<Scalars['Int']>;
  cash_in_amount?: Maybe<Scalars['Int']>;
  store_id?: Maybe<Scalars['Int']>;
  total_transaction?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "rocketjaket.transaction" */
export type Rocketjaket_Transaction_Insert_Input = {
  cash_change?: Maybe<Scalars['Int']>;
  cash_in_amount?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  invoice_number?: Maybe<Scalars['String']>;
  payment_type?: Maybe<Rocketjaket_Transaction_Payment_Type_Enum_Enum>;
  refund_reason?: Maybe<Scalars['String']>;
  store?: Maybe<Rocketjaket_Store_Obj_Rel_Insert_Input>;
  store_id?: Maybe<Scalars['Int']>;
  total_transaction?: Maybe<Scalars['Int']>;
  transaction_items?: Maybe<Rocketjaket_Transaction_Item_Arr_Rel_Insert_Input>;
  transaction_payment_type_enum?: Maybe<Rocketjaket_Transaction_Payment_Type_Enum_Obj_Rel_Insert_Input>;
  transaction_receipts?: Maybe<Rocketjaket_Transaction_Receipt_Arr_Rel_Insert_Input>;
  transaction_status?: Maybe<Rocketjaket_Transaction_Status_Enum_Enum>;
  transaction_status_enum?: Maybe<Rocketjaket_Transaction_Status_Enum_Obj_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** columns and relationships of "rocketjaket.transaction_item" */
export type Rocketjaket_Transaction_Item = {
  __typename?: 'rocketjaket_transaction_item';
  capital_price: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  discount: Scalars['Int'];
  id: Scalars['uuid'];
  /** An object relationship */
  inventory_product: Rocketjaket_Inventory_Product;
  inventory_product_id: Scalars['uuid'];
  product_name: Scalars['String'];
  profit: Scalars['Int'];
  purchase_qty: Scalars['Int'];
  selling_price: Scalars['Int'];
  subtotal: Scalars['Int'];
  /** An object relationship */
  transaction: Rocketjaket_Transaction;
  transaction_invoice_number: Scalars['String'];
  transaction_status: Rocketjaket_Transaction_Status_Enum_Enum;
  /** An object relationship */
  transaction_status_enum: Rocketjaket_Transaction_Status_Enum;
  updated_at: Scalars['timestamptz'];
  variant: Scalars['String'];
};

/** aggregated selection of "rocketjaket.transaction_item" */
export type Rocketjaket_Transaction_Item_Aggregate = {
  __typename?: 'rocketjaket_transaction_item_aggregate';
  aggregate?: Maybe<Rocketjaket_Transaction_Item_Aggregate_Fields>;
  nodes: Array<Rocketjaket_Transaction_Item>;
};

/** aggregate fields of "rocketjaket.transaction_item" */
export type Rocketjaket_Transaction_Item_Aggregate_Fields = {
  __typename?: 'rocketjaket_transaction_item_aggregate_fields';
  avg?: Maybe<Rocketjaket_Transaction_Item_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Rocketjaket_Transaction_Item_Max_Fields>;
  min?: Maybe<Rocketjaket_Transaction_Item_Min_Fields>;
  stddev?: Maybe<Rocketjaket_Transaction_Item_Stddev_Fields>;
  stddev_pop?: Maybe<Rocketjaket_Transaction_Item_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rocketjaket_Transaction_Item_Stddev_Samp_Fields>;
  sum?: Maybe<Rocketjaket_Transaction_Item_Sum_Fields>;
  var_pop?: Maybe<Rocketjaket_Transaction_Item_Var_Pop_Fields>;
  var_samp?: Maybe<Rocketjaket_Transaction_Item_Var_Samp_Fields>;
  variance?: Maybe<Rocketjaket_Transaction_Item_Variance_Fields>;
};


/** aggregate fields of "rocketjaket.transaction_item" */
export type Rocketjaket_Transaction_Item_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Rocketjaket_Transaction_Item_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "rocketjaket.transaction_item" */
export type Rocketjaket_Transaction_Item_Aggregate_Order_By = {
  avg?: Maybe<Rocketjaket_Transaction_Item_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Rocketjaket_Transaction_Item_Max_Order_By>;
  min?: Maybe<Rocketjaket_Transaction_Item_Min_Order_By>;
  stddev?: Maybe<Rocketjaket_Transaction_Item_Stddev_Order_By>;
  stddev_pop?: Maybe<Rocketjaket_Transaction_Item_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Rocketjaket_Transaction_Item_Stddev_Samp_Order_By>;
  sum?: Maybe<Rocketjaket_Transaction_Item_Sum_Order_By>;
  var_pop?: Maybe<Rocketjaket_Transaction_Item_Var_Pop_Order_By>;
  var_samp?: Maybe<Rocketjaket_Transaction_Item_Var_Samp_Order_By>;
  variance?: Maybe<Rocketjaket_Transaction_Item_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "rocketjaket.transaction_item" */
export type Rocketjaket_Transaction_Item_Arr_Rel_Insert_Input = {
  data: Array<Rocketjaket_Transaction_Item_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Rocketjaket_Transaction_Item_On_Conflict>;
};

/** aggregate avg on columns */
export type Rocketjaket_Transaction_Item_Avg_Fields = {
  __typename?: 'rocketjaket_transaction_item_avg_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  profit?: Maybe<Scalars['Float']>;
  purchase_qty?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
  subtotal?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "rocketjaket.transaction_item" */
export type Rocketjaket_Transaction_Item_Avg_Order_By = {
  capital_price?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  profit?: Maybe<Order_By>;
  purchase_qty?: Maybe<Order_By>;
  selling_price?: Maybe<Order_By>;
  subtotal?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "rocketjaket.transaction_item". All fields are combined with a logical 'AND'. */
export type Rocketjaket_Transaction_Item_Bool_Exp = {
  _and?: Maybe<Array<Rocketjaket_Transaction_Item_Bool_Exp>>;
  _not?: Maybe<Rocketjaket_Transaction_Item_Bool_Exp>;
  _or?: Maybe<Array<Rocketjaket_Transaction_Item_Bool_Exp>>;
  capital_price?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  discount?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  inventory_product?: Maybe<Rocketjaket_Inventory_Product_Bool_Exp>;
  inventory_product_id?: Maybe<Uuid_Comparison_Exp>;
  product_name?: Maybe<String_Comparison_Exp>;
  profit?: Maybe<Int_Comparison_Exp>;
  purchase_qty?: Maybe<Int_Comparison_Exp>;
  selling_price?: Maybe<Int_Comparison_Exp>;
  subtotal?: Maybe<Int_Comparison_Exp>;
  transaction?: Maybe<Rocketjaket_Transaction_Bool_Exp>;
  transaction_invoice_number?: Maybe<String_Comparison_Exp>;
  transaction_status?: Maybe<Rocketjaket_Transaction_Status_Enum_Enum_Comparison_Exp>;
  transaction_status_enum?: Maybe<Rocketjaket_Transaction_Status_Enum_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  variant?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "rocketjaket.transaction_item" */
export enum Rocketjaket_Transaction_Item_Constraint {
  /** unique or primary key constraint */
  TransactionItemPkey = 'transaction_item_pkey'
}

/** input type for incrementing numeric columns in table "rocketjaket.transaction_item" */
export type Rocketjaket_Transaction_Item_Inc_Input = {
  capital_price?: Maybe<Scalars['Int']>;
  discount?: Maybe<Scalars['Int']>;
  profit?: Maybe<Scalars['Int']>;
  purchase_qty?: Maybe<Scalars['Int']>;
  selling_price?: Maybe<Scalars['Int']>;
  subtotal?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "rocketjaket.transaction_item" */
export type Rocketjaket_Transaction_Item_Insert_Input = {
  capital_price?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  discount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  inventory_product?: Maybe<Rocketjaket_Inventory_Product_Obj_Rel_Insert_Input>;
  inventory_product_id?: Maybe<Scalars['uuid']>;
  product_name?: Maybe<Scalars['String']>;
  profit?: Maybe<Scalars['Int']>;
  purchase_qty?: Maybe<Scalars['Int']>;
  selling_price?: Maybe<Scalars['Int']>;
  subtotal?: Maybe<Scalars['Int']>;
  transaction?: Maybe<Rocketjaket_Transaction_Obj_Rel_Insert_Input>;
  transaction_invoice_number?: Maybe<Scalars['String']>;
  transaction_status?: Maybe<Rocketjaket_Transaction_Status_Enum_Enum>;
  transaction_status_enum?: Maybe<Rocketjaket_Transaction_Status_Enum_Obj_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  variant?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Rocketjaket_Transaction_Item_Max_Fields = {
  __typename?: 'rocketjaket_transaction_item_max_fields';
  capital_price?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  discount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  inventory_product_id?: Maybe<Scalars['uuid']>;
  product_name?: Maybe<Scalars['String']>;
  profit?: Maybe<Scalars['Int']>;
  purchase_qty?: Maybe<Scalars['Int']>;
  selling_price?: Maybe<Scalars['Int']>;
  subtotal?: Maybe<Scalars['Int']>;
  transaction_invoice_number?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  variant?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "rocketjaket.transaction_item" */
export type Rocketjaket_Transaction_Item_Max_Order_By = {
  capital_price?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inventory_product_id?: Maybe<Order_By>;
  product_name?: Maybe<Order_By>;
  profit?: Maybe<Order_By>;
  purchase_qty?: Maybe<Order_By>;
  selling_price?: Maybe<Order_By>;
  subtotal?: Maybe<Order_By>;
  transaction_invoice_number?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  variant?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Rocketjaket_Transaction_Item_Min_Fields = {
  __typename?: 'rocketjaket_transaction_item_min_fields';
  capital_price?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  discount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  inventory_product_id?: Maybe<Scalars['uuid']>;
  product_name?: Maybe<Scalars['String']>;
  profit?: Maybe<Scalars['Int']>;
  purchase_qty?: Maybe<Scalars['Int']>;
  selling_price?: Maybe<Scalars['Int']>;
  subtotal?: Maybe<Scalars['Int']>;
  transaction_invoice_number?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  variant?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "rocketjaket.transaction_item" */
export type Rocketjaket_Transaction_Item_Min_Order_By = {
  capital_price?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inventory_product_id?: Maybe<Order_By>;
  product_name?: Maybe<Order_By>;
  profit?: Maybe<Order_By>;
  purchase_qty?: Maybe<Order_By>;
  selling_price?: Maybe<Order_By>;
  subtotal?: Maybe<Order_By>;
  transaction_invoice_number?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  variant?: Maybe<Order_By>;
};

/** response of any mutation on the table "rocketjaket.transaction_item" */
export type Rocketjaket_Transaction_Item_Mutation_Response = {
  __typename?: 'rocketjaket_transaction_item_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rocketjaket_Transaction_Item>;
};

/** on conflict condition type for table "rocketjaket.transaction_item" */
export type Rocketjaket_Transaction_Item_On_Conflict = {
  constraint: Rocketjaket_Transaction_Item_Constraint;
  update_columns?: Array<Rocketjaket_Transaction_Item_Update_Column>;
  where?: Maybe<Rocketjaket_Transaction_Item_Bool_Exp>;
};

/** Ordering options when selecting data from "rocketjaket.transaction_item". */
export type Rocketjaket_Transaction_Item_Order_By = {
  capital_price?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inventory_product?: Maybe<Rocketjaket_Inventory_Product_Order_By>;
  inventory_product_id?: Maybe<Order_By>;
  product_name?: Maybe<Order_By>;
  profit?: Maybe<Order_By>;
  purchase_qty?: Maybe<Order_By>;
  selling_price?: Maybe<Order_By>;
  subtotal?: Maybe<Order_By>;
  transaction?: Maybe<Rocketjaket_Transaction_Order_By>;
  transaction_invoice_number?: Maybe<Order_By>;
  transaction_status?: Maybe<Order_By>;
  transaction_status_enum?: Maybe<Rocketjaket_Transaction_Status_Enum_Order_By>;
  updated_at?: Maybe<Order_By>;
  variant?: Maybe<Order_By>;
};

/** primary key columns input for table: rocketjaket_transaction_item */
export type Rocketjaket_Transaction_Item_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "rocketjaket.transaction_item" */
export enum Rocketjaket_Transaction_Item_Select_Column {
  /** column name */
  CapitalPrice = 'capital_price',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Discount = 'discount',
  /** column name */
  Id = 'id',
  /** column name */
  InventoryProductId = 'inventory_product_id',
  /** column name */
  ProductName = 'product_name',
  /** column name */
  Profit = 'profit',
  /** column name */
  PurchaseQty = 'purchase_qty',
  /** column name */
  SellingPrice = 'selling_price',
  /** column name */
  Subtotal = 'subtotal',
  /** column name */
  TransactionInvoiceNumber = 'transaction_invoice_number',
  /** column name */
  TransactionStatus = 'transaction_status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Variant = 'variant'
}

/** input type for updating data in table "rocketjaket.transaction_item" */
export type Rocketjaket_Transaction_Item_Set_Input = {
  capital_price?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  discount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  inventory_product_id?: Maybe<Scalars['uuid']>;
  product_name?: Maybe<Scalars['String']>;
  profit?: Maybe<Scalars['Int']>;
  purchase_qty?: Maybe<Scalars['Int']>;
  selling_price?: Maybe<Scalars['Int']>;
  subtotal?: Maybe<Scalars['Int']>;
  transaction_invoice_number?: Maybe<Scalars['String']>;
  transaction_status?: Maybe<Rocketjaket_Transaction_Status_Enum_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  variant?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Rocketjaket_Transaction_Item_Stddev_Fields = {
  __typename?: 'rocketjaket_transaction_item_stddev_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  profit?: Maybe<Scalars['Float']>;
  purchase_qty?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
  subtotal?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "rocketjaket.transaction_item" */
export type Rocketjaket_Transaction_Item_Stddev_Order_By = {
  capital_price?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  profit?: Maybe<Order_By>;
  purchase_qty?: Maybe<Order_By>;
  selling_price?: Maybe<Order_By>;
  subtotal?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Rocketjaket_Transaction_Item_Stddev_Pop_Fields = {
  __typename?: 'rocketjaket_transaction_item_stddev_pop_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  profit?: Maybe<Scalars['Float']>;
  purchase_qty?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
  subtotal?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "rocketjaket.transaction_item" */
export type Rocketjaket_Transaction_Item_Stddev_Pop_Order_By = {
  capital_price?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  profit?: Maybe<Order_By>;
  purchase_qty?: Maybe<Order_By>;
  selling_price?: Maybe<Order_By>;
  subtotal?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Rocketjaket_Transaction_Item_Stddev_Samp_Fields = {
  __typename?: 'rocketjaket_transaction_item_stddev_samp_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  profit?: Maybe<Scalars['Float']>;
  purchase_qty?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
  subtotal?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "rocketjaket.transaction_item" */
export type Rocketjaket_Transaction_Item_Stddev_Samp_Order_By = {
  capital_price?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  profit?: Maybe<Order_By>;
  purchase_qty?: Maybe<Order_By>;
  selling_price?: Maybe<Order_By>;
  subtotal?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Rocketjaket_Transaction_Item_Sum_Fields = {
  __typename?: 'rocketjaket_transaction_item_sum_fields';
  capital_price?: Maybe<Scalars['Int']>;
  discount?: Maybe<Scalars['Int']>;
  profit?: Maybe<Scalars['Int']>;
  purchase_qty?: Maybe<Scalars['Int']>;
  selling_price?: Maybe<Scalars['Int']>;
  subtotal?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "rocketjaket.transaction_item" */
export type Rocketjaket_Transaction_Item_Sum_Order_By = {
  capital_price?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  profit?: Maybe<Order_By>;
  purchase_qty?: Maybe<Order_By>;
  selling_price?: Maybe<Order_By>;
  subtotal?: Maybe<Order_By>;
};

/** update columns of table "rocketjaket.transaction_item" */
export enum Rocketjaket_Transaction_Item_Update_Column {
  /** column name */
  CapitalPrice = 'capital_price',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Discount = 'discount',
  /** column name */
  Id = 'id',
  /** column name */
  InventoryProductId = 'inventory_product_id',
  /** column name */
  ProductName = 'product_name',
  /** column name */
  Profit = 'profit',
  /** column name */
  PurchaseQty = 'purchase_qty',
  /** column name */
  SellingPrice = 'selling_price',
  /** column name */
  Subtotal = 'subtotal',
  /** column name */
  TransactionInvoiceNumber = 'transaction_invoice_number',
  /** column name */
  TransactionStatus = 'transaction_status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Variant = 'variant'
}

/** aggregate var_pop on columns */
export type Rocketjaket_Transaction_Item_Var_Pop_Fields = {
  __typename?: 'rocketjaket_transaction_item_var_pop_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  profit?: Maybe<Scalars['Float']>;
  purchase_qty?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
  subtotal?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "rocketjaket.transaction_item" */
export type Rocketjaket_Transaction_Item_Var_Pop_Order_By = {
  capital_price?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  profit?: Maybe<Order_By>;
  purchase_qty?: Maybe<Order_By>;
  selling_price?: Maybe<Order_By>;
  subtotal?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Rocketjaket_Transaction_Item_Var_Samp_Fields = {
  __typename?: 'rocketjaket_transaction_item_var_samp_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  profit?: Maybe<Scalars['Float']>;
  purchase_qty?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
  subtotal?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "rocketjaket.transaction_item" */
export type Rocketjaket_Transaction_Item_Var_Samp_Order_By = {
  capital_price?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  profit?: Maybe<Order_By>;
  purchase_qty?: Maybe<Order_By>;
  selling_price?: Maybe<Order_By>;
  subtotal?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Rocketjaket_Transaction_Item_Variance_Fields = {
  __typename?: 'rocketjaket_transaction_item_variance_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  profit?: Maybe<Scalars['Float']>;
  purchase_qty?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
  subtotal?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "rocketjaket.transaction_item" */
export type Rocketjaket_Transaction_Item_Variance_Order_By = {
  capital_price?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  profit?: Maybe<Order_By>;
  purchase_qty?: Maybe<Order_By>;
  selling_price?: Maybe<Order_By>;
  subtotal?: Maybe<Order_By>;
};

/** aggregate max on columns */
export type Rocketjaket_Transaction_Max_Fields = {
  __typename?: 'rocketjaket_transaction_max_fields';
  cash_change?: Maybe<Scalars['Int']>;
  cash_in_amount?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  invoice_number?: Maybe<Scalars['String']>;
  refund_reason?: Maybe<Scalars['String']>;
  store_id?: Maybe<Scalars['Int']>;
  total_transaction?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "rocketjaket.transaction" */
export type Rocketjaket_Transaction_Max_Order_By = {
  cash_change?: Maybe<Order_By>;
  cash_in_amount?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  invoice_number?: Maybe<Order_By>;
  refund_reason?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
  total_transaction?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Rocketjaket_Transaction_Min_Fields = {
  __typename?: 'rocketjaket_transaction_min_fields';
  cash_change?: Maybe<Scalars['Int']>;
  cash_in_amount?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  invoice_number?: Maybe<Scalars['String']>;
  refund_reason?: Maybe<Scalars['String']>;
  store_id?: Maybe<Scalars['Int']>;
  total_transaction?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "rocketjaket.transaction" */
export type Rocketjaket_Transaction_Min_Order_By = {
  cash_change?: Maybe<Order_By>;
  cash_in_amount?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  invoice_number?: Maybe<Order_By>;
  refund_reason?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
  total_transaction?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "rocketjaket.transaction" */
export type Rocketjaket_Transaction_Mutation_Response = {
  __typename?: 'rocketjaket_transaction_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rocketjaket_Transaction>;
};

/** input type for inserting object relation for remote table "rocketjaket.transaction" */
export type Rocketjaket_Transaction_Obj_Rel_Insert_Input = {
  data: Rocketjaket_Transaction_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Rocketjaket_Transaction_On_Conflict>;
};

/** on conflict condition type for table "rocketjaket.transaction" */
export type Rocketjaket_Transaction_On_Conflict = {
  constraint: Rocketjaket_Transaction_Constraint;
  update_columns?: Array<Rocketjaket_Transaction_Update_Column>;
  where?: Maybe<Rocketjaket_Transaction_Bool_Exp>;
};

/** Ordering options when selecting data from "rocketjaket.transaction". */
export type Rocketjaket_Transaction_Order_By = {
  cash_change?: Maybe<Order_By>;
  cash_in_amount?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  invoice_number?: Maybe<Order_By>;
  payment_type?: Maybe<Order_By>;
  refund_reason?: Maybe<Order_By>;
  store?: Maybe<Rocketjaket_Store_Order_By>;
  store_id?: Maybe<Order_By>;
  total_transaction?: Maybe<Order_By>;
  transaction_items_aggregate?: Maybe<Rocketjaket_Transaction_Item_Aggregate_Order_By>;
  transaction_payment_type_enum?: Maybe<Rocketjaket_Transaction_Payment_Type_Enum_Order_By>;
  transaction_receipts_aggregate?: Maybe<Rocketjaket_Transaction_Receipt_Aggregate_Order_By>;
  transaction_status?: Maybe<Order_By>;
  transaction_status_enum?: Maybe<Rocketjaket_Transaction_Status_Enum_Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** columns and relationships of "rocketjaket.transaction_payment_type_enum" */
export type Rocketjaket_Transaction_Payment_Type_Enum = {
  __typename?: 'rocketjaket_transaction_payment_type_enum';
  payment_type: Scalars['String'];
  title: Scalars['String'];
  /** An array relationship */
  transactions: Array<Rocketjaket_Transaction>;
  /** An aggregate relationship */
  transactions_aggregate: Rocketjaket_Transaction_Aggregate;
};


/** columns and relationships of "rocketjaket.transaction_payment_type_enum" */
export type Rocketjaket_Transaction_Payment_Type_EnumTransactionsArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Bool_Exp>;
};


/** columns and relationships of "rocketjaket.transaction_payment_type_enum" */
export type Rocketjaket_Transaction_Payment_Type_EnumTransactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Bool_Exp>;
};

/** aggregated selection of "rocketjaket.transaction_payment_type_enum" */
export type Rocketjaket_Transaction_Payment_Type_Enum_Aggregate = {
  __typename?: 'rocketjaket_transaction_payment_type_enum_aggregate';
  aggregate?: Maybe<Rocketjaket_Transaction_Payment_Type_Enum_Aggregate_Fields>;
  nodes: Array<Rocketjaket_Transaction_Payment_Type_Enum>;
};

/** aggregate fields of "rocketjaket.transaction_payment_type_enum" */
export type Rocketjaket_Transaction_Payment_Type_Enum_Aggregate_Fields = {
  __typename?: 'rocketjaket_transaction_payment_type_enum_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Rocketjaket_Transaction_Payment_Type_Enum_Max_Fields>;
  min?: Maybe<Rocketjaket_Transaction_Payment_Type_Enum_Min_Fields>;
};


/** aggregate fields of "rocketjaket.transaction_payment_type_enum" */
export type Rocketjaket_Transaction_Payment_Type_Enum_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Rocketjaket_Transaction_Payment_Type_Enum_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "rocketjaket.transaction_payment_type_enum". All fields are combined with a logical 'AND'. */
export type Rocketjaket_Transaction_Payment_Type_Enum_Bool_Exp = {
  _and?: Maybe<Array<Rocketjaket_Transaction_Payment_Type_Enum_Bool_Exp>>;
  _not?: Maybe<Rocketjaket_Transaction_Payment_Type_Enum_Bool_Exp>;
  _or?: Maybe<Array<Rocketjaket_Transaction_Payment_Type_Enum_Bool_Exp>>;
  payment_type?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  transactions?: Maybe<Rocketjaket_Transaction_Bool_Exp>;
};

/** unique or primary key constraints on table "rocketjaket.transaction_payment_type_enum" */
export enum Rocketjaket_Transaction_Payment_Type_Enum_Constraint {
  /** unique or primary key constraint */
  TransactionPaymentTypeEnumPkey = 'transaction_payment_type_enum_pkey'
}

export enum Rocketjaket_Transaction_Payment_Type_Enum_Enum {
  /** Cash */
  Cash = 'CASH',
  /** BCA */
  EdcBca = 'EDC_BCA',
  /** BRI */
  EdcBri = 'EDC_BRI',
  /** MANDIRI */
  EdcMandiri = 'EDC_MANDIRI',
  /** GOPAY */
  EwalletGopay = 'EWALLET_GOPAY',
  /** LINKAJA */
  EwalletLinkaja = 'EWALLET_LINKAJA',
  /** SHOPEEPAY */
  EwalletShopeepay = 'EWALLET_SHOPEEPAY'
}

/** Boolean expression to compare columns of type "rocketjaket_transaction_payment_type_enum_enum". All fields are combined with logical 'AND'. */
export type Rocketjaket_Transaction_Payment_Type_Enum_Enum_Comparison_Exp = {
  _eq?: Maybe<Rocketjaket_Transaction_Payment_Type_Enum_Enum>;
  _in?: Maybe<Array<Rocketjaket_Transaction_Payment_Type_Enum_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Rocketjaket_Transaction_Payment_Type_Enum_Enum>;
  _nin?: Maybe<Array<Rocketjaket_Transaction_Payment_Type_Enum_Enum>>;
};

/** input type for inserting data into table "rocketjaket.transaction_payment_type_enum" */
export type Rocketjaket_Transaction_Payment_Type_Enum_Insert_Input = {
  payment_type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  transactions?: Maybe<Rocketjaket_Transaction_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Rocketjaket_Transaction_Payment_Type_Enum_Max_Fields = {
  __typename?: 'rocketjaket_transaction_payment_type_enum_max_fields';
  payment_type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Rocketjaket_Transaction_Payment_Type_Enum_Min_Fields = {
  __typename?: 'rocketjaket_transaction_payment_type_enum_min_fields';
  payment_type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "rocketjaket.transaction_payment_type_enum" */
export type Rocketjaket_Transaction_Payment_Type_Enum_Mutation_Response = {
  __typename?: 'rocketjaket_transaction_payment_type_enum_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rocketjaket_Transaction_Payment_Type_Enum>;
};

/** input type for inserting object relation for remote table "rocketjaket.transaction_payment_type_enum" */
export type Rocketjaket_Transaction_Payment_Type_Enum_Obj_Rel_Insert_Input = {
  data: Rocketjaket_Transaction_Payment_Type_Enum_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Rocketjaket_Transaction_Payment_Type_Enum_On_Conflict>;
};

/** on conflict condition type for table "rocketjaket.transaction_payment_type_enum" */
export type Rocketjaket_Transaction_Payment_Type_Enum_On_Conflict = {
  constraint: Rocketjaket_Transaction_Payment_Type_Enum_Constraint;
  update_columns?: Array<Rocketjaket_Transaction_Payment_Type_Enum_Update_Column>;
  where?: Maybe<Rocketjaket_Transaction_Payment_Type_Enum_Bool_Exp>;
};

/** Ordering options when selecting data from "rocketjaket.transaction_payment_type_enum". */
export type Rocketjaket_Transaction_Payment_Type_Enum_Order_By = {
  payment_type?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  transactions_aggregate?: Maybe<Rocketjaket_Transaction_Aggregate_Order_By>;
};

/** primary key columns input for table: rocketjaket_transaction_payment_type_enum */
export type Rocketjaket_Transaction_Payment_Type_Enum_Pk_Columns_Input = {
  payment_type: Scalars['String'];
};

/** select columns of table "rocketjaket.transaction_payment_type_enum" */
export enum Rocketjaket_Transaction_Payment_Type_Enum_Select_Column {
  /** column name */
  PaymentType = 'payment_type',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "rocketjaket.transaction_payment_type_enum" */
export type Rocketjaket_Transaction_Payment_Type_Enum_Set_Input = {
  payment_type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** update columns of table "rocketjaket.transaction_payment_type_enum" */
export enum Rocketjaket_Transaction_Payment_Type_Enum_Update_Column {
  /** column name */
  PaymentType = 'payment_type',
  /** column name */
  Title = 'title'
}

/** primary key columns input for table: rocketjaket_transaction */
export type Rocketjaket_Transaction_Pk_Columns_Input = {
  invoice_number: Scalars['String'];
};

/** columns and relationships of "rocketjaket.transaction_receipt" */
export type Rocketjaket_Transaction_Receipt = {
  __typename?: 'rocketjaket_transaction_receipt';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  customer: Rocketjaket_Customer;
  customer_id: Scalars['uuid'];
  id: Scalars['uuid'];
  is_sent: Scalars['Boolean'];
  receipt_type: Rocketjaket_Transaction_Receipt_Type_Enum_Enum;
  /** An object relationship */
  transaction: Rocketjaket_Transaction;
  transaction_invoice_number: Scalars['String'];
  /** An object relationship */
  transaction_receipt_type_enum: Rocketjaket_Transaction_Receipt_Type_Enum;
};

/** aggregated selection of "rocketjaket.transaction_receipt" */
export type Rocketjaket_Transaction_Receipt_Aggregate = {
  __typename?: 'rocketjaket_transaction_receipt_aggregate';
  aggregate?: Maybe<Rocketjaket_Transaction_Receipt_Aggregate_Fields>;
  nodes: Array<Rocketjaket_Transaction_Receipt>;
};

/** aggregate fields of "rocketjaket.transaction_receipt" */
export type Rocketjaket_Transaction_Receipt_Aggregate_Fields = {
  __typename?: 'rocketjaket_transaction_receipt_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Rocketjaket_Transaction_Receipt_Max_Fields>;
  min?: Maybe<Rocketjaket_Transaction_Receipt_Min_Fields>;
};


/** aggregate fields of "rocketjaket.transaction_receipt" */
export type Rocketjaket_Transaction_Receipt_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Rocketjaket_Transaction_Receipt_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "rocketjaket.transaction_receipt" */
export type Rocketjaket_Transaction_Receipt_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Rocketjaket_Transaction_Receipt_Max_Order_By>;
  min?: Maybe<Rocketjaket_Transaction_Receipt_Min_Order_By>;
};

/** input type for inserting array relation for remote table "rocketjaket.transaction_receipt" */
export type Rocketjaket_Transaction_Receipt_Arr_Rel_Insert_Input = {
  data: Array<Rocketjaket_Transaction_Receipt_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Rocketjaket_Transaction_Receipt_On_Conflict>;
};

/** Boolean expression to filter rows from the table "rocketjaket.transaction_receipt". All fields are combined with a logical 'AND'. */
export type Rocketjaket_Transaction_Receipt_Bool_Exp = {
  _and?: Maybe<Array<Rocketjaket_Transaction_Receipt_Bool_Exp>>;
  _not?: Maybe<Rocketjaket_Transaction_Receipt_Bool_Exp>;
  _or?: Maybe<Array<Rocketjaket_Transaction_Receipt_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  customer?: Maybe<Rocketjaket_Customer_Bool_Exp>;
  customer_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  is_sent?: Maybe<Boolean_Comparison_Exp>;
  receipt_type?: Maybe<Rocketjaket_Transaction_Receipt_Type_Enum_Enum_Comparison_Exp>;
  transaction?: Maybe<Rocketjaket_Transaction_Bool_Exp>;
  transaction_invoice_number?: Maybe<String_Comparison_Exp>;
  transaction_receipt_type_enum?: Maybe<Rocketjaket_Transaction_Receipt_Type_Enum_Bool_Exp>;
};

/** unique or primary key constraints on table "rocketjaket.transaction_receipt" */
export enum Rocketjaket_Transaction_Receipt_Constraint {
  /** unique or primary key constraint */
  TransactionReceiptPkey = 'transaction_receipt_pkey'
}

/** input type for inserting data into table "rocketjaket.transaction_receipt" */
export type Rocketjaket_Transaction_Receipt_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  customer?: Maybe<Rocketjaket_Customer_Obj_Rel_Insert_Input>;
  customer_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  is_sent?: Maybe<Scalars['Boolean']>;
  receipt_type?: Maybe<Rocketjaket_Transaction_Receipt_Type_Enum_Enum>;
  transaction?: Maybe<Rocketjaket_Transaction_Obj_Rel_Insert_Input>;
  transaction_invoice_number?: Maybe<Scalars['String']>;
  transaction_receipt_type_enum?: Maybe<Rocketjaket_Transaction_Receipt_Type_Enum_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Rocketjaket_Transaction_Receipt_Max_Fields = {
  __typename?: 'rocketjaket_transaction_receipt_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  customer_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  transaction_invoice_number?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "rocketjaket.transaction_receipt" */
export type Rocketjaket_Transaction_Receipt_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  customer_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  transaction_invoice_number?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Rocketjaket_Transaction_Receipt_Min_Fields = {
  __typename?: 'rocketjaket_transaction_receipt_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  customer_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  transaction_invoice_number?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "rocketjaket.transaction_receipt" */
export type Rocketjaket_Transaction_Receipt_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  customer_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  transaction_invoice_number?: Maybe<Order_By>;
};

/** response of any mutation on the table "rocketjaket.transaction_receipt" */
export type Rocketjaket_Transaction_Receipt_Mutation_Response = {
  __typename?: 'rocketjaket_transaction_receipt_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rocketjaket_Transaction_Receipt>;
};

/** on conflict condition type for table "rocketjaket.transaction_receipt" */
export type Rocketjaket_Transaction_Receipt_On_Conflict = {
  constraint: Rocketjaket_Transaction_Receipt_Constraint;
  update_columns?: Array<Rocketjaket_Transaction_Receipt_Update_Column>;
  where?: Maybe<Rocketjaket_Transaction_Receipt_Bool_Exp>;
};

/** Ordering options when selecting data from "rocketjaket.transaction_receipt". */
export type Rocketjaket_Transaction_Receipt_Order_By = {
  created_at?: Maybe<Order_By>;
  customer?: Maybe<Rocketjaket_Customer_Order_By>;
  customer_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_sent?: Maybe<Order_By>;
  receipt_type?: Maybe<Order_By>;
  transaction?: Maybe<Rocketjaket_Transaction_Order_By>;
  transaction_invoice_number?: Maybe<Order_By>;
  transaction_receipt_type_enum?: Maybe<Rocketjaket_Transaction_Receipt_Type_Enum_Order_By>;
};

/** primary key columns input for table: rocketjaket_transaction_receipt */
export type Rocketjaket_Transaction_Receipt_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "rocketjaket.transaction_receipt" */
export enum Rocketjaket_Transaction_Receipt_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsSent = 'is_sent',
  /** column name */
  ReceiptType = 'receipt_type',
  /** column name */
  TransactionInvoiceNumber = 'transaction_invoice_number'
}

/** input type for updating data in table "rocketjaket.transaction_receipt" */
export type Rocketjaket_Transaction_Receipt_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  customer_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  is_sent?: Maybe<Scalars['Boolean']>;
  receipt_type?: Maybe<Rocketjaket_Transaction_Receipt_Type_Enum_Enum>;
  transaction_invoice_number?: Maybe<Scalars['String']>;
};

/** columns and relationships of "rocketjaket.transaction_receipt_type_enum" */
export type Rocketjaket_Transaction_Receipt_Type_Enum = {
  __typename?: 'rocketjaket_transaction_receipt_type_enum';
  receipt_type: Scalars['String'];
  title: Scalars['String'];
  /** An array relationship */
  transaction_receipts: Array<Rocketjaket_Transaction_Receipt>;
  /** An aggregate relationship */
  transaction_receipts_aggregate: Rocketjaket_Transaction_Receipt_Aggregate;
};


/** columns and relationships of "rocketjaket.transaction_receipt_type_enum" */
export type Rocketjaket_Transaction_Receipt_Type_EnumTransaction_ReceiptsArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Receipt_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Receipt_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Receipt_Bool_Exp>;
};


/** columns and relationships of "rocketjaket.transaction_receipt_type_enum" */
export type Rocketjaket_Transaction_Receipt_Type_EnumTransaction_Receipts_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Receipt_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Receipt_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Receipt_Bool_Exp>;
};

/** aggregated selection of "rocketjaket.transaction_receipt_type_enum" */
export type Rocketjaket_Transaction_Receipt_Type_Enum_Aggregate = {
  __typename?: 'rocketjaket_transaction_receipt_type_enum_aggregate';
  aggregate?: Maybe<Rocketjaket_Transaction_Receipt_Type_Enum_Aggregate_Fields>;
  nodes: Array<Rocketjaket_Transaction_Receipt_Type_Enum>;
};

/** aggregate fields of "rocketjaket.transaction_receipt_type_enum" */
export type Rocketjaket_Transaction_Receipt_Type_Enum_Aggregate_Fields = {
  __typename?: 'rocketjaket_transaction_receipt_type_enum_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Rocketjaket_Transaction_Receipt_Type_Enum_Max_Fields>;
  min?: Maybe<Rocketjaket_Transaction_Receipt_Type_Enum_Min_Fields>;
};


/** aggregate fields of "rocketjaket.transaction_receipt_type_enum" */
export type Rocketjaket_Transaction_Receipt_Type_Enum_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Rocketjaket_Transaction_Receipt_Type_Enum_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "rocketjaket.transaction_receipt_type_enum". All fields are combined with a logical 'AND'. */
export type Rocketjaket_Transaction_Receipt_Type_Enum_Bool_Exp = {
  _and?: Maybe<Array<Rocketjaket_Transaction_Receipt_Type_Enum_Bool_Exp>>;
  _not?: Maybe<Rocketjaket_Transaction_Receipt_Type_Enum_Bool_Exp>;
  _or?: Maybe<Array<Rocketjaket_Transaction_Receipt_Type_Enum_Bool_Exp>>;
  receipt_type?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  transaction_receipts?: Maybe<Rocketjaket_Transaction_Receipt_Bool_Exp>;
};

/** unique or primary key constraints on table "rocketjaket.transaction_receipt_type_enum" */
export enum Rocketjaket_Transaction_Receipt_Type_Enum_Constraint {
  /** unique or primary key constraint */
  TransactionReceiptTypeEnumPkey = 'transaction_receipt_type_enum_pkey'
}

export enum Rocketjaket_Transaction_Receipt_Type_Enum_Enum {
  /** Email */
  Email = 'email',
  /** Whatsapp */
  Whatsapp = 'whatsapp'
}

/** Boolean expression to compare columns of type "rocketjaket_transaction_receipt_type_enum_enum". All fields are combined with logical 'AND'. */
export type Rocketjaket_Transaction_Receipt_Type_Enum_Enum_Comparison_Exp = {
  _eq?: Maybe<Rocketjaket_Transaction_Receipt_Type_Enum_Enum>;
  _in?: Maybe<Array<Rocketjaket_Transaction_Receipt_Type_Enum_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Rocketjaket_Transaction_Receipt_Type_Enum_Enum>;
  _nin?: Maybe<Array<Rocketjaket_Transaction_Receipt_Type_Enum_Enum>>;
};

/** input type for inserting data into table "rocketjaket.transaction_receipt_type_enum" */
export type Rocketjaket_Transaction_Receipt_Type_Enum_Insert_Input = {
  receipt_type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  transaction_receipts?: Maybe<Rocketjaket_Transaction_Receipt_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Rocketjaket_Transaction_Receipt_Type_Enum_Max_Fields = {
  __typename?: 'rocketjaket_transaction_receipt_type_enum_max_fields';
  receipt_type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Rocketjaket_Transaction_Receipt_Type_Enum_Min_Fields = {
  __typename?: 'rocketjaket_transaction_receipt_type_enum_min_fields';
  receipt_type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "rocketjaket.transaction_receipt_type_enum" */
export type Rocketjaket_Transaction_Receipt_Type_Enum_Mutation_Response = {
  __typename?: 'rocketjaket_transaction_receipt_type_enum_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rocketjaket_Transaction_Receipt_Type_Enum>;
};

/** input type for inserting object relation for remote table "rocketjaket.transaction_receipt_type_enum" */
export type Rocketjaket_Transaction_Receipt_Type_Enum_Obj_Rel_Insert_Input = {
  data: Rocketjaket_Transaction_Receipt_Type_Enum_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Rocketjaket_Transaction_Receipt_Type_Enum_On_Conflict>;
};

/** on conflict condition type for table "rocketjaket.transaction_receipt_type_enum" */
export type Rocketjaket_Transaction_Receipt_Type_Enum_On_Conflict = {
  constraint: Rocketjaket_Transaction_Receipt_Type_Enum_Constraint;
  update_columns?: Array<Rocketjaket_Transaction_Receipt_Type_Enum_Update_Column>;
  where?: Maybe<Rocketjaket_Transaction_Receipt_Type_Enum_Bool_Exp>;
};

/** Ordering options when selecting data from "rocketjaket.transaction_receipt_type_enum". */
export type Rocketjaket_Transaction_Receipt_Type_Enum_Order_By = {
  receipt_type?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  transaction_receipts_aggregate?: Maybe<Rocketjaket_Transaction_Receipt_Aggregate_Order_By>;
};

/** primary key columns input for table: rocketjaket_transaction_receipt_type_enum */
export type Rocketjaket_Transaction_Receipt_Type_Enum_Pk_Columns_Input = {
  receipt_type: Scalars['String'];
};

/** select columns of table "rocketjaket.transaction_receipt_type_enum" */
export enum Rocketjaket_Transaction_Receipt_Type_Enum_Select_Column {
  /** column name */
  ReceiptType = 'receipt_type',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "rocketjaket.transaction_receipt_type_enum" */
export type Rocketjaket_Transaction_Receipt_Type_Enum_Set_Input = {
  receipt_type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** update columns of table "rocketjaket.transaction_receipt_type_enum" */
export enum Rocketjaket_Transaction_Receipt_Type_Enum_Update_Column {
  /** column name */
  ReceiptType = 'receipt_type',
  /** column name */
  Title = 'title'
}

/** update columns of table "rocketjaket.transaction_receipt" */
export enum Rocketjaket_Transaction_Receipt_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsSent = 'is_sent',
  /** column name */
  ReceiptType = 'receipt_type',
  /** column name */
  TransactionInvoiceNumber = 'transaction_invoice_number'
}

/** select columns of table "rocketjaket.transaction" */
export enum Rocketjaket_Transaction_Select_Column {
  /** column name */
  CashChange = 'cash_change',
  /** column name */
  CashInAmount = 'cash_in_amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  InvoiceNumber = 'invoice_number',
  /** column name */
  PaymentType = 'payment_type',
  /** column name */
  RefundReason = 'refund_reason',
  /** column name */
  StoreId = 'store_id',
  /** column name */
  TotalTransaction = 'total_transaction',
  /** column name */
  TransactionStatus = 'transaction_status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "rocketjaket.transaction" */
export type Rocketjaket_Transaction_Set_Input = {
  cash_change?: Maybe<Scalars['Int']>;
  cash_in_amount?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  invoice_number?: Maybe<Scalars['String']>;
  payment_type?: Maybe<Rocketjaket_Transaction_Payment_Type_Enum_Enum>;
  refund_reason?: Maybe<Scalars['String']>;
  store_id?: Maybe<Scalars['Int']>;
  total_transaction?: Maybe<Scalars['Int']>;
  transaction_status?: Maybe<Rocketjaket_Transaction_Status_Enum_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** columns and relationships of "rocketjaket.transaction_status_enum" */
export type Rocketjaket_Transaction_Status_Enum = {
  __typename?: 'rocketjaket_transaction_status_enum';
  title: Scalars['String'];
  transaction_status: Scalars['String'];
  /** An array relationship */
  transactions: Array<Rocketjaket_Transaction>;
  /** An aggregate relationship */
  transactions_aggregate: Rocketjaket_Transaction_Aggregate;
};


/** columns and relationships of "rocketjaket.transaction_status_enum" */
export type Rocketjaket_Transaction_Status_EnumTransactionsArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Bool_Exp>;
};


/** columns and relationships of "rocketjaket.transaction_status_enum" */
export type Rocketjaket_Transaction_Status_EnumTransactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Bool_Exp>;
};

/** aggregated selection of "rocketjaket.transaction_status_enum" */
export type Rocketjaket_Transaction_Status_Enum_Aggregate = {
  __typename?: 'rocketjaket_transaction_status_enum_aggregate';
  aggregate?: Maybe<Rocketjaket_Transaction_Status_Enum_Aggregate_Fields>;
  nodes: Array<Rocketjaket_Transaction_Status_Enum>;
};

/** aggregate fields of "rocketjaket.transaction_status_enum" */
export type Rocketjaket_Transaction_Status_Enum_Aggregate_Fields = {
  __typename?: 'rocketjaket_transaction_status_enum_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Rocketjaket_Transaction_Status_Enum_Max_Fields>;
  min?: Maybe<Rocketjaket_Transaction_Status_Enum_Min_Fields>;
};


/** aggregate fields of "rocketjaket.transaction_status_enum" */
export type Rocketjaket_Transaction_Status_Enum_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Rocketjaket_Transaction_Status_Enum_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "rocketjaket.transaction_status_enum". All fields are combined with a logical 'AND'. */
export type Rocketjaket_Transaction_Status_Enum_Bool_Exp = {
  _and?: Maybe<Array<Rocketjaket_Transaction_Status_Enum_Bool_Exp>>;
  _not?: Maybe<Rocketjaket_Transaction_Status_Enum_Bool_Exp>;
  _or?: Maybe<Array<Rocketjaket_Transaction_Status_Enum_Bool_Exp>>;
  title?: Maybe<String_Comparison_Exp>;
  transaction_status?: Maybe<String_Comparison_Exp>;
  transactions?: Maybe<Rocketjaket_Transaction_Bool_Exp>;
};

/** unique or primary key constraints on table "rocketjaket.transaction_status_enum" */
export enum Rocketjaket_Transaction_Status_Enum_Constraint {
  /** unique or primary key constraint */
  TransactionStatusEnumPkey = 'transaction_status_enum_pkey'
}

export enum Rocketjaket_Transaction_Status_Enum_Enum {
  /** Gagal */
  Failed = 'failed',
  /** Refund */
  Refund = 'refund',
  /** Refund Sebagian */
  RefundPart = 'refund_part',
  /** Sukses */
  Success = 'success'
}

/** Boolean expression to compare columns of type "rocketjaket_transaction_status_enum_enum". All fields are combined with logical 'AND'. */
export type Rocketjaket_Transaction_Status_Enum_Enum_Comparison_Exp = {
  _eq?: Maybe<Rocketjaket_Transaction_Status_Enum_Enum>;
  _in?: Maybe<Array<Rocketjaket_Transaction_Status_Enum_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Rocketjaket_Transaction_Status_Enum_Enum>;
  _nin?: Maybe<Array<Rocketjaket_Transaction_Status_Enum_Enum>>;
};

/** input type for inserting data into table "rocketjaket.transaction_status_enum" */
export type Rocketjaket_Transaction_Status_Enum_Insert_Input = {
  title?: Maybe<Scalars['String']>;
  transaction_status?: Maybe<Scalars['String']>;
  transactions?: Maybe<Rocketjaket_Transaction_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Rocketjaket_Transaction_Status_Enum_Max_Fields = {
  __typename?: 'rocketjaket_transaction_status_enum_max_fields';
  title?: Maybe<Scalars['String']>;
  transaction_status?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Rocketjaket_Transaction_Status_Enum_Min_Fields = {
  __typename?: 'rocketjaket_transaction_status_enum_min_fields';
  title?: Maybe<Scalars['String']>;
  transaction_status?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "rocketjaket.transaction_status_enum" */
export type Rocketjaket_Transaction_Status_Enum_Mutation_Response = {
  __typename?: 'rocketjaket_transaction_status_enum_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rocketjaket_Transaction_Status_Enum>;
};

/** input type for inserting object relation for remote table "rocketjaket.transaction_status_enum" */
export type Rocketjaket_Transaction_Status_Enum_Obj_Rel_Insert_Input = {
  data: Rocketjaket_Transaction_Status_Enum_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Rocketjaket_Transaction_Status_Enum_On_Conflict>;
};

/** on conflict condition type for table "rocketjaket.transaction_status_enum" */
export type Rocketjaket_Transaction_Status_Enum_On_Conflict = {
  constraint: Rocketjaket_Transaction_Status_Enum_Constraint;
  update_columns?: Array<Rocketjaket_Transaction_Status_Enum_Update_Column>;
  where?: Maybe<Rocketjaket_Transaction_Status_Enum_Bool_Exp>;
};

/** Ordering options when selecting data from "rocketjaket.transaction_status_enum". */
export type Rocketjaket_Transaction_Status_Enum_Order_By = {
  title?: Maybe<Order_By>;
  transaction_status?: Maybe<Order_By>;
  transactions_aggregate?: Maybe<Rocketjaket_Transaction_Aggregate_Order_By>;
};

/** primary key columns input for table: rocketjaket_transaction_status_enum */
export type Rocketjaket_Transaction_Status_Enum_Pk_Columns_Input = {
  transaction_status: Scalars['String'];
};

/** select columns of table "rocketjaket.transaction_status_enum" */
export enum Rocketjaket_Transaction_Status_Enum_Select_Column {
  /** column name */
  Title = 'title',
  /** column name */
  TransactionStatus = 'transaction_status'
}

/** input type for updating data in table "rocketjaket.transaction_status_enum" */
export type Rocketjaket_Transaction_Status_Enum_Set_Input = {
  title?: Maybe<Scalars['String']>;
  transaction_status?: Maybe<Scalars['String']>;
};

/** update columns of table "rocketjaket.transaction_status_enum" */
export enum Rocketjaket_Transaction_Status_Enum_Update_Column {
  /** column name */
  Title = 'title',
  /** column name */
  TransactionStatus = 'transaction_status'
}

/** aggregate stddev on columns */
export type Rocketjaket_Transaction_Stddev_Fields = {
  __typename?: 'rocketjaket_transaction_stddev_fields';
  cash_change?: Maybe<Scalars['Float']>;
  cash_in_amount?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
  total_transaction?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "rocketjaket.transaction" */
export type Rocketjaket_Transaction_Stddev_Order_By = {
  cash_change?: Maybe<Order_By>;
  cash_in_amount?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
  total_transaction?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Rocketjaket_Transaction_Stddev_Pop_Fields = {
  __typename?: 'rocketjaket_transaction_stddev_pop_fields';
  cash_change?: Maybe<Scalars['Float']>;
  cash_in_amount?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
  total_transaction?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "rocketjaket.transaction" */
export type Rocketjaket_Transaction_Stddev_Pop_Order_By = {
  cash_change?: Maybe<Order_By>;
  cash_in_amount?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
  total_transaction?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Rocketjaket_Transaction_Stddev_Samp_Fields = {
  __typename?: 'rocketjaket_transaction_stddev_samp_fields';
  cash_change?: Maybe<Scalars['Float']>;
  cash_in_amount?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
  total_transaction?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "rocketjaket.transaction" */
export type Rocketjaket_Transaction_Stddev_Samp_Order_By = {
  cash_change?: Maybe<Order_By>;
  cash_in_amount?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
  total_transaction?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Rocketjaket_Transaction_Sum_Fields = {
  __typename?: 'rocketjaket_transaction_sum_fields';
  cash_change?: Maybe<Scalars['Int']>;
  cash_in_amount?: Maybe<Scalars['Int']>;
  store_id?: Maybe<Scalars['Int']>;
  total_transaction?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "rocketjaket.transaction" */
export type Rocketjaket_Transaction_Sum_Order_By = {
  cash_change?: Maybe<Order_By>;
  cash_in_amount?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
  total_transaction?: Maybe<Order_By>;
};

/** update columns of table "rocketjaket.transaction" */
export enum Rocketjaket_Transaction_Update_Column {
  /** column name */
  CashChange = 'cash_change',
  /** column name */
  CashInAmount = 'cash_in_amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  InvoiceNumber = 'invoice_number',
  /** column name */
  PaymentType = 'payment_type',
  /** column name */
  RefundReason = 'refund_reason',
  /** column name */
  StoreId = 'store_id',
  /** column name */
  TotalTransaction = 'total_transaction',
  /** column name */
  TransactionStatus = 'transaction_status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Rocketjaket_Transaction_Var_Pop_Fields = {
  __typename?: 'rocketjaket_transaction_var_pop_fields';
  cash_change?: Maybe<Scalars['Float']>;
  cash_in_amount?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
  total_transaction?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "rocketjaket.transaction" */
export type Rocketjaket_Transaction_Var_Pop_Order_By = {
  cash_change?: Maybe<Order_By>;
  cash_in_amount?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
  total_transaction?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Rocketjaket_Transaction_Var_Samp_Fields = {
  __typename?: 'rocketjaket_transaction_var_samp_fields';
  cash_change?: Maybe<Scalars['Float']>;
  cash_in_amount?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
  total_transaction?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "rocketjaket.transaction" */
export type Rocketjaket_Transaction_Var_Samp_Order_By = {
  cash_change?: Maybe<Order_By>;
  cash_in_amount?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
  total_transaction?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Rocketjaket_Transaction_Variance_Fields = {
  __typename?: 'rocketjaket_transaction_variance_fields';
  cash_change?: Maybe<Scalars['Float']>;
  cash_in_amount?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
  total_transaction?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "rocketjaket.transaction" */
export type Rocketjaket_Transaction_Variance_Order_By = {
  cash_change?: Maybe<Order_By>;
  cash_in_amount?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
  total_transaction?: Maybe<Order_By>;
};

export type SendReceiptOutput = {
  __typename?: 'sendReceiptOutput';
  created_at: Scalars['timestamptz'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  is_sent: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "auth.account_providers" */
  auth_account_providers: Array<Auth_Account_Providers>;
  /** fetch aggregated fields from the table: "auth.account_providers" */
  auth_account_providers_aggregate: Auth_Account_Providers_Aggregate;
  /** fetch data from the table: "auth.account_providers" using primary key columns */
  auth_account_providers_by_pk?: Maybe<Auth_Account_Providers>;
  /** fetch data from the table: "auth.account_roles" */
  auth_account_roles: Array<Auth_Account_Roles>;
  /** fetch aggregated fields from the table: "auth.account_roles" */
  auth_account_roles_aggregate: Auth_Account_Roles_Aggregate;
  /** fetch data from the table: "auth.account_roles" using primary key columns */
  auth_account_roles_by_pk?: Maybe<Auth_Account_Roles>;
  /** fetch data from the table: "auth.accounts" */
  auth_accounts: Array<Auth_Accounts>;
  /** fetch aggregated fields from the table: "auth.accounts" */
  auth_accounts_aggregate: Auth_Accounts_Aggregate;
  /** fetch data from the table: "auth.accounts" using primary key columns */
  auth_accounts_by_pk?: Maybe<Auth_Accounts>;
  /** fetch data from the table: "auth.providers" */
  auth_providers: Array<Auth_Providers>;
  /** fetch aggregated fields from the table: "auth.providers" */
  auth_providers_aggregate: Auth_Providers_Aggregate;
  /** fetch data from the table: "auth.providers" using primary key columns */
  auth_providers_by_pk?: Maybe<Auth_Providers>;
  /** fetch data from the table: "auth.refresh_tokens" */
  auth_refresh_tokens: Array<Auth_Refresh_Tokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  auth_refresh_tokens_aggregate: Auth_Refresh_Tokens_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>;
  /** fetch data from the table: "auth.roles" */
  auth_roles: Array<Auth_Roles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  auth_roles_aggregate: Auth_Roles_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  auth_roles_by_pk?: Maybe<Auth_Roles>;
  /** fetch data from the table: "rocketjaket.customer" */
  rocketjaket_customer: Array<Rocketjaket_Customer>;
  /** fetch aggregated fields from the table: "rocketjaket.customer" */
  rocketjaket_customer_aggregate: Rocketjaket_Customer_Aggregate;
  /** fetch data from the table: "rocketjaket.customer" using primary key columns */
  rocketjaket_customer_by_pk?: Maybe<Rocketjaket_Customer>;
  /** fetch data from the table: "rocketjaket.inventory_product" */
  rocketjaket_inventory_product: Array<Rocketjaket_Inventory_Product>;
  /** fetch aggregated fields from the table: "rocketjaket.inventory_product" */
  rocketjaket_inventory_product_aggregate: Rocketjaket_Inventory_Product_Aggregate;
  /** fetch data from the table: "rocketjaket.inventory_product" using primary key columns */
  rocketjaket_inventory_product_by_pk?: Maybe<Rocketjaket_Inventory_Product>;
  /** fetch data from the table: "rocketjaket.inventory_product_variant" */
  rocketjaket_inventory_product_variant: Array<Rocketjaket_Inventory_Product_Variant>;
  /** fetch aggregated fields from the table: "rocketjaket.inventory_product_variant" */
  rocketjaket_inventory_product_variant_aggregate: Rocketjaket_Inventory_Product_Variant_Aggregate;
  /** fetch data from the table: "rocketjaket.inventory_product_variant" using primary key columns */
  rocketjaket_inventory_product_variant_by_pk?: Maybe<Rocketjaket_Inventory_Product_Variant>;
  /** fetch data from the table: "rocketjaket.inventory_variant_metadata" */
  rocketjaket_inventory_variant_metadata: Array<Rocketjaket_Inventory_Variant_Metadata>;
  /** fetch aggregated fields from the table: "rocketjaket.inventory_variant_metadata" */
  rocketjaket_inventory_variant_metadata_aggregate: Rocketjaket_Inventory_Variant_Metadata_Aggregate;
  /** fetch data from the table: "rocketjaket.inventory_variant_metadata" using primary key columns */
  rocketjaket_inventory_variant_metadata_by_pk?: Maybe<Rocketjaket_Inventory_Variant_Metadata>;
  /** fetch data from the table: "rocketjaket.notification" */
  rocketjaket_notification: Array<Rocketjaket_Notification>;
  /** fetch aggregated fields from the table: "rocketjaket.notification" */
  rocketjaket_notification_aggregate: Rocketjaket_Notification_Aggregate;
  /** fetch data from the table: "rocketjaket.notification" using primary key columns */
  rocketjaket_notification_by_pk?: Maybe<Rocketjaket_Notification>;
  /** fetch data from the table: "rocketjaket.product" */
  rocketjaket_product: Array<Rocketjaket_Product>;
  /** fetch aggregated fields from the table: "rocketjaket.product" */
  rocketjaket_product_aggregate: Rocketjaket_Product_Aggregate;
  /** fetch data from the table: "rocketjaket.product" using primary key columns */
  rocketjaket_product_by_pk?: Maybe<Rocketjaket_Product>;
  /** fetch data from the table: "rocketjaket.product_category" */
  rocketjaket_product_category: Array<Rocketjaket_Product_Category>;
  /** fetch aggregated fields from the table: "rocketjaket.product_category" */
  rocketjaket_product_category_aggregate: Rocketjaket_Product_Category_Aggregate;
  /** fetch data from the table: "rocketjaket.product_category" using primary key columns */
  rocketjaket_product_category_by_pk?: Maybe<Rocketjaket_Product_Category>;
  /** fetch data from the table: "rocketjaket.store" */
  rocketjaket_store: Array<Rocketjaket_Store>;
  /** fetch aggregated fields from the table: "rocketjaket.store" */
  rocketjaket_store_aggregate: Rocketjaket_Store_Aggregate;
  /** fetch data from the table: "rocketjaket.store" using primary key columns */
  rocketjaket_store_by_pk?: Maybe<Rocketjaket_Store>;
  /** fetch data from the table: "rocketjaket.transaction" */
  rocketjaket_transaction: Array<Rocketjaket_Transaction>;
  /** fetch aggregated fields from the table: "rocketjaket.transaction" */
  rocketjaket_transaction_aggregate: Rocketjaket_Transaction_Aggregate;
  /** fetch data from the table: "rocketjaket.transaction" using primary key columns */
  rocketjaket_transaction_by_pk?: Maybe<Rocketjaket_Transaction>;
  /** fetch data from the table: "rocketjaket.transaction_item" */
  rocketjaket_transaction_item: Array<Rocketjaket_Transaction_Item>;
  /** fetch aggregated fields from the table: "rocketjaket.transaction_item" */
  rocketjaket_transaction_item_aggregate: Rocketjaket_Transaction_Item_Aggregate;
  /** fetch data from the table: "rocketjaket.transaction_item" using primary key columns */
  rocketjaket_transaction_item_by_pk?: Maybe<Rocketjaket_Transaction_Item>;
  /** fetch data from the table: "rocketjaket.transaction_payment_type_enum" */
  rocketjaket_transaction_payment_type_enum: Array<Rocketjaket_Transaction_Payment_Type_Enum>;
  /** fetch aggregated fields from the table: "rocketjaket.transaction_payment_type_enum" */
  rocketjaket_transaction_payment_type_enum_aggregate: Rocketjaket_Transaction_Payment_Type_Enum_Aggregate;
  /** fetch data from the table: "rocketjaket.transaction_payment_type_enum" using primary key columns */
  rocketjaket_transaction_payment_type_enum_by_pk?: Maybe<Rocketjaket_Transaction_Payment_Type_Enum>;
  /** fetch data from the table: "rocketjaket.transaction_receipt" */
  rocketjaket_transaction_receipt: Array<Rocketjaket_Transaction_Receipt>;
  /** fetch aggregated fields from the table: "rocketjaket.transaction_receipt" */
  rocketjaket_transaction_receipt_aggregate: Rocketjaket_Transaction_Receipt_Aggregate;
  /** fetch data from the table: "rocketjaket.transaction_receipt" using primary key columns */
  rocketjaket_transaction_receipt_by_pk?: Maybe<Rocketjaket_Transaction_Receipt>;
  /** fetch data from the table: "rocketjaket.transaction_receipt_type_enum" */
  rocketjaket_transaction_receipt_type_enum: Array<Rocketjaket_Transaction_Receipt_Type_Enum>;
  /** fetch aggregated fields from the table: "rocketjaket.transaction_receipt_type_enum" */
  rocketjaket_transaction_receipt_type_enum_aggregate: Rocketjaket_Transaction_Receipt_Type_Enum_Aggregate;
  /** fetch data from the table: "rocketjaket.transaction_receipt_type_enum" using primary key columns */
  rocketjaket_transaction_receipt_type_enum_by_pk?: Maybe<Rocketjaket_Transaction_Receipt_Type_Enum>;
  /** fetch data from the table: "rocketjaket.transaction_status_enum" */
  rocketjaket_transaction_status_enum: Array<Rocketjaket_Transaction_Status_Enum>;
  /** fetch aggregated fields from the table: "rocketjaket.transaction_status_enum" */
  rocketjaket_transaction_status_enum_aggregate: Rocketjaket_Transaction_Status_Enum_Aggregate;
  /** fetch data from the table: "rocketjaket.transaction_status_enum" using primary key columns */
  rocketjaket_transaction_status_enum_by_pk?: Maybe<Rocketjaket_Transaction_Status_Enum>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "users_fcm_token" */
  users_fcm_token: Array<Users_Fcm_Token>;
  /** fetch aggregated fields from the table: "users_fcm_token" */
  users_fcm_token_aggregate: Users_Fcm_Token_Aggregate;
  /** fetch data from the table: "users_fcm_token" using primary key columns */
  users_fcm_token_by_pk?: Maybe<Users_Fcm_Token>;
};


export type Subscription_RootAuth_Account_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};


export type Subscription_RootAuth_Account_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};


export type Subscription_RootAuth_Account_Providers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuth_Account_RolesArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


export type Subscription_RootAuth_Account_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


export type Subscription_RootAuth_Account_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuth_AccountsArgs = {
  distinct_on?: Maybe<Array<Auth_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Accounts_Order_By>>;
  where?: Maybe<Auth_Accounts_Bool_Exp>;
};


export type Subscription_RootAuth_Accounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Accounts_Order_By>>;
  where?: Maybe<Auth_Accounts_Bool_Exp>;
};


export type Subscription_RootAuth_Accounts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuth_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Providers_Order_By>>;
  where?: Maybe<Auth_Providers_Bool_Exp>;
};


export type Subscription_RootAuth_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Providers_Order_By>>;
  where?: Maybe<Auth_Providers_Bool_Exp>;
};


export type Subscription_RootAuth_Providers_By_PkArgs = {
  provider: Scalars['String'];
};


export type Subscription_RootAuth_Refresh_TokensArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};


export type Subscription_RootAuth_Refresh_Tokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};


export type Subscription_RootAuth_Refresh_Tokens_By_PkArgs = {
  refresh_token: Scalars['uuid'];
};


export type Subscription_RootAuth_RolesArgs = {
  distinct_on?: Maybe<Array<Auth_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Roles_Order_By>>;
  where?: Maybe<Auth_Roles_Bool_Exp>;
};


export type Subscription_RootAuth_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Roles_Order_By>>;
  where?: Maybe<Auth_Roles_Bool_Exp>;
};


export type Subscription_RootAuth_Roles_By_PkArgs = {
  role: Scalars['String'];
};


export type Subscription_RootRocketjaket_CustomerArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Customer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Customer_Order_By>>;
  where?: Maybe<Rocketjaket_Customer_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Customer_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Customer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Customer_Order_By>>;
  where?: Maybe<Rocketjaket_Customer_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Customer_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRocketjaket_Inventory_ProductArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Inventory_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Inventory_Product_Order_By>>;
  where?: Maybe<Rocketjaket_Inventory_Product_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Inventory_Product_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Inventory_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Inventory_Product_Order_By>>;
  where?: Maybe<Rocketjaket_Inventory_Product_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Inventory_Product_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRocketjaket_Inventory_Product_VariantArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Inventory_Product_Variant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Inventory_Product_Variant_Order_By>>;
  where?: Maybe<Rocketjaket_Inventory_Product_Variant_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Inventory_Product_Variant_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Inventory_Product_Variant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Inventory_Product_Variant_Order_By>>;
  where?: Maybe<Rocketjaket_Inventory_Product_Variant_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Inventory_Product_Variant_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootRocketjaket_Inventory_Variant_MetadataArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Inventory_Variant_Metadata_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Inventory_Variant_Metadata_Order_By>>;
  where?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Inventory_Variant_Metadata_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Inventory_Variant_Metadata_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Inventory_Variant_Metadata_Order_By>>;
  where?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Inventory_Variant_Metadata_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootRocketjaket_NotificationArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Notification_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Notification_Order_By>>;
  where?: Maybe<Rocketjaket_Notification_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Notification_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Notification_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Notification_Order_By>>;
  where?: Maybe<Rocketjaket_Notification_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Notification_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRocketjaket_ProductArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Product_Order_By>>;
  where?: Maybe<Rocketjaket_Product_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Product_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Product_Order_By>>;
  where?: Maybe<Rocketjaket_Product_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Product_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRocketjaket_Product_CategoryArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Product_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Product_Category_Order_By>>;
  where?: Maybe<Rocketjaket_Product_Category_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Product_Category_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Product_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Product_Category_Order_By>>;
  where?: Maybe<Rocketjaket_Product_Category_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Product_Category_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootRocketjaket_StoreArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Store_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Store_Order_By>>;
  where?: Maybe<Rocketjaket_Store_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Store_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Store_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Store_Order_By>>;
  where?: Maybe<Rocketjaket_Store_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Store_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootRocketjaket_TransactionArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Transaction_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Transaction_By_PkArgs = {
  invoice_number: Scalars['String'];
};


export type Subscription_RootRocketjaket_Transaction_ItemArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Item_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Item_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Transaction_Item_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Item_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Item_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Transaction_Item_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRocketjaket_Transaction_Payment_Type_EnumArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Payment_Type_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Payment_Type_Enum_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Payment_Type_Enum_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Transaction_Payment_Type_Enum_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Payment_Type_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Payment_Type_Enum_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Payment_Type_Enum_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Transaction_Payment_Type_Enum_By_PkArgs = {
  payment_type: Scalars['String'];
};


export type Subscription_RootRocketjaket_Transaction_ReceiptArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Receipt_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Receipt_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Receipt_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Transaction_Receipt_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Receipt_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Receipt_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Receipt_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Transaction_Receipt_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRocketjaket_Transaction_Receipt_Type_EnumArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Receipt_Type_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Receipt_Type_Enum_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Receipt_Type_Enum_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Transaction_Receipt_Type_Enum_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Receipt_Type_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Receipt_Type_Enum_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Receipt_Type_Enum_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Transaction_Receipt_Type_Enum_By_PkArgs = {
  receipt_type: Scalars['String'];
};


export type Subscription_RootRocketjaket_Transaction_Status_EnumArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Status_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Status_Enum_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Status_Enum_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Transaction_Status_Enum_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Transaction_Status_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Transaction_Status_Enum_Order_By>>;
  where?: Maybe<Rocketjaket_Transaction_Status_Enum_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Transaction_Status_Enum_By_PkArgs = {
  transaction_status: Scalars['String'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsers_Fcm_TokenArgs = {
  distinct_on?: Maybe<Array<Users_Fcm_Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Fcm_Token_Order_By>>;
  where?: Maybe<Users_Fcm_Token_Bool_Exp>;
};


export type Subscription_RootUsers_Fcm_Token_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Fcm_Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Fcm_Token_Order_By>>;
  where?: Maybe<Users_Fcm_Token_Bool_Exp>;
};


export type Subscription_RootUsers_Fcm_Token_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

export type Transaction_Items = {
  capital_price: Scalars['Int'];
  discount: Scalars['Int'];
  inventory_product_updated_at: Scalars['String'];
  product_inventory_id: Scalars['uuid'];
  product_name: Scalars['String'];
  product_updated_at: Scalars['String'];
  purchace_qty: Scalars['Int'];
  selling_price: Scalars['Int'];
  variant: Scalars['String'];
};

export type Update_Inventory_Product = {
  available_qty?: Maybe<Scalars['Int']>;
  min_available_qty?: Maybe<Scalars['Int']>;
  override_capital_price?: Maybe<Scalars['Int']>;
  override_discount?: Maybe<Scalars['Int']>;
  override_selling_price?: Maybe<Scalars['Int']>;
  product_id: Scalars['uuid'];
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An object relationship */
  account?: Maybe<Auth_Accounts>;
  avatar_url?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  display_name?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An object relationship */
  store?: Maybe<Rocketjaket_Store>;
  store_id?: Maybe<Scalars['Int']>;
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  users_fcm_tokens: Array<Users_Fcm_Token>;
  /** An aggregate relationship */
  users_fcm_tokens_aggregate: Users_Fcm_Token_Aggregate;
};


/** columns and relationships of "users" */
export type UsersUsers_Fcm_TokensArgs = {
  distinct_on?: Maybe<Array<Users_Fcm_Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Fcm_Token_Order_By>>;
  where?: Maybe<Users_Fcm_Token_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUsers_Fcm_Tokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Fcm_Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Fcm_Token_Order_By>>;
  where?: Maybe<Users_Fcm_Token_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  store_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Users_Bool_Exp>>;
  account?: Maybe<Auth_Accounts_Bool_Exp>;
  avatar_url?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  store?: Maybe<Rocketjaket_Store_Bool_Exp>;
  store_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  users_fcm_tokens?: Maybe<Users_Fcm_Token_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** columns and relationships of "users_fcm_token" */
export type Users_Fcm_Token = {
  __typename?: 'users_fcm_token';
  fcm_token: Scalars['String'];
  id: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "users_fcm_token" */
export type Users_Fcm_Token_Aggregate = {
  __typename?: 'users_fcm_token_aggregate';
  aggregate?: Maybe<Users_Fcm_Token_Aggregate_Fields>;
  nodes: Array<Users_Fcm_Token>;
};

/** aggregate fields of "users_fcm_token" */
export type Users_Fcm_Token_Aggregate_Fields = {
  __typename?: 'users_fcm_token_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Fcm_Token_Max_Fields>;
  min?: Maybe<Users_Fcm_Token_Min_Fields>;
};


/** aggregate fields of "users_fcm_token" */
export type Users_Fcm_Token_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Fcm_Token_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users_fcm_token" */
export type Users_Fcm_Token_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Fcm_Token_Max_Order_By>;
  min?: Maybe<Users_Fcm_Token_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users_fcm_token" */
export type Users_Fcm_Token_Arr_Rel_Insert_Input = {
  data: Array<Users_Fcm_Token_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Users_Fcm_Token_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users_fcm_token". All fields are combined with a logical 'AND'. */
export type Users_Fcm_Token_Bool_Exp = {
  _and?: Maybe<Array<Users_Fcm_Token_Bool_Exp>>;
  _not?: Maybe<Users_Fcm_Token_Bool_Exp>;
  _or?: Maybe<Array<Users_Fcm_Token_Bool_Exp>>;
  fcm_token?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "users_fcm_token" */
export enum Users_Fcm_Token_Constraint {
  /** unique or primary key constraint */
  UsersFcmTokenPkey = 'users_fcm_token_pkey'
}

/** input type for inserting data into table "users_fcm_token" */
export type Users_Fcm_Token_Insert_Input = {
  fcm_token?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Users_Fcm_Token_Max_Fields = {
  __typename?: 'users_fcm_token_max_fields';
  fcm_token?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "users_fcm_token" */
export type Users_Fcm_Token_Max_Order_By = {
  fcm_token?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Fcm_Token_Min_Fields = {
  __typename?: 'users_fcm_token_min_fields';
  fcm_token?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "users_fcm_token" */
export type Users_Fcm_Token_Min_Order_By = {
  fcm_token?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "users_fcm_token" */
export type Users_Fcm_Token_Mutation_Response = {
  __typename?: 'users_fcm_token_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users_Fcm_Token>;
};

/** on conflict condition type for table "users_fcm_token" */
export type Users_Fcm_Token_On_Conflict = {
  constraint: Users_Fcm_Token_Constraint;
  update_columns?: Array<Users_Fcm_Token_Update_Column>;
  where?: Maybe<Users_Fcm_Token_Bool_Exp>;
};

/** Ordering options when selecting data from "users_fcm_token". */
export type Users_Fcm_Token_Order_By = {
  fcm_token?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: users_fcm_token */
export type Users_Fcm_Token_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users_fcm_token" */
export enum Users_Fcm_Token_Select_Column {
  /** column name */
  FcmToken = 'fcm_token',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "users_fcm_token" */
export type Users_Fcm_Token_Set_Input = {
  fcm_token?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "users_fcm_token" */
export enum Users_Fcm_Token_Update_Column {
  /** column name */
  FcmToken = 'fcm_token',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  store_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  account?: Maybe<Auth_Accounts_Obj_Rel_Insert_Input>;
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  store?: Maybe<Rocketjaket_Store_Obj_Rel_Insert_Input>;
  store_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  users_fcm_tokens?: Maybe<Users_Fcm_Token_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  store_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  store_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  account?: Maybe<Auth_Accounts_Order_By>;
  avatar_url?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  store?: Maybe<Rocketjaket_Store_Order_By>;
  store_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  users_fcm_tokens_aggregate?: Maybe<Users_Fcm_Token_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  StoreId = 'store_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  store_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  store_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  store_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  store_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  store_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  StoreId = 'store_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  store_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  store_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  store_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type WhatsappSignoutOutput = {
  __typename?: 'whatsappSignoutOutput';
  is_success: Scalars['Boolean'];
};

export type Cashier_CreateTransactionMutationVariables = Exact<{
  payment_type: TransactionPaymentTypeEnum;
  total_transaction: Scalars['Int'];
  user_id: Scalars['uuid'];
  transaction_items: Array<Transaction_Items> | Transaction_Items;
  cash_in_amount: Scalars['Int'];
  store_id: Scalars['Int'];
}>;


export type Cashier_CreateTransactionMutation = { __typename?: 'mutation_root', createTransaction?: { __typename?: 'createTransactionOutput', invoice_number?: string | null | undefined, isOutOfSync?: boolean | null | undefined, cash_change?: number | null | undefined, payment_type: string, total_transaction: number, cash_in_amount: number, transaction_status: TransactionStatusEnum, store_id: number } | null | undefined };

export type Cashier_SendReceiptToCustomerMutationVariables = Exact<{
  invoice_number: Scalars['String'];
  customer: CustomerInput;
  receipt_type: TransactionReceiptTypeEnum;
}>;


export type Cashier_SendReceiptToCustomerMutation = { __typename?: 'mutation_root', sendReceipt?: { __typename?: 'sendReceiptOutput', id: any, is_sent: boolean, name?: string | null | undefined, phone_number?: string | null | undefined, email?: string | null | undefined, created_at: any } | null | undefined };

export type Cashier_GetAllProductQueryVariables = Exact<{ [key: string]: never; }>;


export type Cashier_GetAllProductQuery = { __typename?: 'query_root', rocketjaket_product: Array<{ __typename?: 'rocketjaket_product', id: any, name: string, capital_price: number, selling_price: number, discount: number, photo_url?: string | null | undefined, product_category: { __typename?: 'rocketjaket_product_category', name: string }, inventory_products: Array<{ __typename?: 'rocketjaket_inventory_product', id: any, available_qty: number, min_available_qty?: number | null | undefined, override_selling_price?: number | null | undefined, override_discount?: number | null | undefined, override_capital_price?: number | null | undefined, inventory_product_variants: Array<{ __typename?: 'rocketjaket_inventory_product_variant', inventory_variant_metadata: { __typename?: 'rocketjaket_inventory_variant_metadata', variant_title: string, variant_value: string } }> }> }> };

export type Inventory_BulkDeleteOneInventoryProductByPkMutationVariables = Exact<{
  inventory_product_id: Scalars['uuid'];
}>;


export type Inventory_BulkDeleteOneInventoryProductByPkMutation = { __typename?: 'mutation_root', delete_rocketjaket_inventory_product_variant?: { __typename?: 'rocketjaket_inventory_product_variant_mutation_response', affected_rows: number } | null | undefined, delete_rocketjaket_inventory_product_by_pk?: { __typename?: 'rocketjaket_inventory_product', id: any, product: { __typename?: 'rocketjaket_product', name: string, product_category: { __typename?: 'rocketjaket_product_category', name: string } } } | null | undefined };

export type Inventory_BulkUpdateInventoryProductMutationVariables = Exact<{
  inventory_product_id: Scalars['uuid'];
  update_rocketjaket_inventory_product_by_pk: Rocketjaket_Inventory_Product_Set_Input;
  insert_rocketjaket_inventory_product_variant: Array<Rocketjaket_Inventory_Product_Variant_Insert_Input> | Rocketjaket_Inventory_Product_Variant_Insert_Input;
}>;


export type Inventory_BulkUpdateInventoryProductMutation = { __typename?: 'mutation_root', update_rocketjaket_inventory_product_by_pk?: { __typename?: 'rocketjaket_inventory_product', product: { __typename?: 'rocketjaket_product', name: string, product_category: { __typename?: 'rocketjaket_product_category', name: string } } } | null | undefined, delete_rocketjaket_inventory_product_variant?: { __typename?: 'rocketjaket_inventory_product_variant_mutation_response', affected_rows: number } | null | undefined, insert_rocketjaket_inventory_product_variant?: { __typename?: 'rocketjaket_inventory_product_variant_mutation_response', affected_rows: number } | null | undefined };

export type Inventory_BulkUpdateVariantsMetadataMutationVariables = Exact<{
  old_variant_title: Scalars['String'];
  new_variant_title: Scalars['String'];
  needDeleteIds: Array<Scalars['Int']> | Scalars['Int'];
  needAddVariantMetadata: Array<InventoryVariantMetadataInsertInput> | InventoryVariantMetadataInsertInput;
  needUpdateVariantMetadata: Array<InventoryVariantMetadataNeedUpdateInput> | InventoryVariantMetadataNeedUpdateInput;
}>;


export type Inventory_BulkUpdateVariantsMetadataMutation = { __typename?: 'mutation_root', bulkUpdateVariantsMetadata?: { __typename?: 'BulkUpdateVariantsMetadataOutput', variant_title?: string | null | undefined, is_any_update?: boolean | null | undefined } | null | undefined };

export type Inventory_CreateInventoryProductMutationVariables = Exact<{
  inventory_product: Rocketjaket_Inventory_Product_Insert_Input;
}>;


export type Inventory_CreateInventoryProductMutation = { __typename?: 'mutation_root', insert_rocketjaket_inventory_product_one?: { __typename?: 'rocketjaket_inventory_product', id: any, inventory_product_variants: Array<{ __typename?: 'rocketjaket_inventory_product_variant', inventory_variant_metadata: { __typename?: 'rocketjaket_inventory_variant_metadata', variant_title: string } }> } | null | undefined };

export type Inventory_CreateInventoryVariantMetadataMutationVariables = Exact<{
  objects: Array<Rocketjaket_Inventory_Variant_Metadata_Insert_Input> | Rocketjaket_Inventory_Variant_Metadata_Insert_Input;
}>;


export type Inventory_CreateInventoryVariantMetadataMutation = { __typename?: 'mutation_root', insert_rocketjaket_inventory_variant_metadata?: { __typename?: 'rocketjaket_inventory_variant_metadata_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'rocketjaket_inventory_variant_metadata', id: number, variant_title: string }> } | null | undefined };

export type Inventory_DeleteInventoryVariantsMetadataByTitleMutationVariables = Exact<{
  variant_title?: Maybe<Scalars['String']>;
}>;


export type Inventory_DeleteInventoryVariantsMetadataByTitleMutation = { __typename?: 'mutation_root', delete_rocketjaket_inventory_variant_metadata?: { __typename?: 'rocketjaket_inventory_variant_metadata_mutation_response', affected_rows: number } | null | undefined };

export type Inventory_GetAllInventoryProductByStorePkQueryVariables = Exact<{
  store_id: Scalars['Int'];
}>;


export type Inventory_GetAllInventoryProductByStorePkQuery = { __typename?: 'query_root', rocketjaket_inventory_product: Array<{ __typename?: 'rocketjaket_inventory_product', id: any, available_qty: number, min_available_qty?: number | null | undefined, override_selling_price?: number | null | undefined, override_discount?: number | null | undefined, override_capital_price?: number | null | undefined, updated_at: any, product: { __typename?: 'rocketjaket_product', name: string, capital_price: number, selling_price: number, discount: number, photo_url?: string | null | undefined, updated_at: any, product_category: { __typename?: 'rocketjaket_product_category', id: number, name: string } }, inventory_product_variants: Array<{ __typename?: 'rocketjaket_inventory_product_variant', inventory_variant_metadata: { __typename?: 'rocketjaket_inventory_variant_metadata', variant_title: string, variant_value: string } }> }> };

export type Inventory_GetAllVariantMetadataQueryVariables = Exact<{ [key: string]: never; }>;


export type Inventory_GetAllVariantMetadataQuery = { __typename?: 'query_root', rocketjaket_inventory_variant_metadata: Array<{ __typename?: 'rocketjaket_inventory_variant_metadata', variant_title: string, variant_value: string, id: number }> };

export type Inventory_GetInventoryProductByPkQueryVariables = Exact<{
  id?: Maybe<Scalars['uuid']>;
}>;


export type Inventory_GetInventoryProductByPkQuery = { __typename?: 'query_root', rocketjaket_inventory_product_by_pk?: { __typename?: 'rocketjaket_inventory_product', available_qty: number, created_at: any, min_available_qty?: number | null | undefined, override_capital_price?: number | null | undefined, override_discount?: number | null | undefined, override_selling_price?: number | null | undefined, product_id: any, store_id: number, updated_at: any, inventory_product_variants: Array<{ __typename?: 'rocketjaket_inventory_product_variant', inventory_variant_metadata: { __typename?: 'rocketjaket_inventory_variant_metadata', id: number, variant_title: string, variant_value: string } }> } | null | undefined };

export type Inventory_GetVariantMetadataByTitleQueryVariables = Exact<{
  variant_title: Scalars['String'];
}>;


export type Inventory_GetVariantMetadataByTitleQuery = { __typename?: 'query_root', rocketjaket_inventory_variant_metadata: Array<{ __typename?: 'rocketjaket_inventory_variant_metadata', variant_title: string, variant_value: string, id: number }> };

export type Produk_CreateKategoriProdukMutationVariables = Exact<{
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
}>;


export type Produk_CreateKategoriProdukMutation = { __typename?: 'mutation_root', insert_rocketjaket_product_category_one?: { __typename?: 'rocketjaket_product_category', id: number, name: string, description?: string | null | undefined } | null | undefined };

export type Produk_CreateProdukMutationVariables = Exact<{
  capital_price: Scalars['Int'];
  discount?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  photo_url?: Maybe<Scalars['String']>;
  product_category_id?: Maybe<Scalars['Int']>;
  selling_price: Scalars['Int'];
}>;


export type Produk_CreateProdukMutation = { __typename?: 'mutation_root', insert_rocketjaket_product_one?: { __typename?: 'rocketjaket_product', id: any, name: string } | null | undefined };

export type Produk_DeleteKategoriProdukMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type Produk_DeleteKategoriProdukMutation = { __typename?: 'mutation_root', delete_rocketjaket_product_category_by_pk?: { __typename?: 'rocketjaket_product_category', id: number, name: string } | null | undefined };

export type Produk_DeleteProdukByPkMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type Produk_DeleteProdukByPkMutation = { __typename?: 'mutation_root', delete_rocketjaket_product_by_pk?: { __typename?: 'rocketjaket_product', id: any, name: string } | null | undefined };

export type Produk_UpdateKategoriProdukMutationVariables = Exact<{
  id: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
}>;


export type Produk_UpdateKategoriProdukMutation = { __typename?: 'mutation_root', update_rocketjaket_product_category_by_pk?: { __typename?: 'rocketjaket_product_category', name: string, id: number, description?: string | null | undefined } | null | undefined };

export type Produk_UpdateProdukByPkMutationVariables = Exact<{
  id: Scalars['uuid'];
  name: Scalars['String'];
  photo_url?: Maybe<Scalars['String']>;
  product_category_id?: Maybe<Scalars['Int']>;
  selling_price?: Maybe<Scalars['Int']>;
  capital_price?: Maybe<Scalars['Int']>;
  discount?: Maybe<Scalars['Int']>;
}>;


export type Produk_UpdateProdukByPkMutation = { __typename?: 'mutation_root', update_rocketjaket_product_by_pk?: { __typename?: 'rocketjaket_product', id: any, name: string } | null | undefined };

export type Produk_GetAllKategoriProdukQueryVariables = Exact<{ [key: string]: never; }>;


export type Produk_GetAllKategoriProdukQuery = { __typename?: 'query_root', rocketjaket_product_category: Array<{ __typename?: 'rocketjaket_product_category', id: number, name: string, description?: string | null | undefined }> };

export type Produk_GetAllProdukQueryVariables = Exact<{ [key: string]: never; }>;


export type Produk_GetAllProdukQuery = { __typename?: 'query_root', rocketjaket_product: Array<{ __typename?: 'rocketjaket_product', name: string, id: any, photo_url?: string | null | undefined, capital_price: number, discount: number, selling_price: number, product_category: { __typename?: 'rocketjaket_product_category', name: string } }> };

export type Produk_GetKategoriProdukByPkQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type Produk_GetKategoriProdukByPkQuery = { __typename?: 'query_root', rocketjaket_product_category_by_pk?: { __typename?: 'rocketjaket_product_category', id: number, name: string, description?: string | null | undefined } | null | undefined };

export type Produk_GetProdukByPkQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type Produk_GetProdukByPkQuery = { __typename?: 'query_root', rocketjaket_product_by_pk?: { __typename?: 'rocketjaket_product', id: any, name: string, photo_url?: string | null | undefined, selling_price: number, discount: number, capital_price: number, product_category_id: number, created_at: any, updated_at: any, product_category: { __typename?: 'rocketjaket_product_category', name: string } } | null | undefined };

export type Store_CreateStoreMutationVariables = Exact<{
  name: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
}>;


export type Store_CreateStoreMutation = { __typename?: 'mutation_root', insert_rocketjaket_store_one?: { __typename?: 'rocketjaket_store', id: number, name: string } | null | undefined };

export type Store_DeleteStoreByPkMutationVariables = Exact<{
  id?: Maybe<Scalars['Int']>;
}>;


export type Store_DeleteStoreByPkMutation = { __typename?: 'mutation_root', delete_rocketjaket_store_by_pk?: { __typename?: 'rocketjaket_store', id: number, name: string } | null | undefined };

export type Store_UpdateStoreMutationVariables = Exact<{
  id: Scalars['Int'];
  address?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
}>;


export type Store_UpdateStoreMutation = { __typename?: 'mutation_root', update_rocketjaket_store_by_pk?: { __typename?: 'rocketjaket_store', id: number, name: string } | null | undefined };

export type Wa_SignoutMutationVariables = Exact<{ [key: string]: never; }>;


export type Wa_SignoutMutation = { __typename?: 'mutation_root', whatsappSignout?: { __typename?: 'whatsappSignoutOutput', is_success: boolean } | null | undefined };

export type Store_GetAllStoreQueryVariables = Exact<{ [key: string]: never; }>;


export type Store_GetAllStoreQuery = { __typename?: 'query_root', rocketjaket_store: Array<{ __typename?: 'rocketjaket_store', id: number, name: string, latitude?: string | null | undefined, longitude?: string | null | undefined, address?: string | null | undefined }> };

export type Store_GetStoreByPkQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type Store_GetStoreByPkQuery = { __typename?: 'query_root', rocketjaket_store_by_pk?: { __typename?: 'rocketjaket_store', id: number, name: string, latitude?: string | null | undefined, longitude?: string | null | undefined, address?: string | null | undefined, created_at: any, updated_at: any } | null | undefined };

export type Wa_GetWaAuthStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type Wa_GetWaAuthStatusQuery = { __typename?: 'query_root', getWhatsappAuthStatus?: { __typename?: 'getWhatsappAuthStatusOutput', qr_code?: string | null | undefined, is_authenticated: boolean, client_state?: string | null | undefined, client_platform?: string | null | undefined, client_phone_number?: string | null | undefined, client_name?: string | null | undefined, client_device_model?: string | null | undefined, client_device_manufacturer?: string | null | undefined } | null | undefined };

export type Transaction_RefundTransactionMutationVariables = Exact<{
  invoice_number: Scalars['String'];
  isRefundAll: Scalars['Boolean'];
  refund_reason: Scalars['String'];
}>;


export type Transaction_RefundTransactionMutation = { __typename?: 'mutation_root', refundTransaction?: { __typename?: 'refundTransactionOutput', invoice_number: string, is_success: boolean } | null | undefined };

export type Transaction_GetAllTransactionByStoreIdQueryVariables = Exact<{
  store_id?: Maybe<Scalars['Int']>;
}>;


export type Transaction_GetAllTransactionByStoreIdQuery = { __typename?: 'query_root', rocketjaket_transaction: Array<{ __typename?: 'rocketjaket_transaction', cash_change?: number | null | undefined, cash_in_amount: number, created_at: any, invoice_number: string, payment_type: Rocketjaket_Transaction_Payment_Type_Enum_Enum, store_id?: number | null | undefined, total_transaction: number, updated_at: any, user: { __typename?: 'users', id: any, display_name?: string | null | undefined }, transaction_status_enum: { __typename?: 'rocketjaket_transaction_status_enum', transaction_status: string, title: string }, transaction_items: Array<{ __typename?: 'rocketjaket_transaction_item', id: any, inventory_product_id: any, product_name: string, profit: number }> }> };

export type Transaction_GetTransactionByPkQueryVariables = Exact<{
  invoice_number: Scalars['String'];
}>;


export type Transaction_GetTransactionByPkQuery = { __typename?: 'query_root', rocketjaket_transaction_by_pk?: { __typename?: 'rocketjaket_transaction', cash_change?: number | null | undefined, cash_in_amount: number, created_at: any, invoice_number: string, total_transaction: number, updated_at: any, transaction_status: Rocketjaket_Transaction_Status_Enum_Enum, store?: { __typename?: 'rocketjaket_store', name: string, address?: string | null | undefined } | null | undefined, transaction_status_enum: { __typename?: 'rocketjaket_transaction_status_enum', transaction_status: string, title: string }, user: { __typename?: 'users', display_name?: string | null | undefined, id: any }, transaction_items: Array<{ __typename?: 'rocketjaket_transaction_item', created_at: any, capital_price: number, discount: number, id: any, inventory_product_id: any, product_name: string, profit: number, purchase_qty: number, selling_price: number, subtotal: number, updated_at: any, variant: string, transaction_status: Rocketjaket_Transaction_Status_Enum_Enum, transaction_status_enum: { __typename?: 'rocketjaket_transaction_status_enum', title: string, transaction_status: string }, inventory_product: { __typename?: 'rocketjaket_inventory_product', override_capital_price?: number | null | undefined, override_selling_price?: number | null | undefined, override_discount?: number | null | undefined, available_qty: number, updated_at: any, product: { __typename?: 'rocketjaket_product', photo_url?: string | null | undefined, name: string, capital_price: number, selling_price: number, discount: number, updated_at: any }, inventory_product_variants: Array<{ __typename?: 'rocketjaket_inventory_product_variant', inventory_variant_metadata_id: number }> } }>, transaction_receipts: Array<{ __typename?: 'rocketjaket_transaction_receipt', created_at: any, is_sent: boolean, customer: { __typename?: 'rocketjaket_customer', id: any, email?: string | null | undefined, name?: string | null | undefined, phone_number?: string | null | undefined }, transaction_receipt_type_enum: { __typename?: 'rocketjaket_transaction_receipt_type_enum', receipt_type: string, title: string } }> } | null | undefined };

export type User_BulkDeleteOneUserMutationVariables = Exact<{
  account_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
}>;


export type User_BulkDeleteOneUserMutation = { __typename?: 'mutation_root', delete_auth_refresh_tokens?: { __typename?: 'auth_refresh_tokens_mutation_response', affected_rows: number } | null | undefined, delete_auth_account_roles?: { __typename?: 'auth_account_roles_mutation_response', affected_rows: number } | null | undefined, delete_auth_accounts?: { __typename?: 'auth_accounts_mutation_response', affected_rows: number } | null | undefined, delete_users_by_pk?: { __typename?: 'users', id: any, display_name?: string | null | undefined } | null | undefined };

export type User_BulkUpdateUserByUserIdMutationVariables = Exact<{
  user_id: Scalars['uuid'];
  update_user: Users_Set_Input;
}>;


export type User_BulkUpdateUserByUserIdMutation = { __typename?: 'mutation_root', update_users_by_pk?: { __typename?: 'users', display_name?: string | null | undefined } | null | undefined };

export type User_CreateCustomAuthAccountRoleOneMutationVariables = Exact<{
  insert_auth_account_roles_one: Auth_Account_Roles_Insert_Input;
}>;


export type User_CreateCustomAuthAccountRoleOneMutation = { __typename?: 'mutation_root', insert_auth_account_roles_one?: { __typename?: 'auth_account_roles', id: any, is_custom?: boolean | null | undefined, role: string } | null | undefined };

export type User_CreateOneUserFcmTokenMutationVariables = Exact<{
  insert_users_fcm_token: Users_Fcm_Token_Insert_Input;
}>;


export type User_CreateOneUserFcmTokenMutation = { __typename?: 'mutation_root', insert_users_fcm_token_one?: { __typename?: 'users_fcm_token', id: any, fcm_token: string } | null | undefined };

export type User_DeleteFcmTokenByUserIdMutationVariables = Exact<{
  fcm_token?: Maybe<Scalars['String']>;
  user_id: Scalars['uuid'];
}>;


export type User_DeleteFcmTokenByUserIdMutation = { __typename?: 'mutation_root', delete_users_fcm_token?: { __typename?: 'users_fcm_token_mutation_response', affected_rows: number } | null | undefined };

export type User_UpdateUserRoleStoreByUserIdMutationVariables = Exact<{
  user_id: Scalars['uuid'];
  update_auth_accounts: Auth_Accounts_Set_Input;
  update_user: Users_Set_Input;
  account_id: Scalars['uuid'];
  update_auth_account_roles: Auth_Account_Roles_Set_Input;
}>;


export type User_UpdateUserRoleStoreByUserIdMutation = { __typename?: 'mutation_root', update_auth_accounts?: { __typename?: 'auth_accounts_mutation_response', affected_rows: number } | null | undefined, update_users_by_pk?: { __typename?: 'users', id: any, display_name?: string | null | undefined } | null | undefined, update_auth_account_roles?: { __typename?: 'auth_account_roles_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'auth_account_roles', role: string, is_custom?: boolean | null | undefined, id: any }> } | null | undefined };

export type User_GetAllUserQueryVariables = Exact<{ [key: string]: never; }>;


export type User_GetAllUserQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, display_name?: string | null | undefined, avatar_url?: string | null | undefined, account?: { __typename?: 'auth_accounts', default_role: string, email?: any | null | undefined, id: any } | null | undefined, store?: { __typename?: 'rocketjaket_store', id: number, name: string } | null | undefined }> };

export type User_GetAllUserFcmTokensByIdQueryVariables = Exact<{
  user_id: Scalars['uuid'];
}>;


export type User_GetAllUserFcmTokensByIdQuery = { __typename?: 'query_root', users_fcm_token: Array<{ __typename?: 'users_fcm_token', id: any, user_id: any, fcm_token: string }> };

export type User_GetUserByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type User_GetUserByIdQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', id: any, display_name?: string | null | undefined, avatar_url?: string | null | undefined, store_id?: number | null | undefined, account?: { __typename?: 'auth_accounts', email?: any | null | undefined, default_role: string, active: boolean, account_roles: Array<{ __typename?: 'auth_account_roles', role: string, is_custom?: boolean | null | undefined, id: any, account_id: any }> } | null | undefined } | null | undefined };

export const namedOperations = {
  Query: {
    Cashier_GetAllProduct: 'Cashier_GetAllProduct',
    Inventory_GetAllInventoryProductByStorePK: 'Inventory_GetAllInventoryProductByStorePK',
    Inventory_GetAllVariantMetadata: 'Inventory_GetAllVariantMetadata',
    Inventory_GetInventoryProductByPK: 'Inventory_GetInventoryProductByPK',
    Inventory_GetVariantMetadataByTitle: 'Inventory_GetVariantMetadataByTitle',
    Produk_GetAllKategoriProduk: 'Produk_GetAllKategoriProduk',
    Produk_GetAllProduk: 'Produk_GetAllProduk',
    Produk_GetKategoriProdukByPK: 'Produk_GetKategoriProdukByPK',
    Produk_GetProdukByPK: 'Produk_GetProdukByPK',
    Store_GetAllStore: 'Store_GetAllStore',
    Store_GetStoreByPK: 'Store_GetStoreByPK',
    WA_GetWAAuthStatus: 'WA_GetWAAuthStatus',
    Transaction_GetAllTransactionByStoreId: 'Transaction_GetAllTransactionByStoreId',
    Transaction_GetTransactionByPK: 'Transaction_GetTransactionByPK',
    User_GetAllUser: 'User_GetAllUser',
    User_GetAllUserFcmTokensById: 'User_GetAllUserFcmTokensById',
    User_GetUserById: 'User_GetUserById'
  },
  Mutation: {
    Cashier_CreateTransaction: 'Cashier_CreateTransaction',
    Cashier_SendReceiptToCustomer: 'Cashier_SendReceiptToCustomer',
    Inventory_BulkDeleteOneInventoryProductByPK: 'Inventory_BulkDeleteOneInventoryProductByPK',
    Inventory_BulkUpdateInventoryProduct: 'Inventory_BulkUpdateInventoryProduct',
    Inventory_BulkUpdateVariantsMetadata: 'Inventory_BulkUpdateVariantsMetadata',
    Inventory_CreateInventoryProduct: 'Inventory_CreateInventoryProduct',
    Inventory_CreateInventoryVariantMetadata: 'Inventory_CreateInventoryVariantMetadata',
    Inventory_DeleteInventoryVariantsMetadataByTitle: 'Inventory_DeleteInventoryVariantsMetadataByTitle',
    Produk_CreateKategoriProduk: 'Produk_CreateKategoriProduk',
    Produk_CreateProduk: 'Produk_CreateProduk',
    Produk_DeleteKategoriProduk: 'Produk_DeleteKategoriProduk',
    Produk_DeleteProdukByPK: 'Produk_DeleteProdukByPK',
    Produk_UpdateKategoriProduk: 'Produk_UpdateKategoriProduk',
    Produk_UpdateProdukByPK: 'Produk_UpdateProdukByPK',
    Store_CreateStore: 'Store_CreateStore',
    Store_DeleteStoreByPK: 'Store_DeleteStoreByPK',
    Store_UpdateStore: 'Store_UpdateStore',
    WA_Signout: 'WA_Signout',
    Transaction_RefundTransaction: 'Transaction_RefundTransaction',
    User_BulkDeleteOneUser: 'User_BulkDeleteOneUser',
    User_BulkUpdateUserByUserId: 'User_BulkUpdateUserByUserId',
    User_CreateCustomAuthAccountRoleOne: 'User_CreateCustomAuthAccountRoleOne',
    User_CreateOneUserFcmToken: 'User_CreateOneUserFcmToken',
    User_DeleteFcmTokenByUserId: 'User_DeleteFcmTokenByUserId',
    User_UpdateUserRoleStoreByUserId: 'User_UpdateUserRoleStoreByUserId'
  }
}

export const Cashier_CreateTransactionDocument = gql`
    mutation Cashier_CreateTransaction($payment_type: TransactionPaymentTypeEnum!, $total_transaction: Int!, $user_id: uuid!, $transaction_items: [transaction_items!]!, $cash_in_amount: Int!, $store_id: Int!) {
  createTransaction(
    user_id: $user_id
    total_transaction: $total_transaction
    payment_type: $payment_type
    transaction_items: $transaction_items
    cash_in_amount: $cash_in_amount
    store_id: $store_id
  ) {
    invoice_number
    isOutOfSync
    cash_change
    payment_type
    total_transaction
    cash_in_amount
    transaction_status
    store_id
  }
}
    `;
export type Cashier_CreateTransactionMutationFn = Apollo.MutationFunction<Cashier_CreateTransactionMutation, Cashier_CreateTransactionMutationVariables>;

/**
 * __useCashier_CreateTransactionMutation__
 *
 * To run a mutation, you first call `useCashier_CreateTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCashier_CreateTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cashierCreateTransactionMutation, { data, loading, error }] = useCashier_CreateTransactionMutation({
 *   variables: {
 *      payment_type: // value for 'payment_type'
 *      total_transaction: // value for 'total_transaction'
 *      user_id: // value for 'user_id'
 *      transaction_items: // value for 'transaction_items'
 *      cash_in_amount: // value for 'cash_in_amount'
 *      store_id: // value for 'store_id'
 *   },
 * });
 */
export function useCashier_CreateTransactionMutation(baseOptions?: Apollo.MutationHookOptions<Cashier_CreateTransactionMutation, Cashier_CreateTransactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Cashier_CreateTransactionMutation, Cashier_CreateTransactionMutationVariables>(Cashier_CreateTransactionDocument, options);
      }
export type Cashier_CreateTransactionMutationHookResult = ReturnType<typeof useCashier_CreateTransactionMutation>;
export type Cashier_CreateTransactionMutationResult = Apollo.MutationResult<Cashier_CreateTransactionMutation>;
export type Cashier_CreateTransactionMutationOptions = Apollo.BaseMutationOptions<Cashier_CreateTransactionMutation, Cashier_CreateTransactionMutationVariables>;
export const Cashier_SendReceiptToCustomerDocument = gql`
    mutation Cashier_SendReceiptToCustomer($invoice_number: String!, $customer: CustomerInput!, $receipt_type: TransactionReceiptTypeEnum!) {
  sendReceipt(
    invoice_number: $invoice_number
    customer: $customer
    receipt_type: $receipt_type
  ) {
    id
    is_sent
    name
    phone_number
    email
    created_at
  }
}
    `;
export type Cashier_SendReceiptToCustomerMutationFn = Apollo.MutationFunction<Cashier_SendReceiptToCustomerMutation, Cashier_SendReceiptToCustomerMutationVariables>;

/**
 * __useCashier_SendReceiptToCustomerMutation__
 *
 * To run a mutation, you first call `useCashier_SendReceiptToCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCashier_SendReceiptToCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cashierSendReceiptToCustomerMutation, { data, loading, error }] = useCashier_SendReceiptToCustomerMutation({
 *   variables: {
 *      invoice_number: // value for 'invoice_number'
 *      customer: // value for 'customer'
 *      receipt_type: // value for 'receipt_type'
 *   },
 * });
 */
export function useCashier_SendReceiptToCustomerMutation(baseOptions?: Apollo.MutationHookOptions<Cashier_SendReceiptToCustomerMutation, Cashier_SendReceiptToCustomerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Cashier_SendReceiptToCustomerMutation, Cashier_SendReceiptToCustomerMutationVariables>(Cashier_SendReceiptToCustomerDocument, options);
      }
export type Cashier_SendReceiptToCustomerMutationHookResult = ReturnType<typeof useCashier_SendReceiptToCustomerMutation>;
export type Cashier_SendReceiptToCustomerMutationResult = Apollo.MutationResult<Cashier_SendReceiptToCustomerMutation>;
export type Cashier_SendReceiptToCustomerMutationOptions = Apollo.BaseMutationOptions<Cashier_SendReceiptToCustomerMutation, Cashier_SendReceiptToCustomerMutationVariables>;
export const Cashier_GetAllProductDocument = gql`
    query Cashier_GetAllProduct {
  rocketjaket_product {
    id
    name
    product_category {
      name
    }
    capital_price
    selling_price
    discount
    photo_url
    inventory_products {
      id
      available_qty
      min_available_qty
      override_selling_price
      override_discount
      override_capital_price
      inventory_product_variants {
        inventory_variant_metadata {
          variant_title
          variant_value
        }
      }
    }
  }
}
    `;

/**
 * __useCashier_GetAllProductQuery__
 *
 * To run a query within a React component, call `useCashier_GetAllProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useCashier_GetAllProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCashier_GetAllProductQuery({
 *   variables: {
 *   },
 * });
 */
export function useCashier_GetAllProductQuery(baseOptions?: Apollo.QueryHookOptions<Cashier_GetAllProductQuery, Cashier_GetAllProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Cashier_GetAllProductQuery, Cashier_GetAllProductQueryVariables>(Cashier_GetAllProductDocument, options);
      }
export function useCashier_GetAllProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Cashier_GetAllProductQuery, Cashier_GetAllProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Cashier_GetAllProductQuery, Cashier_GetAllProductQueryVariables>(Cashier_GetAllProductDocument, options);
        }
export type Cashier_GetAllProductQueryHookResult = ReturnType<typeof useCashier_GetAllProductQuery>;
export type Cashier_GetAllProductLazyQueryHookResult = ReturnType<typeof useCashier_GetAllProductLazyQuery>;
export type Cashier_GetAllProductQueryResult = Apollo.QueryResult<Cashier_GetAllProductQuery, Cashier_GetAllProductQueryVariables>;
export const Inventory_BulkDeleteOneInventoryProductByPkDocument = gql`
    mutation Inventory_BulkDeleteOneInventoryProductByPK($inventory_product_id: uuid!) {
  delete_rocketjaket_inventory_product_variant(
    where: {inventory_product_id: {_eq: $inventory_product_id}}
  ) {
    affected_rows
  }
  delete_rocketjaket_inventory_product_by_pk(id: $inventory_product_id) {
    id
    product {
      name
      product_category {
        name
      }
    }
  }
}
    `;
export type Inventory_BulkDeleteOneInventoryProductByPkMutationFn = Apollo.MutationFunction<Inventory_BulkDeleteOneInventoryProductByPkMutation, Inventory_BulkDeleteOneInventoryProductByPkMutationVariables>;

/**
 * __useInventory_BulkDeleteOneInventoryProductByPkMutation__
 *
 * To run a mutation, you first call `useInventory_BulkDeleteOneInventoryProductByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInventory_BulkDeleteOneInventoryProductByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [inventoryBulkDeleteOneInventoryProductByPkMutation, { data, loading, error }] = useInventory_BulkDeleteOneInventoryProductByPkMutation({
 *   variables: {
 *      inventory_product_id: // value for 'inventory_product_id'
 *   },
 * });
 */
export function useInventory_BulkDeleteOneInventoryProductByPkMutation(baseOptions?: Apollo.MutationHookOptions<Inventory_BulkDeleteOneInventoryProductByPkMutation, Inventory_BulkDeleteOneInventoryProductByPkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Inventory_BulkDeleteOneInventoryProductByPkMutation, Inventory_BulkDeleteOneInventoryProductByPkMutationVariables>(Inventory_BulkDeleteOneInventoryProductByPkDocument, options);
      }
export type Inventory_BulkDeleteOneInventoryProductByPkMutationHookResult = ReturnType<typeof useInventory_BulkDeleteOneInventoryProductByPkMutation>;
export type Inventory_BulkDeleteOneInventoryProductByPkMutationResult = Apollo.MutationResult<Inventory_BulkDeleteOneInventoryProductByPkMutation>;
export type Inventory_BulkDeleteOneInventoryProductByPkMutationOptions = Apollo.BaseMutationOptions<Inventory_BulkDeleteOneInventoryProductByPkMutation, Inventory_BulkDeleteOneInventoryProductByPkMutationVariables>;
export const Inventory_BulkUpdateInventoryProductDocument = gql`
    mutation Inventory_BulkUpdateInventoryProduct($inventory_product_id: uuid!, $update_rocketjaket_inventory_product_by_pk: rocketjaket_inventory_product_set_input!, $insert_rocketjaket_inventory_product_variant: [rocketjaket_inventory_product_variant_insert_input!]!) {
  update_rocketjaket_inventory_product_by_pk(
    pk_columns: {id: $inventory_product_id}
    _set: $update_rocketjaket_inventory_product_by_pk
  ) {
    product {
      name
      product_category {
        name
      }
    }
  }
  delete_rocketjaket_inventory_product_variant(
    where: {inventory_product_id: {_eq: $inventory_product_id}}
  ) {
    affected_rows
  }
  insert_rocketjaket_inventory_product_variant(
    objects: $insert_rocketjaket_inventory_product_variant
  ) {
    affected_rows
  }
}
    `;
export type Inventory_BulkUpdateInventoryProductMutationFn = Apollo.MutationFunction<Inventory_BulkUpdateInventoryProductMutation, Inventory_BulkUpdateInventoryProductMutationVariables>;

/**
 * __useInventory_BulkUpdateInventoryProductMutation__
 *
 * To run a mutation, you first call `useInventory_BulkUpdateInventoryProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInventory_BulkUpdateInventoryProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [inventoryBulkUpdateInventoryProductMutation, { data, loading, error }] = useInventory_BulkUpdateInventoryProductMutation({
 *   variables: {
 *      inventory_product_id: // value for 'inventory_product_id'
 *      update_rocketjaket_inventory_product_by_pk: // value for 'update_rocketjaket_inventory_product_by_pk'
 *      insert_rocketjaket_inventory_product_variant: // value for 'insert_rocketjaket_inventory_product_variant'
 *   },
 * });
 */
export function useInventory_BulkUpdateInventoryProductMutation(baseOptions?: Apollo.MutationHookOptions<Inventory_BulkUpdateInventoryProductMutation, Inventory_BulkUpdateInventoryProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Inventory_BulkUpdateInventoryProductMutation, Inventory_BulkUpdateInventoryProductMutationVariables>(Inventory_BulkUpdateInventoryProductDocument, options);
      }
export type Inventory_BulkUpdateInventoryProductMutationHookResult = ReturnType<typeof useInventory_BulkUpdateInventoryProductMutation>;
export type Inventory_BulkUpdateInventoryProductMutationResult = Apollo.MutationResult<Inventory_BulkUpdateInventoryProductMutation>;
export type Inventory_BulkUpdateInventoryProductMutationOptions = Apollo.BaseMutationOptions<Inventory_BulkUpdateInventoryProductMutation, Inventory_BulkUpdateInventoryProductMutationVariables>;
export const Inventory_BulkUpdateVariantsMetadataDocument = gql`
    mutation Inventory_BulkUpdateVariantsMetadata($old_variant_title: String!, $new_variant_title: String!, $needDeleteIds: [Int!]!, $needAddVariantMetadata: [InventoryVariantMetadataInsertInput!]!, $needUpdateVariantMetadata: [InventoryVariantMetadataNeedUpdateInput!]!) {
  bulkUpdateVariantsMetadata(
    new_variant_title: $new_variant_title
    old_variant_title: $old_variant_title
    needDeleteIds: $needDeleteIds
    needAddVariantMetadata: $needAddVariantMetadata
    needUpdateVariantMetadata: $needUpdateVariantMetadata
  ) {
    variant_title
    is_any_update
  }
}
    `;
export type Inventory_BulkUpdateVariantsMetadataMutationFn = Apollo.MutationFunction<Inventory_BulkUpdateVariantsMetadataMutation, Inventory_BulkUpdateVariantsMetadataMutationVariables>;

/**
 * __useInventory_BulkUpdateVariantsMetadataMutation__
 *
 * To run a mutation, you first call `useInventory_BulkUpdateVariantsMetadataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInventory_BulkUpdateVariantsMetadataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [inventoryBulkUpdateVariantsMetadataMutation, { data, loading, error }] = useInventory_BulkUpdateVariantsMetadataMutation({
 *   variables: {
 *      old_variant_title: // value for 'old_variant_title'
 *      new_variant_title: // value for 'new_variant_title'
 *      needDeleteIds: // value for 'needDeleteIds'
 *      needAddVariantMetadata: // value for 'needAddVariantMetadata'
 *      needUpdateVariantMetadata: // value for 'needUpdateVariantMetadata'
 *   },
 * });
 */
export function useInventory_BulkUpdateVariantsMetadataMutation(baseOptions?: Apollo.MutationHookOptions<Inventory_BulkUpdateVariantsMetadataMutation, Inventory_BulkUpdateVariantsMetadataMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Inventory_BulkUpdateVariantsMetadataMutation, Inventory_BulkUpdateVariantsMetadataMutationVariables>(Inventory_BulkUpdateVariantsMetadataDocument, options);
      }
export type Inventory_BulkUpdateVariantsMetadataMutationHookResult = ReturnType<typeof useInventory_BulkUpdateVariantsMetadataMutation>;
export type Inventory_BulkUpdateVariantsMetadataMutationResult = Apollo.MutationResult<Inventory_BulkUpdateVariantsMetadataMutation>;
export type Inventory_BulkUpdateVariantsMetadataMutationOptions = Apollo.BaseMutationOptions<Inventory_BulkUpdateVariantsMetadataMutation, Inventory_BulkUpdateVariantsMetadataMutationVariables>;
export const Inventory_CreateInventoryProductDocument = gql`
    mutation Inventory_CreateInventoryProduct($inventory_product: rocketjaket_inventory_product_insert_input!) {
  insert_rocketjaket_inventory_product_one(object: $inventory_product) {
    id
    inventory_product_variants(order_by: {inventory_variant_metadata_id: asc}) {
      inventory_variant_metadata {
        variant_title
      }
    }
  }
}
    `;
export type Inventory_CreateInventoryProductMutationFn = Apollo.MutationFunction<Inventory_CreateInventoryProductMutation, Inventory_CreateInventoryProductMutationVariables>;

/**
 * __useInventory_CreateInventoryProductMutation__
 *
 * To run a mutation, you first call `useInventory_CreateInventoryProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInventory_CreateInventoryProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [inventoryCreateInventoryProductMutation, { data, loading, error }] = useInventory_CreateInventoryProductMutation({
 *   variables: {
 *      inventory_product: // value for 'inventory_product'
 *   },
 * });
 */
export function useInventory_CreateInventoryProductMutation(baseOptions?: Apollo.MutationHookOptions<Inventory_CreateInventoryProductMutation, Inventory_CreateInventoryProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Inventory_CreateInventoryProductMutation, Inventory_CreateInventoryProductMutationVariables>(Inventory_CreateInventoryProductDocument, options);
      }
export type Inventory_CreateInventoryProductMutationHookResult = ReturnType<typeof useInventory_CreateInventoryProductMutation>;
export type Inventory_CreateInventoryProductMutationResult = Apollo.MutationResult<Inventory_CreateInventoryProductMutation>;
export type Inventory_CreateInventoryProductMutationOptions = Apollo.BaseMutationOptions<Inventory_CreateInventoryProductMutation, Inventory_CreateInventoryProductMutationVariables>;
export const Inventory_CreateInventoryVariantMetadataDocument = gql`
    mutation Inventory_CreateInventoryVariantMetadata($objects: [rocketjaket_inventory_variant_metadata_insert_input!]!) {
  insert_rocketjaket_inventory_variant_metadata(objects: $objects) {
    affected_rows
    returning {
      id
      variant_title
    }
  }
}
    `;
export type Inventory_CreateInventoryVariantMetadataMutationFn = Apollo.MutationFunction<Inventory_CreateInventoryVariantMetadataMutation, Inventory_CreateInventoryVariantMetadataMutationVariables>;

/**
 * __useInventory_CreateInventoryVariantMetadataMutation__
 *
 * To run a mutation, you first call `useInventory_CreateInventoryVariantMetadataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInventory_CreateInventoryVariantMetadataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [inventoryCreateInventoryVariantMetadataMutation, { data, loading, error }] = useInventory_CreateInventoryVariantMetadataMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useInventory_CreateInventoryVariantMetadataMutation(baseOptions?: Apollo.MutationHookOptions<Inventory_CreateInventoryVariantMetadataMutation, Inventory_CreateInventoryVariantMetadataMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Inventory_CreateInventoryVariantMetadataMutation, Inventory_CreateInventoryVariantMetadataMutationVariables>(Inventory_CreateInventoryVariantMetadataDocument, options);
      }
export type Inventory_CreateInventoryVariantMetadataMutationHookResult = ReturnType<typeof useInventory_CreateInventoryVariantMetadataMutation>;
export type Inventory_CreateInventoryVariantMetadataMutationResult = Apollo.MutationResult<Inventory_CreateInventoryVariantMetadataMutation>;
export type Inventory_CreateInventoryVariantMetadataMutationOptions = Apollo.BaseMutationOptions<Inventory_CreateInventoryVariantMetadataMutation, Inventory_CreateInventoryVariantMetadataMutationVariables>;
export const Inventory_DeleteInventoryVariantsMetadataByTitleDocument = gql`
    mutation Inventory_DeleteInventoryVariantsMetadataByTitle($variant_title: String = "") {
  delete_rocketjaket_inventory_variant_metadata(
    where: {variant_title: {_eq: $variant_title}}
  ) {
    affected_rows
  }
}
    `;
export type Inventory_DeleteInventoryVariantsMetadataByTitleMutationFn = Apollo.MutationFunction<Inventory_DeleteInventoryVariantsMetadataByTitleMutation, Inventory_DeleteInventoryVariantsMetadataByTitleMutationVariables>;

/**
 * __useInventory_DeleteInventoryVariantsMetadataByTitleMutation__
 *
 * To run a mutation, you first call `useInventory_DeleteInventoryVariantsMetadataByTitleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInventory_DeleteInventoryVariantsMetadataByTitleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [inventoryDeleteInventoryVariantsMetadataByTitleMutation, { data, loading, error }] = useInventory_DeleteInventoryVariantsMetadataByTitleMutation({
 *   variables: {
 *      variant_title: // value for 'variant_title'
 *   },
 * });
 */
export function useInventory_DeleteInventoryVariantsMetadataByTitleMutation(baseOptions?: Apollo.MutationHookOptions<Inventory_DeleteInventoryVariantsMetadataByTitleMutation, Inventory_DeleteInventoryVariantsMetadataByTitleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Inventory_DeleteInventoryVariantsMetadataByTitleMutation, Inventory_DeleteInventoryVariantsMetadataByTitleMutationVariables>(Inventory_DeleteInventoryVariantsMetadataByTitleDocument, options);
      }
export type Inventory_DeleteInventoryVariantsMetadataByTitleMutationHookResult = ReturnType<typeof useInventory_DeleteInventoryVariantsMetadataByTitleMutation>;
export type Inventory_DeleteInventoryVariantsMetadataByTitleMutationResult = Apollo.MutationResult<Inventory_DeleteInventoryVariantsMetadataByTitleMutation>;
export type Inventory_DeleteInventoryVariantsMetadataByTitleMutationOptions = Apollo.BaseMutationOptions<Inventory_DeleteInventoryVariantsMetadataByTitleMutation, Inventory_DeleteInventoryVariantsMetadataByTitleMutationVariables>;
export const Inventory_GetAllInventoryProductByStorePkDocument = gql`
    query Inventory_GetAllInventoryProductByStorePK($store_id: Int!) {
  rocketjaket_inventory_product(
    where: {store_id: {_eq: $store_id}}
    order_by: {product: {name: asc}}
  ) {
    id
    available_qty
    min_available_qty
    override_selling_price
    override_discount
    override_capital_price
    updated_at
    product {
      name
      capital_price
      selling_price
      discount
      photo_url
      updated_at
      product_category {
        id
        name
      }
    }
    inventory_product_variants(order_by: {inventory_variant_metadata: {id: asc}}) {
      inventory_variant_metadata {
        variant_title
        variant_value
      }
    }
  }
}
    `;

/**
 * __useInventory_GetAllInventoryProductByStorePkQuery__
 *
 * To run a query within a React component, call `useInventory_GetAllInventoryProductByStorePkQuery` and pass it any options that fit your needs.
 * When your component renders, `useInventory_GetAllInventoryProductByStorePkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInventory_GetAllInventoryProductByStorePkQuery({
 *   variables: {
 *      store_id: // value for 'store_id'
 *   },
 * });
 */
export function useInventory_GetAllInventoryProductByStorePkQuery(baseOptions: Apollo.QueryHookOptions<Inventory_GetAllInventoryProductByStorePkQuery, Inventory_GetAllInventoryProductByStorePkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Inventory_GetAllInventoryProductByStorePkQuery, Inventory_GetAllInventoryProductByStorePkQueryVariables>(Inventory_GetAllInventoryProductByStorePkDocument, options);
      }
export function useInventory_GetAllInventoryProductByStorePkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Inventory_GetAllInventoryProductByStorePkQuery, Inventory_GetAllInventoryProductByStorePkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Inventory_GetAllInventoryProductByStorePkQuery, Inventory_GetAllInventoryProductByStorePkQueryVariables>(Inventory_GetAllInventoryProductByStorePkDocument, options);
        }
export type Inventory_GetAllInventoryProductByStorePkQueryHookResult = ReturnType<typeof useInventory_GetAllInventoryProductByStorePkQuery>;
export type Inventory_GetAllInventoryProductByStorePkLazyQueryHookResult = ReturnType<typeof useInventory_GetAllInventoryProductByStorePkLazyQuery>;
export type Inventory_GetAllInventoryProductByStorePkQueryResult = Apollo.QueryResult<Inventory_GetAllInventoryProductByStorePkQuery, Inventory_GetAllInventoryProductByStorePkQueryVariables>;
export const Inventory_GetAllVariantMetadataDocument = gql`
    query Inventory_GetAllVariantMetadata {
  rocketjaket_inventory_variant_metadata(order_by: {id: asc}) {
    variant_title
    variant_value
    id
  }
}
    `;

/**
 * __useInventory_GetAllVariantMetadataQuery__
 *
 * To run a query within a React component, call `useInventory_GetAllVariantMetadataQuery` and pass it any options that fit your needs.
 * When your component renders, `useInventory_GetAllVariantMetadataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInventory_GetAllVariantMetadataQuery({
 *   variables: {
 *   },
 * });
 */
export function useInventory_GetAllVariantMetadataQuery(baseOptions?: Apollo.QueryHookOptions<Inventory_GetAllVariantMetadataQuery, Inventory_GetAllVariantMetadataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Inventory_GetAllVariantMetadataQuery, Inventory_GetAllVariantMetadataQueryVariables>(Inventory_GetAllVariantMetadataDocument, options);
      }
export function useInventory_GetAllVariantMetadataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Inventory_GetAllVariantMetadataQuery, Inventory_GetAllVariantMetadataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Inventory_GetAllVariantMetadataQuery, Inventory_GetAllVariantMetadataQueryVariables>(Inventory_GetAllVariantMetadataDocument, options);
        }
export type Inventory_GetAllVariantMetadataQueryHookResult = ReturnType<typeof useInventory_GetAllVariantMetadataQuery>;
export type Inventory_GetAllVariantMetadataLazyQueryHookResult = ReturnType<typeof useInventory_GetAllVariantMetadataLazyQuery>;
export type Inventory_GetAllVariantMetadataQueryResult = Apollo.QueryResult<Inventory_GetAllVariantMetadataQuery, Inventory_GetAllVariantMetadataQueryVariables>;
export const Inventory_GetInventoryProductByPkDocument = gql`
    query Inventory_GetInventoryProductByPK($id: uuid = "") {
  rocketjaket_inventory_product_by_pk(id: $id) {
    available_qty
    created_at
    min_available_qty
    override_capital_price
    override_discount
    override_selling_price
    product_id
    store_id
    updated_at
    inventory_product_variants {
      inventory_variant_metadata {
        id
        variant_title
        variant_value
      }
    }
  }
}
    `;

/**
 * __useInventory_GetInventoryProductByPkQuery__
 *
 * To run a query within a React component, call `useInventory_GetInventoryProductByPkQuery` and pass it any options that fit your needs.
 * When your component renders, `useInventory_GetInventoryProductByPkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInventory_GetInventoryProductByPkQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useInventory_GetInventoryProductByPkQuery(baseOptions?: Apollo.QueryHookOptions<Inventory_GetInventoryProductByPkQuery, Inventory_GetInventoryProductByPkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Inventory_GetInventoryProductByPkQuery, Inventory_GetInventoryProductByPkQueryVariables>(Inventory_GetInventoryProductByPkDocument, options);
      }
export function useInventory_GetInventoryProductByPkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Inventory_GetInventoryProductByPkQuery, Inventory_GetInventoryProductByPkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Inventory_GetInventoryProductByPkQuery, Inventory_GetInventoryProductByPkQueryVariables>(Inventory_GetInventoryProductByPkDocument, options);
        }
export type Inventory_GetInventoryProductByPkQueryHookResult = ReturnType<typeof useInventory_GetInventoryProductByPkQuery>;
export type Inventory_GetInventoryProductByPkLazyQueryHookResult = ReturnType<typeof useInventory_GetInventoryProductByPkLazyQuery>;
export type Inventory_GetInventoryProductByPkQueryResult = Apollo.QueryResult<Inventory_GetInventoryProductByPkQuery, Inventory_GetInventoryProductByPkQueryVariables>;
export const Inventory_GetVariantMetadataByTitleDocument = gql`
    query Inventory_GetVariantMetadataByTitle($variant_title: String!) {
  rocketjaket_inventory_variant_metadata(
    where: {variant_title: {_eq: $variant_title}}
    order_by: {id: asc}
  ) {
    variant_title
    variant_value
    id
  }
}
    `;

/**
 * __useInventory_GetVariantMetadataByTitleQuery__
 *
 * To run a query within a React component, call `useInventory_GetVariantMetadataByTitleQuery` and pass it any options that fit your needs.
 * When your component renders, `useInventory_GetVariantMetadataByTitleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInventory_GetVariantMetadataByTitleQuery({
 *   variables: {
 *      variant_title: // value for 'variant_title'
 *   },
 * });
 */
export function useInventory_GetVariantMetadataByTitleQuery(baseOptions: Apollo.QueryHookOptions<Inventory_GetVariantMetadataByTitleQuery, Inventory_GetVariantMetadataByTitleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Inventory_GetVariantMetadataByTitleQuery, Inventory_GetVariantMetadataByTitleQueryVariables>(Inventory_GetVariantMetadataByTitleDocument, options);
      }
export function useInventory_GetVariantMetadataByTitleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Inventory_GetVariantMetadataByTitleQuery, Inventory_GetVariantMetadataByTitleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Inventory_GetVariantMetadataByTitleQuery, Inventory_GetVariantMetadataByTitleQueryVariables>(Inventory_GetVariantMetadataByTitleDocument, options);
        }
export type Inventory_GetVariantMetadataByTitleQueryHookResult = ReturnType<typeof useInventory_GetVariantMetadataByTitleQuery>;
export type Inventory_GetVariantMetadataByTitleLazyQueryHookResult = ReturnType<typeof useInventory_GetVariantMetadataByTitleLazyQuery>;
export type Inventory_GetVariantMetadataByTitleQueryResult = Apollo.QueryResult<Inventory_GetVariantMetadataByTitleQuery, Inventory_GetVariantMetadataByTitleQueryVariables>;
export const Produk_CreateKategoriProdukDocument = gql`
    mutation Produk_CreateKategoriProduk($description: String, $name: String!) {
  insert_rocketjaket_product_category_one(
    object: {description: $description, name: $name}
  ) {
    id
    name
    description
  }
}
    `;
export type Produk_CreateKategoriProdukMutationFn = Apollo.MutationFunction<Produk_CreateKategoriProdukMutation, Produk_CreateKategoriProdukMutationVariables>;

/**
 * __useProduk_CreateKategoriProdukMutation__
 *
 * To run a mutation, you first call `useProduk_CreateKategoriProdukMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProduk_CreateKategoriProdukMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [produkCreateKategoriProdukMutation, { data, loading, error }] = useProduk_CreateKategoriProdukMutation({
 *   variables: {
 *      description: // value for 'description'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useProduk_CreateKategoriProdukMutation(baseOptions?: Apollo.MutationHookOptions<Produk_CreateKategoriProdukMutation, Produk_CreateKategoriProdukMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Produk_CreateKategoriProdukMutation, Produk_CreateKategoriProdukMutationVariables>(Produk_CreateKategoriProdukDocument, options);
      }
export type Produk_CreateKategoriProdukMutationHookResult = ReturnType<typeof useProduk_CreateKategoriProdukMutation>;
export type Produk_CreateKategoriProdukMutationResult = Apollo.MutationResult<Produk_CreateKategoriProdukMutation>;
export type Produk_CreateKategoriProdukMutationOptions = Apollo.BaseMutationOptions<Produk_CreateKategoriProdukMutation, Produk_CreateKategoriProdukMutationVariables>;
export const Produk_CreateProdukDocument = gql`
    mutation Produk_CreateProduk($capital_price: Int!, $discount: Int, $name: String!, $photo_url: String, $product_category_id: Int, $selling_price: Int!) {
  insert_rocketjaket_product_one(
    object: {selling_price: $selling_price, product_category_id: $product_category_id, photo_url: $photo_url, name: $name, discount: $discount, capital_price: $capital_price}
  ) {
    id
    name
  }
}
    `;
export type Produk_CreateProdukMutationFn = Apollo.MutationFunction<Produk_CreateProdukMutation, Produk_CreateProdukMutationVariables>;

/**
 * __useProduk_CreateProdukMutation__
 *
 * To run a mutation, you first call `useProduk_CreateProdukMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProduk_CreateProdukMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [produkCreateProdukMutation, { data, loading, error }] = useProduk_CreateProdukMutation({
 *   variables: {
 *      capital_price: // value for 'capital_price'
 *      discount: // value for 'discount'
 *      name: // value for 'name'
 *      photo_url: // value for 'photo_url'
 *      product_category_id: // value for 'product_category_id'
 *      selling_price: // value for 'selling_price'
 *   },
 * });
 */
export function useProduk_CreateProdukMutation(baseOptions?: Apollo.MutationHookOptions<Produk_CreateProdukMutation, Produk_CreateProdukMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Produk_CreateProdukMutation, Produk_CreateProdukMutationVariables>(Produk_CreateProdukDocument, options);
      }
export type Produk_CreateProdukMutationHookResult = ReturnType<typeof useProduk_CreateProdukMutation>;
export type Produk_CreateProdukMutationResult = Apollo.MutationResult<Produk_CreateProdukMutation>;
export type Produk_CreateProdukMutationOptions = Apollo.BaseMutationOptions<Produk_CreateProdukMutation, Produk_CreateProdukMutationVariables>;
export const Produk_DeleteKategoriProdukDocument = gql`
    mutation Produk_DeleteKategoriProduk($id: Int!) {
  delete_rocketjaket_product_category_by_pk(id: $id) {
    id
    name
  }
}
    `;
export type Produk_DeleteKategoriProdukMutationFn = Apollo.MutationFunction<Produk_DeleteKategoriProdukMutation, Produk_DeleteKategoriProdukMutationVariables>;

/**
 * __useProduk_DeleteKategoriProdukMutation__
 *
 * To run a mutation, you first call `useProduk_DeleteKategoriProdukMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProduk_DeleteKategoriProdukMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [produkDeleteKategoriProdukMutation, { data, loading, error }] = useProduk_DeleteKategoriProdukMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProduk_DeleteKategoriProdukMutation(baseOptions?: Apollo.MutationHookOptions<Produk_DeleteKategoriProdukMutation, Produk_DeleteKategoriProdukMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Produk_DeleteKategoriProdukMutation, Produk_DeleteKategoriProdukMutationVariables>(Produk_DeleteKategoriProdukDocument, options);
      }
export type Produk_DeleteKategoriProdukMutationHookResult = ReturnType<typeof useProduk_DeleteKategoriProdukMutation>;
export type Produk_DeleteKategoriProdukMutationResult = Apollo.MutationResult<Produk_DeleteKategoriProdukMutation>;
export type Produk_DeleteKategoriProdukMutationOptions = Apollo.BaseMutationOptions<Produk_DeleteKategoriProdukMutation, Produk_DeleteKategoriProdukMutationVariables>;
export const Produk_DeleteProdukByPkDocument = gql`
    mutation Produk_DeleteProdukByPK($id: uuid!) {
  delete_rocketjaket_product_by_pk(id: $id) {
    id
    name
  }
}
    `;
export type Produk_DeleteProdukByPkMutationFn = Apollo.MutationFunction<Produk_DeleteProdukByPkMutation, Produk_DeleteProdukByPkMutationVariables>;

/**
 * __useProduk_DeleteProdukByPkMutation__
 *
 * To run a mutation, you first call `useProduk_DeleteProdukByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProduk_DeleteProdukByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [produkDeleteProdukByPkMutation, { data, loading, error }] = useProduk_DeleteProdukByPkMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProduk_DeleteProdukByPkMutation(baseOptions?: Apollo.MutationHookOptions<Produk_DeleteProdukByPkMutation, Produk_DeleteProdukByPkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Produk_DeleteProdukByPkMutation, Produk_DeleteProdukByPkMutationVariables>(Produk_DeleteProdukByPkDocument, options);
      }
export type Produk_DeleteProdukByPkMutationHookResult = ReturnType<typeof useProduk_DeleteProdukByPkMutation>;
export type Produk_DeleteProdukByPkMutationResult = Apollo.MutationResult<Produk_DeleteProdukByPkMutation>;
export type Produk_DeleteProdukByPkMutationOptions = Apollo.BaseMutationOptions<Produk_DeleteProdukByPkMutation, Produk_DeleteProdukByPkMutationVariables>;
export const Produk_UpdateKategoriProdukDocument = gql`
    mutation Produk_UpdateKategoriProduk($id: Int!, $description: String, $name: String!) {
  update_rocketjaket_product_category_by_pk(
    pk_columns: {id: $id}
    _set: {name: $name, description: $description}
  ) {
    name
    id
    description
  }
}
    `;
export type Produk_UpdateKategoriProdukMutationFn = Apollo.MutationFunction<Produk_UpdateKategoriProdukMutation, Produk_UpdateKategoriProdukMutationVariables>;

/**
 * __useProduk_UpdateKategoriProdukMutation__
 *
 * To run a mutation, you first call `useProduk_UpdateKategoriProdukMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProduk_UpdateKategoriProdukMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [produkUpdateKategoriProdukMutation, { data, loading, error }] = useProduk_UpdateKategoriProdukMutation({
 *   variables: {
 *      id: // value for 'id'
 *      description: // value for 'description'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useProduk_UpdateKategoriProdukMutation(baseOptions?: Apollo.MutationHookOptions<Produk_UpdateKategoriProdukMutation, Produk_UpdateKategoriProdukMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Produk_UpdateKategoriProdukMutation, Produk_UpdateKategoriProdukMutationVariables>(Produk_UpdateKategoriProdukDocument, options);
      }
export type Produk_UpdateKategoriProdukMutationHookResult = ReturnType<typeof useProduk_UpdateKategoriProdukMutation>;
export type Produk_UpdateKategoriProdukMutationResult = Apollo.MutationResult<Produk_UpdateKategoriProdukMutation>;
export type Produk_UpdateKategoriProdukMutationOptions = Apollo.BaseMutationOptions<Produk_UpdateKategoriProdukMutation, Produk_UpdateKategoriProdukMutationVariables>;
export const Produk_UpdateProdukByPkDocument = gql`
    mutation Produk_UpdateProdukByPK($id: uuid!, $name: String!, $photo_url: String, $product_category_id: Int, $selling_price: Int, $capital_price: Int, $discount: Int) {
  update_rocketjaket_product_by_pk(
    pk_columns: {id: $id}
    _set: {name: $name, photo_url: $photo_url, product_category_id: $product_category_id, selling_price: $selling_price, capital_price: $capital_price, discount: $discount}
  ) {
    id
    name
  }
}
    `;
export type Produk_UpdateProdukByPkMutationFn = Apollo.MutationFunction<Produk_UpdateProdukByPkMutation, Produk_UpdateProdukByPkMutationVariables>;

/**
 * __useProduk_UpdateProdukByPkMutation__
 *
 * To run a mutation, you first call `useProduk_UpdateProdukByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProduk_UpdateProdukByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [produkUpdateProdukByPkMutation, { data, loading, error }] = useProduk_UpdateProdukByPkMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      photo_url: // value for 'photo_url'
 *      product_category_id: // value for 'product_category_id'
 *      selling_price: // value for 'selling_price'
 *      capital_price: // value for 'capital_price'
 *      discount: // value for 'discount'
 *   },
 * });
 */
export function useProduk_UpdateProdukByPkMutation(baseOptions?: Apollo.MutationHookOptions<Produk_UpdateProdukByPkMutation, Produk_UpdateProdukByPkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Produk_UpdateProdukByPkMutation, Produk_UpdateProdukByPkMutationVariables>(Produk_UpdateProdukByPkDocument, options);
      }
export type Produk_UpdateProdukByPkMutationHookResult = ReturnType<typeof useProduk_UpdateProdukByPkMutation>;
export type Produk_UpdateProdukByPkMutationResult = Apollo.MutationResult<Produk_UpdateProdukByPkMutation>;
export type Produk_UpdateProdukByPkMutationOptions = Apollo.BaseMutationOptions<Produk_UpdateProdukByPkMutation, Produk_UpdateProdukByPkMutationVariables>;
export const Produk_GetAllKategoriProdukDocument = gql`
    query Produk_GetAllKategoriProduk {
  rocketjaket_product_category(order_by: {name: asc}) {
    id
    name
    description
  }
}
    `;

/**
 * __useProduk_GetAllKategoriProdukQuery__
 *
 * To run a query within a React component, call `useProduk_GetAllKategoriProdukQuery` and pass it any options that fit your needs.
 * When your component renders, `useProduk_GetAllKategoriProdukQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProduk_GetAllKategoriProdukQuery({
 *   variables: {
 *   },
 * });
 */
export function useProduk_GetAllKategoriProdukQuery(baseOptions?: Apollo.QueryHookOptions<Produk_GetAllKategoriProdukQuery, Produk_GetAllKategoriProdukQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Produk_GetAllKategoriProdukQuery, Produk_GetAllKategoriProdukQueryVariables>(Produk_GetAllKategoriProdukDocument, options);
      }
export function useProduk_GetAllKategoriProdukLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Produk_GetAllKategoriProdukQuery, Produk_GetAllKategoriProdukQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Produk_GetAllKategoriProdukQuery, Produk_GetAllKategoriProdukQueryVariables>(Produk_GetAllKategoriProdukDocument, options);
        }
export type Produk_GetAllKategoriProdukQueryHookResult = ReturnType<typeof useProduk_GetAllKategoriProdukQuery>;
export type Produk_GetAllKategoriProdukLazyQueryHookResult = ReturnType<typeof useProduk_GetAllKategoriProdukLazyQuery>;
export type Produk_GetAllKategoriProdukQueryResult = Apollo.QueryResult<Produk_GetAllKategoriProdukQuery, Produk_GetAllKategoriProdukQueryVariables>;
export const Produk_GetAllProdukDocument = gql`
    query Produk_GetAllProduk {
  rocketjaket_product {
    name
    id
    photo_url
    capital_price
    discount
    selling_price
    product_category {
      name
    }
  }
}
    `;

/**
 * __useProduk_GetAllProdukQuery__
 *
 * To run a query within a React component, call `useProduk_GetAllProdukQuery` and pass it any options that fit your needs.
 * When your component renders, `useProduk_GetAllProdukQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProduk_GetAllProdukQuery({
 *   variables: {
 *   },
 * });
 */
export function useProduk_GetAllProdukQuery(baseOptions?: Apollo.QueryHookOptions<Produk_GetAllProdukQuery, Produk_GetAllProdukQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Produk_GetAllProdukQuery, Produk_GetAllProdukQueryVariables>(Produk_GetAllProdukDocument, options);
      }
export function useProduk_GetAllProdukLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Produk_GetAllProdukQuery, Produk_GetAllProdukQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Produk_GetAllProdukQuery, Produk_GetAllProdukQueryVariables>(Produk_GetAllProdukDocument, options);
        }
export type Produk_GetAllProdukQueryHookResult = ReturnType<typeof useProduk_GetAllProdukQuery>;
export type Produk_GetAllProdukLazyQueryHookResult = ReturnType<typeof useProduk_GetAllProdukLazyQuery>;
export type Produk_GetAllProdukQueryResult = Apollo.QueryResult<Produk_GetAllProdukQuery, Produk_GetAllProdukQueryVariables>;
export const Produk_GetKategoriProdukByPkDocument = gql`
    query Produk_GetKategoriProdukByPK($id: Int!) {
  rocketjaket_product_category_by_pk(id: $id) {
    id
    name
    description
  }
}
    `;

/**
 * __useProduk_GetKategoriProdukByPkQuery__
 *
 * To run a query within a React component, call `useProduk_GetKategoriProdukByPkQuery` and pass it any options that fit your needs.
 * When your component renders, `useProduk_GetKategoriProdukByPkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProduk_GetKategoriProdukByPkQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProduk_GetKategoriProdukByPkQuery(baseOptions: Apollo.QueryHookOptions<Produk_GetKategoriProdukByPkQuery, Produk_GetKategoriProdukByPkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Produk_GetKategoriProdukByPkQuery, Produk_GetKategoriProdukByPkQueryVariables>(Produk_GetKategoriProdukByPkDocument, options);
      }
export function useProduk_GetKategoriProdukByPkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Produk_GetKategoriProdukByPkQuery, Produk_GetKategoriProdukByPkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Produk_GetKategoriProdukByPkQuery, Produk_GetKategoriProdukByPkQueryVariables>(Produk_GetKategoriProdukByPkDocument, options);
        }
export type Produk_GetKategoriProdukByPkQueryHookResult = ReturnType<typeof useProduk_GetKategoriProdukByPkQuery>;
export type Produk_GetKategoriProdukByPkLazyQueryHookResult = ReturnType<typeof useProduk_GetKategoriProdukByPkLazyQuery>;
export type Produk_GetKategoriProdukByPkQueryResult = Apollo.QueryResult<Produk_GetKategoriProdukByPkQuery, Produk_GetKategoriProdukByPkQueryVariables>;
export const Produk_GetProdukByPkDocument = gql`
    query Produk_GetProdukByPK($id: uuid!) {
  rocketjaket_product_by_pk(id: $id) {
    id
    name
    photo_url
    selling_price
    discount
    capital_price
    product_category_id
    created_at
    updated_at
    product_category {
      name
    }
  }
}
    `;

/**
 * __useProduk_GetProdukByPkQuery__
 *
 * To run a query within a React component, call `useProduk_GetProdukByPkQuery` and pass it any options that fit your needs.
 * When your component renders, `useProduk_GetProdukByPkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProduk_GetProdukByPkQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProduk_GetProdukByPkQuery(baseOptions: Apollo.QueryHookOptions<Produk_GetProdukByPkQuery, Produk_GetProdukByPkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Produk_GetProdukByPkQuery, Produk_GetProdukByPkQueryVariables>(Produk_GetProdukByPkDocument, options);
      }
export function useProduk_GetProdukByPkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Produk_GetProdukByPkQuery, Produk_GetProdukByPkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Produk_GetProdukByPkQuery, Produk_GetProdukByPkQueryVariables>(Produk_GetProdukByPkDocument, options);
        }
export type Produk_GetProdukByPkQueryHookResult = ReturnType<typeof useProduk_GetProdukByPkQuery>;
export type Produk_GetProdukByPkLazyQueryHookResult = ReturnType<typeof useProduk_GetProdukByPkLazyQuery>;
export type Produk_GetProdukByPkQueryResult = Apollo.QueryResult<Produk_GetProdukByPkQuery, Produk_GetProdukByPkQueryVariables>;
export const Store_CreateStoreDocument = gql`
    mutation Store_CreateStore($name: String!, $address: String, $latitude: String, $longitude: String) {
  insert_rocketjaket_store_one(
    object: {name: $name, address: $address, latitude: $latitude, longitude: $longitude}
  ) {
    id
    name
  }
}
    `;
export type Store_CreateStoreMutationFn = Apollo.MutationFunction<Store_CreateStoreMutation, Store_CreateStoreMutationVariables>;

/**
 * __useStore_CreateStoreMutation__
 *
 * To run a mutation, you first call `useStore_CreateStoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStore_CreateStoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [storeCreateStoreMutation, { data, loading, error }] = useStore_CreateStoreMutation({
 *   variables: {
 *      name: // value for 'name'
 *      address: // value for 'address'
 *      latitude: // value for 'latitude'
 *      longitude: // value for 'longitude'
 *   },
 * });
 */
export function useStore_CreateStoreMutation(baseOptions?: Apollo.MutationHookOptions<Store_CreateStoreMutation, Store_CreateStoreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Store_CreateStoreMutation, Store_CreateStoreMutationVariables>(Store_CreateStoreDocument, options);
      }
export type Store_CreateStoreMutationHookResult = ReturnType<typeof useStore_CreateStoreMutation>;
export type Store_CreateStoreMutationResult = Apollo.MutationResult<Store_CreateStoreMutation>;
export type Store_CreateStoreMutationOptions = Apollo.BaseMutationOptions<Store_CreateStoreMutation, Store_CreateStoreMutationVariables>;
export const Store_DeleteStoreByPkDocument = gql`
    mutation Store_DeleteStoreByPK($id: Int = 10) {
  delete_rocketjaket_store_by_pk(id: $id) {
    id
    name
  }
}
    `;
export type Store_DeleteStoreByPkMutationFn = Apollo.MutationFunction<Store_DeleteStoreByPkMutation, Store_DeleteStoreByPkMutationVariables>;

/**
 * __useStore_DeleteStoreByPkMutation__
 *
 * To run a mutation, you first call `useStore_DeleteStoreByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStore_DeleteStoreByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [storeDeleteStoreByPkMutation, { data, loading, error }] = useStore_DeleteStoreByPkMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useStore_DeleteStoreByPkMutation(baseOptions?: Apollo.MutationHookOptions<Store_DeleteStoreByPkMutation, Store_DeleteStoreByPkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Store_DeleteStoreByPkMutation, Store_DeleteStoreByPkMutationVariables>(Store_DeleteStoreByPkDocument, options);
      }
export type Store_DeleteStoreByPkMutationHookResult = ReturnType<typeof useStore_DeleteStoreByPkMutation>;
export type Store_DeleteStoreByPkMutationResult = Apollo.MutationResult<Store_DeleteStoreByPkMutation>;
export type Store_DeleteStoreByPkMutationOptions = Apollo.BaseMutationOptions<Store_DeleteStoreByPkMutation, Store_DeleteStoreByPkMutationVariables>;
export const Store_UpdateStoreDocument = gql`
    mutation Store_UpdateStore($id: Int!, $address: String, $latitude: String, $longitude: String, $name: String) {
  update_rocketjaket_store_by_pk(
    pk_columns: {id: $id}
    _set: {name: $name, address: $address, latitude: $latitude, longitude: $longitude}
  ) {
    id
    name
  }
}
    `;
export type Store_UpdateStoreMutationFn = Apollo.MutationFunction<Store_UpdateStoreMutation, Store_UpdateStoreMutationVariables>;

/**
 * __useStore_UpdateStoreMutation__
 *
 * To run a mutation, you first call `useStore_UpdateStoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStore_UpdateStoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [storeUpdateStoreMutation, { data, loading, error }] = useStore_UpdateStoreMutation({
 *   variables: {
 *      id: // value for 'id'
 *      address: // value for 'address'
 *      latitude: // value for 'latitude'
 *      longitude: // value for 'longitude'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useStore_UpdateStoreMutation(baseOptions?: Apollo.MutationHookOptions<Store_UpdateStoreMutation, Store_UpdateStoreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Store_UpdateStoreMutation, Store_UpdateStoreMutationVariables>(Store_UpdateStoreDocument, options);
      }
export type Store_UpdateStoreMutationHookResult = ReturnType<typeof useStore_UpdateStoreMutation>;
export type Store_UpdateStoreMutationResult = Apollo.MutationResult<Store_UpdateStoreMutation>;
export type Store_UpdateStoreMutationOptions = Apollo.BaseMutationOptions<Store_UpdateStoreMutation, Store_UpdateStoreMutationVariables>;
export const Wa_SignoutDocument = gql`
    mutation WA_Signout {
  whatsappSignout {
    is_success
  }
}
    `;
export type Wa_SignoutMutationFn = Apollo.MutationFunction<Wa_SignoutMutation, Wa_SignoutMutationVariables>;

/**
 * __useWa_SignoutMutation__
 *
 * To run a mutation, you first call `useWa_SignoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWa_SignoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [waSignoutMutation, { data, loading, error }] = useWa_SignoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useWa_SignoutMutation(baseOptions?: Apollo.MutationHookOptions<Wa_SignoutMutation, Wa_SignoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Wa_SignoutMutation, Wa_SignoutMutationVariables>(Wa_SignoutDocument, options);
      }
export type Wa_SignoutMutationHookResult = ReturnType<typeof useWa_SignoutMutation>;
export type Wa_SignoutMutationResult = Apollo.MutationResult<Wa_SignoutMutation>;
export type Wa_SignoutMutationOptions = Apollo.BaseMutationOptions<Wa_SignoutMutation, Wa_SignoutMutationVariables>;
export const Store_GetAllStoreDocument = gql`
    query Store_GetAllStore {
  rocketjaket_store {
    id
    name
    latitude
    longitude
    address
  }
}
    `;

/**
 * __useStore_GetAllStoreQuery__
 *
 * To run a query within a React component, call `useStore_GetAllStoreQuery` and pass it any options that fit your needs.
 * When your component renders, `useStore_GetAllStoreQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStore_GetAllStoreQuery({
 *   variables: {
 *   },
 * });
 */
export function useStore_GetAllStoreQuery(baseOptions?: Apollo.QueryHookOptions<Store_GetAllStoreQuery, Store_GetAllStoreQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Store_GetAllStoreQuery, Store_GetAllStoreQueryVariables>(Store_GetAllStoreDocument, options);
      }
export function useStore_GetAllStoreLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Store_GetAllStoreQuery, Store_GetAllStoreQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Store_GetAllStoreQuery, Store_GetAllStoreQueryVariables>(Store_GetAllStoreDocument, options);
        }
export type Store_GetAllStoreQueryHookResult = ReturnType<typeof useStore_GetAllStoreQuery>;
export type Store_GetAllStoreLazyQueryHookResult = ReturnType<typeof useStore_GetAllStoreLazyQuery>;
export type Store_GetAllStoreQueryResult = Apollo.QueryResult<Store_GetAllStoreQuery, Store_GetAllStoreQueryVariables>;
export const Store_GetStoreByPkDocument = gql`
    query Store_GetStoreByPK($id: Int!) {
  rocketjaket_store_by_pk(id: $id) {
    id
    name
    latitude
    longitude
    address
    created_at
    updated_at
  }
}
    `;

/**
 * __useStore_GetStoreByPkQuery__
 *
 * To run a query within a React component, call `useStore_GetStoreByPkQuery` and pass it any options that fit your needs.
 * When your component renders, `useStore_GetStoreByPkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStore_GetStoreByPkQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useStore_GetStoreByPkQuery(baseOptions: Apollo.QueryHookOptions<Store_GetStoreByPkQuery, Store_GetStoreByPkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Store_GetStoreByPkQuery, Store_GetStoreByPkQueryVariables>(Store_GetStoreByPkDocument, options);
      }
export function useStore_GetStoreByPkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Store_GetStoreByPkQuery, Store_GetStoreByPkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Store_GetStoreByPkQuery, Store_GetStoreByPkQueryVariables>(Store_GetStoreByPkDocument, options);
        }
export type Store_GetStoreByPkQueryHookResult = ReturnType<typeof useStore_GetStoreByPkQuery>;
export type Store_GetStoreByPkLazyQueryHookResult = ReturnType<typeof useStore_GetStoreByPkLazyQuery>;
export type Store_GetStoreByPkQueryResult = Apollo.QueryResult<Store_GetStoreByPkQuery, Store_GetStoreByPkQueryVariables>;
export const Wa_GetWaAuthStatusDocument = gql`
    query WA_GetWAAuthStatus {
  getWhatsappAuthStatus {
    qr_code
    is_authenticated
    client_state
    client_platform
    client_phone_number
    client_name
    client_device_model
    client_device_manufacturer
  }
}
    `;

/**
 * __useWa_GetWaAuthStatusQuery__
 *
 * To run a query within a React component, call `useWa_GetWaAuthStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useWa_GetWaAuthStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWa_GetWaAuthStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useWa_GetWaAuthStatusQuery(baseOptions?: Apollo.QueryHookOptions<Wa_GetWaAuthStatusQuery, Wa_GetWaAuthStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Wa_GetWaAuthStatusQuery, Wa_GetWaAuthStatusQueryVariables>(Wa_GetWaAuthStatusDocument, options);
      }
export function useWa_GetWaAuthStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Wa_GetWaAuthStatusQuery, Wa_GetWaAuthStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Wa_GetWaAuthStatusQuery, Wa_GetWaAuthStatusQueryVariables>(Wa_GetWaAuthStatusDocument, options);
        }
export type Wa_GetWaAuthStatusQueryHookResult = ReturnType<typeof useWa_GetWaAuthStatusQuery>;
export type Wa_GetWaAuthStatusLazyQueryHookResult = ReturnType<typeof useWa_GetWaAuthStatusLazyQuery>;
export type Wa_GetWaAuthStatusQueryResult = Apollo.QueryResult<Wa_GetWaAuthStatusQuery, Wa_GetWaAuthStatusQueryVariables>;
export const Transaction_RefundTransactionDocument = gql`
    mutation Transaction_RefundTransaction($invoice_number: String!, $isRefundAll: Boolean!, $refund_reason: String!) {
  refundTransaction(
    invoice_number: $invoice_number
    isRefundAll: $isRefundAll
    refund_reason: $refund_reason
  ) {
    invoice_number
    is_success
  }
}
    `;
export type Transaction_RefundTransactionMutationFn = Apollo.MutationFunction<Transaction_RefundTransactionMutation, Transaction_RefundTransactionMutationVariables>;

/**
 * __useTransaction_RefundTransactionMutation__
 *
 * To run a mutation, you first call `useTransaction_RefundTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTransaction_RefundTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [transactionRefundTransactionMutation, { data, loading, error }] = useTransaction_RefundTransactionMutation({
 *   variables: {
 *      invoice_number: // value for 'invoice_number'
 *      isRefundAll: // value for 'isRefundAll'
 *      refund_reason: // value for 'refund_reason'
 *   },
 * });
 */
export function useTransaction_RefundTransactionMutation(baseOptions?: Apollo.MutationHookOptions<Transaction_RefundTransactionMutation, Transaction_RefundTransactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Transaction_RefundTransactionMutation, Transaction_RefundTransactionMutationVariables>(Transaction_RefundTransactionDocument, options);
      }
export type Transaction_RefundTransactionMutationHookResult = ReturnType<typeof useTransaction_RefundTransactionMutation>;
export type Transaction_RefundTransactionMutationResult = Apollo.MutationResult<Transaction_RefundTransactionMutation>;
export type Transaction_RefundTransactionMutationOptions = Apollo.BaseMutationOptions<Transaction_RefundTransactionMutation, Transaction_RefundTransactionMutationVariables>;
export const Transaction_GetAllTransactionByStoreIdDocument = gql`
    query Transaction_GetAllTransactionByStoreId($store_id: Int) {
  rocketjaket_transaction(where: {store_id: {_eq: $store_id}}) {
    cash_change
    cash_in_amount
    created_at
    invoice_number
    payment_type
    store_id
    total_transaction
    updated_at
    user {
      id
      display_name
    }
    transaction_status_enum {
      transaction_status
      title
    }
    transaction_items {
      id
      inventory_product_id
      product_name
      profit
    }
  }
}
    `;

/**
 * __useTransaction_GetAllTransactionByStoreIdQuery__
 *
 * To run a query within a React component, call `useTransaction_GetAllTransactionByStoreIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useTransaction_GetAllTransactionByStoreIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTransaction_GetAllTransactionByStoreIdQuery({
 *   variables: {
 *      store_id: // value for 'store_id'
 *   },
 * });
 */
export function useTransaction_GetAllTransactionByStoreIdQuery(baseOptions?: Apollo.QueryHookOptions<Transaction_GetAllTransactionByStoreIdQuery, Transaction_GetAllTransactionByStoreIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Transaction_GetAllTransactionByStoreIdQuery, Transaction_GetAllTransactionByStoreIdQueryVariables>(Transaction_GetAllTransactionByStoreIdDocument, options);
      }
export function useTransaction_GetAllTransactionByStoreIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Transaction_GetAllTransactionByStoreIdQuery, Transaction_GetAllTransactionByStoreIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Transaction_GetAllTransactionByStoreIdQuery, Transaction_GetAllTransactionByStoreIdQueryVariables>(Transaction_GetAllTransactionByStoreIdDocument, options);
        }
export type Transaction_GetAllTransactionByStoreIdQueryHookResult = ReturnType<typeof useTransaction_GetAllTransactionByStoreIdQuery>;
export type Transaction_GetAllTransactionByStoreIdLazyQueryHookResult = ReturnType<typeof useTransaction_GetAllTransactionByStoreIdLazyQuery>;
export type Transaction_GetAllTransactionByStoreIdQueryResult = Apollo.QueryResult<Transaction_GetAllTransactionByStoreIdQuery, Transaction_GetAllTransactionByStoreIdQueryVariables>;
export const Transaction_GetTransactionByPkDocument = gql`
    query Transaction_GetTransactionByPK($invoice_number: String!) {
  rocketjaket_transaction_by_pk(invoice_number: $invoice_number) {
    cash_change
    cash_in_amount
    created_at
    invoice_number
    store {
      name
      address
    }
    total_transaction
    transaction_status_enum {
      transaction_status
      title
    }
    updated_at
    user {
      display_name
      id
    }
    transaction_items {
      created_at
      capital_price
      discount
      id
      inventory_product_id
      product_name
      profit
      purchase_qty
      selling_price
      subtotal
      updated_at
      variant
      transaction_status_enum {
        title
        transaction_status
      }
      transaction_status
      inventory_product {
        product {
          photo_url
          name
          capital_price
          selling_price
          discount
          updated_at
        }
        inventory_product_variants {
          inventory_variant_metadata_id
        }
        override_capital_price
        override_selling_price
        override_discount
        available_qty
        updated_at
      }
    }
    transaction_receipts(order_by: {created_at: desc_nulls_last}) {
      created_at
      customer {
        id
        email
        name
        phone_number
      }
      is_sent
      transaction_receipt_type_enum {
        receipt_type
        title
      }
    }
    transaction_status
  }
}
    `;

/**
 * __useTransaction_GetTransactionByPkQuery__
 *
 * To run a query within a React component, call `useTransaction_GetTransactionByPkQuery` and pass it any options that fit your needs.
 * When your component renders, `useTransaction_GetTransactionByPkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTransaction_GetTransactionByPkQuery({
 *   variables: {
 *      invoice_number: // value for 'invoice_number'
 *   },
 * });
 */
export function useTransaction_GetTransactionByPkQuery(baseOptions: Apollo.QueryHookOptions<Transaction_GetTransactionByPkQuery, Transaction_GetTransactionByPkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Transaction_GetTransactionByPkQuery, Transaction_GetTransactionByPkQueryVariables>(Transaction_GetTransactionByPkDocument, options);
      }
export function useTransaction_GetTransactionByPkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Transaction_GetTransactionByPkQuery, Transaction_GetTransactionByPkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Transaction_GetTransactionByPkQuery, Transaction_GetTransactionByPkQueryVariables>(Transaction_GetTransactionByPkDocument, options);
        }
export type Transaction_GetTransactionByPkQueryHookResult = ReturnType<typeof useTransaction_GetTransactionByPkQuery>;
export type Transaction_GetTransactionByPkLazyQueryHookResult = ReturnType<typeof useTransaction_GetTransactionByPkLazyQuery>;
export type Transaction_GetTransactionByPkQueryResult = Apollo.QueryResult<Transaction_GetTransactionByPkQuery, Transaction_GetTransactionByPkQueryVariables>;
export const User_BulkDeleteOneUserDocument = gql`
    mutation User_BulkDeleteOneUser($account_id: uuid!, $user_id: uuid!) {
  delete_auth_refresh_tokens(where: {account_id: {_eq: $account_id}}) {
    affected_rows
  }
  delete_auth_account_roles(where: {account_id: {_eq: $account_id}}) {
    affected_rows
  }
  delete_auth_accounts(where: {id: {_eq: $account_id}}) {
    affected_rows
  }
  delete_users_by_pk(id: $user_id) {
    id
    display_name
  }
}
    `;
export type User_BulkDeleteOneUserMutationFn = Apollo.MutationFunction<User_BulkDeleteOneUserMutation, User_BulkDeleteOneUserMutationVariables>;

/**
 * __useUser_BulkDeleteOneUserMutation__
 *
 * To run a mutation, you first call `useUser_BulkDeleteOneUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUser_BulkDeleteOneUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userBulkDeleteOneUserMutation, { data, loading, error }] = useUser_BulkDeleteOneUserMutation({
 *   variables: {
 *      account_id: // value for 'account_id'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useUser_BulkDeleteOneUserMutation(baseOptions?: Apollo.MutationHookOptions<User_BulkDeleteOneUserMutation, User_BulkDeleteOneUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<User_BulkDeleteOneUserMutation, User_BulkDeleteOneUserMutationVariables>(User_BulkDeleteOneUserDocument, options);
      }
export type User_BulkDeleteOneUserMutationHookResult = ReturnType<typeof useUser_BulkDeleteOneUserMutation>;
export type User_BulkDeleteOneUserMutationResult = Apollo.MutationResult<User_BulkDeleteOneUserMutation>;
export type User_BulkDeleteOneUserMutationOptions = Apollo.BaseMutationOptions<User_BulkDeleteOneUserMutation, User_BulkDeleteOneUserMutationVariables>;
export const User_BulkUpdateUserByUserIdDocument = gql`
    mutation User_BulkUpdateUserByUserId($user_id: uuid!, $update_user: users_set_input!) {
  update_users_by_pk(pk_columns: {id: $user_id}, _set: $update_user) {
    display_name
  }
}
    `;
export type User_BulkUpdateUserByUserIdMutationFn = Apollo.MutationFunction<User_BulkUpdateUserByUserIdMutation, User_BulkUpdateUserByUserIdMutationVariables>;

/**
 * __useUser_BulkUpdateUserByUserIdMutation__
 *
 * To run a mutation, you first call `useUser_BulkUpdateUserByUserIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUser_BulkUpdateUserByUserIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userBulkUpdateUserByUserIdMutation, { data, loading, error }] = useUser_BulkUpdateUserByUserIdMutation({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      update_user: // value for 'update_user'
 *   },
 * });
 */
export function useUser_BulkUpdateUserByUserIdMutation(baseOptions?: Apollo.MutationHookOptions<User_BulkUpdateUserByUserIdMutation, User_BulkUpdateUserByUserIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<User_BulkUpdateUserByUserIdMutation, User_BulkUpdateUserByUserIdMutationVariables>(User_BulkUpdateUserByUserIdDocument, options);
      }
export type User_BulkUpdateUserByUserIdMutationHookResult = ReturnType<typeof useUser_BulkUpdateUserByUserIdMutation>;
export type User_BulkUpdateUserByUserIdMutationResult = Apollo.MutationResult<User_BulkUpdateUserByUserIdMutation>;
export type User_BulkUpdateUserByUserIdMutationOptions = Apollo.BaseMutationOptions<User_BulkUpdateUserByUserIdMutation, User_BulkUpdateUserByUserIdMutationVariables>;
export const User_CreateCustomAuthAccountRoleOneDocument = gql`
    mutation User_CreateCustomAuthAccountRoleOne($insert_auth_account_roles_one: auth_account_roles_insert_input!) {
  insert_auth_account_roles_one(object: $insert_auth_account_roles_one) {
    id
    is_custom
    role
  }
}
    `;
export type User_CreateCustomAuthAccountRoleOneMutationFn = Apollo.MutationFunction<User_CreateCustomAuthAccountRoleOneMutation, User_CreateCustomAuthAccountRoleOneMutationVariables>;

/**
 * __useUser_CreateCustomAuthAccountRoleOneMutation__
 *
 * To run a mutation, you first call `useUser_CreateCustomAuthAccountRoleOneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUser_CreateCustomAuthAccountRoleOneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userCreateCustomAuthAccountRoleOneMutation, { data, loading, error }] = useUser_CreateCustomAuthAccountRoleOneMutation({
 *   variables: {
 *      insert_auth_account_roles_one: // value for 'insert_auth_account_roles_one'
 *   },
 * });
 */
export function useUser_CreateCustomAuthAccountRoleOneMutation(baseOptions?: Apollo.MutationHookOptions<User_CreateCustomAuthAccountRoleOneMutation, User_CreateCustomAuthAccountRoleOneMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<User_CreateCustomAuthAccountRoleOneMutation, User_CreateCustomAuthAccountRoleOneMutationVariables>(User_CreateCustomAuthAccountRoleOneDocument, options);
      }
export type User_CreateCustomAuthAccountRoleOneMutationHookResult = ReturnType<typeof useUser_CreateCustomAuthAccountRoleOneMutation>;
export type User_CreateCustomAuthAccountRoleOneMutationResult = Apollo.MutationResult<User_CreateCustomAuthAccountRoleOneMutation>;
export type User_CreateCustomAuthAccountRoleOneMutationOptions = Apollo.BaseMutationOptions<User_CreateCustomAuthAccountRoleOneMutation, User_CreateCustomAuthAccountRoleOneMutationVariables>;
export const User_CreateOneUserFcmTokenDocument = gql`
    mutation User_CreateOneUserFcmToken($insert_users_fcm_token: users_fcm_token_insert_input!) {
  insert_users_fcm_token_one(object: $insert_users_fcm_token) {
    id
    fcm_token
  }
}
    `;
export type User_CreateOneUserFcmTokenMutationFn = Apollo.MutationFunction<User_CreateOneUserFcmTokenMutation, User_CreateOneUserFcmTokenMutationVariables>;

/**
 * __useUser_CreateOneUserFcmTokenMutation__
 *
 * To run a mutation, you first call `useUser_CreateOneUserFcmTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUser_CreateOneUserFcmTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userCreateOneUserFcmTokenMutation, { data, loading, error }] = useUser_CreateOneUserFcmTokenMutation({
 *   variables: {
 *      insert_users_fcm_token: // value for 'insert_users_fcm_token'
 *   },
 * });
 */
export function useUser_CreateOneUserFcmTokenMutation(baseOptions?: Apollo.MutationHookOptions<User_CreateOneUserFcmTokenMutation, User_CreateOneUserFcmTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<User_CreateOneUserFcmTokenMutation, User_CreateOneUserFcmTokenMutationVariables>(User_CreateOneUserFcmTokenDocument, options);
      }
export type User_CreateOneUserFcmTokenMutationHookResult = ReturnType<typeof useUser_CreateOneUserFcmTokenMutation>;
export type User_CreateOneUserFcmTokenMutationResult = Apollo.MutationResult<User_CreateOneUserFcmTokenMutation>;
export type User_CreateOneUserFcmTokenMutationOptions = Apollo.BaseMutationOptions<User_CreateOneUserFcmTokenMutation, User_CreateOneUserFcmTokenMutationVariables>;
export const User_DeleteFcmTokenByUserIdDocument = gql`
    mutation User_DeleteFcmTokenByUserId($fcm_token: String, $user_id: uuid!) {
  delete_users_fcm_token(
    where: {fcm_token: {_eq: $fcm_token}, user_id: {_eq: $user_id}}
  ) {
    affected_rows
  }
}
    `;
export type User_DeleteFcmTokenByUserIdMutationFn = Apollo.MutationFunction<User_DeleteFcmTokenByUserIdMutation, User_DeleteFcmTokenByUserIdMutationVariables>;

/**
 * __useUser_DeleteFcmTokenByUserIdMutation__
 *
 * To run a mutation, you first call `useUser_DeleteFcmTokenByUserIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUser_DeleteFcmTokenByUserIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userDeleteFcmTokenByUserIdMutation, { data, loading, error }] = useUser_DeleteFcmTokenByUserIdMutation({
 *   variables: {
 *      fcm_token: // value for 'fcm_token'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useUser_DeleteFcmTokenByUserIdMutation(baseOptions?: Apollo.MutationHookOptions<User_DeleteFcmTokenByUserIdMutation, User_DeleteFcmTokenByUserIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<User_DeleteFcmTokenByUserIdMutation, User_DeleteFcmTokenByUserIdMutationVariables>(User_DeleteFcmTokenByUserIdDocument, options);
      }
export type User_DeleteFcmTokenByUserIdMutationHookResult = ReturnType<typeof useUser_DeleteFcmTokenByUserIdMutation>;
export type User_DeleteFcmTokenByUserIdMutationResult = Apollo.MutationResult<User_DeleteFcmTokenByUserIdMutation>;
export type User_DeleteFcmTokenByUserIdMutationOptions = Apollo.BaseMutationOptions<User_DeleteFcmTokenByUserIdMutation, User_DeleteFcmTokenByUserIdMutationVariables>;
export const User_UpdateUserRoleStoreByUserIdDocument = gql`
    mutation User_UpdateUserRoleStoreByUserId($user_id: uuid!, $update_auth_accounts: auth_accounts_set_input!, $update_user: users_set_input!, $account_id: uuid!, $update_auth_account_roles: auth_account_roles_set_input!) {
  update_auth_accounts(
    where: {user_id: {_eq: $user_id}}
    _set: $update_auth_accounts
  ) {
    affected_rows
  }
  update_users_by_pk(pk_columns: {id: $user_id}, _set: $update_user) {
    id
    display_name
  }
  update_auth_account_roles(
    where: {is_custom: {_eq: true}, account_id: {_eq: $account_id}}
    _set: $update_auth_account_roles
  ) {
    affected_rows
    returning {
      role
      is_custom
      id
    }
  }
}
    `;
export type User_UpdateUserRoleStoreByUserIdMutationFn = Apollo.MutationFunction<User_UpdateUserRoleStoreByUserIdMutation, User_UpdateUserRoleStoreByUserIdMutationVariables>;

/**
 * __useUser_UpdateUserRoleStoreByUserIdMutation__
 *
 * To run a mutation, you first call `useUser_UpdateUserRoleStoreByUserIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUser_UpdateUserRoleStoreByUserIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userUpdateUserRoleStoreByUserIdMutation, { data, loading, error }] = useUser_UpdateUserRoleStoreByUserIdMutation({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      update_auth_accounts: // value for 'update_auth_accounts'
 *      update_user: // value for 'update_user'
 *      account_id: // value for 'account_id'
 *      update_auth_account_roles: // value for 'update_auth_account_roles'
 *   },
 * });
 */
export function useUser_UpdateUserRoleStoreByUserIdMutation(baseOptions?: Apollo.MutationHookOptions<User_UpdateUserRoleStoreByUserIdMutation, User_UpdateUserRoleStoreByUserIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<User_UpdateUserRoleStoreByUserIdMutation, User_UpdateUserRoleStoreByUserIdMutationVariables>(User_UpdateUserRoleStoreByUserIdDocument, options);
      }
export type User_UpdateUserRoleStoreByUserIdMutationHookResult = ReturnType<typeof useUser_UpdateUserRoleStoreByUserIdMutation>;
export type User_UpdateUserRoleStoreByUserIdMutationResult = Apollo.MutationResult<User_UpdateUserRoleStoreByUserIdMutation>;
export type User_UpdateUserRoleStoreByUserIdMutationOptions = Apollo.BaseMutationOptions<User_UpdateUserRoleStoreByUserIdMutation, User_UpdateUserRoleStoreByUserIdMutationVariables>;
export const User_GetAllUserDocument = gql`
    query User_GetAllUser {
  users {
    id
    display_name
    avatar_url
    account {
      default_role
      email
      id
    }
    store {
      id
      name
    }
  }
}
    `;

/**
 * __useUser_GetAllUserQuery__
 *
 * To run a query within a React component, call `useUser_GetAllUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUser_GetAllUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUser_GetAllUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUser_GetAllUserQuery(baseOptions?: Apollo.QueryHookOptions<User_GetAllUserQuery, User_GetAllUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<User_GetAllUserQuery, User_GetAllUserQueryVariables>(User_GetAllUserDocument, options);
      }
export function useUser_GetAllUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<User_GetAllUserQuery, User_GetAllUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<User_GetAllUserQuery, User_GetAllUserQueryVariables>(User_GetAllUserDocument, options);
        }
export type User_GetAllUserQueryHookResult = ReturnType<typeof useUser_GetAllUserQuery>;
export type User_GetAllUserLazyQueryHookResult = ReturnType<typeof useUser_GetAllUserLazyQuery>;
export type User_GetAllUserQueryResult = Apollo.QueryResult<User_GetAllUserQuery, User_GetAllUserQueryVariables>;
export const User_GetAllUserFcmTokensByIdDocument = gql`
    query User_GetAllUserFcmTokensById($user_id: uuid!) {
  users_fcm_token(where: {user_id: {_eq: $user_id}}) {
    id
    user_id
    fcm_token
  }
}
    `;

/**
 * __useUser_GetAllUserFcmTokensByIdQuery__
 *
 * To run a query within a React component, call `useUser_GetAllUserFcmTokensByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useUser_GetAllUserFcmTokensByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUser_GetAllUserFcmTokensByIdQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useUser_GetAllUserFcmTokensByIdQuery(baseOptions: Apollo.QueryHookOptions<User_GetAllUserFcmTokensByIdQuery, User_GetAllUserFcmTokensByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<User_GetAllUserFcmTokensByIdQuery, User_GetAllUserFcmTokensByIdQueryVariables>(User_GetAllUserFcmTokensByIdDocument, options);
      }
export function useUser_GetAllUserFcmTokensByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<User_GetAllUserFcmTokensByIdQuery, User_GetAllUserFcmTokensByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<User_GetAllUserFcmTokensByIdQuery, User_GetAllUserFcmTokensByIdQueryVariables>(User_GetAllUserFcmTokensByIdDocument, options);
        }
export type User_GetAllUserFcmTokensByIdQueryHookResult = ReturnType<typeof useUser_GetAllUserFcmTokensByIdQuery>;
export type User_GetAllUserFcmTokensByIdLazyQueryHookResult = ReturnType<typeof useUser_GetAllUserFcmTokensByIdLazyQuery>;
export type User_GetAllUserFcmTokensByIdQueryResult = Apollo.QueryResult<User_GetAllUserFcmTokensByIdQuery, User_GetAllUserFcmTokensByIdQueryVariables>;
export const User_GetUserByIdDocument = gql`
    query User_GetUserById($id: uuid!) {
  users_by_pk(id: $id) {
    id
    display_name
    avatar_url
    store_id
    account {
      email
      default_role
      active
      account_roles {
        role
        is_custom
        id
        account_id
      }
    }
  }
}
    `;

/**
 * __useUser_GetUserByIdQuery__
 *
 * To run a query within a React component, call `useUser_GetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useUser_GetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUser_GetUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUser_GetUserByIdQuery(baseOptions: Apollo.QueryHookOptions<User_GetUserByIdQuery, User_GetUserByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<User_GetUserByIdQuery, User_GetUserByIdQueryVariables>(User_GetUserByIdDocument, options);
      }
export function useUser_GetUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<User_GetUserByIdQuery, User_GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<User_GetUserByIdQuery, User_GetUserByIdQueryVariables>(User_GetUserByIdDocument, options);
        }
export type User_GetUserByIdQueryHookResult = ReturnType<typeof useUser_GetUserByIdQuery>;
export type User_GetUserByIdLazyQueryHookResult = ReturnType<typeof useUser_GetUserByIdLazyQuery>;
export type User_GetUserByIdQueryResult = Apollo.QueryResult<User_GetUserByIdQuery, User_GetUserByIdQueryVariables>;