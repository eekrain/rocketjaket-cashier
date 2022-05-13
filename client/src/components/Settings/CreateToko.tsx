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

interface ICreateTokoProps {}

const CreateToko = ({}: ICreateTokoProps) => {
  const toast = useToast();
  const navigation = useNavigation<SettingsScreenProps['navigation']>();

  const {
    handleSubmit,
    control,
    formState: {errors},
    reset,
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
    const res = await createStoreMutation({
      variables: {
        store: {
          name: data.name,
          address: data.address,
          latitude: data.latitude,
          longitude: data.longitude,
        },
      },
    });
    if (res.errors) {
      toast.show({
        ...TOAST_TEMPLATE.error(
          `Gagal melakukan penambahan toko ${res.data?.insert_store_one?.name}.`,
        ),
      });
    } else {
      reset();
      toast.show({
        ...TOAST_TEMPLATE.success(
          `Berhasil menambahkan toko ${res.data?.insert_store_one?.name}.`,
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
              <HStack justifyContent="flex-end" mt="5">
                <ButtonSave
                  isLoading={_createStoreMutationResult.loading}
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

export default withAppLayout(CreateToko);
