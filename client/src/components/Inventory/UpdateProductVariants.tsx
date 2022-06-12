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
  useInventory_UpdateInventoryVariantsMetadataMutation,
  namedOperations,
} from '../../graphql/gql-generated';
import * as yup from 'yup';
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
import to from 'await-to-js';

interface VariationValue {
  value: string;
  inventory_variant_metadata_id?: number;
  is_removed?: boolean;
}

interface IDefaultValues {
  variant_title: string;
  variant_values: VariationValue[];
}

const schema = yup
  .object({
    variant_title: yup.string().required('Nama toko harus diisi'),
  })
  .required();

const defaultValues: IDefaultValues = {
  variant_title: '',
  variant_values: [{value: ''}],
};

interface NewVariants {
  id?: number;
  variant_title: string;
  variant_value: string;
}

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
  // console.log(watch());
  const formVariationValues = watch('variant_values');

  const {fields, append, remove} = useFieldArray({
    name: 'variant_values',
    control,
  });

  const getVariantMetadata = useInventory_GetVariantMetadataByTitleQuery({
    variables: {
      variant_title: route.params.variant_title,
    },
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    myAppState.setLoadingWholePage(getVariantMetadata.loading);

    return () => {
      myAppState.setLoadingWholePage(false);
    };
  }, [getVariantMetadata.loading]);

  useEffect(() => {
    const variantMetadata =
      getVariantMetadata.data?.inventory_variants_metadata;
    if (variantMetadata && variantMetadata.length <= 0 && !isDataReady) {
      toast.show(TOAST_TEMPLATE.error('Kategori Produk tidak ditemukan.'));
      navigation.goBack();
      setDataReady(true);
    } else if (variantMetadata && variantMetadata.length > 0 && !isDataReady) {
      if (variantMetadata) {
        reset({
          variant_title: route.params.variant_title,
          variant_values: variantMetadata.map(variant => ({
            value: variant.variant_value,
            is_removed: false,
            inventory_variant_metadata_id: variant.id,
          })),
        });
        setDataReady(true);
      }
    }
  }, [
    getVariantMetadata.data?.inventory_variants_metadata,
    isDataReady,
    navigation,
    route.params.variant_title,
    setValue,
    toast,
  ]);

  const [
    updateVariantsMetadataMutation,
    _updateVariantsMetadataMutationResult,
  ] = useInventory_UpdateInventoryVariantsMetadataMutation({
    refetchQueries: [namedOperations.Query.Inventory_GetAllVariantMetadata],
  });

  const handleSubmission = async (data: IDefaultValues) => {
    const needDeleteIds: number[] = data.variant_values
      .filter(
        variant =>
          variant?.inventory_variant_metadata_id &&
          variant?.is_removed === true,
      )
      .map(
        variant => variant.inventory_variant_metadata_id,
      ) as unknown as number[];
    console.log(
      '🚀 ~ file: UpdateProductVariants.tsx ~ line 155 ~ handleSubmission ~ needDeleteIds',
      needDeleteIds,
    );

    const needUpsert: NewVariants[] = data.variant_values
      .filter(
        (variant, index) =>
          dirtyFields?.variant_values?.[index]?.value === true &&
          variant.value !== '' &&
          !variant?.is_removed,
      )
      .map(variant => ({
        id: variant.inventory_variant_metadata_id,
        variant_title: data.variant_title,
        variant_value: variant.value,
      }));

    const [err, res] = await to(
      updateVariantsMetadataMutation({
        variables: {deleteIds: needDeleteIds, upsert: needUpsert},
      }),
    );
    if (err || !res) {
      console.log(
        '🚀 ~ file: UpdateProductVariants.tsx ~ line 180 ~ handleSubmission ~ err',
        err,
      );
      toast.show(
        TOAST_TEMPLATE.error(
          `Gagal melakukan update variasi produk dengan judul ${data.variant_title}.`,
        ),
      );
    } else {
      console.log(
        '🚀 ~ file: UpdateProductVariants.tsx ~ line 179 ~ handleSubmission ~ res',
        res,
      );
      reset(defaultValues);
      toast.show(
        TOAST_TEMPLATE.success(
          `Berhasil update variasi produk dengan judul ${data.variant_title}.`,
        ),
      );
      navigation.goBack();
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
                name="variant_title"
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
                          name={`variant_values.${index}.value`}
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
                                  `variant_values.${index}.is_removed`,
                                  false,
                                )
                              }
                            />
                          ) : (
                            <ButtonDelete
                              customText="Hapus Opsi"
                              onPress={() =>
                                setValue(
                                  `variant_values.${index}.is_removed`,
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
                  isLoading={_updateVariantsMetadataMutationResult.loading}
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
