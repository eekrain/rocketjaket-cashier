/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Select,
  CheckIcon,
  HStack,
  IconButton,
  Icon,
  Box,
  Text,
} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
interface Props {
  handleChangeRowsPerPage: (newValue: number) => void;
  rowsPerPage: number;
  optionRowsPerPage: number[];
  currentPage: number;
  dataLength: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const CustomTablePagination = ({
  optionRowsPerPage,
  handleChangeRowsPerPage,
  rowsPerPage,
  currentPage,
  dataLength,
  setCurrentPage,
}: Props) => {
  return (
    <HStack
      bgColor="white"
      alignItems="center"
      style={{padding: 20}}
      borderBottomLeftRadius="xl"
      borderBottomRightRadius="xl">
      <Box mr="4">
        <IconButton
          disabled={currentPage <= 0}
          isDisabled={currentPage <= 0}
          onPress={() => {
            console.log(
              '🚀 ~ file: CustomTablePagination.tsx ~ line 44 ~ onPress',
              currentPage,
            );
            setCurrentPage(currentPage - 1);
          }}
          size="sm"
          variant="solid"
          icon={<Icon as={Feather} name="chevron-left" size="sm" />}
        />
      </Box>
      <Box mr="8">
        <IconButton
          disabled={currentPage >= Math.ceil(dataLength / rowsPerPage) - 1}
          isDisabled={currentPage >= Math.ceil(dataLength / rowsPerPage) - 1}
          onPress={() => {
            console.log(
              '🚀 ~ file: CustomTablePagination.tsx ~ line 44 ~ onPress',
              currentPage,
            );
            setCurrentPage(currentPage + 1);
          }}
          size="sm"
          variant="solid"
          icon={<Icon as={Feather} name="chevron-right" size="sm" />}
        />
      </Box>
      <Text mr="10">
        Halaman{' '}
        {`${currentPage + 1} dari ${Math.ceil(dataLength / rowsPerPage)}`}
      </Text>
      <HStack alignItems="center">
        <Text mr="3">Tampilkan</Text>
        <Select
          selectedValue={rowsPerPage.toString()}
          accessibilityLabel="Rows per Page"
          placeholder="Rows per Page"
          w={100}
          _selectedItem={{
            bg: 'primary.300',
            endIcon: <CheckIcon size="3" ml="2" />,
          }}
          mt={1}
          onValueChange={itemValue =>
            handleChangeRowsPerPage(parseInt(itemValue, 10))
          }>
          {optionRowsPerPage.map(num => (
            <Select.Item
              key={num}
              label={num.toString()}
              value={num.toString()}
            />
          ))}
        </Select>
        <Text mr="3">per halaman.</Text>
      </HStack>
    </HStack>
  );
};

export default CustomTablePagination;
