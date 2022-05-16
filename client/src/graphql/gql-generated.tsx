import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
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
};

export type Whatsapp_SignOutOutput = {
  __typename?: 'Whatsapp_SignOutOutput';
  is_success: Scalars['Boolean'];
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
  store_id: Scalars['Int'];
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
  store_id?: InputMaybe<Int_Comparison_Exp>;
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
  store_id?: InputMaybe<Scalars['Int']>;
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
  store_id?: InputMaybe<Order_By>;
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
  /** delete data from the table: "users_metadata" */
  delete_users_metadata?: Maybe<Users_Metadata_Mutation_Response>;
  /** delete single row from the table: "users_metadata" */
  delete_users_metadata_by_pk?: Maybe<Users_Metadata>;
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
  /** insert data into the table: "users_metadata" */
  insert_users_metadata?: Maybe<Users_Metadata_Mutation_Response>;
  /** insert a single row into the table: "users_metadata" */
  insert_users_metadata_one?: Maybe<Users_Metadata>;
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
  /** update data of the table: "users_metadata" */
  update_users_metadata?: Maybe<Users_Metadata_Mutation_Response>;
  /** update single row of the table: "users_metadata" */
  update_users_metadata_by_pk?: Maybe<Users_Metadata>;
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
export type Mutation_RootDelete_Users_MetadataArgs = {
  where: Users_Metadata_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_Metadata_By_PkArgs = {
  id: Scalars['uuid'];
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
  Whatsapp_GetAuthStatus?: Maybe<Whatsapp_GetAuthStatusOutput>;
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
  /** fetch data from the table: "inventory_products" */
  inventory_products: Array<Inventory_Products>;
  /** fetch aggregated fields from the table: "inventory_products" */
  inventory_products_aggregate: Inventory_Products_Aggregate;
  /** fetch data from the table: "inventory_products" using primary key columns */
  inventory_products_by_pk?: Maybe<Inventory_Products>;
  /** fetch data from the table: "inventory_variants_metadata" */
  inventory_variants_metadata: Array<Inventory_Variants_Metadata>;
  /** fetch aggregated fields from the table: "inventory_variants_metadata" */
  inventory_variants_metadata_aggregate: Inventory_Variants_Metadata_Aggregate;
  /** fetch data from the table: "inventory_variants_metadata" using primary key columns */
  inventory_variants_metadata_by_pk?: Maybe<Inventory_Variants_Metadata>;
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

/** columns and relationships of "stores" */
export type Stores = {
  __typename?: 'stores';
  address: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  latitude: Scalars['String'];
  longitude: Scalars['String'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  users_metadata: Array<Users_Metadata>;
  /** An aggregate relationship */
  users_metadata_aggregate: Users_Metadata_Aggregate;
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
};

/** Boolean expression to filter rows from the table "stores". All fields are combined with a logical 'AND'. */
export type Stores_Bool_Exp = {
  _and?: InputMaybe<Array<Stores_Bool_Exp>>;
  _not?: InputMaybe<Stores_Bool_Exp>;
  _or?: InputMaybe<Array<Stores_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  latitude?: InputMaybe<String_Comparison_Exp>;
  longitude?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  users_metadata?: InputMaybe<Users_Metadata_Bool_Exp>;
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
};

/** input type for inserting data into table "stores" */
export type Stores_Insert_Input = {
  address?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  users_metadata?: InputMaybe<Users_Metadata_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Stores_Max_Fields = {
  __typename?: 'stores_max_fields';
  address?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Stores_Min_Fields = {
  __typename?: 'stores_min_fields';
  address?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
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
  latitude?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  users_metadata_aggregate?: InputMaybe<Users_Metadata_Aggregate_Order_By>;
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
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "stores" */
export type Stores_Set_Input = {
  address?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Stores_Stddev_Fields = {
  __typename?: 'stores_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Stores_Stddev_Pop_Fields = {
  __typename?: 'stores_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Stores_Stddev_Samp_Fields = {
  __typename?: 'stores_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Stores_Sum_Fields = {
  __typename?: 'stores_sum_fields';
  id?: Maybe<Scalars['Int']>;
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
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Stores_Var_Pop_Fields = {
  __typename?: 'stores_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Stores_Var_Samp_Fields = {
  __typename?: 'stores_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Stores_Variance_Fields = {
  __typename?: 'stores_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
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
  /** fetch data from the table: "inventory_products" */
  inventory_products: Array<Inventory_Products>;
  /** fetch aggregated fields from the table: "inventory_products" */
  inventory_products_aggregate: Inventory_Products_Aggregate;
  /** fetch data from the table: "inventory_products" using primary key columns */
  inventory_products_by_pk?: Maybe<Inventory_Products>;
  /** fetch data from the table: "inventory_variants_metadata" */
  inventory_variants_metadata: Array<Inventory_Variants_Metadata>;
  /** fetch aggregated fields from the table: "inventory_variants_metadata" */
  inventory_variants_metadata_aggregate: Inventory_Variants_Metadata_Aggregate;
  /** fetch data from the table: "inventory_variants_metadata" using primary key columns */
  inventory_variants_metadata_by_pk?: Maybe<Inventory_Variants_Metadata>;
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

/** columns and relationships of "auth.users" */
export type Users = {
  __typename?: 'users';
  activeMfaType?: Maybe<Scalars['String']>;
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
  UsersMetadataPkey = 'users_metadata_pkey'
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

export type Inventory_CreateInventoryProductMutationVariables = Exact<{
  inventory_product: Inventory_Products_Insert_Input;
}>;


export type Inventory_CreateInventoryProductMutation = { __typename?: 'mutation_root', insert_inventory_products_one?: { __typename?: 'inventory_products', id: any, inventory_product_variants: Array<{ __typename?: 'inventory_product_variants', inventory_variants_metadata: { __typename?: 'inventory_variants_metadata', variant_title: string } }> } | null };

export type Inventory_CreateInventoryVariantMetadataMutationVariables = Exact<{
  objects: Array<Inventory_Variants_Metadata_Insert_Input> | Inventory_Variants_Metadata_Insert_Input;
}>;


export type Inventory_CreateInventoryVariantMetadataMutation = { __typename?: 'mutation_root', insert_inventory_variants_metadata?: { __typename?: 'inventory_variants_metadata_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'inventory_variants_metadata', id: number, variant_title: string }> } | null };

export type Inventory_DeleteInventoryVariantsMetadataByTitleMutationVariables = Exact<{
  variant_title?: InputMaybe<Scalars['String']>;
}>;


export type Inventory_DeleteInventoryVariantsMetadataByTitleMutation = { __typename?: 'mutation_root', delete_inventory_variants_metadata?: { __typename?: 'inventory_variants_metadata_mutation_response', affected_rows: number } | null };

export type Inventory_UpdateInventoryProductMutationVariables = Exact<{
  inventory_product_id: Scalars['uuid'];
  update_rocketjaket_inventory_product_by_pk: Inventory_Products_Set_Input;
  insert_rocketjaket_inventory_product_variant: Array<Inventory_Product_Variants_Insert_Input> | Inventory_Product_Variants_Insert_Input;
}>;


export type Inventory_UpdateInventoryProductMutation = { __typename?: 'mutation_root', update_inventory_products_by_pk?: { __typename?: 'inventory_products', product: { __typename?: 'products', name: string, product_category: { __typename?: 'product_categories', name: string } } } | null, delete_inventory_product_variants?: { __typename?: 'inventory_product_variants_mutation_response', affected_rows: number } | null, insert_inventory_product_variants?: { __typename?: 'inventory_product_variants_mutation_response', affected_rows: number } | null };

export type Inventory_UpdateInventoryVariantsMetadataMutationVariables = Exact<{
  upsert: Array<Inventory_Variants_Metadata_Insert_Input> | Inventory_Variants_Metadata_Insert_Input;
  deleteIds: Array<Scalars['Int']> | Scalars['Int'];
}>;


export type Inventory_UpdateInventoryVariantsMetadataMutation = { __typename?: 'mutation_root', insert_inventory_variants_metadata?: { __typename?: 'inventory_variants_metadata_mutation_response', affected_rows: number } | null, delete_inventory_variants_metadata?: { __typename?: 'inventory_variants_metadata_mutation_response', affected_rows: number } | null };

export type Inventory_GetAllInventoryProductByStoreIdQueryVariables = Exact<{
  store_id: Scalars['Int'];
}>;


export type Inventory_GetAllInventoryProductByStoreIdQuery = { __typename?: 'query_root', inventory_products: Array<{ __typename?: 'inventory_products', id: any, available_qty: number, min_available_qty: number, override_selling_price?: number | null, override_discount?: number | null, override_capital_price?: number | null, updated_at: any, product: { __typename?: 'products', name: string, capital_price: number, selling_price: number, discount: number, photo_id?: string | null, updated_at: any, product_category: { __typename?: 'product_categories', id: number, name: string } }, inventory_product_variants: Array<{ __typename?: 'inventory_product_variants', inventory_variants_metadata: { __typename?: 'inventory_variants_metadata', variant_title: string, variant_value: string } }> }> };

export type Inventory_GetAllVariantMetadataQueryVariables = Exact<{ [key: string]: never; }>;


export type Inventory_GetAllVariantMetadataQuery = { __typename?: 'query_root', inventory_variants_metadata: Array<{ __typename?: 'inventory_variants_metadata', variant_title: string, variant_value: string, id: number }> };

export type Inventory_GetInventoryProductByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['uuid']>;
}>;


export type Inventory_GetInventoryProductByIdQuery = { __typename?: 'query_root', inventory_products_by_pk?: { __typename?: 'inventory_products', available_qty: number, created_at: any, min_available_qty: number, override_capital_price?: number | null, override_discount?: number | null, override_selling_price?: number | null, product_id: any, store_id: number, updated_at: any, inventory_product_variants: Array<{ __typename?: 'inventory_product_variants', inventory_variants_metadata: { __typename?: 'inventory_variants_metadata', id: number, variant_title: string, variant_value: string } }> } | null };

export type Inventory_GetVariantMetadataByTitleQueryVariables = Exact<{
  variant_title: Scalars['String'];
}>;


export type Inventory_GetVariantMetadataByTitleQuery = { __typename?: 'query_root', inventory_variants_metadata: Array<{ __typename?: 'inventory_variants_metadata', variant_title: string, variant_value: string, id: number }> };

export type Produk_CreateKategoriProdukMutationVariables = Exact<{
  category?: InputMaybe<Product_Categories_Insert_Input>;
}>;


export type Produk_CreateKategoriProdukMutation = { __typename?: 'mutation_root', insert_product_categories_one?: { __typename?: 'product_categories', id: number, name: string } | null };

export type Produk_CreateProdukMutationVariables = Exact<{
  object: Products_Insert_Input;
}>;


export type Produk_CreateProdukMutation = { __typename?: 'mutation_root', insert_products_one?: { __typename?: 'products', id: any, name: string } | null };

export type Produk_UpdateKategoriProdukMutationVariables = Exact<{
  id: Scalars['Int'];
  category: Product_Categories_Set_Input;
}>;


export type Produk_UpdateKategoriProdukMutation = { __typename?: 'mutation_root', update_product_categories_by_pk?: { __typename?: 'product_categories', name: string, id: number, description: string } | null };

export type Produk_UpdateProdukByPkMutationVariables = Exact<{
  id: Scalars['uuid'];
  product: Products_Set_Input;
}>;


export type Produk_UpdateProdukByPkMutation = { __typename?: 'mutation_root', update_products_by_pk?: { __typename?: 'products', id: any, name: string } | null };

export type Produk_GetAllKategoriProdukQueryVariables = Exact<{ [key: string]: never; }>;


export type Produk_GetAllKategoriProdukQuery = { __typename?: 'query_root', product_categories: Array<{ __typename?: 'product_categories', id: number, name: string, description: string }> };

export type Produk_GetAllProdukQueryVariables = Exact<{ [key: string]: never; }>;


export type Produk_GetAllProdukQuery = { __typename?: 'query_root', products: Array<{ __typename?: 'products', name: string, id: any, photo_id?: string | null, capital_price: number, discount: number, selling_price: number, product_category: { __typename?: 'product_categories', name: string } }> };

export type Produk_GetKategoriProdukByPkQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type Produk_GetKategoriProdukByPkQuery = { __typename?: 'query_root', product_categories_by_pk?: { __typename?: 'product_categories', id: number, name: string, description: string } | null };

export type Produk_GetProdukByPkQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type Produk_GetProdukByPkQuery = { __typename?: 'query_root', products_by_pk?: { __typename?: 'products', id: any, name: string, photo_id?: string | null, selling_price: number, discount: number, capital_price: number, product_category_id: number, created_at: any, updated_at: any, product_category: { __typename?: 'product_categories', name: string } } | null };

export type Store_CreateStoreMutationVariables = Exact<{
  store?: InputMaybe<Stores_Insert_Input>;
}>;


export type Store_CreateStoreMutation = { __typename?: 'mutation_root', insert_stores_one?: { __typename?: 'stores', id: number, name: string } | null };

export type Store_DeleteStoreByPkMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type Store_DeleteStoreByPkMutation = { __typename?: 'mutation_root', delete_stores_by_pk?: { __typename?: 'stores', id: number, name: string } | null };

export type Store_UpdateStoreMutationVariables = Exact<{
  store: Stores_Set_Input;
  store_id: Scalars['Int'];
}>;


export type Store_UpdateStoreMutation = { __typename?: 'mutation_root', update_stores_by_pk?: { __typename?: 'stores', id: number, name: string } | null };

export type Whatsapp_SignOutMutationVariables = Exact<{ [key: string]: never; }>;


export type Whatsapp_SignOutMutation = { __typename?: 'mutation_root', Whatsapp_SignOut?: { __typename?: 'Whatsapp_SignOutOutput', is_success: boolean } | null };

export type Store_GetAllStoreQueryVariables = Exact<{ [key: string]: never; }>;


export type Store_GetAllStoreQuery = { __typename?: 'query_root', stores: Array<{ __typename?: 'stores', id: number, name: string, address: string, latitude: string, longitude: string }> };

export type Store_GetStoreByPkQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type Store_GetStoreByPkQuery = { __typename?: 'query_root', stores_by_pk?: { __typename?: 'stores', id: number, name: string, latitude: string, longitude: string, address: string, created_at: any, updated_at: any } | null };

export type Whatsapp_GetAuthStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type Whatsapp_GetAuthStatusQuery = { __typename?: 'query_root', Whatsapp_GetAuthStatus?: { __typename?: 'Whatsapp_GetAuthStatusOutput', client_phone_number?: string | null, client_name?: string | null, client_platform?: string | null, client_state?: string | null, errorMessage?: string | null, qrcode?: string | null, is_authenticated: boolean, is_qr_ready: boolean, is_client_ready: boolean, isError: boolean } | null };

export type User_SignUpMutationVariables = Exact<{
  defaultRole?: InputMaybe<Scalars['String']>;
  defaultStore?: InputMaybe<Scalars['Int']>;
  displayName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type User_SignUpMutation = { __typename?: 'mutation_root', User_SignUp?: { __typename?: 'User_SignUpOutput', email?: string | null, errorMessage?: string | null, isError: boolean, displayName?: string | null } | null };

export type User_UpdateUserByUserIdMutationVariables = Exact<{
  userId: Scalars['uuid'];
  updateUser?: InputMaybe<Users_Set_Input>;
}>;


export type User_UpdateUserByUserIdMutation = { __typename?: 'mutation_root', updateUser?: { __typename?: 'users', id: any } | null };

export type User_UpdateUserForAdminMutationVariables = Exact<{
  userId: Scalars['uuid'];
  updateUser?: InputMaybe<Users_Set_Input>;
  roleBefore: Scalars['String'];
  roleAfter: Scalars['String'];
  store_id?: InputMaybe<Scalars['Int']>;
}>;


export type User_UpdateUserForAdminMutation = { __typename?: 'mutation_root', updateUser?: { __typename?: 'users', id: any } | null, updateAuthUserRoles?: { __typename?: 'authUserRoles_mutation_response', returning: Array<{ __typename?: 'authUserRoles', userId: any }> } | null, update_users_metadata?: { __typename?: 'users_metadata_mutation_response', affected_rows: number } | null };

export type User_GetAllUserQueryVariables = Exact<{ [key: string]: never; }>;


export type User_GetAllUserQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, displayName: string, avatarUrl: string, defaultRole: string, email?: any | null, newEmail?: any | null, users_metadata: Array<{ __typename?: 'users_metadata', stores?: { __typename?: 'stores', id: number, name: string } | null }> }> };

export type User_GetUserByIdQueryVariables = Exact<{
  user_id?: InputMaybe<Scalars['uuid']>;
}>;


export type User_GetUserByIdQuery = { __typename?: 'query_root', user?: { __typename?: 'users', avatarUrl: string, defaultRole: string, displayName: string, email?: any | null, emailVerified: boolean, id: any, newEmail?: any | null, disabled: boolean, users_metadata: Array<{ __typename?: 'users_metadata', store_id?: number | null }> } | null };

export const namedOperations = {
  Query: {
    Inventory_GetAllInventoryProductByStoreId: 'Inventory_GetAllInventoryProductByStoreId',
    Inventory_GetAllVariantMetadata: 'Inventory_GetAllVariantMetadata',
    Inventory_GetInventoryProductById: 'Inventory_GetInventoryProductById',
    Inventory_GetVariantMetadataByTitle: 'Inventory_GetVariantMetadataByTitle',
    Produk_GetAllKategoriProduk: 'Produk_GetAllKategoriProduk',
    Produk_GetAllProduk: 'Produk_GetAllProduk',
    Produk_GetKategoriProdukByPK: 'Produk_GetKategoriProdukByPK',
    Produk_GetProdukByPK: 'Produk_GetProdukByPK',
    Store_GetAllStore: 'Store_GetAllStore',
    Store_GetStoreByPK: 'Store_GetStoreByPK',
    Whatsapp_GetAuthStatus: 'Whatsapp_GetAuthStatus',
    User_GetAllUser: 'User_GetAllUser',
    User_GetUserById: 'User_GetUserById'
  },
  Mutation: {
    Inventory_CreateInventoryProduct: 'Inventory_CreateInventoryProduct',
    Inventory_CreateInventoryVariantMetadata: 'Inventory_CreateInventoryVariantMetadata',
    Inventory_DeleteInventoryVariantsMetadataByTitle: 'Inventory_DeleteInventoryVariantsMetadataByTitle',
    Inventory_UpdateInventoryProduct: 'Inventory_UpdateInventoryProduct',
    Inventory_UpdateInventoryVariantsMetadata: 'Inventory_UpdateInventoryVariantsMetadata',
    Produk_CreateKategoriProduk: 'Produk_CreateKategoriProduk',
    Produk_CreateProduk: 'Produk_CreateProduk',
    Produk_UpdateKategoriProduk: 'Produk_UpdateKategoriProduk',
    Produk_UpdateProdukByPK: 'Produk_UpdateProdukByPK',
    Store_CreateStore: 'Store_CreateStore',
    Store_DeleteStoreByPK: 'Store_DeleteStoreByPK',
    Store_UpdateStore: 'Store_UpdateStore',
    Whatsapp_SignOut: 'Whatsapp_SignOut',
    User_SignUp: 'User_SignUp',
    User_UpdateUserByUserId: 'User_UpdateUserByUserId',
    User_UpdateUserForAdmin: 'User_UpdateUserForAdmin'
  }
}

export const Inventory_CreateInventoryProductDocument = gql`
    mutation Inventory_CreateInventoryProduct($inventory_product: inventory_products_insert_input!) {
  insert_inventory_products_one(object: $inventory_product) {
    id
    inventory_product_variants(order_by: {inventory_variant_metadata_id: asc}) {
      inventory_variants_metadata {
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
    mutation Inventory_CreateInventoryVariantMetadata($objects: [inventory_variants_metadata_insert_input!]!) {
  insert_inventory_variants_metadata(objects: $objects) {
    returning {
      id
      variant_title
    }
    affected_rows
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
  delete_inventory_variants_metadata(
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
export const Inventory_UpdateInventoryProductDocument = gql`
    mutation Inventory_UpdateInventoryProduct($inventory_product_id: uuid!, $update_rocketjaket_inventory_product_by_pk: inventory_products_set_input!, $insert_rocketjaket_inventory_product_variant: [inventory_product_variants_insert_input!]!) {
  update_inventory_products_by_pk(
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
  delete_inventory_product_variants(
    where: {inventory_product_id: {_eq: $inventory_product_id}}
  ) {
    affected_rows
  }
  insert_inventory_product_variants(
    objects: $insert_rocketjaket_inventory_product_variant
  ) {
    affected_rows
  }
}
    `;
export type Inventory_UpdateInventoryProductMutationFn = Apollo.MutationFunction<Inventory_UpdateInventoryProductMutation, Inventory_UpdateInventoryProductMutationVariables>;

/**
 * __useInventory_UpdateInventoryProductMutation__
 *
 * To run a mutation, you first call `useInventory_UpdateInventoryProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInventory_UpdateInventoryProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [inventoryUpdateInventoryProductMutation, { data, loading, error }] = useInventory_UpdateInventoryProductMutation({
 *   variables: {
 *      inventory_product_id: // value for 'inventory_product_id'
 *      update_rocketjaket_inventory_product_by_pk: // value for 'update_rocketjaket_inventory_product_by_pk'
 *      insert_rocketjaket_inventory_product_variant: // value for 'insert_rocketjaket_inventory_product_variant'
 *   },
 * });
 */
export function useInventory_UpdateInventoryProductMutation(baseOptions?: Apollo.MutationHookOptions<Inventory_UpdateInventoryProductMutation, Inventory_UpdateInventoryProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Inventory_UpdateInventoryProductMutation, Inventory_UpdateInventoryProductMutationVariables>(Inventory_UpdateInventoryProductDocument, options);
      }
export type Inventory_UpdateInventoryProductMutationHookResult = ReturnType<typeof useInventory_UpdateInventoryProductMutation>;
export type Inventory_UpdateInventoryProductMutationResult = Apollo.MutationResult<Inventory_UpdateInventoryProductMutation>;
export type Inventory_UpdateInventoryProductMutationOptions = Apollo.BaseMutationOptions<Inventory_UpdateInventoryProductMutation, Inventory_UpdateInventoryProductMutationVariables>;
export const Inventory_UpdateInventoryVariantsMetadataDocument = gql`
    mutation Inventory_UpdateInventoryVariantsMetadata($upsert: [inventory_variants_metadata_insert_input!]!, $deleteIds: [Int!]!) {
  insert_inventory_variants_metadata(
    objects: $upsert
    on_conflict: {constraint: inventory_variants_metadata_pkey, update_columns: [variant_title, variant_value]}
  ) {
    affected_rows
  }
  delete_inventory_variants_metadata(where: {id: {_in: $deleteIds}}) {
    affected_rows
  }
}
    `;
export type Inventory_UpdateInventoryVariantsMetadataMutationFn = Apollo.MutationFunction<Inventory_UpdateInventoryVariantsMetadataMutation, Inventory_UpdateInventoryVariantsMetadataMutationVariables>;

/**
 * __useInventory_UpdateInventoryVariantsMetadataMutation__
 *
 * To run a mutation, you first call `useInventory_UpdateInventoryVariantsMetadataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInventory_UpdateInventoryVariantsMetadataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [inventoryUpdateInventoryVariantsMetadataMutation, { data, loading, error }] = useInventory_UpdateInventoryVariantsMetadataMutation({
 *   variables: {
 *      upsert: // value for 'upsert'
 *      deleteIds: // value for 'deleteIds'
 *   },
 * });
 */
export function useInventory_UpdateInventoryVariantsMetadataMutation(baseOptions?: Apollo.MutationHookOptions<Inventory_UpdateInventoryVariantsMetadataMutation, Inventory_UpdateInventoryVariantsMetadataMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Inventory_UpdateInventoryVariantsMetadataMutation, Inventory_UpdateInventoryVariantsMetadataMutationVariables>(Inventory_UpdateInventoryVariantsMetadataDocument, options);
      }
export type Inventory_UpdateInventoryVariantsMetadataMutationHookResult = ReturnType<typeof useInventory_UpdateInventoryVariantsMetadataMutation>;
export type Inventory_UpdateInventoryVariantsMetadataMutationResult = Apollo.MutationResult<Inventory_UpdateInventoryVariantsMetadataMutation>;
export type Inventory_UpdateInventoryVariantsMetadataMutationOptions = Apollo.BaseMutationOptions<Inventory_UpdateInventoryVariantsMetadataMutation, Inventory_UpdateInventoryVariantsMetadataMutationVariables>;
export const Inventory_GetAllInventoryProductByStoreIdDocument = gql`
    query Inventory_GetAllInventoryProductByStoreId($store_id: Int!) {
  inventory_products(
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
      photo_id
      updated_at
      product_category {
        id
        name
      }
    }
    inventory_product_variants(order_by: {inventory_variant_metadata_id: asc}) {
      inventory_variants_metadata {
        variant_title
        variant_value
      }
    }
  }
}
    `;

/**
 * __useInventory_GetAllInventoryProductByStoreIdQuery__
 *
 * To run a query within a React component, call `useInventory_GetAllInventoryProductByStoreIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useInventory_GetAllInventoryProductByStoreIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInventory_GetAllInventoryProductByStoreIdQuery({
 *   variables: {
 *      store_id: // value for 'store_id'
 *   },
 * });
 */
export function useInventory_GetAllInventoryProductByStoreIdQuery(baseOptions: Apollo.QueryHookOptions<Inventory_GetAllInventoryProductByStoreIdQuery, Inventory_GetAllInventoryProductByStoreIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Inventory_GetAllInventoryProductByStoreIdQuery, Inventory_GetAllInventoryProductByStoreIdQueryVariables>(Inventory_GetAllInventoryProductByStoreIdDocument, options);
      }
export function useInventory_GetAllInventoryProductByStoreIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Inventory_GetAllInventoryProductByStoreIdQuery, Inventory_GetAllInventoryProductByStoreIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Inventory_GetAllInventoryProductByStoreIdQuery, Inventory_GetAllInventoryProductByStoreIdQueryVariables>(Inventory_GetAllInventoryProductByStoreIdDocument, options);
        }
export type Inventory_GetAllInventoryProductByStoreIdQueryHookResult = ReturnType<typeof useInventory_GetAllInventoryProductByStoreIdQuery>;
export type Inventory_GetAllInventoryProductByStoreIdLazyQueryHookResult = ReturnType<typeof useInventory_GetAllInventoryProductByStoreIdLazyQuery>;
export type Inventory_GetAllInventoryProductByStoreIdQueryResult = Apollo.QueryResult<Inventory_GetAllInventoryProductByStoreIdQuery, Inventory_GetAllInventoryProductByStoreIdQueryVariables>;
export const Inventory_GetAllVariantMetadataDocument = gql`
    query Inventory_GetAllVariantMetadata {
  inventory_variants_metadata(order_by: {id: asc}) {
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
export const Inventory_GetInventoryProductByIdDocument = gql`
    query Inventory_GetInventoryProductById($id: uuid = "") {
  inventory_products_by_pk(id: $id) {
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
      inventory_variants_metadata {
        id
        variant_title
        variant_value
      }
    }
  }
}
    `;

/**
 * __useInventory_GetInventoryProductByIdQuery__
 *
 * To run a query within a React component, call `useInventory_GetInventoryProductByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useInventory_GetInventoryProductByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInventory_GetInventoryProductByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useInventory_GetInventoryProductByIdQuery(baseOptions?: Apollo.QueryHookOptions<Inventory_GetInventoryProductByIdQuery, Inventory_GetInventoryProductByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Inventory_GetInventoryProductByIdQuery, Inventory_GetInventoryProductByIdQueryVariables>(Inventory_GetInventoryProductByIdDocument, options);
      }
export function useInventory_GetInventoryProductByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Inventory_GetInventoryProductByIdQuery, Inventory_GetInventoryProductByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Inventory_GetInventoryProductByIdQuery, Inventory_GetInventoryProductByIdQueryVariables>(Inventory_GetInventoryProductByIdDocument, options);
        }
export type Inventory_GetInventoryProductByIdQueryHookResult = ReturnType<typeof useInventory_GetInventoryProductByIdQuery>;
export type Inventory_GetInventoryProductByIdLazyQueryHookResult = ReturnType<typeof useInventory_GetInventoryProductByIdLazyQuery>;
export type Inventory_GetInventoryProductByIdQueryResult = Apollo.QueryResult<Inventory_GetInventoryProductByIdQuery, Inventory_GetInventoryProductByIdQueryVariables>;
export const Inventory_GetVariantMetadataByTitleDocument = gql`
    query Inventory_GetVariantMetadataByTitle($variant_title: String!) {
  inventory_variants_metadata(
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
    mutation Produk_CreateKategoriProduk($category: product_categories_insert_input = {}) {
  insert_product_categories_one(object: $category) {
    id
    name
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
 *      category: // value for 'category'
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
    mutation Produk_CreateProduk($object: products_insert_input!) {
  insert_products_one(object: $object) {
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
 *      object: // value for 'object'
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
export const Produk_UpdateKategoriProdukDocument = gql`
    mutation Produk_UpdateKategoriProduk($id: Int!, $category: product_categories_set_input!) {
  update_product_categories_by_pk(pk_columns: {id: $id}, _set: $category) {
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
 *      category: // value for 'category'
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
    mutation Produk_UpdateProdukByPK($id: uuid!, $product: products_set_input!) {
  update_products_by_pk(pk_columns: {id: $id}, _set: $product) {
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
 *      product: // value for 'product'
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
  product_categories(order_by: {name: asc}) {
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
  products {
    name
    id
    photo_id
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
  product_categories_by_pk(id: $id) {
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
  products_by_pk(id: $id) {
    id
    name
    photo_id
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
    mutation Store_CreateStore($store: stores_insert_input = {}) {
  insert_stores_one(object: $store) {
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
 *      store: // value for 'store'
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
    mutation Store_DeleteStoreByPK($id: Int!) {
  delete_stores_by_pk(id: $id) {
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
    mutation Store_UpdateStore($store: stores_set_input!, $store_id: Int!) {
  update_stores_by_pk(pk_columns: {id: $store_id}, _set: $store) {
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
 *      store: // value for 'store'
 *      store_id: // value for 'store_id'
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
export const Whatsapp_SignOutDocument = gql`
    mutation Whatsapp_SignOut {
  Whatsapp_SignOut {
    is_success
  }
}
    `;
export type Whatsapp_SignOutMutationFn = Apollo.MutationFunction<Whatsapp_SignOutMutation, Whatsapp_SignOutMutationVariables>;

/**
 * __useWhatsapp_SignOutMutation__
 *
 * To run a mutation, you first call `useWhatsapp_SignOutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWhatsapp_SignOutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [whatsappSignOutMutation, { data, loading, error }] = useWhatsapp_SignOutMutation({
 *   variables: {
 *   },
 * });
 */
export function useWhatsapp_SignOutMutation(baseOptions?: Apollo.MutationHookOptions<Whatsapp_SignOutMutation, Whatsapp_SignOutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Whatsapp_SignOutMutation, Whatsapp_SignOutMutationVariables>(Whatsapp_SignOutDocument, options);
      }
export type Whatsapp_SignOutMutationHookResult = ReturnType<typeof useWhatsapp_SignOutMutation>;
export type Whatsapp_SignOutMutationResult = Apollo.MutationResult<Whatsapp_SignOutMutation>;
export type Whatsapp_SignOutMutationOptions = Apollo.BaseMutationOptions<Whatsapp_SignOutMutation, Whatsapp_SignOutMutationVariables>;
export const Store_GetAllStoreDocument = gql`
    query Store_GetAllStore {
  stores {
    id
    name
    address
    latitude
    longitude
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
  stores_by_pk(id: $id) {
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
export const Whatsapp_GetAuthStatusDocument = gql`
    query Whatsapp_GetAuthStatus {
  Whatsapp_GetAuthStatus {
    client_phone_number
    client_name
    client_platform
    client_state
    errorMessage
    qrcode
    is_authenticated
    is_qr_ready
    is_client_ready
    isError
  }
}
    `;

/**
 * __useWhatsapp_GetAuthStatusQuery__
 *
 * To run a query within a React component, call `useWhatsapp_GetAuthStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useWhatsapp_GetAuthStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWhatsapp_GetAuthStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useWhatsapp_GetAuthStatusQuery(baseOptions?: Apollo.QueryHookOptions<Whatsapp_GetAuthStatusQuery, Whatsapp_GetAuthStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Whatsapp_GetAuthStatusQuery, Whatsapp_GetAuthStatusQueryVariables>(Whatsapp_GetAuthStatusDocument, options);
      }
export function useWhatsapp_GetAuthStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Whatsapp_GetAuthStatusQuery, Whatsapp_GetAuthStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Whatsapp_GetAuthStatusQuery, Whatsapp_GetAuthStatusQueryVariables>(Whatsapp_GetAuthStatusDocument, options);
        }
export type Whatsapp_GetAuthStatusQueryHookResult = ReturnType<typeof useWhatsapp_GetAuthStatusQuery>;
export type Whatsapp_GetAuthStatusLazyQueryHookResult = ReturnType<typeof useWhatsapp_GetAuthStatusLazyQuery>;
export type Whatsapp_GetAuthStatusQueryResult = Apollo.QueryResult<Whatsapp_GetAuthStatusQuery, Whatsapp_GetAuthStatusQueryVariables>;
export const User_SignUpDocument = gql`
    mutation User_SignUp($defaultRole: String = "karyawan", $defaultStore: Int = null, $displayName: String!, $email: String!, $password: String!) {
  User_SignUp(
    password: $password
    email: $email
    displayName: $displayName
    defaultStore: $defaultStore
    defaultRole: $defaultRole
  ) {
    email
    errorMessage
    isError
    displayName
  }
}
    `;
export type User_SignUpMutationFn = Apollo.MutationFunction<User_SignUpMutation, User_SignUpMutationVariables>;

/**
 * __useUser_SignUpMutation__
 *
 * To run a mutation, you first call `useUser_SignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUser_SignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userSignUpMutation, { data, loading, error }] = useUser_SignUpMutation({
 *   variables: {
 *      defaultRole: // value for 'defaultRole'
 *      defaultStore: // value for 'defaultStore'
 *      displayName: // value for 'displayName'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useUser_SignUpMutation(baseOptions?: Apollo.MutationHookOptions<User_SignUpMutation, User_SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<User_SignUpMutation, User_SignUpMutationVariables>(User_SignUpDocument, options);
      }
export type User_SignUpMutationHookResult = ReturnType<typeof useUser_SignUpMutation>;
export type User_SignUpMutationResult = Apollo.MutationResult<User_SignUpMutation>;
export type User_SignUpMutationOptions = Apollo.BaseMutationOptions<User_SignUpMutation, User_SignUpMutationVariables>;
export const User_UpdateUserByUserIdDocument = gql`
    mutation User_UpdateUserByUserId($userId: uuid!, $updateUser: users_set_input = {}) {
  updateUser(pk_columns: {id: $userId}, _set: $updateUser) {
    id
  }
}
    `;
export type User_UpdateUserByUserIdMutationFn = Apollo.MutationFunction<User_UpdateUserByUserIdMutation, User_UpdateUserByUserIdMutationVariables>;

/**
 * __useUser_UpdateUserByUserIdMutation__
 *
 * To run a mutation, you first call `useUser_UpdateUserByUserIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUser_UpdateUserByUserIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userUpdateUserByUserIdMutation, { data, loading, error }] = useUser_UpdateUserByUserIdMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      updateUser: // value for 'updateUser'
 *   },
 * });
 */
export function useUser_UpdateUserByUserIdMutation(baseOptions?: Apollo.MutationHookOptions<User_UpdateUserByUserIdMutation, User_UpdateUserByUserIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<User_UpdateUserByUserIdMutation, User_UpdateUserByUserIdMutationVariables>(User_UpdateUserByUserIdDocument, options);
      }
export type User_UpdateUserByUserIdMutationHookResult = ReturnType<typeof useUser_UpdateUserByUserIdMutation>;
export type User_UpdateUserByUserIdMutationResult = Apollo.MutationResult<User_UpdateUserByUserIdMutation>;
export type User_UpdateUserByUserIdMutationOptions = Apollo.BaseMutationOptions<User_UpdateUserByUserIdMutation, User_UpdateUserByUserIdMutationVariables>;
export const User_UpdateUserForAdminDocument = gql`
    mutation User_UpdateUserForAdmin($userId: uuid!, $updateUser: users_set_input = {}, $roleBefore: String!, $roleAfter: String!, $store_id: Int) {
  updateUser(pk_columns: {id: $userId}, _set: $updateUser) {
    id
  }
  updateAuthUserRoles(where: {role: {_eq: $roleBefore}}, _set: {role: $roleAfter}) {
    returning {
      userId
    }
  }
  update_users_metadata(
    where: {user_id: {_eq: $userId}}
    _set: {store_id: $store_id}
  ) {
    affected_rows
  }
}
    `;
export type User_UpdateUserForAdminMutationFn = Apollo.MutationFunction<User_UpdateUserForAdminMutation, User_UpdateUserForAdminMutationVariables>;

/**
 * __useUser_UpdateUserForAdminMutation__
 *
 * To run a mutation, you first call `useUser_UpdateUserForAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUser_UpdateUserForAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userUpdateUserForAdminMutation, { data, loading, error }] = useUser_UpdateUserForAdminMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      updateUser: // value for 'updateUser'
 *      roleBefore: // value for 'roleBefore'
 *      roleAfter: // value for 'roleAfter'
 *      store_id: // value for 'store_id'
 *   },
 * });
 */
export function useUser_UpdateUserForAdminMutation(baseOptions?: Apollo.MutationHookOptions<User_UpdateUserForAdminMutation, User_UpdateUserForAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<User_UpdateUserForAdminMutation, User_UpdateUserForAdminMutationVariables>(User_UpdateUserForAdminDocument, options);
      }
export type User_UpdateUserForAdminMutationHookResult = ReturnType<typeof useUser_UpdateUserForAdminMutation>;
export type User_UpdateUserForAdminMutationResult = Apollo.MutationResult<User_UpdateUserForAdminMutation>;
export type User_UpdateUserForAdminMutationOptions = Apollo.BaseMutationOptions<User_UpdateUserForAdminMutation, User_UpdateUserForAdminMutationVariables>;
export const User_GetAllUserDocument = gql`
    query User_GetAllUser {
  users {
    id
    displayName
    avatarUrl
    defaultRole
    email
    newEmail
    users_metadata {
      stores {
        id
        name
      }
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
export const User_GetUserByIdDocument = gql`
    query User_GetUserById($user_id: uuid = "") {
  user(id: $user_id) {
    avatarUrl
    defaultRole
    displayName
    email
    emailVerified
    id
    newEmail
    users_metadata(limit: 1) {
      store_id
    }
    disabled
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
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useUser_GetUserByIdQuery(baseOptions?: Apollo.QueryHookOptions<User_GetUserByIdQuery, User_GetUserByIdQueryVariables>) {
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