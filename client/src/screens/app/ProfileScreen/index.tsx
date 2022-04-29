/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useMemo, useState} from 'react';
import {
  Box,
  HStack,
  VStack,
  Heading,
  Stack,
  useToast,
  Center,
  Text,
  Button,
  Icon,
} from 'native-base';
import withAppLayout from '../../../components/Layout/AppLayout';
import {
  namedOperations,
  useUser_GetUserByIdQuery,
  useUser_UpdateUserByUserIdMutation,
} from '../../../graphql/gql-generated';
import * as yup from 'yup';
import {
  useMyUser,
  getXHasuraContextHeader,
  // getStorageFileUrlWImageTransform,
  renameFilenameWithAddedNanoid,
  nhost,
} from '../../../shared/utils';
import {TOAST_TEMPLATE} from '../../../shared/constants';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {DismissKeyboardWrapper, RHTextInput} from '../../../shared/components';
import {ButtonSave, ButtonBack} from '../../../components/Buttons';
import {useMyAppState} from '../../../state';
import {ProfileRootNavProps} from '../index';
import ChangePassword from '../../../components/Users/ChangePassword';
import ChangeEmail from '../../../components/Users/ChangeEmail';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {MyAvatar} from '../../../shared/components';
import {
  launchCamera,
  Asset,
  launchImageLibrary,
} from 'react-native-image-picker';
import Feather from 'react-native-vector-icons/Feather';
import {useIsFocused} from '@react-navigation/native';
import {useAccessToken} from '@nhost/react';

interface IDefaultValues {
  display_name: string;
  photo: {
    currentAvatarFileId: string;
    asset?: Asset;
  };
  default_role: string;
}

const schema = yup
  .object({
    display_name: yup.string().required('Nama harus diisi'),
  })
  .required();

const defaultValues: IDefaultValues = {
  display_name: '',
  photo: {currentAvatarFileId: ''},
  default_role: '',
};

interface IProfileScreenProps extends ProfileRootNavProps {}

