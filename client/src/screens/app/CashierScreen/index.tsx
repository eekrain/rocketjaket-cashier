import React from 'react';
// import {AppNavProps} from '../index';
import CashierHome from '../../../components/Cashier';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
// import {CompositeScreenProps} from '@react-navigation/native';

export type CashierRootStackParamList = {
  CashierHome: {invoiceNumberRefundPart?: string};
};

type ICashierRoutes = {
  name: keyof CashierRootStackParamList;
  component: React.ComponentType<any>;
  routeNiceName: string;
};

export const rootCashierRoutes: ICashierRoutes[] = [
  {name: 'CashierHome', component: CashierHome, routeNiceName: 'Kasir'},
];

export type CashierHomeNavProps = NativeStackScreenProps<
  CashierRootStackParamList,
  'CashierHome'
>;

const CashierStack = createNativeStackNavigator<CashierRootStackParamList>();

interface ICashierScreenProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CashierScreen = (props: ICashierScreenProps) => {
  return (
    <CashierStack.Navigator screenOptions={{headerShown: false}}>
      {rootCashierRoutes.map(route => (
        <CashierStack.Screen
          key={`${route.name}${route.routeNiceName}`}
          name={route.name}
          component={route.component}
        />
      ))}
    </CashierStack.Navigator>
  );
};

export default CashierScreen;
