import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import ProdukHome from '../../../components/Produk';
import CreateKategoriProduk from '../../../components/Produk/CreateKategoriProduk';
import UpdateKategoriProduk from '../../../components/Produk/UpdateKategoriProduk';
import CreateProduk from '../../../components/Produk/CreateProduk';
import UpdateProduk from '../../../components/Produk/UpdateProduk';

export type ProductStackParamList = {
  ProdukHome: undefined;
  CreateKategoriProduk: undefined;
  UpdateKategoriProduk: {categoryId: number};
  CreateProduk: undefined;
  UpdateProduk: {productId: string};
};

type IProdukRoutes = {
  name: keyof ProductStackParamList;
  component: React.ComponentType<any>;
  routeNiceName: string;
};

export const rootProdukRoutes: IProdukRoutes[] = [
  {name: 'ProdukHome', component: ProdukHome, routeNiceName: 'List Produk'},
  {
    name: 'CreateKategoriProduk',
    component: CreateKategoriProduk,
    routeNiceName: 'Kategori Produk',
  },
  {
    name: 'UpdateKategoriProduk',
    component: UpdateKategoriProduk,
    routeNiceName: 'Kategori Produk',
  },
  {
    name: 'CreateProduk',
    component: CreateProduk,
    routeNiceName: 'Produk',
  },
  {
    name: 'UpdateProduk',
    component: UpdateProduk,
    routeNiceName: 'Produk',
  },
];

export type ProdukScreenProps = {
  [Properties in keyof ProductStackParamList]: NativeStackScreenProps<
    ProductStackParamList,
    keyof ProductStackParamList
  >;
};
export type UpdateKategoriProdukNavProps = NativeStackScreenProps<
  ProductStackParamList,
  'UpdateKategoriProduk'
>;
export type UpdateProdukNavProps = NativeStackScreenProps<
  ProductStackParamList,
  'UpdateProduk'
>;

const ProdukStack = createNativeStackNavigator<ProductStackParamList>();

interface Props {}

const ProdukScreen = ({}: Props) => {
  return (
    <ProdukStack.Navigator screenOptions={{headerShown: false}}>
      {rootProdukRoutes.map(route => (
        <ProdukStack.Screen
          key={`${route.name}${route.routeNiceName}`}
          name={route.name}
          component={route.component}
        />
      ))}
    </ProdukStack.Navigator>
  );
};

export default ProdukScreen;
