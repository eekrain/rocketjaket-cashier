import React from 'react';
import {Box, Center, Heading, useToast} from 'native-base';
import {DismissKeyboardWrapper} from '../../shared/components';
import {myNumberFormat, myTextFormat} from '../../shared/utils';
import {TOAST_TEMPLATE} from '../../shared/constants';
import {useForm} from 'react-hook-form';
import {
  Cashier_CreateTransactionMutation,
  TransactionPaymentTypeEnum,
  Transaction_Receipt_Type_Enum,
  // useCashier_SendReceiptToCustomerMutation,
} from '../../graphql/gql-generated';
import SendReceiptForm from './SendReceiptForm';

interface Props {
  paymentProcessResult:
    | Cashier_CreateTransactionMutation['Cashier_CreateTransaction']
    | 'error'
    | null;
  setModalPayOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ISendReceiptFormDefaultValues {
  customer_name: string;
  phone_number: string;
}

const defaultValues: ISendReceiptFormDefaultValues = {
  customer_name: 'Budi',
  phone_number: myNumberFormat.phoneNumber('81252154853', 'withoutFirst'),
};

const PaymentLanding = ({paymentProcessResult, setModalPayOpen}: Props) => {
  const toast = useToast();
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm({
    defaultValues,
  });

  // const [sendReceipt, _sendReceiptStatus] =
  //   useCashier_SendReceiptToCustomerMutation();

  const handleSubmission = async (data: ISendReceiptFormDefaultValues) => {
    // console.log(
    //   '🚀 ~ file: PaymentLanding.tsx ~ line 61 ~ handleSubmission ~ data',
    //   data,
    // );
    // if (
    //   paymentProcessResult &&
    //   paymentProcessResult !== 'error' &&
    //   paymentProcessResult.invoice_number
    // ) {
    //   const resReceipt = await sendReceipt({
    //     variables: {
    //       customer: {
    //         name: myTextFormat.titleCase(data.customer_name),
    //         phone_number: myNumberFormat.phoneNumber(
    //           data.phone_number,
    //           'cleanBareNumberOnly',
    //         ),
    //       },
    //       invoice_number: paymentProcessResult.invoice_number,
    //       receipt_type: TransactionReceiptTypeEnum.Whatsapp,
    //     },
    //   }).catch(error => {
    //     console.log(
    //       '🚀 ~ file: PaymentLanding.tsx ~ line 80 ~ handleSubmission ~ error',
    //       error,
    //     );
    //     toast.show({
    //       ...TOAST_TEMPLATE.error(
    //         `Gagal melakukan pengiriman nota untuk customer ${data.customer_name}.`,
    //       ),
    //     });
    //   });
    //   console.log(
    //     '🚀 ~ file: PaymentLanding.tsx ~ line 63 ~ resReceipt',
    //     resReceipt,
    //   );
    //   if (resReceipt && resReceipt.errors) {
    //     console.log(
    //       '🚀 ~ file: PaymentLanding.tsx ~ line 80 ~ handleSubmission ~ resReceipt.errors',
    //       resReceipt.errors,
    //     );
    //     toast.show({
    //       ...TOAST_TEMPLATE.error(
    //         `Gagal melakukan pengiriman nota untuk customer ${data.customer_name}.`,
    //       ),
    //     });
    //   } else if (resReceipt && resReceipt.data) {
    //     toast.show({
    //       ...TOAST_TEMPLATE.success(
    //         `Berhasil melakukan pengiriman nota untuk customer ${data.customer_name}.`,
    //       ),
    //     });
    //   }
    // } else if (
    //   paymentProcessResult &&
    //   paymentProcessResult !== 'error' &&
    //   !paymentProcessResult.payment_type
    // ) {
    //   console.log(
    //     '🚀 ~ file: PaymentLanding.tsx ~ line 64 ~ paymentProcessResult.invoice_number is invalid',
    //   );
    // }
    // setModalPayOpen(false);
  };

  return (
    <DismissKeyboardWrapper>
      <Box>
        <Center
          borderBottomWidth={
            paymentProcessResult && paymentProcessResult !== 'error' ? 1 : 0
          }
          borderColor="gray.200"
          pb={paymentProcessResult && paymentProcessResult !== 'error' ? 4 : 0}
          mb={paymentProcessResult && paymentProcessResult !== 'error' ? 6 : 0}>
          {paymentProcessResult && paymentProcessResult !== 'error' ? (
            <>
              {paymentProcessResult.payment_type ===
                TransactionPaymentTypeEnum.Cash && (
                <Heading fontSize={['lg', 'lg', '2xl']} color="green.700">
                  Kembalian{' '}
                  {myNumberFormat.rp(paymentProcessResult.cash_change)}
                </Heading>
              )}
              <Heading fontSize={['lg', 'lg', 'lg']} mt="2">
                Dari {myNumberFormat.rp(paymentProcessResult.cash_in_amount)}
              </Heading>
            </>
          ) : (
            <>
              <Heading fontSize="2xl" color="milano_red.500">
                Transaksi Gagal Diproses!
              </Heading>
              <Heading fontSize="lg" mt="2" mb="2">
                Coba sesaat lagi / jika berulang kontak developer!
              </Heading>
            </>
          )}
        </Center>

        {paymentProcessResult && paymentProcessResult !== 'error' && (
          <Center>
            <SendReceiptForm
              control={control}
              errors={errors}
              isLoading={false}
              // isLoading={_sendReceiptStatus.loading}
              handleSubmit={handleSubmit(handleSubmission)}
            />
          </Center>
        )}
      </Box>
    </DismissKeyboardWrapper>
  );
};

export default PaymentLanding;
