import React from 'react';
import {Box, HStack, VStack, Heading, ScrollView, useToast} from 'native-base';
import withAppLayout from '../Layout/AppLayout';
import {
  namedOperations,
  useProduk_CreateKategoriProdukMutation,
} from '../../graphql/gql-generated';
import * as yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import {getXHasuraContextHeader} from '../../shared/utils';
import {TOAST_TEMPLATE} from '../../shared/constants';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {DismissKeyboardWrapper, RHTextInput} from '../../shared/components';
import ButtonSave from '../Buttons/ButtonSave';

interface IDefaultValues {
  name: string;
  description: string;
}

const schema = yup
  .object({
    name: yup.string().required('Nama kategori harus diisi'),
    description: yup.string().optional(),
  })
  .required();

const defaultValues: IDefaultValues = {name: '', description: ''};

interface Props {}

const CreateKategoriProduk = ({}: Props) => {
  const toast = useToast();
  const navigation = useNavigation();

  const {
    handleSubmit,
    control,
    formState: {errors},
    reset,
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const [createKategoriMutation, _createKategoriMutationResult] =
    useProduk_CreateKategoriProdukMutation({
      ...getXHasuraContextHeader({role: 'administrator'}),
      refetchQueries: [namedOperations.Query.Produk_GetAllKategoriProduk],
    });

  const handleSubmission = async (data: IDefaultValues) => {
    const res = await createKategoriMutation({
      variables: {name: data.name, description: data.description},
    });
    if (res.errors) {
      toast.show({
        ...TOAST_TEMPLATE.error('Gagal melakukan penambahan kategori.'),
      });
    } else {
      reset();
      toast.show({
        ...TOAST_TEMPLATE.success(
          `Berhasil menambahkan kategori ${res.data?.insert_rocketjaket_product_category_one?.name}.`,
        ),
      });
      navigation.goBack();
    }
  };

  return (
    <ScrollView>
      <DismissKeyboardWrapper>
        <Box>
          <Heading fontSize="xl" mb="10">
            Buat Kategori Produk Baru
          </Heading>

          <Box bgColor="white" p="8">
            <VStack space="4">
              <RHTextInput
                name="name"
                control={control}
                errors={errors}
                label="Nama Kategori"
              />
              <RHTextInput
                name="description"
                control={control}
                errors={errors}
                label="Deskripsi"
              />
              <HStack justifyContent="flex-end" mt="5">
                <ButtonSave
                  isLoading={_createKategoriMutationResult.loading}
                  onPress={handleSubmit(handleSubmission)}
                />
              </HStack>
            </VStack>
          </Box>
        </Box>
      </DismissKeyboardWrapper>
    </ScrollView>
  );
};

export default withAppLayout(CreateKategoriProduk);
