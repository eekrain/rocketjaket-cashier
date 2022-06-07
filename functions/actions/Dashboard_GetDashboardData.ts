import to from "await-to-js";
import dayjs from "dayjs";
import { Request, Response } from "express";
import {
  getAdminSdk,
  getPeriodicDayInWeek,
  getPeriodicMonthInYear,
  getPeriodicWeekInMonth,
  IPeriodicTime,
} from "../utils";

export default async (req: Request, res: Response) => {
  const params: Dashboard_GetDashboardDataArgs = req.body.input;
  console.log(
    "🚀 ~ file: Dashboard_GetDashboardData.ts ~ line 12 ~ params",
    params
  );

  const sdk = getAdminSdk();

  const [err, resBasic] = await to(
    sdk.Dashboard_GetBasicDashboardData({
      startDate: params.startDate,
      untilDate: params.untilDate,
      storeIds: params.stores,
    })
  );

  const totalCustomer = resBasic?.data.totalCustomer.aggregate?.count || 0;
  const firstTransactionDate: string =
    resBasic?.data.firstTransactionDate.aggregate?.min?.created_at ||
    dayjs().toISOString();
  const isCanBackwards = dayjs(firstTransactionDate).isBefore(params.startDate);
  const isCanForwards = dayjs().isAfter(params.untilDate);
  const totalSuccessTransaction =
    resBasic?.data.totalSuccessTransaction.aggregate?.count || 0;
  const totalReturnedTransaction =
    resBasic?.data.totalReturnedTransaction.aggregate?.count || 0;
  const totalItemSold =
    resBasic?.data.totalItemSold.aggregate?.sum?.purchase_qty || 0;
  const totalItemReturned =
    resBasic?.data.totalItemReturned.aggregate?.sum?.purchase_qty || 0;

  if (params.mode === ("daily" as TimeMode)) {
    const daily = await getData(params, getPeriodicDayInWeek(params.startDate));
    const out: Dashboard_GetDashboardDataOutput = {
      isCanBackwards,
      isCanForwards,
      totalCustomer,
      totalSuccessTransaction,
      totalReturnedTransaction,
      totalItemSold,
      totalItemReturned,
      firstTransactionDate,
      paymentTypePercentage: daily.paymentTypePercentage,
      totalOmset: daily.totalOmset,
      omsetChart: daily.omsetChart,
      totalProfit: daily.totalProfit,
      profitChart: daily.profitChart,
      itemSoldChart: daily.itemSoldChart,
      operasionalChart: daily.operasionalChart,
      totalOperasional: daily.totalOperasional,
      stores: params.stores,
    };

    return res.send(out);
  } else if (params.mode === ("weekly" as TimeMode)) {
    const weekly = await getData(
      params,
      getPeriodicWeekInMonth(params.startDate, params.untilDate)
    );
    const out: Dashboard_GetDashboardDataOutput = {
      isCanBackwards,
      isCanForwards,
      totalCustomer,
      totalSuccessTransaction,
      totalReturnedTransaction,
      totalItemSold,
      totalItemReturned,
      firstTransactionDate,
      paymentTypePercentage: weekly.paymentTypePercentage,
      totalOmset: weekly.totalOmset,
      omsetChart: weekly.omsetChart,
      totalProfit: weekly.totalProfit,
      profitChart: weekly.profitChart,
      itemSoldChart: weekly.itemSoldChart,
      operasionalChart: weekly.operasionalChart,
      totalOperasional: weekly.totalOperasional,
      stores: params.stores,
    };

    return res.send(out);
  } else if (params.mode === ("monthly" as TimeMode)) {
    const monthly = await getData(
      params,
      getPeriodicMonthInYear(params.startDate)
    );
    const out: Dashboard_GetDashboardDataOutput = {
      isCanBackwards,
      isCanForwards,
      totalCustomer,
      totalSuccessTransaction,
      totalReturnedTransaction,
      totalItemSold,
      totalItemReturned,
      firstTransactionDate,
      paymentTypePercentage: monthly.paymentTypePercentage,
      totalOmset: monthly.totalOmset,
      omsetChart: monthly.omsetChart,
      totalProfit: monthly.totalProfit,
      profitChart: monthly.profitChart,
      itemSoldChart: monthly.itemSoldChart,
      operasionalChart: monthly.operasionalChart,
      totalOperasional: monthly.totalOperasional,
      stores: params.stores,
    };

    return res.send(out);
  }
};

