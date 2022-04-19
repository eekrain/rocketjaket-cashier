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
} from '../../graphql/gql-generated';
import CustomTable from '../CustomTable';
import {useMemo} from 'react';
import {ButtonEdit, IconButtonDelete} from '../Buttons';
import {StackNavigationProp} from '@react-navigation/stack';
import {TOAST_TEMPLATE} from '../../shared/constants';
import {useMyAppState} from '../../state';
import {
  SettingsHomeNavProps,
  SettingsStackParamList,
} from '../../screens/app/SettingsScreen';

interface IActionProps {
  id: number;
  navigation: StackNavigationProp<SettingsStackParamList, 'ListToko'>;
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
          navigation.navigate('UpdateToko', {storeId: id});
        }}
      />
      <IconButtonDelete size="sm" onPress={() => handleDeleteKategori()} />
    </HStack>
  );
};

interface ITokoHomeProps extends SettingsHomeNavProps {}

const TokoHome = ({navigation}: ITokoHomeProps) => {
  const getAllToko = useStore_GetAllStoreQuery();
  const toast = useToast();

  const [deleteStoreMutation, _deleteStoreMutationResult] =
    useStore_DeleteStoreByPkMutation({
      refetchQueries: [namedOperations.Query.Store_GetAllStore],
    });

  const data = useMemo(() => {
    const handleDeleteKategori = async (id: number, name: string) => {
      const mutation = async () => {
        const res = await deleteStoreMutation({variables: {id}});
        if (res.errors) {
          toast.show({
            ...TOAST_TEMPLATE.error(`Hapus toko ${name} gagal.`),
          });
        } else {
          toast.show({
            ...TOAST_TEMPLATE.success(`Hapus toko ${name} berhasil.`),
          });
        }
      };
      Alert.alert(
        'Hapus Toko',
        `Toko ${name} akan dihapus. Lanjutkan?`,
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
    const temp = getAllToko.data?.rocketjaket_store || [];

    const withAction = temp.map(val => ({
      ...val,
      component: (
        <Action
          {...{
            id: val.id,
            navigation,
          }}
          handleDeleteKategori={() => handleDeleteKategori(val.id, val.name)}
        />
      ),
    }));

    return withAction;
  }, [
    deleteStoreMutation,
    getAllToko.data?.rocketjaket_store,
    navigation,
    toast,
  ]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={() => {
            getAllToko.refetch();
          }}
        />
      }>
      <Box paddingBottom={300}>
        <HStack
          justifyContent="space-between"
          alignItems="center"
          mb="10"
          mt="4">
          <Heading fontSize="xl">List Toko Terdaftar</Heading>
          <Button
            onPress={() => {
              navigation.navigate('CreateToko');
            }}
            size="lg"
            leftIcon={<Icon as={Feather} name="plus-square" size="sm" />}>
            Buat Baru
          </Button>
        </HStack>
        <CustomTable
          isLoading={getAllToko.loading || _deleteStoreMutationResult.loading}
          rowHeight={80}
          data={data}
          columns={[
            {Header: 'Nama Toko', accessor: 'name', widthRatio: 1},
            {Header: 'Alamat', accessor: 'address', widthRatio: 3},
            {
              Header: 'Aksi',
              accessor: 'component',
              widthRatio: 0.7,
              isAction: true,
            },
          ]}
        />
      </Box>
    </ScrollView>
  );
};

export default TokoHome;
