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
  useBreakpointValue,
  IStackProps,
  Stack,
} from 'native-base';
import {Alert, RefreshControl} from 'react-native';
import {
  useOperationalCost_GetAllCostByStoreQuery,
  useStore_GetAllStoreQuery,
} from '../../graphql/gql-generated';
import CustomTable from '../CustomTable';
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
import {ListOperationalCostNavProps} from '../../screens/app/OperationalCostScreen';

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

const OperationalCostHome = ({navigation}: Props) => {
  const flexDirHeader: IStackProps['direction'] = useBreakpointValue({
    base: 'column',
    md: 'row',
  });
  const showWhenSm: boolean = useBreakpointValue({
    base: true,
    md: false,
  });
  const showWhenMd: boolean = useBreakpointValue({
    base: false,
    md: true,
  });
  const tableWidth: number | 'full' = useBreakpointValue({
    base: 900,
    md: 'full',
  });

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
  const [selectedStoreName, setSelectedStoreName] = useState('');
  console.log(
    '🚀 ~ file: index.tsx ~ line 83 ~ OperationalCostHome ~ selectedStoreId',
    selectedStoreId,
  );

  const getAllStore = useStore_GetAllStoreQuery();
  const storeSelectOptions = useMemo(() => {
    const data = getAllStore.data?.stores || [];
    return data.map(store => ({label: store.name, value: store.id.toString()}));
  }, [getAllStore.data?.stores]);

  const getAllOperationalCost = useOperationalCost_GetAllCostByStoreQuery({
    variables: {
      store_id: myUser.store_id,
    },
  });
  console.log(
    '🚀 ~ file: index.tsx ~ line 104 ~ OperationalCostHome ~ getAllOperationalCost.error',
    getAllOperationalCost.error,
  );
  console.log(
    '🚀 ~ file: index.tsx ~ line 104 ~ OperationalCostHome ~ getAllOperationalCost.data',
    getAllOperationalCost.data,
  );

  // const [deleteOperationalCostHomeMutation, _deleteOperationalCostHomeMutationResult] =
  //   useOperationalCostHome_DeleteOperationalCostHomeByPkMutation({
  //     refetchQueries: [namedOperations.Query.OperationalCostHome_GetAllOperationalCostHome],
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
    if (myUser.roles.includes(UserRolesEnum.administrator) && selectedStoreId) {
      myUser.updateStoreId(parseInt(selectedStoreId, 10));
    }
    if (
      myUser.roles.includes(UserRolesEnum.administrator) &&
      !selectedStoreId
    ) {
      setValue('show_modal_change_toko', true);
    }
    if (myUser.roles.includes(UserRolesEnum.administrator) && selectedStoreId) {
      setValue('show_modal_change_toko', false);
    }
  }, [myUser.roles, selectedStoreId]);

  useEffect(() => {
    if (!isDataStoreReady && myUser.store_id) {
      setValue('store_id', myUser.store_id.toString());
      setDataStoreReady(true);
    } else if (
      isDataStoreReady &&
      !myUser.roles.includes(UserRolesEnum.administrator) &&
      !myUser.store_id
    ) {
      Alert.alert(
        'Akun Anda Belum Terdaftar',
        'Akun anda belum terdaftar di store manapun! Silahkan kontak owner / admin untuk mendaftarkan akun anda ke penempatan toko sesuai.',
      );
    }
  }, [
    isDataStoreReady,
    myUser.roles,
    myUser.store_id,
    selectedStoreId,
    setValue,
  ]);

  useEffect(() => {
    const found = storeSelectOptions.find(val => val.value === selectedStoreId);
    setSelectedStoreName(found?.label || '');
  }, [selectedStoreId, storeSelectOptions]);
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
        <Stack
          direction={flexDirHeader}
          justifyContent="space-between"
          alignItems={{base: 'flex-start', md: 'center'}}
          space={{base: '4', md: undefined}}
          mb="10">
          <HStack space="4" alignItems="center">
            <Heading fontSize="xl">
              List Semua Biaya Operasional di Toko {selectedStoreName}
            </Heading>
            {myUser.roles.includes(UserRolesEnum.administrator) && showWhenMd && (
              <Button
                onPress={() => setValue('show_modal_change_toko', true)}
                size="sm"
                leftIcon={<Icon as={FeatherIcon} name="home" size="xs" />}>
                Ganti Toko
              </Button>
            )}
          </HStack>

          <HStack
            justifyContent={'space-between'}
            w={{base: 'full', md: undefined}}>
            {myUser.roles.includes(UserRolesEnum.administrator) && showWhenSm && (
              <Button
                onPress={() => setValue('show_modal_change_toko', true)}
                size="sm"
                leftIcon={<Icon as={FeatherIcon} name="home" size="xs" />}>
                Ganti Toko
              </Button>
            )}
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
        </Stack>

        <CustomTable
          isLoading={
            getAllOperationalCost.loading // || _deleteOperationalCostHomeMutationResult.loading
          }
          tableSettings={{
            mainSettings: {
              tableWidth,
              defaultSortFrom: 'desc',
            },
          }}
          rowKeysAccessor="id"
          data={allOperationalCost}
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

export default withAppLayout(OperationalCostHome);
