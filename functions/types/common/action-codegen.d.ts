type Maybe<T> = T | null;

type User_SignUpOutput = {
  email?: Maybe<string>;
  displayName?: Maybe<string>;
  isError: boolean;
  errorMessage?: Maybe<string>;
};

type Mutation = {
  User_SignUp?: Maybe<User_SignUpOutput>;
};

type User_SignUpArgs = {
  email: string;
  password: string;
  displayName?: Maybe<string>;
  defaultRole: string;
  defaultStore?: Maybe<number>;
};
