import React, {useEffect, useState} from 'react';
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
  useStore_GetAllStoreQuery,
  useInventory_GetAllInventoryProductByStoreIdQuery,
  namedOperations,
  // useInventory_BulkDeleteOneInventoryProductByPkMutation,
} from '../../graphql/gql-generated';
import CustomTable from '../CustomTable';
import {useMemo} from 'react';
import {ButtonEdit, IconButtonDelete} from '../Buttons';
import {RHSelect, MyAvatar, MyImageViewer} from '../../shared/components';
import {useMyAppState} from '../../state';
import {InventoryScreenProps} from '../../screens/app/InventoryScreen';
import {useForm} from 'react-hook-form';
import {
  getStorageFileUrlWImageTransform,
  myNumberFormat,
} from '../../shared/utils';
import {nanoid} from 'nanoid/non-secure';

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

interface InventoryForm {
  store_id: string | null;
}

const defaultValues: InventoryForm = {
  store_id: null,
};

type X = InventoryScreenProps['InventoryHome'];

interface IListInventoryProps extends X {}

const ListInventory = ({navigation}: IListInventoryProps) => {
  const myAppState = useMyAppState();
  const getAllToko = useStore_GetAllStoreQuery();
  const toast = useToast();
  const [isDataReady, setDataReady] = useState(false);

  const {
    watch,
    control,
    setValue,
    formState: {errors},
  } = useForm<InventoryForm>({
    defaultValues,
  });

  const selectedStoreId = watch('store_id');
  const [selectedStoreName, setSelectedStoreName] = useState('');

  const tokoSelectOptions = useMemo(() => {
    const allToko = getAllToko.data?.stores || [];

    const normalized = allToko.map(toko => ({
      value: toko.id.toString(),
      label: toko.name,
    }));

    return normalized;
  }, [getAllToko.data?.stores]);

  useEffect(() => {
    if (!isDataReady && tokoSelectOptions.length > 0) {
      setValue('store_id', tokoSelectOptions?.[0].value);
      setDataReady(true);
      myAppState.setLoadingWholePage(false);
    } else if (!isDataReady) {
      myAppState.setLoadingWholePage(true);
    }
  }, [
    getAllToko.loading,
    isDataReady,
    myAppState,
    setValue,
    tokoSelectOptions,
  ]);

  useEffect(() => {
    const found = tokoSelectOptions.find(val => val.value === selectedStoreId);
    setSelectedStoreName(found?.label || '');
  }, [selectedStoreId, tokoSelectOptions]);

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

  // const [
  //   deleteInventoryProductMutation,
  //   _deleteInventoryProductMutationResult,
  // ] = useInventory_BulkDeleteOneInventoryProductByPkMutation({
  //   refetchQueries: [
  //     namedOperations.Query.Inventory_GetAllInventoryProductByStorePK,
  //   ],
  // });

  const data = useMemo(() => {
    // const handleDeleteKategori = async (id: string, name: string) => {
    //   const mutation = async () => {
    //     const res = await deleteInventoryProductMutation({
    //       variables: {inventory_product_id: id},
    //     });
    //     if (res.errors) {
    //       toast.show({
    //         ...TOAST_TEMPLATE.error(`Hapus inventory produk ${name} gagal.`),
    //       });
    //     } else {
    //       toast.show({
    //         ...TOAST_TEMPLATE.success(
    //           `Hapus inventory produk ${name} berhasil.`,
    //         ),
    //       });
    //     }
    //   };
    //   Alert.alert(
    //     'Hapus Toko',
    //     `Inventory produk ${name} akan dihapus. Lanjutkan?`,
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
    const withAction = allInventoryProduct.map(val => ({
      ...val,
      photo: (
        <MyImageViewer
          size={50}
          source={{
            uri: getStorageFileUrlWImageTransform({
              fileId: val.photo_id,
              w: 50,
              q: 60,
            }),
          }}
        />
      ),
      component: (
        <Action
          storeId={selectedStoreId || ''}
          storeName={selectedStoreName}
          inventoryProductId={val.id}
          navigation={navigation}
          handleDeleteKategori={async () => {
            // handleDeleteKategori(val.id, val.product_label),
          }}
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

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={() => {
            getAllToko.refetch();
            getAllInventory.refetch();
          }}
        />
      }>
      <Box paddingBottom={300}>
        <Box mb="4">
          <Heading fontSize="xl" mb="2">
            Pilih Toko
          </Heading>
          <Box bgColor="white" rounded="lg">
            <RHSelect
              selectOptions={tokoSelectOptions}
              name="store_id"
              control={control}
              errors={errors}
              label="Pilih Toko"
              isDisableLabel={true}
              w="full"
              fontSize="lg"
              placeholderTextColor="gray.400"
            />
          </Box>
        </Box>
        <HStack
          justifyContent="space-between"
          alignItems="center"
          mb="10"
          mt="4">
          <Heading fontSize="xl">
            List Inventory / Stok Produk Toko {selectedStoreName}
          </Heading>
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
        <CustomTable
          isLoading={
            getAllToko.loading // || _deleteInventoryProductMutationResult.loading
          }
          rowHeight={80}
          data={data}
          // tableWidth={3000}
          columns={[
            {
              Header: '',
              accessor: 'photo',
              widthRatio: 0.3,
              isAvatar: true,
              isDisableSort: true,
            },
            {Header: 'Produk', accessor: 'product_label', widthRatio: 1},
            {Header: 'Varian', accessor: 'variant_values', widthRatio: 0.4},
            {Header: 'Tersedia', accessor: 'available_qty', widthRatio: 0.6},
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
