import React from 'react';
import OperationalCostHome from '../../../components/OperationalCost';
import CreateOperationalCost from '../../../components/OperationalCost/CreateOperationalCost';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import UpdateOperationalCost from '../../../components/OperationalCost/UpdateOperationalCost';

export type OperationalCostRootStackParamList = {
  ListOperationalCost: undefined;
  CreateOperationalCost: {storeId: number};
  UpdateOperationalCost: {operationalCostId: number};
};

type IOperationalCostScreenRoutes = {
  name: keyof OperationalCostRootStackParamList;
  component: React.ComponentType<any>;
  routeNiceName: string;
};

export const rootOperationalCostRoutes: IOperationalCostScreenRoutes[] = [
  {
    name: 'ListOperationalCost',
    component: OperationalCostHome,
    routeNiceName: 'Biaya Operasional',
  },
  {
    name: 'CreateOperationalCost',
    component: CreateOperationalCost,
    routeNiceName: 'Biaya Operasional',
  },
  {
    name: 'UpdateOperationalCost',
    component: UpdateOperationalCost,
    routeNiceName: 'Biaya Operasional',
  },
];

export type OperationalCostScreenScreenProps = {
  [Properties in keyof OperationalCostRootStackParamList]: NativeStackScreenProps<
    OperationalCostRootStackParamList,
    keyof OperationalCostRootStackParamList
  >;
};

export type ListOperationalCostNavProps = NativeStackScreenProps<
  OperationalCostRootStackParamList,
  'ListOperationalCost'
>;
export type CreateOperationalCostNavProps = NativeStackScreenProps<
  OperationalCostRootStackParamList,
  'CreateOperationalCost'
>;
export type UpdateOperationalCostNavProps = NativeStackScreenProps<
  OperationalCostRootStackParamList,
  'UpdateOperationalCost'
>;

const OperationalCostScreenStack =
  createNativeStackNavigator<OperationalCostRootStackParamList>();

interface IOperationalCostScreenProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const OperationalCostScreenScreen = (props: IOperationalCostScreenProps) => {
  return (
    <OperationalCostScreenStack.Navigator screenOptions={{headerShown: false}}>
      {rootOperationalCostRoutes.map(route => (
        <OperationalCostScreenStack.Screen
          key={`${route.name}${route.routeNiceName}`}
          name={route.name}
          component={route.component}
        />
      ))}
    </OperationalCostScreenStack.Navigator>
  );
};

export default OperationalCostScreenScreen;
