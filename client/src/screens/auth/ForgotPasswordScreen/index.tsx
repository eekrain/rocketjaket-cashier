import React from 'react';
import {Box, Heading, Image, VStack, Button} from 'native-base';
import {ForgotPasswordNavProps} from '..';
import {RHTextInput} from '../../../shared/components';
import {useForm} from 'react-hook-form';

interface IForgotPasswordProps extends ForgotPasswordNavProps {}

interface IDefaultValues {
  username: string;
}

const defaultValues: IDefaultValues = {
  username: '',
};

const ForgotPassword = ({}: IForgotPasswordProps) => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm({defaultValues});

  const handleSubmission = (data: IDefaultValues) => {
    console.log(data);
  };

  return (
    <Box safeArea flex={1} p="2" py="8" w="md" mx="auto">
      <Box justifyContent="center" alignItems="center">
        <Image
          source={require('../../../assets/images/logo.png')}
          alt="Logo Rocketjaketr"
          w="xs"
          resizeMode="contain"
        />
        <Heading size="lg" fontWeight="600" color="coolGray.800">
          Kasir
        </Heading>
        <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
          Masukkan Username
        </Heading>
      </Box>

      <VStack space={3} mt="5">
        <RHTextInput
          name="username"
          label="Username"
          control={control}
          errors={errors}
        />
        <Button
          mt="2"
          colorScheme="indigo"
          _text={{color: 'white'}}
          onPress={handleSubmit(handleSubmission)}>
          Reset Password
        </Button>
      </VStack>
    </Box>
  );
};

export default ForgotPassword;
