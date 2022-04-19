import React from 'react';
import {AppNavProps, SettingsRootNavProps} from '../index';
import TokoHome from '../../../components/Toko';
import CreateToko from '../../../components/Toko/CreateToko';
import UpdateToko from '../../../components/Toko/UpdateToko';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
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
  {name: 'ListToko', component: TokoHome, routeNiceName: 'Settings'},
  {name: 'CreateToko', component: CreateToko, routeNiceName: 'Toko'},
  {name: 'UpdateToko', component: UpdateToko, routeNiceName: 'Toko'},
];

export type SettingsHomeNavProps = CompositeScreenProps<
  StackScreenProps<SettingsStackParamList, 'ListToko'>,
  AppNavProps
>;
export type CreateTokoNavProps = CompositeScreenProps<
  StackScreenProps<SettingsStackParamList, 'CreateToko'>,
  AppNavProps
>;
export type UpdateTokoNavProps = CompositeScreenProps<
  StackScreenProps<SettingsStackParamList, 'UpdateToko'>,
  AppNavProps
>;

const SettingsStack = createStackNavigator<SettingsStackParamList>();

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
