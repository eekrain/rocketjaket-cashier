import React from 'react';
import SettingsHome from '../../../components/Settings';
import CreateToko from '../../../components/Settings/CreateToko';
import UpdateToko from '../../../components/Settings/UpdateToko';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type SettingsStackParamList = {
  ListToko: undefined;
  CreateToko: undefined;
  UpdateToko: {storeId: number};
};

type ISettingsRoutes = {
  name: keyof SettingsStackParamList;
  component: React.ComponentType<any>;
  routeNiceName: string;
};

export const rootSettingsRoutes: ISettingsRoutes[] = [
  {name: 'ListToko', component: SettingsHome, routeNiceName: 'Settings'},
  {name: 'CreateToko', component: CreateToko, routeNiceName: 'Toko'},
  {name: 'UpdateToko', component: UpdateToko, routeNiceName: 'Toko'},
];

export type SettingsScreenProps = {
  [Properties in keyof SettingsStackParamList]: NativeStackScreenProps<
    SettingsStackParamList,
    keyof SettingsStackParamList
  >;
};
const SettingsStack = createNativeStackNavigator<SettingsStackParamList>();

interface ISettingsScreenProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SettingsScreen = () => {
  return (
    <SettingsStack.Navigator screenOptions={{headerShown: false}}>
      {rootSettingsRoutes.map(route => (
        <SettingsStack.Screen
          key={`${route.name}${route.routeNiceName}`}
          name={route.name}
          component={route.component}
        />
      ))}
    </SettingsStack.Navigator>
  );
};

export default SettingsScreen;
