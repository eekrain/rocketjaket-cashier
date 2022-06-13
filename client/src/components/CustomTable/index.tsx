/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useMemo, useState} from 'react';
import {
  ViewStyle,
  StyleSheet,
  TextStyle,
  ScrollView,
  View,
  useWindowDimensions,
} from 'react-native';
import {HStack, Icon, Text, Pressable, VStack, Box} from 'native-base';
import {sort} from 'fast-sort';
import CustomTablePagination from './CustomTablePagination';
import CustomTableSearchHeader from './CustomTableSearchHeader';
import Feather from 'react-native-vector-icons/Feather';
import {useEffect} from 'react';
import {Col, Row, Grid} from 'react-native-easy-grid';
import LoadingOverlay from '../Overlay/LoadingOverlay';
import {
  CustomTable,
  CustomTableColumn,
  CustomTableFooter,
  ICustomTableSettings,
} from './CustomTable';

interface IMyCustomTableProps<T extends Record<string, unknown>> {
  data: T[];
  isLoading: boolean;
  columns: CustomTableColumn<T>[];
  rowKeysAccessor?: keyof T;
  footer?: CustomTableFooter<T>[];
  tableSettings: ICustomTableSettings;
}
const MyCustomTable = <T extends Record<string, unknown>>({
  data,
  isLoading = true,
  columns,
  rowKeysAccessor = 'id',
  footer,
  tableSettings: tableSettingParams,
}: IMyCustomTableProps<T>) => {
  const window = useWindowDimensions();

  const tableSettings = {
    ...tableSettingParams,
    mainSettings: {
      ...tableSettingParams.mainSettings,
      tableWidth:
        tableSettingParams.mainSettings.tableWidth === 'full'
          ? window.width - 32
          : tableSettingParams.mainSettings.tableWidth,
      withPagination:
        tableSettingParams.mainSettings.withPagination === false
          ? false
          : tableSettingParams.mainSettings.withPagination === undefined
          ? true
          : true,
      defaultSortFrom:
        tableSettingParams?.mainSettings?.defaultSortFrom || 'asc',
      optionRowsPerPage: tableSettingParams?.mainSettings
        ?.optionRowsPerPage || [10, 25, 50],
      withSearch:
        tableSettingParams.mainSettings.withSearch === false
          ? false
          : tableSettingParams.mainSettings.withSearch === undefined
          ? true
          : true,
    },
    header: {
      ...tableSettingParams.header,
      headerHeight: tableSettingParams?.header?.headerHeight || 70,
      withTableHeader: tableSettingParams?.header?.withTableHeader || true,
    },
    row: {
      ...tableSettingParams.row,
      childColor: tableSettingParams?.row?.childColor || '#e4e4e7',
      childColorOdd: tableSettingParams?.row?.childColor || '#fafafa',
      rowHeight: tableSettingParams?.row?.rowHeight || 60,
    },
  };

  // console.log(
  //   '🚀 ~ file: index.tsx ~ line 42 ~ tableSettingParams.mainSettings',
  //   tableSettingParams.mainSettings,
  // );
  // console.log(
  //   '🚀 ~ file: index.tsx ~ line 42 ~ tableSettings.mainSettings',
  //   tableSettings.mainSettings,
  // );

  const [searchTerm, setSearhTerm] = useState('');
  const [orderDirection, setOrderDirection] = useState<'asc' | 'desc'>(
    tableSettings.mainSettings.defaultSortFrom,
  );
  const [valueToOrderBy, setValueToOrderBy] = useState<
    CustomTableColumn<T>['accessor']
  >(
    columns.find(col => col?.isDisableSort === false || !col?.isDisableSort)
      ?.accessor || '',
  );
  const [valueToOrderByForDisplay, setValueToOrderByForDisplay] = useState<
    CustomTableColumn<T>['accessor']
  >(
    columns.find(col => col?.isDisableSort === false || !col?.isDisableSort)
      ?.accessor || '',
  );

  // pagination
  const [currentPage, setCurrentPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(
    tableSettings.mainSettings.withPagination
      ? tableSettings.mainSettings.optionRowsPerPage[0]
      : 999999999,
  );

  useEffect(() => {
    if (searchTerm) {
      setCurrentPage(0);
    }
  }, [searchTerm]);

  const handleChangeRowsPerPage = (newValue: number) => {
    setRowsPerPage(newValue);
  };

  const handleRequestSort = useCallback(
    (
      actualValueToOrderByNew: keyof T,
      valueToOrderByNewForDisplay?: keyof T,
    ) => {
      const isAscending =
        valueToOrderBy === actualValueToOrderByNew && orderDirection === 'asc';

      setValueToOrderBy(actualValueToOrderByNew);
      setValueToOrderByForDisplay(
        valueToOrderByNewForDisplay
          ? valueToOrderByNewForDisplay
          : actualValueToOrderByNew,
      );
      setOrderDirection(isAscending ? 'desc' : 'asc');
    },
    [orderDirection, valueToOrderBy],
  );

  const processedData = useMemo(() => {
    const filtered = data.filter(value => {
      let isInclude = false;

      for (const key in value) {
        if (
          isInclude === false &&
          Object.prototype.hasOwnProperty.call(value, key)
        ) {
          const element = value[key];
          if (typeof element === 'string') {
            isInclude = element
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
          }
        }
      }
      return isInclude;
    });

    const sorted =
      orderDirection === 'asc'
        ? sort(filtered).by([{asc: d => d[valueToOrderBy]}])
        : sort(filtered).by([{desc: d => d[valueToOrderBy]}]);

    const paginated = sorted.slice(
      currentPage * rowsPerPage,
      currentPage * rowsPerPage + rowsPerPage,
    );

    return paginated;
  }, [
    currentPage,
    data,
    orderDirection,
    rowsPerPage,
    searchTerm,
    valueToOrderBy,
  ]);

  return (
    <VStack bgColor="white" borderRadius={'xl'}>
      {tableSettings.customComponent?.top && (
        <tableSettings.customComponent.top />
      )}
      <LoadingOverlay size="md" visible={isLoading} />
      {tableSettings.mainSettings.withSearch && (
        <CustomTableSearchHeader
          {...{
            searchTerm,
            setSearhTerm,
            customTableHeaderStyle: tableSettings.header.headerStyle
              ? {
                  borderTopLeftRadius: 'none',
                  borderTopRightRadius: 'none',
                  paddingTop: 0,
                }
              : undefined,
          }}
        />
      )}
      <CustomTable
        columns={columns}
        handleRequestSort={handleRequestSort}
        orderDirection={orderDirection}
        processedData={processedData}
        rowKeysAccessor={rowKeysAccessor}
        tableSettings={tableSettings}
        valueToOrderByForDisplay={valueToOrderByForDisplay}
        footer={footer}
      />
      {tableSettings.mainSettings.withPagination && (
        <CustomTablePagination
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          rowsPerPage={rowsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          dataLength={data.length}
          optionRowsPerPage={tableSettings.mainSettings.optionRowsPerPage}
        />
      )}

      {tableSettings.customComponent?.bottom && (
        <tableSettings.customComponent.bottom />
      )}
    </VStack>
  );
};

export default MyCustomTable;
