import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  citext: any;
  float8: any;
  jsonb: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type Cashier_CreateTransactionOutput = {
  __typename?: 'Cashier_CreateTransactionOutput';
  cash_change?: Maybe<Scalars['Int']>;
  cash_in_amount?: Maybe<Scalars['Int']>;
  errorMessage?: Maybe<Scalars['String']>;
  invoice_number?: Maybe<Scalars['String']>;
  isError: Scalars['Boolean'];
  payment_type?: Maybe<Scalars['String']>;
  store_id?: Maybe<Scalars['Int']>;
  total_transaction?: Maybe<Scalars['Int']>;
  transaction_status: TransactionStatusEnum;
};

export type CustomerInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  phone_number?: InputMaybe<Scalars['String']>;
};

export type Dashboard_GetDashboardDataOutput = {
  __typename?: 'Dashboard_GetDashboardDataOutput';
  firstTransactionDate: Scalars['String'];
  isCanBackwards: Scalars['Boolean'];
  isCanForwards: Scalars['Boolean'];
  itemSoldChart: NumberChartData;
  omsetChart: NumberChartData;
  operasionalChart: NumberChartData;
  paymentTypePercentage: Array<PaymentTypePercentage>;
  profitChart: NumberChartData;
  stores: Array<Scalars['Int']>;
  totalCustomer: Scalars['Int'];
  totalItemReturned: Scalars['Int'];
  totalItemSold: Scalars['Int'];
  totalOmset: Scalars['Int'];
  totalOperasional: Scalars['Int'];
  totalProfit: Scalars['Int'];
  totalReturnedTransaction: Scalars['Int'];
  totalSuccessTransaction: Scalars['Int'];
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type NumberChartData = {
  __typename?: 'NumberChartData';
  datasets?: Maybe<Array<NumberChartDatasets>>;
  labels: Array<Scalars['String']>;
};

export type NumberChartDatasets = {
  __typename?: 'NumberChartDatasets';
  data: Array<Scalars['Int']>;
  store_id: Scalars['Int'];
};

export type PaymentTypePercentage = {
  __typename?: 'PaymentTypePercentage';
  name: Scalars['String'];
  total_transaksi: Scalars['Int'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

export enum TimeMode {
  /** daily */
  Daily = 'daily',
  /** monthly */
  Monthly = 'monthly',
  /** weekly */
  Weekly = 'weekly'
}

export enum TotalTransactionCompare {
  /** minus */
  Minus = 'minus',
  /** plus */
  Plus = 'plus'
}

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

export enum TransactionReturnType {
  /** ReturSemua */
  ReturnAll = 'return_all',
  /** ReturSebagian */
  ReturnPart = 'return_part'
}

export enum TransactionStatusEnum {
  /** Gagal */
  Failed = 'failed',
  /** ReturSemua */
  ReturnAll = 'return_all',
  /** ReturSebagian */
  ReturnPart = 'return_part',
  /** Sukses */
  Success = 'success'
}

export type Transaction_ReturnTransactionOutput = {
  __typename?: 'Transaction_ReturnTransactionOutput';
  cash_change?: Maybe<Scalars['Int']>;
  cash_in_amount?: Maybe<Scalars['Int']>;
  errorMessage?: Maybe<Scalars['String']>;
  invoice_number?: Maybe<Scalars['String']>;
  isError: Scalars['Boolean'];
  return_type?: Maybe<TransactionReturnType>;
  total_transaction?: Maybe<Scalars['Int']>;
  total_transaction_compare?: Maybe<TotalTransactionCompare>;
};

export type Transaction_ReturnedItem = {
  capital_price: Scalars['Int'];
  discount: Scalars['Int'];
  returned_qty: Scalars['Int'];
  selling_price: Scalars['Int'];
  transaction_item_id: Scalars['String'];
};

export type Transaction_SendReceiptOutput = {
  __typename?: 'Transaction_SendReceiptOutput';
  created_at: Scalars['timestamptz'];
  email?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  isError?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
};

export type User_SignUpOutput = {
  __typename?: 'User_SignUpOutput';
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  isError: Scalars['Boolean'];
};

export type Whatsapp_GetAuthStatusOutput = {
  __typename?: 'Whatsapp_GetAuthStatusOutput';
  client_name?: Maybe<Scalars['String']>;
  client_phone_number?: Maybe<Scalars['String']>;
  client_platform?: Maybe<Scalars['String']>;
  client_state?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  isError: Scalars['Boolean'];
  is_authenticated: Scalars['Boolean'];
  is_client_ready: Scalars['Boolean'];
  is_qr_ready: Scalars['Boolean'];
  qrcode?: Maybe<Scalars['String']>;
  subscription_until?: Maybe<Scalars['String']>;
};

export type Whatsapp_SignOutOutput = {
  __typename?: 'Whatsapp_SignOutOutput';
  errorMessage?: Maybe<Scalars['String']>;
  is_success: Scalars['Boolean'];
};

/** columns and relationships of "active_fcm_tokens" */
export type Active_Fcm_Tokens = {
  __typename?: 'active_fcm_tokens';
  fcm_token: Scalars['String'];
};

/** aggregated selection of "active_fcm_tokens" */
export type Active_Fcm_Tokens_Aggregate = {
  __typename?: 'active_fcm_tokens_aggregate';
  aggregate?: Maybe<Active_Fcm_Tokens_Aggregate_Fields>;
  nodes: Array<Active_Fcm_Tokens>;
};

/** aggregate fields of "active_fcm_tokens" */
export type Active_Fcm_Tokens_Aggregate_Fields = {
  __typename?: 'active_fcm_tokens_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Active_Fcm_Tokens_Max_Fields>;
  min?: Maybe<Active_Fcm_Tokens_Min_Fields>;
};


/** aggregate fields of "active_fcm_tokens" */
export type Active_Fcm_Tokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Active_Fcm_Tokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "active_fcm_tokens". All fields are combined with a logical 'AND'. */
export type Active_Fcm_Tokens_Bool_Exp = {
  _and?: InputMaybe<Array<Active_Fcm_Tokens_Bool_Exp>>;
  _not?: InputMaybe<Active_Fcm_Tokens_Bool_Exp>;
  _or?: InputMaybe<Array<Active_Fcm_Tokens_Bool_Exp>>;
  fcm_token?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "active_fcm_tokens" */
export enum Active_Fcm_Tokens_Constraint {
  /** unique or primary key constraint */
  ActiveFcmTokensPkey = 'active_fcm_tokens_pkey'
}

/** input type for inserting data into table "active_fcm_tokens" */
export type Active_Fcm_Tokens_Insert_Input = {
  fcm_token?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Active_Fcm_Tokens_Max_Fields = {
  __typename?: 'active_fcm_tokens_max_fields';
  fcm_token?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Active_Fcm_Tokens_Min_Fields = {
  __typename?: 'active_fcm_tokens_min_fields';
  fcm_token?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "active_fcm_tokens" */
export type Active_Fcm_Tokens_Mutation_Response = {
  __typename?: 'active_fcm_tokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Active_Fcm_Tokens>;
};

/** on_conflict condition type for table "active_fcm_tokens" */
export type Active_Fcm_Tokens_On_Conflict = {
  constraint: Active_Fcm_Tokens_Constraint;
  update_columns?: Array<Active_Fcm_Tokens_Update_Column>;
  where?: InputMaybe<Active_Fcm_Tokens_Bool_Exp>;
};

/** Ordering options when selecting data from "active_fcm_tokens". */
export type Active_Fcm_Tokens_Order_By = {
  fcm_token?: InputMaybe<Order_By>;
};

/** primary key columns input for table: active_fcm_tokens */
export type Active_Fcm_Tokens_Pk_Columns_Input = {
  fcm_token: Scalars['String'];
};

/** select columns of table "active_fcm_tokens" */
export enum Active_Fcm_Tokens_Select_Column {
  /** column name */
  FcmToken = 'fcm_token'
}

/** input type for updating data in table "active_fcm_tokens" */
export type Active_Fcm_Tokens_Set_Input = {
  fcm_token?: InputMaybe<Scalars['String']>;
};

/** update columns of table "active_fcm_tokens" */
export enum Active_Fcm_Tokens_Update_Column {
  /** column name */
  FcmToken = 'fcm_token'
}

/** columns and relationships of "attendance" */
export type Attendance = {
  __typename?: 'attendance';
  attendance_type: Attendance_Type_Enum_Enum;
  /** An object relationship */
  attendance_type_enum: Attendance_Type_Enum;
  created_at: Scalars['timestamptz'];
  id: Scalars['bigint'];
  photo_file_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "attendance" */
export type Attendance_Aggregate = {
  __typename?: 'attendance_aggregate';
  aggregate?: Maybe<Attendance_Aggregate_Fields>;
  nodes: Array<Attendance>;
};

/** aggregate fields of "attendance" */
export type Attendance_Aggregate_Fields = {
  __typename?: 'attendance_aggregate_fields';
  avg?: Maybe<Attendance_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Attendance_Max_Fields>;
  min?: Maybe<Attendance_Min_Fields>;
  stddev?: Maybe<Attendance_Stddev_Fields>;
  stddev_pop?: Maybe<Attendance_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Attendance_Stddev_Samp_Fields>;
  sum?: Maybe<Attendance_Sum_Fields>;
  var_pop?: Maybe<Attendance_Var_Pop_Fields>;
  var_samp?: Maybe<Attendance_Var_Samp_Fields>;
  variance?: Maybe<Attendance_Variance_Fields>;
};


/** aggregate fields of "attendance" */
export type Attendance_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Attendance_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "attendance" */
export type Attendance_Aggregate_Order_By = {
  avg?: InputMaybe<Attendance_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Attendance_Max_Order_By>;
  min?: InputMaybe<Attendance_Min_Order_By>;
  stddev?: InputMaybe<Attendance_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Attendance_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Attendance_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Attendance_Sum_Order_By>;
  var_pop?: InputMaybe<Attendance_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Attendance_Var_Samp_Order_By>;
  variance?: InputMaybe<Attendance_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "attendance" */
export type Attendance_Arr_Rel_Insert_Input = {
  data: Array<Attendance_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Attendance_On_Conflict>;
};

/** aggregate avg on columns */
export type Attendance_Avg_Fields = {
  __typename?: 'attendance_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "attendance" */
export type Attendance_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "attendance". All fields are combined with a logical 'AND'. */
export type Attendance_Bool_Exp = {
  _and?: InputMaybe<Array<Attendance_Bool_Exp>>;
  _not?: InputMaybe<Attendance_Bool_Exp>;
  _or?: InputMaybe<Array<Attendance_Bool_Exp>>;
  attendance_type?: InputMaybe<Attendance_Type_Enum_Enum_Comparison_Exp>;
  attendance_type_enum?: InputMaybe<Attendance_Type_Enum_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  photo_file_id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "attendance" */
export enum Attendance_Constraint {
  /** unique or primary key constraint */
  AttendancePkey = 'attendance_pkey'
}

/** input type for incrementing numeric columns in table "attendance" */
export type Attendance_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "attendance" */
export type Attendance_Insert_Input = {
  attendance_type?: InputMaybe<Attendance_Type_Enum_Enum>;
  attendance_type_enum?: InputMaybe<Attendance_Type_Enum_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  photo_file_id?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Attendance_Max_Fields = {
  __typename?: 'attendance_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  photo_file_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "attendance" */
export type Attendance_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  photo_file_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Attendance_Min_Fields = {
  __typename?: 'attendance_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  photo_file_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "attendance" */
export type Attendance_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  photo_file_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "attendance" */
export type Attendance_Mutation_Response = {
  __typename?: 'attendance_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Attendance>;
};

/** on_conflict condition type for table "attendance" */
export type Attendance_On_Conflict = {
  constraint: Attendance_Constraint;
  update_columns?: Array<Attendance_Update_Column>;
  where?: InputMaybe<Attendance_Bool_Exp>;
};

/** Ordering options when selecting data from "attendance". */
export type Attendance_Order_By = {
  attendance_type?: InputMaybe<Order_By>;
  attendance_type_enum?: InputMaybe<Attendance_Type_Enum_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  photo_file_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: attendance */
export type Attendance_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "attendance" */
export enum Attendance_Select_Column {
  /** column name */
  AttendanceType = 'attendance_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PhotoFileId = 'photo_file_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "attendance" */
export type Attendance_Set_Input = {
  attendance_type?: InputMaybe<Attendance_Type_Enum_Enum>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  photo_file_id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Attendance_Stddev_Fields = {
  __typename?: 'attendance_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "attendance" */
export type Attendance_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Attendance_Stddev_Pop_Fields = {
  __typename?: 'attendance_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "attendance" */
export type Attendance_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Attendance_Stddev_Samp_Fields = {
  __typename?: 'attendance_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "attendance" */
export type Attendance_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Attendance_Sum_Fields = {
  __typename?: 'attendance_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "attendance" */
export type Attendance_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "attendance_type_enum" */
export type Attendance_Type_Enum = {
  __typename?: 'attendance_type_enum';
  attendance_type: Scalars['String'];
  title: Scalars['String'];
};

/** aggregated selection of "attendance_type_enum" */
export type Attendance_Type_Enum_Aggregate = {
  __typename?: 'attendance_type_enum_aggregate';
  aggregate?: Maybe<Attendance_Type_Enum_Aggregate_Fields>;
  nodes: Array<Attendance_Type_Enum>;
};

/** aggregate fields of "attendance_type_enum" */
export type Attendance_Type_Enum_Aggregate_Fields = {
  __typename?: 'attendance_type_enum_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Attendance_Type_Enum_Max_Fields>;
  min?: Maybe<Attendance_Type_Enum_Min_Fields>;
};


/** aggregate fields of "attendance_type_enum" */
export type Attendance_Type_Enum_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Attendance_Type_Enum_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "attendance_type_enum". All fields are combined with a logical 'AND'. */
export type Attendance_Type_Enum_Bool_Exp = {
  _and?: InputMaybe<Array<Attendance_Type_Enum_Bool_Exp>>;
  _not?: InputMaybe<Attendance_Type_Enum_Bool_Exp>;
  _or?: InputMaybe<Array<Attendance_Type_Enum_Bool_Exp>>;
  attendance_type?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "attendance_type_enum" */
export enum Attendance_Type_Enum_Constraint {
  /** unique or primary key constraint */
  AttendanceTypeEnumPkey = 'attendance_type_enum_pkey'
}

export enum Attendance_Type_Enum_Enum {
  /** Masuk */
  Enter = 'enter',
  /** Pulang */
  Leave = 'leave'
}

/** Boolean expression to compare columns of type "attendance_type_enum_enum". All fields are combined with logical 'AND'. */
export type Attendance_Type_Enum_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Attendance_Type_Enum_Enum>;
  _in?: InputMaybe<Array<Attendance_Type_Enum_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Attendance_Type_Enum_Enum>;
  _nin?: InputMaybe<Array<Attendance_Type_Enum_Enum>>;
};

/** input type for inserting data into table "attendance_type_enum" */
export type Attendance_Type_Enum_Insert_Input = {
  attendance_type?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Attendance_Type_Enum_Max_Fields = {
  __typename?: 'attendance_type_enum_max_fields';
  attendance_type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Attendance_Type_Enum_Min_Fields = {
  __typename?: 'attendance_type_enum_min_fields';
  attendance_type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "attendance_type_enum" */
export type Attendance_Type_Enum_Mutation_Response = {
  __typename?: 'attendance_type_enum_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Attendance_Type_Enum>;
};

/** input type for inserting object relation for remote table "attendance_type_enum" */
export type Attendance_Type_Enum_Obj_Rel_Insert_Input = {
  data: Attendance_Type_Enum_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Attendance_Type_Enum_On_Conflict>;
};

/** on_conflict condition type for table "attendance_type_enum" */
export type Attendance_Type_Enum_On_Conflict = {
  constraint: Attendance_Type_Enum_Constraint;
  update_columns?: Array<Attendance_Type_Enum_Update_Column>;
  where?: InputMaybe<Attendance_Type_Enum_Bool_Exp>;
};

/** Ordering options when selecting data from "attendance_type_enum". */
export type Attendance_Type_Enum_Order_By = {
  attendance_type?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: attendance_type_enum */
export type Attendance_Type_Enum_Pk_Columns_Input = {
  attendance_type: Scalars['String'];
};

/** select columns of table "attendance_type_enum" */
export enum Attendance_Type_Enum_Select_Column {
  /** column name */
  AttendanceType = 'attendance_type',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "attendance_type_enum" */
export type Attendance_Type_Enum_Set_Input = {
  attendance_type?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** update columns of table "attendance_type_enum" */
export enum Attendance_Type_Enum_Update_Column {
  /** column name */
  AttendanceType = 'attendance_type',
  /** column name */
  Title = 'title'
}

/** update columns of table "attendance" */
export enum Attendance_Update_Column {
  /** column name */
  AttendanceType = 'attendance_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PhotoFileId = 'photo_file_id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Attendance_Var_Pop_Fields = {
  __typename?: 'attendance_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "attendance" */
export type Attendance_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Attendance_Var_Samp_Fields = {
  __typename?: 'attendance_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "attendance" */
export type Attendance_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Attendance_Variance_Fields = {
  __typename?: 'attendance_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "attendance" */
export type Attendance_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "auth.provider_requests" */
export type AuthProviderRequests = {
  __typename?: 'authProviderRequests';
  id: Scalars['uuid'];
  options?: Maybe<Scalars['jsonb']>;
};


/** columns and relationships of "auth.provider_requests" */
export type AuthProviderRequestsOptionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate = {
  __typename?: 'authProviderRequests_aggregate';
  aggregate?: Maybe<AuthProviderRequests_Aggregate_Fields>;
  nodes: Array<AuthProviderRequests>;
};

/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_Fields = {
  __typename?: 'authProviderRequests_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthProviderRequests_Max_Fields>;
  min?: Maybe<AuthProviderRequests_Min_Fields>;
};


/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Append_Input = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "auth.provider_requests". All fields are combined with a logical 'AND'. */
export type AuthProviderRequests_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  _not?: InputMaybe<AuthProviderRequests_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  options?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.provider_requests" */
export enum AuthProviderRequests_Constraint {
  /** unique or primary key constraint */
  ProviderRequestsPkey = 'provider_requests_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthProviderRequests_Delete_At_Path_Input = {
  options?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthProviderRequests_Delete_Elem_Input = {
  options?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthProviderRequests_Delete_Key_Input = {
  options?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.provider_requests" */
export type AuthProviderRequests_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type AuthProviderRequests_Max_Fields = {
  __typename?: 'authProviderRequests_max_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type AuthProviderRequests_Min_Fields = {
  __typename?: 'authProviderRequests_min_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "auth.provider_requests" */
export type AuthProviderRequests_Mutation_Response = {
  __typename?: 'authProviderRequests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviderRequests>;
};

/** on_conflict condition type for table "auth.provider_requests" */
export type AuthProviderRequests_On_Conflict = {
  constraint: AuthProviderRequests_Constraint;
  update_columns?: Array<AuthProviderRequests_Update_Column>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.provider_requests". */
export type AuthProviderRequests_Order_By = {
  id?: InputMaybe<Order_By>;
  options?: InputMaybe<Order_By>;
};

/** primary key columns input for table: authProviderRequests */
export type AuthProviderRequests_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Prepend_Input = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

/** input type for updating data in table "auth.provider_requests" */
export type AuthProviderRequests_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** update columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

/** columns and relationships of "auth.providers" */
export type AuthProviders = {
  __typename?: 'authProviders';
  id: Scalars['String'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
};


/** columns and relationships of "auth.providers" */
export type AuthProvidersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** columns and relationships of "auth.providers" */
export type AuthProvidersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.providers" */
export type AuthProviders_Aggregate = {
  __typename?: 'authProviders_aggregate';
  aggregate?: Maybe<AuthProviders_Aggregate_Fields>;
  nodes: Array<AuthProviders>;
};

/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_Fields = {
  __typename?: 'authProviders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthProviders_Max_Fields>;
  min?: Maybe<AuthProviders_Min_Fields>;
};


/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type AuthProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.providers" */
export enum AuthProviders_Constraint {
  /** unique or primary key constraint */
  ProvidersPkey = 'providers_pkey'
}

/** input type for inserting data into table "auth.providers" */
export type AuthProviders_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthProviders_Max_Fields = {
  __typename?: 'authProviders_max_fields';
  id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthProviders_Min_Fields = {
  __typename?: 'authProviders_min_fields';
  id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.providers" */
export type AuthProviders_Mutation_Response = {
  __typename?: 'authProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviders>;
};

/** input type for inserting object relation for remote table "auth.providers" */
export type AuthProviders_Obj_Rel_Insert_Input = {
  data: AuthProviders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};

/** on_conflict condition type for table "auth.providers" */
export type AuthProviders_On_Conflict = {
  constraint: AuthProviders_Constraint;
  update_columns?: Array<AuthProviders_Update_Column>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.providers". */
export type AuthProviders_Order_By = {
  id?: InputMaybe<Order_By>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: authProviders */
export type AuthProviders_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "auth.providers" */
export enum AuthProviders_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "auth.providers" */
export type AuthProviders_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.providers" */
export enum AuthProviders_Update_Column {
  /** column name */
  Id = 'id'
}

/** columns and relationships of "auth.refresh_tokens" */
export type AuthRefreshTokens = {
  __typename?: 'authRefreshTokens';
  createdAt: Scalars['timestamptz'];
  expiresAt: Scalars['timestamptz'];
  refreshToken: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate = {
  __typename?: 'authRefreshTokens_aggregate';
  aggregate?: Maybe<AuthRefreshTokens_Aggregate_Fields>;
  nodes: Array<AuthRefreshTokens>;
};

/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Fields = {
  __typename?: 'authRefreshTokens_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthRefreshTokens_Max_Fields>;
  min?: Maybe<AuthRefreshTokens_Min_Fields>;
};


/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthRefreshTokens_Max_Order_By>;
  min?: InputMaybe<AuthRefreshTokens_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type AuthRefreshTokens_Arr_Rel_Insert_Input = {
  data: Array<AuthRefreshTokens_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokens_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  _not?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  expiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  refreshToken?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Constraint {
  /** unique or primary key constraint */
  RefreshTokensPkey = 'refresh_tokens_pkey'
}

/** input type for inserting data into table "auth.refresh_tokens" */
export type AuthRefreshTokens_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  refreshToken?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthRefreshTokens_Max_Fields = {
  __typename?: 'authRefreshTokens_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  refreshToken?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthRefreshTokens_Min_Fields = {
  __typename?: 'authRefreshTokens_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  refreshToken?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type AuthRefreshTokens_Mutation_Response = {
  __typename?: 'authRefreshTokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokens>;
};

/** on_conflict condition type for table "auth.refresh_tokens" */
export type AuthRefreshTokens_On_Conflict = {
  constraint: AuthRefreshTokens_Constraint;
  update_columns?: Array<AuthRefreshTokens_Update_Column>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type AuthRefreshTokens_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: authRefreshTokens */
export type AuthRefreshTokens_Pk_Columns_Input = {
  refreshToken: Scalars['uuid'];
};

/** select columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.refresh_tokens" */
export type AuthRefreshTokens_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  refreshToken?: InputMaybe<Scalars['uuid']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UserId = 'userId'
}

/** columns and relationships of "auth.roles" */
export type AuthRoles = {
  __typename?: 'authRoles';
  role: Scalars['String'];
  /** An array relationship */
  userRoles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  userRoles_aggregate: AuthUserRoles_Aggregate;
  /** An array relationship */
  usersByDefaultRole: Array<Users>;
  /** An aggregate relationship */
  usersByDefaultRole_aggregate: Users_Aggregate;
};


/** columns and relationships of "auth.roles" */
export type AuthRolesUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** columns and relationships of "auth.roles" */
export type AuthRolesUserRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** columns and relationships of "auth.roles" */
export type AuthRolesUsersByDefaultRoleArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** columns and relationships of "auth.roles" */
export type AuthRolesUsersByDefaultRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "auth.roles" */
export type AuthRoles_Aggregate = {
  __typename?: 'authRoles_aggregate';
  aggregate?: Maybe<AuthRoles_Aggregate_Fields>;
  nodes: Array<AuthRoles>;
};

/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_Fields = {
  __typename?: 'authRoles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthRoles_Max_Fields>;
  min?: Maybe<AuthRoles_Min_Fields>;
};


/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type AuthRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  role?: InputMaybe<String_Comparison_Exp>;
  userRoles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  usersByDefaultRole?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.roles" */
export enum AuthRoles_Constraint {
  /** unique or primary key constraint */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "auth.roles" */
export type AuthRoles_Insert_Input = {
  role?: InputMaybe<Scalars['String']>;
  userRoles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  usersByDefaultRole?: InputMaybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthRoles_Max_Fields = {
  __typename?: 'authRoles_max_fields';
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthRoles_Min_Fields = {
  __typename?: 'authRoles_min_fields';
  role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.roles" */
export type AuthRoles_Mutation_Response = {
  __typename?: 'authRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRoles>;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type AuthRoles_Obj_Rel_Insert_Input = {
  data: AuthRoles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};

/** on_conflict condition type for table "auth.roles" */
export type AuthRoles_On_Conflict = {
  constraint: AuthRoles_Constraint;
  update_columns?: Array<AuthRoles_Update_Column>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.roles". */
export type AuthRoles_Order_By = {
  role?: InputMaybe<Order_By>;
  userRoles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  usersByDefaultRole_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: authRoles */
export type AuthRoles_Pk_Columns_Input = {
  role: Scalars['String'];
};

/** select columns of table "auth.roles" */
export enum AuthRoles_Select_Column {
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "auth.roles" */
export type AuthRoles_Set_Input = {
  role?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.roles" */
export enum AuthRoles_Update_Column {
  /** column name */
  Role = 'role'
}

/** columns and relationships of "auth.user_providers" */
export type AuthUserProviders = {
  __typename?: 'authUserProviders';
  accessToken: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  provider: AuthProviders;
  providerId: Scalars['String'];
  providerUserId: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_providers" */
export type AuthUserProviders_Aggregate = {
  __typename?: 'authUserProviders_aggregate';
  aggregate?: Maybe<AuthUserProviders_Aggregate_Fields>;
  nodes: Array<AuthUserProviders>;
};

/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_Fields = {
  __typename?: 'authUserProviders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthUserProviders_Max_Fields>;
  min?: Maybe<AuthUserProviders_Min_Fields>;
};


/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_providers" */
export type AuthUserProviders_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserProviders_Max_Order_By>;
  min?: InputMaybe<AuthUserProviders_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_providers" */
export type AuthUserProviders_Arr_Rel_Insert_Input = {
  data: Array<AuthUserProviders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_providers". All fields are combined with a logical 'AND'. */
export type AuthUserProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthUserProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  accessToken?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  provider?: InputMaybe<AuthProviders_Bool_Exp>;
  providerId?: InputMaybe<String_Comparison_Exp>;
  providerUserId?: InputMaybe<String_Comparison_Exp>;
  refreshToken?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_providers" */
export enum AuthUserProviders_Constraint {
  /** unique or primary key constraint */
  UserProvidersPkey = 'user_providers_pkey',
  /** unique or primary key constraint */
  UserProvidersProviderIdProviderUserIdKey = 'user_providers_provider_id_provider_user_id_key',
  /** unique or primary key constraint */
  UserProvidersUserIdProviderIdKey = 'user_providers_user_id_provider_id_key'
}

/** input type for inserting data into table "auth.user_providers" */
export type AuthUserProviders_Insert_Input = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  provider?: InputMaybe<AuthProviders_Obj_Rel_Insert_Input>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserProviders_Max_Fields = {
  __typename?: 'authUserProviders_max_fields';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerId?: Maybe<Scalars['String']>;
  providerUserId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_providers" */
export type AuthUserProviders_Max_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserProviders_Min_Fields = {
  __typename?: 'authUserProviders_min_fields';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerId?: Maybe<Scalars['String']>;
  providerUserId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_providers" */
export type AuthUserProviders_Min_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_providers" */
export type AuthUserProviders_Mutation_Response = {
  __typename?: 'authUserProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserProviders>;
};

/** on_conflict condition type for table "auth.user_providers" */
export type AuthUserProviders_On_Conflict = {
  constraint: AuthUserProviders_Constraint;
  update_columns?: Array<AuthUserProviders_Update_Column>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_providers". */
export type AuthUserProviders_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  provider?: InputMaybe<AuthProviders_Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: authUserProviders */
export type AuthUserProviders_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_providers" */
export enum AuthUserProviders_Select_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_providers" */
export type AuthUserProviders_Set_Input = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_providers" */
export enum AuthUserProviders_Update_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** columns and relationships of "auth.user_roles" */
export type AuthUserRoles = {
  __typename?: 'authUserRoles';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  role: Scalars['String'];
  /** An object relationship */
  roleByRole: AuthRoles;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_roles" */
export type AuthUserRoles_Aggregate = {
  __typename?: 'authUserRoles_aggregate';
  aggregate?: Maybe<AuthUserRoles_Aggregate_Fields>;
  nodes: Array<AuthUserRoles>;
};

/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_Fields = {
  __typename?: 'authUserRoles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthUserRoles_Max_Fields>;
  min?: Maybe<AuthUserRoles_Min_Fields>;
};


/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_roles" */
export type AuthUserRoles_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserRoles_Max_Order_By>;
  min?: InputMaybe<AuthUserRoles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_roles" */
export type AuthUserRoles_Arr_Rel_Insert_Input = {
  data: Array<AuthUserRoles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_roles". All fields are combined with a logical 'AND'. */
export type AuthUserRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthUserRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  roleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_roles" */
export enum AuthUserRoles_Constraint {
  /** unique or primary key constraint */
  UserRolesPkey = 'user_roles_pkey',
  /** unique or primary key constraint */
  UserRolesUserIdRoleKey = 'user_roles_user_id_role_key'
}

/** input type for inserting data into table "auth.user_roles" */
export type AuthUserRoles_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  roleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserRoles_Max_Fields = {
  __typename?: 'authUserRoles_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_roles" */
export type AuthUserRoles_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserRoles_Min_Fields = {
  __typename?: 'authUserRoles_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_roles" */
export type AuthUserRoles_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_roles" */
export type AuthUserRoles_Mutation_Response = {
  __typename?: 'authUserRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserRoles>;
};

/** on_conflict condition type for table "auth.user_roles" */
export type AuthUserRoles_On_Conflict = {
  constraint: AuthUserRoles_Constraint;
  update_columns?: Array<AuthUserRoles_Update_Column>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_roles". */
export type AuthUserRoles_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  roleByRole?: InputMaybe<AuthRoles_Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: authUserRoles */
export type AuthUserRoles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_roles" */
export enum AuthUserRoles_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_roles" */
export type AuthUserRoles_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_roles" */
export enum AuthUserRoles_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "storage.buckets" */
export type Buckets = {
  __typename?: 'buckets';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  downloadExpiration: Scalars['Int'];
  /** fetch data from the table: "storage.files" */
  files: Array<Files>;
  /** An aggregate relationship */
  files_aggregate: Files_Aggregate;
  id: Scalars['String'];
  maxUploadFileSize: Scalars['Int'];
  minUploadFileSize: Scalars['Int'];
  presignedUrlsEnabled: Scalars['Boolean'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "storage.buckets" */
export type BucketsFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


/** columns and relationships of "storage.buckets" */
export type BucketsFiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** aggregated selection of "storage.buckets" */
export type Buckets_Aggregate = {
  __typename?: 'buckets_aggregate';
  aggregate?: Maybe<Buckets_Aggregate_Fields>;
  nodes: Array<Buckets>;
};

/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_Fields = {
  __typename?: 'buckets_aggregate_fields';
  avg?: Maybe<Buckets_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Buckets_Max_Fields>;
  min?: Maybe<Buckets_Min_Fields>;
  stddev?: Maybe<Buckets_Stddev_Fields>;
  stddev_pop?: Maybe<Buckets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Buckets_Stddev_Samp_Fields>;
  sum?: Maybe<Buckets_Sum_Fields>;
  var_pop?: Maybe<Buckets_Var_Pop_Fields>;
  var_samp?: Maybe<Buckets_Var_Samp_Fields>;
  variance?: Maybe<Buckets_Variance_Fields>;
};


/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Buckets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Buckets_Avg_Fields = {
  __typename?: 'buckets_avg_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "storage.buckets". All fields are combined with a logical 'AND'. */
export type Buckets_Bool_Exp = {
  _and?: InputMaybe<Array<Buckets_Bool_Exp>>;
  _not?: InputMaybe<Buckets_Bool_Exp>;
  _or?: InputMaybe<Array<Buckets_Bool_Exp>>;
  cacheControl?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  downloadExpiration?: InputMaybe<Int_Comparison_Exp>;
  files?: InputMaybe<Files_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  maxUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
  minUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
  presignedUrlsEnabled?: InputMaybe<Boolean_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.buckets" */
export enum Buckets_Constraint {
  /** unique or primary key constraint */
  BucketsPkey = 'buckets_pkey'
}

/** input type for incrementing numeric columns in table "storage.buckets" */
export type Buckets_Inc_Input = {
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "storage.buckets" */
export type Buckets_Insert_Input = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  files?: InputMaybe<Files_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Buckets_Max_Fields = {
  __typename?: 'buckets_max_fields';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  downloadExpiration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Buckets_Min_Fields = {
  __typename?: 'buckets_min_fields';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  downloadExpiration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "storage.buckets" */
export type Buckets_Mutation_Response = {
  __typename?: 'buckets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Buckets>;
};

/** input type for inserting object relation for remote table "storage.buckets" */
export type Buckets_Obj_Rel_Insert_Input = {
  data: Buckets_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};

/** on_conflict condition type for table "storage.buckets" */
export type Buckets_On_Conflict = {
  constraint: Buckets_Constraint;
  update_columns?: Array<Buckets_Update_Column>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.buckets". */
export type Buckets_Order_By = {
  cacheControl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  downloadExpiration?: InputMaybe<Order_By>;
  files_aggregate?: InputMaybe<Files_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  maxUploadFileSize?: InputMaybe<Order_By>;
  minUploadFileSize?: InputMaybe<Order_By>;
  presignedUrlsEnabled?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: buckets */
export type Buckets_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "storage.buckets" */
export enum Buckets_Select_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "storage.buckets" */
export type Buckets_Set_Input = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Buckets_Stddev_Fields = {
  __typename?: 'buckets_stddev_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Buckets_Stddev_Pop_Fields = {
  __typename?: 'buckets_stddev_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Buckets_Stddev_Samp_Fields = {
  __typename?: 'buckets_stddev_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Buckets_Sum_Fields = {
  __typename?: 'buckets_sum_fields';
  downloadExpiration?: Maybe<Scalars['Int']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
};

/** update columns of table "storage.buckets" */
export enum Buckets_Update_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Buckets_Var_Pop_Fields = {
  __typename?: 'buckets_var_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Buckets_Var_Samp_Fields = {
  __typename?: 'buckets_var_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Buckets_Variance_Fields = {
  __typename?: 'buckets_variance_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['citext']>;
  _gt?: InputMaybe<Scalars['citext']>;
  _gte?: InputMaybe<Scalars['citext']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['citext']>;
  _in?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['citext']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['citext']>;
  _lt?: InputMaybe<Scalars['citext']>;
  _lte?: InputMaybe<Scalars['citext']>;
  _neq?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['citext']>;
  _nin?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['citext']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['citext']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['citext']>;
};

/** columns and relationships of "customers" */
export type Customers = {
  __typename?: 'customers';
  created_at: Scalars['timestamptz'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
  phone_number: Scalars['String'];
  /** An array relationship */
  transaction_receipts: Array<Transaction_Receipts>;
  /** An aggregate relationship */
  transaction_receipts_aggregate: Transaction_Receipts_Aggregate;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "customers" */
export type CustomersTransaction_ReceiptsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Receipts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Receipts_Order_By>>;
  where?: InputMaybe<Transaction_Receipts_Bool_Exp>;
};


/** columns and relationships of "customers" */
export type CustomersTransaction_Receipts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Receipts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Receipts_Order_By>>;
  where?: InputMaybe<Transaction_Receipts_Bool_Exp>;
};

/** aggregated selection of "customers" */
export type Customers_Aggregate = {
  __typename?: 'customers_aggregate';
  aggregate?: Maybe<Customers_Aggregate_Fields>;
  nodes: Array<Customers>;
};

/** aggregate fields of "customers" */
export type Customers_Aggregate_Fields = {
  __typename?: 'customers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Customers_Max_Fields>;
  min?: Maybe<Customers_Min_Fields>;
};


/** aggregate fields of "customers" */
export type Customers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Customers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "customers". All fields are combined with a logical 'AND'. */
export type Customers_Bool_Exp = {
  _and?: InputMaybe<Array<Customers_Bool_Exp>>;
  _not?: InputMaybe<Customers_Bool_Exp>;
  _or?: InputMaybe<Array<Customers_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  phone_number?: InputMaybe<String_Comparison_Exp>;
  transaction_receipts?: InputMaybe<Transaction_Receipts_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "customers" */
export enum Customers_Constraint {
  /** unique or primary key constraint */
  CustomersPhoneNumberKey = 'customers_phone_number_key',
  /** unique or primary key constraint */
  CustomersPkey = 'customers_pkey'
}

/** input type for inserting data into table "customers" */
export type Customers_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  phone_number?: InputMaybe<Scalars['String']>;
  transaction_receipts?: InputMaybe<Transaction_Receipts_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Customers_Max_Fields = {
  __typename?: 'customers_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Customers_Min_Fields = {
  __typename?: 'customers_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "customers" */
export type Customers_Mutation_Response = {
  __typename?: 'customers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Customers>;
};

/** input type for inserting object relation for remote table "customers" */
export type Customers_Obj_Rel_Insert_Input = {
  data: Customers_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};

/** on_conflict condition type for table "customers" */
export type Customers_On_Conflict = {
  constraint: Customers_Constraint;
  update_columns?: Array<Customers_Update_Column>;
  where?: InputMaybe<Customers_Bool_Exp>;
};

/** Ordering options when selecting data from "customers". */
export type Customers_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phone_number?: InputMaybe<Order_By>;
  transaction_receipts_aggregate?: InputMaybe<Transaction_Receipts_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: customers */
export type Customers_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "customers" */
export enum Customers_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "customers" */
export type Customers_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  phone_number?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "customers" */
export enum Customers_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "storage.files" */
export type Files = {
  __typename?: 'files';
  /** An object relationship */
  bucket: Buckets;
  bucketId: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  etag?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  isUploaded?: Maybe<Scalars['Boolean']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['timestamptz'];
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "storage.files" */
export type Files_Aggregate = {
  __typename?: 'files_aggregate';
  aggregate?: Maybe<Files_Aggregate_Fields>;
  nodes: Array<Files>;
};

/** aggregate fields of "storage.files" */
export type Files_Aggregate_Fields = {
  __typename?: 'files_aggregate_fields';
  avg?: Maybe<Files_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Files_Max_Fields>;
  min?: Maybe<Files_Min_Fields>;
  stddev?: Maybe<Files_Stddev_Fields>;
  stddev_pop?: Maybe<Files_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Files_Stddev_Samp_Fields>;
  sum?: Maybe<Files_Sum_Fields>;
  var_pop?: Maybe<Files_Var_Pop_Fields>;
  var_samp?: Maybe<Files_Var_Samp_Fields>;
  variance?: Maybe<Files_Variance_Fields>;
};


/** aggregate fields of "storage.files" */
export type Files_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "storage.files" */
export type Files_Aggregate_Order_By = {
  avg?: InputMaybe<Files_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Files_Max_Order_By>;
  min?: InputMaybe<Files_Min_Order_By>;
  stddev?: InputMaybe<Files_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Files_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Files_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Files_Sum_Order_By>;
  var_pop?: InputMaybe<Files_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Files_Var_Samp_Order_By>;
  variance?: InputMaybe<Files_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "storage.files" */
export type Files_Arr_Rel_Insert_Input = {
  data: Array<Files_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** aggregate avg on columns */
export type Files_Avg_Fields = {
  __typename?: 'files_avg_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "storage.files" */
export type Files_Avg_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "storage.files". All fields are combined with a logical 'AND'. */
export type Files_Bool_Exp = {
  _and?: InputMaybe<Array<Files_Bool_Exp>>;
  _not?: InputMaybe<Files_Bool_Exp>;
  _or?: InputMaybe<Array<Files_Bool_Exp>>;
  bucket?: InputMaybe<Buckets_Bool_Exp>;
  bucketId?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  etag?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isUploaded?: InputMaybe<Boolean_Comparison_Exp>;
  mimeType?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  size?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  uploadedByUserId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.files" */
export enum Files_Constraint {
  /** unique or primary key constraint */
  FilesPkey = 'files_pkey'
}

/** input type for incrementing numeric columns in table "storage.files" */
export type Files_Inc_Input = {
  size?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "storage.files" */
export type Files_Insert_Input = {
  bucket?: InputMaybe<Buckets_Obj_Rel_Insert_Input>;
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Files_Max_Fields = {
  __typename?: 'files_max_fields';
  bucketId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  etag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "storage.files" */
export type Files_Max_Order_By = {
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Files_Min_Fields = {
  __typename?: 'files_min_fields';
  bucketId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  etag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "storage.files" */
export type Files_Min_Order_By = {
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "storage.files" */
export type Files_Mutation_Response = {
  __typename?: 'files_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Files>;
};

/** on_conflict condition type for table "storage.files" */
export type Files_On_Conflict = {
  constraint: Files_Constraint;
  update_columns?: Array<Files_Update_Column>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.files". */
export type Files_Order_By = {
  bucket?: InputMaybe<Buckets_Order_By>;
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isUploaded?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: files */
export type Files_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "storage.files" */
export enum Files_Select_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

/** input type for updating data in table "storage.files" */
export type Files_Set_Input = {
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Files_Stddev_Fields = {
  __typename?: 'files_stddev_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "storage.files" */
export type Files_Stddev_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Files_Stddev_Pop_Fields = {
  __typename?: 'files_stddev_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "storage.files" */
export type Files_Stddev_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Files_Stddev_Samp_Fields = {
  __typename?: 'files_stddev_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "storage.files" */
export type Files_Stddev_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Files_Sum_Fields = {
  __typename?: 'files_sum_fields';
  size?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "storage.files" */
export type Files_Sum_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** update columns of table "storage.files" */
export enum Files_Update_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

/** aggregate var_pop on columns */
export type Files_Var_Pop_Fields = {
  __typename?: 'files_var_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "storage.files" */
export type Files_Var_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Files_Var_Samp_Fields = {
  __typename?: 'files_var_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "storage.files" */
export type Files_Var_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Files_Variance_Fields = {
  __typename?: 'files_variance_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "storage.files" */
export type Files_Variance_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']>;
  _gt?: InputMaybe<Scalars['float8']>;
  _gte?: InputMaybe<Scalars['float8']>;
  _in?: InputMaybe<Array<Scalars['float8']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['float8']>;
  _lte?: InputMaybe<Scalars['float8']>;
  _neq?: InputMaybe<Scalars['float8']>;
  _nin?: InputMaybe<Array<Scalars['float8']>>;
};

/** columns and relationships of "inventory_product_variants" */
export type Inventory_Product_Variants = {
  __typename?: 'inventory_product_variants';
  id: Scalars['uuid'];
  /** An object relationship */
  inventory_product: Inventory_Products;
  inventory_product_id: Scalars['uuid'];
  inventory_variant_metadata_id: Scalars['Int'];
  /** An object relationship */
  inventory_variants_metadata: Inventory_Variants_Metadata;
};

/** aggregated selection of "inventory_product_variants" */
export type Inventory_Product_Variants_Aggregate = {
  __typename?: 'inventory_product_variants_aggregate';
  aggregate?: Maybe<Inventory_Product_Variants_Aggregate_Fields>;
  nodes: Array<Inventory_Product_Variants>;
};

/** aggregate fields of "inventory_product_variants" */
export type Inventory_Product_Variants_Aggregate_Fields = {
  __typename?: 'inventory_product_variants_aggregate_fields';
  avg?: Maybe<Inventory_Product_Variants_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Inventory_Product_Variants_Max_Fields>;
  min?: Maybe<Inventory_Product_Variants_Min_Fields>;
  stddev?: Maybe<Inventory_Product_Variants_Stddev_Fields>;
  stddev_pop?: Maybe<Inventory_Product_Variants_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Inventory_Product_Variants_Stddev_Samp_Fields>;
  sum?: Maybe<Inventory_Product_Variants_Sum_Fields>;
  var_pop?: Maybe<Inventory_Product_Variants_Var_Pop_Fields>;
  var_samp?: Maybe<Inventory_Product_Variants_Var_Samp_Fields>;
  variance?: Maybe<Inventory_Product_Variants_Variance_Fields>;
};


/** aggregate fields of "inventory_product_variants" */
export type Inventory_Product_Variants_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Inventory_Product_Variants_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "inventory_product_variants" */
export type Inventory_Product_Variants_Aggregate_Order_By = {
  avg?: InputMaybe<Inventory_Product_Variants_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Inventory_Product_Variants_Max_Order_By>;
  min?: InputMaybe<Inventory_Product_Variants_Min_Order_By>;
  stddev?: InputMaybe<Inventory_Product_Variants_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Inventory_Product_Variants_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Inventory_Product_Variants_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Inventory_Product_Variants_Sum_Order_By>;
  var_pop?: InputMaybe<Inventory_Product_Variants_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Inventory_Product_Variants_Var_Samp_Order_By>;
  variance?: InputMaybe<Inventory_Product_Variants_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "inventory_product_variants" */
export type Inventory_Product_Variants_Arr_Rel_Insert_Input = {
  data: Array<Inventory_Product_Variants_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Inventory_Product_Variants_On_Conflict>;
};

/** aggregate avg on columns */
export type Inventory_Product_Variants_Avg_Fields = {
  __typename?: 'inventory_product_variants_avg_fields';
  inventory_variant_metadata_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "inventory_product_variants" */
export type Inventory_Product_Variants_Avg_Order_By = {
  inventory_variant_metadata_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "inventory_product_variants". All fields are combined with a logical 'AND'. */
export type Inventory_Product_Variants_Bool_Exp = {
  _and?: InputMaybe<Array<Inventory_Product_Variants_Bool_Exp>>;
  _not?: InputMaybe<Inventory_Product_Variants_Bool_Exp>;
  _or?: InputMaybe<Array<Inventory_Product_Variants_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  inventory_product?: InputMaybe<Inventory_Products_Bool_Exp>;
  inventory_product_id?: InputMaybe<Uuid_Comparison_Exp>;
  inventory_variant_metadata_id?: InputMaybe<Int_Comparison_Exp>;
  inventory_variants_metadata?: InputMaybe<Inventory_Variants_Metadata_Bool_Exp>;
};

/** unique or primary key constraints on table "inventory_product_variants" */
export enum Inventory_Product_Variants_Constraint {
  /** unique or primary key constraint */
  InventoryProductVariantPkey = 'inventory_product_variant_pkey'
}

/** input type for incrementing numeric columns in table "inventory_product_variants" */
export type Inventory_Product_Variants_Inc_Input = {
  inventory_variant_metadata_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "inventory_product_variants" */
export type Inventory_Product_Variants_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  inventory_product?: InputMaybe<Inventory_Products_Obj_Rel_Insert_Input>;
  inventory_product_id?: InputMaybe<Scalars['uuid']>;
  inventory_variant_metadata_id?: InputMaybe<Scalars['Int']>;
  inventory_variants_metadata?: InputMaybe<Inventory_Variants_Metadata_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Inventory_Product_Variants_Max_Fields = {
  __typename?: 'inventory_product_variants_max_fields';
  id?: Maybe<Scalars['uuid']>;
  inventory_product_id?: Maybe<Scalars['uuid']>;
  inventory_variant_metadata_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "inventory_product_variants" */
export type Inventory_Product_Variants_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  inventory_product_id?: InputMaybe<Order_By>;
  inventory_variant_metadata_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Inventory_Product_Variants_Min_Fields = {
  __typename?: 'inventory_product_variants_min_fields';
  id?: Maybe<Scalars['uuid']>;
  inventory_product_id?: Maybe<Scalars['uuid']>;
  inventory_variant_metadata_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "inventory_product_variants" */
export type Inventory_Product_Variants_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  inventory_product_id?: InputMaybe<Order_By>;
  inventory_variant_metadata_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "inventory_product_variants" */
export type Inventory_Product_Variants_Mutation_Response = {
  __typename?: 'inventory_product_variants_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Inventory_Product_Variants>;
};

/** on_conflict condition type for table "inventory_product_variants" */
export type Inventory_Product_Variants_On_Conflict = {
  constraint: Inventory_Product_Variants_Constraint;
  update_columns?: Array<Inventory_Product_Variants_Update_Column>;
  where?: InputMaybe<Inventory_Product_Variants_Bool_Exp>;
};

/** Ordering options when selecting data from "inventory_product_variants". */
export type Inventory_Product_Variants_Order_By = {
  id?: InputMaybe<Order_By>;
  inventory_product?: InputMaybe<Inventory_Products_Order_By>;
  inventory_product_id?: InputMaybe<Order_By>;
  inventory_variant_metadata_id?: InputMaybe<Order_By>;
  inventory_variants_metadata?: InputMaybe<Inventory_Variants_Metadata_Order_By>;
};

/** primary key columns input for table: inventory_product_variants */
export type Inventory_Product_Variants_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "inventory_product_variants" */
export enum Inventory_Product_Variants_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  InventoryProductId = 'inventory_product_id',
  /** column name */
  InventoryVariantMetadataId = 'inventory_variant_metadata_id'
}

/** input type for updating data in table "inventory_product_variants" */
export type Inventory_Product_Variants_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  inventory_product_id?: InputMaybe<Scalars['uuid']>;
  inventory_variant_metadata_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Inventory_Product_Variants_Stddev_Fields = {
  __typename?: 'inventory_product_variants_stddev_fields';
  inventory_variant_metadata_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "inventory_product_variants" */
export type Inventory_Product_Variants_Stddev_Order_By = {
  inventory_variant_metadata_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Inventory_Product_Variants_Stddev_Pop_Fields = {
  __typename?: 'inventory_product_variants_stddev_pop_fields';
  inventory_variant_metadata_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "inventory_product_variants" */
export type Inventory_Product_Variants_Stddev_Pop_Order_By = {
  inventory_variant_metadata_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Inventory_Product_Variants_Stddev_Samp_Fields = {
  __typename?: 'inventory_product_variants_stddev_samp_fields';
  inventory_variant_metadata_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "inventory_product_variants" */
export type Inventory_Product_Variants_Stddev_Samp_Order_By = {
  inventory_variant_metadata_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Inventory_Product_Variants_Sum_Fields = {
  __typename?: 'inventory_product_variants_sum_fields';
  inventory_variant_metadata_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "inventory_product_variants" */
export type Inventory_Product_Variants_Sum_Order_By = {
  inventory_variant_metadata_id?: InputMaybe<Order_By>;
};

/** update columns of table "inventory_product_variants" */
export enum Inventory_Product_Variants_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  InventoryProductId = 'inventory_product_id',
  /** column name */
  InventoryVariantMetadataId = 'inventory_variant_metadata_id'
}

/** aggregate var_pop on columns */
export type Inventory_Product_Variants_Var_Pop_Fields = {
  __typename?: 'inventory_product_variants_var_pop_fields';
  inventory_variant_metadata_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "inventory_product_variants" */
export type Inventory_Product_Variants_Var_Pop_Order_By = {
  inventory_variant_metadata_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Inventory_Product_Variants_Var_Samp_Fields = {
  __typename?: 'inventory_product_variants_var_samp_fields';
  inventory_variant_metadata_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "inventory_product_variants" */
export type Inventory_Product_Variants_Var_Samp_Order_By = {
  inventory_variant_metadata_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Inventory_Product_Variants_Variance_Fields = {
  __typename?: 'inventory_product_variants_variance_fields';
  inventory_variant_metadata_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "inventory_product_variants" */
export type Inventory_Product_Variants_Variance_Order_By = {
  inventory_variant_metadata_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "inventory_products" */
export type Inventory_Products = {
  __typename?: 'inventory_products';
  available_qty: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An array relationship */
  inventory_product_variants: Array<Inventory_Product_Variants>;
  /** An aggregate relationship */
  inventory_product_variants_aggregate: Inventory_Product_Variants_Aggregate;
  min_available_qty: Scalars['Int'];
  override_capital_price?: Maybe<Scalars['Int']>;
  override_discount?: Maybe<Scalars['Int']>;
  override_selling_price?: Maybe<Scalars['Int']>;
  /** An object relationship */
  product: Products;
  product_id: Scalars['uuid'];
  /** An object relationship */
  store: Stores;
  store_id: Scalars['Int'];
  /** fetch data from the table: "transaction_items" */
  transaction_items: Array<Transaction_Items>;
  /** An aggregate relationship */
  transaction_items_aggregate: Transaction_Items_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "inventory_products" */
export type Inventory_ProductsInventory_Product_VariantsArgs = {
  distinct_on?: InputMaybe<Array<Inventory_Product_Variants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Inventory_Product_Variants_Order_By>>;
  where?: InputMaybe<Inventory_Product_Variants_Bool_Exp>;
};


/** columns and relationships of "inventory_products" */
export type Inventory_ProductsInventory_Product_Variants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Inventory_Product_Variants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Inventory_Product_Variants_Order_By>>;
  where?: InputMaybe<Inventory_Product_Variants_Bool_Exp>;
};


/** columns and relationships of "inventory_products" */
export type Inventory_ProductsTransaction_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Items_Order_By>>;
  where?: InputMaybe<Transaction_Items_Bool_Exp>;
};


/** columns and relationships of "inventory_products" */
export type Inventory_ProductsTransaction_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Items_Order_By>>;
  where?: InputMaybe<Transaction_Items_Bool_Exp>;
};

/** aggregated selection of "inventory_products" */
export type Inventory_Products_Aggregate = {
  __typename?: 'inventory_products_aggregate';
  aggregate?: Maybe<Inventory_Products_Aggregate_Fields>;
  nodes: Array<Inventory_Products>;
};

/** aggregate fields of "inventory_products" */
export type Inventory_Products_Aggregate_Fields = {
  __typename?: 'inventory_products_aggregate_fields';
  avg?: Maybe<Inventory_Products_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Inventory_Products_Max_Fields>;
  min?: Maybe<Inventory_Products_Min_Fields>;
  stddev?: Maybe<Inventory_Products_Stddev_Fields>;
  stddev_pop?: Maybe<Inventory_Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Inventory_Products_Stddev_Samp_Fields>;
  sum?: Maybe<Inventory_Products_Sum_Fields>;
  var_pop?: Maybe<Inventory_Products_Var_Pop_Fields>;
  var_samp?: Maybe<Inventory_Products_Var_Samp_Fields>;
  variance?: Maybe<Inventory_Products_Variance_Fields>;
};


/** aggregate fields of "inventory_products" */
export type Inventory_Products_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Inventory_Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "inventory_products" */
export type Inventory_Products_Aggregate_Order_By = {
  avg?: InputMaybe<Inventory_Products_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Inventory_Products_Max_Order_By>;
  min?: InputMaybe<Inventory_Products_Min_Order_By>;
  stddev?: InputMaybe<Inventory_Products_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Inventory_Products_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Inventory_Products_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Inventory_Products_Sum_Order_By>;
  var_pop?: InputMaybe<Inventory_Products_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Inventory_Products_Var_Samp_Order_By>;
  variance?: InputMaybe<Inventory_Products_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "inventory_products" */
export type Inventory_Products_Arr_Rel_Insert_Input = {
  data: Array<Inventory_Products_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Inventory_Products_On_Conflict>;
};

/** aggregate avg on columns */
export type Inventory_Products_Avg_Fields = {
  __typename?: 'inventory_products_avg_fields';
  available_qty?: Maybe<Scalars['Float']>;
  min_available_qty?: Maybe<Scalars['Float']>;
  override_capital_price?: Maybe<Scalars['Float']>;
  override_discount?: Maybe<Scalars['Float']>;
  override_selling_price?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "inventory_products" */
export type Inventory_Products_Avg_Order_By = {
  available_qty?: InputMaybe<Order_By>;
  min_available_qty?: InputMaybe<Order_By>;
  override_capital_price?: InputMaybe<Order_By>;
  override_discount?: InputMaybe<Order_By>;
  override_selling_price?: InputMaybe<Order_By>;
  store_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "inventory_products". All fields are combined with a logical 'AND'. */
export type Inventory_Products_Bool_Exp = {
  _and?: InputMaybe<Array<Inventory_Products_Bool_Exp>>;
  _not?: InputMaybe<Inventory_Products_Bool_Exp>;
  _or?: InputMaybe<Array<Inventory_Products_Bool_Exp>>;
  available_qty?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  inventory_product_variants?: InputMaybe<Inventory_Product_Variants_Bool_Exp>;
  min_available_qty?: InputMaybe<Int_Comparison_Exp>;
  override_capital_price?: InputMaybe<Int_Comparison_Exp>;
  override_discount?: InputMaybe<Int_Comparison_Exp>;
  override_selling_price?: InputMaybe<Int_Comparison_Exp>;
  product?: InputMaybe<Products_Bool_Exp>;
  product_id?: InputMaybe<Uuid_Comparison_Exp>;
  store?: InputMaybe<Stores_Bool_Exp>;
  store_id?: InputMaybe<Int_Comparison_Exp>;
  transaction_items?: InputMaybe<Transaction_Items_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "inventory_products" */
export enum Inventory_Products_Constraint {
  /** unique or primary key constraint */
  InventoryProductsPkey = 'inventory_products_pkey'
}

/** input type for incrementing numeric columns in table "inventory_products" */
export type Inventory_Products_Inc_Input = {
  available_qty?: InputMaybe<Scalars['Int']>;
  min_available_qty?: InputMaybe<Scalars['Int']>;
  override_capital_price?: InputMaybe<Scalars['Int']>;
  override_discount?: InputMaybe<Scalars['Int']>;
  override_selling_price?: InputMaybe<Scalars['Int']>;
  store_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "inventory_products" */
export type Inventory_Products_Insert_Input = {
  available_qty?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  inventory_product_variants?: InputMaybe<Inventory_Product_Variants_Arr_Rel_Insert_Input>;
  min_available_qty?: InputMaybe<Scalars['Int']>;
  override_capital_price?: InputMaybe<Scalars['Int']>;
  override_discount?: InputMaybe<Scalars['Int']>;
  override_selling_price?: InputMaybe<Scalars['Int']>;
  product?: InputMaybe<Products_Obj_Rel_Insert_Input>;
  product_id?: InputMaybe<Scalars['uuid']>;
  store?: InputMaybe<Stores_Obj_Rel_Insert_Input>;
  store_id?: InputMaybe<Scalars['Int']>;
  transaction_items?: InputMaybe<Transaction_Items_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Inventory_Products_Max_Fields = {
  __typename?: 'inventory_products_max_fields';
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

/** order by max() on columns of table "inventory_products" */
export type Inventory_Products_Max_Order_By = {
  available_qty?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  min_available_qty?: InputMaybe<Order_By>;
  override_capital_price?: InputMaybe<Order_By>;
  override_discount?: InputMaybe<Order_By>;
  override_selling_price?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  store_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Inventory_Products_Min_Fields = {
  __typename?: 'inventory_products_min_fields';
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

/** order by min() on columns of table "inventory_products" */
export type Inventory_Products_Min_Order_By = {
  available_qty?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  min_available_qty?: InputMaybe<Order_By>;
  override_capital_price?: InputMaybe<Order_By>;
  override_discount?: InputMaybe<Order_By>;
  override_selling_price?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  store_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "inventory_products" */
export type Inventory_Products_Mutation_Response = {
  __typename?: 'inventory_products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Inventory_Products>;
};

/** input type for inserting object relation for remote table "inventory_products" */
export type Inventory_Products_Obj_Rel_Insert_Input = {
  data: Inventory_Products_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Inventory_Products_On_Conflict>;
};

/** on_conflict condition type for table "inventory_products" */
export type Inventory_Products_On_Conflict = {
  constraint: Inventory_Products_Constraint;
  update_columns?: Array<Inventory_Products_Update_Column>;
  where?: InputMaybe<Inventory_Products_Bool_Exp>;
};

/** Ordering options when selecting data from "inventory_products". */
export type Inventory_Products_Order_By = {
  available_qty?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inventory_product_variants_aggregate?: InputMaybe<Inventory_Product_Variants_Aggregate_Order_By>;
  min_available_qty?: InputMaybe<Order_By>;
  override_capital_price?: InputMaybe<Order_By>;
  override_discount?: InputMaybe<Order_By>;
  override_selling_price?: InputMaybe<Order_By>;
  product?: InputMaybe<Products_Order_By>;
  product_id?: InputMaybe<Order_By>;
  store?: InputMaybe<Stores_Order_By>;
  store_id?: InputMaybe<Order_By>;
  transaction_items_aggregate?: InputMaybe<Transaction_Items_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: inventory_products */
export type Inventory_Products_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "inventory_products" */
export enum Inventory_Products_Select_Column {
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

/** input type for updating data in table "inventory_products" */
export type Inventory_Products_Set_Input = {
  available_qty?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  min_available_qty?: InputMaybe<Scalars['Int']>;
  override_capital_price?: InputMaybe<Scalars['Int']>;
  override_discount?: InputMaybe<Scalars['Int']>;
  override_selling_price?: InputMaybe<Scalars['Int']>;
  product_id?: InputMaybe<Scalars['uuid']>;
  store_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Inventory_Products_Stddev_Fields = {
  __typename?: 'inventory_products_stddev_fields';
  available_qty?: Maybe<Scalars['Float']>;
  min_available_qty?: Maybe<Scalars['Float']>;
  override_capital_price?: Maybe<Scalars['Float']>;
  override_discount?: Maybe<Scalars['Float']>;
  override_selling_price?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "inventory_products" */
export type Inventory_Products_Stddev_Order_By = {
  available_qty?: InputMaybe<Order_By>;
  min_available_qty?: InputMaybe<Order_By>;
  override_capital_price?: InputMaybe<Order_By>;
  override_discount?: InputMaybe<Order_By>;
  override_selling_price?: InputMaybe<Order_By>;
  store_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Inventory_Products_Stddev_Pop_Fields = {
  __typename?: 'inventory_products_stddev_pop_fields';
  available_qty?: Maybe<Scalars['Float']>;
  min_available_qty?: Maybe<Scalars['Float']>;
  override_capital_price?: Maybe<Scalars['Float']>;
  override_discount?: Maybe<Scalars['Float']>;
  override_selling_price?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "inventory_products" */
export type Inventory_Products_Stddev_Pop_Order_By = {
  available_qty?: InputMaybe<Order_By>;
  min_available_qty?: InputMaybe<Order_By>;
  override_capital_price?: InputMaybe<Order_By>;
  override_discount?: InputMaybe<Order_By>;
  override_selling_price?: InputMaybe<Order_By>;
  store_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Inventory_Products_Stddev_Samp_Fields = {
  __typename?: 'inventory_products_stddev_samp_fields';
  available_qty?: Maybe<Scalars['Float']>;
  min_available_qty?: Maybe<Scalars['Float']>;
  override_capital_price?: Maybe<Scalars['Float']>;
  override_discount?: Maybe<Scalars['Float']>;
  override_selling_price?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "inventory_products" */
export type Inventory_Products_Stddev_Samp_Order_By = {
  available_qty?: InputMaybe<Order_By>;
  min_available_qty?: InputMaybe<Order_By>;
  override_capital_price?: InputMaybe<Order_By>;
  override_discount?: InputMaybe<Order_By>;
  override_selling_price?: InputMaybe<Order_By>;
  store_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Inventory_Products_Sum_Fields = {
  __typename?: 'inventory_products_sum_fields';
  available_qty?: Maybe<Scalars['Int']>;
  min_available_qty?: Maybe<Scalars['Int']>;
  override_capital_price?: Maybe<Scalars['Int']>;
  override_discount?: Maybe<Scalars['Int']>;
  override_selling_price?: Maybe<Scalars['Int']>;
  store_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "inventory_products" */
export type Inventory_Products_Sum_Order_By = {
  available_qty?: InputMaybe<Order_By>;
  min_available_qty?: InputMaybe<Order_By>;
  override_capital_price?: InputMaybe<Order_By>;
  override_discount?: InputMaybe<Order_By>;
  override_selling_price?: InputMaybe<Order_By>;
  store_id?: InputMaybe<Order_By>;
};

/** update columns of table "inventory_products" */
export enum Inventory_Products_Update_Column {
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
export type Inventory_Products_Var_Pop_Fields = {
  __typename?: 'inventory_products_var_pop_fields';
  available_qty?: Maybe<Scalars['Float']>;
  min_available_qty?: Maybe<Scalars['Float']>;
  override_capital_price?: Maybe<Scalars['Float']>;
  override_discount?: Maybe<Scalars['Float']>;
  override_selling_price?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "inventory_products" */
export type Inventory_Products_Var_Pop_Order_By = {
  available_qty?: InputMaybe<Order_By>;
  min_available_qty?: InputMaybe<Order_By>;
  override_capital_price?: InputMaybe<Order_By>;
  override_discount?: InputMaybe<Order_By>;
  override_selling_price?: InputMaybe<Order_By>;
  store_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Inventory_Products_Var_Samp_Fields = {
  __typename?: 'inventory_products_var_samp_fields';
  available_qty?: Maybe<Scalars['Float']>;
  min_available_qty?: Maybe<Scalars['Float']>;
  override_capital_price?: Maybe<Scalars['Float']>;
  override_discount?: Maybe<Scalars['Float']>;
  override_selling_price?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "inventory_products" */
export type Inventory_Products_Var_Samp_Order_By = {
  available_qty?: InputMaybe<Order_By>;
  min_available_qty?: InputMaybe<Order_By>;
  override_capital_price?: InputMaybe<Order_By>;
  override_discount?: InputMaybe<Order_By>;
  override_selling_price?: InputMaybe<Order_By>;
  store_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Inventory_Products_Variance_Fields = {
  __typename?: 'inventory_products_variance_fields';
  available_qty?: Maybe<Scalars['Float']>;
  min_available_qty?: Maybe<Scalars['Float']>;
  override_capital_price?: Maybe<Scalars['Float']>;
  override_discount?: Maybe<Scalars['Float']>;
  override_selling_price?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "inventory_products" */
export type Inventory_Products_Variance_Order_By = {
  available_qty?: InputMaybe<Order_By>;
  min_available_qty?: InputMaybe<Order_By>;
  override_capital_price?: InputMaybe<Order_By>;
  override_discount?: InputMaybe<Order_By>;
  override_selling_price?: InputMaybe<Order_By>;
  store_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "inventory_variants_metadata" */
export type Inventory_Variants_Metadata = {
  __typename?: 'inventory_variants_metadata';
  id: Scalars['Int'];
  /** An array relationship */
  inventory_product_variants: Array<Inventory_Product_Variants>;
  /** An aggregate relationship */
  inventory_product_variants_aggregate: Inventory_Product_Variants_Aggregate;
  variant_title: Scalars['String'];
  variant_value: Scalars['String'];
};


/** columns and relationships of "inventory_variants_metadata" */
export type Inventory_Variants_MetadataInventory_Product_VariantsArgs = {
  distinct_on?: InputMaybe<Array<Inventory_Product_Variants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Inventory_Product_Variants_Order_By>>;
  where?: InputMaybe<Inventory_Product_Variants_Bool_Exp>;
};


/** columns and relationships of "inventory_variants_metadata" */
export type Inventory_Variants_MetadataInventory_Product_Variants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Inventory_Product_Variants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Inventory_Product_Variants_Order_By>>;
  where?: InputMaybe<Inventory_Product_Variants_Bool_Exp>;
};

/** aggregated selection of "inventory_variants_metadata" */
export type Inventory_Variants_Metadata_Aggregate = {
  __typename?: 'inventory_variants_metadata_aggregate';
  aggregate?: Maybe<Inventory_Variants_Metadata_Aggregate_Fields>;
  nodes: Array<Inventory_Variants_Metadata>;
};

/** aggregate fields of "inventory_variants_metadata" */
export type Inventory_Variants_Metadata_Aggregate_Fields = {
  __typename?: 'inventory_variants_metadata_aggregate_fields';
  avg?: Maybe<Inventory_Variants_Metadata_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Inventory_Variants_Metadata_Max_Fields>;
  min?: Maybe<Inventory_Variants_Metadata_Min_Fields>;
  stddev?: Maybe<Inventory_Variants_Metadata_Stddev_Fields>;
  stddev_pop?: Maybe<Inventory_Variants_Metadata_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Inventory_Variants_Metadata_Stddev_Samp_Fields>;
  sum?: Maybe<Inventory_Variants_Metadata_Sum_Fields>;
  var_pop?: Maybe<Inventory_Variants_Metadata_Var_Pop_Fields>;
  var_samp?: Maybe<Inventory_Variants_Metadata_Var_Samp_Fields>;
  variance?: Maybe<Inventory_Variants_Metadata_Variance_Fields>;
};


/** aggregate fields of "inventory_variants_metadata" */
export type Inventory_Variants_Metadata_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Inventory_Variants_Metadata_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Inventory_Variants_Metadata_Avg_Fields = {
  __typename?: 'inventory_variants_metadata_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "inventory_variants_metadata". All fields are combined with a logical 'AND'. */
export type Inventory_Variants_Metadata_Bool_Exp = {
  _and?: InputMaybe<Array<Inventory_Variants_Metadata_Bool_Exp>>;
  _not?: InputMaybe<Inventory_Variants_Metadata_Bool_Exp>;
  _or?: InputMaybe<Array<Inventory_Variants_Metadata_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  inventory_product_variants?: InputMaybe<Inventory_Product_Variants_Bool_Exp>;
  variant_title?: InputMaybe<String_Comparison_Exp>;
  variant_value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "inventory_variants_metadata" */
export enum Inventory_Variants_Metadata_Constraint {
  /** unique or primary key constraint */
  InventoryVariantsMetadataPkey = 'inventory_variants_metadata_pkey'
}

/** input type for incrementing numeric columns in table "inventory_variants_metadata" */
export type Inventory_Variants_Metadata_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "inventory_variants_metadata" */
export type Inventory_Variants_Metadata_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  inventory_product_variants?: InputMaybe<Inventory_Product_Variants_Arr_Rel_Insert_Input>;
  variant_title?: InputMaybe<Scalars['String']>;
  variant_value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Inventory_Variants_Metadata_Max_Fields = {
  __typename?: 'inventory_variants_metadata_max_fields';
  id?: Maybe<Scalars['Int']>;
  variant_title?: Maybe<Scalars['String']>;
  variant_value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Inventory_Variants_Metadata_Min_Fields = {
  __typename?: 'inventory_variants_metadata_min_fields';
  id?: Maybe<Scalars['Int']>;
  variant_title?: Maybe<Scalars['String']>;
  variant_value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "inventory_variants_metadata" */
export type Inventory_Variants_Metadata_Mutation_Response = {
  __typename?: 'inventory_variants_metadata_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Inventory_Variants_Metadata>;
};

/** input type for inserting object relation for remote table "inventory_variants_metadata" */
export type Inventory_Variants_Metadata_Obj_Rel_Insert_Input = {
  data: Inventory_Variants_Metadata_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Inventory_Variants_Metadata_On_Conflict>;
};

/** on_conflict condition type for table "inventory_variants_metadata" */
export type Inventory_Variants_Metadata_On_Conflict = {
  constraint: Inventory_Variants_Metadata_Constraint;
  update_columns?: Array<Inventory_Variants_Metadata_Update_Column>;
  where?: InputMaybe<Inventory_Variants_Metadata_Bool_Exp>;
};

/** Ordering options when selecting data from "inventory_variants_metadata". */
export type Inventory_Variants_Metadata_Order_By = {
  id?: InputMaybe<Order_By>;
  inventory_product_variants_aggregate?: InputMaybe<Inventory_Product_Variants_Aggregate_Order_By>;
  variant_title?: InputMaybe<Order_By>;
  variant_value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: inventory_variants_metadata */
export type Inventory_Variants_Metadata_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "inventory_variants_metadata" */
export enum Inventory_Variants_Metadata_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  VariantTitle = 'variant_title',
  /** column name */
  VariantValue = 'variant_value'
}

/** input type for updating data in table "inventory_variants_metadata" */
export type Inventory_Variants_Metadata_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  variant_title?: InputMaybe<Scalars['String']>;
  variant_value?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Inventory_Variants_Metadata_Stddev_Fields = {
  __typename?: 'inventory_variants_metadata_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Inventory_Variants_Metadata_Stddev_Pop_Fields = {
  __typename?: 'inventory_variants_metadata_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Inventory_Variants_Metadata_Stddev_Samp_Fields = {
  __typename?: 'inventory_variants_metadata_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Inventory_Variants_Metadata_Sum_Fields = {
  __typename?: 'inventory_variants_metadata_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "inventory_variants_metadata" */
export enum Inventory_Variants_Metadata_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  VariantTitle = 'variant_title',
  /** column name */
  VariantValue = 'variant_value'
}

/** aggregate var_pop on columns */
export type Inventory_Variants_Metadata_Var_Pop_Fields = {
  __typename?: 'inventory_variants_metadata_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Inventory_Variants_Metadata_Var_Samp_Fields = {
  __typename?: 'inventory_variants_metadata_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Inventory_Variants_Metadata_Variance_Fields = {
  __typename?: 'inventory_variants_metadata_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  Cashier_CreateTransaction?: Maybe<Cashier_CreateTransactionOutput>;
  Transaction_ReturnTransaction?: Maybe<Transaction_ReturnTransactionOutput>;
  Transaction_SendReceipt?: Maybe<Transaction_SendReceiptOutput>;
  User_SignUp?: Maybe<User_SignUpOutput>;
  Whatsapp_SignOut?: Maybe<Whatsapp_SignOutOutput>;
  /** delete single row from the table: "auth.providers" */
  deleteAuthProvider?: Maybe<AuthProviders>;
  /** delete single row from the table: "auth.provider_requests" */
  deleteAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** delete data from the table: "auth.provider_requests" */
  deleteAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** delete data from the table: "auth.providers" */
  deleteAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** delete single row from the table: "auth.refresh_tokens" */
  deleteAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** delete data from the table: "auth.refresh_tokens" */
  deleteAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** delete single row from the table: "auth.roles" */
  deleteAuthRole?: Maybe<AuthRoles>;
  /** delete data from the table: "auth.roles" */
  deleteAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** delete single row from the table: "auth.user_providers" */
  deleteAuthUserProvider?: Maybe<AuthUserProviders>;
  /** delete data from the table: "auth.user_providers" */
  deleteAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** delete single row from the table: "auth.user_roles" */
  deleteAuthUserRole?: Maybe<AuthUserRoles>;
  /** delete data from the table: "auth.user_roles" */
  deleteAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** delete single row from the table: "storage.buckets" */
  deleteBucket?: Maybe<Buckets>;
  /** delete data from the table: "storage.buckets" */
  deleteBuckets?: Maybe<Buckets_Mutation_Response>;
  /** delete single row from the table: "storage.files" */
  deleteFile?: Maybe<Files>;
  /** delete data from the table: "storage.files" */
  deleteFiles?: Maybe<Files_Mutation_Response>;
  /** delete single row from the table: "auth.users" */
  deleteUser?: Maybe<Users>;
  /** delete data from the table: "auth.users" */
  deleteUsers?: Maybe<Users_Mutation_Response>;
  /** delete data from the table: "active_fcm_tokens" */
  delete_active_fcm_tokens?: Maybe<Active_Fcm_Tokens_Mutation_Response>;
  /** delete single row from the table: "active_fcm_tokens" */
  delete_active_fcm_tokens_by_pk?: Maybe<Active_Fcm_Tokens>;
  /** delete data from the table: "attendance" */
  delete_attendance?: Maybe<Attendance_Mutation_Response>;
  /** delete single row from the table: "attendance" */
  delete_attendance_by_pk?: Maybe<Attendance>;
  /** delete data from the table: "attendance_type_enum" */
  delete_attendance_type_enum?: Maybe<Attendance_Type_Enum_Mutation_Response>;
  /** delete single row from the table: "attendance_type_enum" */
  delete_attendance_type_enum_by_pk?: Maybe<Attendance_Type_Enum>;
  /** delete data from the table: "customers" */
  delete_customers?: Maybe<Customers_Mutation_Response>;
  /** delete single row from the table: "customers" */
  delete_customers_by_pk?: Maybe<Customers>;
  /** delete data from the table: "inventory_product_variants" */
  delete_inventory_product_variants?: Maybe<Inventory_Product_Variants_Mutation_Response>;
  /** delete single row from the table: "inventory_product_variants" */
  delete_inventory_product_variants_by_pk?: Maybe<Inventory_Product_Variants>;
  /** delete data from the table: "inventory_products" */
  delete_inventory_products?: Maybe<Inventory_Products_Mutation_Response>;
  /** delete single row from the table: "inventory_products" */
  delete_inventory_products_by_pk?: Maybe<Inventory_Products>;
  /** delete data from the table: "inventory_variants_metadata" */
  delete_inventory_variants_metadata?: Maybe<Inventory_Variants_Metadata_Mutation_Response>;
  /** delete single row from the table: "inventory_variants_metadata" */
  delete_inventory_variants_metadata_by_pk?: Maybe<Inventory_Variants_Metadata>;
  /** delete data from the table: "notification" */
  delete_notification?: Maybe<Notification_Mutation_Response>;
  /** delete single row from the table: "notification" */
  delete_notification_by_pk?: Maybe<Notification>;
  /** delete data from the table: "notification_read_user" */
  delete_notification_read_user?: Maybe<Notification_Read_User_Mutation_Response>;
  /** delete single row from the table: "notification_read_user" */
  delete_notification_read_user_by_pk?: Maybe<Notification_Read_User>;
  /** delete data from the table: "operational_costs" */
  delete_operational_costs?: Maybe<Operational_Costs_Mutation_Response>;
  /** delete single row from the table: "operational_costs" */
  delete_operational_costs_by_pk?: Maybe<Operational_Costs>;
  /** delete data from the table: "product_categories" */
  delete_product_categories?: Maybe<Product_Categories_Mutation_Response>;
  /** delete single row from the table: "product_categories" */
  delete_product_categories_by_pk?: Maybe<Product_Categories>;
  /** delete data from the table: "products" */
  delete_products?: Maybe<Products_Mutation_Response>;
  /** delete single row from the table: "products" */
  delete_products_by_pk?: Maybe<Products>;
  /** delete data from the table: "stores" */
  delete_stores?: Maybe<Stores_Mutation_Response>;
  /** delete single row from the table: "stores" */
  delete_stores_by_pk?: Maybe<Stores>;
  /** delete data from the table: "transaction" */
  delete_transaction?: Maybe<Transaction_Mutation_Response>;
  /** delete single row from the table: "transaction" */
  delete_transaction_by_pk?: Maybe<Transaction>;
  /** delete data from the table: "transaction_items" */
  delete_transaction_items?: Maybe<Transaction_Items_Mutation_Response>;
  /** delete single row from the table: "transaction_items" */
  delete_transaction_items_by_pk?: Maybe<Transaction_Items>;
  /** delete data from the table: "transaction_payment_type_enum" */
  delete_transaction_payment_type_enum?: Maybe<Transaction_Payment_Type_Enum_Mutation_Response>;
  /** delete single row from the table: "transaction_payment_type_enum" */
  delete_transaction_payment_type_enum_by_pk?: Maybe<Transaction_Payment_Type_Enum>;
  /** delete data from the table: "transaction_receipt_type_enum" */
  delete_transaction_receipt_type_enum?: Maybe<Transaction_Receipt_Type_Enum_Mutation_Response>;
  /** delete single row from the table: "transaction_receipt_type_enum" */
  delete_transaction_receipt_type_enum_by_pk?: Maybe<Transaction_Receipt_Type_Enum>;
  /** delete data from the table: "transaction_receipts" */
  delete_transaction_receipts?: Maybe<Transaction_Receipts_Mutation_Response>;
  /** delete single row from the table: "transaction_receipts" */
  delete_transaction_receipts_by_pk?: Maybe<Transaction_Receipts>;
  /** delete data from the table: "transaction_status_enum" */
  delete_transaction_status_enum?: Maybe<Transaction_Status_Enum_Mutation_Response>;
  /** delete single row from the table: "transaction_status_enum" */
  delete_transaction_status_enum_by_pk?: Maybe<Transaction_Status_Enum>;
  /** delete data from the table: "users_metadata" */
  delete_users_metadata?: Maybe<Users_Metadata_Mutation_Response>;
  /** delete single row from the table: "users_metadata" */
  delete_users_metadata_by_pk?: Maybe<Users_Metadata>;
  /** delete data from the table: "whatsapp_subscription" */
  delete_whatsapp_subscription?: Maybe<Whatsapp_Subscription_Mutation_Response>;
  /** delete single row from the table: "whatsapp_subscription" */
  delete_whatsapp_subscription_by_pk?: Maybe<Whatsapp_Subscription>;
  /** insert a single row into the table: "auth.providers" */
  insertAuthProvider?: Maybe<AuthProviders>;
  /** insert a single row into the table: "auth.provider_requests" */
  insertAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** insert data into the table: "auth.provider_requests" */
  insertAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** insert data into the table: "auth.providers" */
  insertAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  insertAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** insert data into the table: "auth.refresh_tokens" */
  insertAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** insert a single row into the table: "auth.roles" */
  insertAuthRole?: Maybe<AuthRoles>;
  /** insert data into the table: "auth.roles" */
  insertAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.user_providers" */
  insertAuthUserProvider?: Maybe<AuthUserProviders>;
  /** insert data into the table: "auth.user_providers" */
  insertAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.user_roles" */
  insertAuthUserRole?: Maybe<AuthUserRoles>;
  /** insert data into the table: "auth.user_roles" */
  insertAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** insert a single row into the table: "storage.buckets" */
  insertBucket?: Maybe<Buckets>;
  /** insert data into the table: "storage.buckets" */
  insertBuckets?: Maybe<Buckets_Mutation_Response>;
  /** insert a single row into the table: "storage.files" */
  insertFile?: Maybe<Files>;
  /** insert data into the table: "storage.files" */
  insertFiles?: Maybe<Files_Mutation_Response>;
  /** insert a single row into the table: "auth.users" */
  insertUser?: Maybe<Users>;
  /** insert data into the table: "auth.users" */
  insertUsers?: Maybe<Users_Mutation_Response>;
  /** insert data into the table: "active_fcm_tokens" */
  insert_active_fcm_tokens?: Maybe<Active_Fcm_Tokens_Mutation_Response>;
  /** insert a single row into the table: "active_fcm_tokens" */
  insert_active_fcm_tokens_one?: Maybe<Active_Fcm_Tokens>;
  /** insert data into the table: "attendance" */
  insert_attendance?: Maybe<Attendance_Mutation_Response>;
  /** insert a single row into the table: "attendance" */
  insert_attendance_one?: Maybe<Attendance>;
  /** insert data into the table: "attendance_type_enum" */
  insert_attendance_type_enum?: Maybe<Attendance_Type_Enum_Mutation_Response>;
  /** insert a single row into the table: "attendance_type_enum" */
  insert_attendance_type_enum_one?: Maybe<Attendance_Type_Enum>;
  /** insert data into the table: "customers" */
  insert_customers?: Maybe<Customers_Mutation_Response>;
  /** insert a single row into the table: "customers" */
  insert_customers_one?: Maybe<Customers>;
  /** insert data into the table: "inventory_product_variants" */
  insert_inventory_product_variants?: Maybe<Inventory_Product_Variants_Mutation_Response>;
  /** insert a single row into the table: "inventory_product_variants" */
  insert_inventory_product_variants_one?: Maybe<Inventory_Product_Variants>;
  /** insert data into the table: "inventory_products" */
  insert_inventory_products?: Maybe<Inventory_Products_Mutation_Response>;
  /** insert a single row into the table: "inventory_products" */
  insert_inventory_products_one?: Maybe<Inventory_Products>;
  /** insert data into the table: "inventory_variants_metadata" */
  insert_inventory_variants_metadata?: Maybe<Inventory_Variants_Metadata_Mutation_Response>;
  /** insert a single row into the table: "inventory_variants_metadata" */
  insert_inventory_variants_metadata_one?: Maybe<Inventory_Variants_Metadata>;
  /** insert data into the table: "notification" */
  insert_notification?: Maybe<Notification_Mutation_Response>;
  /** insert a single row into the table: "notification" */
  insert_notification_one?: Maybe<Notification>;
  /** insert data into the table: "notification_read_user" */
  insert_notification_read_user?: Maybe<Notification_Read_User_Mutation_Response>;
  /** insert a single row into the table: "notification_read_user" */
  insert_notification_read_user_one?: Maybe<Notification_Read_User>;
  /** insert data into the table: "operational_costs" */
  insert_operational_costs?: Maybe<Operational_Costs_Mutation_Response>;
  /** insert a single row into the table: "operational_costs" */
  insert_operational_costs_one?: Maybe<Operational_Costs>;
  /** insert data into the table: "product_categories" */
  insert_product_categories?: Maybe<Product_Categories_Mutation_Response>;
  /** insert a single row into the table: "product_categories" */
  insert_product_categories_one?: Maybe<Product_Categories>;
  /** insert data into the table: "products" */
  insert_products?: Maybe<Products_Mutation_Response>;
  /** insert a single row into the table: "products" */
  insert_products_one?: Maybe<Products>;
  /** insert data into the table: "stores" */
  insert_stores?: Maybe<Stores_Mutation_Response>;
  /** insert a single row into the table: "stores" */
  insert_stores_one?: Maybe<Stores>;
  /** insert data into the table: "transaction" */
  insert_transaction?: Maybe<Transaction_Mutation_Response>;
  /** insert data into the table: "transaction_items" */
  insert_transaction_items?: Maybe<Transaction_Items_Mutation_Response>;
  /** insert a single row into the table: "transaction_items" */
  insert_transaction_items_one?: Maybe<Transaction_Items>;
  /** insert a single row into the table: "transaction" */
  insert_transaction_one?: Maybe<Transaction>;
  /** insert data into the table: "transaction_payment_type_enum" */
  insert_transaction_payment_type_enum?: Maybe<Transaction_Payment_Type_Enum_Mutation_Response>;
  /** insert a single row into the table: "transaction_payment_type_enum" */
  insert_transaction_payment_type_enum_one?: Maybe<Transaction_Payment_Type_Enum>;
  /** insert data into the table: "transaction_receipt_type_enum" */
  insert_transaction_receipt_type_enum?: Maybe<Transaction_Receipt_Type_Enum_Mutation_Response>;
  /** insert a single row into the table: "transaction_receipt_type_enum" */
  insert_transaction_receipt_type_enum_one?: Maybe<Transaction_Receipt_Type_Enum>;
  /** insert data into the table: "transaction_receipts" */
  insert_transaction_receipts?: Maybe<Transaction_Receipts_Mutation_Response>;
  /** insert a single row into the table: "transaction_receipts" */
  insert_transaction_receipts_one?: Maybe<Transaction_Receipts>;
  /** insert data into the table: "transaction_status_enum" */
  insert_transaction_status_enum?: Maybe<Transaction_Status_Enum_Mutation_Response>;
  /** insert a single row into the table: "transaction_status_enum" */
  insert_transaction_status_enum_one?: Maybe<Transaction_Status_Enum>;
  /** insert data into the table: "users_metadata" */
  insert_users_metadata?: Maybe<Users_Metadata_Mutation_Response>;
  /** insert a single row into the table: "users_metadata" */
  insert_users_metadata_one?: Maybe<Users_Metadata>;
  /** insert data into the table: "whatsapp_subscription" */
  insert_whatsapp_subscription?: Maybe<Whatsapp_Subscription_Mutation_Response>;
  /** insert a single row into the table: "whatsapp_subscription" */
  insert_whatsapp_subscription_one?: Maybe<Whatsapp_Subscription>;
  /** update single row of the table: "auth.providers" */
  updateAuthProvider?: Maybe<AuthProviders>;
  /** update single row of the table: "auth.provider_requests" */
  updateAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** update data of the table: "auth.provider_requests" */
  updateAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** update data of the table: "auth.providers" */
  updateAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** update single row of the table: "auth.refresh_tokens" */
  updateAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** update data of the table: "auth.refresh_tokens" */
  updateAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** update single row of the table: "auth.roles" */
  updateAuthRole?: Maybe<AuthRoles>;
  /** update data of the table: "auth.roles" */
  updateAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** update single row of the table: "auth.user_providers" */
  updateAuthUserProvider?: Maybe<AuthUserProviders>;
  /** update data of the table: "auth.user_providers" */
  updateAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** update single row of the table: "auth.user_roles" */
  updateAuthUserRole?: Maybe<AuthUserRoles>;
  /** update data of the table: "auth.user_roles" */
  updateAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** update single row of the table: "storage.buckets" */
  updateBucket?: Maybe<Buckets>;
  /** update data of the table: "storage.buckets" */
  updateBuckets?: Maybe<Buckets_Mutation_Response>;
  /** update single row of the table: "storage.files" */
  updateFile?: Maybe<Files>;
  /** update data of the table: "storage.files" */
  updateFiles?: Maybe<Files_Mutation_Response>;
  /** update single row of the table: "auth.users" */
  updateUser?: Maybe<Users>;
  /** update data of the table: "auth.users" */
  updateUsers?: Maybe<Users_Mutation_Response>;
  /** update data of the table: "active_fcm_tokens" */
  update_active_fcm_tokens?: Maybe<Active_Fcm_Tokens_Mutation_Response>;
  /** update single row of the table: "active_fcm_tokens" */
  update_active_fcm_tokens_by_pk?: Maybe<Active_Fcm_Tokens>;
  /** update data of the table: "attendance" */
  update_attendance?: Maybe<Attendance_Mutation_Response>;
  /** update single row of the table: "attendance" */
  update_attendance_by_pk?: Maybe<Attendance>;
  /** update data of the table: "attendance_type_enum" */
  update_attendance_type_enum?: Maybe<Attendance_Type_Enum_Mutation_Response>;
  /** update single row of the table: "attendance_type_enum" */
  update_attendance_type_enum_by_pk?: Maybe<Attendance_Type_Enum>;
  /** update data of the table: "customers" */
  update_customers?: Maybe<Customers_Mutation_Response>;
  /** update single row of the table: "customers" */
  update_customers_by_pk?: Maybe<Customers>;
  /** update data of the table: "inventory_product_variants" */
  update_inventory_product_variants?: Maybe<Inventory_Product_Variants_Mutation_Response>;
  /** update single row of the table: "inventory_product_variants" */
  update_inventory_product_variants_by_pk?: Maybe<Inventory_Product_Variants>;
  /** update data of the table: "inventory_products" */
  update_inventory_products?: Maybe<Inventory_Products_Mutation_Response>;
  /** update single row of the table: "inventory_products" */
  update_inventory_products_by_pk?: Maybe<Inventory_Products>;
  /** update data of the table: "inventory_variants_metadata" */
  update_inventory_variants_metadata?: Maybe<Inventory_Variants_Metadata_Mutation_Response>;
  /** update single row of the table: "inventory_variants_metadata" */
  update_inventory_variants_metadata_by_pk?: Maybe<Inventory_Variants_Metadata>;
  /** update data of the table: "notification" */
  update_notification?: Maybe<Notification_Mutation_Response>;
  /** update single row of the table: "notification" */
  update_notification_by_pk?: Maybe<Notification>;
  /** update data of the table: "notification_read_user" */
  update_notification_read_user?: Maybe<Notification_Read_User_Mutation_Response>;
  /** update single row of the table: "notification_read_user" */
  update_notification_read_user_by_pk?: Maybe<Notification_Read_User>;
  /** update data of the table: "operational_costs" */
  update_operational_costs?: Maybe<Operational_Costs_Mutation_Response>;
  /** update single row of the table: "operational_costs" */
  update_operational_costs_by_pk?: Maybe<Operational_Costs>;
  /** update data of the table: "product_categories" */
  update_product_categories?: Maybe<Product_Categories_Mutation_Response>;
  /** update single row of the table: "product_categories" */
  update_product_categories_by_pk?: Maybe<Product_Categories>;
  /** update data of the table: "products" */
  update_products?: Maybe<Products_Mutation_Response>;
  /** update single row of the table: "products" */
  update_products_by_pk?: Maybe<Products>;
  /** update data of the table: "stores" */
  update_stores?: Maybe<Stores_Mutation_Response>;
  /** update single row of the table: "stores" */
  update_stores_by_pk?: Maybe<Stores>;
  /** update data of the table: "transaction" */
  update_transaction?: Maybe<Transaction_Mutation_Response>;
  /** update single row of the table: "transaction" */
  update_transaction_by_pk?: Maybe<Transaction>;
  /** update data of the table: "transaction_items" */
  update_transaction_items?: Maybe<Transaction_Items_Mutation_Response>;
  /** update single row of the table: "transaction_items" */
  update_transaction_items_by_pk?: Maybe<Transaction_Items>;
  /** update data of the table: "transaction_payment_type_enum" */
  update_transaction_payment_type_enum?: Maybe<Transaction_Payment_Type_Enum_Mutation_Response>;
  /** update single row of the table: "transaction_payment_type_enum" */
  update_transaction_payment_type_enum_by_pk?: Maybe<Transaction_Payment_Type_Enum>;
  /** update data of the table: "transaction_receipt_type_enum" */
  update_transaction_receipt_type_enum?: Maybe<Transaction_Receipt_Type_Enum_Mutation_Response>;
  /** update single row of the table: "transaction_receipt_type_enum" */
  update_transaction_receipt_type_enum_by_pk?: Maybe<Transaction_Receipt_Type_Enum>;
  /** update data of the table: "transaction_receipts" */
  update_transaction_receipts?: Maybe<Transaction_Receipts_Mutation_Response>;
  /** update single row of the table: "transaction_receipts" */
  update_transaction_receipts_by_pk?: Maybe<Transaction_Receipts>;
  /** update data of the table: "transaction_status_enum" */
  update_transaction_status_enum?: Maybe<Transaction_Status_Enum_Mutation_Response>;
  /** update single row of the table: "transaction_status_enum" */
  update_transaction_status_enum_by_pk?: Maybe<Transaction_Status_Enum>;
  /** update data of the table: "users_metadata" */
  update_users_metadata?: Maybe<Users_Metadata_Mutation_Response>;
  /** update single row of the table: "users_metadata" */
  update_users_metadata_by_pk?: Maybe<Users_Metadata>;
  /** update data of the table: "whatsapp_subscription" */
  update_whatsapp_subscription?: Maybe<Whatsapp_Subscription_Mutation_Response>;
  /** update single row of the table: "whatsapp_subscription" */
  update_whatsapp_subscription_by_pk?: Maybe<Whatsapp_Subscription>;
};


/** mutation root */
export type Mutation_RootCashier_CreateTransactionArgs = {
  cash_in_amount: Scalars['Int'];
  karyawan_name?: InputMaybe<Scalars['String']>;
  payment_type: TransactionPaymentTypeEnum;
  store_id: Scalars['Int'];
  total_transaction: Scalars['Int'];
  transaction_items: Array<Transaction_Items_Input>;
};


/** mutation root */
export type Mutation_RootTransaction_ReturnTransactionArgs = {
  added_items?: InputMaybe<Array<Transaction_Items_Input>>;
  cash_in_amount: Scalars['Int'];
  invoice_number: Scalars['String'];
  karyawan_name: Scalars['String'];
  return_reason: Scalars['String'];
  return_type: TransactionReturnType;
  returned_items?: InputMaybe<Array<Transaction_ReturnedItem>>;
  total_transaction: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootTransaction_SendReceiptArgs = {
  customer: CustomerInput;
  invoice_number: Scalars['String'];
  receipt_type: TransactionReceiptTypeEnum;
};


/** mutation root */
export type Mutation_RootUser_SignUpArgs = {
  defaultRole: Scalars['String'];
  defaultStore?: InputMaybe<Scalars['Int']>;
  displayName?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestsArgs = {
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthProvidersArgs = {
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokensArgs = {
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRoleArgs = {
  role: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRolesArgs = {
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProvidersArgs = {
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRolesArgs = {
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteBucketArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteBucketsArgs = {
  where: Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteFileArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteFilesArgs = {
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteUsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Active_Fcm_TokensArgs = {
  where: Active_Fcm_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Active_Fcm_Tokens_By_PkArgs = {
  fcm_token: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_AttendanceArgs = {
  where: Attendance_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Attendance_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Attendance_Type_EnumArgs = {
  where: Attendance_Type_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Attendance_Type_Enum_By_PkArgs = {
  attendance_type: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_CustomersArgs = {
  where: Customers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Customers_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Inventory_Product_VariantsArgs = {
  where: Inventory_Product_Variants_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Inventory_Product_Variants_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Inventory_ProductsArgs = {
  where: Inventory_Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Inventory_Products_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Inventory_Variants_MetadataArgs = {
  where: Inventory_Variants_Metadata_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Inventory_Variants_Metadata_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_NotificationArgs = {
  where: Notification_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Notification_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Notification_Read_UserArgs = {
  where: Notification_Read_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Notification_Read_User_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Operational_CostsArgs = {
  where: Operational_Costs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Operational_Costs_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Product_CategoriesArgs = {
  where: Product_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Categories_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ProductsArgs = {
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Products_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_StoresArgs = {
  where: Stores_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Stores_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_TransactionArgs = {
  where: Transaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Transaction_By_PkArgs = {
  invoice_number: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Transaction_ItemsArgs = {
  where: Transaction_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Transaction_Items_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Transaction_Payment_Type_EnumArgs = {
  where: Transaction_Payment_Type_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Transaction_Payment_Type_Enum_By_PkArgs = {
  payment_type: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Transaction_Receipt_Type_EnumArgs = {
  where: Transaction_Receipt_Type_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Transaction_Receipt_Type_Enum_By_PkArgs = {
  receipt_type: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Transaction_ReceiptsArgs = {
  where: Transaction_Receipts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Transaction_Receipts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Transaction_Status_EnumArgs = {
  where: Transaction_Status_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Transaction_Status_Enum_By_PkArgs = {
  transaction_status: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Users_MetadataArgs = {
  where: Users_Metadata_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_Metadata_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Whatsapp_SubscriptionArgs = {
  where: Whatsapp_Subscription_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Whatsapp_Subscription_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsertAuthProviderArgs = {
  object: AuthProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestArgs = {
  object: AuthProviderRequests_Insert_Input;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestsArgs = {
  objects: Array<AuthProviderRequests_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProvidersArgs = {
  objects: Array<AuthProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenArgs = {
  object: AuthRefreshTokens_Insert_Input;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokensArgs = {
  objects: Array<AuthRefreshTokens_Insert_Input>;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRoleArgs = {
  object: AuthRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRolesArgs = {
  objects: Array<AuthRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProviderArgs = {
  object: AuthUserProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProvidersArgs = {
  objects: Array<AuthUserProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRoleArgs = {
  object: AuthUserRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRolesArgs = {
  objects: Array<AuthUserRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketArgs = {
  object: Buckets_Insert_Input;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketsArgs = {
  objects: Array<Buckets_Insert_Input>;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFileArgs = {
  object: Files_Insert_Input;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFilesArgs = {
  objects: Array<Files_Insert_Input>;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUserArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Active_Fcm_TokensArgs = {
  objects: Array<Active_Fcm_Tokens_Insert_Input>;
  on_conflict?: InputMaybe<Active_Fcm_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Active_Fcm_Tokens_OneArgs = {
  object: Active_Fcm_Tokens_Insert_Input;
  on_conflict?: InputMaybe<Active_Fcm_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_AttendanceArgs = {
  objects: Array<Attendance_Insert_Input>;
  on_conflict?: InputMaybe<Attendance_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Attendance_OneArgs = {
  object: Attendance_Insert_Input;
  on_conflict?: InputMaybe<Attendance_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Attendance_Type_EnumArgs = {
  objects: Array<Attendance_Type_Enum_Insert_Input>;
  on_conflict?: InputMaybe<Attendance_Type_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Attendance_Type_Enum_OneArgs = {
  object: Attendance_Type_Enum_Insert_Input;
  on_conflict?: InputMaybe<Attendance_Type_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CustomersArgs = {
  objects: Array<Customers_Insert_Input>;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Customers_OneArgs = {
  object: Customers_Insert_Input;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Inventory_Product_VariantsArgs = {
  objects: Array<Inventory_Product_Variants_Insert_Input>;
  on_conflict?: InputMaybe<Inventory_Product_Variants_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Inventory_Product_Variants_OneArgs = {
  object: Inventory_Product_Variants_Insert_Input;
  on_conflict?: InputMaybe<Inventory_Product_Variants_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Inventory_ProductsArgs = {
  objects: Array<Inventory_Products_Insert_Input>;
  on_conflict?: InputMaybe<Inventory_Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Inventory_Products_OneArgs = {
  object: Inventory_Products_Insert_Input;
  on_conflict?: InputMaybe<Inventory_Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Inventory_Variants_MetadataArgs = {
  objects: Array<Inventory_Variants_Metadata_Insert_Input>;
  on_conflict?: InputMaybe<Inventory_Variants_Metadata_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Inventory_Variants_Metadata_OneArgs = {
  object: Inventory_Variants_Metadata_Insert_Input;
  on_conflict?: InputMaybe<Inventory_Variants_Metadata_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_NotificationArgs = {
  objects: Array<Notification_Insert_Input>;
  on_conflict?: InputMaybe<Notification_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Notification_OneArgs = {
  object: Notification_Insert_Input;
  on_conflict?: InputMaybe<Notification_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Notification_Read_UserArgs = {
  objects: Array<Notification_Read_User_Insert_Input>;
  on_conflict?: InputMaybe<Notification_Read_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Notification_Read_User_OneArgs = {
  object: Notification_Read_User_Insert_Input;
  on_conflict?: InputMaybe<Notification_Read_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Operational_CostsArgs = {
  objects: Array<Operational_Costs_Insert_Input>;
  on_conflict?: InputMaybe<Operational_Costs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Operational_Costs_OneArgs = {
  object: Operational_Costs_Insert_Input;
  on_conflict?: InputMaybe<Operational_Costs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_CategoriesArgs = {
  objects: Array<Product_Categories_Insert_Input>;
  on_conflict?: InputMaybe<Product_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Categories_OneArgs = {
  object: Product_Categories_Insert_Input;
  on_conflict?: InputMaybe<Product_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProductsArgs = {
  objects: Array<Products_Insert_Input>;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Products_OneArgs = {
  object: Products_Insert_Input;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_StoresArgs = {
  objects: Array<Stores_Insert_Input>;
  on_conflict?: InputMaybe<Stores_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stores_OneArgs = {
  object: Stores_Insert_Input;
  on_conflict?: InputMaybe<Stores_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TransactionArgs = {
  objects: Array<Transaction_Insert_Input>;
  on_conflict?: InputMaybe<Transaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_ItemsArgs = {
  objects: Array<Transaction_Items_Insert_Input>;
  on_conflict?: InputMaybe<Transaction_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_Items_OneArgs = {
  object: Transaction_Items_Insert_Input;
  on_conflict?: InputMaybe<Transaction_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_OneArgs = {
  object: Transaction_Insert_Input;
  on_conflict?: InputMaybe<Transaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_Payment_Type_EnumArgs = {
  objects: Array<Transaction_Payment_Type_Enum_Insert_Input>;
  on_conflict?: InputMaybe<Transaction_Payment_Type_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_Payment_Type_Enum_OneArgs = {
  object: Transaction_Payment_Type_Enum_Insert_Input;
  on_conflict?: InputMaybe<Transaction_Payment_Type_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_Receipt_Type_EnumArgs = {
  objects: Array<Transaction_Receipt_Type_Enum_Insert_Input>;
  on_conflict?: InputMaybe<Transaction_Receipt_Type_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_Receipt_Type_Enum_OneArgs = {
  object: Transaction_Receipt_Type_Enum_Insert_Input;
  on_conflict?: InputMaybe<Transaction_Receipt_Type_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_ReceiptsArgs = {
  objects: Array<Transaction_Receipts_Insert_Input>;
  on_conflict?: InputMaybe<Transaction_Receipts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_Receipts_OneArgs = {
  object: Transaction_Receipts_Insert_Input;
  on_conflict?: InputMaybe<Transaction_Receipts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_Status_EnumArgs = {
  objects: Array<Transaction_Status_Enum_Insert_Input>;
  on_conflict?: InputMaybe<Transaction_Status_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_Status_Enum_OneArgs = {
  object: Transaction_Status_Enum_Insert_Input;
  on_conflict?: InputMaybe<Transaction_Status_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_MetadataArgs = {
  objects: Array<Users_Metadata_Insert_Input>;
  on_conflict?: InputMaybe<Users_Metadata_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_Metadata_OneArgs = {
  object: Users_Metadata_Insert_Input;
  on_conflict?: InputMaybe<Users_Metadata_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Whatsapp_SubscriptionArgs = {
  objects: Array<Whatsapp_Subscription_Insert_Input>;
  on_conflict?: InputMaybe<Whatsapp_Subscription_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Whatsapp_Subscription_OneArgs = {
  object: Whatsapp_Subscription_Insert_Input;
  on_conflict?: InputMaybe<Whatsapp_Subscription_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  pk_columns: AuthProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  pk_columns: AuthProviderRequests_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestsArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthProvidersArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenArgs = {
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  pk_columns: AuthRefreshTokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokensArgs = {
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRoleArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  pk_columns: AuthRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRolesArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProviderArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  pk_columns: AuthUserProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProvidersArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRoleArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  pk_columns: AuthUserRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRolesArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateBucketArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  pk_columns: Buckets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateBucketsArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  where: Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateFileArgs = {
  _inc?: InputMaybe<Files_Inc_Input>;
  _set?: InputMaybe<Files_Set_Input>;
  pk_columns: Files_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateFilesArgs = {
  _inc?: InputMaybe<Files_Inc_Input>;
  _set?: InputMaybe<Files_Set_Input>;
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateUsersArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Active_Fcm_TokensArgs = {
  _set?: InputMaybe<Active_Fcm_Tokens_Set_Input>;
  where: Active_Fcm_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Active_Fcm_Tokens_By_PkArgs = {
  _set?: InputMaybe<Active_Fcm_Tokens_Set_Input>;
  pk_columns: Active_Fcm_Tokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_AttendanceArgs = {
  _inc?: InputMaybe<Attendance_Inc_Input>;
  _set?: InputMaybe<Attendance_Set_Input>;
  where: Attendance_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Attendance_By_PkArgs = {
  _inc?: InputMaybe<Attendance_Inc_Input>;
  _set?: InputMaybe<Attendance_Set_Input>;
  pk_columns: Attendance_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Attendance_Type_EnumArgs = {
  _set?: InputMaybe<Attendance_Type_Enum_Set_Input>;
  where: Attendance_Type_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Attendance_Type_Enum_By_PkArgs = {
  _set?: InputMaybe<Attendance_Type_Enum_Set_Input>;
  pk_columns: Attendance_Type_Enum_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CustomersArgs = {
  _set?: InputMaybe<Customers_Set_Input>;
  where: Customers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Customers_By_PkArgs = {
  _set?: InputMaybe<Customers_Set_Input>;
  pk_columns: Customers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Inventory_Product_VariantsArgs = {
  _inc?: InputMaybe<Inventory_Product_Variants_Inc_Input>;
  _set?: InputMaybe<Inventory_Product_Variants_Set_Input>;
  where: Inventory_Product_Variants_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Inventory_Product_Variants_By_PkArgs = {
  _inc?: InputMaybe<Inventory_Product_Variants_Inc_Input>;
  _set?: InputMaybe<Inventory_Product_Variants_Set_Input>;
  pk_columns: Inventory_Product_Variants_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Inventory_ProductsArgs = {
  _inc?: InputMaybe<Inventory_Products_Inc_Input>;
  _set?: InputMaybe<Inventory_Products_Set_Input>;
  where: Inventory_Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Inventory_Products_By_PkArgs = {
  _inc?: InputMaybe<Inventory_Products_Inc_Input>;
  _set?: InputMaybe<Inventory_Products_Set_Input>;
  pk_columns: Inventory_Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Inventory_Variants_MetadataArgs = {
  _inc?: InputMaybe<Inventory_Variants_Metadata_Inc_Input>;
  _set?: InputMaybe<Inventory_Variants_Metadata_Set_Input>;
  where: Inventory_Variants_Metadata_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Inventory_Variants_Metadata_By_PkArgs = {
  _inc?: InputMaybe<Inventory_Variants_Metadata_Inc_Input>;
  _set?: InputMaybe<Inventory_Variants_Metadata_Set_Input>;
  pk_columns: Inventory_Variants_Metadata_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_NotificationArgs = {
  _inc?: InputMaybe<Notification_Inc_Input>;
  _set?: InputMaybe<Notification_Set_Input>;
  where: Notification_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Notification_By_PkArgs = {
  _inc?: InputMaybe<Notification_Inc_Input>;
  _set?: InputMaybe<Notification_Set_Input>;
  pk_columns: Notification_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Notification_Read_UserArgs = {
  _inc?: InputMaybe<Notification_Read_User_Inc_Input>;
  _set?: InputMaybe<Notification_Read_User_Set_Input>;
  where: Notification_Read_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Notification_Read_User_By_PkArgs = {
  _inc?: InputMaybe<Notification_Read_User_Inc_Input>;
  _set?: InputMaybe<Notification_Read_User_Set_Input>;
  pk_columns: Notification_Read_User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Operational_CostsArgs = {
  _inc?: InputMaybe<Operational_Costs_Inc_Input>;
  _set?: InputMaybe<Operational_Costs_Set_Input>;
  where: Operational_Costs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Operational_Costs_By_PkArgs = {
  _inc?: InputMaybe<Operational_Costs_Inc_Input>;
  _set?: InputMaybe<Operational_Costs_Set_Input>;
  pk_columns: Operational_Costs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_CategoriesArgs = {
  _inc?: InputMaybe<Product_Categories_Inc_Input>;
  _set?: InputMaybe<Product_Categories_Set_Input>;
  where: Product_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Categories_By_PkArgs = {
  _inc?: InputMaybe<Product_Categories_Inc_Input>;
  _set?: InputMaybe<Product_Categories_Set_Input>;
  pk_columns: Product_Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProductsArgs = {
  _inc?: InputMaybe<Products_Inc_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Products_By_PkArgs = {
  _inc?: InputMaybe<Products_Inc_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  pk_columns: Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_StoresArgs = {
  _inc?: InputMaybe<Stores_Inc_Input>;
  _set?: InputMaybe<Stores_Set_Input>;
  where: Stores_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Stores_By_PkArgs = {
  _inc?: InputMaybe<Stores_Inc_Input>;
  _set?: InputMaybe<Stores_Set_Input>;
  pk_columns: Stores_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TransactionArgs = {
  _inc?: InputMaybe<Transaction_Inc_Input>;
  _set?: InputMaybe<Transaction_Set_Input>;
  where: Transaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_By_PkArgs = {
  _inc?: InputMaybe<Transaction_Inc_Input>;
  _set?: InputMaybe<Transaction_Set_Input>;
  pk_columns: Transaction_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_ItemsArgs = {
  _inc?: InputMaybe<Transaction_Items_Inc_Input>;
  _set?: InputMaybe<Transaction_Items_Set_Input>;
  where: Transaction_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_Items_By_PkArgs = {
  _inc?: InputMaybe<Transaction_Items_Inc_Input>;
  _set?: InputMaybe<Transaction_Items_Set_Input>;
  pk_columns: Transaction_Items_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_Payment_Type_EnumArgs = {
  _set?: InputMaybe<Transaction_Payment_Type_Enum_Set_Input>;
  where: Transaction_Payment_Type_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_Payment_Type_Enum_By_PkArgs = {
  _set?: InputMaybe<Transaction_Payment_Type_Enum_Set_Input>;
  pk_columns: Transaction_Payment_Type_Enum_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_Receipt_Type_EnumArgs = {
  _set?: InputMaybe<Transaction_Receipt_Type_Enum_Set_Input>;
  where: Transaction_Receipt_Type_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_Receipt_Type_Enum_By_PkArgs = {
  _set?: InputMaybe<Transaction_Receipt_Type_Enum_Set_Input>;
  pk_columns: Transaction_Receipt_Type_Enum_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_ReceiptsArgs = {
  _set?: InputMaybe<Transaction_Receipts_Set_Input>;
  where: Transaction_Receipts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_Receipts_By_PkArgs = {
  _set?: InputMaybe<Transaction_Receipts_Set_Input>;
  pk_columns: Transaction_Receipts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_Status_EnumArgs = {
  _set?: InputMaybe<Transaction_Status_Enum_Set_Input>;
  where: Transaction_Status_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_Status_Enum_By_PkArgs = {
  _set?: InputMaybe<Transaction_Status_Enum_Set_Input>;
  pk_columns: Transaction_Status_Enum_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_MetadataArgs = {
  _inc?: InputMaybe<Users_Metadata_Inc_Input>;
  _set?: InputMaybe<Users_Metadata_Set_Input>;
  where: Users_Metadata_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_Metadata_By_PkArgs = {
  _inc?: InputMaybe<Users_Metadata_Inc_Input>;
  _set?: InputMaybe<Users_Metadata_Set_Input>;
  pk_columns: Users_Metadata_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Whatsapp_SubscriptionArgs = {
  _inc?: InputMaybe<Whatsapp_Subscription_Inc_Input>;
  _set?: InputMaybe<Whatsapp_Subscription_Set_Input>;
  where: Whatsapp_Subscription_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Whatsapp_Subscription_By_PkArgs = {
  _inc?: InputMaybe<Whatsapp_Subscription_Inc_Input>;
  _set?: InputMaybe<Whatsapp_Subscription_Set_Input>;
  pk_columns: Whatsapp_Subscription_Pk_Columns_Input;
};

/** columns and relationships of "notification" */
export type Notification = {
  __typename?: 'notification';
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['bigint'];
  notification_body?: Maybe<Scalars['String']>;
  /** An array relationship */
  notification_read_users: Array<Notification_Read_User>;
  /** An aggregate relationship */
  notification_read_users_aggregate: Notification_Read_User_Aggregate;
  notification_title?: Maybe<Scalars['String']>;
};


/** columns and relationships of "notification" */
export type NotificationNotification_Read_UsersArgs = {
  distinct_on?: InputMaybe<Array<Notification_Read_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notification_Read_User_Order_By>>;
  where?: InputMaybe<Notification_Read_User_Bool_Exp>;
};


/** columns and relationships of "notification" */
export type NotificationNotification_Read_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notification_Read_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notification_Read_User_Order_By>>;
  where?: InputMaybe<Notification_Read_User_Bool_Exp>;
};

/** aggregated selection of "notification" */
export type Notification_Aggregate = {
  __typename?: 'notification_aggregate';
  aggregate?: Maybe<Notification_Aggregate_Fields>;
  nodes: Array<Notification>;
};

/** aggregate fields of "notification" */
export type Notification_Aggregate_Fields = {
  __typename?: 'notification_aggregate_fields';
  avg?: Maybe<Notification_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Notification_Max_Fields>;
  min?: Maybe<Notification_Min_Fields>;
  stddev?: Maybe<Notification_Stddev_Fields>;
  stddev_pop?: Maybe<Notification_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Notification_Stddev_Samp_Fields>;
  sum?: Maybe<Notification_Sum_Fields>;
  var_pop?: Maybe<Notification_Var_Pop_Fields>;
  var_samp?: Maybe<Notification_Var_Samp_Fields>;
  variance?: Maybe<Notification_Variance_Fields>;
};


/** aggregate fields of "notification" */
export type Notification_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Notification_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Notification_Avg_Fields = {
  __typename?: 'notification_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "notification". All fields are combined with a logical 'AND'. */
export type Notification_Bool_Exp = {
  _and?: InputMaybe<Array<Notification_Bool_Exp>>;
  _not?: InputMaybe<Notification_Bool_Exp>;
  _or?: InputMaybe<Array<Notification_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  notification_body?: InputMaybe<String_Comparison_Exp>;
  notification_read_users?: InputMaybe<Notification_Read_User_Bool_Exp>;
  notification_title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "notification" */
export enum Notification_Constraint {
  /** unique or primary key constraint */
  NotificationPkey = 'notification_pkey'
}

/** input type for incrementing numeric columns in table "notification" */
export type Notification_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "notification" */
export type Notification_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  notification_body?: InputMaybe<Scalars['String']>;
  notification_read_users?: InputMaybe<Notification_Read_User_Arr_Rel_Insert_Input>;
  notification_title?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Notification_Max_Fields = {
  __typename?: 'notification_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  notification_body?: Maybe<Scalars['String']>;
  notification_title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Notification_Min_Fields = {
  __typename?: 'notification_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  notification_body?: Maybe<Scalars['String']>;
  notification_title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "notification" */
export type Notification_Mutation_Response = {
  __typename?: 'notification_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Notification>;
};

/** on_conflict condition type for table "notification" */
export type Notification_On_Conflict = {
  constraint: Notification_Constraint;
  update_columns?: Array<Notification_Update_Column>;
  where?: InputMaybe<Notification_Bool_Exp>;
};

/** Ordering options when selecting data from "notification". */
export type Notification_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  notification_body?: InputMaybe<Order_By>;
  notification_read_users_aggregate?: InputMaybe<Notification_Read_User_Aggregate_Order_By>;
  notification_title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: notification */
export type Notification_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/**
 * Map of notification that has been read by the user
 *
 *
 * columns and relationships of "notification_read_user"
 *
 */
export type Notification_Read_User = {
  __typename?: 'notification_read_user';
  id: Scalars['bigint'];
  notification_id: Scalars['Int'];
  user_id: Scalars['uuid'];
};

/** aggregated selection of "notification_read_user" */
export type Notification_Read_User_Aggregate = {
  __typename?: 'notification_read_user_aggregate';
  aggregate?: Maybe<Notification_Read_User_Aggregate_Fields>;
  nodes: Array<Notification_Read_User>;
};

/** aggregate fields of "notification_read_user" */
export type Notification_Read_User_Aggregate_Fields = {
  __typename?: 'notification_read_user_aggregate_fields';
  avg?: Maybe<Notification_Read_User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Notification_Read_User_Max_Fields>;
  min?: Maybe<Notification_Read_User_Min_Fields>;
  stddev?: Maybe<Notification_Read_User_Stddev_Fields>;
  stddev_pop?: Maybe<Notification_Read_User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Notification_Read_User_Stddev_Samp_Fields>;
  sum?: Maybe<Notification_Read_User_Sum_Fields>;
  var_pop?: Maybe<Notification_Read_User_Var_Pop_Fields>;
  var_samp?: Maybe<Notification_Read_User_Var_Samp_Fields>;
  variance?: Maybe<Notification_Read_User_Variance_Fields>;
};


/** aggregate fields of "notification_read_user" */
export type Notification_Read_User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Notification_Read_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "notification_read_user" */
export type Notification_Read_User_Aggregate_Order_By = {
  avg?: InputMaybe<Notification_Read_User_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Notification_Read_User_Max_Order_By>;
  min?: InputMaybe<Notification_Read_User_Min_Order_By>;
  stddev?: InputMaybe<Notification_Read_User_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Notification_Read_User_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Notification_Read_User_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Notification_Read_User_Sum_Order_By>;
  var_pop?: InputMaybe<Notification_Read_User_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Notification_Read_User_Var_Samp_Order_By>;
  variance?: InputMaybe<Notification_Read_User_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "notification_read_user" */
export type Notification_Read_User_Arr_Rel_Insert_Input = {
  data: Array<Notification_Read_User_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Notification_Read_User_On_Conflict>;
};

/** aggregate avg on columns */
export type Notification_Read_User_Avg_Fields = {
  __typename?: 'notification_read_user_avg_fields';
  id?: Maybe<Scalars['Float']>;
  notification_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "notification_read_user" */
export type Notification_Read_User_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  notification_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "notification_read_user". All fields are combined with a logical 'AND'. */
export type Notification_Read_User_Bool_Exp = {
  _and?: InputMaybe<Array<Notification_Read_User_Bool_Exp>>;
  _not?: InputMaybe<Notification_Read_User_Bool_Exp>;
  _or?: InputMaybe<Array<Notification_Read_User_Bool_Exp>>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  notification_id?: InputMaybe<Int_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "notification_read_user" */
export enum Notification_Read_User_Constraint {
  /** unique or primary key constraint */
  NotificationReadUserPkey = 'notification_read_user_pkey'
}

/** input type for incrementing numeric columns in table "notification_read_user" */
export type Notification_Read_User_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']>;
  notification_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "notification_read_user" */
export type Notification_Read_User_Insert_Input = {
  id?: InputMaybe<Scalars['bigint']>;
  notification_id?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Notification_Read_User_Max_Fields = {
  __typename?: 'notification_read_user_max_fields';
  id?: Maybe<Scalars['bigint']>;
  notification_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "notification_read_user" */
export type Notification_Read_User_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  notification_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Notification_Read_User_Min_Fields = {
  __typename?: 'notification_read_user_min_fields';
  id?: Maybe<Scalars['bigint']>;
  notification_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "notification_read_user" */
export type Notification_Read_User_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  notification_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "notification_read_user" */
export type Notification_Read_User_Mutation_Response = {
  __typename?: 'notification_read_user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Notification_Read_User>;
};

/** on_conflict condition type for table "notification_read_user" */
export type Notification_Read_User_On_Conflict = {
  constraint: Notification_Read_User_Constraint;
  update_columns?: Array<Notification_Read_User_Update_Column>;
  where?: InputMaybe<Notification_Read_User_Bool_Exp>;
};

/** Ordering options when selecting data from "notification_read_user". */
export type Notification_Read_User_Order_By = {
  id?: InputMaybe<Order_By>;
  notification_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: notification_read_user */
export type Notification_Read_User_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "notification_read_user" */
export enum Notification_Read_User_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  NotificationId = 'notification_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "notification_read_user" */
export type Notification_Read_User_Set_Input = {
  id?: InputMaybe<Scalars['bigint']>;
  notification_id?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Notification_Read_User_Stddev_Fields = {
  __typename?: 'notification_read_user_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  notification_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "notification_read_user" */
export type Notification_Read_User_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  notification_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Notification_Read_User_Stddev_Pop_Fields = {
  __typename?: 'notification_read_user_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  notification_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "notification_read_user" */
export type Notification_Read_User_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  notification_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Notification_Read_User_Stddev_Samp_Fields = {
  __typename?: 'notification_read_user_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  notification_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "notification_read_user" */
export type Notification_Read_User_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  notification_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Notification_Read_User_Sum_Fields = {
  __typename?: 'notification_read_user_sum_fields';
  id?: Maybe<Scalars['bigint']>;
  notification_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "notification_read_user" */
export type Notification_Read_User_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  notification_id?: InputMaybe<Order_By>;
};

/** update columns of table "notification_read_user" */
export enum Notification_Read_User_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  NotificationId = 'notification_id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Notification_Read_User_Var_Pop_Fields = {
  __typename?: 'notification_read_user_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  notification_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "notification_read_user" */
export type Notification_Read_User_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  notification_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Notification_Read_User_Var_Samp_Fields = {
  __typename?: 'notification_read_user_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  notification_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "notification_read_user" */
export type Notification_Read_User_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  notification_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Notification_Read_User_Variance_Fields = {
  __typename?: 'notification_read_user_variance_fields';
  id?: Maybe<Scalars['Float']>;
  notification_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "notification_read_user" */
export type Notification_Read_User_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  notification_id?: InputMaybe<Order_By>;
};

/** select columns of table "notification" */
export enum Notification_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NotificationBody = 'notification_body',
  /** column name */
  NotificationTitle = 'notification_title'
}

/** input type for updating data in table "notification" */
export type Notification_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  notification_body?: InputMaybe<Scalars['String']>;
  notification_title?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Notification_Stddev_Fields = {
  __typename?: 'notification_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Notification_Stddev_Pop_Fields = {
  __typename?: 'notification_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Notification_Stddev_Samp_Fields = {
  __typename?: 'notification_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Notification_Sum_Fields = {
  __typename?: 'notification_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** update columns of table "notification" */
export enum Notification_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NotificationBody = 'notification_body',
  /** column name */
  NotificationTitle = 'notification_title'
}

/** aggregate var_pop on columns */
export type Notification_Var_Pop_Fields = {
  __typename?: 'notification_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Notification_Var_Samp_Fields = {
  __typename?: 'notification_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Notification_Variance_Fields = {
  __typename?: 'notification_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "operational_costs" */
export type Operational_Costs = {
  __typename?: 'operational_costs';
  cost: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  karyawan_name: Scalars['String'];
  reason: Scalars['String'];
  store_id: Scalars['Int'];
};

/** aggregated selection of "operational_costs" */
export type Operational_Costs_Aggregate = {
  __typename?: 'operational_costs_aggregate';
  aggregate?: Maybe<Operational_Costs_Aggregate_Fields>;
  nodes: Array<Operational_Costs>;
};

/** aggregate fields of "operational_costs" */
export type Operational_Costs_Aggregate_Fields = {
  __typename?: 'operational_costs_aggregate_fields';
  avg?: Maybe<Operational_Costs_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Operational_Costs_Max_Fields>;
  min?: Maybe<Operational_Costs_Min_Fields>;
  stddev?: Maybe<Operational_Costs_Stddev_Fields>;
  stddev_pop?: Maybe<Operational_Costs_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Operational_Costs_Stddev_Samp_Fields>;
  sum?: Maybe<Operational_Costs_Sum_Fields>;
  var_pop?: Maybe<Operational_Costs_Var_Pop_Fields>;
  var_samp?: Maybe<Operational_Costs_Var_Samp_Fields>;
  variance?: Maybe<Operational_Costs_Variance_Fields>;
};


/** aggregate fields of "operational_costs" */
export type Operational_Costs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Operational_Costs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Operational_Costs_Avg_Fields = {
  __typename?: 'operational_costs_avg_fields';
  cost?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "operational_costs". All fields are combined with a logical 'AND'. */
export type Operational_Costs_Bool_Exp = {
  _and?: InputMaybe<Array<Operational_Costs_Bool_Exp>>;
  _not?: InputMaybe<Operational_Costs_Bool_Exp>;
  _or?: InputMaybe<Array<Operational_Costs_Bool_Exp>>;
  cost?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  karyawan_name?: InputMaybe<String_Comparison_Exp>;
  reason?: InputMaybe<String_Comparison_Exp>;
  store_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "operational_costs" */
export enum Operational_Costs_Constraint {
  /** unique or primary key constraint */
  OperationalCostsPkey = 'operational_costs_pkey'
}

/** input type for incrementing numeric columns in table "operational_costs" */
export type Operational_Costs_Inc_Input = {
  cost?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  store_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "operational_costs" */
export type Operational_Costs_Insert_Input = {
  cost?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  karyawan_name?: InputMaybe<Scalars['String']>;
  reason?: InputMaybe<Scalars['String']>;
  store_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Operational_Costs_Max_Fields = {
  __typename?: 'operational_costs_max_fields';
  cost?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  karyawan_name?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  store_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Operational_Costs_Min_Fields = {
  __typename?: 'operational_costs_min_fields';
  cost?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  karyawan_name?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  store_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "operational_costs" */
export type Operational_Costs_Mutation_Response = {
  __typename?: 'operational_costs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Operational_Costs>;
};

/** on_conflict condition type for table "operational_costs" */
export type Operational_Costs_On_Conflict = {
  constraint: Operational_Costs_Constraint;
  update_columns?: Array<Operational_Costs_Update_Column>;
  where?: InputMaybe<Operational_Costs_Bool_Exp>;
};

/** Ordering options when selecting data from "operational_costs". */
export type Operational_Costs_Order_By = {
  cost?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  karyawan_name?: InputMaybe<Order_By>;
  reason?: InputMaybe<Order_By>;
  store_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: operational_costs */
export type Operational_Costs_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "operational_costs" */
export enum Operational_Costs_Select_Column {
  /** column name */
  Cost = 'cost',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  KaryawanName = 'karyawan_name',
  /** column name */
  Reason = 'reason',
  /** column name */
  StoreId = 'store_id'
}

/** input type for updating data in table "operational_costs" */
export type Operational_Costs_Set_Input = {
  cost?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  karyawan_name?: InputMaybe<Scalars['String']>;
  reason?: InputMaybe<Scalars['String']>;
  store_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Operational_Costs_Stddev_Fields = {
  __typename?: 'operational_costs_stddev_fields';
  cost?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Operational_Costs_Stddev_Pop_Fields = {
  __typename?: 'operational_costs_stddev_pop_fields';
  cost?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Operational_Costs_Stddev_Samp_Fields = {
  __typename?: 'operational_costs_stddev_samp_fields';
  cost?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Operational_Costs_Sum_Fields = {
  __typename?: 'operational_costs_sum_fields';
  cost?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  store_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "operational_costs" */
export enum Operational_Costs_Update_Column {
  /** column name */
  Cost = 'cost',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  KaryawanName = 'karyawan_name',
  /** column name */
  Reason = 'reason',
  /** column name */
  StoreId = 'store_id'
}

/** aggregate var_pop on columns */
export type Operational_Costs_Var_Pop_Fields = {
  __typename?: 'operational_costs_var_pop_fields';
  cost?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Operational_Costs_Var_Samp_Fields = {
  __typename?: 'operational_costs_var_samp_fields';
  cost?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Operational_Costs_Variance_Fields = {
  __typename?: 'operational_costs_variance_fields';
  cost?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
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

/** columns and relationships of "product_categories" */
export type Product_Categories = {
  __typename?: 'product_categories';
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
};


/** columns and relationships of "product_categories" */
export type Product_CategoriesProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


/** columns and relationships of "product_categories" */
export type Product_CategoriesProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** aggregated selection of "product_categories" */
export type Product_Categories_Aggregate = {
  __typename?: 'product_categories_aggregate';
  aggregate?: Maybe<Product_Categories_Aggregate_Fields>;
  nodes: Array<Product_Categories>;
};

/** aggregate fields of "product_categories" */
export type Product_Categories_Aggregate_Fields = {
  __typename?: 'product_categories_aggregate_fields';
  avg?: Maybe<Product_Categories_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Product_Categories_Max_Fields>;
  min?: Maybe<Product_Categories_Min_Fields>;
  stddev?: Maybe<Product_Categories_Stddev_Fields>;
  stddev_pop?: Maybe<Product_Categories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Product_Categories_Stddev_Samp_Fields>;
  sum?: Maybe<Product_Categories_Sum_Fields>;
  var_pop?: Maybe<Product_Categories_Var_Pop_Fields>;
  var_samp?: Maybe<Product_Categories_Var_Samp_Fields>;
  variance?: Maybe<Product_Categories_Variance_Fields>;
};


/** aggregate fields of "product_categories" */
export type Product_Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Product_Categories_Avg_Fields = {
  __typename?: 'product_categories_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "product_categories". All fields are combined with a logical 'AND'. */
export type Product_Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Categories_Bool_Exp>>;
  _not?: InputMaybe<Product_Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Categories_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  products?: InputMaybe<Products_Bool_Exp>;
};

/** unique or primary key constraints on table "product_categories" */
export enum Product_Categories_Constraint {
  /** unique or primary key constraint */
  ProductCategoriesPkey = 'product_categories_pkey'
}

/** input type for incrementing numeric columns in table "product_categories" */
export type Product_Categories_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "product_categories" */
export type Product_Categories_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<Products_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Product_Categories_Max_Fields = {
  __typename?: 'product_categories_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Product_Categories_Min_Fields = {
  __typename?: 'product_categories_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "product_categories" */
export type Product_Categories_Mutation_Response = {
  __typename?: 'product_categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Product_Categories>;
};

/** input type for inserting object relation for remote table "product_categories" */
export type Product_Categories_Obj_Rel_Insert_Input = {
  data: Product_Categories_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Product_Categories_On_Conflict>;
};

/** on_conflict condition type for table "product_categories" */
export type Product_Categories_On_Conflict = {
  constraint: Product_Categories_Constraint;
  update_columns?: Array<Product_Categories_Update_Column>;
  where?: InputMaybe<Product_Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "product_categories". */
export type Product_Categories_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  products_aggregate?: InputMaybe<Products_Aggregate_Order_By>;
};

/** primary key columns input for table: product_categories */
export type Product_Categories_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "product_categories" */
export enum Product_Categories_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "product_categories" */
export type Product_Categories_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Product_Categories_Stddev_Fields = {
  __typename?: 'product_categories_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Product_Categories_Stddev_Pop_Fields = {
  __typename?: 'product_categories_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Product_Categories_Stddev_Samp_Fields = {
  __typename?: 'product_categories_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Product_Categories_Sum_Fields = {
  __typename?: 'product_categories_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "product_categories" */
export enum Product_Categories_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Product_Categories_Var_Pop_Fields = {
  __typename?: 'product_categories_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Product_Categories_Var_Samp_Fields = {
  __typename?: 'product_categories_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Product_Categories_Variance_Fields = {
  __typename?: 'product_categories_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "products" */
export type Products = {
  __typename?: 'products';
  capital_price: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  discount: Scalars['Int'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  photo_id?: Maybe<Scalars['String']>;
  /** An object relationship */
  product_category: Product_Categories;
  product_category_id: Scalars['Int'];
  selling_price: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "products" */
export type Products_Aggregate = {
  __typename?: 'products_aggregate';
  aggregate?: Maybe<Products_Aggregate_Fields>;
  nodes: Array<Products>;
};

/** aggregate fields of "products" */
export type Products_Aggregate_Fields = {
  __typename?: 'products_aggregate_fields';
  avg?: Maybe<Products_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Products_Max_Fields>;
  min?: Maybe<Products_Min_Fields>;
  stddev?: Maybe<Products_Stddev_Fields>;
  stddev_pop?: Maybe<Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Products_Stddev_Samp_Fields>;
  sum?: Maybe<Products_Sum_Fields>;
  var_pop?: Maybe<Products_Var_Pop_Fields>;
  var_samp?: Maybe<Products_Var_Samp_Fields>;
  variance?: Maybe<Products_Variance_Fields>;
};


/** aggregate fields of "products" */
export type Products_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "products" */
export type Products_Aggregate_Order_By = {
  avg?: InputMaybe<Products_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Products_Max_Order_By>;
  min?: InputMaybe<Products_Min_Order_By>;
  stddev?: InputMaybe<Products_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Products_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Products_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Products_Sum_Order_By>;
  var_pop?: InputMaybe<Products_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Products_Var_Samp_Order_By>;
  variance?: InputMaybe<Products_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "products" */
export type Products_Arr_Rel_Insert_Input = {
  data: Array<Products_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Products_On_Conflict>;
};

/** aggregate avg on columns */
export type Products_Avg_Fields = {
  __typename?: 'products_avg_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  product_category_id?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "products" */
export type Products_Avg_Order_By = {
  capital_price?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  product_category_id?: InputMaybe<Order_By>;
  selling_price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  _and?: InputMaybe<Array<Products_Bool_Exp>>;
  _not?: InputMaybe<Products_Bool_Exp>;
  _or?: InputMaybe<Array<Products_Bool_Exp>>;
  capital_price?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  discount?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  photo_id?: InputMaybe<String_Comparison_Exp>;
  product_category?: InputMaybe<Product_Categories_Bool_Exp>;
  product_category_id?: InputMaybe<Int_Comparison_Exp>;
  selling_price?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "products" */
export enum Products_Constraint {
  /** unique or primary key constraint */
  ProductsPkey = 'products_pkey'
}

/** input type for incrementing numeric columns in table "products" */
export type Products_Inc_Input = {
  capital_price?: InputMaybe<Scalars['Int']>;
  discount?: InputMaybe<Scalars['Int']>;
  product_category_id?: InputMaybe<Scalars['Int']>;
  selling_price?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "products" */
export type Products_Insert_Input = {
  capital_price?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  discount?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  photo_id?: InputMaybe<Scalars['String']>;
  product_category?: InputMaybe<Product_Categories_Obj_Rel_Insert_Input>;
  product_category_id?: InputMaybe<Scalars['Int']>;
  selling_price?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Products_Max_Fields = {
  __typename?: 'products_max_fields';
  capital_price?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  discount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  photo_id?: Maybe<Scalars['String']>;
  product_category_id?: Maybe<Scalars['Int']>;
  selling_price?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "products" */
export type Products_Max_Order_By = {
  capital_price?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  photo_id?: InputMaybe<Order_By>;
  product_category_id?: InputMaybe<Order_By>;
  selling_price?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Products_Min_Fields = {
  __typename?: 'products_min_fields';
  capital_price?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  discount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  photo_id?: Maybe<Scalars['String']>;
  product_category_id?: Maybe<Scalars['Int']>;
  selling_price?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "products" */
export type Products_Min_Order_By = {
  capital_price?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  photo_id?: InputMaybe<Order_By>;
  product_category_id?: InputMaybe<Order_By>;
  selling_price?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "products" */
export type Products_Mutation_Response = {
  __typename?: 'products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Products>;
};

/** input type for inserting object relation for remote table "products" */
export type Products_Obj_Rel_Insert_Input = {
  data: Products_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Products_On_Conflict>;
};

/** on_conflict condition type for table "products" */
export type Products_On_Conflict = {
  constraint: Products_Constraint;
  update_columns?: Array<Products_Update_Column>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** Ordering options when selecting data from "products". */
export type Products_Order_By = {
  capital_price?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  photo_id?: InputMaybe<Order_By>;
  product_category?: InputMaybe<Product_Categories_Order_By>;
  product_category_id?: InputMaybe<Order_By>;
  selling_price?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: products */
export type Products_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "products" */
export enum Products_Select_Column {
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
  PhotoId = 'photo_id',
  /** column name */
  ProductCategoryId = 'product_category_id',
  /** column name */
  SellingPrice = 'selling_price',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "products" */
export type Products_Set_Input = {
  capital_price?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  discount?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  photo_id?: InputMaybe<Scalars['String']>;
  product_category_id?: InputMaybe<Scalars['Int']>;
  selling_price?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Products_Stddev_Fields = {
  __typename?: 'products_stddev_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  product_category_id?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "products" */
export type Products_Stddev_Order_By = {
  capital_price?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  product_category_id?: InputMaybe<Order_By>;
  selling_price?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Products_Stddev_Pop_Fields = {
  __typename?: 'products_stddev_pop_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  product_category_id?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "products" */
export type Products_Stddev_Pop_Order_By = {
  capital_price?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  product_category_id?: InputMaybe<Order_By>;
  selling_price?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Products_Stddev_Samp_Fields = {
  __typename?: 'products_stddev_samp_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  product_category_id?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "products" */
export type Products_Stddev_Samp_Order_By = {
  capital_price?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  product_category_id?: InputMaybe<Order_By>;
  selling_price?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Products_Sum_Fields = {
  __typename?: 'products_sum_fields';
  capital_price?: Maybe<Scalars['Int']>;
  discount?: Maybe<Scalars['Int']>;
  product_category_id?: Maybe<Scalars['Int']>;
  selling_price?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "products" */
export type Products_Sum_Order_By = {
  capital_price?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  product_category_id?: InputMaybe<Order_By>;
  selling_price?: InputMaybe<Order_By>;
};

/** update columns of table "products" */
export enum Products_Update_Column {
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
  PhotoId = 'photo_id',
  /** column name */
  ProductCategoryId = 'product_category_id',
  /** column name */
  SellingPrice = 'selling_price',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Products_Var_Pop_Fields = {
  __typename?: 'products_var_pop_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  product_category_id?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "products" */
export type Products_Var_Pop_Order_By = {
  capital_price?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  product_category_id?: InputMaybe<Order_By>;
  selling_price?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Products_Var_Samp_Fields = {
  __typename?: 'products_var_samp_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  product_category_id?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "products" */
export type Products_Var_Samp_Order_By = {
  capital_price?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  product_category_id?: InputMaybe<Order_By>;
  selling_price?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Products_Variance_Fields = {
  __typename?: 'products_variance_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  product_category_id?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "products" */
export type Products_Variance_Order_By = {
  capital_price?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  product_category_id?: InputMaybe<Order_By>;
  selling_price?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  Dashboard_GetDashboardData?: Maybe<Dashboard_GetDashboardDataOutput>;
  Whatsapp_GetAuthStatus?: Maybe<Whatsapp_GetAuthStatusOutput>;
  /** fetch data from the table: "active_fcm_tokens" */
  active_fcm_tokens: Array<Active_Fcm_Tokens>;
  /** fetch aggregated fields from the table: "active_fcm_tokens" */
  active_fcm_tokens_aggregate: Active_Fcm_Tokens_Aggregate;
  /** fetch data from the table: "active_fcm_tokens" using primary key columns */
  active_fcm_tokens_by_pk?: Maybe<Active_Fcm_Tokens>;
  /** fetch data from the table: "attendance" */
  attendance: Array<Attendance>;
  /** fetch aggregated fields from the table: "attendance" */
  attendance_aggregate: Attendance_Aggregate;
  /** fetch data from the table: "attendance" using primary key columns */
  attendance_by_pk?: Maybe<Attendance>;
  /** fetch data from the table: "attendance_type_enum" */
  attendance_type_enum: Array<Attendance_Type_Enum>;
  /** fetch aggregated fields from the table: "attendance_type_enum" */
  attendance_type_enum_aggregate: Attendance_Type_Enum_Aggregate;
  /** fetch data from the table: "attendance_type_enum" using primary key columns */
  attendance_type_enum_by_pk?: Maybe<Attendance_Type_Enum>;
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customers_aggregate: Customers_Aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** fetch data from the table: "storage.files" */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
  /** An array relationship */
  inventory_product_variants: Array<Inventory_Product_Variants>;
  /** An aggregate relationship */
  inventory_product_variants_aggregate: Inventory_Product_Variants_Aggregate;
  /** fetch data from the table: "inventory_product_variants" using primary key columns */
  inventory_product_variants_by_pk?: Maybe<Inventory_Product_Variants>;
  /** An array relationship */
  inventory_products: Array<Inventory_Products>;
  /** An aggregate relationship */
  inventory_products_aggregate: Inventory_Products_Aggregate;
  /** fetch data from the table: "inventory_products" using primary key columns */
  inventory_products_by_pk?: Maybe<Inventory_Products>;
  /** fetch data from the table: "inventory_variants_metadata" */
  inventory_variants_metadata: Array<Inventory_Variants_Metadata>;
  /** fetch aggregated fields from the table: "inventory_variants_metadata" */
  inventory_variants_metadata_aggregate: Inventory_Variants_Metadata_Aggregate;
  /** fetch data from the table: "inventory_variants_metadata" using primary key columns */
  inventory_variants_metadata_by_pk?: Maybe<Inventory_Variants_Metadata>;
  /** fetch data from the table: "notification" */
  notification: Array<Notification>;
  /** fetch aggregated fields from the table: "notification" */
  notification_aggregate: Notification_Aggregate;
  /** fetch data from the table: "notification" using primary key columns */
  notification_by_pk?: Maybe<Notification>;
  /** fetch data from the table: "notification_read_user" */
  notification_read_user: Array<Notification_Read_User>;
  /** fetch aggregated fields from the table: "notification_read_user" */
  notification_read_user_aggregate: Notification_Read_User_Aggregate;
  /** fetch data from the table: "notification_read_user" using primary key columns */
  notification_read_user_by_pk?: Maybe<Notification_Read_User>;
  /** fetch data from the table: "operational_costs" */
  operational_costs: Array<Operational_Costs>;
  /** fetch aggregated fields from the table: "operational_costs" */
  operational_costs_aggregate: Operational_Costs_Aggregate;
  /** fetch data from the table: "operational_costs" using primary key columns */
  operational_costs_by_pk?: Maybe<Operational_Costs>;
  /** fetch data from the table: "product_categories" */
  product_categories: Array<Product_Categories>;
  /** fetch aggregated fields from the table: "product_categories" */
  product_categories_aggregate: Product_Categories_Aggregate;
  /** fetch data from the table: "product_categories" using primary key columns */
  product_categories_by_pk?: Maybe<Product_Categories>;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "stores" */
  stores: Array<Stores>;
  /** fetch aggregated fields from the table: "stores" */
  stores_aggregate: Stores_Aggregate;
  /** fetch data from the table: "stores" using primary key columns */
  stores_by_pk?: Maybe<Stores>;
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>;
  /** fetch aggregated fields from the table: "transaction" */
  transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "transaction" using primary key columns */
  transaction_by_pk?: Maybe<Transaction>;
  /** fetch data from the table: "transaction_items" */
  transaction_items: Array<Transaction_Items>;
  /** An aggregate relationship */
  transaction_items_aggregate: Transaction_Items_Aggregate;
  /** fetch data from the table: "transaction_items" using primary key columns */
  transaction_items_by_pk?: Maybe<Transaction_Items>;
  /** fetch data from the table: "transaction_payment_type_enum" */
  transaction_payment_type_enum: Array<Transaction_Payment_Type_Enum>;
  /** fetch aggregated fields from the table: "transaction_payment_type_enum" */
  transaction_payment_type_enum_aggregate: Transaction_Payment_Type_Enum_Aggregate;
  /** fetch data from the table: "transaction_payment_type_enum" using primary key columns */
  transaction_payment_type_enum_by_pk?: Maybe<Transaction_Payment_Type_Enum>;
  /** fetch data from the table: "transaction_receipt_type_enum" */
  transaction_receipt_type_enum: Array<Transaction_Receipt_Type_Enum>;
  /** fetch aggregated fields from the table: "transaction_receipt_type_enum" */
  transaction_receipt_type_enum_aggregate: Transaction_Receipt_Type_Enum_Aggregate;
  /** fetch data from the table: "transaction_receipt_type_enum" using primary key columns */
  transaction_receipt_type_enum_by_pk?: Maybe<Transaction_Receipt_Type_Enum>;
  /** An array relationship */
  transaction_receipts: Array<Transaction_Receipts>;
  /** An aggregate relationship */
  transaction_receipts_aggregate: Transaction_Receipts_Aggregate;
  /** fetch data from the table: "transaction_receipts" using primary key columns */
  transaction_receipts_by_pk?: Maybe<Transaction_Receipts>;
  /** fetch data from the table: "transaction_status_enum" */
  transaction_status_enum: Array<Transaction_Status_Enum>;
  /** fetch aggregated fields from the table: "transaction_status_enum" */
  transaction_status_enum_aggregate: Transaction_Status_Enum_Aggregate;
  /** fetch data from the table: "transaction_status_enum" using primary key columns */
  transaction_status_enum_by_pk?: Maybe<Transaction_Status_Enum>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
  /** An array relationship */
  users_metadata: Array<Users_Metadata>;
  /** An aggregate relationship */
  users_metadata_aggregate: Users_Metadata_Aggregate;
  /** fetch data from the table: "users_metadata" using primary key columns */
  users_metadata_by_pk?: Maybe<Users_Metadata>;
  /** fetch data from the table: "whatsapp_subscription" */
  whatsapp_subscription: Array<Whatsapp_Subscription>;
  /** fetch aggregated fields from the table: "whatsapp_subscription" */
  whatsapp_subscription_aggregate: Whatsapp_Subscription_Aggregate;
  /** fetch data from the table: "whatsapp_subscription" using primary key columns */
  whatsapp_subscription_by_pk?: Maybe<Whatsapp_Subscription>;
};


export type Query_RootDashboard_GetDashboardDataArgs = {
  mode: TimeMode;
  startDate: Scalars['String'];
  stores: Array<Scalars['Int']>;
  untilDate: Scalars['String'];
};


export type Query_RootActive_Fcm_TokensArgs = {
  distinct_on?: InputMaybe<Array<Active_Fcm_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Active_Fcm_Tokens_Order_By>>;
  where?: InputMaybe<Active_Fcm_Tokens_Bool_Exp>;
};


export type Query_RootActive_Fcm_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Active_Fcm_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Active_Fcm_Tokens_Order_By>>;
  where?: InputMaybe<Active_Fcm_Tokens_Bool_Exp>;
};


export type Query_RootActive_Fcm_Tokens_By_PkArgs = {
  fcm_token: Scalars['String'];
};


export type Query_RootAttendanceArgs = {
  distinct_on?: InputMaybe<Array<Attendance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Attendance_Order_By>>;
  where?: InputMaybe<Attendance_Bool_Exp>;
};


export type Query_RootAttendance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Attendance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Attendance_Order_By>>;
  where?: InputMaybe<Attendance_Bool_Exp>;
};


export type Query_RootAttendance_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootAttendance_Type_EnumArgs = {
  distinct_on?: InputMaybe<Array<Attendance_Type_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Attendance_Type_Enum_Order_By>>;
  where?: InputMaybe<Attendance_Type_Enum_Bool_Exp>;
};


export type Query_RootAttendance_Type_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Attendance_Type_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Attendance_Type_Enum_Order_By>>;
  where?: InputMaybe<Attendance_Type_Enum_Bool_Exp>;
};


export type Query_RootAttendance_Type_Enum_By_PkArgs = {
  attendance_type: Scalars['String'];
};


export type Query_RootAuthProviderArgs = {
  id: Scalars['String'];
};


export type Query_RootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


export type Query_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRoleArgs = {
  role: Scalars['String'];
};


export type Query_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootBucketArgs = {
  id: Scalars['String'];
};


export type Query_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Query_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Query_RootCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Query_RootCustomers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Query_RootCustomers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFileArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootInventory_Product_VariantsArgs = {
  distinct_on?: InputMaybe<Array<Inventory_Product_Variants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Inventory_Product_Variants_Order_By>>;
  where?: InputMaybe<Inventory_Product_Variants_Bool_Exp>;
};


export type Query_RootInventory_Product_Variants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Inventory_Product_Variants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Inventory_Product_Variants_Order_By>>;
  where?: InputMaybe<Inventory_Product_Variants_Bool_Exp>;
};


export type Query_RootInventory_Product_Variants_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootInventory_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Inventory_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Inventory_Products_Order_By>>;
  where?: InputMaybe<Inventory_Products_Bool_Exp>;
};


export type Query_RootInventory_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Inventory_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Inventory_Products_Order_By>>;
  where?: InputMaybe<Inventory_Products_Bool_Exp>;
};


export type Query_RootInventory_Products_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootInventory_Variants_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Inventory_Variants_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Inventory_Variants_Metadata_Order_By>>;
  where?: InputMaybe<Inventory_Variants_Metadata_Bool_Exp>;
};


export type Query_RootInventory_Variants_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Inventory_Variants_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Inventory_Variants_Metadata_Order_By>>;
  where?: InputMaybe<Inventory_Variants_Metadata_Bool_Exp>;
};


export type Query_RootInventory_Variants_Metadata_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootNotificationArgs = {
  distinct_on?: InputMaybe<Array<Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notification_Order_By>>;
  where?: InputMaybe<Notification_Bool_Exp>;
};


export type Query_RootNotification_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notification_Order_By>>;
  where?: InputMaybe<Notification_Bool_Exp>;
};


export type Query_RootNotification_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootNotification_Read_UserArgs = {
  distinct_on?: InputMaybe<Array<Notification_Read_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notification_Read_User_Order_By>>;
  where?: InputMaybe<Notification_Read_User_Bool_Exp>;
};


export type Query_RootNotification_Read_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notification_Read_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notification_Read_User_Order_By>>;
  where?: InputMaybe<Notification_Read_User_Bool_Exp>;
};


export type Query_RootNotification_Read_User_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootOperational_CostsArgs = {
  distinct_on?: InputMaybe<Array<Operational_Costs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Operational_Costs_Order_By>>;
  where?: InputMaybe<Operational_Costs_Bool_Exp>;
};


export type Query_RootOperational_Costs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operational_Costs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Operational_Costs_Order_By>>;
  where?: InputMaybe<Operational_Costs_Bool_Exp>;
};


export type Query_RootOperational_Costs_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootProduct_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Product_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Product_Categories_Order_By>>;
  where?: InputMaybe<Product_Categories_Bool_Exp>;
};


export type Query_RootProduct_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Product_Categories_Order_By>>;
  where?: InputMaybe<Product_Categories_Bool_Exp>;
};


export type Query_RootProduct_Categories_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProducts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootStoresArgs = {
  distinct_on?: InputMaybe<Array<Stores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stores_Order_By>>;
  where?: InputMaybe<Stores_Bool_Exp>;
};


export type Query_RootStores_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stores_Order_By>>;
  where?: InputMaybe<Stores_Bool_Exp>;
};


export type Query_RootStores_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTransactionArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Query_RootTransaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Query_RootTransaction_By_PkArgs = {
  invoice_number: Scalars['String'];
};


export type Query_RootTransaction_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Items_Order_By>>;
  where?: InputMaybe<Transaction_Items_Bool_Exp>;
};


export type Query_RootTransaction_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Items_Order_By>>;
  where?: InputMaybe<Transaction_Items_Bool_Exp>;
};


export type Query_RootTransaction_Items_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTransaction_Payment_Type_EnumArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Payment_Type_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Payment_Type_Enum_Order_By>>;
  where?: InputMaybe<Transaction_Payment_Type_Enum_Bool_Exp>;
};


export type Query_RootTransaction_Payment_Type_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Payment_Type_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Payment_Type_Enum_Order_By>>;
  where?: InputMaybe<Transaction_Payment_Type_Enum_Bool_Exp>;
};


export type Query_RootTransaction_Payment_Type_Enum_By_PkArgs = {
  payment_type: Scalars['String'];
};


export type Query_RootTransaction_Receipt_Type_EnumArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Receipt_Type_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Receipt_Type_Enum_Order_By>>;
  where?: InputMaybe<Transaction_Receipt_Type_Enum_Bool_Exp>;
};


export type Query_RootTransaction_Receipt_Type_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Receipt_Type_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Receipt_Type_Enum_Order_By>>;
  where?: InputMaybe<Transaction_Receipt_Type_Enum_Bool_Exp>;
};


export type Query_RootTransaction_Receipt_Type_Enum_By_PkArgs = {
  receipt_type: Scalars['String'];
};


export type Query_RootTransaction_ReceiptsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Receipts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Receipts_Order_By>>;
  where?: InputMaybe<Transaction_Receipts_Bool_Exp>;
};


export type Query_RootTransaction_Receipts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Receipts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Receipts_Order_By>>;
  where?: InputMaybe<Transaction_Receipts_Bool_Exp>;
};


export type Query_RootTransaction_Receipts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTransaction_Status_EnumArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Status_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Status_Enum_Order_By>>;
  where?: InputMaybe<Transaction_Status_Enum_Bool_Exp>;
};


export type Query_RootTransaction_Status_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Status_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Status_Enum_Order_By>>;
  where?: InputMaybe<Transaction_Status_Enum_Bool_Exp>;
};


export type Query_RootTransaction_Status_Enum_By_PkArgs = {
  transaction_status: Scalars['String'];
};


export type Query_RootUserArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Users_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Metadata_Order_By>>;
  where?: InputMaybe<Users_Metadata_Bool_Exp>;
};


export type Query_RootUsers_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Metadata_Order_By>>;
  where?: InputMaybe<Users_Metadata_Bool_Exp>;
};


export type Query_RootUsers_Metadata_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootWhatsapp_SubscriptionArgs = {
  distinct_on?: InputMaybe<Array<Whatsapp_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Whatsapp_Subscription_Order_By>>;
  where?: InputMaybe<Whatsapp_Subscription_Bool_Exp>;
};


export type Query_RootWhatsapp_Subscription_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Whatsapp_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Whatsapp_Subscription_Order_By>>;
  where?: InputMaybe<Whatsapp_Subscription_Bool_Exp>;
};


export type Query_RootWhatsapp_Subscription_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "stores" */
export type Stores = {
  __typename?: 'stores';
  address: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An array relationship */
  inventory_products: Array<Inventory_Products>;
  /** An aggregate relationship */
  inventory_products_aggregate: Inventory_Products_Aggregate;
  is_record_attendance: Scalars['Boolean'];
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  name: Scalars['String'];
  /** An array relationship */
  transactions: Array<Transaction>;
  /** An aggregate relationship */
  transactions_aggregate: Transaction_Aggregate;
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  users_metadata: Array<Users_Metadata>;
  /** An aggregate relationship */
  users_metadata_aggregate: Users_Metadata_Aggregate;
  working_hour_end?: Maybe<Scalars['timestamptz']>;
  working_hour_start?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "stores" */
export type StoresInventory_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Inventory_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Inventory_Products_Order_By>>;
  where?: InputMaybe<Inventory_Products_Bool_Exp>;
};


/** columns and relationships of "stores" */
export type StoresInventory_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Inventory_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Inventory_Products_Order_By>>;
  where?: InputMaybe<Inventory_Products_Bool_Exp>;
};


/** columns and relationships of "stores" */
export type StoresTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


/** columns and relationships of "stores" */
export type StoresTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


/** columns and relationships of "stores" */
export type StoresUsers_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Users_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Metadata_Order_By>>;
  where?: InputMaybe<Users_Metadata_Bool_Exp>;
};


/** columns and relationships of "stores" */
export type StoresUsers_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Metadata_Order_By>>;
  where?: InputMaybe<Users_Metadata_Bool_Exp>;
};

/** aggregated selection of "stores" */
export type Stores_Aggregate = {
  __typename?: 'stores_aggregate';
  aggregate?: Maybe<Stores_Aggregate_Fields>;
  nodes: Array<Stores>;
};

/** aggregate fields of "stores" */
export type Stores_Aggregate_Fields = {
  __typename?: 'stores_aggregate_fields';
  avg?: Maybe<Stores_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Stores_Max_Fields>;
  min?: Maybe<Stores_Min_Fields>;
  stddev?: Maybe<Stores_Stddev_Fields>;
  stddev_pop?: Maybe<Stores_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Stores_Stddev_Samp_Fields>;
  sum?: Maybe<Stores_Sum_Fields>;
  var_pop?: Maybe<Stores_Var_Pop_Fields>;
  var_samp?: Maybe<Stores_Var_Samp_Fields>;
  variance?: Maybe<Stores_Variance_Fields>;
};


/** aggregate fields of "stores" */
export type Stores_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Stores_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Stores_Avg_Fields = {
  __typename?: 'stores_avg_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "stores". All fields are combined with a logical 'AND'. */
export type Stores_Bool_Exp = {
  _and?: InputMaybe<Array<Stores_Bool_Exp>>;
  _not?: InputMaybe<Stores_Bool_Exp>;
  _or?: InputMaybe<Array<Stores_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  inventory_products?: InputMaybe<Inventory_Products_Bool_Exp>;
  is_record_attendance?: InputMaybe<Boolean_Comparison_Exp>;
  latitude?: InputMaybe<Float8_Comparison_Exp>;
  longitude?: InputMaybe<Float8_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  transactions?: InputMaybe<Transaction_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  users_metadata?: InputMaybe<Users_Metadata_Bool_Exp>;
  working_hour_end?: InputMaybe<Timestamptz_Comparison_Exp>;
  working_hour_start?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "stores" */
export enum Stores_Constraint {
  /** unique or primary key constraint */
  StoresNameKey = 'stores_name_key',
  /** unique or primary key constraint */
  StoresPkey = 'stores_pkey'
}

/** input type for incrementing numeric columns in table "stores" */
export type Stores_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  latitude?: InputMaybe<Scalars['float8']>;
  longitude?: InputMaybe<Scalars['float8']>;
};

/** input type for inserting data into table "stores" */
export type Stores_Insert_Input = {
  address?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  inventory_products?: InputMaybe<Inventory_Products_Arr_Rel_Insert_Input>;
  is_record_attendance?: InputMaybe<Scalars['Boolean']>;
  latitude?: InputMaybe<Scalars['float8']>;
  longitude?: InputMaybe<Scalars['float8']>;
  name?: InputMaybe<Scalars['String']>;
  transactions?: InputMaybe<Transaction_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  users_metadata?: InputMaybe<Users_Metadata_Arr_Rel_Insert_Input>;
  working_hour_end?: InputMaybe<Scalars['timestamptz']>;
  working_hour_start?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Stores_Max_Fields = {
  __typename?: 'stores_max_fields';
  address?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  working_hour_end?: Maybe<Scalars['timestamptz']>;
  working_hour_start?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Stores_Min_Fields = {
  __typename?: 'stores_min_fields';
  address?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  working_hour_end?: Maybe<Scalars['timestamptz']>;
  working_hour_start?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "stores" */
export type Stores_Mutation_Response = {
  __typename?: 'stores_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Stores>;
};

/** input type for inserting object relation for remote table "stores" */
export type Stores_Obj_Rel_Insert_Input = {
  data: Stores_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Stores_On_Conflict>;
};

/** on_conflict condition type for table "stores" */
export type Stores_On_Conflict = {
  constraint: Stores_Constraint;
  update_columns?: Array<Stores_Update_Column>;
  where?: InputMaybe<Stores_Bool_Exp>;
};

/** Ordering options when selecting data from "stores". */
export type Stores_Order_By = {
  address?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inventory_products_aggregate?: InputMaybe<Inventory_Products_Aggregate_Order_By>;
  is_record_attendance?: InputMaybe<Order_By>;
  latitude?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  transactions_aggregate?: InputMaybe<Transaction_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  users_metadata_aggregate?: InputMaybe<Users_Metadata_Aggregate_Order_By>;
  working_hour_end?: InputMaybe<Order_By>;
  working_hour_start?: InputMaybe<Order_By>;
};

/** primary key columns input for table: stores */
export type Stores_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "stores" */
export enum Stores_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsRecordAttendance = 'is_record_attendance',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WorkingHourEnd = 'working_hour_end',
  /** column name */
  WorkingHourStart = 'working_hour_start'
}

/** input type for updating data in table "stores" */
export type Stores_Set_Input = {
  address?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  is_record_attendance?: InputMaybe<Scalars['Boolean']>;
  latitude?: InputMaybe<Scalars['float8']>;
  longitude?: InputMaybe<Scalars['float8']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  working_hour_end?: InputMaybe<Scalars['timestamptz']>;
  working_hour_start?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Stores_Stddev_Fields = {
  __typename?: 'stores_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Stores_Stddev_Pop_Fields = {
  __typename?: 'stores_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Stores_Stddev_Samp_Fields = {
  __typename?: 'stores_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Stores_Sum_Fields = {
  __typename?: 'stores_sum_fields';
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
};

/** update columns of table "stores" */
export enum Stores_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsRecordAttendance = 'is_record_attendance',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WorkingHourEnd = 'working_hour_end',
  /** column name */
  WorkingHourStart = 'working_hour_start'
}

/** aggregate var_pop on columns */
export type Stores_Var_Pop_Fields = {
  __typename?: 'stores_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Stores_Var_Samp_Fields = {
  __typename?: 'stores_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Stores_Variance_Fields = {
  __typename?: 'stores_variance_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "active_fcm_tokens" */
  active_fcm_tokens: Array<Active_Fcm_Tokens>;
  /** fetch aggregated fields from the table: "active_fcm_tokens" */
  active_fcm_tokens_aggregate: Active_Fcm_Tokens_Aggregate;
  /** fetch data from the table: "active_fcm_tokens" using primary key columns */
  active_fcm_tokens_by_pk?: Maybe<Active_Fcm_Tokens>;
  /** fetch data from the table: "attendance" */
  attendance: Array<Attendance>;
  /** fetch aggregated fields from the table: "attendance" */
  attendance_aggregate: Attendance_Aggregate;
  /** fetch data from the table: "attendance" using primary key columns */
  attendance_by_pk?: Maybe<Attendance>;
  /** fetch data from the table: "attendance_type_enum" */
  attendance_type_enum: Array<Attendance_Type_Enum>;
  /** fetch aggregated fields from the table: "attendance_type_enum" */
  attendance_type_enum_aggregate: Attendance_Type_Enum_Aggregate;
  /** fetch data from the table: "attendance_type_enum" using primary key columns */
  attendance_type_enum_by_pk?: Maybe<Attendance_Type_Enum>;
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customers_aggregate: Customers_Aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** fetch data from the table: "storage.files" */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
  /** An array relationship */
  inventory_product_variants: Array<Inventory_Product_Variants>;
  /** An aggregate relationship */
  inventory_product_variants_aggregate: Inventory_Product_Variants_Aggregate;
  /** fetch data from the table: "inventory_product_variants" using primary key columns */
  inventory_product_variants_by_pk?: Maybe<Inventory_Product_Variants>;
  /** An array relationship */
  inventory_products: Array<Inventory_Products>;
  /** An aggregate relationship */
  inventory_products_aggregate: Inventory_Products_Aggregate;
  /** fetch data from the table: "inventory_products" using primary key columns */
  inventory_products_by_pk?: Maybe<Inventory_Products>;
  /** fetch data from the table: "inventory_variants_metadata" */
  inventory_variants_metadata: Array<Inventory_Variants_Metadata>;
  /** fetch aggregated fields from the table: "inventory_variants_metadata" */
  inventory_variants_metadata_aggregate: Inventory_Variants_Metadata_Aggregate;
  /** fetch data from the table: "inventory_variants_metadata" using primary key columns */
  inventory_variants_metadata_by_pk?: Maybe<Inventory_Variants_Metadata>;
  /** fetch data from the table: "notification" */
  notification: Array<Notification>;
  /** fetch aggregated fields from the table: "notification" */
  notification_aggregate: Notification_Aggregate;
  /** fetch data from the table: "notification" using primary key columns */
  notification_by_pk?: Maybe<Notification>;
  /** fetch data from the table: "notification_read_user" */
  notification_read_user: Array<Notification_Read_User>;
  /** fetch aggregated fields from the table: "notification_read_user" */
  notification_read_user_aggregate: Notification_Read_User_Aggregate;
  /** fetch data from the table: "notification_read_user" using primary key columns */
  notification_read_user_by_pk?: Maybe<Notification_Read_User>;
  /** fetch data from the table: "operational_costs" */
  operational_costs: Array<Operational_Costs>;
  /** fetch aggregated fields from the table: "operational_costs" */
  operational_costs_aggregate: Operational_Costs_Aggregate;
  /** fetch data from the table: "operational_costs" using primary key columns */
  operational_costs_by_pk?: Maybe<Operational_Costs>;
  /** fetch data from the table: "product_categories" */
  product_categories: Array<Product_Categories>;
  /** fetch aggregated fields from the table: "product_categories" */
  product_categories_aggregate: Product_Categories_Aggregate;
  /** fetch data from the table: "product_categories" using primary key columns */
  product_categories_by_pk?: Maybe<Product_Categories>;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "stores" */
  stores: Array<Stores>;
  /** fetch aggregated fields from the table: "stores" */
  stores_aggregate: Stores_Aggregate;
  /** fetch data from the table: "stores" using primary key columns */
  stores_by_pk?: Maybe<Stores>;
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>;
  /** fetch aggregated fields from the table: "transaction" */
  transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "transaction" using primary key columns */
  transaction_by_pk?: Maybe<Transaction>;
  /** fetch data from the table: "transaction_items" */
  transaction_items: Array<Transaction_Items>;
  /** An aggregate relationship */
  transaction_items_aggregate: Transaction_Items_Aggregate;
  /** fetch data from the table: "transaction_items" using primary key columns */
  transaction_items_by_pk?: Maybe<Transaction_Items>;
  /** fetch data from the table: "transaction_payment_type_enum" */
  transaction_payment_type_enum: Array<Transaction_Payment_Type_Enum>;
  /** fetch aggregated fields from the table: "transaction_payment_type_enum" */
  transaction_payment_type_enum_aggregate: Transaction_Payment_Type_Enum_Aggregate;
  /** fetch data from the table: "transaction_payment_type_enum" using primary key columns */
  transaction_payment_type_enum_by_pk?: Maybe<Transaction_Payment_Type_Enum>;
  /** fetch data from the table: "transaction_receipt_type_enum" */
  transaction_receipt_type_enum: Array<Transaction_Receipt_Type_Enum>;
  /** fetch aggregated fields from the table: "transaction_receipt_type_enum" */
  transaction_receipt_type_enum_aggregate: Transaction_Receipt_Type_Enum_Aggregate;
  /** fetch data from the table: "transaction_receipt_type_enum" using primary key columns */
  transaction_receipt_type_enum_by_pk?: Maybe<Transaction_Receipt_Type_Enum>;
  /** An array relationship */
  transaction_receipts: Array<Transaction_Receipts>;
  /** An aggregate relationship */
  transaction_receipts_aggregate: Transaction_Receipts_Aggregate;
  /** fetch data from the table: "transaction_receipts" using primary key columns */
  transaction_receipts_by_pk?: Maybe<Transaction_Receipts>;
  /** fetch data from the table: "transaction_status_enum" */
  transaction_status_enum: Array<Transaction_Status_Enum>;
  /** fetch aggregated fields from the table: "transaction_status_enum" */
  transaction_status_enum_aggregate: Transaction_Status_Enum_Aggregate;
  /** fetch data from the table: "transaction_status_enum" using primary key columns */
  transaction_status_enum_by_pk?: Maybe<Transaction_Status_Enum>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
  /** An array relationship */
  users_metadata: Array<Users_Metadata>;
  /** An aggregate relationship */
  users_metadata_aggregate: Users_Metadata_Aggregate;
  /** fetch data from the table: "users_metadata" using primary key columns */
  users_metadata_by_pk?: Maybe<Users_Metadata>;
  /** fetch data from the table: "whatsapp_subscription" */
  whatsapp_subscription: Array<Whatsapp_Subscription>;
  /** fetch aggregated fields from the table: "whatsapp_subscription" */
  whatsapp_subscription_aggregate: Whatsapp_Subscription_Aggregate;
  /** fetch data from the table: "whatsapp_subscription" using primary key columns */
  whatsapp_subscription_by_pk?: Maybe<Whatsapp_Subscription>;
};


export type Subscription_RootActive_Fcm_TokensArgs = {
  distinct_on?: InputMaybe<Array<Active_Fcm_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Active_Fcm_Tokens_Order_By>>;
  where?: InputMaybe<Active_Fcm_Tokens_Bool_Exp>;
};


export type Subscription_RootActive_Fcm_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Active_Fcm_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Active_Fcm_Tokens_Order_By>>;
  where?: InputMaybe<Active_Fcm_Tokens_Bool_Exp>;
};


export type Subscription_RootActive_Fcm_Tokens_By_PkArgs = {
  fcm_token: Scalars['String'];
};


export type Subscription_RootAttendanceArgs = {
  distinct_on?: InputMaybe<Array<Attendance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Attendance_Order_By>>;
  where?: InputMaybe<Attendance_Bool_Exp>;
};


export type Subscription_RootAttendance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Attendance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Attendance_Order_By>>;
  where?: InputMaybe<Attendance_Bool_Exp>;
};


export type Subscription_RootAttendance_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootAttendance_Type_EnumArgs = {
  distinct_on?: InputMaybe<Array<Attendance_Type_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Attendance_Type_Enum_Order_By>>;
  where?: InputMaybe<Attendance_Type_Enum_Bool_Exp>;
};


export type Subscription_RootAttendance_Type_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Attendance_Type_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Attendance_Type_Enum_Order_By>>;
  where?: InputMaybe<Attendance_Type_Enum_Bool_Exp>;
};


export type Subscription_RootAttendance_Type_Enum_By_PkArgs = {
  attendance_type: Scalars['String'];
};


export type Subscription_RootAuthProviderArgs = {
  id: Scalars['String'];
};


export type Subscription_RootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


export type Subscription_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRoleArgs = {
  role: Scalars['String'];
};


export type Subscription_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootBucketArgs = {
  id: Scalars['String'];
};


export type Subscription_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Subscription_RootCustomers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Subscription_RootCustomers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFileArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootInventory_Product_VariantsArgs = {
  distinct_on?: InputMaybe<Array<Inventory_Product_Variants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Inventory_Product_Variants_Order_By>>;
  where?: InputMaybe<Inventory_Product_Variants_Bool_Exp>;
};


export type Subscription_RootInventory_Product_Variants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Inventory_Product_Variants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Inventory_Product_Variants_Order_By>>;
  where?: InputMaybe<Inventory_Product_Variants_Bool_Exp>;
};


export type Subscription_RootInventory_Product_Variants_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootInventory_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Inventory_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Inventory_Products_Order_By>>;
  where?: InputMaybe<Inventory_Products_Bool_Exp>;
};


export type Subscription_RootInventory_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Inventory_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Inventory_Products_Order_By>>;
  where?: InputMaybe<Inventory_Products_Bool_Exp>;
};


export type Subscription_RootInventory_Products_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootInventory_Variants_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Inventory_Variants_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Inventory_Variants_Metadata_Order_By>>;
  where?: InputMaybe<Inventory_Variants_Metadata_Bool_Exp>;
};


export type Subscription_RootInventory_Variants_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Inventory_Variants_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Inventory_Variants_Metadata_Order_By>>;
  where?: InputMaybe<Inventory_Variants_Metadata_Bool_Exp>;
};


export type Subscription_RootInventory_Variants_Metadata_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootNotificationArgs = {
  distinct_on?: InputMaybe<Array<Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notification_Order_By>>;
  where?: InputMaybe<Notification_Bool_Exp>;
};


export type Subscription_RootNotification_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notification_Order_By>>;
  where?: InputMaybe<Notification_Bool_Exp>;
};


export type Subscription_RootNotification_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootNotification_Read_UserArgs = {
  distinct_on?: InputMaybe<Array<Notification_Read_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notification_Read_User_Order_By>>;
  where?: InputMaybe<Notification_Read_User_Bool_Exp>;
};


export type Subscription_RootNotification_Read_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notification_Read_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notification_Read_User_Order_By>>;
  where?: InputMaybe<Notification_Read_User_Bool_Exp>;
};


export type Subscription_RootNotification_Read_User_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootOperational_CostsArgs = {
  distinct_on?: InputMaybe<Array<Operational_Costs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Operational_Costs_Order_By>>;
  where?: InputMaybe<Operational_Costs_Bool_Exp>;
};


export type Subscription_RootOperational_Costs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operational_Costs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Operational_Costs_Order_By>>;
  where?: InputMaybe<Operational_Costs_Bool_Exp>;
};


export type Subscription_RootOperational_Costs_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootProduct_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Product_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Product_Categories_Order_By>>;
  where?: InputMaybe<Product_Categories_Bool_Exp>;
};


export type Subscription_RootProduct_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Product_Categories_Order_By>>;
  where?: InputMaybe<Product_Categories_Bool_Exp>;
};


export type Subscription_RootProduct_Categories_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootStoresArgs = {
  distinct_on?: InputMaybe<Array<Stores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stores_Order_By>>;
  where?: InputMaybe<Stores_Bool_Exp>;
};


export type Subscription_RootStores_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stores_Order_By>>;
  where?: InputMaybe<Stores_Bool_Exp>;
};


export type Subscription_RootStores_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTransactionArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootTransaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootTransaction_By_PkArgs = {
  invoice_number: Scalars['String'];
};


export type Subscription_RootTransaction_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Items_Order_By>>;
  where?: InputMaybe<Transaction_Items_Bool_Exp>;
};


export type Subscription_RootTransaction_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Items_Order_By>>;
  where?: InputMaybe<Transaction_Items_Bool_Exp>;
};


export type Subscription_RootTransaction_Items_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTransaction_Payment_Type_EnumArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Payment_Type_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Payment_Type_Enum_Order_By>>;
  where?: InputMaybe<Transaction_Payment_Type_Enum_Bool_Exp>;
};


export type Subscription_RootTransaction_Payment_Type_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Payment_Type_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Payment_Type_Enum_Order_By>>;
  where?: InputMaybe<Transaction_Payment_Type_Enum_Bool_Exp>;
};


export type Subscription_RootTransaction_Payment_Type_Enum_By_PkArgs = {
  payment_type: Scalars['String'];
};


export type Subscription_RootTransaction_Receipt_Type_EnumArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Receipt_Type_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Receipt_Type_Enum_Order_By>>;
  where?: InputMaybe<Transaction_Receipt_Type_Enum_Bool_Exp>;
};


export type Subscription_RootTransaction_Receipt_Type_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Receipt_Type_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Receipt_Type_Enum_Order_By>>;
  where?: InputMaybe<Transaction_Receipt_Type_Enum_Bool_Exp>;
};


export type Subscription_RootTransaction_Receipt_Type_Enum_By_PkArgs = {
  receipt_type: Scalars['String'];
};


export type Subscription_RootTransaction_ReceiptsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Receipts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Receipts_Order_By>>;
  where?: InputMaybe<Transaction_Receipts_Bool_Exp>;
};


export type Subscription_RootTransaction_Receipts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Receipts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Receipts_Order_By>>;
  where?: InputMaybe<Transaction_Receipts_Bool_Exp>;
};


export type Subscription_RootTransaction_Receipts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTransaction_Status_EnumArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Status_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Status_Enum_Order_By>>;
  where?: InputMaybe<Transaction_Status_Enum_Bool_Exp>;
};


export type Subscription_RootTransaction_Status_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Status_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Status_Enum_Order_By>>;
  where?: InputMaybe<Transaction_Status_Enum_Bool_Exp>;
};


export type Subscription_RootTransaction_Status_Enum_By_PkArgs = {
  transaction_status: Scalars['String'];
};


export type Subscription_RootUserArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Users_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Metadata_Order_By>>;
  where?: InputMaybe<Users_Metadata_Bool_Exp>;
};


export type Subscription_RootUsers_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Metadata_Order_By>>;
  where?: InputMaybe<Users_Metadata_Bool_Exp>;
};


export type Subscription_RootUsers_Metadata_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootWhatsapp_SubscriptionArgs = {
  distinct_on?: InputMaybe<Array<Whatsapp_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Whatsapp_Subscription_Order_By>>;
  where?: InputMaybe<Whatsapp_Subscription_Bool_Exp>;
};


export type Subscription_RootWhatsapp_Subscription_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Whatsapp_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Whatsapp_Subscription_Order_By>>;
  where?: InputMaybe<Whatsapp_Subscription_Bool_Exp>;
};


export type Subscription_RootWhatsapp_Subscription_By_PkArgs = {
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "transaction" */
export type Transaction = {
  __typename?: 'transaction';
  /** A computed field, executes function "transaction_cash_change" */
  cash_change?: Maybe<Scalars['bigint']>;
  cash_in_amount: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  invoice_number: Scalars['String'];
  karyawan_name: Scalars['String'];
  payment_type: Transaction_Payment_Type_Enum_Enum;
  return_reason?: Maybe<Scalars['String']>;
  /** An object relationship */
  store: Stores;
  store_id: Scalars['Int'];
  /** A computed field, executes function "transaction_total_profit" */
  total_profit?: Maybe<Scalars['bigint']>;
  /** A computed field, executes function "transaction_total_purchased_product" */
  total_purchased_product?: Maybe<Scalars['bigint']>;
  /** A computed field, executes function "transaction_total_transaction" */
  total_transaction?: Maybe<Scalars['bigint']>;
  /** fetch data from the table: "transaction_items" */
  transaction_items: Array<Transaction_Items>;
  /** An aggregate relationship */
  transaction_items_aggregate: Transaction_Items_Aggregate;
  /** An object relationship */
  transaction_payment_type_enum: Transaction_Payment_Type_Enum;
  /** An array relationship */
  transaction_receipts: Array<Transaction_Receipts>;
  /** An aggregate relationship */
  transaction_receipts_aggregate: Transaction_Receipts_Aggregate;
  transaction_status: Transaction_Status_Enum_Enum;
  /** An object relationship */
  transaction_status_enum: Transaction_Status_Enum;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "transaction" */
export type TransactionTransaction_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Items_Order_By>>;
  where?: InputMaybe<Transaction_Items_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionTransaction_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Items_Order_By>>;
  where?: InputMaybe<Transaction_Items_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionTransaction_ReceiptsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Receipts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Receipts_Order_By>>;
  where?: InputMaybe<Transaction_Receipts_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionTransaction_Receipts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Receipts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Receipts_Order_By>>;
  where?: InputMaybe<Transaction_Receipts_Bool_Exp>;
};

/** aggregated selection of "transaction" */
export type Transaction_Aggregate = {
  __typename?: 'transaction_aggregate';
  aggregate?: Maybe<Transaction_Aggregate_Fields>;
  nodes: Array<Transaction>;
};

/** aggregate fields of "transaction" */
export type Transaction_Aggregate_Fields = {
  __typename?: 'transaction_aggregate_fields';
  avg?: Maybe<Transaction_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Transaction_Max_Fields>;
  min?: Maybe<Transaction_Min_Fields>;
  stddev?: Maybe<Transaction_Stddev_Fields>;
  stddev_pop?: Maybe<Transaction_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transaction_Stddev_Samp_Fields>;
  sum?: Maybe<Transaction_Sum_Fields>;
  var_pop?: Maybe<Transaction_Var_Pop_Fields>;
  var_samp?: Maybe<Transaction_Var_Samp_Fields>;
  variance?: Maybe<Transaction_Variance_Fields>;
};


/** aggregate fields of "transaction" */
export type Transaction_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "transaction" */
export type Transaction_Aggregate_Order_By = {
  avg?: InputMaybe<Transaction_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Transaction_Max_Order_By>;
  min?: InputMaybe<Transaction_Min_Order_By>;
  stddev?: InputMaybe<Transaction_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Transaction_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Transaction_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Transaction_Sum_Order_By>;
  var_pop?: InputMaybe<Transaction_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Transaction_Var_Samp_Order_By>;
  variance?: InputMaybe<Transaction_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "transaction" */
export type Transaction_Arr_Rel_Insert_Input = {
  data: Array<Transaction_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Transaction_On_Conflict>;
};

/** aggregate avg on columns */
export type Transaction_Avg_Fields = {
  __typename?: 'transaction_avg_fields';
  cash_in_amount?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "transaction" */
export type Transaction_Avg_Order_By = {
  cash_in_amount?: InputMaybe<Order_By>;
  store_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transaction". All fields are combined with a logical 'AND'. */
export type Transaction_Bool_Exp = {
  _and?: InputMaybe<Array<Transaction_Bool_Exp>>;
  _not?: InputMaybe<Transaction_Bool_Exp>;
  _or?: InputMaybe<Array<Transaction_Bool_Exp>>;
  cash_change?: InputMaybe<Bigint_Comparison_Exp>;
  cash_in_amount?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  invoice_number?: InputMaybe<String_Comparison_Exp>;
  karyawan_name?: InputMaybe<String_Comparison_Exp>;
  payment_type?: InputMaybe<Transaction_Payment_Type_Enum_Enum_Comparison_Exp>;
  return_reason?: InputMaybe<String_Comparison_Exp>;
  store?: InputMaybe<Stores_Bool_Exp>;
  store_id?: InputMaybe<Int_Comparison_Exp>;
  total_profit?: InputMaybe<Bigint_Comparison_Exp>;
  total_purchased_product?: InputMaybe<Bigint_Comparison_Exp>;
  total_transaction?: InputMaybe<Bigint_Comparison_Exp>;
  transaction_items?: InputMaybe<Transaction_Items_Bool_Exp>;
  transaction_payment_type_enum?: InputMaybe<Transaction_Payment_Type_Enum_Bool_Exp>;
  transaction_receipts?: InputMaybe<Transaction_Receipts_Bool_Exp>;
  transaction_status?: InputMaybe<Transaction_Status_Enum_Enum_Comparison_Exp>;
  transaction_status_enum?: InputMaybe<Transaction_Status_Enum_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "transaction" */
export enum Transaction_Constraint {
  /** unique or primary key constraint */
  TransactionPkey = 'transaction_pkey'
}

/** input type for incrementing numeric columns in table "transaction" */
export type Transaction_Inc_Input = {
  cash_in_amount?: InputMaybe<Scalars['Int']>;
  store_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "transaction" */
export type Transaction_Insert_Input = {
  cash_in_amount?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  invoice_number?: InputMaybe<Scalars['String']>;
  karyawan_name?: InputMaybe<Scalars['String']>;
  payment_type?: InputMaybe<Transaction_Payment_Type_Enum_Enum>;
  return_reason?: InputMaybe<Scalars['String']>;
  store?: InputMaybe<Stores_Obj_Rel_Insert_Input>;
  store_id?: InputMaybe<Scalars['Int']>;
  transaction_items?: InputMaybe<Transaction_Items_Arr_Rel_Insert_Input>;
  transaction_payment_type_enum?: InputMaybe<Transaction_Payment_Type_Enum_Obj_Rel_Insert_Input>;
  transaction_receipts?: InputMaybe<Transaction_Receipts_Arr_Rel_Insert_Input>;
  transaction_status?: InputMaybe<Transaction_Status_Enum_Enum>;
  transaction_status_enum?: InputMaybe<Transaction_Status_Enum_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "transaction_items" */
export type Transaction_Items = {
  __typename?: 'transaction_items';
  capital_price: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  discount: Scalars['Int'];
  id: Scalars['uuid'];
  /** An object relationship */
  inventory_product?: Maybe<Inventory_Products>;
  inventory_product_id?: Maybe<Scalars['uuid']>;
  product_name: Scalars['String'];
  /** A computed field, executes function "transaction_items_profit" */
  profit?: Maybe<Scalars['Int']>;
  purchase_qty: Scalars['Int'];
  /** A computed field, executes function "transaction_items_real_capital_price" */
  real_capital_price?: Maybe<Scalars['Int']>;
  selling_price: Scalars['Int'];
  /** A computed field, executes function "transaction_items_subtotal" */
  subtotal?: Maybe<Scalars['Int']>;
  /** An object relationship */
  transaction: Transaction;
  transaction_invoice_number: Scalars['String'];
  transaction_status: Transaction_Status_Enum_Enum;
  /** An object relationship */
  transaction_status_enum: Transaction_Status_Enum;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "transaction_items" */
export type Transaction_Items_Aggregate = {
  __typename?: 'transaction_items_aggregate';
  aggregate?: Maybe<Transaction_Items_Aggregate_Fields>;
  nodes: Array<Transaction_Items>;
};

/** aggregate fields of "transaction_items" */
export type Transaction_Items_Aggregate_Fields = {
  __typename?: 'transaction_items_aggregate_fields';
  avg?: Maybe<Transaction_Items_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Transaction_Items_Max_Fields>;
  min?: Maybe<Transaction_Items_Min_Fields>;
  stddev?: Maybe<Transaction_Items_Stddev_Fields>;
  stddev_pop?: Maybe<Transaction_Items_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transaction_Items_Stddev_Samp_Fields>;
  sum?: Maybe<Transaction_Items_Sum_Fields>;
  var_pop?: Maybe<Transaction_Items_Var_Pop_Fields>;
  var_samp?: Maybe<Transaction_Items_Var_Samp_Fields>;
  variance?: Maybe<Transaction_Items_Variance_Fields>;
};


/** aggregate fields of "transaction_items" */
export type Transaction_Items_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transaction_Items_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "transaction_items" */
export type Transaction_Items_Aggregate_Order_By = {
  avg?: InputMaybe<Transaction_Items_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Transaction_Items_Max_Order_By>;
  min?: InputMaybe<Transaction_Items_Min_Order_By>;
  stddev?: InputMaybe<Transaction_Items_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Transaction_Items_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Transaction_Items_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Transaction_Items_Sum_Order_By>;
  var_pop?: InputMaybe<Transaction_Items_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Transaction_Items_Var_Samp_Order_By>;
  variance?: InputMaybe<Transaction_Items_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "transaction_items" */
export type Transaction_Items_Arr_Rel_Insert_Input = {
  data: Array<Transaction_Items_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Transaction_Items_On_Conflict>;
};

/** aggregate avg on columns */
export type Transaction_Items_Avg_Fields = {
  __typename?: 'transaction_items_avg_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  purchase_qty?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "transaction_items" */
export type Transaction_Items_Avg_Order_By = {
  capital_price?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  purchase_qty?: InputMaybe<Order_By>;
  selling_price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transaction_items". All fields are combined with a logical 'AND'. */
export type Transaction_Items_Bool_Exp = {
  _and?: InputMaybe<Array<Transaction_Items_Bool_Exp>>;
  _not?: InputMaybe<Transaction_Items_Bool_Exp>;
  _or?: InputMaybe<Array<Transaction_Items_Bool_Exp>>;
  capital_price?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  discount?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  inventory_product?: InputMaybe<Inventory_Products_Bool_Exp>;
  inventory_product_id?: InputMaybe<Uuid_Comparison_Exp>;
  product_name?: InputMaybe<String_Comparison_Exp>;
  profit?: InputMaybe<Int_Comparison_Exp>;
  purchase_qty?: InputMaybe<Int_Comparison_Exp>;
  real_capital_price?: InputMaybe<Int_Comparison_Exp>;
  selling_price?: InputMaybe<Int_Comparison_Exp>;
  subtotal?: InputMaybe<Int_Comparison_Exp>;
  transaction?: InputMaybe<Transaction_Bool_Exp>;
  transaction_invoice_number?: InputMaybe<String_Comparison_Exp>;
  transaction_status?: InputMaybe<Transaction_Status_Enum_Enum_Comparison_Exp>;
  transaction_status_enum?: InputMaybe<Transaction_Status_Enum_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "transaction_items" */
export enum Transaction_Items_Constraint {
  /** unique or primary key constraint */
  TransactionItemsPkey = 'transaction_items_pkey'
}

/** input type for incrementing numeric columns in table "transaction_items" */
export type Transaction_Items_Inc_Input = {
  capital_price?: InputMaybe<Scalars['Int']>;
  discount?: InputMaybe<Scalars['Int']>;
  purchase_qty?: InputMaybe<Scalars['Int']>;
  selling_price?: InputMaybe<Scalars['Int']>;
};

export type Transaction_Items_Input = {
  capital_price: Scalars['Int'];
  discount: Scalars['Int'];
  inventory_product_updated_at: Scalars['String'];
  product_inventory_id: Scalars['uuid'];
  product_name_concise: Scalars['String'];
  product_updated_at: Scalars['String'];
  purchace_qty: Scalars['Int'];
  selling_price: Scalars['Int'];
};

/** input type for inserting data into table "transaction_items" */
export type Transaction_Items_Insert_Input = {
  capital_price?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  discount?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  inventory_product?: InputMaybe<Inventory_Products_Obj_Rel_Insert_Input>;
  inventory_product_id?: InputMaybe<Scalars['uuid']>;
  product_name?: InputMaybe<Scalars['String']>;
  purchase_qty?: InputMaybe<Scalars['Int']>;
  selling_price?: InputMaybe<Scalars['Int']>;
  transaction?: InputMaybe<Transaction_Obj_Rel_Insert_Input>;
  transaction_invoice_number?: InputMaybe<Scalars['String']>;
  transaction_status?: InputMaybe<Transaction_Status_Enum_Enum>;
  transaction_status_enum?: InputMaybe<Transaction_Status_Enum_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Transaction_Items_Max_Fields = {
  __typename?: 'transaction_items_max_fields';
  capital_price?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  discount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  inventory_product_id?: Maybe<Scalars['uuid']>;
  product_name?: Maybe<Scalars['String']>;
  purchase_qty?: Maybe<Scalars['Int']>;
  selling_price?: Maybe<Scalars['Int']>;
  transaction_invoice_number?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "transaction_items" */
export type Transaction_Items_Max_Order_By = {
  capital_price?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inventory_product_id?: InputMaybe<Order_By>;
  product_name?: InputMaybe<Order_By>;
  purchase_qty?: InputMaybe<Order_By>;
  selling_price?: InputMaybe<Order_By>;
  transaction_invoice_number?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Transaction_Items_Min_Fields = {
  __typename?: 'transaction_items_min_fields';
  capital_price?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  discount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  inventory_product_id?: Maybe<Scalars['uuid']>;
  product_name?: Maybe<Scalars['String']>;
  purchase_qty?: Maybe<Scalars['Int']>;
  selling_price?: Maybe<Scalars['Int']>;
  transaction_invoice_number?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "transaction_items" */
export type Transaction_Items_Min_Order_By = {
  capital_price?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inventory_product_id?: InputMaybe<Order_By>;
  product_name?: InputMaybe<Order_By>;
  purchase_qty?: InputMaybe<Order_By>;
  selling_price?: InputMaybe<Order_By>;
  transaction_invoice_number?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "transaction_items" */
export type Transaction_Items_Mutation_Response = {
  __typename?: 'transaction_items_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Transaction_Items>;
};

/** on_conflict condition type for table "transaction_items" */
export type Transaction_Items_On_Conflict = {
  constraint: Transaction_Items_Constraint;
  update_columns?: Array<Transaction_Items_Update_Column>;
  where?: InputMaybe<Transaction_Items_Bool_Exp>;
};

/** Ordering options when selecting data from "transaction_items". */
export type Transaction_Items_Order_By = {
  capital_price?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inventory_product?: InputMaybe<Inventory_Products_Order_By>;
  inventory_product_id?: InputMaybe<Order_By>;
  product_name?: InputMaybe<Order_By>;
  profit?: InputMaybe<Order_By>;
  purchase_qty?: InputMaybe<Order_By>;
  real_capital_price?: InputMaybe<Order_By>;
  selling_price?: InputMaybe<Order_By>;
  subtotal?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transaction_Order_By>;
  transaction_invoice_number?: InputMaybe<Order_By>;
  transaction_status?: InputMaybe<Order_By>;
  transaction_status_enum?: InputMaybe<Transaction_Status_Enum_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: transaction_items */
export type Transaction_Items_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "transaction_items" */
export enum Transaction_Items_Select_Column {
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
  PurchaseQty = 'purchase_qty',
  /** column name */
  SellingPrice = 'selling_price',
  /** column name */
  TransactionInvoiceNumber = 'transaction_invoice_number',
  /** column name */
  TransactionStatus = 'transaction_status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "transaction_items" */
export type Transaction_Items_Set_Input = {
  capital_price?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  discount?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  inventory_product_id?: InputMaybe<Scalars['uuid']>;
  product_name?: InputMaybe<Scalars['String']>;
  purchase_qty?: InputMaybe<Scalars['Int']>;
  selling_price?: InputMaybe<Scalars['Int']>;
  transaction_invoice_number?: InputMaybe<Scalars['String']>;
  transaction_status?: InputMaybe<Transaction_Status_Enum_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Transaction_Items_Stddev_Fields = {
  __typename?: 'transaction_items_stddev_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  purchase_qty?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "transaction_items" */
export type Transaction_Items_Stddev_Order_By = {
  capital_price?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  purchase_qty?: InputMaybe<Order_By>;
  selling_price?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transaction_Items_Stddev_Pop_Fields = {
  __typename?: 'transaction_items_stddev_pop_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  purchase_qty?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "transaction_items" */
export type Transaction_Items_Stddev_Pop_Order_By = {
  capital_price?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  purchase_qty?: InputMaybe<Order_By>;
  selling_price?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transaction_Items_Stddev_Samp_Fields = {
  __typename?: 'transaction_items_stddev_samp_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  purchase_qty?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "transaction_items" */
export type Transaction_Items_Stddev_Samp_Order_By = {
  capital_price?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  purchase_qty?: InputMaybe<Order_By>;
  selling_price?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Transaction_Items_Sum_Fields = {
  __typename?: 'transaction_items_sum_fields';
  capital_price?: Maybe<Scalars['Int']>;
  discount?: Maybe<Scalars['Int']>;
  purchase_qty?: Maybe<Scalars['Int']>;
  selling_price?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "transaction_items" */
export type Transaction_Items_Sum_Order_By = {
  capital_price?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  purchase_qty?: InputMaybe<Order_By>;
  selling_price?: InputMaybe<Order_By>;
};

/** update columns of table "transaction_items" */
export enum Transaction_Items_Update_Column {
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
  PurchaseQty = 'purchase_qty',
  /** column name */
  SellingPrice = 'selling_price',
  /** column name */
  TransactionInvoiceNumber = 'transaction_invoice_number',
  /** column name */
  TransactionStatus = 'transaction_status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Transaction_Items_Var_Pop_Fields = {
  __typename?: 'transaction_items_var_pop_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  purchase_qty?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "transaction_items" */
export type Transaction_Items_Var_Pop_Order_By = {
  capital_price?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  purchase_qty?: InputMaybe<Order_By>;
  selling_price?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transaction_Items_Var_Samp_Fields = {
  __typename?: 'transaction_items_var_samp_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  purchase_qty?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "transaction_items" */
export type Transaction_Items_Var_Samp_Order_By = {
  capital_price?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  purchase_qty?: InputMaybe<Order_By>;
  selling_price?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Transaction_Items_Variance_Fields = {
  __typename?: 'transaction_items_variance_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  purchase_qty?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "transaction_items" */
export type Transaction_Items_Variance_Order_By = {
  capital_price?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  purchase_qty?: InputMaybe<Order_By>;
  selling_price?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Transaction_Max_Fields = {
  __typename?: 'transaction_max_fields';
  cash_in_amount?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  invoice_number?: Maybe<Scalars['String']>;
  karyawan_name?: Maybe<Scalars['String']>;
  return_reason?: Maybe<Scalars['String']>;
  store_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "transaction" */
export type Transaction_Max_Order_By = {
  cash_in_amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  invoice_number?: InputMaybe<Order_By>;
  karyawan_name?: InputMaybe<Order_By>;
  return_reason?: InputMaybe<Order_By>;
  store_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Transaction_Min_Fields = {
  __typename?: 'transaction_min_fields';
  cash_in_amount?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  invoice_number?: Maybe<Scalars['String']>;
  karyawan_name?: Maybe<Scalars['String']>;
  return_reason?: Maybe<Scalars['String']>;
  store_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "transaction" */
export type Transaction_Min_Order_By = {
  cash_in_amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  invoice_number?: InputMaybe<Order_By>;
  karyawan_name?: InputMaybe<Order_By>;
  return_reason?: InputMaybe<Order_By>;
  store_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "transaction" */
export type Transaction_Mutation_Response = {
  __typename?: 'transaction_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Transaction>;
};

/** input type for inserting object relation for remote table "transaction" */
export type Transaction_Obj_Rel_Insert_Input = {
  data: Transaction_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Transaction_On_Conflict>;
};

/** on_conflict condition type for table "transaction" */
export type Transaction_On_Conflict = {
  constraint: Transaction_Constraint;
  update_columns?: Array<Transaction_Update_Column>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};

/** Ordering options when selecting data from "transaction". */
export type Transaction_Order_By = {
  cash_change?: InputMaybe<Order_By>;
  cash_in_amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  invoice_number?: InputMaybe<Order_By>;
  karyawan_name?: InputMaybe<Order_By>;
  payment_type?: InputMaybe<Order_By>;
  return_reason?: InputMaybe<Order_By>;
  store?: InputMaybe<Stores_Order_By>;
  store_id?: InputMaybe<Order_By>;
  total_profit?: InputMaybe<Order_By>;
  total_purchased_product?: InputMaybe<Order_By>;
  total_transaction?: InputMaybe<Order_By>;
  transaction_items_aggregate?: InputMaybe<Transaction_Items_Aggregate_Order_By>;
  transaction_payment_type_enum?: InputMaybe<Transaction_Payment_Type_Enum_Order_By>;
  transaction_receipts_aggregate?: InputMaybe<Transaction_Receipts_Aggregate_Order_By>;
  transaction_status?: InputMaybe<Order_By>;
  transaction_status_enum?: InputMaybe<Transaction_Status_Enum_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** columns and relationships of "transaction_payment_type_enum" */
export type Transaction_Payment_Type_Enum = {
  __typename?: 'transaction_payment_type_enum';
  payment_type: Scalars['String'];
  title: Scalars['String'];
};

/** aggregated selection of "transaction_payment_type_enum" */
export type Transaction_Payment_Type_Enum_Aggregate = {
  __typename?: 'transaction_payment_type_enum_aggregate';
  aggregate?: Maybe<Transaction_Payment_Type_Enum_Aggregate_Fields>;
  nodes: Array<Transaction_Payment_Type_Enum>;
};

/** aggregate fields of "transaction_payment_type_enum" */
export type Transaction_Payment_Type_Enum_Aggregate_Fields = {
  __typename?: 'transaction_payment_type_enum_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Transaction_Payment_Type_Enum_Max_Fields>;
  min?: Maybe<Transaction_Payment_Type_Enum_Min_Fields>;
};


/** aggregate fields of "transaction_payment_type_enum" */
export type Transaction_Payment_Type_Enum_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transaction_Payment_Type_Enum_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "transaction_payment_type_enum". All fields are combined with a logical 'AND'. */
export type Transaction_Payment_Type_Enum_Bool_Exp = {
  _and?: InputMaybe<Array<Transaction_Payment_Type_Enum_Bool_Exp>>;
  _not?: InputMaybe<Transaction_Payment_Type_Enum_Bool_Exp>;
  _or?: InputMaybe<Array<Transaction_Payment_Type_Enum_Bool_Exp>>;
  payment_type?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "transaction_payment_type_enum" */
export enum Transaction_Payment_Type_Enum_Constraint {
  /** unique or primary key constraint */
  TransactionPaymentTypeEnumPkey = 'transaction_payment_type_enum_pkey'
}

export enum Transaction_Payment_Type_Enum_Enum {
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

/** Boolean expression to compare columns of type "transaction_payment_type_enum_enum". All fields are combined with logical 'AND'. */
export type Transaction_Payment_Type_Enum_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Transaction_Payment_Type_Enum_Enum>;
  _in?: InputMaybe<Array<Transaction_Payment_Type_Enum_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Transaction_Payment_Type_Enum_Enum>;
  _nin?: InputMaybe<Array<Transaction_Payment_Type_Enum_Enum>>;
};

/** input type for inserting data into table "transaction_payment_type_enum" */
export type Transaction_Payment_Type_Enum_Insert_Input = {
  payment_type?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Transaction_Payment_Type_Enum_Max_Fields = {
  __typename?: 'transaction_payment_type_enum_max_fields';
  payment_type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Transaction_Payment_Type_Enum_Min_Fields = {
  __typename?: 'transaction_payment_type_enum_min_fields';
  payment_type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "transaction_payment_type_enum" */
export type Transaction_Payment_Type_Enum_Mutation_Response = {
  __typename?: 'transaction_payment_type_enum_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Transaction_Payment_Type_Enum>;
};

/** input type for inserting object relation for remote table "transaction_payment_type_enum" */
export type Transaction_Payment_Type_Enum_Obj_Rel_Insert_Input = {
  data: Transaction_Payment_Type_Enum_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Transaction_Payment_Type_Enum_On_Conflict>;
};

/** on_conflict condition type for table "transaction_payment_type_enum" */
export type Transaction_Payment_Type_Enum_On_Conflict = {
  constraint: Transaction_Payment_Type_Enum_Constraint;
  update_columns?: Array<Transaction_Payment_Type_Enum_Update_Column>;
  where?: InputMaybe<Transaction_Payment_Type_Enum_Bool_Exp>;
};

/** Ordering options when selecting data from "transaction_payment_type_enum". */
export type Transaction_Payment_Type_Enum_Order_By = {
  payment_type?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: transaction_payment_type_enum */
export type Transaction_Payment_Type_Enum_Pk_Columns_Input = {
  payment_type: Scalars['String'];
};

/** select columns of table "transaction_payment_type_enum" */
export enum Transaction_Payment_Type_Enum_Select_Column {
  /** column name */
  PaymentType = 'payment_type',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "transaction_payment_type_enum" */
export type Transaction_Payment_Type_Enum_Set_Input = {
  payment_type?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** update columns of table "transaction_payment_type_enum" */
export enum Transaction_Payment_Type_Enum_Update_Column {
  /** column name */
  PaymentType = 'payment_type',
  /** column name */
  Title = 'title'
}

/** primary key columns input for table: transaction */
export type Transaction_Pk_Columns_Input = {
  invoice_number: Scalars['String'];
};

/** columns and relationships of "transaction_receipt_type_enum" */
export type Transaction_Receipt_Type_Enum = {
  __typename?: 'transaction_receipt_type_enum';
  receipt_type: Scalars['String'];
  title: Scalars['String'];
};

/** aggregated selection of "transaction_receipt_type_enum" */
export type Transaction_Receipt_Type_Enum_Aggregate = {
  __typename?: 'transaction_receipt_type_enum_aggregate';
  aggregate?: Maybe<Transaction_Receipt_Type_Enum_Aggregate_Fields>;
  nodes: Array<Transaction_Receipt_Type_Enum>;
};

/** aggregate fields of "transaction_receipt_type_enum" */
export type Transaction_Receipt_Type_Enum_Aggregate_Fields = {
  __typename?: 'transaction_receipt_type_enum_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Transaction_Receipt_Type_Enum_Max_Fields>;
  min?: Maybe<Transaction_Receipt_Type_Enum_Min_Fields>;
};


/** aggregate fields of "transaction_receipt_type_enum" */
export type Transaction_Receipt_Type_Enum_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transaction_Receipt_Type_Enum_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "transaction_receipt_type_enum". All fields are combined with a logical 'AND'. */
export type Transaction_Receipt_Type_Enum_Bool_Exp = {
  _and?: InputMaybe<Array<Transaction_Receipt_Type_Enum_Bool_Exp>>;
  _not?: InputMaybe<Transaction_Receipt_Type_Enum_Bool_Exp>;
  _or?: InputMaybe<Array<Transaction_Receipt_Type_Enum_Bool_Exp>>;
  receipt_type?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "transaction_receipt_type_enum" */
export enum Transaction_Receipt_Type_Enum_Constraint {
  /** unique or primary key constraint */
  TransactionReceiptTypeEnumPkey = 'transaction_receipt_type_enum_pkey'
}

export enum Transaction_Receipt_Type_Enum_Enum {
  /** Email */
  Email = 'email',
  /** Whatsapp */
  Whatsapp = 'whatsapp'
}

/** Boolean expression to compare columns of type "transaction_receipt_type_enum_enum". All fields are combined with logical 'AND'. */
export type Transaction_Receipt_Type_Enum_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Transaction_Receipt_Type_Enum_Enum>;
  _in?: InputMaybe<Array<Transaction_Receipt_Type_Enum_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Transaction_Receipt_Type_Enum_Enum>;
  _nin?: InputMaybe<Array<Transaction_Receipt_Type_Enum_Enum>>;
};

/** input type for inserting data into table "transaction_receipt_type_enum" */
export type Transaction_Receipt_Type_Enum_Insert_Input = {
  receipt_type?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Transaction_Receipt_Type_Enum_Max_Fields = {
  __typename?: 'transaction_receipt_type_enum_max_fields';
  receipt_type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Transaction_Receipt_Type_Enum_Min_Fields = {
  __typename?: 'transaction_receipt_type_enum_min_fields';
  receipt_type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "transaction_receipt_type_enum" */
export type Transaction_Receipt_Type_Enum_Mutation_Response = {
  __typename?: 'transaction_receipt_type_enum_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Transaction_Receipt_Type_Enum>;
};

/** input type for inserting object relation for remote table "transaction_receipt_type_enum" */
export type Transaction_Receipt_Type_Enum_Obj_Rel_Insert_Input = {
  data: Transaction_Receipt_Type_Enum_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Transaction_Receipt_Type_Enum_On_Conflict>;
};

/** on_conflict condition type for table "transaction_receipt_type_enum" */
export type Transaction_Receipt_Type_Enum_On_Conflict = {
  constraint: Transaction_Receipt_Type_Enum_Constraint;
  update_columns?: Array<Transaction_Receipt_Type_Enum_Update_Column>;
  where?: InputMaybe<Transaction_Receipt_Type_Enum_Bool_Exp>;
};

/** Ordering options when selecting data from "transaction_receipt_type_enum". */
export type Transaction_Receipt_Type_Enum_Order_By = {
  receipt_type?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: transaction_receipt_type_enum */
export type Transaction_Receipt_Type_Enum_Pk_Columns_Input = {
  receipt_type: Scalars['String'];
};

/** select columns of table "transaction_receipt_type_enum" */
export enum Transaction_Receipt_Type_Enum_Select_Column {
  /** column name */
  ReceiptType = 'receipt_type',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "transaction_receipt_type_enum" */
export type Transaction_Receipt_Type_Enum_Set_Input = {
  receipt_type?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** update columns of table "transaction_receipt_type_enum" */
export enum Transaction_Receipt_Type_Enum_Update_Column {
  /** column name */
  ReceiptType = 'receipt_type',
  /** column name */
  Title = 'title'
}

/** columns and relationships of "transaction_receipts" */
export type Transaction_Receipts = {
  __typename?: 'transaction_receipts';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  customer: Customers;
  customer_id: Scalars['uuid'];
  id: Scalars['uuid'];
  is_sent: Scalars['Boolean'];
  receipt_type: Transaction_Receipt_Type_Enum_Enum;
  /** An object relationship */
  transaction: Transaction;
  transaction_invoice_number: Scalars['String'];
  /** An object relationship */
  transaction_receipt_type_enum: Transaction_Receipt_Type_Enum;
};

/** aggregated selection of "transaction_receipts" */
export type Transaction_Receipts_Aggregate = {
  __typename?: 'transaction_receipts_aggregate';
  aggregate?: Maybe<Transaction_Receipts_Aggregate_Fields>;
  nodes: Array<Transaction_Receipts>;
};

/** aggregate fields of "transaction_receipts" */
export type Transaction_Receipts_Aggregate_Fields = {
  __typename?: 'transaction_receipts_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Transaction_Receipts_Max_Fields>;
  min?: Maybe<Transaction_Receipts_Min_Fields>;
};


/** aggregate fields of "transaction_receipts" */
export type Transaction_Receipts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transaction_Receipts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "transaction_receipts" */
export type Transaction_Receipts_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Transaction_Receipts_Max_Order_By>;
  min?: InputMaybe<Transaction_Receipts_Min_Order_By>;
};

/** input type for inserting array relation for remote table "transaction_receipts" */
export type Transaction_Receipts_Arr_Rel_Insert_Input = {
  data: Array<Transaction_Receipts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Transaction_Receipts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "transaction_receipts". All fields are combined with a logical 'AND'. */
export type Transaction_Receipts_Bool_Exp = {
  _and?: InputMaybe<Array<Transaction_Receipts_Bool_Exp>>;
  _not?: InputMaybe<Transaction_Receipts_Bool_Exp>;
  _or?: InputMaybe<Array<Transaction_Receipts_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  customer?: InputMaybe<Customers_Bool_Exp>;
  customer_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_sent?: InputMaybe<Boolean_Comparison_Exp>;
  receipt_type?: InputMaybe<Transaction_Receipt_Type_Enum_Enum_Comparison_Exp>;
  transaction?: InputMaybe<Transaction_Bool_Exp>;
  transaction_invoice_number?: InputMaybe<String_Comparison_Exp>;
  transaction_receipt_type_enum?: InputMaybe<Transaction_Receipt_Type_Enum_Bool_Exp>;
};

/** unique or primary key constraints on table "transaction_receipts" */
export enum Transaction_Receipts_Constraint {
  /** unique or primary key constraint */
  TransactionReceiptsPkey = 'transaction_receipts_pkey'
}

/** input type for inserting data into table "transaction_receipts" */
export type Transaction_Receipts_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  customer?: InputMaybe<Customers_Obj_Rel_Insert_Input>;
  customer_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_sent?: InputMaybe<Scalars['Boolean']>;
  receipt_type?: InputMaybe<Transaction_Receipt_Type_Enum_Enum>;
  transaction?: InputMaybe<Transaction_Obj_Rel_Insert_Input>;
  transaction_invoice_number?: InputMaybe<Scalars['String']>;
  transaction_receipt_type_enum?: InputMaybe<Transaction_Receipt_Type_Enum_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Transaction_Receipts_Max_Fields = {
  __typename?: 'transaction_receipts_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  customer_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  transaction_invoice_number?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "transaction_receipts" */
export type Transaction_Receipts_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transaction_invoice_number?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Transaction_Receipts_Min_Fields = {
  __typename?: 'transaction_receipts_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  customer_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  transaction_invoice_number?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "transaction_receipts" */
export type Transaction_Receipts_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transaction_invoice_number?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "transaction_receipts" */
export type Transaction_Receipts_Mutation_Response = {
  __typename?: 'transaction_receipts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Transaction_Receipts>;
};

/** on_conflict condition type for table "transaction_receipts" */
export type Transaction_Receipts_On_Conflict = {
  constraint: Transaction_Receipts_Constraint;
  update_columns?: Array<Transaction_Receipts_Update_Column>;
  where?: InputMaybe<Transaction_Receipts_Bool_Exp>;
};

/** Ordering options when selecting data from "transaction_receipts". */
export type Transaction_Receipts_Order_By = {
  created_at?: InputMaybe<Order_By>;
  customer?: InputMaybe<Customers_Order_By>;
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_sent?: InputMaybe<Order_By>;
  receipt_type?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transaction_Order_By>;
  transaction_invoice_number?: InputMaybe<Order_By>;
  transaction_receipt_type_enum?: InputMaybe<Transaction_Receipt_Type_Enum_Order_By>;
};

/** primary key columns input for table: transaction_receipts */
export type Transaction_Receipts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "transaction_receipts" */
export enum Transaction_Receipts_Select_Column {
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

/** input type for updating data in table "transaction_receipts" */
export type Transaction_Receipts_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  customer_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_sent?: InputMaybe<Scalars['Boolean']>;
  receipt_type?: InputMaybe<Transaction_Receipt_Type_Enum_Enum>;
  transaction_invoice_number?: InputMaybe<Scalars['String']>;
};

/** update columns of table "transaction_receipts" */
export enum Transaction_Receipts_Update_Column {
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

/** select columns of table "transaction" */
export enum Transaction_Select_Column {
  /** column name */
  CashInAmount = 'cash_in_amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  InvoiceNumber = 'invoice_number',
  /** column name */
  KaryawanName = 'karyawan_name',
  /** column name */
  PaymentType = 'payment_type',
  /** column name */
  ReturnReason = 'return_reason',
  /** column name */
  StoreId = 'store_id',
  /** column name */
  TransactionStatus = 'transaction_status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "transaction" */
export type Transaction_Set_Input = {
  cash_in_amount?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  invoice_number?: InputMaybe<Scalars['String']>;
  karyawan_name?: InputMaybe<Scalars['String']>;
  payment_type?: InputMaybe<Transaction_Payment_Type_Enum_Enum>;
  return_reason?: InputMaybe<Scalars['String']>;
  store_id?: InputMaybe<Scalars['Int']>;
  transaction_status?: InputMaybe<Transaction_Status_Enum_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "transaction_status_enum" */
export type Transaction_Status_Enum = {
  __typename?: 'transaction_status_enum';
  title: Scalars['String'];
  transaction_status: Scalars['String'];
};

/** aggregated selection of "transaction_status_enum" */
export type Transaction_Status_Enum_Aggregate = {
  __typename?: 'transaction_status_enum_aggregate';
  aggregate?: Maybe<Transaction_Status_Enum_Aggregate_Fields>;
  nodes: Array<Transaction_Status_Enum>;
};

/** aggregate fields of "transaction_status_enum" */
export type Transaction_Status_Enum_Aggregate_Fields = {
  __typename?: 'transaction_status_enum_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Transaction_Status_Enum_Max_Fields>;
  min?: Maybe<Transaction_Status_Enum_Min_Fields>;
};


/** aggregate fields of "transaction_status_enum" */
export type Transaction_Status_Enum_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transaction_Status_Enum_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "transaction_status_enum". All fields are combined with a logical 'AND'. */
export type Transaction_Status_Enum_Bool_Exp = {
  _and?: InputMaybe<Array<Transaction_Status_Enum_Bool_Exp>>;
  _not?: InputMaybe<Transaction_Status_Enum_Bool_Exp>;
  _or?: InputMaybe<Array<Transaction_Status_Enum_Bool_Exp>>;
  title?: InputMaybe<String_Comparison_Exp>;
  transaction_status?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "transaction_status_enum" */
export enum Transaction_Status_Enum_Constraint {
  /** unique or primary key constraint */
  TransactionStatusEnumPkey = 'transaction_status_enum_pkey'
}

export enum Transaction_Status_Enum_Enum {
  /** Gagal */
  Failed = 'failed',
  /** Retur Total */
  ReturnAll = 'return_all',
  /** Retur Sebagian */
  ReturnPart = 'return_part',
  /** Sukses */
  Success = 'success'
}

/** Boolean expression to compare columns of type "transaction_status_enum_enum". All fields are combined with logical 'AND'. */
export type Transaction_Status_Enum_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Transaction_Status_Enum_Enum>;
  _in?: InputMaybe<Array<Transaction_Status_Enum_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Transaction_Status_Enum_Enum>;
  _nin?: InputMaybe<Array<Transaction_Status_Enum_Enum>>;
};

/** input type for inserting data into table "transaction_status_enum" */
export type Transaction_Status_Enum_Insert_Input = {
  title?: InputMaybe<Scalars['String']>;
  transaction_status?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Transaction_Status_Enum_Max_Fields = {
  __typename?: 'transaction_status_enum_max_fields';
  title?: Maybe<Scalars['String']>;
  transaction_status?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Transaction_Status_Enum_Min_Fields = {
  __typename?: 'transaction_status_enum_min_fields';
  title?: Maybe<Scalars['String']>;
  transaction_status?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "transaction_status_enum" */
export type Transaction_Status_Enum_Mutation_Response = {
  __typename?: 'transaction_status_enum_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Transaction_Status_Enum>;
};

/** input type for inserting object relation for remote table "transaction_status_enum" */
export type Transaction_Status_Enum_Obj_Rel_Insert_Input = {
  data: Transaction_Status_Enum_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Transaction_Status_Enum_On_Conflict>;
};

/** on_conflict condition type for table "transaction_status_enum" */
export type Transaction_Status_Enum_On_Conflict = {
  constraint: Transaction_Status_Enum_Constraint;
  update_columns?: Array<Transaction_Status_Enum_Update_Column>;
  where?: InputMaybe<Transaction_Status_Enum_Bool_Exp>;
};

/** Ordering options when selecting data from "transaction_status_enum". */
export type Transaction_Status_Enum_Order_By = {
  title?: InputMaybe<Order_By>;
  transaction_status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: transaction_status_enum */
export type Transaction_Status_Enum_Pk_Columns_Input = {
  transaction_status: Scalars['String'];
};

/** select columns of table "transaction_status_enum" */
export enum Transaction_Status_Enum_Select_Column {
  /** column name */
  Title = 'title',
  /** column name */
  TransactionStatus = 'transaction_status'
}

/** input type for updating data in table "transaction_status_enum" */
export type Transaction_Status_Enum_Set_Input = {
  title?: InputMaybe<Scalars['String']>;
  transaction_status?: InputMaybe<Scalars['String']>;
};

/** update columns of table "transaction_status_enum" */
export enum Transaction_Status_Enum_Update_Column {
  /** column name */
  Title = 'title',
  /** column name */
  TransactionStatus = 'transaction_status'
}

/** aggregate stddev on columns */
export type Transaction_Stddev_Fields = {
  __typename?: 'transaction_stddev_fields';
  cash_in_amount?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "transaction" */
export type Transaction_Stddev_Order_By = {
  cash_in_amount?: InputMaybe<Order_By>;
  store_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transaction_Stddev_Pop_Fields = {
  __typename?: 'transaction_stddev_pop_fields';
  cash_in_amount?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "transaction" */
export type Transaction_Stddev_Pop_Order_By = {
  cash_in_amount?: InputMaybe<Order_By>;
  store_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transaction_Stddev_Samp_Fields = {
  __typename?: 'transaction_stddev_samp_fields';
  cash_in_amount?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "transaction" */
export type Transaction_Stddev_Samp_Order_By = {
  cash_in_amount?: InputMaybe<Order_By>;
  store_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Transaction_Sum_Fields = {
  __typename?: 'transaction_sum_fields';
  cash_in_amount?: Maybe<Scalars['Int']>;
  store_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "transaction" */
export type Transaction_Sum_Order_By = {
  cash_in_amount?: InputMaybe<Order_By>;
  store_id?: InputMaybe<Order_By>;
};

/** update columns of table "transaction" */
export enum Transaction_Update_Column {
  /** column name */
  CashInAmount = 'cash_in_amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  InvoiceNumber = 'invoice_number',
  /** column name */
  KaryawanName = 'karyawan_name',
  /** column name */
  PaymentType = 'payment_type',
  /** column name */
  ReturnReason = 'return_reason',
  /** column name */
  StoreId = 'store_id',
  /** column name */
  TransactionStatus = 'transaction_status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Transaction_Var_Pop_Fields = {
  __typename?: 'transaction_var_pop_fields';
  cash_in_amount?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "transaction" */
export type Transaction_Var_Pop_Order_By = {
  cash_in_amount?: InputMaybe<Order_By>;
  store_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transaction_Var_Samp_Fields = {
  __typename?: 'transaction_var_samp_fields';
  cash_in_amount?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "transaction" */
export type Transaction_Var_Samp_Order_By = {
  cash_in_amount?: InputMaybe<Order_By>;
  store_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Transaction_Variance_Fields = {
  __typename?: 'transaction_variance_fields';
  cash_in_amount?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "transaction" */
export type Transaction_Variance_Order_By = {
  cash_in_amount?: InputMaybe<Order_By>;
  store_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "auth.users" */
export type Users = {
  __typename?: 'users';
  activeMfaType?: Maybe<Scalars['String']>;
  /** An array relationship */
  attendances: Array<Attendance>;
  /** An aggregate relationship */
  attendances_aggregate: Attendance_Aggregate;
  avatarUrl: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  defaultRole: Scalars['String'];
  /** An object relationship */
  defaultRoleByRole: AuthRoles;
  disabled: Scalars['Boolean'];
  displayName: Scalars['String'];
  email?: Maybe<Scalars['citext']>;
  emailVerified: Scalars['Boolean'];
  id: Scalars['uuid'];
  isAnonymous: Scalars['Boolean'];
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale: Scalars['String'];
  metadata?: Maybe<Scalars['jsonb']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt: Scalars['timestamptz'];
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberVerified: Scalars['Boolean'];
  /** An array relationship */
  refreshTokens: Array<AuthRefreshTokens>;
  /** An aggregate relationship */
  refreshTokens_aggregate: AuthRefreshTokens_Aggregate;
  /** An array relationship */
  roles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  roles_aggregate: AuthUserRoles_Aggregate;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt: Scalars['timestamptz'];
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
  /** An array relationship */
  users_metadata: Array<Users_Metadata>;
  /** An aggregate relationship */
  users_metadata_aggregate: Users_Metadata_Aggregate;
};


/** columns and relationships of "auth.users" */
export type UsersAttendancesArgs = {
  distinct_on?: InputMaybe<Array<Attendance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Attendance_Order_By>>;
  where?: InputMaybe<Attendance_Bool_Exp>;
};


/** columns and relationships of "auth.users" */
export type UsersAttendances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Attendance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Attendance_Order_By>>;
  where?: InputMaybe<Attendance_Bool_Exp>;
};


/** columns and relationships of "auth.users" */
export type UsersMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "auth.users" */
export type UsersRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** columns and relationships of "auth.users" */
export type UsersRefreshTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** columns and relationships of "auth.users" */
export type UsersRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** columns and relationships of "auth.users" */
export type UsersRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** columns and relationships of "auth.users" */
export type UsersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** columns and relationships of "auth.users" */
export type UsersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** columns and relationships of "auth.users" */
export type UsersUsers_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Users_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Metadata_Order_By>>;
  where?: InputMaybe<Users_Metadata_Bool_Exp>;
};


/** columns and relationships of "auth.users" */
export type UsersUsers_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Metadata_Order_By>>;
  where?: InputMaybe<Users_Metadata_Bool_Exp>;
};

/** aggregated selection of "auth.users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "auth.users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "auth.users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.users" */
export type Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Users_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "auth.users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  activeMfaType?: InputMaybe<String_Comparison_Exp>;
  attendances?: InputMaybe<Attendance_Bool_Exp>;
  avatarUrl?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  defaultRole?: InputMaybe<String_Comparison_Exp>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  disabled?: InputMaybe<Boolean_Comparison_Exp>;
  displayName?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<Citext_Comparison_Exp>;
  emailVerified?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isAnonymous?: InputMaybe<Boolean_Comparison_Exp>;
  lastSeen?: InputMaybe<Timestamptz_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  newEmail?: InputMaybe<Citext_Comparison_Exp>;
  otpHash?: InputMaybe<String_Comparison_Exp>;
  otpHashExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  otpMethodLastUsed?: InputMaybe<String_Comparison_Exp>;
  passwordHash?: InputMaybe<String_Comparison_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
  phoneNumberVerified?: InputMaybe<Boolean_Comparison_Exp>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  roles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  ticket?: InputMaybe<String_Comparison_Exp>;
  ticketExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  totpSecret?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
  users_metadata?: InputMaybe<Users_Metadata_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersPhoneNumberKey = 'users_phone_number_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Users_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Users_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Users_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.users" */
export type Users_Insert_Input = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  attendances?: InputMaybe<Attendance_Arr_Rel_Insert_Input>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Arr_Rel_Insert_Input>;
  roles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
  users_metadata?: InputMaybe<Users_Metadata_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  defaultRole?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "auth.users" */
export type Users_Max_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** columns and relationships of "users_metadata" */
export type Users_Metadata = {
  __typename?: 'users_metadata';
  id: Scalars['uuid'];
  store_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  stores?: Maybe<Stores>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "users_metadata" */
export type Users_Metadata_Aggregate = {
  __typename?: 'users_metadata_aggregate';
  aggregate?: Maybe<Users_Metadata_Aggregate_Fields>;
  nodes: Array<Users_Metadata>;
};

/** aggregate fields of "users_metadata" */
export type Users_Metadata_Aggregate_Fields = {
  __typename?: 'users_metadata_aggregate_fields';
  avg?: Maybe<Users_Metadata_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Users_Metadata_Max_Fields>;
  min?: Maybe<Users_Metadata_Min_Fields>;
  stddev?: Maybe<Users_Metadata_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Metadata_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Metadata_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Metadata_Sum_Fields>;
  var_pop?: Maybe<Users_Metadata_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Metadata_Var_Samp_Fields>;
  variance?: Maybe<Users_Metadata_Variance_Fields>;
};


/** aggregate fields of "users_metadata" */
export type Users_Metadata_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Metadata_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users_metadata" */
export type Users_Metadata_Aggregate_Order_By = {
  avg?: InputMaybe<Users_Metadata_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Metadata_Max_Order_By>;
  min?: InputMaybe<Users_Metadata_Min_Order_By>;
  stddev?: InputMaybe<Users_Metadata_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Users_Metadata_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Users_Metadata_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Users_Metadata_Sum_Order_By>;
  var_pop?: InputMaybe<Users_Metadata_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Users_Metadata_Var_Samp_Order_By>;
  variance?: InputMaybe<Users_Metadata_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "users_metadata" */
export type Users_Metadata_Arr_Rel_Insert_Input = {
  data: Array<Users_Metadata_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_Metadata_On_Conflict>;
};

/** aggregate avg on columns */
export type Users_Metadata_Avg_Fields = {
  __typename?: 'users_metadata_avg_fields';
  store_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "users_metadata" */
export type Users_Metadata_Avg_Order_By = {
  store_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "users_metadata". All fields are combined with a logical 'AND'. */
export type Users_Metadata_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Metadata_Bool_Exp>>;
  _not?: InputMaybe<Users_Metadata_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Metadata_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  store_id?: InputMaybe<Int_Comparison_Exp>;
  stores?: InputMaybe<Stores_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "users_metadata" */
export enum Users_Metadata_Constraint {
  /** unique or primary key constraint */
  UsersMetadataPkey = 'users_metadata_pkey',
  /** unique or primary key constraint */
  UsersMetadataUserIdStoreIdKey = 'users_metadata_user_id_store_id_key'
}

/** input type for incrementing numeric columns in table "users_metadata" */
export type Users_Metadata_Inc_Input = {
  store_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "users_metadata" */
export type Users_Metadata_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  store_id?: InputMaybe<Scalars['Int']>;
  stores?: InputMaybe<Stores_Obj_Rel_Insert_Input>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Users_Metadata_Max_Fields = {
  __typename?: 'users_metadata_max_fields';
  id?: Maybe<Scalars['uuid']>;
  store_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "users_metadata" */
export type Users_Metadata_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  store_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Metadata_Min_Fields = {
  __typename?: 'users_metadata_min_fields';
  id?: Maybe<Scalars['uuid']>;
  store_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "users_metadata" */
export type Users_Metadata_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  store_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "users_metadata" */
export type Users_Metadata_Mutation_Response = {
  __typename?: 'users_metadata_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users_Metadata>;
};

/** on_conflict condition type for table "users_metadata" */
export type Users_Metadata_On_Conflict = {
  constraint: Users_Metadata_Constraint;
  update_columns?: Array<Users_Metadata_Update_Column>;
  where?: InputMaybe<Users_Metadata_Bool_Exp>;
};

/** Ordering options when selecting data from "users_metadata". */
export type Users_Metadata_Order_By = {
  id?: InputMaybe<Order_By>;
  store_id?: InputMaybe<Order_By>;
  stores?: InputMaybe<Stores_Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users_metadata */
export type Users_Metadata_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users_metadata" */
export enum Users_Metadata_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  StoreId = 'store_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "users_metadata" */
export type Users_Metadata_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  store_id?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Users_Metadata_Stddev_Fields = {
  __typename?: 'users_metadata_stddev_fields';
  store_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "users_metadata" */
export type Users_Metadata_Stddev_Order_By = {
  store_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Users_Metadata_Stddev_Pop_Fields = {
  __typename?: 'users_metadata_stddev_pop_fields';
  store_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "users_metadata" */
export type Users_Metadata_Stddev_Pop_Order_By = {
  store_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Users_Metadata_Stddev_Samp_Fields = {
  __typename?: 'users_metadata_stddev_samp_fields';
  store_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "users_metadata" */
export type Users_Metadata_Stddev_Samp_Order_By = {
  store_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Users_Metadata_Sum_Fields = {
  __typename?: 'users_metadata_sum_fields';
  store_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "users_metadata" */
export type Users_Metadata_Sum_Order_By = {
  store_id?: InputMaybe<Order_By>;
};

/** update columns of table "users_metadata" */
export enum Users_Metadata_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  StoreId = 'store_id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Users_Metadata_Var_Pop_Fields = {
  __typename?: 'users_metadata_var_pop_fields';
  store_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "users_metadata" */
export type Users_Metadata_Var_Pop_Order_By = {
  store_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Users_Metadata_Var_Samp_Fields = {
  __typename?: 'users_metadata_var_samp_fields';
  store_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "users_metadata" */
export type Users_Metadata_Var_Samp_Order_By = {
  store_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Users_Metadata_Variance_Fields = {
  __typename?: 'users_metadata_variance_fields';
  store_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "users_metadata" */
export type Users_Metadata_Variance_Order_By = {
  store_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  defaultRole?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "auth.users" */
export type Users_Min_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "auth.users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "auth.users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.users". */
export type Users_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  attendances_aggregate?: InputMaybe<Attendance_Aggregate_Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Order_By>;
  disabled?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isAnonymous?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  phoneNumberVerified?: InputMaybe<Order_By>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>;
  roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
  users_metadata_aggregate?: InputMaybe<Users_Metadata_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Users_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.users" */
export enum Users_Select_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "auth.users" */
export type Users_Set_Input = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "auth.users" */
export enum Users_Update_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "whatsapp_subscription" */
export type Whatsapp_Subscription = {
  __typename?: 'whatsapp_subscription';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  until: Scalars['timestamptz'];
};

/** aggregated selection of "whatsapp_subscription" */
export type Whatsapp_Subscription_Aggregate = {
  __typename?: 'whatsapp_subscription_aggregate';
  aggregate?: Maybe<Whatsapp_Subscription_Aggregate_Fields>;
  nodes: Array<Whatsapp_Subscription>;
};

/** aggregate fields of "whatsapp_subscription" */
export type Whatsapp_Subscription_Aggregate_Fields = {
  __typename?: 'whatsapp_subscription_aggregate_fields';
  avg?: Maybe<Whatsapp_Subscription_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Whatsapp_Subscription_Max_Fields>;
  min?: Maybe<Whatsapp_Subscription_Min_Fields>;
  stddev?: Maybe<Whatsapp_Subscription_Stddev_Fields>;
  stddev_pop?: Maybe<Whatsapp_Subscription_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Whatsapp_Subscription_Stddev_Samp_Fields>;
  sum?: Maybe<Whatsapp_Subscription_Sum_Fields>;
  var_pop?: Maybe<Whatsapp_Subscription_Var_Pop_Fields>;
  var_samp?: Maybe<Whatsapp_Subscription_Var_Samp_Fields>;
  variance?: Maybe<Whatsapp_Subscription_Variance_Fields>;
};


/** aggregate fields of "whatsapp_subscription" */
export type Whatsapp_Subscription_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Whatsapp_Subscription_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Whatsapp_Subscription_Avg_Fields = {
  __typename?: 'whatsapp_subscription_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "whatsapp_subscription". All fields are combined with a logical 'AND'. */
export type Whatsapp_Subscription_Bool_Exp = {
  _and?: InputMaybe<Array<Whatsapp_Subscription_Bool_Exp>>;
  _not?: InputMaybe<Whatsapp_Subscription_Bool_Exp>;
  _or?: InputMaybe<Array<Whatsapp_Subscription_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  until?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "whatsapp_subscription" */
export enum Whatsapp_Subscription_Constraint {
  /** unique or primary key constraint */
  WhatsappSubscriptionPkey = 'whatsapp_subscription_pkey'
}

/** input type for incrementing numeric columns in table "whatsapp_subscription" */
export type Whatsapp_Subscription_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "whatsapp_subscription" */
export type Whatsapp_Subscription_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  until?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Whatsapp_Subscription_Max_Fields = {
  __typename?: 'whatsapp_subscription_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  until?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Whatsapp_Subscription_Min_Fields = {
  __typename?: 'whatsapp_subscription_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  until?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "whatsapp_subscription" */
export type Whatsapp_Subscription_Mutation_Response = {
  __typename?: 'whatsapp_subscription_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Whatsapp_Subscription>;
};

/** on_conflict condition type for table "whatsapp_subscription" */
export type Whatsapp_Subscription_On_Conflict = {
  constraint: Whatsapp_Subscription_Constraint;
  update_columns?: Array<Whatsapp_Subscription_Update_Column>;
  where?: InputMaybe<Whatsapp_Subscription_Bool_Exp>;
};

/** Ordering options when selecting data from "whatsapp_subscription". */
export type Whatsapp_Subscription_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  until?: InputMaybe<Order_By>;
};

/** primary key columns input for table: whatsapp_subscription */
export type Whatsapp_Subscription_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "whatsapp_subscription" */
export enum Whatsapp_Subscription_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Until = 'until'
}

/** input type for updating data in table "whatsapp_subscription" */
export type Whatsapp_Subscription_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  until?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Whatsapp_Subscription_Stddev_Fields = {
  __typename?: 'whatsapp_subscription_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Whatsapp_Subscription_Stddev_Pop_Fields = {
  __typename?: 'whatsapp_subscription_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Whatsapp_Subscription_Stddev_Samp_Fields = {
  __typename?: 'whatsapp_subscription_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Whatsapp_Subscription_Sum_Fields = {
  __typename?: 'whatsapp_subscription_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "whatsapp_subscription" */
export enum Whatsapp_Subscription_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Until = 'until'
}

/** aggregate var_pop on columns */
export type Whatsapp_Subscription_Var_Pop_Fields = {
  __typename?: 'whatsapp_subscription_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Whatsapp_Subscription_Var_Samp_Fields = {
  __typename?: 'whatsapp_subscription_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Whatsapp_Subscription_Variance_Fields = {
  __typename?: 'whatsapp_subscription_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Customer_CreateCustomerMutationVariables = Exact<{
  customer: Customers_Insert_Input;
}>;


export type Customer_CreateCustomerMutation = { __typename?: 'mutation_root', insert_customers_one?: { __typename?: 'customers', id: any, name?: string | null, email?: string | null, phone_number: string } | null };

export type Customer_GetCustomerByEmailOrPhoneQueryVariables = Exact<{
  _or?: InputMaybe<Array<Customers_Bool_Exp> | Customers_Bool_Exp>;
}>;


export type Customer_GetCustomerByEmailOrPhoneQuery = { __typename?: 'query_root', customers: Array<{ __typename?: 'customers', id: any, name?: string | null, phone_number: string, email?: string | null }> };

export type Dashboard_GetBasicDashboardDataQueryVariables = Exact<{
  startDate: Scalars['timestamptz'];
  untilDate: Scalars['timestamptz'];
  storeIds: Array<Scalars['Int']> | Scalars['Int'];
}>;


export type Dashboard_GetBasicDashboardDataQuery = { __typename?: 'query_root', totalCustomer: { __typename?: 'customers_aggregate', aggregate?: { __typename?: 'customers_aggregate_fields', count: number } | null }, firstTransactionDate: { __typename?: 'transaction_aggregate', aggregate?: { __typename?: 'transaction_aggregate_fields', min?: { __typename?: 'transaction_min_fields', created_at?: any | null } | null } | null }, totalSuccessTransaction: { __typename?: 'transaction_aggregate', aggregate?: { __typename?: 'transaction_aggregate_fields', count: number } | null }, totalReturnedTransaction: { __typename?: 'transaction_aggregate', aggregate?: { __typename?: 'transaction_aggregate_fields', count: number } | null }, totalItemSold: { __typename?: 'transaction_items_aggregate', aggregate?: { __typename?: 'transaction_items_aggregate_fields', sum?: { __typename?: 'transaction_items_sum_fields', purchase_qty?: number | null } | null } | null }, totalItemReturned: { __typename?: 'transaction_items_aggregate', aggregate?: { __typename?: 'transaction_items_aggregate_fields', sum?: { __typename?: 'transaction_items_sum_fields', purchase_qty?: number | null } | null } | null } };

export type Dashboard_GetPeriodicChartDataQueryVariables = Exact<{
  startDate: Scalars['timestamptz'];
  untilDate: Scalars['timestamptz'];
  storeIds: Array<Scalars['Int']> | Scalars['Int'];
}>;


export type Dashboard_GetPeriodicChartDataQuery = { __typename?: 'query_root', transaction: Array<{ __typename?: 'transaction', total_profit?: any | null, total_transaction?: any | null, total_purchased_product?: any | null, store_id: number, transaction_payment_type_enum: { __typename?: 'transaction_payment_type_enum', title: string, payment_type: string } }>, operational_costs_aggregate: { __typename?: 'operational_costs_aggregate', aggregate?: { __typename?: 'operational_costs_aggregate_fields', sum?: { __typename?: 'operational_costs_sum_fields', cost?: number | null } | null } | null } };

export type Inventory_UpdateInventoryProductByIdMutationVariables = Exact<{
  id: Scalars['uuid'];
  updateInventory?: InputMaybe<Inventory_Products_Set_Input>;
}>;


export type Inventory_UpdateInventoryProductByIdMutation = { __typename?: 'mutation_root', update_inventory_products_by_pk?: { __typename?: 'inventory_products', available_qty: number, min_available_qty: number, product: { __typename?: 'products', name: string, product_category: { __typename?: 'product_categories', name: string } } } | null };

export type Inventory_GetInventoryProductAvailableQtytByIdsQueryVariables = Exact<{
  _in: Array<Scalars['uuid']> | Scalars['uuid'];
}>;


export type Inventory_GetInventoryProductAvailableQtytByIdsQuery = { __typename?: 'query_root', inventory_products: Array<{ __typename?: 'inventory_products', id: any, updated_at: any, available_qty: number }> };

export type Inventory_GetInventoryProductByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type Inventory_GetInventoryProductByIdQuery = { __typename?: 'query_root', inventory_products_by_pk?: { __typename?: 'inventory_products', available_qty: number, min_available_qty: number, product: { __typename?: 'products', name: string }, store: { __typename?: 'stores', name: string } } | null };

export type Notification_CreateOneNotificationMutationVariables = Exact<{
  notification?: InputMaybe<Notification_Insert_Input>;
}>;


export type Notification_CreateOneNotificationMutation = { __typename?: 'mutation_root', insert_notification_one?: { __typename?: 'notification', id: any } | null };

export type Notification_GetActiveFcmTokensQueryVariables = Exact<{ [key: string]: never; }>;


export type Notification_GetActiveFcmTokensQuery = { __typename?: 'query_root', active_fcm_tokens: Array<{ __typename?: 'active_fcm_tokens', fcm_token: string }> };

export type Transaction_CreateOneTransactionMutationVariables = Exact<{
  object?: InputMaybe<Transaction_Insert_Input>;
}>;


export type Transaction_CreateOneTransactionMutation = { __typename?: 'mutation_root', insert_transaction_one?: { __typename?: 'transaction', invoice_number: string } | null };

export type Transaction_CreateOneTransactionItemMutationVariables = Exact<{
  object?: InputMaybe<Transaction_Items_Insert_Input>;
}>;


export type Transaction_CreateOneTransactionItemMutation = { __typename?: 'mutation_root', insert_transaction_items_one?: { __typename?: 'transaction_items', id: any } | null };

export type Transaction_CreateTransactionReceiptMutationVariables = Exact<{
  receipt: Transaction_Receipts_Insert_Input;
}>;


export type Transaction_CreateTransactionReceiptMutation = { __typename?: 'mutation_root', insert_transaction_receipts_one?: { __typename?: 'transaction_receipts', id: any, is_sent: boolean, receipt_type: Transaction_Receipt_Type_Enum_Enum, transaction_invoice_number: string, created_at: any } | null };

export type Transaction_InsertTransactionItemsMutationVariables = Exact<{
  objects: Array<Transaction_Items_Insert_Input> | Transaction_Items_Insert_Input;
}>;


export type Transaction_InsertTransactionItemsMutation = { __typename?: 'mutation_root', insert_transaction_items?: { __typename?: 'transaction_items_mutation_response', affected_rows: number } | null };

export type Transaction_UpdateMainTransactionMutationVariables = Exact<{
  invoice_number: Scalars['String'];
  main_transaction: Transaction_Set_Input;
}>;


export type Transaction_UpdateMainTransactionMutation = { __typename?: 'mutation_root', update_transaction_by_pk?: { __typename?: 'transaction', invoice_number: string, payment_type: Transaction_Payment_Type_Enum_Enum, return_reason?: string | null, total_transaction?: any | null } | null };

export type Transaction_UpdateTransactionForRefundAllMutationVariables = Exact<{
  invoice_number: Scalars['String'];
  main_transaction_status: Transaction_Status_Enum_Enum;
  items_transaction_status: Transaction_Status_Enum_Enum;
  return_reason: Scalars['String'];
  karyawan_name: Scalars['String'];
}>;


export type Transaction_UpdateTransactionForRefundAllMutation = { __typename?: 'mutation_root', update_transaction_by_pk?: { __typename?: 'transaction', invoice_number: string, payment_type: Transaction_Payment_Type_Enum_Enum, return_reason?: string | null, total_transaction?: any | null } | null, update_transaction_items?: { __typename?: 'transaction_items_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'transaction_items', transaction_invoice_number: string, transaction_status_enum: { __typename?: 'transaction_status_enum', title: string, transaction_status: string } }> } | null };

export type Transaction_UpdateTransactionItemByPkMutationVariables = Exact<{
  transaction_item_id: Scalars['uuid'];
  transaction_item: Transaction_Items_Set_Input;
}>;


export type Transaction_UpdateTransactionItemByPkMutation = { __typename?: 'mutation_root', update_transaction_items_by_pk?: { __typename?: 'transaction_items', id: any } | null };

export type Transaction_GetAllPaymentTypeEnumQueryVariables = Exact<{ [key: string]: never; }>;


export type Transaction_GetAllPaymentTypeEnumQuery = { __typename?: 'query_root', transaction_payment_type_enum: Array<{ __typename?: 'transaction_payment_type_enum', payment_type: string, title: string }> };

export type Transaction_GetLastTransactionNumberQueryVariables = Exact<{
  created_at_gte?: InputMaybe<Scalars['timestamptz']>;
}>;


export type Transaction_GetLastTransactionNumberQuery = { __typename?: 'query_root', transaction: Array<{ __typename?: 'transaction', invoice_number: string, created_at: any }> };

export type Transaction_GetTransactionByPkQueryVariables = Exact<{
  invoice_number: Scalars['String'];
}>;


export type Transaction_GetTransactionByPkQuery = { __typename?: 'query_root', transaction_by_pk?: { __typename?: 'transaction', cash_change?: any | null, cash_in_amount: number, created_at: any, invoice_number: string, payment_type: Transaction_Payment_Type_Enum_Enum, total_transaction?: any | null, transaction_status: Transaction_Status_Enum_Enum, transaction_items: Array<{ __typename?: 'transaction_items', subtotal?: number | null, product_name: string, purchase_qty: number, transaction_status: Transaction_Status_Enum_Enum, transaction_status_enum: { __typename?: 'transaction_status_enum', title: string, transaction_status: string } }>, transaction_status_enum: { __typename?: 'transaction_status_enum', title: string, transaction_status: string } } | null };

export type User_DeleteUserMutationVariables = Exact<{
  email?: InputMaybe<Scalars['citext']>;
}>;


export type User_DeleteUserMutation = { __typename?: 'mutation_root', deleteUsers?: { __typename?: 'users_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'users', id: any }> } | null };

export type User_UpdateUserMutationVariables = Exact<{
  id: Scalars['uuid'];
  updateUser?: InputMaybe<Users_Set_Input>;
  insertUserRole?: InputMaybe<AuthUserRoles_Insert_Input>;
  insertMetadata?: InputMaybe<Users_Metadata_Insert_Input>;
}>;


export type User_UpdateUserMutation = { __typename?: 'mutation_root', updateUser?: { __typename?: 'users', id: any } | null, insertAuthUserRole?: { __typename?: 'authUserRoles', role: string, userId: any, id: any } | null, insert_users_metadata_one?: { __typename?: 'users_metadata', id: any, store_id?: number | null } | null };

export type User_GetUserByEmailQueryVariables = Exact<{
  email: Scalars['citext'];
}>;


export type User_GetUserByEmailQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any }> };

export type Whatsapp_GetLastWhatsappSubscriptionQueryVariables = Exact<{ [key: string]: never; }>;


export type Whatsapp_GetLastWhatsappSubscriptionQuery = { __typename?: 'query_root', whatsapp_subscription: Array<{ __typename?: 'whatsapp_subscription', until: any, id: number, created_at: any }> };


export const Customer_CreateCustomerDocument = gql`
    mutation Customer_CreateCustomer($customer: customers_insert_input!) {
  insert_customers_one(
    object: $customer
    on_conflict: {update_columns: [name, phone_number, updated_at], constraint: customers_phone_number_key}
  ) {
    id
    name
    email
    phone_number
  }
}
    `;
export const Customer_GetCustomerByEmailOrPhoneDocument = gql`
    query Customer_GetCustomerByEmailOrPhone($_or: [customers_bool_exp!] = {}) {
  customers(
    where: {_or: $_or}
    limit: 1
    order_by: {updated_at: desc, created_at: desc}
  ) {
    id
    name
    phone_number
    email
  }
}
    `;
export const Dashboard_GetBasicDashboardDataDocument = gql`
    query Dashboard_GetBasicDashboardData($startDate: timestamptz!, $untilDate: timestamptz!, $storeIds: [Int!]!) {
  totalCustomer: customers_aggregate(
    where: {_or: [{created_at: {_gte: $startDate, _lte: $untilDate}}, {updated_at: {_gte: $startDate, _lte: $untilDate}}], transaction_receipts: {transaction: {store_id: {_in: $storeIds}}}}
  ) {
    aggregate {
      count
    }
  }
  firstTransactionDate: transaction_aggregate(where: {store_id: {_in: $storeIds}}) {
    aggregate {
      min {
        created_at
      }
    }
  }
  totalSuccessTransaction: transaction_aggregate(
    where: {store_id: {_in: $storeIds}, created_at: {_gte: $startDate, _lte: $untilDate}, transaction_status: {_in: [success]}}
  ) {
    aggregate {
      count
    }
  }
  totalReturnedTransaction: transaction_aggregate(
    where: {store_id: {_in: $storeIds}, created_at: {_gte: $startDate, _lte: $untilDate}, transaction_status: {_in: [return_part, return_all]}}
  ) {
    aggregate {
      count
    }
  }
  totalItemSold: transaction_items_aggregate(
    where: {transaction_status: {_in: success}, transaction: {store_id: {_in: $storeIds}, created_at: {_gte: $startDate, _lte: $untilDate}}}
  ) {
    aggregate {
      sum {
        purchase_qty
      }
    }
  }
  totalItemReturned: transaction_items_aggregate(
    where: {transaction_status: {_in: [return_all, return_part]}, transaction: {store_id: {_in: $storeIds}, created_at: {_gte: $startDate, _lte: $untilDate}}}
  ) {
    aggregate {
      sum {
        purchase_qty
      }
    }
  }
}
    `;
export const Dashboard_GetPeriodicChartDataDocument = gql`
    query Dashboard_GetPeriodicChartData($startDate: timestamptz!, $untilDate: timestamptz!, $storeIds: [Int!]!) {
  transaction(
    where: {created_at: {_gt: $startDate, _lte: $untilDate}, store_id: {_in: $storeIds}}
  ) {
    total_profit
    total_transaction
    total_purchased_product
    store_id
    transaction_payment_type_enum {
      title
      payment_type
    }
  }
  operational_costs_aggregate(
    where: {created_at: {_gt: $startDate, _lte: $untilDate}, store_id: {_in: $storeIds}}
  ) {
    aggregate {
      sum {
        cost
      }
    }
  }
}
    `;
export const Inventory_UpdateInventoryProductByIdDocument = gql`
    mutation Inventory_UpdateInventoryProductById($id: uuid!, $updateInventory: inventory_products_set_input = {}) {
  update_inventory_products_by_pk(pk_columns: {id: $id}, _set: $updateInventory) {
    available_qty
    min_available_qty
    product {
      name
      product_category {
        name
      }
    }
  }
}
    `;
export const Inventory_GetInventoryProductAvailableQtytByIdsDocument = gql`
    query Inventory_GetInventoryProductAvailableQtytByIds($_in: [uuid!]!) {
  inventory_products(where: {id: {_in: $_in}}) {
    id
    updated_at
    available_qty
  }
}
    `;
export const Inventory_GetInventoryProductByIdDocument = gql`
    query Inventory_GetInventoryProductById($id: uuid!) {
  inventory_products_by_pk(id: $id) {
    available_qty
    min_available_qty
    product {
      name
    }
    store {
      name
    }
  }
}
    `;
export const Notification_CreateOneNotificationDocument = gql`
    mutation Notification_CreateOneNotification($notification: notification_insert_input = {}) {
  insert_notification_one(object: $notification) {
    id
  }
}
    `;
export const Notification_GetActiveFcmTokensDocument = gql`
    query Notification_GetActiveFcmTokens {
  active_fcm_tokens(distinct_on: fcm_token) {
    fcm_token
  }
}
    `;
export const Transaction_CreateOneTransactionDocument = gql`
    mutation Transaction_CreateOneTransaction($object: transaction_insert_input = {}) {
  insert_transaction_one(object: $object) {
    invoice_number
  }
}
    `;
export const Transaction_CreateOneTransactionItemDocument = gql`
    mutation Transaction_CreateOneTransactionItem($object: transaction_items_insert_input = {}) {
  insert_transaction_items_one(object: $object) {
    id
  }
}
    `;
export const Transaction_CreateTransactionReceiptDocument = gql`
    mutation Transaction_CreateTransactionReceipt($receipt: transaction_receipts_insert_input!) {
  insert_transaction_receipts_one(object: $receipt) {
    id
    is_sent
    receipt_type
    transaction_invoice_number
    created_at
  }
}
    `;
export const Transaction_InsertTransactionItemsDocument = gql`
    mutation Transaction_InsertTransactionItems($objects: [transaction_items_insert_input!]!) {
  insert_transaction_items(objects: $objects) {
    affected_rows
  }
}
    `;
export const Transaction_UpdateMainTransactionDocument = gql`
    mutation Transaction_UpdateMainTransaction($invoice_number: String!, $main_transaction: transaction_set_input!) {
  update_transaction_by_pk(
    pk_columns: {invoice_number: $invoice_number}
    _set: $main_transaction
  ) {
    invoice_number
    payment_type
    return_reason
    total_transaction
  }
}
    `;
export const Transaction_UpdateTransactionForRefundAllDocument = gql`
    mutation Transaction_UpdateTransactionForRefundAll($invoice_number: String!, $main_transaction_status: transaction_status_enum_enum!, $items_transaction_status: transaction_status_enum_enum!, $return_reason: String!, $karyawan_name: String!) {
  update_transaction_by_pk(
    pk_columns: {invoice_number: $invoice_number}
    _set: {transaction_status: $main_transaction_status, return_reason: $return_reason, cash_in_amount: 0, payment_type: CASH, karyawan_name: $karyawan_name}
  ) {
    invoice_number
    payment_type
    return_reason
    total_transaction
  }
  update_transaction_items(
    where: {transaction_invoice_number: {_eq: $invoice_number}}
    _set: {transaction_status: $items_transaction_status}
  ) {
    affected_rows
    returning {
      transaction_invoice_number
      transaction_status_enum {
        title
        transaction_status
      }
    }
  }
}
    `;
export const Transaction_UpdateTransactionItemByPkDocument = gql`
    mutation Transaction_UpdateTransactionItemByPK($transaction_item_id: uuid!, $transaction_item: transaction_items_set_input!) {
  update_transaction_items_by_pk(
    pk_columns: {id: $transaction_item_id}
    _set: $transaction_item
  ) {
    id
  }
}
    `;
export const Transaction_GetAllPaymentTypeEnumDocument = gql`
    query Transaction_GetAllPaymentTypeEnum {
  transaction_payment_type_enum {
    payment_type
    title
  }
}
    `;
export const Transaction_GetLastTransactionNumberDocument = gql`
    query Transaction_GetLastTransactionNumber($created_at_gte: timestamptz = "") {
  transaction(
    where: {created_at: {_gte: $created_at_gte}}
    order_by: {created_at: desc_nulls_last}
    limit: 1
  ) {
    invoice_number
    created_at
  }
}
    `;
export const Transaction_GetTransactionByPkDocument = gql`
    query Transaction_GetTransactionByPK($invoice_number: String!) {
  transaction_by_pk(invoice_number: $invoice_number) {
    cash_change
    cash_in_amount
    created_at
    invoice_number
    payment_type
    total_transaction
    transaction_items {
      subtotal
      product_name
      purchase_qty
      transaction_status_enum {
        title
        transaction_status
      }
      transaction_status
    }
    transaction_status_enum {
      title
      transaction_status
    }
    transaction_status
  }
}
    `;
export const User_DeleteUserDocument = gql`
    mutation User_DeleteUser($email: citext = "") {
  deleteUsers(where: {email: {_eq: $email}}) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export const User_UpdateUserDocument = gql`
    mutation User_UpdateUser($id: uuid!, $updateUser: users_set_input = {}, $insertUserRole: authUserRoles_insert_input = {}, $insertMetadata: users_metadata_insert_input = {}) {
  updateUser(pk_columns: {id: $id}, _set: $updateUser) {
    id
  }
  insertAuthUserRole(object: $insertUserRole) {
    role
    userId
    id
  }
  insert_users_metadata_one(object: $insertMetadata) {
    id
    store_id
  }
}
    `;
export const User_GetUserByEmailDocument = gql`
    query User_GetUserByEmail($email: citext!) {
  users(limit: 1, where: {email: {_eq: $email}}) {
    id
  }
}
    `;
export const Whatsapp_GetLastWhatsappSubscriptionDocument = gql`
    query Whatsapp_GetLastWhatsappSubscription {
  whatsapp_subscription(limit: 1, order_by: {until: desc_nulls_last}) {
    until
    id
    created_at
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();
const Customer_CreateCustomerDocumentString = print(Customer_CreateCustomerDocument);
const Customer_GetCustomerByEmailOrPhoneDocumentString = print(Customer_GetCustomerByEmailOrPhoneDocument);
const Dashboard_GetBasicDashboardDataDocumentString = print(Dashboard_GetBasicDashboardDataDocument);
const Dashboard_GetPeriodicChartDataDocumentString = print(Dashboard_GetPeriodicChartDataDocument);
const Inventory_UpdateInventoryProductByIdDocumentString = print(Inventory_UpdateInventoryProductByIdDocument);
const Inventory_GetInventoryProductAvailableQtytByIdsDocumentString = print(Inventory_GetInventoryProductAvailableQtytByIdsDocument);
const Inventory_GetInventoryProductByIdDocumentString = print(Inventory_GetInventoryProductByIdDocument);
const Notification_CreateOneNotificationDocumentString = print(Notification_CreateOneNotificationDocument);
const Notification_GetActiveFcmTokensDocumentString = print(Notification_GetActiveFcmTokensDocument);
const Transaction_CreateOneTransactionDocumentString = print(Transaction_CreateOneTransactionDocument);
const Transaction_CreateOneTransactionItemDocumentString = print(Transaction_CreateOneTransactionItemDocument);
const Transaction_CreateTransactionReceiptDocumentString = print(Transaction_CreateTransactionReceiptDocument);
const Transaction_InsertTransactionItemsDocumentString = print(Transaction_InsertTransactionItemsDocument);
const Transaction_UpdateMainTransactionDocumentString = print(Transaction_UpdateMainTransactionDocument);
const Transaction_UpdateTransactionForRefundAllDocumentString = print(Transaction_UpdateTransactionForRefundAllDocument);
const Transaction_UpdateTransactionItemByPkDocumentString = print(Transaction_UpdateTransactionItemByPkDocument);
const Transaction_GetAllPaymentTypeEnumDocumentString = print(Transaction_GetAllPaymentTypeEnumDocument);
const Transaction_GetLastTransactionNumberDocumentString = print(Transaction_GetLastTransactionNumberDocument);
const Transaction_GetTransactionByPkDocumentString = print(Transaction_GetTransactionByPkDocument);
const User_DeleteUserDocumentString = print(User_DeleteUserDocument);
const User_UpdateUserDocumentString = print(User_UpdateUserDocument);
const User_GetUserByEmailDocumentString = print(User_GetUserByEmailDocument);
const Whatsapp_GetLastWhatsappSubscriptionDocumentString = print(Whatsapp_GetLastWhatsappSubscriptionDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Customer_CreateCustomer(variables: Customer_CreateCustomerMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: Customer_CreateCustomerMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<Customer_CreateCustomerMutation>(Customer_CreateCustomerDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Customer_CreateCustomer', 'mutation');
    },
    Customer_GetCustomerByEmailOrPhone(variables?: Customer_GetCustomerByEmailOrPhoneQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: Customer_GetCustomerByEmailOrPhoneQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<Customer_GetCustomerByEmailOrPhoneQuery>(Customer_GetCustomerByEmailOrPhoneDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Customer_GetCustomerByEmailOrPhone', 'query');
    },
    Dashboard_GetBasicDashboardData(variables: Dashboard_GetBasicDashboardDataQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: Dashboard_GetBasicDashboardDataQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<Dashboard_GetBasicDashboardDataQuery>(Dashboard_GetBasicDashboardDataDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Dashboard_GetBasicDashboardData', 'query');
    },
    Dashboard_GetPeriodicChartData(variables: Dashboard_GetPeriodicChartDataQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: Dashboard_GetPeriodicChartDataQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<Dashboard_GetPeriodicChartDataQuery>(Dashboard_GetPeriodicChartDataDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Dashboard_GetPeriodicChartData', 'query');
    },
    Inventory_UpdateInventoryProductById(variables: Inventory_UpdateInventoryProductByIdMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: Inventory_UpdateInventoryProductByIdMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<Inventory_UpdateInventoryProductByIdMutation>(Inventory_UpdateInventoryProductByIdDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Inventory_UpdateInventoryProductById', 'mutation');
    },
    Inventory_GetInventoryProductAvailableQtytByIds(variables: Inventory_GetInventoryProductAvailableQtytByIdsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: Inventory_GetInventoryProductAvailableQtytByIdsQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<Inventory_GetInventoryProductAvailableQtytByIdsQuery>(Inventory_GetInventoryProductAvailableQtytByIdsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Inventory_GetInventoryProductAvailableQtytByIds', 'query');
    },
    Inventory_GetInventoryProductById(variables: Inventory_GetInventoryProductByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: Inventory_GetInventoryProductByIdQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<Inventory_GetInventoryProductByIdQuery>(Inventory_GetInventoryProductByIdDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Inventory_GetInventoryProductById', 'query');
    },
    Notification_CreateOneNotification(variables?: Notification_CreateOneNotificationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: Notification_CreateOneNotificationMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<Notification_CreateOneNotificationMutation>(Notification_CreateOneNotificationDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Notification_CreateOneNotification', 'mutation');
    },
    Notification_GetActiveFcmTokens(variables?: Notification_GetActiveFcmTokensQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: Notification_GetActiveFcmTokensQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<Notification_GetActiveFcmTokensQuery>(Notification_GetActiveFcmTokensDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Notification_GetActiveFcmTokens', 'query');
    },
    Transaction_CreateOneTransaction(variables?: Transaction_CreateOneTransactionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: Transaction_CreateOneTransactionMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<Transaction_CreateOneTransactionMutation>(Transaction_CreateOneTransactionDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Transaction_CreateOneTransaction', 'mutation');
    },
    Transaction_CreateOneTransactionItem(variables?: Transaction_CreateOneTransactionItemMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: Transaction_CreateOneTransactionItemMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<Transaction_CreateOneTransactionItemMutation>(Transaction_CreateOneTransactionItemDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Transaction_CreateOneTransactionItem', 'mutation');
    },
    Transaction_CreateTransactionReceipt(variables: Transaction_CreateTransactionReceiptMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: Transaction_CreateTransactionReceiptMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<Transaction_CreateTransactionReceiptMutation>(Transaction_CreateTransactionReceiptDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Transaction_CreateTransactionReceipt', 'mutation');
    },
    Transaction_InsertTransactionItems(variables: Transaction_InsertTransactionItemsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: Transaction_InsertTransactionItemsMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<Transaction_InsertTransactionItemsMutation>(Transaction_InsertTransactionItemsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Transaction_InsertTransactionItems', 'mutation');
    },
    Transaction_UpdateMainTransaction(variables: Transaction_UpdateMainTransactionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: Transaction_UpdateMainTransactionMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<Transaction_UpdateMainTransactionMutation>(Transaction_UpdateMainTransactionDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Transaction_UpdateMainTransaction', 'mutation');
    },
    Transaction_UpdateTransactionForRefundAll(variables: Transaction_UpdateTransactionForRefundAllMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: Transaction_UpdateTransactionForRefundAllMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<Transaction_UpdateTransactionForRefundAllMutation>(Transaction_UpdateTransactionForRefundAllDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Transaction_UpdateTransactionForRefundAll', 'mutation');
    },
    Transaction_UpdateTransactionItemByPK(variables: Transaction_UpdateTransactionItemByPkMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: Transaction_UpdateTransactionItemByPkMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<Transaction_UpdateTransactionItemByPkMutation>(Transaction_UpdateTransactionItemByPkDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Transaction_UpdateTransactionItemByPK', 'mutation');
    },
    Transaction_GetAllPaymentTypeEnum(variables?: Transaction_GetAllPaymentTypeEnumQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: Transaction_GetAllPaymentTypeEnumQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<Transaction_GetAllPaymentTypeEnumQuery>(Transaction_GetAllPaymentTypeEnumDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Transaction_GetAllPaymentTypeEnum', 'query');
    },
    Transaction_GetLastTransactionNumber(variables?: Transaction_GetLastTransactionNumberQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: Transaction_GetLastTransactionNumberQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<Transaction_GetLastTransactionNumberQuery>(Transaction_GetLastTransactionNumberDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Transaction_GetLastTransactionNumber', 'query');
    },
    Transaction_GetTransactionByPK(variables: Transaction_GetTransactionByPkQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: Transaction_GetTransactionByPkQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<Transaction_GetTransactionByPkQuery>(Transaction_GetTransactionByPkDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Transaction_GetTransactionByPK', 'query');
    },
    User_DeleteUser(variables?: User_DeleteUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: User_DeleteUserMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<User_DeleteUserMutation>(User_DeleteUserDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'User_DeleteUser', 'mutation');
    },
    User_UpdateUser(variables: User_UpdateUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: User_UpdateUserMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<User_UpdateUserMutation>(User_UpdateUserDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'User_UpdateUser', 'mutation');
    },
    User_GetUserByEmail(variables: User_GetUserByEmailQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: User_GetUserByEmailQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<User_GetUserByEmailQuery>(User_GetUserByEmailDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'User_GetUserByEmail', 'query');
    },
    Whatsapp_GetLastWhatsappSubscription(variables?: Whatsapp_GetLastWhatsappSubscriptionQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: Whatsapp_GetLastWhatsappSubscriptionQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<Whatsapp_GetLastWhatsappSubscriptionQuery>(Whatsapp_GetLastWhatsappSubscriptionDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Whatsapp_GetLastWhatsappSubscription', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;