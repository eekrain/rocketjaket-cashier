import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  Box,
  HStack,
  VStack,
  Heading,
  useToast,
  Text,
  FormControl,
  Input,
  Button,
} from 'native-base';
import {
  namedOperations,
  useInventory_UpdateInventoryProductMutation,
  useInventory_GetInventoryProductByIdQuery,
  useProduk_GetProdukByPkQuery,
} from '../../graphql/gql-generated';
import * as yup from 'yup';
import {getXHasuraContextHeader, myNumberFormat} from '../../shared/utils';
import {TOAST_TEMPLATE} from '../../shared/constants';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {DismissKeyboardWrapper, RHNumberInput} from '../../shared/components';
import {ButtonSave, ButtonBack} from '../Buttons';
import withAppLayout from '../Layout/AppLayout';
import {UpdateProductInventoryNavProps} from '../../screens/app/InventoryScreen';
import ProductSearch from './ProductSearch';
import ProductSelectVariation from './ProductSelectVariation';
import {useMyAppState} from '../../state';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {IProductInventoryDefaultValues} from './types';
import {useIsFocused} from '@react-navigation/native';
import to from 'await-to-js';

const schema = yup
  .object({
    product_id: yup
      .string()
      .nullable()
      .required('Belum ada produk yang dipilih.'),
    available_qty: yup.object({
      value: yup.number().min(0).required(),
    }),
    min_available_qty: yup.object({
      value: yup.number().min(0).required(),
    }),
    override_capital_price: yup.object({
      value: yup.number().nullable().min(0),
    }),
    override_selling_price: yup.object({
      value: yup.number().nullable().min(0),
    }),
    override_discount: yup.object({
      value: yup.number().nullable().min(0).max(100),
    }),
  })
  .required();

const defaultValues: IProductInventoryDefaultValues = {
  product_search_term: '',
  product_id: null,
  enabled_variations: [],
  variation_values: [],
  override_capital_price: {
    formattedValue: '',
    value: null,
  },
  override_selling_price: {
    formattedValue: '',
    value: null,
  },
  override_discount: {
    formattedValue: '',
    value: null,
  },
  available_qty: {
    formattedValue: '0',
    value: 0,
  },
  min_available_qty: {
    formattedValue: '1',
    value: 1,
  },
};

interface IUpdateProductInventoryProps extends UpdateProductInventoryNavProps {}

