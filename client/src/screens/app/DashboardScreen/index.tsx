import React, {useMemo} from 'react';
import {
  Box,
  Text,
  Heading,
  HStack,
  IconButton,
  Icon,
  ScrollView,
} from 'native-base';
import withAppLayout from '../../../components/Layout/AppLayout';
import {useForm} from 'react-hook-form';
import dayjs from 'dayjs';
import 'dayjs/locale/id';
import {
  useDashboard_GetDashboardDataQuery,
  useStore_GetAllStoreQuery,
} from '../../../graphql/gql-generated';
import {RHSelect} from '../../../shared/components';
import Feather from 'react-native-vector-icons/Feather';
import {getColorByIndex, myNumberFormat} from '../../../shared/utils';
import {LineChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
import {useDashboardData} from './useDashboardData';
import {MyChart} from './MyChart';

dayjs.locale('id');
interface IDashboardFormValue {
  timeMode: 'weekly' | 'monthly' | 'yearly';
  startDate: {value: string; formatted: string};
  untilDate: {value: string; formatted: string};
  store_id: string;
}

const defaultValues = (): IDashboardFormValue => {
  const now = dayjs();
  return {
    timeMode: 'weekly',
    startDate: {
      value: now.endOf('d').subtract(7, 'd').toISOString(),
      formatted: now.endOf('d').subtract(7, 'd').format('dddd, D MMMM YYYY'),
    },
    untilDate: {
      value: now.endOf('d').toISOString(),
      formatted: now.endOf('d').format('dddd, D MMMM YYYY'),
    },
    store_id: 'all',
  };
};

const timeModeSelectOptons = [
  {label: 'Mingguan', value: 'weekly'},
  {label: 'Bulanan', value: 'monthly'},
  {label: 'Tahunan', value: 'yearly'},
];

interface IChartCustomData {
  labels: string[];
  datasets: {
    data: number[];
    color: (opacity?: number) => string;
  }[];
  legend: string[];
}

interface IDashboardScreenProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DashboardScreen = ({}: IDashboardScreenProps) => {
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
  console.log(
    '🚀 ~ file: index.tsx ~ line 61 ~ DashboardScreen ~ watch()',
    watch(),
  );

  const dashboardData = useDashboardData({
    startDate: watch().startDate.value,
    untilDate: watch().untilDate.value,
    stores: watch().store_id,
  });

  return (
    <ScrollView>
      <Box pb="20">
        <Heading fontSize="xl" mb="6">
          Dashboard
        </Heading>
        <HStack space="8" mb="6">
          <Box p="6" borderRadius="xl" backgroundColor="white">
            <Heading fontSize="lg" mb="4">
              Toko
            </Heading>
            <RHSelect
              isDisableLabel={true}
              selectOptions={dashboardData?.storeSelectOptions || []}
              control={control}
              errors={errors}
              name="store_id"
              w="56"
            />
          </Box>
          <Box
            p="6"
            borderRadius="xl"
            backgroundColor="white"
            alignSelf={'center'}>
            <Heading fontSize="lg" mb="4">
              Periode
            </Heading>
            <HStack space={'4'} alignItems="center">
              <Box>
                <RHSelect
                  isDisableLabel={true}
                  selectOptions={timeModeSelectOptons}
                  control={control}
                  errors={errors}
                  name="timeMode"
                  w="56"
                />
              </Box>
              <HStack alignItems="center" space="2">
                <IconButton
                  variant="solid"
                  p="2"
                  icon={<Icon as={Feather} name="chevron-left" size="sm" />}
                  isDisabled={!dashboardData?.isCanBackwards}
                />
                <Text>
                  {watch().startDate.formatted} - {watch().untilDate.formatted}
                </Text>

                <IconButton
                  variant="solid"
                  p="2"
                  icon={<Icon as={Feather} name="chevron-right" size="sm" />}
                  isDisabled={!dashboardData?.isCanForwards}
                />
              </HStack>
            </HStack>
          </Box>
        </HStack>

        {}

        <Box mb="6">
          <MyChart
            chartTitle="Omset"
            chartData={dashboardData?.omsetChart}
            chartWidth={Dimensions.get('window').width - 80}
            total={myNumberFormat.rp(dashboardData?.totalOmset)}
            bgColor="#818cf8"
            bgGradientFromLeft="#c7d2fe"
            bgGradientToRight="#a5b4fc"
            textColor="#312e81"
            labelColor={(opacity = 1) => `rgba(49, 46, 129, ${opacity})`}
          />
        </Box>
        <Box mb="6">
          <MyChart
            chartTitle="Profit"
            chartData={dashboardData?.profitChart}
            chartWidth={Dimensions.get('window').width - 80}
            total={myNumberFormat.rp(dashboardData?.totalProfit)}
          />
        </Box>
      </Box>
    </ScrollView>
  );
};

export default withAppLayout(DashboardScreen);
