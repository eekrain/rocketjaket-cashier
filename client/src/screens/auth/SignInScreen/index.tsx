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
  useToast,
} from 'native-base';
import {SigninNavProps} from '..';
import {RHTextInput} from '../../../shared/components';
import {useForm} from 'react-hook-form';
import {useSignInEmailPassword} from '@nhost/react';
import Config from 'react-native-config';
import {TOAST_TEMPLATE} from '../../../shared/constants';

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
  const toast = useToast();

  const {signInEmailPassword} = useSignInEmailPassword();

  const {
    register,
    handleSubmit,
    control,
    formState: {errors},
  } = useForm({defaultValues});

  const handleSignIn = async (data: IDefaultValues) => {
    console.log(
      '🚀 ~ file: index.tsx ~ line 43 ~ handleSubmission ~ data',
      data,
    );

    const res = await signInEmailPassword(data.username, data.password);

    if (res.needsEmailVerification) {
      toast.show(TOAST_TEMPLATE.error(`Email anda belum terverifikasi!`));
    }
    if (res.isError) {
      toast.show(TOAST_TEMPLATE.error(res.error?.message || 'Error'));
    }
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

          {/* <Link
            onTouchEnd={() => navigation.navigate('ForgotPassword')}
            _text={{
              fontSize: 'xs',
              fontWeight: '500',
              color: 'indigo.500',
            }}
            alignSelf="flex-end"
            mt="1">
            Forget Password?
          </Link> */}
          <Button
            mt="2"
            _text={{color: 'white'}}
            onPress={handleSubmit(handleSignIn)}>
            Sign in
          </Button>
        </VStack>
      </Box>
    </ScrollView>
  );
};

export default SignInScreen;
