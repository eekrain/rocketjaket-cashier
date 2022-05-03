import React, {useMemo, useState} from 'react';
import {Box, HStack, VStack, Heading, useToast} from 'native-base';
import withAppLayout from '../Layout/AppLayout';
import {
  namedOperations,
  useStore_GetAllStoreQuery,
  useUser_SignUpMutation,
} from '../../graphql/gql-generated';
import * as yup from 'yup';
import {TOAST_TEMPLATE} from '../../shared/constants';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  DismissKeyboardWrapper,
  RHSelect,
  RHTextInput,
} from '../../shared/components';
import ButtonSave from '../Buttons/ButtonSave';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {CreateUserProps} from '../../screens/app/UserScreen';
import {getXHasuraContextHeader} from '../../shared/utils';
import {
  PossibleDefaultRoleUser,
  TUserRoleOptions,
  UserRolesEnum,
} from '../../types/user';
import {ButtonBack} from '../Buttons';

interface IDefaultValues {
  display_name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  default_role: TUserRoleOptions;
  store_id: string;
}

const schema = yup
  .object({
    email: yup
      .string()
      .email('Format email salah')
      .required('Email harus diisi'),
    display_name: yup.string().required('Nama harus diisi'),
    password: yup
      .string()
      .min(8, 'Minimal 8 karakter')
      .required('Password harus diisi'),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Password konfirmasi tidak sama'),
    default_role: yup
      .string()
      .oneOf(PossibleDefaultRoleUser, 'Role tidak terdaftar'),
    store_id: yup
      .string()
      .nullable()
      .when('default_role', {
        is: (default_role: string) =>
          default_role !== UserRolesEnum.administrator,
        then: yup
          .string()
          .nullable()
          .required(
            `Selain role ${UserRolesEnum.administrator} harus masukkan toko penempatan user bekerja.`,
          ),
        otherwise: yup.string().nullable(),
      }),
  })
  .required();

const defaultValues: IDefaultValues = {
  display_name: '',
  email: '',
  password: '',
  passwordConfirm: '',
  default_role: 'karyawan',
  store_id: '',
};

interface ICreateUserProps extends CreateUserProps {}

const CreateUser = ({navigation}: ICreateUserProps) => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    control,
    formState: {errors},
    reset,
    watch,
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const currDefaultRole = watch('default_role');
  const getAllStore = useStore_GetAllStoreQuery();
  const allStoreOptions = useMemo(() => {
    const stores = getAllStore.data?.store || [];

    return stores.map(store => ({
      value: store.id.toString(),
      label: store.name,
    }));
  }, [getAllStore.data?.store]);

  const [signUp, _signUpResult] = useUser_SignUpMutation({
    ...getXHasuraContextHeader({role: 'administrator'}),
    refetchQueries: [namedOperations.Query.User_GetAllUser],
  });

  const handleSubmission = async (data: IDefaultValues) => {
    console.log(
      '🚀 ~ file: CreateUser.tsx ~ line 113 ~ handleSubmission ~ data',
      data,
    );
    setLoading(true);

    let defaultStore: number | null = parseInt(data.store_id, 10);
    defaultStore = isNaN(defaultStore) ? null : defaultStore;
    const register = await signUp({
      variables: {
        email: data.email,
        displayName: data.display_name,
        password: data.password,
        defaultRole: data.default_role,
        defaultStore: defaultStore,
      },
    });

    setLoading(false);
    if (register.errors || register.data?.User_SignUp?.isError) {
      toast.show({
        ...TOAST_TEMPLATE.error(
          `Gagal menambahkan user ${data.display_name}.${
            register.data?.User_SignUp?.errorMessage
              ? `Error: ${register.data?.User_SignUp?.errorMessage}.`
              : ''
          }`,
        ),
      });
    } else {
      toast.show({
        ...TOAST_TEMPLATE.success(
          `Berhasil menambahkan user ${data.display_name}.`,
        ),
      });
      navigation.goBack();
    }
  };

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      enableResetScrollToCoords={false}>
      <DismissKeyboardWrapper>
        <Box pb="200">
          <Heading fontSize="xl" mb="10">
            Buat User Baru
          </Heading>
          <Box bgColor="white" p="8">
            <VStack space="4">
              <RHTextInput
                name="display_name"
                control={control}
                errors={errors}
                label="Nama"
              />
              <RHTextInput
                name="email"
                control={control}
                errors={errors}
                label="Email"
              />
              <RHTextInput
                type="password"
                name="password"
                control={control}
                errors={errors}
                label="Password"
              />
              <RHTextInput
                type="password"
                name="passwordConfirm"
                control={control}
                errors={errors}
                label="Konfirmasi Password"
              />
              <RHSelect
                name="default_role"
                control={control}
                errors={errors}
                label="Role"
                selectOptions={PossibleDefaultRoleUser.map(val => ({
                  label: val,
                  value: val,
                }))}
              />
              {currDefaultRole !== UserRolesEnum.administrator && (
                <RHSelect
                  name="store_id"
                  control={control}
                  errors={errors}
                  label="Penempatan Toko"
                  selectOptions={allStoreOptions}
                />
              )}
              <HStack justifyContent="flex-end" mt="8" space={4}>
                <ButtonSave
                  isLoading={loading}
                  onPress={handleSubmit(handleSubmission)}
                />
                <ButtonBack
                  onPress={() => {
                    navigation.goBack();
                  }}
                />
              </HStack>
            </VStack>
          </Box>
        </Box>
      </DismissKeyboardWrapper>
    </KeyboardAwareScrollView>
  );
};

export default withAppLayout(CreateUser);
