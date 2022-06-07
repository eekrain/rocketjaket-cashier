import React, {useEffect} from 'react';
import {
  Box,
  Text,
  Heading,
  HStack,
  IconButton,
  Icon,
  ScrollView,
  VStack,
  Center,
} from 'native-base';
import withAppLayout from '../../../components/Layout/AppLayout';
import {useForm} from 'react-hook-form';
import dayjs from 'dayjs';
import 'dayjs/locale/id';
import {RHSelect} from '../../../shared/components';
import Feather from 'react-native-vector-icons/Feather';
import {myNumberFormat} from '../../../shared/utils';
import {Dimensions} from 'react-native';
import {useDashboardData} from './useDashboardData';
import {MyLineChart} from './MyLineChart';
import {MyPieChart} from './MyPieChart';
import numbro from 'numbro';
import {CardWithIcon} from './CardWithIcon';

dayjs.locale('id');
interface IDashboardFormValue {
  timeMode: 'weekly' | 'monthly' | 'daily';
  startDate: string;
  untilDate: string;
  store_id: string;
}

const defaultValues = (): IDashboardFormValue => {
  const now = dayjs();
  return {
    timeMode: 'daily',
    startDate: now.endOf('d').subtract(7, 'd').toISOString(),
    untilDate: now.endOf('d').toISOString(),
    store_id: 'all',
  };
};

