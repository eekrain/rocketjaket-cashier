import React, {useEffect} from 'react';
import {
  Box,
  Heading,
  HStack,
  Button,
  Icon,
  useToast,
  ScrollView,
} from 'native-base';
import {Alert, RefreshControl} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {
  ListProdukNavProps,
  ProductStackParamList,
} from '../../screens/app/ProdukScreen';
import {
  namedOperations,
  useProduk_DeleteProdukByPkMutation,
  useProduk_GetAllProdukQuery,
} from '../../graphql/gql-generated';
import CustomTable from '../CustomTable';
import {useMemo} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {IconButtonDelete, ButtonEdit} from '../Buttons';
import {
  getStorageFileUrlWImageTransform,
  myNumberFormat,
  storage,
} from '../../shared/utils';
import {useMyAppState} from '../../state';
import FastImage from 'react-native-fast-image';
import {TOAST_TEMPLATE} from '../../shared/constants';

interface IActionProps {
  id: string;
  navigation: StackNavigationProp<ProductStackParamList, 'ListProduk'>;
  handleDeleteKategori: () => Promise<void>;
}

const Action = ({id, navigation, handleDeleteKategori}: IActionProps) => {
  const myAppState = useMyAppState();
  return (
    <HStack space="3">
      <ButtonEdit
        size="sm"
        onPress={() => {
          myAppState.setLoadingWholePage(true);
          navigation.navigate('UpdateProduk', {productId: id});
        }}
      />
      <IconButtonDelete size="sm" onPress={() => handleDeleteKategori()} />
    </HStack>
  );
};

interface IProductPhotoProps {
  photo_url: string;
}

const ProductPhoto = ({photo_url}: IProductPhotoProps) => {
  return (
    <FastImage
      // eslint-disable-next-line react-native/no-inline-styles
      style={{width: 50, height: 50}}
      source={
        photo_url
          ? {
              uri: getStorageFileUrlWImageTransform({
                fileKey: photo_url,
                w: 100,
                q: 60,
              }),
            }
          : require('../../assets/images/image-not-found.png')
      }
      resizeMode={FastImage.resizeMode.cover}
    />
  );
};

interface Props extends ListProdukNavProps {}

const Produk = ({navigation}: Props) => {
  const getAllProduk = useProduk_GetAllProdukQuery();
  const [deleteProdukMutation, _deleteProdukMutationResult] =
    useProduk_DeleteProdukByPkMutation({
      refetchQueries: [namedOperations.Query.Produk_GetAllProduk],
    });
  const toast = useToast();

  const data = useMemo(() => {
    const handleDeleteProduk = async (
      id: string,
      name: string,
      product_photo_url: string,
    ) => {
      const mutation = async () => {
        if (product_photo_url && product_photo_url !== '') {
          const res = await storage.delete(`/${product_photo_url}`);
          console.log(
            '🚀 ~ file: ListProduk.tsx ~ line 99 ~ mutation ~ res',
            res,
          );
        }
        const res = await deleteProdukMutation({variables: {id}});
        if (res.errors) {
          toast.show({
            ...TOAST_TEMPLATE.error(`Delete produk ${name} gagal.`),
          });
        } else {
          toast.show({
            ...TOAST_TEMPLATE.success(`Delete produk ${name} berhasil.`),
          });
        }
      };
      Alert.alert(
        'Hapus Produk',
        `Kategori produk ${name} akan dihapus. Lanjutkan?`,
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            onPress: () => mutation(),
            text: 'Hapus',
            style: 'destructive',
          },
        ],
        {
          cancelable: true,
        },
      );
    };
    const temp = getAllProduk.data?.rocketjaket_product || [];

    const withComponent = temp.map(produk => ({
      ...produk,
      capital_price: myNumberFormat.rp(produk.capital_price),
      selling_price: myNumberFormat.rp(produk.selling_price),
      discount: myNumberFormat.percentageDiscount(produk.discount || 0),
      category: produk.product_category.name,
      photo: (
        <ProductPhoto photo_url={produk?.photo_url ? produk.photo_url : ''} />
      ),
      action: (
        <Action
          {...{
            id: produk.id,
            navigation,
          }}
          handleDeleteKategori={async () =>
            handleDeleteProduk(produk.id, produk.name, produk.photo_url || '')
          }
        />
      ),
    }));
    return withComponent;
  }, [
    deleteProdukMutation,
    getAllProduk.data?.rocketjaket_product,
    navigation,
    toast,
  ]);

  useEffect(() => {
    getAllProduk.refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={() => {
            getAllProduk.refetch();
          }}
        />
      }>
      <Box w="full" paddingBottom={300}>
        <HStack justifyContent="space-between" alignItems="center" mb="10">
          <Heading fontSize="xl">List Semua Produk Yang Ada</Heading>
          <Button
            onPress={() => navigation.navigate('CreateProduk')}
            size="lg"
            leftIcon={<Icon as={Feather} name="plus-square" size="sm" />}>
            Buat Baru
          </Button>
        </HStack>

        <CustomTable
          isLoading={
            getAllProduk.loading || _deleteProdukMutationResult.loading
          }
          data={data}
          headerHeight={90}
          rowHeight={70}
          columns={[
            {
              Header: 'Foto',
              accessor: 'photo',
              widthRatio: 1,
              isAvatar: true,
              isDisableSort: true,
            },
            {Header: 'Nama Produk', accessor: 'name', widthRatio: 2},
            {Header: 'Kategori Produk', accessor: 'category', widthRatio: 1},
            {Header: 'Harga Modal', accessor: 'capital_price', widthRatio: 1},
            {Header: 'Harga Jual', accessor: 'selling_price', widthRatio: 1},
            {Header: 'Diskon', accessor: 'discount', widthRatio: 1},
            {
              Header: 'Aksi',
              accessor: 'action',
              widthRatio: 1,
              isAction: true,
              isDisableSort: true,
            },
          ]}
        />
      </Box>
    </ScrollView>
  );
};

export default Produk;
