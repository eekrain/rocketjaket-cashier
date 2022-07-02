import React, {useMemo} from 'react';
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Icon,
  IconButton,
  ScrollView,
  Text,
  useBreakpointValue,
} from 'native-base';
import {RefreshControl} from 'react-native';
import dayjs from 'dayjs';
import {
  useAttendance_GetAllAttendancesQuery,
  useAttendance_GetAttendancesByUserQuery,
} from '../../graphql/gql-generated';
import {useForm} from 'react-hook-form';
import Feather from 'react-native-vector-icons/Feather';
import CustomTable from '../CustomTable';
import {getStorageFileUrlWImageTransform} from '../../shared/utils';
import {MyAvatar} from '../../shared/components';

interface IDefaultValues {
  startDate: string;
  untilDate: string;
}

const defaultValues = (): IDefaultValues => {
  const now = dayjs();
  return {
    startDate: now.startOf('M').toISOString(),
    untilDate: now.endOf('M').toISOString(),
  };
};

interface IListAbsensiByUserProps {}
export const ListAbsensiAll = ({}: IListAbsensiByUserProps) => {
  const tableWidth: number | 'full' = useBreakpointValue({
    base: 700,
    md: 'full',
  });
  const {
    handleSubmit,
    control,
    formState: {errors},
    reset,
    setValue,
    watch,
  } = useForm({
    defaultValues: defaultValues(),
  });
  const startDate = watch().startDate;
  const untilDate = watch().untilDate;

  const tes = {
    startDate: dayjs('2022-07-01T10:58:25.663646+00:00').toISOString(),
    untilDate: dayjs(untilDate).format('D/M/YYYY H:mm:ss'),
  };
  console.log(
    '🚀 ~ file: ListAbsensiByUser.tsx ~ line 50 ~ ListAbsensiByUser ~ tes',
    tes,
  );

  const getAllAttendances = useAttendance_GetAllAttendancesQuery({
    variables: {
      startDate: startDate,
      untilDate: untilDate,
    },
  });

  const attendancesData = useMemo(() => {
    const list =
      getAllAttendances.data?.attendance.map(val => ({
        id: val.id,
        name: val.user.displayName,
        store_name: val.user.users_metadata?.[0].stores?.name || '',
        photo_url: val.photo_file_id
          ? getStorageFileUrlWImageTransform({fileId: val.photo_file_id, q: 60})
          : '',
        photo: (
          <MyAvatar
            size={50}
            source={{fileId: val.photo_file_id, q: 60}}
            fallbackText={val.user.displayName}
          />
        ),
        created_at_formatted: dayjs(val.created_at).format('D/M/YYYY H:mm'),
        created_at_unix: dayjs(val.created_at).unix(),
      })) || [];
    const min_created_at =
      getAllAttendances.data?.attendance_aggregate.aggregate?.min?.created_at;
    const isCanBackwards = min_created_at
      ? dayjs(min_created_at).isBefore(dayjs(startDate))
      : false;
    // const isCanBackwards = true;
    const isCanForwards = dayjs().endOf('M').isAfter(dayjs(untilDate));

    return {list, isCanBackwards, isCanForwards};
  }, [
    getAllAttendances.data?.attendance,
    getAllAttendances.data?.attendance_aggregate,
    startDate,
    untilDate,
  ]);

  const handleBackwards = () => {
    if (attendancesData.isCanBackwards) {
      console.log('mundur');
      const ref = dayjs(startDate);
      setValue('startDate', ref.subtract(1, 'M').startOf('M').toISOString());
      setValue('untilDate', ref.subtract(1, 'M').endOf('M').toISOString());
    }
  };

  const handleForwards = () => {
    if (attendancesData.isCanForwards) {
      console.log('maju');
      const ref = dayjs(untilDate);
      setValue('startDate', ref.add(1, 'M').startOf('M').toISOString());
      setValue('untilDate', ref.add(1, 'M').endOf('M').toISOString());
    }
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={async () => {
            await getAllAttendances.refetch();
          }}
        />
      }>
      <Box pb="64">
        <Center>
          <CustomTable
            tableSettings={{
              mainSettings: {
                tableWidth,
                defaultSortFrom: 'desc',
              },
              row: {
                rowHeight: 90,
              },
              customComponent: {
                top: () => {
                  return (
                    <Box
                      p="6"
                      borderTopLeftRadius="xl"
                      borderTopRightRadius="xl"
                      backgroundColor="white">
                      <Heading fontSize="lg" mb="4">
                        Periode
                      </Heading>
                      <HStack
                        w={{base: 'full', md: 420}}
                        alignItems="center"
                        justifyContent={'space-between'}>
                        <IconButton
                          variant="solid"
                          p="2"
                          icon={
                            <Icon as={Feather} name="chevron-left" size="sm" />
                          }
                          isDisabled={!attendancesData.isCanBackwards}
                          disabled={!attendancesData.isCanBackwards}
                          onPress={handleBackwards}
                        />
                        <Text>
                          {dayjs(watch().startDate).format('ddd DD/MM/YYYY')} -{' '}
                          {dayjs(watch().untilDate).format('ddd DD/MM/YYYY')}
                        </Text>
                        <IconButton
                          variant="solid"
                          p="2"
                          icon={
                            <Icon as={Feather} name="chevron-right" size="sm" />
                          }
                          isDisabled={!attendancesData.isCanForwards}
                          disabled={!attendancesData.isCanForwards}
                          onPress={handleForwards}
                        />
                      </HStack>
                    </Box>
                  );
                },
              },
            }}
            isLoading={getAllAttendances.loading}
            data={attendancesData.list}
            rowKeysAccessor="id"
            columns={[
              {
                Header: 'Foto',
                accessor: 'photo',
                widthRatio: 0.5,
                isAvatar: true,
                isDisableSort: true,
              },
              {Header: 'Nama Karyawan', accessor: 'name', widthRatio: 1},
              {
                Header: 'Toko',
                accessor: 'store_name',
                widthRatio: 0.7,
              },
              {
                Header: 'Tanggal',
                accessor: 'created_at_formatted',
                widthRatio: 0.7,
                sortAs: 'created_at_unix',
              },
            ]}
          />
        </Center>
      </Box>
    </ScrollView>
  );
};
