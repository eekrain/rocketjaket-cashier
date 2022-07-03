import React from 'react';
import {
  Box,
  HStack,
  VStack,
  Heading,
  ScrollView,
  useToast,
  FormControl,
  Text,
  Button,
} from 'native-base';
import withAppLayout from '../Layout/AppLayout';
import {
  namedOperations,
  useStore_CreateStoreMutation,
} from '../../graphql/gql-generated';
import * as yup from 'yup';
import {useNavigation} from '@react-navigation/native';
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
import ButtonSave from '../Buttons/ButtonSave';
import {SettingsScreenProps} from '../../screens/app/SettingsScreen';
import {
  IMapViewWithMarkerProps,
  MapViewWithMarker,
} from '../MapViews/MapViewWithMarker';
import {MapViewProps} from '@react-native-mapbox-gl/maps';
import to from 'await-to-js';
import {ButtonBack} from '../Buttons';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';
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

interface ICreateTokoProps {}

const CreateToko = ({}: ICreateTokoProps) => {
  const toast = useToast();
  const navigation =
    useNavigation<SettingsScreenProps['CreateToko']['navigation']>();

  const {
    handleSubmit,
    control,
    formState: {errors},
    reset,
    setValue,
    watch,
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const working_hour_start = watch().working_hour_start;
  const working_hour_end = watch().working_hour_end;

  const watchCoords = {
    latitude: watch().latitude,
    longitude: watch().longitude,
  };

  const [createStoreMutation, _createStoreMutationResult] =
    useStore_CreateStoreMutation({
      ...getXHasuraContextHeader({role: 'administrator'}),
      refetchQueries: [namedOperations.Query.Store_GetAllStore],
    });

  const handleSubmission = async (data: IDefaultValues) => {
    const [err, res] = await to(
      createStoreMutation({
        variables: {
          store: {
            name: data.name,
            address: data.address,
            latitude: data.latitude,
            longitude: data.longitude,
            working_hour_start: data.working_hour_start,
            working_hour_end: data.working_hour_end,
            is_record_attendance:
              data.is_record_attendance?.[0] === 'active' ? true : false,
          },
        },
      }),
    );
    if (err || !res) {
      console.log(
        '🚀 ~ file: CreateToko.tsx ~ line 86 ~ handleSubmission ~ err',
        err,
      );
      err.message = err.message.includes('stores_name_key')
        ? 'Nama toko terduplikasi, coba ganti nama lain!'
        : '';
      toast.show(
        TOAST_TEMPLATE.error(
          `Gagal melakukan penambahan toko ${data.name}.${err.message}`,
        ),
      );
    } else {
      reset();
      toast.show(
        TOAST_TEMPLATE.success(`Berhasil menambahkan toko ${data.name}.`),
      );
      navigation.goBack();
    }
  };

  // const mapRef = useRef<MapboxGL.MapView | null>(null);

  const onUpdateLocation: IMapViewWithMarkerProps['onUpdateLocation'] = (
    latitude,
    longitude,
  ) => {
    setValue('longitude', longitude);
    setValue('latitude', latitude);
  };

  const onPressMapWithUpdateLocation: MapViewProps['onPress'] = e => {
    console.log('🚀 ~ file: CreateToko.tsx ~ line 114 ~ CreateToko ~ e', e);
  };

  const workingHourStartPicker = () => {
    DateTimePickerAndroid.open({
      value: dayjs(working_hour_start).toDate(),
      onChange: (e, selectedDate) => {
        if (selectedDate)
          setValue('working_hour_start', selectedDate.toISOString());
      },
      mode: 'time',
      is24Hour: true,
    });
  };
  const workingHourEndPicker = () => {
    DateTimePickerAndroid.open({
      value: dayjs(working_hour_start).toDate(),
      onChange: (e, selectedDate) => {
        if (selectedDate)
          setValue('working_hour_end', selectedDate.toISOString());
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
            Daftarkan Toko Baru
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
                    onPress={workingHourStartPicker}
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
                  isLoading={_createStoreMutationResult.loading}
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

export default withAppLayout(CreateToko);
