/* eslint-disable react-native/no-inline-styles */
import React, {useCallback} from 'react';
import {ViewStyle, StyleSheet, TextStyle} from 'react-native';
import {ScrollView, HStack, Icon, Text, Pressable, VStack} from 'native-base';
import {useState} from 'react';
import {useMemo} from 'react';
import {sort} from 'fast-sort';
import CustomTablePagination from './CustomTablePagination';
import CustomTableHeader from './CustomTableHeader';
import Feather from 'react-native-vector-icons/Feather';
import {useEffect} from 'react';
import {Col, Row, Grid} from 'react-native-easy-grid';
import LoadingOverlay from '../Overlay/LoadingOverlay';

export type CustomTableColumn<T extends object = {}> = {
  Header: string;
  accessor: keyof T;
  widthFixed?: number;
  widthRatio?: number;
  isAvatar?: boolean;
  isAction?: boolean;
  isDisableSort?: boolean;
  isSkip?: boolean;
};

export type CustomTableFooter<T extends object = {}> = {
  accessor: keyof T;
  value: string;
};

interface Props<T extends Record<string, unknown>> {
  data: T[];
  columns: CustomTableColumn<T>[];
  footer?: CustomTableFooter<T>[];
  isLoading: boolean;
  tableWidth?: number | '100%';
  rowHeight?: number;
  possibleRowsPerPage?: number[];
  headerHeight?: number;
  headerStyle?: ViewStyle;
  headerTextStyle?: TextStyle;
  textStyle?: TextStyle;
  childColor?: string;
  childColorOdd?: string;
  withTableHeader?: boolean;
  withPagination?: boolean;
  defaultSortFrom?: 'asc' | 'desc';
  keyAccessor?: keyof T;
  customTopComponent?: React.ComponentType<any>;
}
const CustomTable = <T extends Record<string, unknown>>({
  data,
  columns,
  footer,
  isLoading = true,
  possibleRowsPerPage = [10, 25, 50],
  tableWidth = '100%',
  headerHeight = 70,
  rowHeight = 50,
  headerStyle,
  headerTextStyle,
  textStyle,
  childColor = '#e4e4e7',
  childColorOdd = '#fafafa',
  withTableHeader = true,
  withPagination = true,
  defaultSortFrom = 'asc',
  keyAccessor = 'id',
  customTopComponent: CustomTopComponent,
}: Props<T>) => {
  const styles = {
    tableStyle: {...defaultStyles.tableStyle, width: tableWidth},
    header: headerStyle || {...defaultStyles.header, height: headerHeight},
    headerText: headerTextStyle || defaultStyles.headerText,
    text: textStyle || defaultStyles.text,
    row: {
      ...defaultStyles.row,
      height: rowHeight,
      backgroundColor: childColor,
    } as ViewStyle,
    rowOdd: {
      ...defaultStyles.row,
      height: rowHeight,
      backgroundColor: childColorOdd,
    } as ViewStyle,
  };

  // header
  const [searchTerm, setSearhTerm] = useState('');
  const [orderDirection, setOrderDirection] = useState<'asc' | 'desc'>(
    defaultSortFrom,
  );
  const [valueToOrderBy, setValueToOrderBy] = useState<
    CustomTableColumn<T>['accessor']
  >(
    columns.find(col => col?.isDisableSort === false || !col?.isDisableSort)
      ?.accessor || '',
  );

  // pagination
  const [currentPage, setCurrentPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(
    withPagination ? possibleRowsPerPage[0] : 999999999,
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
    (valueToOrderByNew: keyof T) => {
      const isAscending =
        valueToOrderBy === valueToOrderByNew && orderDirection === 'asc';

      setValueToOrderBy(valueToOrderByNew);
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

  const headerCell = useCallback(
    (text: string, accessor: keyof T, isDisableSort: boolean) => {
      if (isDisableSort) {
        return <Text color="milano_red.500">{text}</Text>;
      } else {
        return (
          <Pressable onPress={() => handleRequestSort(accessor)}>
            <HStack space="3" alignItems="center">
              <Text color="milano_red.500">{text}</Text>
              <Icon
                as={Feather}
                name={orderDirection === 'asc' ? 'arrow-down' : 'arrow-up'}
                size="4"
                color={
                  valueToOrderBy === accessor ? 'milano_red.500' : 'transparent'
                }
              />
            </HStack>
          </Pressable>
        );
      }
    },
    [handleRequestSort, orderDirection, valueToOrderBy],
  );

  const footerCell = useCallback(
    (accessor: keyof T) => {
      if (!footer) return null;
      const found = footer.find(val => val.accessor === accessor);

      if (found) {
        return (
          <Row style={styles.header}>
            <Text>{found.value}</Text>
          </Row>
        );
      } else {
        return <Row style={styles.header}>{null}</Row>;
      }
    },
    [footer, styles.header],
  );

  const table = useCallback(
    () => (
      <Grid style={{width: tableWidth}}>
        {columns
          .filter(col => (col?.isSkip ? !col.isSkip : true))
          .map(col => (
            <Col
              key={col.Header}
              style={{
                width: col.widthFixed ? col.widthFixed : undefined,
              }}
              size={col.widthRatio ? col.widthRatio : undefined}>
              <Row style={styles.header}>
                {headerCell(
                  col.Header,
                  col.accessor,
                  col?.isDisableSort ? col.isDisableSort : false,
                )}
              </Row>
              {processedData.map((rowdata, i) => (
                <Row
                  key={`${col.Header}${col.accessor}${i}${rowdata[keyAccessor]}`}
                  style={[
                    i % 2 ? styles.rowOdd : styles.row,
                    col?.isAvatar
                      ? {
                          paddingTop: 25,
                        }
                      : undefined,
                    col?.isAction
                      ? {
                          paddingTop: 10,
                        }
                      : undefined,
                  ]}>
                  {typeof rowdata[col.accessor] === 'function' ? (
                    (rowdata[col.accessor] as React.ReactElement)
                  ) : (
                    <Text>{rowdata[col.accessor] as string}</Text>
                  )}
                </Row>
              ))}
              {footer && footerCell(col.accessor)}
            </Col>
          ))}
      </Grid>
    ),
    [
      columns,
      footer,
      footerCell,
      headerCell,
      processedData,
      styles.header,
      styles.row,
      styles.rowOdd,
    ],
  );

  return (
    <VStack w={tableWidth}>
      {CustomTopComponent && <CustomTopComponent />}
      <LoadingOverlay size="md" visible={isLoading} />
      {withTableHeader && (
        <CustomTableHeader
          {...{
            searchTerm,
            setSearhTerm,
            customTableHeaderStyle: CustomTopComponent
              ? {
                  borderTopLeftRadius: 'none',
                  borderTopRightRadius: 'none',
                  paddingTop: 0,
                }
              : undefined,
          }}
        />
      )}
      {tableWidth === '100%' ? (
        table()
      ) : (
        <ScrollView horizontal={true} nestedScrollEnabled={true}>
          {table()}
        </ScrollView>
      )}
      {withPagination && (
        <CustomTablePagination
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          rowsPerPage={rowsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          dataLength={data.length}
          possibleRowsPerPage={possibleRowsPerPage}
        />
      )}
    </VStack>
  );
};

const defaultStyles = StyleSheet.create({
  tableStyle: {
    width: '100%',
  },
  header: {
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerText: {
    fontWeight: '500',
    color: '#dc2626',
    paddingHorizontal: 20,
  },
  text: {
    fontWeight: '300',
    color: '#000',
    paddingHorizontal: 20,
  },
  dataWrapper: {
    marginTop: -1,
  },
  row: {
    backgroundColor: '#e4e4e7',
    alignItems: 'center',
    position: 'relative',
    paddingHorizontal: 20,
  },
});

export default CustomTable;
