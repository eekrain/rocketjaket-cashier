import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import TransactionHome from '../../../components/Transaction';
import UpdateTransaction from '../../../components/Transaction/UpdateTransaction';

export type TransactionRootStackParamList = {
  ListTransaction: undefined;
  UpdateTransaction: {transaction_invoice_number: string};
};

type ITransactionRoutes = {
  name: keyof TransactionRootStackParamList;
  component: React.ComponentType<any>;
  routeNiceName: string;
};

export const rootTransactionRoutes: ITransactionRoutes[] = [
  {
    name: 'ListTransaction',
    component: TransactionHome,
    routeNiceName: 'List Transaksi',
  },
  {
    name: 'UpdateTransaction',
    component: UpdateTransaction,
    routeNiceName: 'Update Transaksi',
  },
];

export type ListTransactionNavProps = NativeStackScreenProps<
  TransactionRootStackParamList,
  'ListTransaction'
>;
export type UpdateTransactionNavProps = NativeStackScreenProps<
  TransactionRootStackParamList,
  'UpdateTransaction'
>;

const TransactionStack =
  createNativeStackNavigator<TransactionRootStackParamList>();

interface Props {}

const TransactionScreen = ({}: Props) => {
  return (
    <TransactionStack.Navigator screenOptions={{headerShown: false}}>
      {rootTransactionRoutes.map(route => (
        <TransactionStack.Screen
          key={`${route.name}${route.routeNiceName}`}
          name={route.name}
          component={route.component}
        />
      ))}
    </TransactionStack.Navigator>
  );
};

export default TransactionScreen;
