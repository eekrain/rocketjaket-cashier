import {
  Box,
  Heading,
  HStack,
  VStack,
  Text,
  useBreakpointValue,
} from 'native-base';
import numbro from 'numbro';
import React from 'react';
import {useWindowDimensions} from 'react-native';
import {PieChart} from 'react-native-chart-kit';

export interface IMyPieChart {
  name: string;
  total_transaksi: number;
  color: string;
}

interface IMyPieChartProps {
  data?: IMyPieChart[];
  accessor: string;
  formatValue?: (value: number) => string;
  mlLegend?: number;
  // w?: number;
  // h?: number;
}

export const MyPieChart = ({
  data,
  accessor,
  mlLegend = -100,
  // w = 320,
  // h = 200,
  formatValue = value =>
    numbro(value).formatCurrency({currencySymbol: 'Rp ', average: true}),
}: IMyPieChartProps) => {
  const window = useWindowDimensions();

  const pieChartWidth: number = useBreakpointValue({
    base: 320,
    sm: 320,
    md: 220,
    lg: 320,
  });
  const pieChartHeight: number = useBreakpointValue({
    base: 200,
    sm: 200,
    md: 120,
    lg: 200,
  });
  // console.log(
  //   '🚀 ~ file: MyPieChart.tsx ~ line 52 ~ pieChartHeight',
  //   pieChartHeight,
  // );
  return (
    <>
      {data && data.length > 0 && (
        <HStack alignItems={'center'} minWidth={{base: 'full', md: undefined}}>
          <PieChart
            data={data}
            width={pieChartWidth}
            height={pieChartHeight}
            chartConfig={chartConfig}
            accessor={accessor}
            backgroundColor={'transparent'}
            center={[0, 0]}
            hasLegend={false}
            paddingLeft="0"
          />
          <VStack space="2" ml={{base: -110, md: -90, lg: -100}}>
            {data.map(x => (
              <HStack
                alignItems={'center'}
                space="4"
                key={`${x.name}${x.color}`}>
                <Box size="2" backgroundColor={x.color} borderRadius="full" />
                <Text fontWeight={'bold'} color={x.color}>
                  {x.name} {formatValue(x.total_transaksi)}
                </Text>
              </HStack>
            ))}
          </VStack>
        </HStack>
      )}
    </>
  );
};

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2,
  useShadowColorFromDataset: false,
};
