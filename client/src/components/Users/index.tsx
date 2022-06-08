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
  namedOperations,
  useUser_DeleteUserMutation,
  useUser_GetAllUserQuery,
} from '../../graphql/gql-generated';
import CustomTable from '../CustomTable';
import {useMemo} from 'react';
import {ButtonEdit, IconButtonDelete} from '../Buttons';
import {useMyAppState} from '../../state';
import withAppLayout from '../Layout/AppLayout';
import {MyAvatar} from '../../shared/components';
import {PossibleDefaultRoleUser, UserRolesEnum} from '../../types/user';
import {UserScreenProps} from '../../screens/app/UserScreen';
import {useNavigation} from '@react-navigation/native';
import {getXHasuraContextHeader, nhost} from '../../shared/utils';
import to from 'await-to-js';
import {TOAST_TEMPLATE} from '../../shared/constants';

interface IActionProps {
  id: string;
  handleDeleteUser: () => Promise<void>;
}

const Action = ({id, handleDeleteUser}: IActionProps) => {
  // console.log('🚀 ~ file: index.tsx ~ line 31 ~ Action ~ id', id);
  const myAppState = useMyAppState();
  const navigation = useNavigation<UserScreenProps['ListUser']['navigation']>();

  return (
    <HStack space="3">
      <ButtonEdit
        size="sm"
        onPress={() => {
          myAppState.setLoadingWholePage(true);
          navigation.navigate('UpdateUser', {userId: id});
        }}
      />
      <IconButtonDelete size="sm" onPress={() => handleDeleteUser()} />
    </HStack>
  );
};

interface IUserHomeProps {}

const UserHome = ({}: IUserHomeProps) => {
  const toast = useToast();
  const navigation = useNavigation<UserScreenProps['ListUser']['navigation']>();

  const [deleteUser, _deleteUserResult] = useUser_DeleteUserMutation({
    ...getXHasuraContextHeader({role: 'administrator'}),
    refetchQueries: [
      namedOperations.Query.User_GetAllUser,
      namedOperations.Query.User_GetUserById,
    ],
  });

  const getAllUser = useUser_GetAllUserQuery();

  const data = useMemo(() => {
    const handleDeleteUser = async (
      user_id: string,
      name: string,
      avatarFileId: string,
    ) => {
      const mutation = async () => {
        if (avatarFileId && avatarFileId !== '') {
          await nhost.storage.delete({fileId: avatarFileId}).catch(error => {
            console.log(
              '🚀 ~ file: index.tsx ~ line 108 ~ mutation - storage.delete ~ error',
              error,
            );
          });
        }
        const [err, res] = await to(
          deleteUser({variables: {id: user_id}}).catch(error => {
            console.log(
              '🚀 ~ file: index.tsx ~ line 88 ~ mutation ~ error',
              error,
            );
          }),
        );
        if (err && !res) {
          toast.show(TOAST_TEMPLATE.error(`Hapus pengguna ${name} gagal.`));
        } else {
          toast.show(
            TOAST_TEMPLATE.success(`Hapus pengguna ${name} berhasil.`),
          );
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
    // console.log('🚀 ~ file: index.tsx ~ line 118 ~ data ~ temp', temp);

    const withAction = temp.map(val => ({
      ...val,
      // ...val.account,
      default_role: PossibleDefaultRoleUser.includes(
        val.defaultRole as UserRolesEnum,
      )
        ? val.defaultRole
        : null,
      store_name:
        val.defaultRole !== UserRolesEnum.administrator
          ? val.users_metadata?.[0]?.stores?.name || ''
          : '',
      photo: (
        <MyAvatar
          size={50}
          bgColor="white"
          fallbackText={val?.displayName || ''}
        />
      ),
      component: (
        <Action
          id={val.id}
          handleDeleteUser={() =>
            handleDeleteUser(val.id, val.displayName, val.avatarUrl)
          }
        />
      ),
    }));

    return withAction;
  }, [getAllUser.data?.users, toast]); // deleteUser

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
          isLoading={getAllUser.loading} //  || _deleteUserResult.loading
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
            {Header: 'Nama', accessor: 'displayName', widthRatio: 1},
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
