/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {RHTextInput} from '../../shared/components';
import {Button, Box, Icon, useToast} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import {auth} from '../../shared/utils';
import {TOAST_TEMPLATE} from '../../shared/constants';

interface IDefaultValues {
  oldPassword: string;
  newPassword: string;
  newPasswordConfirm: string;
}

const schema = yup
  .object({
    oldPassword: yup.string().required('Password lama harus di isi'),
    newPassword: yup
      .string()
      .min(8, 'Minimal 8 karakter')
      .required('Password baru harus di isi'),
    newPasswordConfirm: yup
      .string()
      .oneOf([yup.ref('newPassword'), null], 'Password konfirmasi tidak sama'),
  })
  .required();

const defaultValues: IDefaultValues = {
  oldPassword: '',
  newPassword: '',
  newPasswordConfirm: '',
};

interface Props {}

const ChangePassword = ({}: Props) => {
  const toast = useToast();
  const [isEnableChangePassword, setEnableChangePassword] = useState(false);
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

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset(defaultValues);
      setEnableChangePassword(false);
    }
  }, [reset, isSubmitSuccessful]);

  const handleChangePassword = async (data: IDefaultValues) => {
    try {
      await auth.changePassword(data.oldPassword, data.newPasswordConfirm);

      toast.show({
        ...TOAST_TEMPLATE.success('Berhasil mengganti password.'),
      });
    } catch (error) {
      console.log(
        '🚀 ~ file: ChangePassword.tsx ~ line 65 ~ handleChangePassword ~ error',
        error,
      );
      toast.show({
        ...TOAST_TEMPLATE.error('Gagal mengganti password.'),
      });
    }
  };

  return (
    <>
      {!isEnableChangePassword ? (
        <Button
          onPress={() => setEnableChangePassword(true)}
          w="40"
          leftIcon={<Icon as={Feather} name="lock" size="sm" />}>
          Ganti Password
        </Button>
      ) : (
        <>
          <RHTextInput
            type="password"
            name="oldPassword"
            control={control}
            errors={errors}
            label="Password Lama"
          />
          <RHTextInput
            type="password"
            name="newPassword"
            control={control}
            errors={errors}
            label="Password Baru"
          />
          <RHTextInput
            type="password"
            name="newPasswordConfirm"
            control={control}
            errors={errors}
            label="Konfirmasi Password Baru"
          />
          <Button
            mt="4"
            onPress={handleSubmit(handleChangePassword)}
            w={250}
            leftIcon={<Icon as={Feather} name="lock" size="sm" />}>
            Simpan Password Baru
          </Button>
        </>
      )}
    </>
  );
};

export default ChangePassword;
