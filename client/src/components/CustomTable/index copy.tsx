/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {ViewStyle, StyleSheet, TextStyle} from 'react-native';
import {
  ScrollView,
  View,
  Box,
  HStack,
  Icon,
  Text,
  Pressable,
} from 'native-base';
import {useState} from 'react';
import {Table, Row} from 'react-native-table-component';
import {useMemo} from 'react';
import {sort} from 'fast-sort';
import CustomTablePagination from './CustomTablePagination';
import CustomTableHeader from './CustomTableHeader';
import Feather from 'react-native-vector-icons/Feather';
import {useEffect} from 'react';

export type CustomTableColumn<T extends object = {}> = {
  Header: string;
  accessor: keyof T;
  width: number;
};

interface Props<T extends Record<string, unknown>> {
  data: T[];
  columns: CustomTableColumn<T>[];
  possibleRowsPerPage?: number[];
  headerStyle?: ViewStyle;
  headerTextStyle?: TextStyle;
  textStyle?: TextStyle;
  childColor?: string;
  childColorOdd?: string;
}
const CustomTable = <T extends Record<string, unknown>>({
  data,
  columns,
  possibleRowsPerPage = [10, 25, 50],
  headerStyle,
  headerTextStyle,
  textStyle,
  childColor = '#e4e4e7',
  childColorOdd = '#fafafa',
}: Props<T>) => {
  const styles = {
    header: headerStyle || defaultStyles.header,
    headerText: headerTextStyle || defaultStyles.headerText,
    text: textStyle || defaultStyles.text,
    row: {
      ...defaultStyles.row,
      backgroundColor: childColor,
    } as ViewStyle,
  };

  // header
  const [searchTerm, setSearhTerm] = useState('');
  const [orderDirection, setOrderDirection] = useState<'asc' | 'desc'>('asc');
  const [valueToOrderBy, setValueToOrderBy] = useState<
    CustomTableColumn<T>['accessor']
  >(columns[0].accessor);

  // pagination
  const [currentPage, setCurrentPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(possibleRowsPerPage[0]);

  useEffect(() => {
    if (searchTerm) {
      setCurrentPage(0);
    }
  }, [searchTerm]);

  const handleChangeRowsPerPage = (newValue: number) => {
    setRowsPerPage(newValue);
  };

  const handleRequestSort = (valueToOrderByNew: keyof T) => {
    const isAscending =
      valueToOrderBy === valueToOrderByNew && orderDirection === 'asc';

    setValueToOrderBy(valueToOrderByNew);
    setOrderDirection(isAscending ? 'desc' : 'asc');
  };

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

    const readyRender: any[] = [];
    paginated.forEach(single => {
      const inside: T[keyof T][] = [];
      columns.forEach(colDef => {
        inside.push(single[colDef.accessor]);
      });
      readyRender.push(inside);
    });
    return readyRender;
  }, [
    columns,
    currentPage,
    data,
    orderDirection,
    rowsPerPage,
    searchTerm,
    valueToOrderBy,
  ]);

  const totalWidth = useMemo(
    () => columns.reduce((total, num) => total + Math.round(num.width), 0),
    [columns],
  );

  const widthArr = useMemo(() => {
    return columns.map(coldef => coldef.width);
  }, [columns]);

  const headerCellWithSort = (text: string, accessor: keyof T) => {
    return (
      <Pressable onPress={() => handleRequestSort(accessor)}>
        <HStack space="3" alignItems="center" style={{paddingHorizontal: 20}}>
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
  };

  return (
    <>
      <ScrollView horizontal={true} nestedScrollEnabled={true}>
        <View>
          <CustomTableHeader {...{searchTerm, setSearhTerm}} />
          <Table>
            <Row
              data={columns.map(col =>
                headerCellWithSort(col.Header, col.accessor),
              )}
              widthArr={widthArr}
              // @ts-ignore: Unreachable code error
              style={styles.header}
            />
            {processedData.map((row, index) => (
              <Row
                key={`${row[valueToOrderBy]}${index}`}
                data={row}
                widthArr={widthArr}
                // @ts-ignore: Unreachable code error
                style={[
                  styles.row,
                  index % 2 && {backgroundColor: childColorOdd},
                ]}
                textStyle={styles.text}
              />
            ))}
          </Table>

          <CustomTablePagination
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            rowsPerPage={rowsPerPage}
            currentPage={currentPage}
            totalWidth={totalWidth}
            setCurrentPage={setCurrentPage}
            dataLength={data.length}
            possibleRowsPerPage={possibleRowsPerPage}
          />
        </View>
      </ScrollView>
    </>
  );
};

const defaultStyles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: 'white',
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
    height: 40,
    backgroundColor: '#e4e4e7',
  },
});

export default CustomTable;
