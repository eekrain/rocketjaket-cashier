import {Modal, useToast, Box} from 'native-base';
import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {
  namedOperations,
  TransactionReceiptTypeEnum,
  useTransaction_SendReceiptToCustomerMutation,
} from '../../graphql/gql-generated';
import {TOAST_TEMPLATE} from '../../shared/constants';
import {myNumberFormat, myTextFormat} from '../../shared/utils';
import {ISendReceiptFormDefaultValues} from '../Cashier/Payment/PaymentLandingModal';
import SendReceiptForm from '../Cashier/SendReceiptForm';
import to from 'await-to-js';
import Config from 'react-native-config';

const defaultValues: ISendReceiptFormDefaultValues = {
  customer_name: Config.APP_ENV === 'development' ? 'Budi' : '',
  phone_number:
    Config.APP_ENV === 'development'
      ? myNumberFormat.phoneNumber('1', 'withoutFirst')
      : '',
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

  const [sendReceipt, _sendReceiptStatus] =
    useTransaction_SendReceiptToCustomerMutation({
      refetchQueries: [namedOperations.Query.Transaction_GetTransactionByPK],
    });

  const handleSubmission = async (data: ISendReceiptFormDefaultValues) => {
    console.log(
      '🚀 ~ file: PaymentLanding.tsx ~ line 61 ~ handleSubmission ~ data',
      data,
    );
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
          invoice_number: invoice_number,
          receipt_type: TransactionReceiptTypeEnum.Whatsapp,
        },
      }),
    );
    console.log(
      '🚀 ~ file: ModalSendReceipt.tsx ~ line 65 ~ handleSubmission ~ res',
      res,
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
    setModalReceiptOpen(false);
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
            isLoading={_sendReceiptStatus.loading}
          />
        </Box>
      </Modal.Content>
    </Modal>
  );
};

export default ModalSendReceipt;
