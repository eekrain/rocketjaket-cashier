import React from 'react';
import {
  Box,
  Text,
  Center,
  Heading,
  HStack,
  IconButton,
  Icon,
  Modal,
  useToast,
} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import {myNumberFormat, myTextFormat} from '../../../shared/utils';
import {useForm} from 'react-hook-form';
import {DismissKeyboardWrapper} from '../../../shared/components';
import {
  Cashier_CreateTransactionMutation,
  namedOperations,
  TransactionPaymentTypeEnum,
  TransactionReceiptTypeEnum,
  TransactionStatusEnum,
  useTransaction_SendReceiptToCustomerMutation,
} from '../../../graphql/gql-generated';
import SendReceiptForm from '../SendReceiptForm';
import Config from 'react-native-config';
import to from 'await-to-js';
import {TOAST_TEMPLATE} from '../../../shared/constants';

interface PaymentLandingModalProps extends PaymentLandingFormProps {
  paymentLandingModalOpen: boolean;
}

const PaymentLandingModal = ({
  paymentLandingModalOpen,
  onPressBack,
  paymentProcessResult,
}: PaymentLandingModalProps) => {
  return (
    <Modal isOpen={paymentLandingModalOpen} size="xl">
      <Modal.Content>
        <Modal.Header>
          <Box>
            <Box position="absolute" w="full" mt={1}>
              <Center>
                <Text fontSize="lg">Status Pembayaran</Text>
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
              <Box minWidth="5" />
            </HStack>
          </Box>
        </Modal.Header>
        <Box px="3" pt="3" pb="6">
          <PaymentLandingForm
            paymentProcessResult={paymentProcessResult}
            onPressBack={onPressBack}
          />
        </Box>
      </Modal.Content>
    </Modal>
  );
};
export default PaymentLandingModal;

interface PaymentLandingFormProps {
  paymentProcessResult: Cashier_CreateTransactionMutation['Cashier_CreateTransaction'];
  onPressBack: () => void;
}

export interface ISendReceiptFormDefaultValues {
  customer_name: string;
  phone_number: string;
}

const defaultValues: ISendReceiptFormDefaultValues = {
  customer_name: Config.APP_ENV === 'development' ? 'Budi' : '',
  phone_number:
    Config.APP_ENV === 'development'
      ? myNumberFormat.phoneNumber('81252154853', 'withoutFirst')
      : '',
};

const PaymentLandingForm = ({
  paymentProcessResult,
  onPressBack,
}: PaymentLandingFormProps) => {
  const toast = useToast();
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm({
    defaultValues,
  });

  const [sendReceipt, _sendReceiptStatus] =
    useTransaction_SendReceiptToCustomerMutation({
      refetchQueries: [namedOperations.Query.Transaction_GetTransactionByPK],
    });

  const handleSubmission = async (data: ISendReceiptFormDefaultValues) => {
    console.log(
      '🚀 ~ file: PaymentLanding.tsx ~ line 54 ~ handleSubmission ~ data',
      data,
    );
    if (
      paymentProcessResult &&
      paymentProcessResult?.transaction_status ===
        TransactionStatusEnum.Success &&
      paymentProcessResult.invoice_number
    ) {
      const [err, res] = await to(
        sendReceipt({
          variables: {
            customer: {
              name: myTextFormat.titleCase(data.customer_name),
              phone_number: myNumberFormat.phoneNumber(
                data.phone_number,
                'cleanBareNumberOnly',
              ),
            },
            invoice_number: paymentProcessResult.invoice_number,
            receipt_type: TransactionReceiptTypeEnum.Whatsapp,
          },
        }),
      );

      if (err || res.data?.Transaction_SendReceipt?.isError === true) {
        console.log(
          '🚀 ~ file: ModalSendReceipt.tsx ~ line 76 ~ handleSubmission ~ err',
          err,
        );
        toast.show(
          TOAST_TEMPLATE.error(
            `Gagal melakukan pengiriman nota untuk customer ${data.customer_name}.\n${res?.data?.Transaction_SendReceipt?.errorMessage}`,
          ),
        );
      } else {
        toast.show(
          TOAST_TEMPLATE.success(
            `Berhasil melakukan pengiriman nota untuk customer ${data.customer_name}.`,
          ),
        );
      }
    }
    onPressBack();
  };

  return (
    <DismissKeyboardWrapper>
      <Box>
        {paymentProcessResult?.transaction_status ===
        TransactionStatusEnum.Success ? (
          <Center>
            <Box borderBottomWidth={1} borderColor="gray.200" pb={4} mb={6}>
              {paymentProcessResult?.payment_type ===
                TransactionPaymentTypeEnum.Cash && (
                <Heading fontSize={['lg', 'lg', '2xl']} color="green.700">
                  Kembalian{' '}
                  {myNumberFormat.rp(paymentProcessResult?.cash_change)}
                </Heading>
              )}
              <Heading fontSize={['lg', 'lg', 'lg']} mt="2">
                Dari {myNumberFormat.rp(paymentProcessResult?.cash_in_amount)}
              </Heading>
            </Box>

            <SendReceiptForm
              control={control}
              errors={errors}
              isLoading={_sendReceiptStatus.loading}
              handleSubmit={handleSubmit(handleSubmission)}
            />
          </Center>
        ) : (
          <Center borderColor="gray.200">
            <Heading fontSize="2xl" color="milano_red.500">
              Transaksi Gagal Diproses!
            </Heading>
            <Heading fontSize="lg" mt="2" mb="2">
              Coba sesaat lagi / jika berulang kontak developer!
            </Heading>
            {paymentProcessResult?.errorMessage && (
              <Text fontSize="md" mt="2" mb="2">
                <Text fontWeight="bold">Error: </Text>
                {paymentProcessResult?.errorMessage}
              </Text>
            )}
          </Center>
        )}
      </Box>
    </DismissKeyboardWrapper>
  );
};
