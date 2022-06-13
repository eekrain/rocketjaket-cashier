import {Box, Heading} from 'native-base';
import numbro from 'numbro';
import React from 'react';
import {Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

export interface IMyLineChart {
  labels: string[];
  datasets: {
    data: number[];
    color: (opacity?: number) => string;
  }[];
  legend: string[];
}

interface MyLineChartProps {
  chartTitle: string;
  chartData?: IMyLineChart;
  total: string;
  chartWidth: number;
  chartHeight?: number;
  textColor?: string;
  bgColor?: string;
  bgGradientFromLeft?: string;
  bgGradientToRight?: string;
  yAxisInterval?: number;
  formatYLabel?: (yValue: string) => string;
  colorGlobal?: (opacity: number, index?: number | undefined) => string;
  labelColor?: (opacity: number, index?: number | undefined) => string;
}

export const MyLineChart = ({
  chartTitle,
  chartData,
  total,
  chartWidth,
  chartHeight = 220,
  textColor = '#065f46',
  bgColor = '#6ee7b7',
  bgGradientFromLeft = '#d1fae5',
  bgGradientToRight = '#a7f3d0',
  yAxisInterval = 1,
  formatYLabel = yValue => yValue,
  colorGlobal = (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor = (opacity = 1) => `rgba(6, 78, 59, ${opacity})`,
}: MyLineChartProps) => {
  return (
    <>
      {chartData &&
        chartData.labels.length > 0 &&
        chartData.datasets.length > 0 && (
          <Box p={{base: 4, lg: 6}} bgColor="white" borderRadius="xl">
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
              height={chartHeight}
              formatYLabel={formatYLabel}
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
