import React from 'react';
import {Button, HStack, Text} from 'native-base';
import dayjs from 'dayjs';

interface IClockPickerProps {
  inputDate: string;
  onPress: () => void;
}
export const ClockPicker = ({inputDate, onPress}: IClockPickerProps) => {
  const date = dayjs(inputDate);
  return (
    <Button variant={'outline'} onPress={onPress}>
      {date.isValid() ? (
        <HStack space="2">
          <Text fontWeight="bold">{dayjs(inputDate).format('HH')}</Text>
          <Text fontWeight="bold">{dayjs(inputDate).format(':')}</Text>
          <Text fontWeight="bold">{dayjs(inputDate).format('mm')}</Text>
        </HStack>
      ) : (
        'Belum ada data'
      )}
    </Button>
  );
};
