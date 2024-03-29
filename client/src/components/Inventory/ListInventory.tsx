import React, {useEffect, useState} from 'react';
import {
  Box,
  Heading,
  HStack,
  Button,
  Icon,
  useToast,
  ScrollView,
  Modal,
  useBreakpointValue,
  Stack,
  IStackProps,
} from 'native-base';
import {Alert, RefreshControl} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {
  useStore_GetAllStoreQuery,
  useInventory_GetAllInventoryProductByStoreIdQuery,
  namedOperations,
  useInventory_DeleteOneInventoryProductByIdMutation,
} from '../../graphql/gql-generated';
import CustomTable from '../CustomTable';
import {useMemo} from 'react';
import {ButtonEdit, IconButtonDelete} from '../Buttons';
import {RHSelect, MyImageViewer} from '../../shared/components';
import {useMyAppState} from '../../state';
import {InventoryScreenProps} from '../../screens/app/InventoryScreen';
import {useForm} from 'react-hook-form';
import {myNumberFormat, useMyUser} from '../../shared/utils';
import {nanoid} from 'nanoid/non-secure';
import {TOAST_TEMPLATE} from '../../shared/constants';
import to from 'await-to-js';
import {UserRolesEnum} from '../../types/user';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface IActionProps {
  navigation: InventoryScreenProps['InventoryHome']['navigation'];
  handleDeleteKategori: () => Promise<void>;
  storeId: string;
  storeName: string;
  inventoryProductId: string;
}

const Action = ({
  storeId,
  storeName,
  inventoryProductId,
  navigation,
  handleDeleteKategori,
}: IActionProps) => {
  const myAppState = useMyAppState();

  return (
    <HStack space="3">
      <ButtonEdit
        size="sm"
        onPress={() => {
          myAppState.setLoadingWholePage(true);
          navigation.navigate('UpdateProductInventory', {
            storeId: parseInt(storeId, 10),
            storeName,
            inventoryProductId,
            token: nanoid(),
          });
        }}
      />
      <IconButtonDelete size="sm" onPress={() => handleDeleteKategori()} />
    </HStack>
  );
};

export interface IDefaultValues {
  show_modal_change_toko: boolean;
  store_id: string | null;
}

const defaultValues: IDefaultValues = {
  show_modal_change_toko: false,
  store_id: null,
};

type X = InventoryScreenProps['InventoryHome'];

interface IListInventoryProps extends X {}

