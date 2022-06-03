import React from 'react';
import {Box, Text, VStack, HStack, Button, Icon} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import {TransactionPaymentTypeEnum} from '../../graphql/gql-generated';
import {Control, UseFormSetValue} from 'react-hook-form';
import {ICashierCartDefaultValues} from './Cart';
import {RHNumberInput} from '../../shared/components';
import {PAYMENT_METHOD} from '../../shared/constants';

interface PaymentTypeButtonProps {
  formValue: ICashierCartDefaultValues;
  setValue: UseFormSetValue<ICashierCartDefaultValues>;
}

interface CashButtonsProps extends PaymentTypeButtonProps {
  control: Control<ICashierCartDefaultValues, object>;
  errors: any;
  isShowInputCash: boolean;
}

export const CashButtons = ({
  setValue,
  formValue,
  control,
  errors,
  isShowInputCash,
}: CashButtonsProps) => {
  return (
    <HStack mt="8" alignItems="center">
      <Text fontSize="lg" w={100}>
        Cash
      </Text>
      <VStack space="4" flex={1}>
        <Box w="30%">
          <Button
            onPress={() =>
              setValue('payment_type', TransactionPaymentTypeEnum.Cash)
            }
            variant={
              formValue.payment_type === TransactionPaymentTypeEnum.Cash
                ? 'solid'
                : 'outline'
            }
            bg={
              formValue.payment_type === TransactionPaymentTypeEnum.Cash
                ? undefined
                : 'white'
            }
            leftIcon={<Icon as={Feather} name="dollar-sign" size="sm" />}>
            Cash
          </Button>
        </Box>
        {formValue.payment_type === TransactionPaymentTypeEnum.Cash &&
          isShowInputCash && (
            <RHNumberInput
              keyboardType="number-pad"
              name="cash_in_amount"
              control={control}
              errors={errors}
              label="Uang Masuk"
              format="rp"
            />
          )}
      </VStack>
    </HStack>
  );
};

export const EDCButtons = ({setValue, formValue}: PaymentTypeButtonProps) => {
  return (
    <HStack mt="6" alignItems="center">
      <Text fontSize="lg" w={100}>
        EDC
      </Text>
      <HStack space="4" flex={1} flexWrap="wrap" justifyContent="space-between">
        {PAYMENT_METHOD.edc.map(opt => (
          <Button
            onPress={() => {
              setValue('payment_type', opt.payment_type);
            }}
            key={opt.payment_type}
            w="30%"
            variant={
              formValue.payment_type === opt.payment_type ? 'solid' : 'outline'
            }
            bg={
              formValue.payment_type === opt.payment_type ? undefined : 'white'
            }>
            {opt.title}
          </Button>
        ))}
      </HStack>
    </HStack>
  );
};

export const EwalletButtons = ({
  setValue,
  formValue,
}: PaymentTypeButtonProps) => {
  return (
    <HStack mt="6" alignItems="center">
      <Text fontSize="lg" w={100}>
        E-Wallet
      </Text>
      <HStack space="4" flex={1} flexWrap="wrap" justifyContent="space-between">
        {PAYMENT_METHOD.ewallet.map(opt => (
          <Button
            onPress={() => {
              setValue('payment_type', opt.payment_type);
            }}
            key={opt.payment_type}
            w="30%"
            variant={
              formValue.payment_type === opt.payment_type ? 'solid' : 'outline'
            }
            bg={
              formValue.payment_type === opt.payment_type ? undefined : 'white'
            }>
            {opt.title}
          </Button>
        ))}
      </HStack>
    </HStack>
  );
};