const getData = async (
  params: Dashboard_GetDashboardDataArgs,
  periodic: IPeriodicTime[]
) => {
  const sdk = getAdminSdk();

  const promises = Promise.all(
    periodic.map((time) =>
      sdk.Dashboard_GetPeriodicChartData({
        startDate: time.startDate,
        untilDate: time.untilDate,
        storeIds: params.stores,
      })
    )
  );

  const [err, res] = await to(promises);
  if (err || !res) {
    console.log(
      "🚀 ~ file: Dashboard_GetDashboardData.ts ~ line 97 ~ err",
      err
    );
  }

  const dataInDays =
    res?.map((val, index) => {
      return {
        label: periodic?.[index].label,
        data: val.data,
      };
    }) || [];

  const totalOmset = dataInDays.reduce(
    (prev, day) =>
      prev +
      day.data.transaction.reduce((prev, x) => prev + x.total_transaction, 0),
    0
  );

  const omsetChart = {
    labels: dataInDays.map((val) => val.label),
    datasets: params.stores.map((store_id) => ({
      store_id,
      data: dataInDays.map((day) =>
        day.data.transaction
          .filter((transact) => transact.store_id === store_id)
          .reduce((prev, transact) => prev + transact.total_transaction, 0)
      ),
    })),
  };

  const totalProfit = dataInDays.reduce((prev, day) => {
    const operationalCost =
      day.data.operational_costs_aggregate.aggregate?.sum?.cost || 0;
    return (
      prev +
      day.data.transaction.reduce((prev, x) => prev + x.total_profit, 0) -
      operationalCost
    );
  }, 0);

  const profitChart = {
    labels: dataInDays.map((val) => val.label),
    datasets: params.stores.map((store_id) => ({
      store_id,
      data: dataInDays.map((day) => {
        const operationalCost =
          day.data.operational_costs_aggregate.aggregate?.sum?.cost || 0;
        return (
          day.data.transaction
            .filter((transact) => transact.store_id === store_id)
            .reduce((prev, transact) => prev + transact.total_profit, 0) -
          operationalCost
        );
      }),
    })),
  };

  const itemSoldChart = {
    labels: dataInDays.map((val) => val.label),
    datasets: params.stores.map((store_id) => ({
      store_id,
      data: dataInDays.map((day) =>
        day.data.transaction
          .filter((transact) => transact.store_id === store_id)
          .reduce(
            (prev, transact) => prev + transact.total_purchased_product,
            0
          )
      ),
    })),
  };

  const totalOperasional = dataInDays.reduce((prev, day) => {
    const cost = day.data.operational_costs_aggregate.aggregate?.sum?.cost || 0;
    return prev + cost;
  }, 0);
  console.log(
    "🚀 ~ file: Dashboard_GetDashboardData.ts ~ line 163 ~ totalOperasional ~ totalOperasional",
    totalOperasional
  );

  const operasionalChart = {
    labels: dataInDays.map((val) => val.label),
    datasets: params.stores.map((store_id) => ({
      store_id,
      data: dataInDays.map(
        (day) => day.data.operational_costs_aggregate.aggregate?.sum?.cost || 0
      ),
    })),
  };

  const resTransact = res?.map((val) => val.data.transaction) || [];
  const [errPT, resPT] = await to(sdk.Transaction_GetAllPaymentTypeEnum());
  if (errPT || !resPT) {
    console.log(
      "🚀 ~ file: Dashboard_GetDashboardData.ts ~ line 177 ~ weeklyMode ~ errPT",
      errPT
    );
  }
  const paymentTypePercentage =
    resPT?.data.transaction_payment_type_enum.map((pt) => {
      return {
        name: pt.title,
        total_transaksi: resTransact.reduce((prev, day) => {
          const tot = day
            .filter(
              (x) =>
                x.transaction_payment_type_enum.payment_type === pt.payment_type
            )
            .reduce((prev, transact) => prev + transact.total_transaction, 0);

          return prev + tot;
        }, 0),
      };
    }) || [];

  // console.log(
  //   "🚀 ~ file: Dashboard_GetDashboardData.ts ~ line 183 ~ weeklyMode ~ paymentTypePercentage",
  //   paymentTypePercentage
  // );
  // console.log(
  //   "🚀 ~ file: Dashboard_GetDashboardData.ts ~ line 118 ~ totalOmset",
  //   totalOmset
  // );
  // console.log(
  //   "🚀 ~ file: Dashboard_GetDashboardData.ts ~ line 130 ~ omsetChart.datasets",
  //   omsetChart.datasets
  // );
  // console.log(
  //   "🚀 ~ file: Dashboard_GetDashboardData.ts ~ line 136 ~ totalProfit",
  //   totalProfit
  // );
  // console.log(
  //   "🚀 ~ file: Dashboard_GetDashboardData.ts ~ line 148 ~ profitChart.datasets",
  //   profitChart.datasets
  // );
  // console.log(
  //   "🚀 ~ file: Dashboard_GetDashboardData.ts ~ line 148 ~ itemSoldChart.datasets",
  //   itemSoldChart.datasets
  // );

  return {
    totalOmset,
    omsetChart,
    totalProfit,
    profitChart,
    itemSoldChart,
    operasionalChart,
    totalOperasional,
    paymentTypePercentage,
  };
};
