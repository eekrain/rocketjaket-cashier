/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  Box,
  Heading,
  Image,
  VStack,
  Link,
  Button,
  ScrollView,
} from 'native-base';
import {SigninNavProps} from '../../../types/navigation';
import {RHTextInput} from '../../../shared/components';
import {useForm} from 'react-hook-form';
import {useSignInEmailPassword} from '@nhost/react';

interface ISignInScreenProps extends SigninNavProps {}

interface IDefaultValues {
  username: string;
  password: string;
}

const defaultValues = {
  username: 'ardianoption@gmail.com',
  password: 'ardianeka',
};

const SignInScreen = ({navigation}: ISignInScreenProps) => {
  const {
    signInEmailPassword,
    isLoading,
    needsEmailVerification,
    needsMfaOtp,
    sendMfaOtp,
    isSuccess,
    isError,
    error,
    user,
  } = useSignInEmailPassword();

  const {
    register,
    handleSubmit,
    control,
    formState: {errors},
  } = useForm({defaultValues});

  const handleSubmission = async (data: IDefaultValues) => {
    signInEmailPassword(data.username, data.password);
  };

  return (
    <ScrollView>
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
            Selamat Datang!
          </Heading>
        </Box>

        <VStack space={3} mt="5">
          <RHTextInput
            name="username"
            label="Username"
            control={control}
            errors={errors}
          />
          <RHTextInput
            control={control}
            errors={errors}
            type="password"
            name="password"
            label="Password"
          />

          <Link
            onTouchEnd={() => navigation.navigate('ForgotPassword')}
            _text={{
              fontSize: 'xs',
              fontWeight: '500',
              color: 'indigo.500',
            }}
            alignSelf="flex-end"
            mt="1">
            Forget Password?
          </Link>
          <Button
            mt="2"
            _text={{color: 'white'}}
            onPress={handleSubmit(handleSubmission)}>
            Sign in
          </Button>
          {/* <Button
            mt="2"
            _text={{color: 'white'}}
            onPress={async () =>
              await auth.register({
                email: defaultValues.username,
                password: defaultValues.password,
              })
            }>
            Register EKA
          </Button> */}
        </VStack>
      </Box>
    </ScrollView>
  );
};

export default SignInScreen;
