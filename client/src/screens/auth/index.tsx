import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from './SignInScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';

const AuthStack = createStackNavigator();

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
