import dayjs from "dayjs";

export interface IPeriodicTime {
  label: string;
  startDate: string;
  untilDate: string;
}

export const getPeriodicDayInWeek = (startDate: string): IPeriodicTime[] => {
  const listDay: { label: string; startDate: string; untilDate: string }[] = [];

  for (let index = 0; index < 7; index++) {
    listDay.push({
      label: `Hari ${index + 1}`,
      startDate: dayjs(startDate).add(index, "d").toISOString(),
      untilDate: dayjs(startDate)
        .add(index + 1, "d")
        .endOf("d")
        .toISOString(),
    });
  }
  return listDay;
};

export const getPeriodicWeekInMonth = (
  startDate: string,
  untilDate: string
): IPeriodicTime[] => {
  const startMonth = dayjs(startDate).startOf("M");
  const endMonth = dayjs(startDate).endOf("M").toISOString();
  const listWeek: { label: string; startDate: string; untilDate: string }[] =
    [];

  for (let index = 0; index < 4; index++) {
    listWeek.push({
      label: `Minggu ${index + 1}`,
      startDate: startMonth.add(index, "w").toISOString(),
      untilDate:
        index === 3
          ? endMonth
          : dayjs(startDate)
              .add(index + 1, "w")
              .endOf("d")
              .toISOString(),
    });
  }
  return listWeek;
};

export const getPeriodicMonthInYear = (startDate: string): IPeriodicTime[] => {
  const startYear = dayjs(startDate).startOf("y");
  const listMonth: { label: string; startDate: string; untilDate: string }[] =
    [];

  for (let index = 0; index < 12; index++) {
    listMonth.push({
      label: `Bulan ${index + 1}`,
      startDate: startYear.add(index, "M").toISOString(),
      untilDate: dayjs(startDate)
        .add(index + 1, "M")
        .endOf("d")
        .toISOString(),
    });
  }
  return listMonth;
};
