import React from 'react';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';

import ProdukIndex from '../../../components/Produk';
import CreateKategoriProduk from '../../../components/Produk/CreateKategoriProduk';
import UpdateKategoriProduk from '../../../components/Produk/UpdateKategoriProduk';
import CreateProduk from '../../../components/Produk/CreateProduk';
import UpdateProduk from '../../../components/Produk/UpdateProduk';
import {CompositeScreenProps} from '@react-navigation/native';
import {AppNavProps} from '..';

export type ProductStackParamList = {
  ListProduk: undefined;
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
  {name: 'ListProduk', component: ProdukIndex, routeNiceName: 'List Produk'},
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

export type ProdukRootStackNavProps = CompositeScreenProps<
  StackScreenProps<ProductStackParamList, any>,
  AppNavProps
>;
export type ListProdukNavProps = CompositeScreenProps<
  StackScreenProps<ProductStackParamList, 'ListProduk'>,
  AppNavProps
>;
export type CreateKategoriProdukNavProps = CompositeScreenProps<
  StackScreenProps<ProductStackParamList, 'CreateKategoriProduk'>,
  AppNavProps
>;
export type UpdateKategoriProdukNavProps = CompositeScreenProps<
  StackScreenProps<ProductStackParamList, 'UpdateKategoriProduk'>,
  AppNavProps
>;
export type CreateProdukNavProps = CompositeScreenProps<
  StackScreenProps<ProductStackParamList, 'CreateProduk'>,
  AppNavProps
>;
export type UpdateProdukNavProps = CompositeScreenProps<
  StackScreenProps<ProductStackParamList, 'UpdateProduk'>,
  AppNavProps
>;

const ProdukStack = createStackNavigator<ProductStackParamList>();

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
