import React, {useState} from 'react';
import {Box, HStack, VStack, Heading, useToast} from 'native-base';
import withAppLayout from '../Layout/AppLayout';
// import {
//   namedOperations,
//   useUser_UpdateDefaultRoleByUserIdMutation,
// } from '../../graphql/gql-generated';
import * as yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import {auth /* getXHasuraContextHeader*/} from '../../shared/utils';
import {TOAST_TEMPLATE} from '../../shared/constants';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  DismissKeyboardWrapper,
  RHTextInput,
  // RHSelect,
} from '../../shared/components';
import ButtonSave from '../Buttons/ButtonSave';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {CreateUserNavProps} from '../../screens/app/UserScreen';
// import {TUserRoleOptions, PossibleDefaultRoleUser} from '../../types/user';

interface IDefaultValues {
  display_name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  // default_role: TUserRoleOptions;
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
    // default_role: yup
    //   .string()
    //   .oneOf(PossibleDefaultRoleUser, 'Role tidak terdaftar'),
  })
  .required();

const defaultValues: IDefaultValues = {
  display_name: '',
  email: '',
  password: '',
  passwordConfirm: '',
  // default_role: 'karyawan',
};

interface ICreateUserProps extends CreateUserNavProps {}

const CreateUser = ({}: ICreateUserProps) => {
  const toast = useToast();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    control,
    formState: {errors},
    reset,
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  // const [updateDefaultRole, _updateDefaultRoleResult] =
  //   useUser_UpdateDefaultRoleByUserIdMutation({
  //     ...getXHasuraContextHeader({role: 'administrator'}),
  //     refetchQueries: [namedOperations.Query.Store_GetAllStore],
  //   });

  const handleSubmission = async (data: IDefaultValues) => {
    setLoading(true);
    console.log(
      '🚀 ~ file: CreateUser.tsx ~ line 84 ~ handleSubmission ~ data',
      data,
    );
    const resRegister = await auth
      .register({
        email: data.email,
        password: data.passwordConfirm,
        options: {
          userData: {
            display_name: data.display_name,
          },
        },
      })
      .catch(error => {
        console.log(
          '🚀 ~ file: CreateUser.tsx ~ line 99 ~ handleSubmission ~ error',
          error,
        );
      });

    if (resRegister && resRegister?.user?.id) {
      // UPDATE USER ROLE

      // const res = await updateDefaultRole({
      //   variables: {
      //     user_id: resRegister.user.id,
      //     default_role: data.default_role,
      //   },
      // }).catch(error => {
      //   console.log(
      //     '🚀 ~ file: CreateUser.tsx ~ line 114 ~ handleSubmission ~ error',
      //     error,
      //   );
      // });
      // if (res && res?.data?.update_auth_accounts?.affected_rows) {
      //   console.log(
      //     '🚀 ~ file: CreateUser.tsx ~ line 118 ~ handleSubmission ~ res.data?.update_auth_accounts?.affected_rows',
      //     res.data?.update_auth_accounts?.affected_rows,
      //   );
      // }

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
              {/* <RHSelect
                name="default_role"
                control={control}
                errors={errors}
                label="Role"
                selectOptions={PossibleDefaultRoleUser.map(val => ({
                  label: val,
                  value: val,
                }))}
              /> */}
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

export default withAppLayout(CreateUser);
