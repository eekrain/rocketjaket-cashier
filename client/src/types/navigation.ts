import {StackScreenProps} from '@react-navigation/stack';

export type AuthNavigationParamList = {
  SignIn: undefined;
  ForgotPassword: undefined;
};

export type SigninNavProps = StackScreenProps<
  AuthNavigationParamList,
  'SignIn'
>;
export type ForgotPasswordNavProps = StackScreenProps<
  AuthNavigationParamList,
  'ForgotPassword'
>;