const ProfileScreen = ({route, navigation}: IProfileScreenProps) => {
  const focused = useIsFocused();
  const toast = useToast();
  const myAppState = useMyAppState();
  const [isErrorOnce, setErrorOnce] = useState(false);
  const [isDataReady, setDataReady] = useState(false);
  const myUser = useMyUser();
  // console.log(
  //   '🚀 ~ file: index.tsx ~ line 78 ~ ProfileScreen ~ myUser',
  //   myUser.avatarUrl,
  // );
  const accessToken = useAccessToken();
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
  const userPhoto = watch('photo');

  // console.log(
  //   '🚀 ~ file: index.tsx ~ line 92 ~ ProfileScreen ~ watch()',
  //   watch(),
  // );

  // console.log(
  //   '🚀 ~ file: index.tsx ~ line 99 ~ ProfileScreen ~ myUser.id',
  //   myUser.id,
  // );

  const getUserData = useUser_GetUserByIdQuery({
    variables: {user_id: myUser.id},
    fetchPolicy: 'network-only',
    ...getXHasuraContextHeader({role: 'me', withUserId: true}),
  });

  const userDataFetched = useMemo(() => {
    const dataUser = getUserData.data?.user;
    return dataUser;
  }, [getUserData.data?.user]);

  useEffect(() => {
    myAppState.setLoadingWholePage(getUserData.loading);
  }, [getUserData.loading, myAppState]);

  useEffect(() => {
    if (userDataFetched === null && !isErrorOnce) {
      toast.show({
        ...TOAST_TEMPLATE.error('Kategori Produk tidak ditemukan.'),
      });
      navigation.goBack();
      setErrorOnce(true);
    } else if (userDataFetched !== null && !isDataReady && !isErrorOnce) {
      if (userDataFetched) {
        setValue('display_name', userDataFetched.displayName || '');
        setValue('photo', {
          currentAvatarFileId: userDataFetched.avatarUrl || '',
        });
        setValue('default_role', userDataFetched.defaultRole || '');
        setDataReady(true);
      }
    }
  }, [
    userDataFetched,
    getUserData,
    isDataReady,
    isErrorOnce,
    navigation,
    setValue,
    toast,
  ]);

  const [updateUserMutation, _updateUserMutationResult] =
    useUser_UpdateUserByUserIdMutation({
      ...getXHasuraContextHeader({role: 'me', withUserId: true}),
      refetchQueries: [
        // namedOperations.Query.User_GetAllUser,
        namedOperations.Query.User_GetUserById,
      ],
    });

  const handleSubmission = async (data: IDefaultValues) => {
    console.log(
      '🚀 ~ file: index.tsx ~ line 150 ~ handleSubmission ~ data',
      data,
    );
    let newAvatarFileId = '';
    if (data?.photo?.asset?.uri) {
      const finalFileName = renameFilenameWithAddedNanoid(
        userDataFetched?.id as string,
        data?.photo?.asset?.uri,
      );
      const image = {
        type: data?.photo?.asset.type,
        uri: data?.photo?.asset.uri,
        name: finalFileName.modifiedName,
      };
      try {
        const res = await nhost.storage.upload({
          file: image,
          bucketId: 'avatarPhoto',
        });
        console.log(
          '🚀 ~ file: index.tsx ~ line 179 ~ handleSubmission ~ res',
          res,
        );
        if (res.fileMetadata?.id && data.photo.currentAvatarFileId !== '') {
          // nhostAuth.updateUserData({photoURL: res?.key});
          await nhost.storage
            .delete({fileId: data.photo.currentAvatarFileId})
            .catch(error => {
              console.log(
                '🚀 ~ file: index.tsx ~ line 177 ~ handleSubmission - storage.delete ~ error',
                error,
              );
            });
        }

        newAvatarFileId = res.fileMetadata?.id
          ? res.fileMetadata.id
          : data.photo.currentAvatarFileId;
      } catch (error) {
        console.log(
          '🚀 ~ file: index.tsx ~ line 170 ~ handleSubmission - storage.put ~ error',
          error,
        );
      }
    } else {
      newAvatarFileId = data.photo.currentAvatarFileId;
    }

    if (!isDirty) {
      toast.show({
        ...TOAST_TEMPLATE.cancelled('Data user tidak ada yang diubah.'),
      });
      return;
    }

    const res = await updateUserMutation({
      variables: {
        id: myUser.id,
        _set: {
          avatarUrl: newAvatarFileId,
          displayName: data.display_name,
        },
      },
    });
    if (res.errors) {
      toast.show({
        ...TOAST_TEMPLATE.error(
          `Gagal update user ${res.data?.updateUser?.displayName}.`,
        ),
      });
    } else {
      nhost.auth.refreshSession();
      toast.show({
        ...TOAST_TEMPLATE.success(
          `Berhasil update user ${res.data?.updateUser?.displayName}.`,
        ),
      });
    }
  };

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset(defaultValues);
      setDataReady(false);
      navigation.goBack();
    }
  }, [reset, isSubmitSuccessful, getUserData.client, navigation]);
  React.useEffect(() => {
    if (!isSubmitSuccessful) {
      setDataReady(false);
    }
  }, [focused, isSubmitSuccessful]);

  const getImageFromCamera = () => {
    launchCamera(
      {
        mediaType: 'photo',
        saveToPhotos: true,
        cameraType: 'back',
      },
      data => {
        if (data?.assets) {
          const asset = data.assets[0] || {};
          setValue('photo.asset', asset, {shouldDirty: true});
        }
      },
    );
  };

  const getImageFromGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 1,
      },
      data => {
        console.log(
          '🚀 ~ file: index.tsx ~ line 252 ~ getImageFromGallery ~ data',
          data,
        );
        if (data?.assets) {
          const asset = data.assets[0] || {};
          setValue('photo.asset', asset, {shouldDirty: true});
        }
      },
    );
  };

  // console.log(
  //   '🚀 ~ file: index.tsx ~ line 300 ~ ProfileScreen ~ userPhoto?.asset?.uri',
  //   userPhoto?.asset?.uri,
  // );

  console.log(
    '🚀 ~ file: index.tsx ~ line 294 ~ ProfileScreen ~ myUser.avatarUrl',
    myUser.avatarUrl,
  );

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      enableResetScrollToCoords={false}>
      <DismissKeyboardWrapper>
        <Box>
          <Heading fontSize="xl" mb="10">
            Profile Saya
          </Heading>

          <Stack direction={['column', 'column', 'row']} space="4">
            <Box bgColor="white" p="8" w={['full', 'full', '3/5']}>
              <VStack space="4">
                <RHTextInput
                  name="display_name"
                  control={control}
                  errors={errors}
                  label="Nama"
                />
                {userDataFetched ? (
                  <ChangeEmail current_email={userDataFetched.email} />
                ) : null}

                <RHTextInput
                  name="default_role"
                  control={control}
                  errors={errors}
                  label="Role"
                  isDisabled={true}
                />
                <ChangePassword />
              </VStack>
            </Box>
            <Box bgColor="white" p="8" w={['full', 'full', '2/5']}>
              <VStack space="4">
                <Text fontWeight="semibold">Foto</Text>
                <Center>
                  <MyAvatar
                    source={{
                      uri: userPhoto?.asset?.uri
                        ? userPhoto.asset.uri
                        : myUser.avatarUrl,
                      headers: {
                        Authorization: `Bearer ${accessToken}`,
                      },
                    }}
                    fallbackText={userDataFetched?.displayName || ''}
                    size={150}
                  />
                </Center>

                <Button
                  onPress={getImageFromCamera}
                  leftIcon={<Icon as={Feather} name="camera" size="sm" />}>
                  Ambil Dari Kamera
                </Button>

                <Button
                  onPress={getImageFromGallery}
                  leftIcon={<Icon as={Feather} name="image" size="sm" />}>
                  Ambil Dari Galeri
                </Button>
              </VStack>
            </Box>
          </Stack>
          <HStack justifyContent="flex-end" mt="8" space="4">
            <ButtonSave
              // isLoading={_updateUserMutationResult.loading}
              onPress={handleSubmit(handleSubmission)}
            />
            <ButtonBack onPress={() => navigation.goBack()} />
          </HStack>
        </Box>
      </DismissKeyboardWrapper>
    </KeyboardAwareScrollView>
  );
};

export default withAppLayout(ProfileScreen);
