import {useEffect, useMemo} from 'react';
import {
  Scalars,
  TimeMode,
  useDashboard_GetDashboardDataQuery,
  useStore_GetAllStoreQuery,
} from '../../../graphql/gql-generated';
import {getColorByIndex} from '../../../shared/utils';
import {useMyAppState} from '../../../state';
import {IMyLineChart} from './MyLineChart';
import {IMyPieChart} from './MyPieChart';

interface useDashboardData {
  firstTransactionDate: Scalars['String'];
  isCanBackwards: Scalars['Boolean'];
  isCanForwards: Scalars['Boolean'];
  paymentTypePercentage: Array<IMyPieChart>;
  stores: Array<Scalars['Int']>;
  totalCustomer: Scalars['Int'];
  totalItemReturned: Scalars['Int'];
  totalItemSold: Scalars['Int'];
  totalOmset: Scalars['Int'];
  totalOperasional: Scalars['Int'];
  totalProfit: Scalars['Int'];
  totalReturnedTransaction: Scalars['Int'];
  totalSuccessTransaction: Scalars['Int'];
  operasionalChart?: IMyLineChart;
  itemSoldChart: IMyLineChart;
  omsetChart: IMyLineChart;
  profitChart: IMyLineChart;
  storeSelectOptions: {
    label: string;
    value: string;
  }[];
  refetch: () => Promise<void>;
  loading: boolean;
}

interface useDashboardDataProps {
  startDate: string;
  untilDate: string;
  stores: string;
  mode: 'weekly' | 'monthly' | 'daily';
}

export const useDashboardData = ({
  startDate,
  untilDate,
  stores,
  mode,
}: useDashboardDataProps): useDashboardData | null => {
  const myAppState = useMyAppState();
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
      mode: mode as TimeMode,
    },
    onCompleted: () => {
      // console.log('useDashboard_GetDashboardDataQuery onCompleted');
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
    const dummyColorFn: (opacity?: number) => string = () => '';

    const omsetChart: IMyLineChart = {
      labels: dashboardData?.omsetChart.labels || [],
      datasets:
        dashboardData?.omsetChart?.datasets?.map((val, index) => {
          return {
            data: val.data,
            color: legend?.[index].color || dummyColorFn,
          };
        }) || [],
      legend: legend.map(x => x.store_name),
    };

    const profitChart: IMyLineChart = {
      labels: dashboardData?.profitChart.labels || [],
      datasets:
        dashboardData?.profitChart?.datasets?.map((val, index) => {
          return {
            data: val.data,
            color: legend?.[index].color,
          };
        }) || [],
      legend: legend.map(x => x.store_name),
    };

    const itemSoldChart: IMyLineChart = {
      labels: dashboardData?.itemSoldChart.labels || [],
      datasets:
        dashboardData?.itemSoldChart?.datasets?.map((val, index) => {
          return {
            data: val.data,
            color: legend?.[index].color,
          };
        }) || [],
      legend: legend.map(x => x.store_name),
    };

    const operasionalChart: IMyLineChart = {
      labels: dashboardData?.operasionalChart.labels || [],
      datasets:
        dashboardData?.operasionalChart?.datasets?.map((val, index) => {
          return {
            data: val.data,
            color: legend?.[index].color,
          };
        }) || [],
      legend: legend.map(x => x.store_name),
    };

    return {omsetChart, profitChart, itemSoldChart, operasionalChart};
  }, [dashboardData, getAllStore.data?.stores]);

  const paymentTypePercentage = useMemo(() => {
    return (
      dashboardData?.paymentTypePercentage.map((x, i) => ({
        ...x,
        color: getColorByIndex(i)(1),
      })) || []
    );
  }, [dashboardData]);

  useEffect(() => {
    myAppState.setLoadingWholePage(
      getDashboardData.loading || getAllStore.loading,
    );

    return () => {
      myAppState.setLoadingWholePage(false);
    };
  }, [getDashboardData.loading, getAllStore.loading]);

  if (!dashboardData) return null;

  return {
    ...dashboardData,
    omsetChart: dashboardChartData.omsetChart,
    profitChart: dashboardChartData.profitChart,
    itemSoldChart: dashboardChartData.itemSoldChart,
    operasionalChart: dashboardChartData.operasionalChart,
    paymentTypePercentage: paymentTypePercentage,
    storeSelectOptions,
    refetch: async () => {
      await getAllStore.refetch();
      await getDashboardData.refetch();
    },
    loading: getAllStore.loading || getDashboardData.loading,
  };
};
