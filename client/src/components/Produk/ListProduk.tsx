import React, {useEffect} from 'react';
import {
  Box,
  Heading,
  HStack,
  Button,
  Icon,
  useToast,
  ScrollView,
  useBreakpointValue,
} from 'native-base';
import {Alert, RefreshControl, useWindowDimensions} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {ProdukScreenProps} from '../../screens/app/ProdukScreen';
import {
  namedOperations,
  useProduk_GetAllProdukQuery,
  useProduk_DeleteProdukByIdMutation,
} from '../../graphql/gql-generated';
import CustomTable from '../CustomTable';
import {useMemo} from 'react';
import {IconButtonDelete, ButtonEdit} from '../Buttons';
import {
  checkErrorMessage,
  getStorageFileUrlWImageTransform,
  myNumberFormat,
  nhost,
} from '../../shared/utils';
import {useMyAppState} from '../../state';
import {useNavigation} from '@react-navigation/native';
import {MyImageViewer} from '../../shared/components';
import {TOAST_TEMPLATE} from '../../shared/constants';
import to from 'await-to-js';

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
  const tableWidth: number | 'full' = useBreakpointValue({
    base: 900,
    md: 'full',
  });
  const navigation =
    useNavigation<ProdukScreenProps['ProdukHome']['navigation']>();
  const getAllProduk = useProduk_GetAllProdukQuery();
  const [deleteProdukMutation, _deleteProdukMutationResult] =
    useProduk_DeleteProdukByIdMutation({
      refetchQueries: [namedOperations.Query.Produk_GetAllProduk],
    });
  const toast = useToast();

  const data = useMemo(() => {
    const handleDeleteProduk = async (
      id: string,
      name: string,
      photo_id?: string | null,
    ) => {
      const mutation = async () => {
        if (photo_id && photo_id !== '') {
          const [err, res] = await to(nhost.storage.delete({fileId: photo_id}));
          if (err || !res) {
            console.log(
              '🚀 ~ file: ListProduk.tsx ~ line 87 ~ mutation ~ err',
              err,
            );
          } else {
            console.log(
              '🚀 ~ file: ListProduk.tsx ~ line 87 ~ mutation ~ res',
              res,
            );
          }
        }
        const [err, res] = await to(deleteProdukMutation({variables: {id}}));
        if (err || !res) {
          const errFk = checkErrorMessage.fkError(err.message)
            ? `\nProduk ${name} masih ada di dalam inventory.`
            : '';
          toast.show(
            TOAST_TEMPLATE.error(`Delete produk ${name} gagal.${errFk}`),
          );
        } else {
          toast.show(TOAST_TEMPLATE.success(`Delete produk ${name} berhasil.`));
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
              fileId: produk?.photo_id,
              w: 50,
              q: 60,
            }}
          />
        ),
        action: (
          <Action
            {...{
              id: produk.id,
              navigation,
            }}
            handleDeleteKategori={() =>
              handleDeleteProduk(produk.id, produk.name, produk.photo_id)
            }
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

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={async () => await getAllProduk.refetch()}
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
          tableSettings={{
            mainSettings: {
              tableWidth: tableWidth,
              defaultSortFrom: 'asc',
            },
            row: {
              rowHeight: 80,
            },
          }}
          rowKeysAccessor="id"
          isLoading={
            getAllProduk.loading // || _deleteProdukMutationResult.loading
          }
          data={data}
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
