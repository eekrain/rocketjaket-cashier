import {IInputProps, FormControl, TextField} from 'native-base';
import React from 'react';
import {Control, Controller} from 'react-hook-form';
import {myNumberFormat} from '../../utils';

type TRHTextInputFormat = 'phoneNumber';
interface IRHTextInputProps extends IInputProps {
  name: string;
  label: string;
  control: Control<any>;
  errors: {
    [x: string]: any;
  };
  isDisableLabel?: boolean;
  overrideErrorName?: string;
  format?: TRHTextInputFormat;
}

const formatText = (text: string, format?: TRHTextInputFormat) => {
  if (format === 'phoneNumber') {
    const tes = myNumberFormat.phoneNumber(text, 'withoutFirst');
    console.log('🚀 ~ file: index.tsx ~ line 22 ~ formatText ~ tes', tes);
    return myNumberFormat.phoneNumber(text, 'withoutFirst');
  } else {
    return text;
  }
};

const RHTextInput = ({
  name,
  label,
  control,
  errors,
  placeholder,
  isDisableLabel,
  overrideErrorName,
  format,
  ...rest
}: IRHTextInputProps) => {
  return (
    <FormControl
      isInvalid={
        overrideErrorName ? overrideErrorName in errors : name in errors
      }>
      {!isDisableLabel ? <FormControl.Label>{label}</FormControl.Label> : null}
      <Controller
        name={name}
        control={control}
        render={({field: {onChange, value}}) => {
          console.log('🚀 ~ file: index.tsx ~ line 68 ~ value', value);
          return (
            <TextField
              onChangeText={val => {
                console.log('🚀 ~ file: index.tsx ~ line 63 ~ val', val);
                onChange(formatText(val, format));
              }}
              textTransform="none"
              autoCapitalize="none"
              value={value}
              placeholder={placeholder ? placeholder : label}
              {...rest}
            />
          );
        }}
      />
      <FormControl.ErrorMessage>
        {overrideErrorName
          ? errors[overrideErrorName]?.message
          : errors[name]?.message}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};

export default RHTextInput;
