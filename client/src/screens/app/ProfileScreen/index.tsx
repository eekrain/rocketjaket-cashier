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
  renameFilenameWithAddedNanoid,
  nhost,
  getStorageFileUrlWImageTransform,
} from '../../../shared/utils';
import {TOAST_TEMPLATE} from '../../../shared/constants';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {DismissKeyboardWrapper, RHTextInput} from '../../../shared/components';
import {ButtonSave, ButtonBack} from '../../../components/Buttons';
import {useMyAppState} from '../../../state';
import {AppScreenProps} from '../index';
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
import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
import to from 'await-to-js';

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

interface IProfileScreenProps {}

const ProfileScreen = ({}: IProfileScreenProps) => {
  const navigation = useNavigation<AppScreenProps['Profile']['navigation']>();
  const route = useRoute<AppScreenProps['Profile']['route']>();
  const focused = useIsFocused();
  const toast = useToast();
  const myAppState = useMyAppState();
  const [isErrorOnce, setErrorOnce] = useState(false);
  const [isDataReady, setDataReady] = useState(false);
  const myUser = useMyUser();
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

  console.log(
    '🚀 ~ file: index.tsx ~ line 99 ~ ProfileScreen ~ myUser',
    myUser,
  );

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
      toast.show(TOAST_TEMPLATE.error('Kategori Produk tidak ditemukan.'));
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
        namedOperations.Query.User_GetAllUser,
        namedOperations.Query.User_GetUserById,
      ],
    });

  const handleSubmission = async (data: IDefaultValues) => {
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

      const [errUpload, resUpload] = await to(
        nhost.storage.upload({
          file: image,
          bucketId: 'avatarPhoto',
        }),
      );
      // console.log(
      //   '🚀 ~ file: index.tsx ~ line 180 ~ handleSubmission ~ errUpload',
      //   errUpload,
      // );
      // console.log(
      //   '🚀 ~ file: index.tsx ~ line 179 ~ handleSubmission ~ resUpload',
      //   resUpload,
      // );

      if (
        !errUpload &&
        resUpload?.fileMetadata?.id &&
        data.photo.currentAvatarFileId !== ''
      ) {
        const resdelete = await nhost.storage
          .delete({fileId: data.photo.currentAvatarFileId})
          .catch(error => {
            console.log(
              '🚀 ~ file: index.tsx ~ line 177 ~ handleSubmission - storage.delete ~ error',
              error,
            );
          });
        console.log(
          '🚀 ~ file: index.tsx ~ line 199 ~ handleSubmission ~ resdelete',
          resdelete,
        );
      }

      newAvatarFileId = resUpload?.fileMetadata?.id
        ? resUpload.fileMetadata.id
        : data.photo.currentAvatarFileId;
    } else {
      newAvatarFileId = data.photo.currentAvatarFileId;
    }

    if (!isDirty) {
      toast.show(TOAST_TEMPLATE.cancelled('Data user tidak ada yang diubah.'));
      return;
    }

    const [errUpdate, resUpdate] = await to(
      updateUserMutation({
        variables: {
          userId: myUser.id,
          updateUser: {
            avatarUrl: newAvatarFileId,
            displayName: data.display_name,
          },
        },
      }),
    );
    if (errUpdate) {
      toast.show(
        TOAST_TEMPLATE.error(`Gagal update user ${data.display_name}.`),
      );
    } else {
      await nhost.auth.refreshSession();
      toast.show(
        TOAST_TEMPLATE.success(`Berhasil update user ${data.display_name}.`),
      );
    }
  };

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
        // console.log(
        //   '🚀 ~ file: index.tsx ~ line 252 ~ getImageFromGallery ~ data',
        //   data,
        // );
        if (data?.assets) {
          const asset = data.assets[0] || {};
          setValue('photo.asset', asset, {shouldDirty: true});
        }
      },
    );
  };

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

                <RHTextInput
                  name="default_role"
                  control={control}
                  errors={errors}
                  label="Role"
                  isDisabled={true}
                />

                {userDataFetched ? (
                  <ChangeEmail current_email={userDataFetched.email} />
                ) : null}

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
                        : getStorageFileUrlWImageTransform({
                            fileUrl: myUser.avatarUrl,
                            w: 100,
                            q: 60,
                          }),
                    }}
                    disableErrorFallback={true}
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
              isLoading={_updateUserMutationResult.loading}
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
