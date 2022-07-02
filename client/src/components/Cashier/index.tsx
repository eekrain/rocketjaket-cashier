import React, {useEffect, useMemo, useState} from 'react';
import {
  Box,
  Stack,
  Modal,
  ScrollView,
  HStack,
  Heading,
  useToast,
  Button,
  Icon,
  useBreakpointValue,
  VStack,
} from 'native-base';
import ProductsContent from './ProductsContent';
import withAppLayout from '../Layout/AppLayout';
import {
  useInventory_GetAllInventoryProductByStoreIdSubscriptionSubscription,
  useStore_GetAllStoreQuery,
} from '../../graphql/gql-generated';
import {getUniqArrayObject, useFlexSearch, useMyUser} from '../../shared/utils';
import {UserRolesEnum} from '../../types/user';
import {useForm} from 'react-hook-form';
import {RHSelect} from '../../shared/components';
import {Alert, useWindowDimensions} from 'react-native';
import {CashierHomeNavProps} from '../../screens/app/CashierScreen';
import {ICart, useMyAppState, useMyCart} from '../../state';
import Cart from './Cart';
import {UpdateTransactionNavProps} from '../../screens/app/TransactionScreen';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {sort} from 'fast-sort';
import {ButtonCancelDelete} from '../Buttons';
import {TOAST_TEMPLATE} from '../../shared/constants';
import FeatherIcon from 'react-native-vector-icons/Feather';

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
  const window = useWindowDimensions();

  const heightOnLg: number | string = useBreakpointValue({
    base: 'full',
    lg: window.height - 130,
  });

  const myUser = useMyUser();
  const myAppState = useMyAppState();

  const myCart = useMyCart();
  const roles = useMemo(() => myUser.roles, [myUser.roles]);
  const navigation = useNavigation<UpdateTransactionNavProps['navigation']>();
  const toast = useToast();
  const [isDataStoreReady, setDataStoreReady] = useState(false);

  const isFalseWhenLg: boolean = useBreakpointValue({
    base: true,
    lg: false,
  });

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
  const activeCategory = watch('active_category');
  const searchTerm = watch('search_term');

  const getAllStore = useStore_GetAllStoreQuery();
  const storeSelectOptions = useMemo(() => {
    const data = getAllStore.data?.stores || [];
    return data.map(store => ({label: store.name, value: store.id.toString()}));
  }, [getAllStore.data?.stores]);

  const getAllInventoryProduct =
    useInventory_GetAllInventoryProductByStoreIdSubscriptionSubscription({
      variables: {store_id: parseInt(selectedStoreId || '0', 10)},
    });
  // console.log(
  //   '🚀 ~ file: index.tsx ~ line 86 ~ CashierHome ~ getAllInventoryProduct.error',
  //   getAllInventoryProduct.error,
  // );

  // console.log(
  //   '🚀 ~ file: index.tsx ~ line 94 ~ CashierHome ~ getAllInventoryProduct.data?.inventory_products',
  //   getAllInventoryProduct.data?.inventory_products,
  // );

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

  const kategoriProdukTab = useMemo(() => {
    const data = getAllInventoryProduct.data?.inventory_products || [];
    const uniq: {
      __typename?: 'product_categories' | undefined;
      id: number;
      name: string;
    }[] = getUniqArrayObject(
      data.map(x => x.product.product_category),
      'id',
    );

    const sorted = sort(uniq).asc('name');

    const tabs: {value: number | null; label: string}[] = [
      {value: null, label: 'Semua Kategori'},
      ...sorted.map(x => ({value: x.id, label: x.name})),
    ];
    return tabs;
  }, [getAllInventoryProduct.data?.inventory_products]);

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

    if (myUser.roles.includes(UserRolesEnum.administrator) && selectedStoreId) {
      setValue('show_modal_change_toko', false);
    }
    const timeout = setTimeout(() => {
      if (
        myUser.roles.includes(UserRolesEnum.administrator) &&
        !selectedStoreId &&
        !myAppState.isLoadingSplashScreen
      ) {
        setValue('show_modal_change_toko', true);
      }
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [myUser.roles, selectedStoreId, myAppState.isLoadingSplashScreen]);

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

  useEffect(() => {
    myAppState.setLoadingWholePage(
      getAllStore.loading || getAllInventoryProduct.loading,
    );
    return () => {
      myAppState.setLoadingWholePage(false);
    };
  }, [getAllStore.loading, getAllInventoryProduct.loading]);
  //pb={{base: 300, lg: undefined}}

  const render = () => (
    <>
      <Box pb={150}>
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

        {isFalseWhenLg && (
          <VStack>
            {route.params?.invoiceNumberRefundPart && (
              <HStack alignItems="center" justifyContent="space-between">
                <Heading fontSize="xl" mb="2">
                  Retur Invoice {route.params.invoiceNumberRefundPart}
                </Heading>

                <ButtonCancelDelete
                  customText="Cancel Retur"
                  variant={'solid'}
                  onPress={() => {
                    toast.show(
                      TOAST_TEMPLATE.cancelled('Refund transaksi tidak jadi.'),
                    );
                    clearReturn(
                      navigation,
                      myCart,
                      route.params?.invoiceNumberRefundPart,
                    );
                  }}
                />
              </HStack>
            )}

            <HStack space="4" alignItems="center">
              <Heading fontSize="xl">Toko {selectedStoreName}</Heading>
              {roles.includes(UserRolesEnum.administrator) && (
                <Button
                  onPress={() => setValue('show_modal_change_toko', true)}
                  size="sm"
                  leftIcon={<Icon as={FeatherIcon} name="home" size="xs" />}>
                  Ganti Toko
                </Button>
              )}
            </HStack>
          </VStack>
        )}

        <Stack
          direction={{base: 'column-reverse', lg: 'row'}}
          space={{base: '8', lg: '4'}}
          h={heightOnLg}
          p="0">
          <ProductsContent
            route={route}
            searchTerm={searchTerm}
            activeCategory={activeCategory}
            control={control}
            errors={errors}
            selectedStoreName={selectedStoreName}
            kategoriProdukTab={kategoriProdukTab}
            setValue={setValue}
            filteredByCategoryProductData={
              inventoryProductData.filteredByCategory
            }
            searchedInventoryProductData={searchedInventoryProductData}
          />
          <Cart />
        </Stack>
      </Box>
    </>
  );

  if (isFalseWhenLg)
    return <ScrollView scrollEnabled={isFalseWhenLg}>{render()}</ScrollView>;

  return render();
};

export const clearReturn = (
  navigation: UpdateTransactionNavProps['navigation'],
  myCart: ICart,
  transaction_invoice_number: string = '',
) => {
  myCart.clearCart();
  navigation.dispatch(
    CommonActions.reset({
      routes: [
        {
          name: 'CashierHome',
          params: {invoiceNumberRefundPart: null},
        },
      ],
    }),
  );
  if (transaction_invoice_number !== '')
    navigation.navigate('UpdateTransaction', {
      transaction_invoice_number,
    });
  else navigation.navigate('ListTransaction');
};

export default withAppLayout(CashierHome);
