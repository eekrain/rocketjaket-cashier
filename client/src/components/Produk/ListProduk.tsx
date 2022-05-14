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
import {RefreshControl} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {ProdukScreenProps} from '../../screens/app/ProdukScreen';
import {useProduk_GetAllProdukQuery} from '../../graphql/gql-generated';
import CustomTable from '../CustomTable';
import {useMemo} from 'react';
import {IconButtonDelete, ButtonEdit} from '../Buttons';
import {
  getStorageFileUrlWImageTransform,
  myNumberFormat,
} from '../../shared/utils';
import {useMyAppState} from '../../state';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {MyImageViewer} from '../../shared/components';
import {useAccessToken} from '@nhost/react';

interface IActionProps {
  id: string;
  navigation: ProdukScreenProps['ProdukHome']['navigation'];
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
  photo_id: string;
}

interface Props {}

const Produk = ({}: Props) => {
  const navigation =
    useNavigation<ProdukScreenProps['ProdukHome']['navigation']>();
  const getAllProduk = useProduk_GetAllProdukQuery();
  // const [deleteProdukMutation, _deleteProdukMutationResult] =
  //   useProduk_DeleteProdukByPkMutation({
  //     refetchQueries: [namedOperations.Query.Produk_GetAllProduk],
  //   });
  const accessToken = useAccessToken();
  const toast = useToast();

  const data = useMemo(() => {
    // const handleDeleteProduk = async (
    //   id: string,
    //   name: string,
    //   product_photo_url: string,
    // ) => {
    //   const mutation = async () => {
    //     if (product_photo_url && product_photo_url !== '') {
    //       const res = await storage.delete(`/${product_photo_url}`);
    //       console.log(
    //         '🚀 ~ file: ListProduk.tsx ~ line 99 ~ mutation ~ res',
    //         res,
    //       );
    //     }
    //     const res = await deleteProdukMutation({variables: {id}});
    //     if (res.errors) {
    //       toast.show({
    //         ...TOAST_TEMPLATE.error(`Delete produk ${name} gagal.`),
    //       });
    //     } else {
    //       toast.show({
    //         ...TOAST_TEMPLATE.success(`Delete produk ${name} berhasil.`),
    //       });
    //     }
    //   };
    //   Alert.alert(
    //     'Hapus Produk',
    //     `Kategori produk ${name} akan dihapus. Lanjutkan?`,
    //     [
    //       {
    //         text: 'Cancel',
    //         style: 'cancel',
    //       },
    //       {
    //         onPress: () => mutation(),
    //         text: 'Hapus',
    //         style: 'destructive',
    //       },
    //     ],
    //     {
    //       cancelable: true,
    //     },
    //   );
    // };
    const temp = getAllProduk.data?.products || [];

    const withComponent = temp.map(produk => {
      return {
        ...produk,
        capital_price: myNumberFormat.rp(produk.capital_price),
        selling_price: myNumberFormat.rp(produk.selling_price),
        discount: myNumberFormat.percentageDiscount(produk.discount || 0),
        category: produk.product_category.name,
        photo: (
          <MyImageViewer
            size={50}
            source={{
              uri: getStorageFileUrlWImageTransform({
                fileId: produk?.photo_id,
                w: 50,
                q: 60,
              }),
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }}
          />
        ),
        action: (
          <Action
            {...{
              id: produk.id,
              navigation,
            }}
            handleDeleteKategori={async () => {
              // handleDeleteProduk(produk.id, produk.name, produk.photo_url || '')
            }}
          />
        ),
      };
    });
    return withComponent;
  }, [
    // deleteProdukMutation,
    getAllProduk.data?.products,
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
            getAllProduk.loading // || _deleteProdukMutationResult.loading
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
