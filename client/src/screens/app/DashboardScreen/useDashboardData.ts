import {Maybe} from 'graphql/jsutils/Maybe';
import {useMemo} from 'react';
import {
  NumberChartData,
  Scalars,
  useDashboard_GetDashboardDataQuery,
  useStore_GetAllStoreQuery,
} from '../../../graphql/gql-generated';
import {getColorByIndex} from '../../../shared/utils';

export interface IChartCustomData {
  labels: string[];
  datasets: {
    data: number[];
    color: (opacity?: number) => string;
  }[];
  legend: string[];
}

interface useDashboardData {
  firstTransactionDate: Scalars['String'];
  isCanBackwards: Scalars['Boolean'];
  isCanForwards: Scalars['Boolean'];
  // paymentTypePercentage: Array<PaymentTypePercentage>;
  stores: Array<Scalars['Int']>;
  totalCustomer: Scalars['Int'];
  totalItemReturned: Scalars['Int'];
  totalItemSold: Scalars['Int'];
  totalOmset: Scalars['Int'];
  totalOperasional: Scalars['Int'];
  totalProfit: Scalars['Int'];
  totalReturnedTransaction: Scalars['Int'];
  totalSuccessTransaction: Scalars['Int'];
  operasionalChart?: Maybe<Array<NumberChartData>>;
  // itemSoldChart: IChartCustomData;
  omsetChart: IChartCustomData;
  profitChart: IChartCustomData;
  storeSelectOptions: {
    label: string;
    value: string;
  }[];
}

interface useDashboardDataProps {
  startDate: string;
  untilDate: string;
  stores: string;
}

export const useDashboardData = ({
  startDate,
  untilDate,
  stores,
}: useDashboardDataProps): useDashboardData | null => {
  const getAllStore = useStore_GetAllStoreQuery();
  const storeSelectOptions = useMemo(() => {
    const data = getAllStore.data?.stores || [];
    const restructure = data.map(store => ({
      label: store.name,
      value: store.id.toString(),
    }));

    restructure.unshift({label: 'Semua Toko', value: 'all'});

    restructure.push({label: 'rand1', value: '3'});
    restructure.push({label: 'rand2', value: '5'});

    return restructure;
  }, [getAllStore.data?.stores]);

  const activeStores = useMemo(() => {
    const parsedStores = isNaN(parseInt(stores, 10)) ? 0 : parseInt(stores, 10);
    return stores === 'all'
      ? getAllStore.data?.stores.map(x => x.id) || []
      : [parsedStores];
  }, [stores, getAllStore.data?.stores]);

  const getDashboardData = useDashboard_GetDashboardDataQuery({
    variables: {
      startDate,
      untilDate,
      stores: activeStores,
    },
  });

  const dashboardData = getDashboardData.data?.Dashboard_GetDashboardData;

  const dashboardChartData = useMemo(() => {
    const legend =
      activeStores.map((activeId, index) => {
        const foundStore = getAllStore.data?.stores.find(
          x => x.id === activeId,
        );

        return {
          store_name: foundStore?.name ? foundStore.name : activeId.toString(),
          color: getColorByIndex(index),
        };
      }) || [];

    const omsetChart: IChartCustomData = {
      labels: dashboardData?.omsetChart.labels || [],
      datasets:
        dashboardData?.omsetChart?.datasets?.map((val, index) => {
          return {
            data: val.data.map(x => x / 1000),
            color: legend?.[index].color,
          };
        }) || [],
      legend: legend.map(x => x.store_name),
    };

    const profitChart: IChartCustomData = {
      labels: dashboardData?.profitChart.labels || [],
      datasets:
        dashboardData?.profitChart?.datasets?.map((val, index) => {
          return {
            data: val.data.map(x => x / 1000),
            color: legend?.[index].color,
          };
        }) || [],
      legend: legend.map(x => x.store_name),
    };

    return {omsetChart, profitChart};
  }, [dashboardData, getAllStore.data?.stores]);

  if (!dashboardData) return null;

  return {
    ...dashboardData,
    omsetChart: dashboardChartData.omsetChart,
    profitChart: dashboardChartData.profitChart,
    storeSelectOptions,
  };
};
