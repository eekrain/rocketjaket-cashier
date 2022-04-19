import React, {useEffect, useState} from 'react';
import {
  Box,
  HStack,
  VStack,
  Heading,
  ScrollView,
  useToast,
  Text,
} from 'native-base';
import {
  useInventory_GetVariantMetadataByTitleQuery,
  useInventory_BulkUpdateVariantsMetadataMutation,
  namedOperations,
} from '../../graphql/gql-generated';
import * as yup from 'yup';
import {getXHasuraContextHeader} from '../../shared/utils';
import {TOAST_TEMPLATE} from '../../shared/constants';
import {useFieldArray, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {DismissKeyboardWrapper, RHTextInput} from '../../shared/components';
import {
  ButtonSave,
  ButtonAdd,
  ButtonDelete,
  ButtonCancelDelete,
  ButtonBack,
} from '../Buttons';
import withAppLayout from '../Layout/AppLayout';
import {UpdateProductVariantsNavProps} from '../../screens/app/InventoryScreen';
import {useMyAppState} from '../../state';

interface VariationValue {
  value: string;
  inventory_variant_metadata_id?: number;
  is_removed?: boolean;
}

interface IDefaultValues {
  variation_title: string;
  variation_values: VariationValue[];
}

const schema = yup
  .object({
    variation_title: yup.string().required('Nama toko harus diisi'),
  })
  .required();

const defaultValues: IDefaultValues = {
  variation_title: '',
  variation_values: [{value: ''}],
};

interface ICreateProductVariantsProps extends UpdateProductVariantsNavProps {}

const CreateProductVariants = ({
  navigation,
  route,
}: ICreateProductVariantsProps) => {
  const toast = useToast();
  const myAppState = useMyAppState();
  const [isDataReady, setDataReady] = useState(false);

  const {
    watch,
    handleSubmit,
    control,
    setValue,
    formState: {errors, isSubmitSuccessful, dirtyFields},
    reset,
  } = useForm<IDefaultValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const formVariationValues = watch('variation_values');

  // useEffect(() => {
  //   reset();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const {fields, append, remove} = useFieldArray({
    name: 'variation_values',
    control,
  });

  const getVariantMetadata = useInventory_GetVariantMetadataByTitleQuery({
    variables: {
      variant_title: route.params.variant_title,
    },
    fetchPolicy: 'network-only',
  });
  useEffect(() => {
    if (!isSubmitSuccessful) {
      myAppState.setLoadingWholePage(getVariantMetadata.loading);
    } else {
      myAppState.setLoadingWholePage(false);
    }
  }, [getVariantMetadata.loading, isSubmitSuccessful, myAppState]);
  useEffect(() => {
    const variantMetadata =
      getVariantMetadata.data?.rocketjaket_inventory_variant_metadata;
    if (variantMetadata && variantMetadata.length <= 0 && !isDataReady) {
      toast.show({
        ...TOAST_TEMPLATE.error('Kategori Produk tidak ditemukan.'),
      });
      navigation.goBack();
      setDataReady(true);
    } else if (variantMetadata && variantMetadata.length > 0 && !isDataReady) {
      if (variantMetadata) {
        setValue('variation_title', route.params.variant_title);
        setValue(
          'variation_values',
          variantMetadata.map(variant => {
            return {
              value: variant.variant_value,
              is_removed: false,
              inventory_variant_metadata_id: variant.id,
            };
          }),
        );
        setDataReady(true);
      }
    }
  }, [
    getVariantMetadata.data?.rocketjaket_inventory_variant_metadata,
    isDataReady,
    navigation,
    route.params.variant_title,
    setValue,
    toast,
  ]);

  const [
    bulkUpdateVariantMetadataMutation,
    _bulkUpdateVariantMetadataMutationResult,
  ] = useInventory_BulkUpdateVariantsMetadataMutation({
    ...getXHasuraContextHeader({role: 'administrator'}),
    refetchQueries: [namedOperations.Query.Inventory_GetAllVariantMetadata],
  });

  const handleSubmission = async (data: IDefaultValues) => {
    const needDelete: number[] = data.variation_values
      .filter(
        variation =>
          variation?.inventory_variant_metadata_id &&
          variation?.is_removed === true,
      )
      .map(
        variation => variation.inventory_variant_metadata_id,
      ) as unknown as number[];

    const needAdd = data.variation_values
      .filter(variation => !variation?.inventory_variant_metadata_id)
      .map(variation => ({
        variant_title: data.variation_title,
        variant_value: variation.value,
      }));

    const needUpdate = data.variation_values
      .filter(
        (variation, index) =>
          dirtyFields?.variation_values?.[index]?.value === true &&
          typeof variation.inventory_variant_metadata_id === 'number',
      )
      .map(variation => ({
        id: variation.inventory_variant_metadata_id,
        variant_value: variation.value,
      })) as {
      id: number;
      variant_value: string;
    }[];

    try {
      const res = await bulkUpdateVariantMetadataMutation({
        variables: {
          needDeleteIds: needDelete,
          old_variant_title: route.params.variant_title,
          new_variant_title: data.variation_title,
          needAddVariantMetadata: needAdd,
          needUpdateVariantMetadata: needUpdate,
        },
      });
      if (res.data?.bulkUpdateVariantsMetadata?.is_any_update === true) {
        reset();
        toast.show({
          ...TOAST_TEMPLATE.success(
            `Berhasil update variasi produk dengan judul ${res.data?.bulkUpdateVariantsMetadata?.variant_title}.`,
          ),
        });
        navigation.goBack();
      } else if (
        res.data?.bulkUpdateVariantsMetadata?.is_any_update === false
      ) {
        reset();
        toast.show({
          ...TOAST_TEMPLATE.cancelled(
            'Isi variasi produk tidak ada yang diubah.',
          ),
        });
        navigation.goBack();
      } else {
        toast.show({
          ...TOAST_TEMPLATE.error(
            `Gagal melakukan update variasi produk dengan judul ${res.data?.bulkUpdateVariantsMetadata?.variant_title}.`,
          ),
        });
      }
    } catch (error) {
      console.log(
        '🚀 ~ file: UpdateProductVariants.tsx ~ line 179 ~ handleSubmission ~ error',
        error,
      );
    }
  };

  return (
    <ScrollView>
      <DismissKeyboardWrapper>
        <Box pb="200">
          <Heading fontSize="xl" mb="10">
            Buat Variasi Produk Baru
          </Heading>

          <Box bgColor="white" p="8">
            <VStack space="4">
              <RHTextInput
                name="variation_title"
                control={control}
                errors={errors}
                label="Nama Variasi"
              />
              <Text fontWeight="semibold" mb="4">
                List Opsi Variasi :
              </Text>
              <VStack w="full">
                {fields.map((field, index) => {
                  return (
                    <HStack key={field.id} alignItems="flex-end" space="5">
                      <Box w="4/5">
                        <RHTextInput
                          name={`variation_values.${index}.value`}
                          control={control}
                          errors={errors}
                          label={`Opsi Variasi ${index + 1}`}
                        />
                      </Box>
                      <Box>
                        {formVariationValues[index]
                          ?.inventory_variant_metadata_id ? (
                          formVariationValues[index]?.is_removed ? (
                            <ButtonCancelDelete
                              customText="Cancel Hapus Opsi"
                              onPress={() =>
                                setValue(
                                  `variation_values.${index}.is_removed`,
                                  false,
                                )
                              }
                            />
                          ) : (
                            <ButtonDelete
                              customText="Hapus Opsi"
                              onPress={() =>
                                setValue(
                                  `variation_values.${index}.is_removed`,
                                  true,
                                )
                              }
                            />
                          )
                        ) : (
                          <ButtonDelete
                            customText="Hapus Opsi"
                            onPress={() => remove(index)}
                          />
                        )}
                      </Box>
                    </HStack>
                  );
                })}
              </VStack>
              <HStack mt="4">
                <ButtonAdd
                  customText="Tambah Opsi Variasi"
                  onPress={() => append({value: ''})}
                />
              </HStack>
              <HStack justifyContent="flex-end" mt="5" space="4">
                <ButtonSave
                  isLoading={_bulkUpdateVariantMetadataMutationResult.loading}
                  onPress={handleSubmit(handleSubmission)}
                />
                <ButtonBack onPress={() => navigation.goBack()} />
              </HStack>
            </VStack>
          </Box>
        </Box>
      </DismissKeyboardWrapper>
    </ScrollView>
  );
};

export default withAppLayout(CreateProductVariants);
