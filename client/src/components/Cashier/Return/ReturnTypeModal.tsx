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
import {ICartItem, useMyCart} from '../../../state';
import {myNumberFormat} from '../../../shared/utils';
import {Control, UseFormSetValue} from 'react-hook-form';
import {DismissKeyboardWrapper} from '../../../shared/components';
import {ICashierCartDefaultValues} from '../Cart';
import {CashButtons, EDCButtons, EwalletButtons} from '../PaymentTypeButtons';
import {Transaction_GetTransactionByPkQuery} from '../../../graphql/gql-generated';

interface ReturnTypeModalProps extends ReturnTypeFormProps {
  returnTypeModalOpen: boolean;
  onPressBack: () => void;
  handleReturnSubmission: (event: GestureResponderEvent) => void;
  loadingReturnSubmission: boolean;
  buttonReturnSubmissionDisabled: boolean;
}

const ReturnTypeModal = ({
  returnTypeModalOpen,
  onPressBack,
  handleReturnSubmission,
  loadingReturnSubmission,
  buttonReturnSubmissionDisabled,
  transactionReturnData,
  returnedProduct,
  newProductForReturn,

  control,
  errors,
  formValue,
  setValue,
}: ReturnTypeModalProps) => {
  const myCart = useMyCart();

  return (
    <Modal isOpen={returnTypeModalOpen} size="xl">
      <Modal.Content>
        <Modal.Header>
          <Box>
            <Box position="absolute" w="full" mt={1}>
              <Center>
                <Text fontSize="lg">Proses Retur</Text>
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
                  isLoading={loadingReturnSubmission}
                  onPress={handleReturnSubmission}
                  variant="solid"
                  isDisabled={buttonReturnSubmissionDisabled}>
                  {transactionReturnData?.total_transaction &&
                  myCart.getTotalPrice() <
                    transactionReturnData?.total_transaction
                    ? 'Retur'
                    : 'Bayar'}
                </Button>
              </Box>
            </HStack>
          </Box>
        </Modal.Header>
        <Box px="3" pt="3" pb="6">
          <ReturnTypeForm
            control={control}
            errors={errors}
            formValue={formValue}
            setValue={setValue}
            transactionReturnData={transactionReturnData}
            returnedProduct={returnedProduct}
            newProductForReturn={newProductForReturn}
          />
        </Box>
      </Modal.Content>
    </Modal>
  );
};
export default ReturnTypeModal;

interface ReturnTypeFormProps {
  control: Control<ICashierCartDefaultValues, object>;
  errors: any;
  formValue: ICashierCartDefaultValues;
  setValue: UseFormSetValue<ICashierCartDefaultValues>;
  transactionReturnData:
    | Transaction_GetTransactionByPkQuery['transaction_by_pk']
    | null;
  returnedProduct: ICartItem[];
  newProductForReturn: ICartItem[];
}

const ReturnTypeForm = ({
  control,
  errors,
  formValue,
  setValue,
  transactionReturnData,
  returnedProduct,
  newProductForReturn,
}: ReturnTypeFormProps) => {
  const myCart = useMyCart();

  return (
    <DismissKeyboardWrapper>
      <Box>
        <Center>
          <Heading fontSize="lg">Total Transaksi Sebelumnya</Heading>
          <Heading fontSize="lg" color="coolGray.700">
            {myNumberFormat.rp(transactionReturnData?.total_transaction)}
          </Heading>

          <Heading fontSize="lg" mt="4">
            Produk Diretur
          </Heading>
          <Box>
            {returnedProduct.map(item => (
              <HStack
                space={'4'}
                key={item.product_name_concise + item.transaction_item_id}>
                <Text>{item.product_name_concise}</Text>
                <Text fontWeight={'extrabold'}>x{item.qty}</Text>
              </HStack>
            ))}
          </Box>

          {newProductForReturn.length > 0 && (
            <>
              <Heading fontSize="lg" mt="4">
                Produk Baru Ditambahkan
              </Heading>

              <Box>
                {newProductForReturn.map(item => (
                  <HStack space={'4'}>
                    <Text>{item.product_name_concise}</Text>
                    <Text fontWeight={'extrabold'}>x{item.qty}</Text>
                  </HStack>
                ))}
              </Box>
            </>
          )}

          {transactionReturnData?.total_transaction &&
          myCart.getTotalPrice() < transactionReturnData?.total_transaction ? (
            <>
              <Heading fontSize="lg" mt="4">
                Uang Dikembalikan
              </Heading>

              <Heading fontSize="lg" color="green.700">
                {myNumberFormat.rp(
                  transactionReturnData?.total_transaction -
                    myCart.getTotalPrice(),
                )}
              </Heading>
            </>
          ) : undefined}
        </Center>
        <CashButtons
          formValue={formValue}
          setValue={setValue}
          control={control}
          errors={errors}
          isShowInputCash={
            transactionReturnData?.total_transaction &&
            myCart.getTotalPrice() < transactionReturnData?.total_transaction
              ? false
              : true
          }
        />
        {transactionReturnData?.total_transaction &&
          myCart.getTotalPrice() > transactionReturnData?.total_transaction && (
            <>
              <EDCButtons formValue={formValue} setValue={setValue} />
              <EwalletButtons formValue={formValue} setValue={setValue} />
            </>
          )}
      </Box>
    </DismissKeyboardWrapper>
  );
};
