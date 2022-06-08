import React, {useMemo, useState} from 'react';
import {Box, HStack, VStack, Heading, ScrollView, useToast} from 'native-base';
import withAppLayout from '../Layout/AppLayout';
import {
  namedOperations,
  useProduk_GetKategoriProdukByPkQuery,
  useProduk_UpdateKategoriProdukMutation,
} from '../../graphql/gql-generated';
import * as yup from 'yup';
import {TOAST_TEMPLATE} from '../../shared/constants';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {DismissKeyboardWrapper, RHTextInput} from '../../shared/components';
import {ButtonSave, ButtonBack} from '../Buttons';
import {useEffect} from 'react';
import {useMyAppState} from '../../state';
import {useNavigation, useRoute} from '@react-navigation/native';
import {UpdateKategoriProdukNavProps} from '../../screens/app/ProdukScreen';
import to from 'await-to-js';

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

const UpdateKategoriProduk = ({}: Props) => {
  const navigation =
    useNavigation<UpdateKategoriProdukNavProps['navigation']>();
  const route = useRoute<UpdateKategoriProdukNavProps['route']>();
  const toast = useToast();
  const myAppState = useMyAppState();
  const [isErrorOnce, setErrorOnce] = useState(false);
  const {
    handleSubmit,
    control,
    formState: {errors, isDirty, isSubmitSuccessful},
    reset,
    setValue,
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const getDataKategori = useProduk_GetKategoriProdukByPkQuery({
    variables: {id: route.params.categoryId},
  });

  useEffect(() => {
    if (!isSubmitSuccessful) {
      myAppState.setLoadingWholePage(getDataKategori.loading);
    } else {
      myAppState.setLoadingWholePage(false);
    }
  }, [getDataKategori.loading, isSubmitSuccessful, myAppState]);

  useEffect(() => {
    const dataKategori = getDataKategori.data?.product_categories_by_pk;
    if (dataKategori === null && !isErrorOnce) {
      toast.show(TOAST_TEMPLATE.error('Kategori Produk tidak ditemukan.'));
      navigation.goBack();
      setErrorOnce(true);
    } else {
      if (dataKategori) {
        reset({
          name: dataKategori.name,
          description: dataKategori.description,
        });
      }
    }
  }, [
    getDataKategori.data?.product_categories_by_pk,
    isErrorOnce,
    navigation,
    setValue,
    toast,
  ]);

  const [updateKategoriMutation, _updateKategoriMutationResult] =
    useProduk_UpdateKategoriProdukMutation({
      refetchQueries: [namedOperations.Query.Produk_GetAllKategoriProduk],
    });

  const handleSubmission = async (data: IDefaultValues) => {
    if (!isDirty) {
      toast.show(
        TOAST_TEMPLATE.cancelled('Kategori produk tidak ada yang diubah.'),
      );
      navigation.goBack();
      return;
    }
    const [err, res] = await to(
      updateKategoriMutation({
        variables: {
          id: route.params.categoryId,
          category: {
            name: data.name,
            description: data.description,
          },
        },
      }),
    );
    if (err || !res) {
      toast.show(TOAST_TEMPLATE.error('Gagal melakukan update kategori.'));
    } else {
      reset();
      toast.show(
        TOAST_TEMPLATE.success(
          `Berhasil merubah kategori ${res.data?.update_product_categories_by_pk?.name}.`,
        ),
      );
      navigation.goBack();
    }
  };

  return (
    <ScrollView>
      <DismissKeyboardWrapper>
        <Box>
          <Heading fontSize="xl" mb="10">
            Update Kategori Produk
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
              <HStack justifyContent="flex-end" mt="8" space="4">
                <ButtonSave
                  isLoading={_updateKategoriMutationResult.loading}
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

export default withAppLayout(UpdateKategoriProduk);
