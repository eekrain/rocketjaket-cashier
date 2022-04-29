/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  Box,
  Heading,
  HStack,
  Button,
  Icon,
  useToast,
  ScrollView,
} from 'native-base';
import {Alert, RefreshControl} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {
  useStore_GetAllStoreQuery,
  useStore_DeleteStoreByPkMutation,
  namedOperations,
  useUser_GetAllUserQuery,
  useUser_BulkDeleteOneUserMutation,
} from '../../graphql/gql-generated';
import CustomTable from '../CustomTable';
import {useMemo} from 'react';
import {ButtonEdit, IconButtonDelete} from '../Buttons';
import {StackNavigationProp} from '@react-navigation/stack';
import {TOAST_TEMPLATE} from '../../shared/constants';
import {useMyAppState} from '../../state';
import withAppLayout from '../Layout/AppLayout';
import {
  ListUserNavProps,
  UserRootStackParamList,
} from '../../screens/app/UserScreen';
import {MyAvatar} from '../../shared/components';
import {
  getStorageFileUrlWImageTransform,
  getXHasuraContextHeader,
  storage,
} from '../../shared/utils';
import {
  PossibleDefaultRoleUser,
  UserRolesEnum,
  UserRoleValues,
} from '../../types/user';

interface IActionProps {
  id: string;
  navigation: StackNavigationProp<UserRootStackParamList, 'ListUser'>;
  handleDeleteKategori: () => Promise<void>;
}

const Action = ({id, navigation, handleDeleteKategori}: IActionProps) => {
  const myAppState = useMyAppState();

  return (
    <HStack space="3">
      <ButtonEdit
        size="sm"
        onPress={() => {
          myAppState.setLoadingWholePage(true);
          navigation.navigate('UpdateUser', {userId: id});
        }}
      />
      <IconButtonDelete size="sm" onPress={() => handleDeleteKategori()} />
    </HStack>
  );
};

interface IUserHomeProps extends ListUserNavProps {}

const UserHome = ({navigation}: IUserHomeProps) => {
  const getAllUser = useUser_GetAllUserQuery();
  const toast = useToast();

  const [deleteUser, _deleteUserResult] = useUser_BulkDeleteOneUserMutation({
    ...getXHasuraContextHeader({role: 'administrator'}),
    refetchQueries: [
      namedOperations.Query.User_GetAllUser,
      namedOperations.Query.User_GetUserById,
    ],
  });

  const data = useMemo(() => {
    const handleDeleteUser = async (
      account_id: string,
      user_id: string,
      name: string,
      avatar_url: string,
    ) => {
      const mutation = async () => {
        if (avatar_url && avatar_url !== '') {
          await storage.delete(`/${avatar_url}`).catch(error => {
            console.log(
              '🚀 ~ file: index.tsx ~ line 108 ~ mutation - storage.delete ~ error',
              error,
            );
          });
        }
        const res = await deleteUser({variables: {account_id, user_id}}).catch(
          error => {
            console.log(
              '🚀 ~ file: index.tsx ~ line 88 ~ mutation ~ error',
              error,
            );
          },
        );
        if (res && res.errors) {
          toast.show({
            ...TOAST_TEMPLATE.error(`Hapus pengguna ${name} gagal.`),
          });
        } else {
          toast.show({
            ...TOAST_TEMPLATE.success(`Hapus pengguna ${name} berhasil.`),
          });
        }
      };
      Alert.alert(
        'Hapus Pengguna',
        `Pengguna dengan nama ${name} akan dihapus. Lanjutkan?`,
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            onPress: () => mutation(),
            text: 'Hapus',
            style: 'destructive',
          },
        ],
        {
          cancelable: true,
        },
      );
    };
    const temp = getAllUser.data?.users || [];

    const withAction = temp.map(val => ({
      ...val,
      ...val.account,
      default_role: PossibleDefaultRoleUser.includes(
        val.account?.default_role as UserRolesEnum,
      )
        ? val.account?.default_role
        : null,
      store_name:
        val.account?.default_role !== UserRolesEnum.administrator
          ? val.store?.name || ''
          : '',
      photo: (
        <MyAvatar
          size={50}
          source={{
            uri: getStorageFileUrlWImageTransform({
              fileKey: val.avatar_url,
              w: 100,
              q: 60,
            }),
          }}
          fallbackText={val?.display_name || ''}
        />
      ),
      component: (
        <Action
          {...{
            id: val.id,
            navigation,
          }}
          handleDeleteKategori={() =>
            handleDeleteUser(
              val.account?.id,
              val.id,
              val.display_name || '',
              val.avatar_url || '',
            )
          }
        />
      ),
    }));

    return withAction;
  }, [deleteUser, getAllUser.data?.users, navigation, toast]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={() => {
            getAllUser.refetch();
          }}
        />
      }>
      <Box paddingBottom={300}>
        <HStack
          justifyContent="space-between"
          alignItems="center"
          mb="10"
          mt="4">
          <Heading fontSize="xl">List Pengguna Terdaftar</Heading>
          <Button
            onPress={() => {
              navigation.navigate('CreateUser');
            }}
            size="lg"
            leftIcon={<Icon as={Feather} name="plus-square" size="sm" />}>
            Buat Baru
          </Button>
        </HStack>
        <CustomTable
          isLoading={getAllUser.loading || _deleteUserResult.loading}
          rowHeight={80}
          data={data}
          columns={[
            {
              Header: '',
              accessor: 'photo',
              widthRatio: 0.5,
              isAvatar: true,
              isDisableSort: true,
            },
            {Header: 'Nama', accessor: 'display_name', widthRatio: 1},
            {Header: 'Email', accessor: 'email', widthRatio: 1},
            {Header: 'Role', accessor: 'default_role', widthRatio: 1},
            {Header: 'Toko', accessor: 'store_name', widthRatio: 1},
            {
              Header: 'Aksi',
              accessor: 'component',
              widthRatio: 0.7,
              isDisableSort: true,
              isAction: true,
            },
          ]}
        />
      </Box>
    </ScrollView>
  );
};

export default withAppLayout(UserHome);
