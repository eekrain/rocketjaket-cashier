import React from 'react';
import {
  Box,
  Text,
  Center,
  Heading,
  HStack,
  Button,
  IconButton,
  Icon,
  Modal,
} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import {GestureResponderEvent} from 'react-native';
import {useMyCart} from '../../../state';
import {myNumberFormat} from '../../../shared/utils';
import {Control, UseFormSetValue} from 'react-hook-form';
import {DismissKeyboardWrapper} from '../../../shared/components';
import {ICashierCartDefaultValues} from '../Cart';
import {CashButtons, EDCButtons, EwalletButtons} from '../PaymentTypeButtons';

interface PaymentTypeModalProps extends PaymentTypeFormProps {
  paymentTypeModalOpen: boolean;
  onPressBack: () => void;
  handlePaymentSubmission: (event: GestureResponderEvent) => void;
  loadingPaymentSubmission: boolean;
  buttonPaymentSubmissionDisabled: boolean;
}

const PaymentTypeModal = ({
  paymentTypeModalOpen,
  onPressBack,
  handlePaymentSubmission,
  loadingPaymentSubmission,
  buttonPaymentSubmissionDisabled,

  control,
  errors,
  formValue,
  setValue,
}: PaymentTypeModalProps) => {
  return (
    <Modal isOpen={paymentTypeModalOpen} size="xl">
      <Modal.Content>
        <Modal.Header>
          <Box>
            <Box position="absolute" w="full" mt={1}>
              <Center>
                <Text fontSize="lg">Proses Pembayaran</Text>
              </Center>
            </Box>
            <HStack
              justifyContent="space-between"
              alignItems="center"
              position="relative">
              <IconButton
                icon={
                  <Icon
                    as={Feather}
                    name="arrow-left"
                    size="sm"
                    onPress={onPressBack}
                  />
                }
              />
              <Box minWidth="5">
                <Button
                  isLoading={loadingPaymentSubmission}
                  onPress={handlePaymentSubmission}
                  variant="solid"
                  isDisabled={buttonPaymentSubmissionDisabled}>
                  Bayar
                </Button>
              </Box>
            </HStack>
          </Box>
        </Modal.Header>
        <Box px="3" pt="3" pb="6">
          <PaymentTypeForm
            control={control}
            errors={errors}
            formValue={formValue}
            setValue={setValue}
          />
        </Box>
      </Modal.Content>
    </Modal>
  );
};
export default PaymentTypeModal;

interface PaymentTypeFormProps {
  control: Control<ICashierCartDefaultValues, any>;
  errors: any;
  formValue: ICashierCartDefaultValues;
  setValue: UseFormSetValue<ICashierCartDefaultValues>;
}

const PaymentTypeForm = ({
  control,
  errors,
  formValue,
  setValue,
}: PaymentTypeFormProps) => {
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
        <CashButtons
          formValue={formValue}
          setValue={setValue}
          control={control}
          errors={errors}
          isShowInputCash={true}
        />
        <EDCButtons formValue={formValue} setValue={setValue} />
        <EwalletButtons formValue={formValue} setValue={setValue} />
      </Box>
    </DismissKeyboardWrapper>
  );
};
