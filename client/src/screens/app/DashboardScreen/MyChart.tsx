import {Box, Heading} from 'native-base';
import React from 'react';
import {LineChart} from 'react-native-chart-kit';
import {myNumberFormat} from '../../../shared/utils';
import {IChartCustomData} from './useDashboardData';

interface MyChartProps {
  chartTitle: string;
  chartData?: IChartCustomData;
  total: string;
  chartWidth: number;
  chartHheight?: number;
  textColor?: string;
  bgColor?: string;
  bgGradientFromLeft?: string;
  bgGradientToRight?: string;
  yAxisLabel?: string;
  yAxisSuffix?: string;
  yAxisInterval?: number;
  colorGlobal?: (opacity: number, index?: number | undefined) => string;
  labelColor?: (opacity: number, index?: number | undefined) => string;
}

export const MyChart = ({
  chartTitle,
  chartData,
  total,
  chartWidth,
  chartHheight = 220,
  textColor = '#065f46',
  bgColor = '#6ee7b7',
  bgGradientFromLeft = '#d1fae5',
  bgGradientToRight = '#a7f3d0',
  yAxisLabel = 'Rp',
  yAxisSuffix = 'k',
  yAxisInterval = 1,
  colorGlobal = (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor = (opacity = 1) => `rgba(6, 78, 59, ${opacity})`,
}: MyChartProps) => {
  return (
    <>
      {chartData &&
        chartData.labels.length > 0 &&
        chartData.datasets.length > 0 && (
          <Box p="6" bgColor="white" borderRadius="xl">
            <Heading color={textColor} fontSize="lg" mb="2">
              {chartTitle}
            </Heading>
            <Heading color={textColor} fontSize="md" mb="4">
              Total {total}
            </Heading>
            <LineChart
              data={{
                labels: chartData.labels,
                datasets: chartData.datasets,
                legend: chartData.legend,
              }}
              width={chartWidth} // from react-native
              height={chartHheight}
              yAxisLabel={yAxisLabel}
              yAxisSuffix={yAxisSuffix}
              yAxisInterval={yAxisInterval} // optional, defaults to 1
              yLabelsOffset={10}
              chartConfig={{
                backgroundColor: bgColor,
                backgroundGradientFrom: bgGradientFromLeft,
                backgroundGradientTo: bgGradientToRight,
                decimalPlaces: 0, // optional, defaults to 2dp , 1)
                color: colorGlobal,
                labelColor: labelColor,
                paddingRight: -200,
                style: {
                  borderRadius: 4,
                  paddingLeft: 200,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#ffffff',
                },
                useShadowColorFromDataset: true,
              }}
              bezier
              style={{
                borderRadius: 10,
              }}
            />
          </Box>
        )}
    </>
  );
};
