import React from 'react';
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
  useProduk_GetAllKategoriProdukQuery,
  useProduk_DeleteKategoriProdukIdMutation,
  namedOperations,
} from '../../graphql/gql-generated';
import CustomTable from '../CustomTable';
import {useMemo} from 'react';
import {ButtonEdit, IconButtonDelete} from '../Buttons';
import {TOAST_TEMPLATE} from '../../shared/constants';
import {useMyAppState} from '../../state';
import {useNavigation} from '@react-navigation/native';
import to from 'await-to-js';
import {checkErrorMessage} from '../../shared/utils';

interface IActionProps {
  id: number;
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
          navigation.navigate('UpdateKategoriProduk', {categoryId: id});
        }}
      />
      <IconButtonDelete size="sm" onPress={() => handleDeleteKategori()} />
    </HStack>
  );
};

interface Props {}

const KategoriProduk = ({}: Props) => {
  const window = useWindowDimensions();
  const tableWidth: number | 'full' = useBreakpointValue({
    base: 700,
    md: 'full',
  });

  const navigation =
    useNavigation<ProdukScreenProps['ProdukHome']['navigation']>();
  const getAllKategoriProduk = useProduk_GetAllKategoriProdukQuery();
  const toast = useToast();

  const [deleteKategoriMutation, _deleteKategoriMutationResult] =
    useProduk_DeleteKategoriProdukIdMutation({
      refetchQueries: [namedOperations.Query.Produk_GetAllKategoriProduk],
    });

  const data = useMemo(() => {
    const handleDeleteKategori = async (id: number, name: string) => {
      const mutation = async () => {
        const [err, res] = await to(deleteKategoriMutation({variables: {id}}));
        if (err || !res) {
          const errFk = checkErrorMessage.fkError(err.message)
            ? `\nMasih ada produk yang berada dalam kategori ${name}.`
            : '';
          toast.show(
            TOAST_TEMPLATE.error(
              `Delete kategori produk ${name} gagal.${errFk}`,
            ),
          );
        } else {
          toast.show(
            TOAST_TEMPLATE.success(`Delete kategori produk ${name} berhasil.`),
          );
        }
      };
      Alert.alert(
        'Hapus Kategori Produk',
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
    const temp = getAllKategoriProduk.data?.product_categories || [];

    const withAction = temp.map(val => ({
      ...val,
      component: (
        <Action
          {...{
            id: val.id,
            navigation,
          }}
          handleDeleteKategori={() => handleDeleteKategori(val.id, val.name)}
        />
      ),
    }));

    return withAction;
  }, [
    // deleteKategoriMutation,
    getAllKategoriProduk.data?.product_categories,
    navigation,
    toast,
  ]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={async () => await getAllKategoriProduk.refetch()}
        />
      }>
      <Box paddingBottom={300}>
        <HStack justifyContent="space-between" alignItems="center" mb="10">
          <Heading fontSize="xl">List Semua Kategori Produk</Heading>
          <Button
            onPress={() => {
              navigation.navigate('CreateKategoriProduk');
            }}
            size="lg"
            leftIcon={<Icon as={Feather} name="plus-square" size="sm" />}>
            Buat Baru
          </Button>
        </HStack>
        <CustomTable
          isLoading={
            getAllKategoriProduk.loading
            // || _deleteKategoriMutationResult.loading
          }
          tableSettings={{
            mainSettings: {
              tableWidth: tableWidth,
              defaultSortFrom: 'asc',
            },
          }}
          rowKeysAccessor="id"
          data={data}
          columns={[
            {Header: 'Nama Kategori', accessor: 'name', widthRatio: 2},
            {Header: 'Deskripsi', accessor: 'description', widthRatio: 2},
            {
              Header: 'Aksi',
              accessor: 'component',
              widthRatio: 1,
              isAction: true,
            },
          ]}
        />
      </Box>
    </ScrollView>
  );
};

export default KategoriProduk;
