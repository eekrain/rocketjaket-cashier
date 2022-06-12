/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useMemo, useState} from 'react';
import {Box, HStack, VStack, Heading, useToast} from 'native-base';
import withAppLayout from '../Layout/AppLayout';
import {
  namedOperations,
  useUser_UpdateUserForAdminMutation,
  useStore_GetAllStoreQuery,
  useUser_GetUserByIdQuery,
} from '../../graphql/gql-generated';
import * as yup from 'yup';
import {getXHasuraContextHeader} from '../../shared/utils';
import {TOAST_TEMPLATE} from '../../shared/constants';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  DismissKeyboardWrapper,
  RHTextInput,
  RHSelect,
  RHCheckbox,
} from '../../shared/components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {UserScreenProps} from '../../screens/app/UserScreen';
import {useMyAppState} from '../../state';
import {
  TUserRoleOptions,
  PossibleDefaultRoleUser,
  UserRolesEnum,
} from '../../types/user';
import {ButtonBack, ButtonSave} from '../Buttons';
import to from 'await-to-js';

interface IDefaultValues {
  display_name: string;
  email: string;
  default_role: TUserRoleOptions | string;
  is_active: 'active'[];
  store_id: string;
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
    email: yup
      .string()
      .email('Format email salah')
      .required('Email harus diisi'),
  })
  .required();

const defaultValues: IDefaultValues = {
  display_name: '',
  email: '',
  default_role: '',
  is_active: [],
  store_id: '',
};

type X = UserScreenProps['UpdateUser'];
interface IUpdateUserProps extends X {}

const UpdateUser = ({navigation, route}: IUpdateUserProps) => {
  console.log(
    '🚀 ~ file: UpdateUser.tsx ~ line 77 ~ UpdateUser ~ route',
    route.params,
  );
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const myAppState = useMyAppState();
  const [isErrorOnce, setErrorOnce] = useState(false);
  const [isDataReady, setDataReady] = useState(false);

  const {
    watch,
    handleSubmit,
    control,
    setValue,
    formState: {errors, isSubmitSuccessful, isDirty},
    reset,
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  // console.log(
  //   '🚀 ~ file: UpdateUser.tsx ~ line 87 ~ UpdateUser ~ watch()',
  //   watch(),
  // );

  const formStateRole = watch('default_role');

  const getAllStore = useStore_GetAllStoreQuery();
  const allStoreOptions = useMemo(() => {
    const stores = getAllStore.data?.stores || [];

    return stores.map(store => ({
      value: store.id.toString(),
      label: store.name,
    }));
  }, [getAllStore.data?.stores]);

  const getUserById = useUser_GetUserByIdQuery({
    ...getXHasuraContextHeader({role: 'administrator'}),
    variables: {
      user_id: route.params?.userId || '',
    },
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    myAppState.setLoadingWholePage(getUserById.loading);

    return () => {
      myAppState.setLoadingWholePage(false);
    };
  }, [getUserById.loading]);

  const userData = useMemo(() => {
    return getUserById.data?.user;
  }, [getUserById.data?.user]);
  console.log(
    '🚀 ~ file: UpdateUser.tsx ~ line 132 ~ userData ~ userData',
    userData,
  );

  useEffect(() => {
    if (userData === null && !isErrorOnce) {
      toast.show(TOAST_TEMPLATE.error('User tidak ditemukan.'));
      navigation.goBack();
      setErrorOnce(true);
    } else if (userData && !isDataReady && !isErrorOnce) {
      console.log(
        '🚀 ~ file: UpdateUser.tsx ~ line 123 ~ useEffect ~ userData setData',
        userData,
      );
      setValue('display_name', userData?.displayName);
      setValue(
        'email',
        userData?.newEmail ? userData?.newEmail : userData?.email,
      );
      setValue(
        'store_id',
        userData?.users_metadata?.[0]?.store_id
          ? userData?.users_metadata?.[0]?.store_id.toString()
          : '',
      );
      setValue('is_active', userData?.disabled === false ? ['active'] : []);
      setValue('default_role', userData?.defaultRole);
      setDataReady(true);
    }
  }, [isDataReady, isErrorOnce, navigation, setValue, toast, userData]);

  const [updateUser, _updateUserResult] = useUser_UpdateUserForAdminMutation({
    ...getXHasuraContextHeader({role: 'administrator'}),
    refetchQueries: [
      namedOperations.Query.User_GetAllUser,
      namedOperations.Query.User_GetUserById,
    ],
  });

  const handleSubmission = async (data: IDefaultValues) => {
    if (!route.params?.userId) return;
    if (!isDirty) {
      navigation.goBack();
      toast.show(TOAST_TEMPLATE.cancelled(`Tidak ada data yg berubah.`));
    }
    setLoading(true);
    console.log(
      '🚀 ~ file: CreateUser.tsx ~ line 84 ~ handleSubmission ~ data',
      data,
    );

    let storeId: number | null = parseInt(data.store_id, 10);
    storeId = isNaN(storeId) ? null : storeId;

    const [err, res] = await to(
      updateUser({
        variables: {
          userId: route.params.userId,
          roleBefore: userData!.displayName!,
          roleAfter: data.default_role,
          updateUser: {
            displayName: data.display_name,
            defaultRole: data.default_role,
            disabled: data.is_active?.[0] === 'active' ? false : true,
            email: data.email,
          },
          store_id:
            data.default_role === UserRolesEnum.administrator ? null : storeId,
        },
      }),
    );

    if (err || !res) {
      console.log(
        '🚀 ~ file: UpdateUser.tsx ~ line 199 ~ handleSubmission ~ err',
        err,
      );
      toast.show(TOAST_TEMPLATE.error(`Gagal edit user ${data.display_name}.`));
    } else {
      console.log(
        '🚀 ~ file: UpdateUser.tsx ~ line 211 ~ handleSubmission ~ res',
        res,
      );

      reset();
      toast.show(
        TOAST_TEMPLATE.success(`Berhasil edit user ${data.display_name}.`),
      );
      navigation.goBack();
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
            Update User
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

export default withAppLayout(UpdateUser);
