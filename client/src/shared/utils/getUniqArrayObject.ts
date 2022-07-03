export const getUniqArrayObject = (arr: any[], accessor: string) => [
  ...new Map(arr.map(item => [item[accessor], item])).values(),
];
