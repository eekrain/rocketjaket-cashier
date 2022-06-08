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
import {SettingsScreenProps} from '../../screens/app/SettingsScreen';
import {useMyAppState} from '../../state';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  IMapViewWithMarkerProps,
  MapViewWithMarker,
} from '../MapViews/MapViewWithMarker';
import {MapViewProps} from '@react-native-mapbox-gl/maps';

interface IDefaultValues {
  name: string;
  address: string;
  latitude: number | null;
  longitude: number | null;
}

const schema = yup
  .object({
    name: yup.string().required('Nama toko harus diisi'),
    address: yup.string().optional(),
    latitude: yup.number().nullable(),
    longitude: yup.number().nullable(),
  })
  .required();

const defaultValues: IDefaultValues = {
  name: '',
  address: '',
  latitude: null,
  longitude: null,
};

interface IUpdateTokoProps {}

const UpdateToko = ({}: IUpdateTokoProps) => {
  const toast = useToast();
  const myAppState = useMyAppState();
  const [isErrorOnce, setErrorOnce] = useState(false);
  const navigation =
    useNavigation<SettingsScreenProps['UpdateToko']['navigation']>();
  const route = useRoute<SettingsScreenProps['UpdateToko']['route']>();

  const {
    handleSubmit,
    control,
    setValue,
    formState: {errors, isSubmitSuccessful, isDirty},
    reset,
    watch,
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  console.log(
    '🚀 ~ file: UpdateToko.tsx ~ line 69 ~ UpdateToko ~ isDirty',
    isDirty,
  );

  const watchCoords = {
    latitude: watch().latitude,
    longitude: watch().longitude,
  };
  // console.log(
  //   '🚀 ~ file: UpdateToko.tsx ~ line 74 ~ UpdateToko ~ watchCoords',
  //   watchCoords,
  // );

  const getDataToko = useStore_GetStoreByPkQuery({
    variables: {id: route.params?.storeId || 0},
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

  const [isDataReady, setDataReady] = useState(false);
  useEffect(() => {
    const dataToko = getDataToko.data?.stores_by_pk;
    if (dataToko === null && !isErrorOnce) {
      toast.show(TOAST_TEMPLATE.error('Kategori Produk tidak ditemukan.'));
      navigation.goBack();
      setErrorOnce(true);
    } else if (dataToko && !isDataReady) {
      setDataReady(true);
      setValue('name', dataToko.name);
      setValue('address', dataToko.address || '', {
        shouldDirty: false,
      });
      setValue('latitude', dataToko.latitude, {
        shouldDirty: false,
      });
      setValue('longitude', dataToko.longitude, {
        shouldDirty: false,
      });
    }
  }, [
    getDataToko.data?.stores_by_pk,
    isErrorOnce,
    navigation,
    setValue,
    toast,
  ]);

  const [updateStoreMutation, _updateStoreMutationResult] =
    useStore_UpdateStoreMutation({
      ...getXHasuraContextHeader({role: 'administrator'}),
      refetchQueries: [namedOperations.Query.Store_GetAllStore],
    });

  const handleSubmission = async (data: IDefaultValues) => {
    console.log(
      '🚀 ~ file: UpdateToko.tsx ~ line 108 ~ handleSubmission ~ data',
      data,
    );
    if (!isDirty || !route.params?.storeId) {
      if (!isDirty)
        toast.show(
          TOAST_TEMPLATE.cancelled('Kategori produk tidak ada yang diubah.'),
        );
      else toast.show(TOAST_TEMPLATE.cancelled('Store id tidak valid.'));
      navigation.goBack();
      reset(defaultValues);
      return;
    }
    const res = await updateStoreMutation({
      variables: {
        store_id: route.params?.storeId,
        store: {
          name: data.name,
          address: data.address,
          latitude: data.latitude,
          longitude: data.longitude,
        },
      },
    });
    if (res.errors) {
      toast.show(
        TOAST_TEMPLATE.error(
          `Gagal melakukan update toko ${res.data?.update_stores_by_pk?.name}.`,
        ),
      );
    } else {
      reset(defaultValues);
      toast.show(
        TOAST_TEMPLATE.success(
          `Berhasil update toko ${res.data?.update_stores_by_pk?.name}.`,
        ),
      );
      navigation.goBack();
    }
  };

  const onUpdateLocation: IMapViewWithMarkerProps['onUpdateLocation'] = (
    latitude,
    longitude,
  ) => {
    setValue('longitude', longitude, {shouldDirty: true});
    setValue('latitude', latitude, {shouldDirty: true});
  };

  const onPressMapWithUpdateLocation: MapViewProps['onPress'] = e => {
    console.log('🚀 ~ file: CreateToko.tsx ~ line 114 ~ CreateToko ~ e', e);
  };

  return (
    <ScrollView>
      <DismissKeyboardWrapper>
        <Box pb="20">
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
              <MapViewWithMarker
                currentLocation={{
                  latitude: watchCoords.latitude,
                  longitude: watchCoords.longitude,
                }}
                onUpdateLocation={onUpdateLocation}
                // mapRef={mapRef}
                onPressMapWithUpdateLocation={onPressMapWithUpdateLocation}
                isLazyFetch={true}
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
