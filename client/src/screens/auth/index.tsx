import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import SignInScreen from './SignInScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';

export type AuthNavigationParamList = {
  SignIn: undefined;
  ForgotPassword: undefined;
};

export type SigninNavProps = NativeStackScreenProps<
  AuthNavigationParamList,
  'SignIn'
>;
export type ForgotPasswordNavProps = NativeStackScreenProps<
  AuthNavigationParamList,
  'ForgotPassword'
>;

const AuthStack = createNativeStackNavigator();

interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AuthNavigation = (props: Props) => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