const UpdateProductInventory = ({
  navigation,
  route,
}: IUpdateProductInventoryProps) => {
  const focused = useIsFocused();
  const toast = useToast();
  const myAppState = useMyAppState();
  const [isDataReady, setDataReady] = useState(false);
  const [isErrorOnce, setErrorOnce] = useState(false);

  const {
    watch,
    handleSubmit,
    control,
    setValue,
    formState: {errors, isSubmitSuccessful},
    reset,
  } = useForm<IProductInventoryDefaultValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const selectedProductId = watch('product_id');
  const setSelectedProductId = useCallback(
    (newProductId: string | null) => {
      setValue('product_id', newProductId);
    },
    [setValue],
  );
  const variationValues = watch('variation_values');

  const getProductData = useProduk_GetProdukByPkQuery({
    variables: {
      id: selectedProductId,
    },
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    setDataReady(false);
    setErrorOnce(false);
  }, [focused]);

  const getInventoryProductData = useInventory_GetInventoryProductByIdQuery({
    variables: {id: route.params.inventoryProductId},
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    const inventoryProductData =
      getInventoryProductData.data?.inventory_products_by_pk;
    if (inventoryProductData === null && !isErrorOnce) {
      toast.show({
        ...TOAST_TEMPLATE.error('Kategori Produk tidak ditemukan.'),
      });
      navigation.goBack();
      setErrorOnce(true);
    } else if (inventoryProductData !== null && !isDataReady && !isErrorOnce) {
      if (inventoryProductData) {
        setSelectedProductId(inventoryProductData.product_id);
        reset({
          available_qty: {
            formattedValue: myNumberFormat.thousandSeparated(
              inventoryProductData.available_qty,
            ),
            value: inventoryProductData.available_qty,
          },
          min_available_qty: {
            formattedValue: myNumberFormat.thousandSeparated(
              inventoryProductData?.min_available_qty,
            ),
            value: inventoryProductData?.min_available_qty || 1,
          },
          override_capital_price: {
            formattedValue: myNumberFormat.thousandSeparated(
              inventoryProductData?.override_capital_price,
              'nullAsEmpty',
            ),
            value: inventoryProductData?.override_capital_price || null,
          },
          override_selling_price: {
            formattedValue: myNumberFormat.thousandSeparated(
              inventoryProductData?.override_selling_price,
              'nullAsEmpty',
            ),
            value: inventoryProductData?.override_selling_price || null,
          },
          override_discount: {
            formattedValue: myNumberFormat.thousandSeparated(
              inventoryProductData?.override_discount,
              'nullAsEmpty',
            ),
            value: inventoryProductData?.override_discount || null,
          },
          enabled_variations:
            inventoryProductData.inventory_product_variants.map(
              variant => variant.inventory_variants_metadata.variant_title,
            ),
          variation_values: variationValues.map(variation => {
            const found = inventoryProductData.inventory_product_variants.find(
              pdkVariation =>
                pdkVariation.inventory_variants_metadata.variant_title ===
                variation.variation_title,
            );
            return {
              variation_title: variation.variation_title,
              variant_metadata_id: found
                ? found.inventory_variants_metadata.id.toString()
                : undefined,
            };
          }),
        });
        setDataReady(true);
      }
    }
  }, [
    getInventoryProductData.data?.inventory_products_by_pk,
    isDataReady,
    isErrorOnce,
    navigation,
    setSelectedProductId,
    setValue,
    toast,
    variationValues,
    focused,
  ]);

  useEffect(() => {
    if (!isDataReady) {
      myAppState.setLoadingWholePage(getInventoryProductData.loading);
    } else {
      myAppState.setLoadingWholePage(false);
    }
  }, [getInventoryProductData.loading, isDataReady, myAppState, focused]);

  const selectedProductData = useMemo(() => {
    return getProductData?.data?.products_by_pk || null;
  }, [getProductData?.data?.products_by_pk]);

  const [
    updateInventoryProductMutation,
    _updateInventoryProductMutationResult,
  ] = useInventory_UpdateInventoryProductMutation({
    refetchQueries: [
      namedOperations.Query.Inventory_GetAllInventoryProductByStoreId,
    ],
  });

  const handleSubmission = async (data: IProductInventoryDefaultValues) => {
    console.log(
      '🚀 ~ file: UpdateProductInventory.tsx ~ line 257 ~ handleSubmission ~ data',
      data,
    );
    // const inventoryProductVariants = data.enabled_variations
    //   .filter(enabled_variations_title => {
    //     const found = data.variation_values.find(fnd =>
    //       fnd.variation_title === enabled_variations_title &&
    //       fnd?.variant_metadata_id
    //         ? true
    //         : false,
    //     );
    //     if (found) return true;
    //     else return false;
    //   })
    //   .map(enabled_variations_title => {
    //     const found = data.variation_values.find(
    //       fnd => fnd.variation_title === enabled_variations_title,
    //     );
    //     return {
    //       inventory_product_id: route.params.inventoryProductId,
    //       inventory_variant_metadata_id: parseInt(
    //         found!.variant_metadata_id!,
    //         10,
    //       ),
    //     };
    //   });
    // const [err, res] = await to(
    //   updateInventoryProductMutation({
    //     variables: {
    //       inventory_product_id: route.params.inventoryProductId,
    //       insert_rocketjaket_inventory_product_variant:
    //         inventoryProductVariants,
    //       update_rocketjaket_inventory_product_by_pk: {
    //         product_id: selectedProductId,
    //         override_capital_price: data.override_capital_price.value,
    //         override_selling_price: data.override_selling_price.value,
    //         override_discount: data.override_selling_price.value,
    //         available_qty: data.override_discount.value,
    //         min_available_qty: data.min_available_qty.value,
    //       },
    //     },
    //   }),
    // );

    // if (err || !res) {
    //   console.log(
    //     '🚀 ~ file: UpdateProductInventory.tsx ~ line 304 ~ handleSubmission ~ err',
    //     err,
    //   );
    //   toast.show({
    //     ...TOAST_TEMPLATE.error(
    //       `Gagal melakukan update variasi produk dengan nama ${selectedProductData?.product_category.name} / ${selectedProductData?.name}.`,
    //     ),
    //   });
    // } else {
    //   console.log(
    //     '🚀 ~ file: UpdateProductInventory.tsx ~ line 304 ~ handleSubmission ~ res',
    //     res,
    //   );
    //   toast.show({
    //     ...TOAST_TEMPLATE.success(
    //       `Berhasil update manajemen stok untuk produk ${selectedProductData?.product_category.name} / ${selectedProductData?.name}.`,
    //     ),
    //   });
    // }
  };

  const kontol = async (data: IProductInventoryDefaultValues) => {
    console.log(
      '🚀 ~ file: UpdateProductInventory.tsx ~ line 307 ~ kontol ~ data',
      data,
    );
  };

  return (
    <KeyboardAwareScrollView enableOnAndroid={true}>
      <DismissKeyboardWrapper>
        <Box pb="200">
          <Heading fontSize="xl" mb="10">
            Edit Inventory / Manajemen Stok Produk
          </Heading>

          <Box bgColor="white" p="8">
            <VStack space="4">
              <FormControl isDisabled={true}>
                <FormControl.Label>Toko</FormControl.Label>
                <Input
                  placeholder="Enter password"
                  value={route.params.storeName}
                />
              </FormControl>
              <ProductSearch
                control={control}
                errors={errors}
                setSelectedProductId={setSelectedProductId}
              />
              <ProductSelectVariation
                control={control}
                errors={errors}
                setValue={setValue}
              />
              <RHNumberInput
                keyboardType="number-pad"
                control={control}
                errors={errors}
                label="Jumlah Tersedia"
                name="available_qty"
                format="thousandSeparated"
              />
              <RHNumberInput
                keyboardType="number-pad"
                control={control}
                errors={errors}
                label="Jumlah Minimal Tersedia"
                name="min_available_qty"
                description="Akan melakukan notifikasi apabila produk kurang dari jumlah minimal tersedia"
                format="thousandSeparated"
              />
              <Box>
                <Text fontSize="lg" fontWeight="semibold" mb="2">
                  Ganti Data Harga Default
                </Text>
                <Text w="4/5">
                  (*Opsional) Anda bisa merubah data harga default / bawaan dari
                  menu Produk khusus untuk 1 varian ini saja. Apabila tidak
                  ingin merubah data harga bawaan maka kosongkan saja.
                </Text>
              </Box>
              <RHNumberInput
                keyboardType="number-pad"
                name="override_capital_price"
                control={control}
                errors={errors}
                label="Ganti Harga Modal Untuk Varian Ini"
                placeholder={`Harga modal default Rp ${myNumberFormat.thousandSeparated(
                  selectedProductData?.capital_price || 0,
                )}.`}
                format="rp"
                isDisableEmptyToZero={true}
              />
              <RHNumberInput
                keyboardType="number-pad"
                name="override_selling_price"
                control={control}
                errors={errors}
                label="Ganti Harga Jual Untuk Varian Ini"
                placeholder={`Harga jual default Rp ${myNumberFormat.thousandSeparated(
                  selectedProductData?.selling_price || 0,
                )}.`}
                format="rp"
                isDisableEmptyToZero={true}
              />
              <RHNumberInput
                keyboardType="number-pad"
                name="override_discount"
                control={control}
                errors={errors}
                label="Ganti Diskon Untuk Varian Ini"
                placeholder={`Diskon default Rp ${myNumberFormat.thousandSeparated(
                  selectedProductData?.discount || 0,
                )}.`}
                format="-rp"
                isDisableEmptyToZero={true}
              />
              <HStack justifyContent="flex-end" mt="5" space="4">
                <Button onPress={handleSubmit(kontol)}>Kontol</Button>
                <ButtonSave
                  isLoading={_updateInventoryProductMutationResult.loading}
                  onPress={handleSubmit(handleSubmission)}
                />
                <ButtonBack onPress={() => navigation.goBack()} />
              </HStack>
            </VStack>
          </Box>
        </Box>
      </DismissKeyboardWrapper>
    </KeyboardAwareScrollView>
  );
};

export default withAppLayout(UpdateProductInventory);
