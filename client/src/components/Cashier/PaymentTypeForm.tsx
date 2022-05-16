import React from 'react';
import {
  Box,
  Text,
  Center,
  Heading,
  HStack,
  VStack,
  Button,
  Icon,
} from 'native-base';
import {useMyCart} from '../../state';
import {myNumberFormat} from '../../shared/utils';
import Feather from 'react-native-vector-icons/Feather';
import {PAYMENT_METHOD} from '../../shared/constants';
import {Control, UseFormSetValue} from 'react-hook-form';
import {RHNumberInput, DismissKeyboardWrapper} from '../../shared/components';
import {ICashierCartDefaultValues} from './CashierCart';
import {TransactionPaymentTypeEnum} from '../../graphql/gql-generated';

interface Props {
  control: Control<ICashierCartDefaultValues, object>;
  errors: any;
  formValue: ICashierCartDefaultValues;
  setValue: UseFormSetValue<ICashierCartDefaultValues>;
}

const PaymentTypeForm = ({control, errors, formValue, setValue}: Props) => {
  const myCart = useMyCart();

  return (
    <DismissKeyboardWrapper>
      <Box>
        <Center>
          <Heading fontSize="lg">Total</Heading>
          <Heading fontSize="lg" color="green.700">
            {myNumberFormat.rp(myCart.getTotalPrice())}
          </Heading>
        </Center>
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
            {formValue.payment_type === TransactionPaymentTypeEnum.Cash && (
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
        <HStack mt="6" alignItems="center">
          <Text fontSize="lg" w={100}>
            EDC
          </Text>
          <HStack
            space="4"
            flex={1}
            flexWrap="wrap"
            justifyContent="space-between">
            {PAYMENT_METHOD.edc.map(opt => (
              <Button
                onPress={() => {
                  setValue('payment_type', opt.payment_type);
                }}
                key={opt.payment_type}
                w="30%"
                variant={
                  formValue.payment_type === opt.payment_type
                    ? 'solid'
                    : 'outline'
                }
                bg={
                  formValue.payment_type === opt.payment_type
                    ? undefined
                    : 'white'
                }>
                {opt.title}
              </Button>
            ))}
          </HStack>
        </HStack>
        <HStack mt="6" alignItems="center">
          <Text fontSize="lg" w={100}>
            E-Wallet
          </Text>
          <HStack
            space="4"
            flex={1}
            flexWrap="wrap"
            justifyContent="space-between">
            {PAYMENT_METHOD.ewallet.map(opt => (
              <Button
                onPress={() => {
                  setValue('payment_type', opt.payment_type);
                }}
                key={opt.payment_type}
                w="30%"
                variant={
                  formValue.payment_type === opt.payment_type
                    ? 'solid'
                    : 'outline'
                }
                bg={
                  formValue.payment_type === opt.payment_type
                    ? undefined
                    : 'white'
                }>
                {opt.title}
              </Button>
            ))}
          </HStack>
        </HStack>
      </Box>
    </DismissKeyboardWrapper>
  );
};

export default PaymentTypeForm;
