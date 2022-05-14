/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {Animated, ScrollView} from 'react-native';
import {
  NativeBaseProvider,
  Box,
  Text,
  Center,
  Pressable,
  View,
} from 'native-base';
import withAppLayout from '../Layout/AppLayout';
import ListProduk from './ListProduk';
import ListKategoriProduk from './ListKategoriProduk';
import {useMemo} from 'react';

const routes = [
  {key: 'first', title: 'Produk', component: ListProduk},
  {key: 'second', title: 'Kategori Produk', component: ListKategoriProduk},
];

interface Props {}

const ProdukIndex = (props: Props) => {
  const [activeTab, setActiveTab] = React.useState(0);

  const Component: React.ComponentType<any> = useMemo(() => {
    return routes[activeTab].component;
  }, [activeTab]);

  const renderTab = () => (
    <Box flexDirection="row" mb="6">
      {routes.map((route, i) => {
        const color = activeTab === i ? '#1f2937' : '#a1a1aa';
        const borderColor = activeTab === i ? 'scarlet.400' : 'coolGray.200';

        return (
          <Pressable
            key={route.key}
            borderBottomWidth="3"
            borderColor={borderColor}
            flex={1}
            alignItems="center"
            p="3"
            onPress={() => {
              console.log(i);
              setActiveTab(i);
            }}>
            <Animated.Text style={{color}}>{route.title}</Animated.Text>
          </Pressable>
        );
      })}
    </Box>
  );

  return (
    <View>
      {renderTab()}
      {<Component {...props} />}
    </View>
  );
};

export default withAppLayout(ProdukIndex);
