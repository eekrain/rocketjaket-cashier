import React, {useEffect, useMemo, useState} from 'react';
import {Box, Stack, Modal} from 'native-base';
import ProductsContent from './ProductsContent';
import withAppLayout from '../Layout/AppLayout';
import {
  useInventory_GetAllInventoryProductByStorePkQuery,
  useProduk_GetAllKategoriProdukQuery,
  useStore_GetAllStoreQuery,
  useStore_GetStoreByPkQuery,
} from '../../graphql/gql-generated';
import {
  getStorageFileUrlWImageTransform,
  useFlexSearch,
  useMyUser,
} from '../../shared/utils';
import {UserRolesEnum} from '../../types/user';
import {useForm} from 'react-hook-form';
import {RHSelect} from '../../shared/components';
import {Alert} from 'react-native';
import CashierCart from './CashierCart';
import {CashierHomeNavProps} from '../../screens/app/CashierScreen';

export interface IDefaultValues {
  search_term: string;
  active_category: number | null;
  show_modal_change_toko: boolean;
  store_id: string | null;
}

const defaultValues: IDefaultValues = {
  active_category: null,
  search_term: '',
  show_modal_change_toko: false,
  store_id: null,
};

export interface IInventoryProductData {
  id: string;
  product_updated_at: any;
  inventory_product_updated_at: any;
  product_name: string;
  product_category: string;
  product_category_id: number;
  available_qty: number;
  variant: string;
  capital_price: number;
  selling_price: number;
  discount: number;
  product_photo_url: string;
}

interface Props extends CashierHomeNavProps {}