const timeModeSelectOptons = [
  {label: 'Harian', value: 'daily'},
  {label: 'Mingguan', value: 'weekly'},
  {label: 'Bulanan', value: 'monthly'},
];

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

  const mode = watch().timeMode;
  const startDate = watch().startDate;
  const untilDate = watch().untilDate;

  const dashboardData = useDashboardData({
    startDate: watch().startDate,
    untilDate: watch().untilDate,
    stores: watch().store_id,
    mode: watch().timeMode,
  });

  useEffect(() => {
    if (mode === 'daily') {
      const ref = dayjs();
      setValue('startDate', ref.endOf('d').subtract(7, 'd').toISOString());
      setValue('untilDate', ref.endOf('d').toISOString());
    } else if (mode === 'weekly') {
      const ref = dayjs();
      setValue('startDate', ref.startOf('M').toISOString());
      setValue('untilDate', ref.endOf('M').toISOString());
    } else if (mode === 'monthly') {
      const ref = dayjs();
      setValue('startDate', ref.startOf('y').toISOString());
      setValue('untilDate', ref.endOf('y').toISOString());
    }
  }, [mode]);

  const handleBackwards = () => {
    const ref = dayjs(startDate);
    if (mode === 'daily') {
      setValue('startDate', ref.endOf('d').subtract(7, 'd').toISOString());
      setValue('untilDate', ref.endOf('d').toISOString());
    } else if (mode === 'weekly') {
      setValue('startDate', ref.startOf('M').subtract(1, 'M').toISOString());
      setValue('untilDate', ref.endOf('M').toISOString());
    } else if (mode === 'monthly') {
      setValue('startDate', ref.startOf('y').subtract(1, 'y').toISOString());
      setValue('untilDate', ref.endOf('y').toISOString());
    }
  };

  const handleForwards = () => {
    const ref = dayjs(untilDate);
    if (mode === 'daily') {
      setValue('startDate', ref.endOf('d').toISOString());
      setValue('untilDate', ref.endOf('d').add(7, 'd').toISOString());
    } else if (mode === 'weekly') {
      setValue(
        'startDate',
        ref.add(1, 'd').startOf('M').subtract(1, 'M').toISOString(),
      );
      setValue('untilDate', ref.add(1, 'd').endOf('M').toISOString());
    } else if (mode === 'monthly') {
      setValue(
        'startDate',
        ref.add(1, 'd').startOf('y').subtract(1, 'y').toISOString(),
      );
      setValue('untilDate', ref.add(1, 'd').endOf('y').toISOString());
    }
  };

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
                  // isDisabled={!dashboardData?.isCanBackwards}
                  onPress={handleBackwards}
                />
                <Text>
                  {dayjs(watch().startDate).format('ddd DD/MM/YYYY HH:mm:ss')} -
                  {dayjs(watch().untilDate).format('ddd DD/MM/YYYY HH:mm:ss')}
                </Text>

                <IconButton
                  variant="solid"
                  p="2"
                  icon={<Icon as={Feather} name="chevron-right" size="sm" />}
                  // isDisabled={!dashboardData?.isCanForwards}
                  onPress={handleForwards}
                />
              </HStack>
            </HStack>
          </Box>
        </HStack>

        <Box mb="6">
          <MyLineChart
            chartTitle="Omset"
            chartData={dashboardData?.omsetChart}
            chartWidth={Dimensions.get('window').width - 80}
            total={myNumberFormat.rp(dashboardData?.totalOmset)}
            bgColor="#818cf8"
            bgGradientFromLeft="#c7d2fe"
            bgGradientToRight="#a5b4fc"
            textColor="#312e81"
            labelColor={(opacity = 1) => `rgba(49, 46, 129, ${opacity})`}
            formatYLabel={yValue =>
              numbro(yValue).formatCurrency({
                currencySymbol: 'Rp',
                average: true,
              })
            }
          />
        </Box>

        <Box mb="6">
          <MyLineChart
            chartTitle="Profit"
            chartData={dashboardData?.profitChart}
            chartWidth={Dimensions.get('window').width - 80}
            total={myNumberFormat.rp(dashboardData?.totalProfit)}
            formatYLabel={yValue =>
              numbro(yValue).formatCurrency({
                currencySymbol: 'Rp',
                average: true,
              })
            }
          />
        </Box>

        <Box mb="6">
          <MyLineChart
            chartTitle="Biaya Operasional"
            chartData={dashboardData?.operasionalChart}
            chartWidth={Dimensions.get('window').width - 80}
            total={myNumberFormat.rp(dashboardData?.totalOperasional) || ''}
            bgColor="#f87171"
            bgGradientFromLeft="#fecaca"
            bgGradientToRight="#fca5a5"
            textColor="#7f1d1d"
            labelColor={(opacity = 1) => `rgba(127, 29, 29, ${opacity})`}
            formatYLabel={yValue =>
              numbro(yValue).formatCurrency({
                currencySymbol: 'Rp',
                average: true,
              })
            }
          />
        </Box>

        <Box mb="6">
          <MyLineChart
            chartTitle="Item Terjual"
            chartData={dashboardData?.itemSoldChart}
            chartWidth={Dimensions.get('window').width - 80}
            total={dashboardData?.totalItemSold.toString() || ''}
            bgColor="#e879f9"
            bgGradientFromLeft="#f5d0fe"
            bgGradientToRight="#f0abfc"
            textColor="#701a75"
            labelColor={(opacity = 1) => `rgba(112, 26, 117, ${opacity})`}
          />
        </Box>

        <HStack alignItems={'center'} justifyContent="space-between">
          <Box p="4" bgColor="white" borderRadius="xl">
            <Heading color={'info.900'} fontSize="lg" mb="2">
              Tipe Pembayaran
            </Heading>
            <MyPieChart
              data={dashboardData?.paymentTypePercentage}
              accessor="total_transaksi"
            />
          </Box>
          <Box p="4" h="full" bgColor="white" borderRadius="xl">
            <Heading color={'indigo.900'} fontSize="lg" mb="2">
              Lainnya
            </Heading>

            <HStack h="20" space="4" mb="4">
              <CardWithIcon
                title="Transaksi Sukses"
                value={dashboardData?.totalSuccessTransaction.toString() || ''}
                _cardStyle={{bgColor: 'emerald.600'}}
                __icon={{
                  as: Feather,
                  name: 'chevrons-up',
                }}
              />
              <CardWithIcon
                title="Total Customer"
                value={dashboardData?.totalCustomer.toString() || ''}
                _cardStyle={{bgColor: 'indigo.600'}}
                __icon={{
                  as: Feather,
                  name: 'user-check',
                }}
              />
            </HStack>
            <HStack h="20" space="4">
              <CardWithIcon
                title="Transaksi Diretur"
                value={dashboardData?.totalReturnedTransaction.toString() || ''}
                _cardStyle={{bgColor: 'amber.600'}}
                __icon={{
                  as: Feather,
                  name: 'chevrons-down',
                }}
              />
              <CardWithIcon
                title="Item Diretur"
                value={dashboardData?.totalItemReturned.toString() || ''}
                _cardStyle={{bgColor: 'rose.600'}}
                __icon={{
                  as: Feather,
                  name: 'corner-left-down',
                }}
              />
            </HStack>
          </Box>
        </HStack>
      </Box>
    </ScrollView>
  );
};

export default withAppLayout(DashboardScreen);
