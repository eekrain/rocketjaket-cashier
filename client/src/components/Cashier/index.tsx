import React, {useEffect, useMemo, useState} from 'react';
import {Box, Stack, Modal} from 'native-base';
import ProductsContent from './ProductsContent';
import withAppLayout from '../Layout/AppLayout';
import {
  useInventory_GetAllInventoryProductByStoreIdQuery,
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
import {useMyAppState} from '../../state';

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
  product_name_concise: string;
  product_category: string;
  product_category_id: number;
  variant: string;
  available_qty: number;
  capital_price: number;
  selling_price: number;
  discount: number;
  product_photo_id?: string | null;
}

interface Props extends CashierHomeNavProps {}

const CashierHome = ({route}: Props) => {
  const myUser = useMyUser();
  const myAppState = useMyAppState();
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

  const getAllCategory = useProduk_GetAllKategoriProdukQuery();
  const kategoriProdukTab = useMemo(() => {
    const data = getAllCategory.data?.product_categories || [];

    const tabs: {value: number | null; label: string}[] = [
      {value: null, label: 'Semua Kategori'},
      ...data.map(cat => ({value: cat.id, label: cat.name})),
    ];
    return tabs;
  }, [getAllCategory.data?.product_categories]);

  const getAllStore = useStore_GetAllStoreQuery();
  const storeSelectOptions = useMemo(() => {
    const data = getAllStore.data?.stores || [];
    return data.map(store => ({label: store.name, value: store.id.toString()}));
  }, [getAllStore.data?.stores]);

  const getStoreActive = useStore_GetStoreByPkQuery({
    variables: {
      id: parseInt(selectedStoreId || '0', 10),
    },
  });
  const dataStoreActive = useMemo(() => {
    return getStoreActive.data?.stores_by_pk;
  }, [getStoreActive.data?.stores_by_pk]);

  const getAllInventoryProduct =
    useInventory_GetAllInventoryProductByStoreIdQuery({
      variables: {store_id: parseInt(selectedStoreId || '0', 10)},
    });
  const inventoryProductData: {
    raw: IInventoryProductData[];
    filteredByCategory: IInventoryProductData[];
  } = useMemo(() => {
    const data = getAllInventoryProduct.data?.inventory_products || [];

    const processed: IInventoryProductData[] = data.map(pdk => {
      const variant = pdk.inventory_product_variants
        .map(variant => variant.inventory_variants_metadata.variant_value)
        .join(' / ');
      const product_name_concise = `${pdk.product.product_category.name} / ${pdk.product.name} / ${variant}`;
      return {
        id: pdk.id,
        product_updated_at: pdk.product.updated_at,
        inventory_product_updated_at: pdk.updated_at,
        product_name: pdk.product.name,
        product_name_concise,
        product_category: pdk.product.product_category.name,
        variant,
        product_category_id: pdk.product.product_category.id,
        available_qty: pdk.available_qty,
        capital_price: pdk.override_capital_price
          ? pdk.override_capital_price
          : pdk.product.capital_price,
        selling_price: pdk.override_selling_price
          ? pdk.override_selling_price
          : pdk.product.selling_price,
        discount: pdk.override_discount
          ? pdk.override_discount
          : pdk.product.discount,
        product_photo_id: pdk.product.photo_id,
      };
    });

    const filteredByCategory = processed.filter(pdk =>
      activeCategory ? pdk.product_category_id === activeCategory : true,
    );

    return {raw: processed, filteredByCategory};
  }, [activeCategory, getAllInventoryProduct.data?.inventory_products]);
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
  }, [
    isDataStoreReady,
    myUser.roles,
    myUser.store_id,
    selectedStoreId,
    setValue,
  ]);

  useEffect(() => {
    myAppState.setLoadingWholePage(
      getAllCategory.loading ||
        getAllStore.loading ||
        getStoreActive.loading ||
        getAllInventoryProduct.loading,
    );
  }, [
    getAllCategory.loading,
    getAllStore.loading,
    getStoreActive.loading,
    getAllInventoryProduct.loading,
  ]);

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
