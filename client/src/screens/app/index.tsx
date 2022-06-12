import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DashboardScreen from './DashboardScreen';
import CashierScreen, {
  CashierRootStackParamList,
  rootCashierRoutes,
} from './CashierScreen';
import ProfileScreen from './ProfileScreen';
import CustomDrawerContent from '../../components/CustomDrawerContent';
import ProdukScreen, {rootProdukRoutes} from './ProdukScreen';
import SettingsScreen, {rootSettingsRoutes} from './SettingsScreen';
import InventoryScreen, {rootInventoryRoutes} from './InventoryScreen';
import UserScreen, {rootUserRoutes} from './UserScreen';
import OperationalCostScreen, {
  rootOperationalCostRoutes,
} from './OperationalCostScreen';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {TUserRoleOptions, UserRolesEnum} from '../../types/user';
import TransactionScreen, {
  rootTransactionRoutes,
  TransactionRootStackParamList,
} from './TransactionScreen';
import {NavigatorScreenParams} from '@react-navigation/native';
import NotificationScreen from './NotificationScreen';
import {useMyNotifee, useMyUser} from '../../shared/utils';
import {useMyNotificationBackgroundTask} from '../../state';
import AbsensiScreen from './Absensi';

export type AppNavigationParamList = {
  Dashboard: undefined;
  Notification: undefined;
  TransactionRoot: NavigatorScreenParams<TransactionRootStackParamList>;
  Profile: undefined;
  ProdukRoot: undefined;
  SettingsRoot: undefined;
  InventoryRoot: undefined;
  UserRoot: undefined;
  AbsensiRoot: undefined;
  CashierRoot: NavigatorScreenParams<CashierRootStackParamList>;
  OperationalCostRoot: undefined;
};

export type IAppRoutes = {
  name: keyof AppNavigationParamList;
  component: React.ComponentType<any>;
  routeNiceName: string;
  isHideOnDrawer?: boolean;
  role: TUserRoleOptions[];
};

export const rootAppRoutes: IAppRoutes[] = [
  {
    name: 'Dashboard',
    component: DashboardScreen,
    routeNiceName: 'Dashboard',
    role: ['administrator'],
  },
  {
    name: 'CashierRoot',
    component: CashierScreen,
    routeNiceName: 'Kasir',
    role: ['administrator', 'karyawan'],
  },
  {
    name: 'TransactionRoot',
    component: TransactionScreen,
    routeNiceName: 'Transaksi',
    role: ['administrator'],
  },
  {
    name: 'Profile',
    component: ProfileScreen,
    routeNiceName: 'Profile',
    isHideOnDrawer: true,
    role: ['administrator', 'karyawan'],
  },
  {
    name: 'ProdukRoot',
    component: ProdukScreen,
    routeNiceName: 'Produk',
    role: ['administrator', 'karyawan'],
  },
  {
    name: 'InventoryRoot',
    component: InventoryScreen,
    routeNiceName: 'Inventory',
    role: ['administrator', 'karyawan'],
  },
  {
    name: 'OperationalCostRoot',
    component: OperationalCostScreen,
    routeNiceName: 'Biaya Operasional',
    role: ['administrator', 'karyawan'],
  },
  {
    name: 'UserRoot',
    component: UserScreen,
    routeNiceName: 'Pengguna',
    role: ['administrator'],
  },
  {
    name: 'AbsensiRoot',
    component: AbsensiScreen,
    routeNiceName: 'Absensi',
    role: ['administrator'],
  },
  {
    name: 'SettingsRoot',
    component: SettingsScreen,
    routeNiceName: 'Settings',
    role: ['administrator'],
  },
  {
    name: 'Notification',
    component: NotificationScreen,
    routeNiceName: 'Notification',
    role: ['administrator', 'karyawan'],
  },
];

export const allAppRoutes = [
  ...rootAppRoutes,
  ...rootSettingsRoutes,
  ...rootUserRoutes,
  ...rootProdukRoutes,
  ...rootInventoryRoutes,
  ...rootCashierRoutes,
  ...rootTransactionRoutes,
  ...rootOperationalCostRoutes,
];

export type AppScreenProps = {
  [Properties in keyof AppNavigationParamList]: DrawerScreenProps<
    AppNavigationParamList,
    keyof AppNavigationParamList
  >;
};

const AppDrawer = createDrawerNavigator<AppNavigationParamList>();

interface Props {}

const AppNavigation = ({}: Props) => {
  useMyNotifee();
  useMyNotificationBackgroundTask();
  const myUser = useMyUser();

  return (
    <AppDrawer.Navigator
      drawerContent={drawerProps => <CustomDrawerContent {...drawerProps} />}
      screenOptions={{headerShown: false}}>
      {rootAppRoutes
        .filter(value =>
          value.role.includes(myUser.defaultRole as UserRolesEnum),
        )
        .map(value => (
          <AppDrawer.Screen
            key={value.name}
            name={value.name}
            component={value.component}
          />
        ))}
    </AppDrawer.Navigator>
  );
};

export default AppNavigation;

export const getAppIcon = (screenName: keyof AppNavigationParamList) => {
  if (screenName === 'CashierRoot') return 'monitor';
  if (screenName === 'Dashboard') return 'bar-chart';
  if (screenName === 'Notification') return 'bell';
  if (screenName === 'TransactionRoot') return 'list';
  if (screenName === 'Profile') return 'user';
  if (screenName === 'ProdukRoot') return 'shopping-bag';
  if (screenName === 'SettingsRoot') return 'settings';
  if (screenName === 'InventoryRoot') return 'archive';
  if (screenName === 'UserRoot') return 'user';
  if (screenName === 'AbsensiRoot') return 'user-check';
  if (screenName === 'OperationalCostRoot') return 'activity';
  return '';
};
