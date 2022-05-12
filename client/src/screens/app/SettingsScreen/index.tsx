import React from 'react';
import {AppNavProps, SettingsRootNavProps} from '../index';
import SettingsHome from '../../../components/Settings';
import CreateToko from '../../../components/Settings/CreateToko';
import UpdateToko from '../../../components/Settings/UpdateToko';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {CompositeScreenProps} from '@react-navigation/native';

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

export type SettingsHomeProps = CompositeScreenProps<
  NativeStackScreenProps<SettingsStackParamList, 'ListToko'>,
  AppNavProps
>;
export type CreateTokoProps = CompositeScreenProps<
  NativeStackScreenProps<SettingsStackParamList, 'CreateToko'>,
  AppNavProps
>;
export type UpdateTokoProps = CompositeScreenProps<
  NativeStackScreenProps<SettingsStackParamList, 'UpdateToko'>,
  AppNavProps
>;

const SettingsStack = createNativeStackNavigator<SettingsStackParamList>();

interface ISettingsScreenProps extends SettingsRootNavProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SettingsScreen = (props: ISettingsScreenProps) => {
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
