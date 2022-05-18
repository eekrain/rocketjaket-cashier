import {Modal, useToast, Box} from 'native-base';
import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {
  namedOperations,
  // TransactionReceiptTypeEnum,
  // useCashier_SendReceiptToCustomerMutation,
} from '../../graphql/gql-generated';
import {TOAST_TEMPLATE} from '../../shared/constants';
import {myNumberFormat, myTextFormat} from '../../shared/utils';
import {ISendReceiptFormDefaultValues} from '../Cashier/PaymentLanding';
import SendReceiptForm from '../Cashier/SendReceiptForm';

const defaultValues: ISendReceiptFormDefaultValues = {
  customer_name: '',
  phone_number: '',
};

interface Props {
  invoice_number: string;
  modalReceiptOpen: boolean;
  setModalReceiptOpen: React.Dispatch<React.SetStateAction<boolean>>;
  customer_name: string;
  phone_number: string;
}

const ModalSendReceipt = ({
  invoice_number,
  modalReceiptOpen,
  setModalReceiptOpen,
  customer_name,
  phone_number,
}: Props) => {
  const toast = useToast();
  const {
    handleSubmit,
    control,
    setValue,
    formState: {errors},
  } = useForm({
    defaultValues,
  });

  useEffect(() => {
    setValue('customer_name', myTextFormat.titleCase(customer_name));
    setValue('phone_number', phone_number);
  }, [customer_name, phone_number, setValue]);

  // const [sendReceipt, _sendReceiptStatus] =
  //   useCashier_SendReceiptToCustomerMutation({
  //     refetchQueries: [namedOperations.Query.Transaction_GetTransactionByPK],
  //   });

  const handleSubmission = async (data: ISendReceiptFormDefaultValues) => {
    // console.log(
    //   '🚀 ~ file: PaymentLanding.tsx ~ line 61 ~ handleSubmission ~ data',
    //   data,
    // );
    // const resReceipt = await sendReceipt({
    //   variables: {
    //     customer: {
    //       name: myTextFormat.titleCase(data.customer_name),
    //       phone_number: myNumberFormat.phoneNumber(
    //         data.phone_number,
    //         'cleanBareNumberOnly',
    //       ),
    //     },
    //     invoice_number: invoice_number,
    //     receipt_type: TransactionReceiptTypeEnum.Whatsapp,
    //   },
    // }).catch(error => {
    //   console.log(
    //     '🚀 ~ file: PaymentLanding.tsx ~ line 80 ~ handleSubmission ~ error',
    //     error,
    //   );
    //   toast.show({
    //     ...TOAST_TEMPLATE.error(
    //       `Gagal melakukan pengiriman nota untuk customer ${data.customer_name}.`,
    //     ),
    //   });
    // });
    // console.log(
    //   '🚀 ~ file: PaymentLanding.tsx ~ line 63 ~ resReceipt',
    //   resReceipt,
    // );
    // if (resReceipt && resReceipt.errors) {
    //   console.log(
    //     '🚀 ~ file: PaymentLanding.tsx ~ line 80 ~ handleSubmission ~ resReceipt.errors',
    //     resReceipt.errors,
    //   );
    //   toast.show({
    //     ...TOAST_TEMPLATE.error(
    //       `Gagal melakukan pengiriman nota untuk customer ${data.customer_name}.`,
    //     ),
    //   });
    // } else if (resReceipt && resReceipt.data) {
    //   toast.show({
    //     ...TOAST_TEMPLATE.success(
    //       `Berhasil melakukan pengiriman nota untuk customer ${data.customer_name}.`,
    //     ),
    //   });
    // }
    // setModalReceiptOpen(false);
  };

  return (
    <Modal isOpen={modalReceiptOpen} onClose={() => setModalReceiptOpen(false)}>
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header>Kirim Ulang Nota</Modal.Header>
        <Box p="3">
          <SendReceiptForm
            control={control}
            errors={errors}
            w="full"
            handleSubmit={handleSubmit(handleSubmission)}
            isLoading={false}
            // isLoading={_sendReceiptStatus.loading}
          />
        </Box>
      </Modal.Content>
    </Modal>
  );
};

export default ModalSendReceipt;
