/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useMemo, useState} from 'react';
import {Box, HStack, VStack, Heading, useToast} from 'native-base';
import withAppLayout from '../Layout/AppLayout';
import {
  namedOperations,
  useUser_CreateCustomAuthAccountRoleOneMutation,
  useUser_UpdateUserRoleStoreByUserIdMutation,
} from '../../graphql/gql-generated';
import * as yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import {auth, getXHasuraContextHeader} from '../../shared/utils';
import {TOAST_TEMPLATE} from '../../shared/constants';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  DismissKeyboardWrapper,
  RHTextInput,
  RHSelect,
  RHCheckbox,
} from '../../shared/components';
import ButtonSave from '../Buttons/ButtonSave';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {UpdateUserNavProps} from '../../screens/app/UserScreen';
import {
  useStore_GetAllStoreQuery,
  useUser_GetUserByIdQuery,
} from '../../graphql/gql-generated';
import {useMyAppState} from '../../state';
import {
  TUserRoleOptions,
  PossibleDefaultRoleUser,
  UserRolesEnum,
} from '../../types/user';

interface IDefaultValues {
  display_name: string;
  email: string;
  default_role: TUserRoleOptions | string;
  is_active: 'active'[];
  store_id: string | null;
}

const schema = yup
  .object({
    display_name: yup.string().required('Nama harus diisi'),
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
  default_role: '',
  is_active: [],
  store_id: null,
};

interface IUpdateUserProps extends UpdateUserNavProps {}

const UpdateUser = ({navigation, route}: IUpdateUserProps) => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const myAppState = useMyAppState();
  const [isErrorOnce, setErrorOnce] = useState(false);
  const [isDataReady, setDataReady] = useState(false);
  const [isAddAccRoleRunOnce, setAddAccRoleRunOnce] = useState(false);

  const {
    watch,
    handleSubmit,
    control,
    setValue,
    formState: {errors, isSubmitSuccessful},
    reset,
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  console.log(
    '🚀 ~ file: UpdateUser.tsx ~ line 87 ~ UpdateUser ~ watch()',
    watch(),
  );

  const formStateRole = watch('default_role');

  const getAllStore = useStore_GetAllStoreQuery();
  const allStoreOptions = useMemo(() => {
    const stores = getAllStore.data?.rocketjaket_store || [];

    return stores.map(store => ({
      value: store.id.toString(),
      label: store.name,
    }));
  }, [getAllStore.data?.rocketjaket_store]);

  const getUserById = useUser_GetUserByIdQuery({
    ...getXHasuraContextHeader({role: 'administrator'}),
    variables: {
      id: route.params.userId,
    },
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    if (!isSubmitSuccessful) {
      myAppState.setLoadingWholePage(getUserById.loading);
    } else {
      myAppState.setLoadingWholePage(false);
    }
  }, [getUserById.loading, isSubmitSuccessful, myAppState]);

  const userData = useMemo(() => {
    return getUserById.data?.users_by_pk;
  }, [getUserById.data?.users_by_pk]);

  const [createCustomAuthAccountRoles] =
    useUser_CreateCustomAuthAccountRoleOneMutation({
      ...getXHasuraContextHeader({role: 'administrator'}),
    });

  useEffect(() => {
    const found = userData?.account?.account_roles.find(
      accRole => accRole?.is_custom === true,
    );
    const addAccRoleMutation = async () => {
      const res = await createCustomAuthAccountRoles({
        variables: {
          insert_auth_account_roles_one: {
            account_id: userData?.account?.account_roles?.[0].account_id || '',
            role: UserRolesEnum.anonymous,
            is_custom: true,
          },
        },
      }).catch(error => {
        console.log(
          '🚀 ~ file: UpdateUser.tsx ~ line 152 ~ addAccRoleMutation ~ error',
          error,
        );
      });
      console.log(
        '🚀 ~ file: UpdateUser.tsx ~ line 155 ~ addAccRoleMutation ~ res',
        res,
      );
    };
    if (!found && !isAddAccRoleRunOnce && isDataReady) {
      addAccRoleMutation();
      setAddAccRoleRunOnce(true);
    }
  }, [
    createCustomAuthAccountRoles,
    isAddAccRoleRunOnce,
    isDataReady,
    userData?.account?.account_roles,
  ]);

  useEffect(() => {
    if (userData === null && !isErrorOnce) {
      toast.show({
        ...TOAST_TEMPLATE.error('Kategori Produk tidak ditemukan.'),
      });
      navigation.goBack();
      setErrorOnce(true);
    } else if (userData && !isDataReady && !isErrorOnce) {
      console.log(
        '🚀 ~ file: UpdateUser.tsx ~ line 123 ~ useEffect ~ userData setData',
        userData,
      );
      setValue('display_name', userData?.display_name || '');
      setValue('email', userData?.account?.email || '');
      setValue(
        'store_id',
        userData?.store_id ? userData?.store_id.toString() : null,
      );
      setValue(
        'is_active',
        userData?.account?.active === true ? ['active'] : [],
      );
      setValue(
        'default_role',
        PossibleDefaultRoleUser.includes(
          userData?.account?.default_role as UserRolesEnum,
        )
          ? userData!.account!.default_role!
          : '',
      );
      setDataReady(true);
    }
  }, [isDataReady, isErrorOnce, navigation, setValue, toast, userData]);

  const [updateUser, _updateUserResult] =
    useUser_UpdateUserRoleStoreByUserIdMutation({
      ...getXHasuraContextHeader({role: 'administrator'}),
      refetchQueries: [
        namedOperations.Query.User_GetAllUser,
        namedOperations.Query.User_GetUserById,
      ],
    });

  const handleSubmission = async (data: IDefaultValues) => {
    setLoading(true);
    console.log(
      '🚀 ~ file: CreateUser.tsx ~ line 84 ~ handleSubmission ~ data',
      data,
    );

    const res = await updateUser({
      variables: {
        user_id: route.params.userId,
        update_user: {
          display_name: data.display_name,
          store_id:
            data.default_role === UserRolesEnum.administrator
              ? null
              : data.store_id !== null
              ? parseInt(data.store_id, 10)
              : null,
        },
        update_auth_accounts: {
          default_role: data.default_role,
          active: data.is_active?.[0] === 'active' ? true : false,
        },
        account_id: userData?.account?.account_roles?.[0].account_id || '',
        update_auth_account_roles: {
          role: data.default_role,
        },
      },
    }).catch(error => {
      console.log(
        '🚀 ~ file: CreateUser.tsx ~ line 114 ~ handleSubmission ~ error',
        error,
      );
    });
    if (res && !res.errors) {
      reset();
      toast.show({
        ...TOAST_TEMPLATE.success(
          `Berhasil menambahkan user ${data.display_name}.`,
        ),
      });
      navigation.goBack();
    } else {
      toast.show({
        ...TOAST_TEMPLATE.error(`Gagal menambahkan user ${data.display_name}.`),
      });
    }
    setLoading(false);
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
                isDisabled={true}
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
              {formStateRole !== UserRolesEnum.administrator ? (
                <RHSelect
                  name="store_id"
                  control={control}
                  errors={errors}
                  label="Toko"
                  selectOptions={allStoreOptions}
                />
              ) : null}
              <RHCheckbox
                control={control}
                errors={errors}
                label="User Aktif"
                name="is_active"
                checkboxOptions={[{value: 'active', label: 'aktif'}]}
                flexDirection="row"
                flexWrap="wrap"
                checkboxSpacing={5}
              />
              <HStack justifyContent="flex-end" mt="5">
                <ButtonSave
                  isLoading={loading}
                  onPress={handleSubmit(handleSubmission)}
                />
              </HStack>
            </VStack>
          </Box>
        </Box>
      </DismissKeyboardWrapper>
    </KeyboardAwareScrollView>
  );
};

export default withAppLayout(UpdateUser);
