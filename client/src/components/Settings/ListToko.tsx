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
import {useMyAppState} from '../../state';
import {SettingsScreenProps} from '../../screens/app/SettingsScreen';
import {TOAST_TEMPLATE} from '../../shared/constants';
import {useNavigation} from '@react-navigation/native';
import to from 'await-to-js';
import {checkErrorMessage} from '../../shared/utils';

interface IActionProps {
  id: number;
  handleDeleteToko: () => Promise<void>;
  navigation: SettingsScreenProps['ListToko']['navigation'];
}

const Action = ({id, navigation, handleDeleteToko}: IActionProps) => {
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
      <IconButtonDelete size="sm" onPress={() => handleDeleteToko()} />
    </HStack>
  );
};

interface ITokoHomeProps {}

const TokoHome = () => {
  const getAllToko = useStore_GetAllStoreQuery();
  const navigation =
    useNavigation<SettingsScreenProps['ListToko']['navigation']>();
  const toast = useToast();

  const [deleteStoreMutation, _deleteStoreMutationResult] =
    useStore_DeleteStoreByPkMutation({
      refetchQueries: [namedOperations.Query.Store_GetAllStore],
    });

  const data = useMemo(() => {
    const handleDeleteToko = async (id: number, name: string) => {
      const mutation = async () => {
        const [err, res] = await to(deleteStoreMutation({variables: {id}}));
        if (err || !res) {
          const fkError = checkErrorMessage.fkError(err.message)
            ? `\nMasih ada inventory di dalam toko ${name}.`
            : '';
          toast.show({
            ...TOAST_TEMPLATE.error(`Hapus toko ${name} gagal.${fkError}`),
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
    const temp = getAllToko.data?.stores || [];

    const withAction = temp.map(val => ({
      ...val,
      component: (
        <Action
          navigation={navigation}
          id={val.id}
          handleDeleteToko={async () => handleDeleteToko(val.id, val.name)}
        />
      ),
    }));

    return withAction;
  }, [
    // deleteStoreMutation,
    getAllToko.data?.stores,
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
          isLoading={getAllToko.loading} // || _deleteStoreMutationResult.loading
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
