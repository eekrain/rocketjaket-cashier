import React from 'react';
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
  namedOperations,
  useInventory_CreateInventoryVariantMetadataMutation,
} from '../../graphql/gql-generated';
import * as yup from 'yup';
import {getXHasuraContextHeader} from '../../shared/utils';
import {TOAST_TEMPLATE} from '../../shared/constants';
import {useFieldArray, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {DismissKeyboardWrapper, RHTextInput} from '../../shared/components';
import {ButtonSave, ButtonAdd, ButtonDelete, ButtonBack} from '../Buttons';
import withAppLayout from '../Layout/AppLayout';
import {InventoryScreenProps} from '../../screens/app/InventoryScreen';

interface VariationValue {
  value: string;
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

type X = InventoryScreenProps['CreateProductVariants'];

interface ICreateProductVariantsProps extends X {}

const CreateProductVariants = ({navigation}: ICreateProductVariantsProps) => {
  const toast = useToast();

  const {
    handleSubmit,
    control,
    formState: {errors},
    reset,
  } = useForm<IDefaultValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const {fields, append, remove} = useFieldArray({
    name: 'variation_values',
    control,
  });

  const [createVariantMetadataMutation, _createVariantMetadataMutationResult] =
    useInventory_CreateInventoryVariantMetadataMutation({
      ...getXHasuraContextHeader({role: 'administrator'}),
      refetchQueries: [namedOperations.Query.Inventory_GetAllVariantMetadata],
    });

  const handleSubmission = async (data: IDefaultValues) => {
    const variation_values = data.variation_values.filter(
      value => value?.value || value.value !== '',
    );
    const res = await createVariantMetadataMutation({
      variables: {
        objects: variation_values.map(val => ({
          variant_title: data.variation_title,
          variant_value: val.value,
        })),
      },
    });
    if (res.errors) {
      toast.show(
        TOAST_TEMPLATE.error(
          `Gagal melakukan penambahan variasi produk dengan nama ${data.variation_title}.`,
        ),
      );
    } else {
      reset();
      toast.show(
        TOAST_TEMPLATE.success(
          `Berhasil menambahkan variasi produk dengan nama ${data.variation_title}.`,
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
                        <ButtonDelete
                          customText="Hapus Opsi"
                          onPress={() => remove(index)}
                        />
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

              <HStack justifyContent="flex-end" mt="8" space="4">
                <ButtonSave
                  isLoading={_createVariantMetadataMutationResult.loading}
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
