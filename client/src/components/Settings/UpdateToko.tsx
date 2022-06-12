import React, {useEffect, useState} from 'react';
import {
  Box,
  HStack,
  VStack,
  Heading,
  ScrollView,
  useToast,
  Text,
  FormControl,
} from 'native-base';
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
import {
  ClockPicker,
  DismissKeyboardWrapper,
  RHCheckbox,
  RHTextInput,
} from '../../shared/components';
import {ButtonSave, ButtonBack} from '../Buttons';
import {SettingsScreenProps} from '../../screens/app/SettingsScreen';
import {useMyAppState} from '../../state';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  IMapViewWithMarkerProps,
  MapViewWithMarker,
} from '../MapViews/MapViewWithMarker';
import {MapViewProps} from '@react-native-mapbox-gl/maps';
import dayjs from 'dayjs';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';

interface IDefaultValues {
  name: string;
  address: string;
  latitude: number | null;
  longitude: number | null;
  working_hour_start: string;
  working_hour_end: string;
  is_record_attendance: 'active'[];
}

const schema = yup
  .object({
    name: yup.string().required('Nama toko harus diisi'),
    address: yup.string().optional(),
    latitude: yup.number().nullable(),
    longitude: yup.number().nullable(),
    working_hour_start: yup.string().nullable(),
    working_hour_end: yup.string().nullable(),
  })
  .required();

const defaultValues: IDefaultValues = {
  name: '',
  address: '',
  latitude: null,
  longitude: null,
  working_hour_start: dayjs().hour(10).minute(0).second(0).toISOString(),
  working_hour_end: dayjs().hour(22).minute(0).second(0).toISOString(),
  is_record_attendance: [],
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

  const working_hour_start = watch().working_hour_start;
  const working_hour_end = watch().working_hour_end;

  console.log(
    '🚀 ~ file: UpdateToko.tsx ~ line 69 ~ UpdateToko ~ isDirty',
    isDirty,
  );

  const watchCoords = {
    latitude: watch().latitude,
    longitude: watch().longitude,
  };

  const getDataToko = useStore_GetStoreByPkQuery({
    variables: {id: route.params?.storeId || 0},
    onError: error => {
      navigation.goBack();
      toast.show(
        TOAST_TEMPLATE.error(`Error saat mengambil data toko.${error.message}`),
      );
    },
    onCompleted: data => {
      // console.log(
      //   '🚀 ~ file: UpdateToko.tsx ~ line 116 ~ UpdateToko ~ data',
      //   data,
      // );
      reset({
        name: data.stores_by_pk?.name,
        address: data.stores_by_pk?.address || '',
        latitude: data.stores_by_pk?.latitude,
        longitude: data.stores_by_pk?.longitude,
        is_record_attendance: data.stores_by_pk?.is_record_attendance
          ? ['active']
          : [],
        working_hour_start: data.stores_by_pk?.working_hour_start,
        working_hour_end: data.stores_by_pk?.working_hour_end,
      });
    },
  });

  useEffect(() => {
    myAppState.setLoadingWholePage(getDataToko.loading);

    return () => {
      myAppState.setLoadingWholePage(false);
    };
  }, [getDataToko.loading]);

  const [updateStoreMutation, _updateStoreMutationResult] =
    useStore_UpdateStoreMutation({
      ...getXHasuraContextHeader({role: 'administrator'}),
      refetchQueries: [
        namedOperations.Query.Store_GetAllStore,
        namedOperations.Query.Store_GetStoreByPK,
      ],
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

    const is_record_attendance =
      data.is_record_attendance?.[0] === 'active' ? true : false;
    console.log(
      '🚀 ~ file: UpdateToko.tsx ~ line 172 ~ handleSubmission ~ is_record_attendance',
      is_record_attendance,
    );
    const res = await updateStoreMutation({
      variables: {
        store_id: route.params?.storeId,
        store: {
          name: data.name,
          address: data.address,
          latitude: data.latitude,
          longitude: data.longitude,
          working_hour_start: data.working_hour_start,
          working_hour_end: data.working_hour_end,
          is_record_attendance: is_record_attendance,
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

  const workingHourStartPicker = () => {
    DateTimePickerAndroid.open({
      value: dayjs(working_hour_start).isValid()
        ? dayjs(working_hour_start).toDate()
        : dayjs().hour(10).minute(0).toDate(),
      onChange: (e, selectedDate) => {
        if (selectedDate)
          setValue('working_hour_start', selectedDate.toISOString(), {
            shouldDirty: true,
          });
      },
      mode: 'time',
      is24Hour: true,
    });
  };
  const workingHourEndPicker = () => {
    DateTimePickerAndroid.open({
      value: dayjs(working_hour_end).isValid()
        ? dayjs(working_hour_end).toDate()
        : dayjs().hour(22).minute(0).toDate(),
      onChange: (e, selectedDate) => {
        if (selectedDate)
          setValue('working_hour_end', selectedDate.toISOString(), {
            shouldDirty: true,
          });
      },
      mode: 'time',
      is24Hour: true,
    });
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

              <Box mt="4">
                <FormControl.Label>Jam Kerja</FormControl.Label>
                <HStack space={'6'} alignItems="center">
                  <ClockPicker
                    inputDate={working_hour_start}
                    onPress={workingHourStartPicker}
                  />
                  <Text fontWeight={'bold'} fontSize="lg">
                    -
                  </Text>
                  <ClockPicker
                    inputDate={working_hour_end}
                    onPress={workingHourEndPicker}
                  />
                </HStack>
              </Box>

              <RHCheckbox
                control={control}
                errors={errors}
                label="Fitur Absensi"
                name="is_record_attendance"
                checkboxOptions={[{value: 'active', label: 'aktif'}]}
                flexDirection="row"
                flexWrap="wrap"
                checkboxSpacing={5}
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
