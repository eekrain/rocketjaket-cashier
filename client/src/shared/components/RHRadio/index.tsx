import {FormControl, Radio, Stack, IBoxProps} from 'native-base';
import React from 'react';
import {Control, Controller} from 'react-hook-form';

interface IRadioOptions {
  value: string;
  label: string;
}

interface IRHRadioProps {
  radioOptions: IRadioOptions[];
  name: string;
  label: string;
  control: Control<any>;
  errors: {
    [x: string]: any;
  };
  flexDirection?: 'row' | 'column';
  flexWrap?: IBoxProps['flexWrap'];
  alignItems?: IBoxProps['alignItems'];
  radioSpacing?: number;
  extendedOnChange?: (itemValue?: any) => void;
}

export const RHRadio = ({
  radioOptions,
  name,
  label,
  control,
  errors,
  radioSpacing,
  flexDirection = 'column',
  flexWrap = 'nowrap',
  alignItems = 'flex-start',
  extendedOnChange,
}: IRHRadioProps) => {
  return (
    <FormControl isInvalid={name in errors}>
      <FormControl.Label>{label}</FormControl.Label>
      <Controller
        name={name}
        control={control}
        render={({field: {onChange, value}}) => (
          <Radio.Group
            name={name}
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
              space={radioSpacing}
              alignItems={alignItems}>
              {radioOptions.map((opt, index) => (
                <Radio
                  key={`${opt.label}${opt.value}${index}`}
                  value={opt.value}>
                  {opt.label}
                </Radio>
              ))}
            </Stack>
          </Radio.Group>
        )}
      />
      <FormControl.ErrorMessage>
        {errors[name]?.message}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};
