import React, {useEffect, useState} from 'react';
import {Box, HStack, VStack, Heading, ScrollView, useToast} from 'native-base';
import withAppLayout from '../Layout/AppLayout';
import {
  namedOperations,
  useStore_GetStoreByPkQuery,
  useStore_UpdateStoreMutation,
} from '../../graphql/gql-generated';
import * as yup from 'yup';
import {getXHasuraContextHeader} from '../../shared/utils';
import {TOAST_TEMPLATE} from '../../shared/constants';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {DismissKeyboardWrapper, RHTextInput} from '../../shared/components';
import {ButtonSave, ButtonBack} from '../Buttons';
import {UpdateTokoNavProps} from '../../screens/app/SettingsScreen';
import {useMyAppState} from '../../state';

interface IDefaultValues {
  name: string;
  address: string;
  latitude: string;
  longitude: string;
}

const schema = yup
  .object({
    name: yup.string().required('Nama toko harus diisi'),
    address: yup.string().optional(),
    latitude: yup.string().optional(),
    longitude: yup.string().optional(),
  })
  .required();

const defaultValues: IDefaultValues = {
  name: '',
  address: '',
  latitude: '',
  longitude: '',
};

interface IUpdateTokoProps extends UpdateTokoNavProps {}

const UpdateToko = ({route, navigation}: IUpdateTokoProps) => {
  const toast = useToast();
  const myAppState = useMyAppState();
  const [isErrorOnce, setErrorOnce] = useState(false);

  const {
    handleSubmit,
    control,
    setValue,
    formState: {errors, isSubmitSuccessful, isDirty},
    reset,
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const getDataToko = useStore_GetStoreByPkQuery({
    variables: {id: route.params.storeId},
  });
  useEffect(() => {
    myAppState.setLoadingWholePage(getDataToko.loading);
  }, [getDataToko.loading, myAppState]);

  useEffect(() => {
    if (!isSubmitSuccessful) {
      myAppState.setLoadingWholePage(getDataToko.loading);
    } else {
      myAppState.setLoadingWholePage(false);
    }
  }, [getDataToko.loading, isSubmitSuccessful, myAppState]);

  useEffect(() => {
    if (getDataToko.data?.rocketjaket_store_by_pk === null && !isErrorOnce) {
      toast.show({
        ...TOAST_TEMPLATE.error('Kategori Produk tidak ditemukan.'),
      });
      navigation.goBack();
      setErrorOnce(true);
    } else {
      if (getDataToko.data?.rocketjaket_store_by_pk) {
        setValue('name', getDataToko.data?.rocketjaket_store_by_pk.name);
        setValue(
          'address',
          getDataToko.data?.rocketjaket_store_by_pk.address || '',
          {shouldDirty: false, shouldValidate: false},
        );
        setValue(
          'latitude',
          getDataToko.data?.rocketjaket_store_by_pk.latitude || '',
          {shouldDirty: false, shouldValidate: false},
        );
        setValue(
          'longitude',
          getDataToko.data?.rocketjaket_store_by_pk.longitude || '',
          {shouldDirty: false, shouldValidate: false},
        );
      }
    }
  }, [getDataToko, isErrorOnce, navigation, setValue, toast]);

  const [updateStoreMutation, _updateStoreMutationResult] =
    useStore_UpdateStoreMutation({
      ...getXHasuraContextHeader({role: 'administrator'}),
      refetchQueries: [namedOperations.Query.Store_GetAllStore],
    });

  const handleSubmission = async (data: IDefaultValues) => {
    if (!isDirty) {
      toast.show({
        ...TOAST_TEMPLATE.cancelled('Kategori produk tidak ada yang diubah.'),
      });
      navigation.goBack();
      reset();
      return;
    }
    const res = await updateStoreMutation({
      variables: {
        id: route.params.storeId,
        name: data.name,
        address: data.address,
        latitude: data.latitude,
        longitude: data.longitude,
      },
    });
    if (res.errors) {
      toast.show({
        ...TOAST_TEMPLATE.error(
          `Gagal melakukan update toko ${res.data?.update_rocketjaket_store_by_pk?.name}.`,
        ),
      });
    } else {
      reset();
      toast.show({
        ...TOAST_TEMPLATE.success(
          `Berhasil update toko ${res.data?.update_rocketjaket_store_by_pk?.name}.`,
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
            Edit Toko
          </Heading>

          <Box bgColor="white" p="8">
            <VStack space="4">
              <RHTextInput
                name="name"
                control={control}
                errors={errors}
                label="Nama Toko"
              />
              <RHTextInput
                name="address"
                control={control}
                errors={errors}
                label="Alamat"
              />
              <RHTextInput
                name="latitude"
                control={control}
                errors={errors}
                label="Koordinat Latitude Maps"
              />
              <RHTextInput
                name="longitude"
                control={control}
                errors={errors}
                label="Koordinat Longitude Maps"
              />
              <HStack justifyContent="flex-end" mt="8" space="4">
                <ButtonSave
                  isLoading={_updateStoreMutationResult.loading}
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

export default withAppLayout(UpdateToko);
