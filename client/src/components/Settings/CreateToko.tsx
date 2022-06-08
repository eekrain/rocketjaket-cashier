import React from 'react';
import {Box, HStack, VStack, Heading, ScrollView, useToast} from 'native-base';
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
import {DismissKeyboardWrapper, RHTextInput} from '../../shared/components';
import ButtonSave from '../Buttons/ButtonSave';
import {SettingsScreenProps} from '../../screens/app/SettingsScreen';
import {
  IMapViewWithMarkerProps,
  MapViewWithMarker,
} from '../MapViews/MapViewWithMarker';
import {MapViewProps} from '@react-native-mapbox-gl/maps';
import to from 'await-to-js';
import {ButtonBack} from '../Buttons';

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
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

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
                onUpdateLocation={onUpdateLocation}
                // mapRef={mapRef}
                onPressMapWithUpdateLocation={onPressMapWithUpdateLocation}
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
