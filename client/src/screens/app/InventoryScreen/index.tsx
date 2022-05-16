import React from 'react';
import InventoryHome from '../../../components/Inventory';
import CreateProductVariants from '../../../components/Inventory/CreateProductVariants';
import UpdateProductVariants from '../../../components/Inventory/UpdateProductVariants';
import CreateProductInventory from '../../../components/Inventory/CreateProductInventory';
import UpdateProductInventory from '../../../components/Inventory/UpdateProductInventory';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type InventoryRootStackParamList = {
  InventoryHome: undefined;
  CreateProductVariants: undefined;
  UpdateProductVariants: {variant_title: string};
  CreateProductInventory: {storeId: number; storeName: string};
  UpdateProductInventory: {
    storeId: number;
    storeName: string;
    inventoryProductId: string;
    token?: string;
  };
};

type ISettingsRoutes = {
  name: keyof InventoryRootStackParamList;
  component: React.ComponentType<any>;
  routeNiceName: string;
};

export const rootInventoryRoutes: ISettingsRoutes[] = [
  {name: 'InventoryHome', component: InventoryHome, routeNiceName: 'Inventory'},
  {
    name: 'CreateProductVariants',
    component: CreateProductVariants,
    routeNiceName: 'Inventory / Variasi Produk',
  },
  {
    name: 'UpdateProductVariants',
    component: UpdateProductVariants,
    routeNiceName: 'Inventory / Variasi Produk',
  },
  {
    name: 'CreateProductInventory',
    component: CreateProductInventory,
    routeNiceName: 'Inventory / Variasi Produk',
  },
  {
    name: 'UpdateProductInventory',
    component: UpdateProductInventory,
    routeNiceName: 'Inventory / Variasi Produk',
  },
];

export type InventoryScreenProps = {
  [Properties in keyof InventoryRootStackParamList]: NativeStackScreenProps<
    InventoryRootStackParamList,
    keyof InventoryRootStackParamList
  >;
};
export type CreateProductInventoryNavProps = NativeStackScreenProps<
  InventoryRootStackParamList,
  'CreateProductInventory'
>;
export type UpdateProductVariantsNavProps = NativeStackScreenProps<
  InventoryRootStackParamList,
  'UpdateProductVariants'
>;
export type UpdateProductInventoryNavProps = NativeStackScreenProps<
  InventoryRootStackParamList,
  'UpdateProductInventory'
>;

const InventoryStack =
  createNativeStackNavigator<InventoryRootStackParamList>();

interface IInventoryScreenProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const InventoryScreen = (props: IInventoryScreenProps) => {
  return (
    <InventoryStack.Navigator screenOptions={{headerShown: false}}>
      {rootInventoryRoutes.map(route => (
        <InventoryStack.Screen
          key={`${route.name}${route.routeNiceName}`}
          name={route.name}
          component={route.component}
        />
      ))}
    </InventoryStack.Navigator>
  );
};

export default InventoryScreen;
