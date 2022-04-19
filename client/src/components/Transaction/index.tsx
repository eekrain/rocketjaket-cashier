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
  Badge,
} from 'native-base';
import {Alert, RefreshControl} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {
  ListProdukNavProps,
  ProductStackParamList,
} from '../../screens/app/ProdukScreen';
import {
  namedOperations,
  Rocketjaket_Transaction_Status_Enum_Enum,
  useProduk_DeleteProdukByPkMutation,
  useStore_GetAllStoreQuery,
  useStore_GetStoreByPkQuery,
  useTransaction_GetAllTransactionByStoreIdQuery,
} from '../../graphql/gql-generated';
import CustomTable from '../CustomTable';
import {useMemo} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {IconButtonDelete, ButtonEdit} from '../Buttons';
import {myNumberFormat, storage, useNhostAuth} from '../../shared/utils';
import {useMyAppState} from '../../state';
import {TOAST_TEMPLATE} from '../../shared/constants';
import withAppLayout from '../Layout/AppLayout';
import {useForm} from 'react-hook-form';
import {UserRolesEnum} from '../../types/user';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {RHSelect} from '../../shared/components';
import {
  ListTransactionNavProps,
  TransactionRootStackParamList,
} from '../../screens/app/TransactionScreen';
import dayjs from 'dayjs';

export interface IDefaultValues {
  show_modal_change_toko: boolean;
  store_id: string | null;
}

const defaultValues: IDefaultValues = {
  show_modal_change_toko: false,
  store_id: null,
};

interface IActionProps {
  invoice_number: string;
  navigation: ListTransactionNavProps['navigation'];
}

const Action = ({invoice_number, navigation}: IActionProps) => {
  const myAppState = useMyAppState();
  return (
    <HStack space="3">
      <ButtonEdit
        size="sm"
        onPress={() => {
          myAppState.setLoadingWholePage(true);
          navigation.navigate('UpdateTransaction', {
            transaction_invoice_number: invoice_number,
          });
        }}
      />
    </HStack>
  );
};

interface Props extends ListTransactionNavProps {}

const Produk = ({navigation}: Props) => {
  const nhostAuth = useNhostAuth();
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
    const data = getAllStore.data?.rocketjaket_store || [];
    return data.map(store => ({label: store.name, value: store.id.toString()}));
  }, [getAllStore.data?.rocketjaket_store]);

  const getStoreActive = useStore_GetStoreByPkQuery({
    variables: {
      id: parseInt(selectedStoreId || '0', 10),
    },
  });
  const dataStoreActive = useMemo(() => {
    return getStoreActive.data?.rocketjaket_store_by_pk;
  }, [getStoreActive.data?.rocketjaket_store_by_pk]);

  const getAllTransaction = useTransaction_GetAllTransactionByStoreIdQuery({
    variables: {
      store_id: nhostAuth.user.store_id,
    },
  });

  const [deleteProdukMutation, _deleteProdukMutationResult] =
    useProduk_DeleteProdukByPkMutation({
      refetchQueries: [namedOperations.Query.Produk_GetAllProduk],
    });

  const allTransaction = useMemo(() => {
    const temp = getAllTransaction.data?.rocketjaket_transaction || [];

    const withComponent = temp.map(transaction => ({
      ...transaction,
      handled_by: transaction.user.display_name,
      total_transaction: myNumberFormat.rp(transaction.total_transaction),
      profit: myNumberFormat.rp(
        transaction.transaction_items.reduce(
          (prevVal: number, currentVal) => prevVal + currentVal.profit,
          0,
        ),
      ),
      created_at: dayjs(transaction?.created_at).format('D/M/YYYY H:mm'),
      transaction_status: (
        <Badge
          colorScheme={
            transaction.transaction_status_enum.transaction_status ===
            Rocketjaket_Transaction_Status_Enum_Enum.Success
              ? 'success'
              : transaction.transaction_status_enum.transaction_status ===
                  Rocketjaket_Transaction_Status_Enum_Enum.Failed ||
                transaction.transaction_status_enum.transaction_status ===
                  Rocketjaket_Transaction_Status_Enum_Enum.Refund
              ? 'danger'
              : 'warning'
          }>
          {transaction.transaction_status_enum.title}
        </Badge>
      ),
      action: (
        <Action
          invoice_number={transaction.invoice_number}
          navigation={navigation}
        />
      ),
    }));
    return withComponent;
  }, [getAllTransaction.data?.rocketjaket_transaction, navigation]);

  useEffect(() => {
    if (
      nhostAuth?.user?.role &&
      nhostAuth?.user?.role === UserRolesEnum.administrator &&
      !selectedStoreId
    ) {
      setValue('show_modal_change_toko', true);
    } else if (
      nhostAuth?.user?.role &&
      nhostAuth?.user?.role === UserRolesEnum.administrator &&
      selectedStoreId
    ) {
      setValue('show_modal_change_toko', false);
    }
    if (!isDataStoreReady) {
      console.log(
        '🚀 ~ file: index.tsx ~ line 227 ~ useEffect ~ nhostAuth.user.store_id',
        nhostAuth.user.store_id,
      );
      if (nhostAuth.user.store_id) {
        setValue('store_id', nhostAuth?.user?.store_id.toString());
        setDataStoreReady(true);
      } else if (
        nhostAuth?.user?.role &&
        nhostAuth?.user?.role !== UserRolesEnum.administrator
      ) {
        Alert.alert(
          'Akun Anda Belum Terdaftar',
          'Akun anda belum terdaftar di store manapun! Silahkan kontak owner / admin untuk mendaftarkan akun anda ke penempatan toko sesuai.',
        );
      }
    }
  }, [
    isDataStoreReady,
    nhostAuth.user?.role,
    nhostAuth.user.store_id,
    selectedStoreId,
    setValue,
  ]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={() => {
            getAllTransaction.refetch();
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
        <HStack alignItems="center" mb="10">
          <HStack space="4" alignItems="center">
            <Heading fontSize="xl">
              List Semua Transaksi di Toko {dataStoreActive?.name}
            </Heading>
            {nhostAuth?.user?.role === UserRolesEnum.administrator && (
              <Button
                onPress={() => setValue('show_modal_change_toko', true)}
                size="sm"
                leftIcon={<Icon as={FeatherIcon} name="home" size="xs" />}>
                Ganti Toko
              </Button>
            )}
          </HStack>
        </HStack>

        <CustomTable
          isLoading={
            getAllTransaction.loading || _deleteProdukMutationResult.loading
          }
          data={allTransaction}
          headerHeight={90}
          rowHeight={70}
          defaultSortFrom="desc"
          columns={[
            {
              Header: 'Invoice',
              accessor: 'invoice_number',
              widthRatio: 1,
              isDisableSort: true,
            },
            {
              Header: 'Dibuat',
              accessor: 'created_at',
              widthRatio: 1,
            },
            {
              Header: 'Total Transaksi',
              accessor: 'total_transaction',
              widthRatio: 1,
            },
            {
              Header: 'Profit',
              accessor: 'profit',
              widthRatio: 1,
            },
            {Header: 'Diproses Oleh', accessor: 'handled_by', widthRatio: 1},
            {Header: 'Status', accessor: 'transaction_status', widthRatio: 1},
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
