import {FormControl, Checkbox, Stack} from 'native-base';
import React from 'react';
import {Control, Controller} from 'react-hook-form';

interface ICheckboxOptions {
  value: string;
  label: string;
}

interface IRHCheckBoxProps {
  checkboxOptions: ICheckboxOptions[];
  name: string;
  label: string;
  control: Control<any>;
  errors: {
    [x: string]: any;
  };
  flexDirection?: 'row' | 'column';
  flexWrap?: 'wrap' | 'wrap-reverse';
  checkboxSpacing?: number;
  extendedOnChange?: (itemValue?: any) => void;
}

export const RHCheckBox = ({
  checkboxOptions,
  name,
  label,
  control,
  errors,
  checkboxSpacing,
  flexDirection = 'column',
  flexWrap,
  extendedOnChange,
}: IRHCheckBoxProps) => {
  return (
    <FormControl isInvalid={name in errors}>
      <FormControl.Label>{label}</FormControl.Label>
      <Controller
        name={name}
        control={control}
        render={({field: {onChange, value}}) => (
          <Checkbox.Group
            value={value}
            onChange={(itemValue: any) => {
              onChange(itemValue);
              // console.log('🚀 ~ file: index.tsx ~ line 55 ~ onChange');
              if (typeof extendedOnChange === 'function') {
                extendedOnChange(itemValue);
              }
            }}>
            <Stack
              direction={flexDirection}
              flexWrap={flexWrap}
              space={checkboxSpacing}>
              {checkboxOptions.map((opt, index) => (
                <Checkbox
                  key={`${opt.label}${opt.value}${index}`}
                  value={opt.value}>
                  {opt.label}
                </Checkbox>
              ))}
            </Stack>
          </Checkbox.Group>
        )}
      />
      <FormControl.ErrorMessage>
        {errors[name]?.message}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};
