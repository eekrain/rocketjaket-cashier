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
  useUser_BulkUpdateUserByUserIdMutation,
  useUser_GetUserByIdQuery,
} from '../../../graphql/gql-generated';
import * as yup from 'yup';
import {
  auth,
  getStorageFileUrlWImageTransform,
  getXHasuraContextHeader,
  renameFilenameWithAddedNanoid,
  storage,
  useNhostAuth,
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

interface IDefaultValues {
  display_name: string;
  photo: {
    current_avatar_url: string;
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
  photo: {current_avatar_url: ''},
  default_role: '',
};

interface IProfileScreenProps extends ProfileRootNavProps {}

const ProfileScreen = ({route, navigation}: IProfileScreenProps) => {
  const focused = useIsFocused();
  const toast = useToast();
  const myAppState = useMyAppState();
  const [isErrorOnce, setErrorOnce] = useState(false);
  const [isDataReady, setDataReady] = useState(false);
  const nhostAuth = useNhostAuth();
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
    '🚀 ~ file: index.tsx ~ line 99 ~ ProfileScreen ~ nhostAuth.user.userId',
    nhostAuth.user.userId,
  );
  const getDataUser = useUser_GetUserByIdQuery({
    variables: {id: nhostAuth.user.userId},
    fetchPolicy: 'network-only',
  });

  const dataUserFetched = useMemo(() => {
    const dataUser = getDataUser.data?.users_by_pk;
    return dataUser;
  }, [getDataUser.data?.users_by_pk]);

  useEffect(() => {
    myAppState.setLoadingWholePage(getDataUser.loading);
  }, [getDataUser.loading, myAppState]);

  useEffect(() => {
    if (dataUserFetched === null && !isErrorOnce) {
      toast.show({
        ...TOAST_TEMPLATE.error('Kategori Produk tidak ditemukan.'),
      });
      navigation.goBack();
      setErrorOnce(true);
    } else if (dataUserFetched !== null && !isDataReady && !isErrorOnce) {
      if (dataUserFetched) {
        setValue('display_name', dataUserFetched.display_name || '');
        setValue('photo', {
          current_avatar_url: dataUserFetched.avatar_url || '',
        });
        setValue('default_role', dataUserFetched.account?.default_role || '');
        setDataReady(true);
      }
    }
  }, [
    dataUserFetched,
    getDataUser,
    isDataReady,
    isErrorOnce,
    navigation,
    setValue,
    toast,
  ]);

  const [updateUserMutation, _updateUserMutationResult] =
    useUser_BulkUpdateUserByUserIdMutation({
      ...getXHasuraContextHeader({role: 'me', withUserId: true}),
      refetchQueries: [
        namedOperations.Query.User_GetAllUser,
        namedOperations.Query.User_GetUserById,
      ],
    });

  const handleSubmission = async (data: IDefaultValues) => {
    console.log(
      '🚀 ~ file: index.tsx ~ line 150 ~ handleSubmission ~ data',
      data,
    );
    let photo_url = '';
    if (data?.photo?.asset?.uri) {
      const finalFileName = renameFilenameWithAddedNanoid(
        dataUserFetched?.id as string,
        data?.photo?.asset?.uri,
      );
      const image = {
        type: data?.photo?.asset.type,
        uri: data?.photo?.asset.uri,
        name: finalFileName.modifiedName,
      };

      const res = await storage
        .put(`/user/photo/${finalFileName.modifiedName}`, image)
        .catch(error => {
          console.log(
            '🚀 ~ file: index.tsx ~ line 170 ~ handleSubmission - storage.put ~ error',
            error,
          );
        });

      if (res?.key && data.photo.current_avatar_url !== '') {
        nhostAuth.updateUserData({photoURL: res?.key});
        await storage
          .delete(`/${data.photo.current_avatar_url}`)
          .catch(error => {
            console.log(
              '🚀 ~ file: index.tsx ~ line 177 ~ handleSubmission - storage.delete ~ error',
              error,
            );
          });
      }
      photo_url = res?.key ? res.key : 'error key undefined';
    } else {
      photo_url = data.photo.current_avatar_url;
    }

    if (!isDirty) {
      toast.show({
        ...TOAST_TEMPLATE.cancelled('Data user tidak ada yang diubah.'),
      });
      return;
    }
    const res = await updateUserMutation({
      variables: {
        user_id: nhostAuth.user.userId,
        update_user: {
          avatar_url: photo_url,
          display_name: data.display_name,
        },
      },
    });
    if (res.errors) {
      toast.show({
        ...TOAST_TEMPLATE.error(
          `Gagal update user ${res.data?.update_users_by_pk?.display_name}.`,
        ),
      });
    } else {
      nhostAuth.updateUserData({
        displayName: data.display_name,
      });
      toast.show({
        ...TOAST_TEMPLATE.success(
          `Berhasil update user ${res.data?.update_users_by_pk?.display_name}.`,
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
  }, [reset, isSubmitSuccessful, getDataUser.client, navigation]);
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
                {dataUserFetched ? (
                  <ChangeEmail current_email={dataUserFetched.account?.email} />
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
                        : getStorageFileUrlWImageTransform({
                            fileKey: userPhoto.current_avatar_url,
                            w: 150,
                            q: 60,
                          }),
                      headers: {
                        authorization: `Bearer ${auth.getJWTToken()}`,
                      },
                    }}
                    fallbackText={dataUserFetched?.display_name || ''}
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