const ListInventory = ({navigation}: IListInventoryProps) => {
  const flexDirHeader: IStackProps['direction'] = useBreakpointValue({
    base: 'column',
    md: 'row',
  });
  const showWhenSm: boolean = useBreakpointValue({
    base: true,
    md: false,
  });
  const showWhenMd: boolean = useBreakpointValue({
    base: false,
    md: true,
  });
  const tableWidth: number | 'full' = useBreakpointValue({
    base: 900,
    md: 'full',
  });
  const myUser = useMyUser();
  const myAppState = useMyAppState();
  const getAllToko = useStore_GetAllStoreQuery();
  const toast = useToast();
  const [isDataStoreReady, setDataStoreReady] = useState(false);

  const {
    watch,
    control,
    setValue,
    formState: {errors},
  } = useForm({
    defaultValues,
  });

  const selectedStoreId = watch('store_id');
  const [selectedStoreName, setSelectedStoreName] = useState('');

  const storeSelectOptions = useMemo(() => {
    const allToko = getAllToko.data?.stores || [];

    const normalized = allToko.map(toko => ({
      value: toko.id.toString(),
      label: toko.name,
    }));

    return normalized;
  }, [getAllToko.data?.stores]);

  const getAllInventory = useInventory_GetAllInventoryProductByStoreIdQuery({
    variables: {
      store_id: selectedStoreId ? parseInt(selectedStoreId, 10) : 0,
    },
  });

  const allInventoryProduct = useMemo(() => {
    const products = getAllInventory.data?.inventory_products || [];

    return products.map(pdk => ({
      id: pdk.id,
      product_name: pdk.product.name,
      product_label: `${pdk.product.product_category.name} / ${pdk.product.name}`,
      variant_values: pdk.inventory_product_variants
        .map(variant => variant.inventory_variants_metadata.variant_value)
        .join(' / '),
      available_qty: myNumberFormat.thousandSeparated(pdk.available_qty),
      capital_price: myNumberFormat.rp(
        pdk?.override_capital_price
          ? pdk.override_capital_price
          : pdk.product.capital_price,
      ),
      selling_price: myNumberFormat.rp(
        pdk?.override_selling_price
          ? pdk.override_selling_price
          : pdk.product.selling_price,
      ),
      discount: myNumberFormat.percentageDiscount(
        pdk?.override_discount ? pdk.override_discount : pdk.product.discount,
      ),
      photo_id: pdk.product.photo_id,
    }));
  }, [getAllInventory.data?.inventory_products]);

  const [
    deleteInventoryProductMutation,
    _deleteInventoryProductMutationResult,
  ] = useInventory_DeleteOneInventoryProductByIdMutation({
    refetchQueries: [
      namedOperations.Query.Inventory_GetAllInventoryProductByStoreId,
    ],
  });

  const data = useMemo(() => {
    const handleDeleteInventory = async (id: string, name: string) => {
      const mutation = async () => {
        const [err, res] = await to(
          deleteInventoryProductMutation({
            variables: {inventory_product_id: id},
          }),
        );
        if (err || !res) {
          console.log(
            '🚀 ~ file: ListInventory.tsx ~ line 184 ~ mutation ~ err',
            err,
          );
          toast.show(
            TOAST_TEMPLATE.error(
              `Hapus inventory produk ${name} gagal.${err.message}`,
            ),
          );
        } else {
          toast.show(
            TOAST_TEMPLATE.success(`Hapus inventory produk ${name} berhasil.`),
          );
        }
      };
      Alert.alert(
        'Hapus Toko',
        `Inventory produk ${name} akan dihapus. Lanjutkan?`,
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

    const withAction = allInventoryProduct.map(val => ({
      ...val,
      photo: (
        <MyImageViewer
          size={50}
          source={{
            fileId: val.photo_id,
            w: 50,
            q: 60,
          }}
        />
      ),
      component: (
        <Action
          storeId={selectedStoreId || ''}
          storeName={selectedStoreName}
          inventoryProductId={val.id}
          navigation={navigation}
          handleDeleteKategori={() =>
            handleDeleteInventory(val.id, val.product_label)
          }
        />
      ),
    }));

    return withAction;
  }, [
    allInventoryProduct,
    // deleteInventoryProductMutation,
    navigation,
    selectedStoreId,
    selectedStoreName,
    toast,
  ]);

  useEffect(() => {
    if (myUser.roles.includes(UserRolesEnum.administrator) && selectedStoreId) {
      myUser.updateStoreId(parseInt(selectedStoreId, 10));
    }
    if (
      myUser.roles.includes(UserRolesEnum.administrator) &&
      !selectedStoreId
    ) {
      setValue('show_modal_change_toko', true);
    }
    if (myUser.roles.includes(UserRolesEnum.administrator) && selectedStoreId) {
      setValue('show_modal_change_toko', false);
    }
  }, [myUser.roles, selectedStoreId]);

  useEffect(() => {
    if (!isDataStoreReady && myUser.store_id) {
      setValue('store_id', myUser.store_id.toString());
      setDataStoreReady(true);
    } else if (
      isDataStoreReady &&
      !myUser.roles.includes(UserRolesEnum.administrator) &&
      !myUser.store_id
    ) {
      Alert.alert(
        'Akun Anda Belum Terdaftar',
        'Akun anda belum terdaftar di store manapun! Silahkan kontak owner / admin untuk mendaftarkan akun anda ke penempatan toko sesuai.',
      );
    }
  }, [
    isDataStoreReady,
    myUser.roles,
    myUser.store_id,
    selectedStoreId,
    setValue,
  ]);

  useEffect(() => {
    const found = storeSelectOptions.find(val => val.value === selectedStoreId);
    setSelectedStoreName(found?.label || '');
  }, [selectedStoreId, storeSelectOptions]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={async () => {
            await getAllToko.refetch();
            await getAllInventory.refetch();
          }}
        />
      }>
      <Modal
        isOpen={watch('show_modal_change_toko')}
        onClose={() => setValue('show_modal_change_toko', false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Pilih Toko</Modal.Header>
          <Box p="3">
            <RHSelect
              selectOptions={storeSelectOptions}
              control={control}
              errors={errors}
              name="store_id"
              label="Toko"
            />
          </Box>
        </Modal.Content>
      </Modal>
      <Box pb={'56'}>
        <Stack
          direction={flexDirHeader}
          justifyContent="space-between"
          alignItems={{base: 'flex-start', md: 'center'}}
          space={{base: '4', md: undefined}}
          mb="10"
          mt="4">
          <HStack space="4" alignItems="center">
            <Heading fontSize="xl">
              List Inventory / Stok Produk Toko {selectedStoreName}
            </Heading>
            {myUser.roles.includes(UserRolesEnum.administrator) && showWhenMd && (
              <Button
                onPress={() => setValue('show_modal_change_toko', true)}
                size="sm"
                leftIcon={<Icon as={FeatherIcon} name="home" size="xs" />}>
                Ganti Toko
              </Button>
            )}
          </HStack>

          <HStack
            justifyContent={'space-between'}
            w={{base: 'full', md: undefined}}>
            {myUser.roles.includes(UserRolesEnum.administrator) && showWhenSm && (
              <Button
                onPress={() => setValue('show_modal_change_toko', true)}
                size="sm"
                leftIcon={<Icon as={FeatherIcon} name="home" size="xs" />}>
                Ganti Toko
              </Button>
            )}
            <Button
              onPress={() => {
                if (selectedStoreId) {
                  myAppState.setLoadingWholePage(true);
                  navigation.navigate('CreateProductInventory', {
                    storeId: parseInt(selectedStoreId, 10),
                    storeName: selectedStoreName,
                  });
                }
              }}
              size="lg"
              leftIcon={<Icon as={Feather} name="plus-square" size="sm" />}>
              Buat Baru
            </Button>
          </HStack>
        </Stack>
        <CustomTable
          isLoading={
            getAllToko.loading ||
            getAllInventory.loading ||
            _deleteInventoryProductMutationResult.loading
          }
          tableSettings={{
            mainSettings: {
              tableWidth,
              defaultSortFrom: 'asc',
            },
            row: {
              rowHeight: 80,
            },
          }}
          rowKeysAccessor="id"
          data={data}
          columns={[
            {
              Header: '',
              accessor: 'photo',
              widthRatio: 0.4,
              isDisableSort: true,
            },
            {Header: 'Produk', accessor: 'product_label', widthRatio: 1},
            {Header: 'Varian', accessor: 'variant_values', widthRatio: 0.4},
            {Header: 'Tersedia', accessor: 'available_qty', widthRatio: 0.4},
            {Header: 'Harga Modal', accessor: 'capital_price', widthRatio: 0.6},
            {Header: 'Harga Jual', accessor: 'selling_price', widthRatio: 0.6},
            {Header: 'Diskon', accessor: 'discount', widthRatio: 0.6},
            {
              Header: 'Aksi',
              accessor: 'component',
              widthRatio: 0.5,
              isAction: true,
              isDisableSort: true,
            },
          ]}
        />
      </Box>
    </ScrollView>
  );
};

export default ListInventory;
