/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {
  Box,
  Heading,
  HStack,
  Button,
  Icon,
  useToast,
  ScrollView,
  Modal,
} from 'native-base';
import {Alert, RefreshControl} from 'react-native';
import {
  useOperationalCost_GetAllCostByStoreQuery,
  useStore_GetAllStoreQuery,
  useStore_GetStoreByPkQuery,
} from '../../graphql/gql-generated';
import CustomTable, {CustomTableColumn} from '../CustomTable';
import {useMemo} from 'react';
import {ButtonEdit} from '../Buttons';
import {myNumberFormat, useMyUser} from '../../shared/utils';
import {useMyAppState} from '../../state';
import withAppLayout from '../Layout/AppLayout';
import {useForm} from 'react-hook-form';
import {UserRolesEnum} from '../../types/user';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {RHSelect} from '../../shared/components';
import dayjs from 'dayjs';
import {
  ListOperationalCostNavProps,
  OperationalCostScreenScreenProps,
} from '../../screens/app/OperationalCostScreen';

export interface IDefaultValues {
  show_modal_change_toko: boolean;
  store_id: string | null;
}

const defaultValues: IDefaultValues = {
  show_modal_change_toko: false,
  store_id: null,
};

interface IActionProps {
  id: number;
  navigation: ListOperationalCostNavProps['navigation'];
}

const Action = ({id, navigation}: IActionProps) => {
  const myAppState = useMyAppState();
  return (
    <HStack space="3">
      <ButtonEdit
        size="sm"
        onPress={() => {
          myAppState.setLoadingWholePage(true);
          navigation.navigate('UpdateOperationalCost', {
            operationalCostId: id,
          });
        }}
      />
    </HStack>
  );
};

interface Props extends ListOperationalCostNavProps {}

const Produk = ({navigation}: Props) => {
  const myUser = useMyUser();
  const toast = useToast();
  const [isDataStoreReady, setDataStoreReady] = useState(false);

  const {
    watch,
    control,
    setValue,
    formState: {errors},
  } = useForm({
    defaultValues,
  });
  const selectedStoreId = watch('store_id');

  const getAllStore = useStore_GetAllStoreQuery();
  const storeSelectOptions = useMemo(() => {
    const data = getAllStore.data?.stores || [];
    return data.map(store => ({label: store.name, value: store.id.toString()}));
  }, [getAllStore.data?.stores]);

  const getStoreActive = useStore_GetStoreByPkQuery({
    variables: {
      id: parseInt(selectedStoreId || '0', 10),
    },
  });
  const dataStoreActive = useMemo(() => {
    return getStoreActive.data?.stores_by_pk;
  }, [getStoreActive.data?.stores_by_pk]);

  const getAllOperationalCost = useOperationalCost_GetAllCostByStoreQuery({
    variables: {
      store_id: myUser.store_id,
    },
  });

  // const [deleteProdukMutation, _deleteProdukMutationResult] =
  //   useProduk_DeleteProdukByPkMutation({
  //     refetchQueries: [namedOperations.Query.Produk_GetAllProduk],
  //   });

  const allOperationalCost = useMemo(() => {
    const temp = getAllOperationalCost.data?.operational_costs || [];

    const withComponent = temp.map(operational => ({
      ...operational,
      handled_by: operational.karyawan_name,
      cost: myNumberFormat.rp(operational.cost),
      created_at: dayjs(operational?.created_at).format('D/M/YYYY H:mm'),
      action: <Action id={operational.id} navigation={navigation} />,
    }));
    return withComponent;
  }, [getAllOperationalCost.data?.operational_costs, navigation]);

  useEffect(() => {
    if (
      myUser.roles.includes(UserRolesEnum.administrator) &&
      !selectedStoreId
    ) {
      setValue('show_modal_change_toko', true);
    } else if (
      myUser.roles.includes(UserRolesEnum.administrator) &&
      selectedStoreId
    ) {
      setValue('show_modal_change_toko', false);
    }
    if (!isDataStoreReady) {
      console.log(
        '🚀 ~ file: index.tsx ~ line 227 ~ useEffect ~ nhostAuth.user.store_id',
        myUser.store_id,
      );
      if (myUser.store_id) {
        setValue('store_id', myUser.store_id.toString());
        setDataStoreReady(true);
      } else if (!myUser.roles.includes(UserRolesEnum.administrator)) {
        Alert.alert(
          'Akun Anda Belum Terdaftar',
          'Akun anda belum terdaftar di store manapun! Silahkan kontak owner / admin untuk mendaftarkan akun anda ke penempatan toko sesuai.',
        );
      }
    }
  }, [
    isDataStoreReady,
    myUser.roles,
    myUser.store_id,
    selectedStoreId,
    setValue,
  ]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={() => {
            getAllOperationalCost.refetch();
          }}
        />
      }>
      <Modal
        isOpen={watch('show_modal_change_toko')}
        onClose={() => setValue('show_modal_change_toko', false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Pilih Toko</Modal.Header>
          <Box p="3">
            <RHSelect
              selectOptions={storeSelectOptions}
              control={control}
              errors={errors}
              name="store_id"
              label="Toko"
            />
          </Box>
        </Modal.Content>
      </Modal>
      <Box w="full" paddingBottom={300}>
        <HStack justifyContent="space-between" alignItems="center" mb="10">
          <HStack space="4" alignItems="center">
            <Heading fontSize="xl">
              List Semua Biaya Operasional di Toko {dataStoreActive?.name}
            </Heading>
            {myUser.roles.includes(UserRolesEnum.administrator) && (
              <Button
                onPress={() => setValue('show_modal_change_toko', true)}
                size="sm"
                leftIcon={<Icon as={FeatherIcon} name="home" size="xs" />}>
                Ganti Toko
              </Button>
            )}
          </HStack>

          <Button
            onPress={() => {
              navigation.navigate('CreateOperationalCost', {
                storeId: parseInt(watch().store_id || '0', 10),
              });
            }}
            size="lg"
            leftIcon={<Icon as={FeatherIcon} name="plus-square" size="sm" />}>
            Buat Baru
          </Button>
        </HStack>

        <CustomTable
          isLoading={
            getAllOperationalCost.loading // || _deleteProdukMutationResult.loading
          }
          keyAccessor="id"
          data={allOperationalCost}
          headerHeight={90}
          rowHeight={70}
          defaultSortFrom="desc"
          columns={[
            {
              Header: 'Alasan',
              accessor: 'reason',
              widthRatio: 1,
              isDisableSort: true,
            },
            {
              Header: 'Dibuat',
              accessor: 'created_at',
              widthRatio: 1,
            },
            {
              Header: 'Biaya',
              accessor: 'cost',
              widthRatio: 1,
            },
            {
              Header: 'Diproses Oleh',
              accessor: 'karyawan_name',
              widthRatio: 1,
              isSkip: !myUser.roles.includes(UserRolesEnum.administrator),
            },
            {
              Header: 'Aksi',
              accessor: 'action',
              widthRatio: 1,
              isAction: true,
              isDisableSort: true,
            },
          ]}
        />
      </Box>
    </ScrollView>
  );
};

export default withAppLayout(Produk);
