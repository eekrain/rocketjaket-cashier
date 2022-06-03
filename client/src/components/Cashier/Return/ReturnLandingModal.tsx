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
  TotalTransactionCompare,
  TransactionPaymentTypeEnum,
  TransactionReceiptTypeEnum,
  Transaction_ReturnTransactionMutation,
  useTransaction_SendReceiptToCustomerMutation,
} from '../../../graphql/gql-generated';
import SendReceiptForm from '../SendReceiptForm';
import Config from 'react-native-config';
import to from 'await-to-js';
import {TOAST_TEMPLATE} from '../../../shared/constants';

interface ReturnLandingModalProps extends ReturnLandingFormProps {
  returnLandingModalOpen: boolean;
  onPressBack: () => void;
}

const ReturnLandingModal = ({
  returnLandingModalOpen,
  onPressBack,
  returnProcessResult,
  setReturnLandingModalOpen,
}: ReturnLandingModalProps) => {
  return (
    <Modal isOpen={returnLandingModalOpen} size="xl">
      <Modal.Content>
        <Modal.Header>
          <Box>
            <Box position="absolute" w="full" mt={1}>
              <Center>
                <Text fontSize="lg">Status Retur</Text>
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
          <ReturnLandingForm
            returnProcessResult={returnProcessResult}
            setReturnLandingModalOpen={setReturnLandingModalOpen}
          />
        </Box>
      </Modal.Content>
    </Modal>
  );
};
export default ReturnLandingModal;

interface ReturnLandingFormProps {
  returnProcessResult: Transaction_ReturnTransactionMutation['Transaction_ReturnTransaction'];
  setReturnLandingModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
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

const ReturnLandingForm = ({
  returnProcessResult,
  setReturnLandingModalOpen,
}: ReturnLandingFormProps) => {
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
      returnProcessResult &&
      returnProcessResult.isError === false &&
      returnProcessResult.invoice_number
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
            invoice_number: returnProcessResult.invoice_number,
            receipt_type: TransactionReceiptTypeEnum.Whatsapp,
          },
        }),
      );

      if (err || res.data?.Transaction_SendReceipt?.isError === true) {
        console.log(
          '🚀 ~ file: ModalSendReceipt.tsx ~ line 76 ~ handleSubmission ~ err',
          err,
        );
        toast.show({
          ...TOAST_TEMPLATE.error(
            `Gagal melakukan pengiriman nota untuk customer ${data.customer_name}.\n${res?.data?.Transaction_SendReceipt?.errorMessage}`,
          ),
        });
      } else {
        toast.show({
          ...TOAST_TEMPLATE.success(
            `Berhasil melakukan pengiriman nota untuk customer ${data.customer_name}.`,
          ),
        });
      }
    }
    setReturnLandingModalOpen(false);
  };

  return (
    <DismissKeyboardWrapper>
      <Box>
        {returnProcessResult?.isError === false ? (
          <Center>
            <Box borderBottomWidth={1} borderColor="gray.200" pb={4} mb={6}>
              {returnProcessResult?.total_transaction_compare ===
              TotalTransactionCompare.Plus ? (
                <>
                  <Heading fontSize={['lg', 'lg', '2xl']} color="green.700">
                    Kembalian{' '}
                    {myNumberFormat.rp(returnProcessResult?.cash_change)}
                  </Heading>

                  <Heading fontSize={['lg', 'lg', 'lg']} mt="2">
                    Dari{' '}
                    {myNumberFormat.rp(returnProcessResult?.cash_in_amount)}
                  </Heading>
                </>
              ) : (
                <>
                  <Heading fontSize={['lg', 'lg', '2xl']} color="green.700">
                    Uang dikembalikan{' '}
                    {myNumberFormat.rp(returnProcessResult?.cash_change)}
                  </Heading>
                </>
              )}
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
            {returnProcessResult?.errorMessage && (
              <Text fontSize="md" mt="2" mb="2">
                <Text fontWeight="bold">Error: </Text>
                {returnProcessResult?.errorMessage}
              </Text>
            )}
          </Center>
        )}
      </Box>
    </DismissKeyboardWrapper>
  );
};
