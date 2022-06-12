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
} from 'native-base';
import {RefreshControl} from 'react-native';
import dayjs from 'dayjs';
import {useAttendance_GetAttendancesByUserQuery} from '../../graphql/gql-generated';
import {useForm} from 'react-hook-form';
import Feather from 'react-native-vector-icons/Feather';
import CustomTable from '../CustomTable';

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
export const ListAbsensiByUser = ({}: IListAbsensiByUserProps) => {
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
    startDate: dayjs(startDate).format('D/M/YYYY H:mm:ss'),
    untilDate: dayjs(untilDate).format('D/M/YYYY H:mm:ss'),
  };
  console.log(
    '🚀 ~ file: ListAbsensiByUser.tsx ~ line 50 ~ ListAbsensiByUser ~ tes',
    tes,
  );

  const getAttendancesByUser = useAttendance_GetAttendancesByUserQuery({
    variables: {
      startDate: startDate,
      untilDate: untilDate,
    },
  });

  const attendancesData = useMemo(() => {
    const list =
      getAttendancesByUser.data?.users.map(val => ({
        id: val.id,
        name: val.displayName,
        total_attendance: `${val.attendances.reduce(
          (prev, curr) => (curr.created_at ? prev + 1 : prev),
          0,
        )}/${dayjs(startDate).daysInMonth()}`,
      })) || [];
    const min_created_at =
      getAttendancesByUser.data?.attendance_aggregate.aggregate?.min
        ?.created_at;
    const isCanBackwards = min_created_at
      ? dayjs(min_created_at).isBefore(dayjs(startDate))
      : false;
    // const isCanBackwards = true;
    const isCanForwards = dayjs().endOf('M').isAfter(dayjs(untilDate));

    return {list, isCanBackwards, isCanForwards};
  }, [
    getAttendancesByUser.data?.users,
    getAttendancesByUser.data?.attendance_aggregate,
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
            await getAttendancesByUser.refetch();
          }}
        />
      }>
      <Box pb="20">
        <Center>
          <CustomTable
            customTopComponent={() => {
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
                    w={420}
                    alignItems="center"
                    justifyContent={'space-between'}>
                    <IconButton
                      variant="solid"
                      p="2"
                      icon={<Icon as={Feather} name="chevron-left" size="sm" />}
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
            }}
            tableWidth={700}
            isLoading={getAttendancesByUser.loading}
            rowHeight={80}
            data={attendancesData.list}
            columns={[
              {Header: 'Nama Karyawan', accessor: 'name', widthRatio: 5},
              {
                Header: 'Total Absen Masuk',
                accessor: 'total_attendance',
                widthRatio: 3,
              },
            ]}
            keyAccessor="id"
          />
        </Center>
      </Box>
    </ScrollView>
  );
};
