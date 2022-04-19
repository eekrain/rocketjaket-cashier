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
  email: string;
}

const schema = yup
  .object({
    email: yup
      .string()
      .email('Format email salah')
      .required('Email harus diisi'),
  })
  .required();

interface Props {
  current_email: string;
}

const ChangeEmail = ({current_email}: Props) => {
  const toast = useToast();
  const [isEnableChangeEmail, setEnableChangeEmail] = useState(false);
  const {
    watch,
    handleSubmit,
    control,
    setValue,
    formState: {errors, isSubmitSuccessful, isDirty},
    reset,
  } = useForm({
    defaultValues: {
      email: current_email,
    },
    resolver: yupResolver(schema),
  });

  const formStateEmail = watch('email');
  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: formStateEmail,
      });
      setEnableChangeEmail(false);
    }
  }, [reset, isSubmitSuccessful, formStateEmail]);

  const handleSubmission = async (data: IDefaultValues) => {
    try {
      await auth.changeEmail(data.email);

      toast.show({
        ...TOAST_TEMPLATE.success('Berhasil mengganti email.'),
      });
    } catch (error) {
      console.log(
        '🚀 ~ file: ChangeEmail.tsx ~ line 65 ~ handleChangeEmail ~ error',
        error,
      );
      toast.show({
        ...TOAST_TEMPLATE.error('Gagal mengganti email.'),
      });
    }
  };

  return (
    <>
      <RHTextInput
        type="Email"
        name="email"
        control={control}
        errors={errors}
        label="Email"
        mb="4"
        isDisabled={!isEnableChangeEmail}
      />
      {!isEnableChangeEmail ? (
        <Button
          onPress={() => setEnableChangeEmail(true)}
          w="40"
          leftIcon={<Icon as={Feather} name="lock" size="sm" />}>
          Ganti Email
        </Button>
      ) : (
        <Button
          mt="4"
          onPress={handleSubmit(handleSubmission)}
          w={250}
          leftIcon={<Icon as={Feather} name="lock" size="sm" />}>
          Simpan Email Baru
        </Button>
      )}
    </>
  );
};

export default ChangeEmail;
