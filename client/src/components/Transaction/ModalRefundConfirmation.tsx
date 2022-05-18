/* eslint-disable @typescript-eslint/no-unused-vars */
import {Modal, useToast, Box, HStack, Text, Button} from 'native-base';
import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {
  namedOperations,
  Transaction_Receipt_Type_Enum_Enum,
  Transaction_Status_Enum_Enum,
  // useCashier_SendReceiptToCustomerMutation,
  // useTransaction_RefundTransactionMutation,
} from '../../graphql/gql-generated';
import {RHRadio, RHTextInput} from '../../shared/components';
import {TOAST_TEMPLATE} from '../../shared/constants';
import {myNumberFormat, myTextFormat} from '../../shared/utils';
import SendReceiptForm from '../Cashier/SendReceiptForm';

interface IModalRefundConfirmationDefaultValues {
  refund_reason: string;
  select_reason_option: string;
}

const defaultValues: IModalRefundConfirmationDefaultValues = {
  refund_reason: '',
  select_reason_option: '',
};

interface Props {
  title: string;
  invoice_number: string;
  modalRefundOpen: boolean;
  setModalRefundOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setModalReceiptOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isRefundAll: boolean;
  refund_total: number;
}

const ModalRefundConfirmation = ({
  title,
  invoice_number,
  modalRefundOpen,
  setModalRefundOpen,
  isRefundAll,
  refund_total,
  setModalReceiptOpen,
}: Props) => {
  const toast = useToast();
  const {
    watch,
    handleSubmit,
    control,
    setValue,
    formState: {errors},
  } = useForm({
    defaultValues,
  });

  const select_reason_option = watch('select_reason_option');

  useEffect(() => {
    if (select_reason_option === 'custom') {
      setValue('refund_reason', '');
    } else {
      setValue('refund_reason', select_reason_option);
    }
  }, [select_reason_option, setValue]);

  // const [refundTransaction, _refundTransactionStatus] =
  //   useTransaction_RefundTransactionMutation({
  //     refetchQueries: [
  //       namedOperations.Query.Transaction_GetTransactionByPK,
  //       namedOperations.Query.Transaction_GetAllTransactionByStoreId,
  //     ],
  //   });

  const handleSubmission = async (
    data: IModalRefundConfirmationDefaultValues,
  ) => {
    // console.log(
    //   '🚀 ~ file: ModalRefundConfirmation.tsx ~ line 62 ~ data',
    //   data,
    // );
    // const resRefund = await refundTransaction({
    //   variables: {
    //     invoice_number,
    //     isRefundAll,
    //     refund_reason: data.refund_reason,
    //   },
    // }).catch(error => {
    //   console.log(
    //     '🚀 ~ file: PaymentLanding.tsx ~ line 80 ~ handleSubmission ~ error',
    //     error,
    //   );
    //   toast.show({
    //     ...TOAST_TEMPLATE.error(
    //       `Gagal melakukan ${
    //         isRefundAll ? 'refund semua' : 'refund sebagian'
    //       } untuk invoice ${invoice_number}.`,
    //     ),
    //   });
    // });
    // console.log(
    //   '🚀 ~ file: ModalRefundConfirmation.tsx ~ line 83 ~ resRefund',
    //   resRefund,
    // );
    // if (
    //   resRefund &&
    //   resRefund.data &&
    //   resRefund.data.refundTransaction?.is_success
    // ) {
    //   toast.show({
    //     ...TOAST_TEMPLATE.success(
    //       `Berhasil melakukan ${
    //         isRefundAll ? 'refund semua' : 'refund sebagian'
    //       } untuk invoice ${invoice_number}.`,
    //     ),
    //   });
    // } else {
    //   console.log(
    //     '🚀 ~ file: ModalRefundConfirmation.tsx ~ line 88 ~ resRefund.errors',
    //     resRefund?.errors,
    //   );
    //   toast.show({
    //     ...TOAST_TEMPLATE.error(
    //       `Gagal melakukan ${
    //         isRefundAll ? 'refund semua' : 'refund sebagian'
    //       } untuk invoice ${invoice_number}.`,
    //     ),
    //   });
    // }
    // setModalRefundOpen(false);
    // setModalReceiptOpen(true);
  };

  return (
    <Modal isOpen={modalRefundOpen} onClose={() => setModalRefundOpen(false)}>
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header>{title}</Modal.Header>
        <Box p="3">
          <HStack mb="4">
            <Text fontWeight="semibold">Jumlah yang direfund :</Text>
            <Text fontWeight="semibold" color="milano_red.600" ml="2">
              {myNumberFormat.rp(refund_total)}
            </Text>
          </HStack>
          <RHRadio
            radioOptions={[
              {label: 'Produk Retur', value: 'Produk Retur'},
              {label: 'Kesalahan Transaksi', value: 'Kesalahan Transaksi'},
              {label: 'Pembatalan Pesanan', value: 'Pembatalan Pesanan'},
              {label: 'Lainnya', value: 'custom'},
            ]}
            control={control}
            errors={errors}
            label="Alasan Refund"
            name="select_reason_option"
            radioSpacing={2}
          />
          {select_reason_option === 'custom' && (
            <Box mt="4">
              <RHTextInput
                control={control}
                errors={errors}
                label="Lainnya"
                name="refund_reason"
              />
            </Box>
          )}
          <HStack justifyContent="center" mt="6">
            <Button
              // isLoading={_refundTransactionStatus.loading}
              w={['full', 'full', '40']}
              onPress={handleSubmit(handleSubmission)}>
              Proses Refund
            </Button>
          </HStack>
        </Box>
      </Modal.Content>
    </Modal>
  );
};

export default ModalRefundConfirmation;