const CashierHome = ({route}: Props) => {
  console.log(
    '🚀 ~ file: index.tsx ~ line 55 ~ CashierHome ~ route.params?.invoiceNumberRefundPart',
    route.params?.invoiceNumberRefundPart,
  );
  const myUser = useMyUser();
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
  const activeCategory = watch('active_category');
  const searchTerm = watch('search_term');

  useEffect(() => {
    if (myUser.roles.includes(UserRolesEnum.administrator) && selectedStoreId) {
      myUser.updateStoreId(parseInt(selectedStoreId, 10));
    }
  }, [myUser, selectedStoreId]);

  const getAllCategory = useProduk_GetAllKategoriProdukQuery();
  const kategoriProdukTab = useMemo(() => {
    const data = getAllCategory.data?.rocketjaket_product_category || [];

    const tabs: {value: number | null; label: string}[] = [
      {value: null, label: 'Semua Kategori'},
      ...data.map(cat => ({value: cat.id, label: cat.name})),
    ];
    return tabs;
  }, [getAllCategory.data?.rocketjaket_product_category]);

  const getAllStore = useStore_GetAllStoreQuery();
  const storeSelectOptions = useMemo(() => {
    const data = getAllStore.data?.rocketjaket_store || [];
    return data.map(store => ({label: store.name, value: store.id.toString()}));
  }, [getAllStore.data?.rocketjaket_store]);

  const getStoreActive = useStore_GetStoreByPkQuery({
    variables: {
      id: parseInt(selectedStoreId || '0', 10),
    },
  });
  const dataStoreActive = useMemo(() => {
    return getStoreActive.data?.rocketjaket_store_by_pk;
  }, [getStoreActive.data?.rocketjaket_store_by_pk]);

  const getAllInventoryProduct =
    useInventory_GetAllInventoryProductByStorePkQuery({
      variables: {store_id: parseInt(selectedStoreId || '0', 10)},
    });
  const inventoryProductData: {
    raw: IInventoryProductData[];
    filteredByCategory: IInventoryProductData[];
  } = useMemo(() => {
    const data =
      getAllInventoryProduct.data?.rocketjaket_inventory_product || [];

    const processed: IInventoryProductData[] = data.map(pdk => {
      return {
        id: pdk.id,
        product_updated_at: pdk.product.updated_at,
        inventory_product_updated_at: pdk.updated_at,
        product_name: pdk.product.name,
        product_category: pdk.product.product_category.name,
        product_category_id: pdk.product.product_category.id,
        available_qty: pdk.available_qty,
        variant: pdk.inventory_product_variants
          .map(variant => variant.inventory_variant_metadata.variant_value)
          .join(' / '),
        capital_price: pdk.override_capital_price
          ? pdk.override_capital_price
          : pdk.product.capital_price,
        selling_price: pdk.override_selling_price
          ? pdk.override_selling_price
          : pdk.product.selling_price,
        discount: pdk.override_discount
          ? pdk.override_discount
          : pdk.product.discount,
        product_photo_url: getStorageFileUrlWImageTransform({
          fileKey: pdk.product.photo_url,
          h: 150,
          q: 80,
        }),
      };
    });

    const filteredByCategory = processed.filter(pdk =>
      activeCategory ? pdk.product_category_id === activeCategory : true,
    );

    return {raw: processed, filteredByCategory};
  }, [
    activeCategory,
    getAllInventoryProduct.data?.rocketjaket_inventory_product,
  ]);
  const flexSearch = useFlexSearch<IInventoryProductData>(
    searchTerm,
    inventoryProductData.raw,
    {
      tokenize: 'strict',
      optimize: true,
      id: 'id',
      document: {
        index: [
          {
            field: 'product_name',
            tokenize: 'forward',
          },
          {field: 'product_category', tokenize: 'forward'},
          {
            field: 'variant',
            tokenize: 'forward',
          },
        ],
        // @ts-ignore: Unreachable code error
        store: inventoryProductData.raw?.[0]
          ? Object.keys(inventoryProductData.raw?.[0])
          : undefined,
      },
    },
    {
      enrich: true,
      index: [
        {
          field: 'product_name',
        },
        {
          field: 'product_category',
        },
        {
          field: 'variant',
          suggest: true,
        },
      ],
    },
  );

  const searchedInventoryProductData = useMemo(() => {
    const all: IInventoryProductData[] = [];
    flexSearch.forEach(data => all.push(...data.result.map(x => x.doc)));
    const map = new Map();
    for (const item of all) {
      if (!map.has(item.id)) {
        map.set(item.id, true); // set any value to Map
      }
    }
    const distinct: IInventoryProductData[] = [];
    map.forEach((_v, key) => {
      const found = all.find(pdk => pdk.id === key);
      if (found) distinct.push(found);
    });
    return distinct;
  }, [flexSearch]);

  useEffect(() => {
    if (
      myUser.roles.includes(UserRolesEnum.administrator) &&
      !selectedStoreId
    ) {
      setValue('show_modal_change_toko', true);
    } else if (
      myUser.roles.includes(UserRolesEnum.administrator) &&
      selectedStoreId
    ) {
      setValue('show_modal_change_toko', false);
    }
    if (!isDataStoreReady) {
      console.log(
        '🚀 ~ file: index.tsx ~ line 227 ~ useEffect ~ myUser.store_id',
        myUser.store_id,
      );
      if (myUser.store_id) {
        setValue('store_id', myUser.store_id.toString());
        setDataStoreReady(true);
      } else if (!myUser.roles.includes(UserRolesEnum.administrator)) {
        Alert.alert(
          'Akun Anda Belum Terdaftar',
          'Akun anda belum terdaftar di store manapun! Silahkan kontak owner / admin untuk mendaftarkan akun anda ke penempatan toko sesuai.',
        );
      }
    }
  }, [isDataStoreReady, myUser, selectedStoreId, setValue]);

  return (
    <Box>
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
      <Stack direction={['column', 'column', 'row']} space="4" h="full">
        <ProductsContent
          route={route}
          searchTerm={searchTerm}
          activeCategory={activeCategory}
          control={control}
          errors={errors}
          dataStoreActive={dataStoreActive}
          kategoriProdukTab={kategoriProdukTab}
          setValue={setValue}
          filteredByCategoryProductData={
            inventoryProductData.filteredByCategory
          }
          searchedInventoryProductData={searchedInventoryProductData}
        />
        <CashierCart route={route} />
      </Stack>
    </Box>
  );
};

export default withAppLayout(CashierHome);
