type Maybe<T> = T | null;

type User_SignUpOutput = {
  email?: Maybe<string>;
  displayName?: Maybe<string>;
  isError: boolean;
  errorMessage?: Maybe<string>;
};

type Whatsapp_GetAuthStatusOutput = {
  is_authenticated: boolean;
  qr_code?: Maybe<string>;
  client_state?: Maybe<string>;
  client_name?: Maybe<string>;
  client_phone_number?: Maybe<string>;
  client_platform?: Maybe<string>;
  client_device_manufacturer?: Maybe<string>;
  client_device_model?: Maybe<string>;
  isError: boolean;
  errorMessage?: Maybe<string>;
};

type Whatsapp_SignOutOutput = {
  is_success: boolean;
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
