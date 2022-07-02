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
import CustomTableHeader from './CustomTableSearchHeader';
import Feather from 'react-native-vector-icons/Feather';
import {useEffect} from 'react';
import {Col, Row, Grid} from 'react-native-easy-grid';
import LoadingOverlay from '../Overlay/LoadingOverlay';

export interface ICustomTableSettings {
  mainSettings: {
    tableWidth: number | 'full';
    tableHeight?: number;
    withPagination?: boolean;
    optionRowsPerPage?: number[];
    withSearch?: boolean;
    defaultSortFrom?: 'asc' | 'desc';
  };
  header?: {
    headerHeight?: number;
    headerStyle?: ViewStyle;
    headerTextStyle?: TextStyle;
    withTableHeader?: boolean;
  };
  row?: {
    rowHeight?: number;
    childColor?: string;
    childColorOdd?: string;
    textStyle?: TextStyle;
  };
  customComponent?: {
    top?: React.ComponentType<any>;
    bottom?: React.ComponentType<any>;
  };
}

export type CustomTableColumn<T extends object = {}> = {
  Header: string;
  accessor: keyof T;
  sortAs?: keyof T;
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

interface ICustomTableProps<T extends Record<string, unknown>> {
  columns: CustomTableColumn<T>[];
  processedData: T[];
  tableSettings: ICustomTableSettings;
  handleRequestSort: (
    actualValueToOrderByNew: keyof T,
    valueToOrderByNewForDisplay?: keyof T | undefined,
  ) => void;
  orderDirection: 'asc' | 'desc';
  valueToOrderByForDisplay: keyof T;
  footer?: CustomTableFooter<T>[];
  rowKeysAccessor: keyof T;
}

export const CustomTable = <T extends Record<string, unknown>>({
  columns,
  processedData,
  tableSettings,
  handleRequestSort,
  orderDirection,
  valueToOrderByForDisplay,
  footer,
  rowKeysAccessor,
}: ICustomTableProps<T>) => {
  const styles = {
    header: {
      headerStyle: {
        ...defaultStyles.header,
        ...tableSettings.header?.headerStyle,
        height: tableSettings.header?.headerHeight,
      },
      headerTextStyle: {
        ...defaultStyles.headerText,
        ...tableSettings.header?.headerTextStyle,
      },
    },
    row: {
      textStyle: {...defaultStyles.text, ...tableSettings.row?.textStyle},
      rowStyle: {
        ...defaultStyles.row,
        height: tableSettings.row?.rowHeight,
        backgroundColor: tableSettings.row?.childColor,
      },
      rowOddStyle: {
        ...defaultStyles.row,
        height: tableSettings.row?.rowHeight,
        backgroundColor: tableSettings.row?.childColorOdd,
      },
    },
  };

  const headerCell = useCallback(
    (col: CustomTableColumn<T>) => {
      if (col.isDisableSort === true) {
        return <Text color="milano_red.500">{col.Header}</Text>;
      } else {
        return (
          <Pressable
            onPress={() =>
              handleRequestSort(col.sortAs || col.accessor, col.accessor)
            }>
            <HStack space="3" alignItems="center">
              <Text color="milano_red.500">{col.Header}</Text>
              <Icon
                as={Feather}
                name={orderDirection === 'asc' ? 'arrow-down' : 'arrow-up'}
                size="4"
                color={
                  valueToOrderByForDisplay === col.accessor
                    ? 'milano_red.500'
                    : 'transparent'
                }
              />
            </HStack>
          </Pressable>
        );
      }
    },
    [handleRequestSort, orderDirection, valueToOrderByForDisplay],
  );

  const footerCell = useCallback(
    (accessor: keyof T) => {
      if (!footer) return null;
      const found = footer.find(val => val.accessor === accessor);

      if (found) {
        return (
          <Row style={styles.header.headerStyle}>
            <Text>{found.value}</Text>
          </Row>
        );
      } else {
        return <Row style={styles.header.headerStyle}>{null}</Row>;
      }
    },
    [footer, styles.header],
  );

  const lengthMin1 = processedData.length > 0 ? processedData.length : 1;

  const tableHeight = tableSettings.mainSettings?.tableHeight
    ? tableSettings.mainSettings?.tableHeight
    : lengthMin1 * tableSettings.row!.rowHeight! +
      tableSettings.header!.headerHeight! +
      1;

  return (
    <ScrollView horizontal={true} nestedScrollEnabled={true}>
      <Box
        width={tableSettings.mainSettings.tableWidth}
        height={tableHeight}
        backgroundColor="red">
        <Grid
          style={{
            width: tableSettings.mainSettings.tableWidth,
          }}>
          {columns
            .filter(col => (col?.isSkip ? !col.isSkip : true))
            .map(col => (
              <Col
                key={col.Header}
                style={{
                  width: col.widthFixed ? col.widthFixed : undefined,
                }}
                size={col.widthRatio ? col.widthRatio : undefined}>
                <Row style={styles.header.headerStyle}>{headerCell(col)}</Row>
                {processedData.map((rowdata, i) => (
                  <Row
                    key={`${col.Header}${col.accessor}${i}${rowdata[rowKeysAccessor]}`}
                    style={[
                      i % 2 ? styles.row.rowOddStyle : styles.row.rowStyle,
                      col?.isAvatar
                        ? {
                            paddingTop: 25,
                          }
                        : undefined,
                      col?.isAction
                        ? {
                            paddingTop: 0,
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
      </Box>
    </ScrollView>
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
