/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  Box,
  Heading,
  Image,
  VStack,
  // Link,
  Button,
  ScrollView,
  useToast,
  Center,
} from 'native-base';
import {SigninNavProps} from '..';
import {RHTextInput} from '../../../shared/components';
import {useForm} from 'react-hook-form';
import {useSignInEmailPassword} from '@nhost/react';
import Config from 'react-native-config';
import {TOAST_TEMPLATE} from '../../../shared/constants';
import {useApolloClient} from '@apollo/client';
import to from 'await-to-js';

interface ISignInScreenProps extends SigninNavProps {}

interface IDefaultValues {
  username: string;
  password: string;
}

const defaultValues = {
  username: Config.APP_ENV === 'development' ? 'ardianoption@gmail.com' : '',
  password: Config.APP_ENV === 'development' ? 'ardianeka' : '',
};

const SignInScreen = ({navigation}: ISignInScreenProps) => {
  const toast = useToast();

  const client = useApolloClient();

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

    const [err, res] = await to(
      signInEmailPassword(data.username, data.password),
    );
    if (err || !res) {
      console.log('🚀 ~ file: index.tsx ~ line 58 ~ handleSignIn ~ err', err);
    } else {
      console.log('🚀 ~ file: index.tsx ~ line 58 ~ handleSignIn ~ res', res);
      if (res.needsEmailVerification)
        toast.show(TOAST_TEMPLATE.error(`Email anda belum terverifikasi!`));

      if (res.isError) {
        toast.show(TOAST_TEMPLATE.error(res?.error?.message || 'Error'));
      }

      if (res.isSuccess) await client.refetchQueries({include: 'active'});
    }
  };

  return (
    <ScrollView>
      <Box
        safeArea
        flex={1}
        p={4}
        pt="8"
        w={{base: 'full', md: 'md'}}
        mx="auto">
        <Center>
          <Image
            source={require('../../../assets/images/logo.png')}
            alt="Logo Rocketjaketr"
            w="xs"
            resizeMode="contain"
          />
        </Center>

        <VStack space={3} mt="5" bgColor={'white'} p="8" borderRadius={'xl'}>
          <Center>
            <Heading fontSize={'3xl'} fontWeight="600" color="coolGray.800">
              Kasir
            </Heading>
          </Center>
          <Center>
            <Heading
              mb="6"
              color="coolGray.600"
              fontWeight="medium"
              fontSize={'xl'}>
              Selamat Datang!
            </Heading>
          </Center>

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
