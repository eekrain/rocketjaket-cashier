import React from 'react';
import {
  Box,
  Text,
  ScrollView,
  Heading,
  Button,
  useToast,
  Center,
  useBreakpointValue,
  VStack,
} from 'native-base';
import {useForm} from 'react-hook-form';
import {TransactionPaymentTypeEnum} from '../../../graphql/gql-generated';
import {TRHNumberValueType} from '../../../shared/components';
import {useCartModal} from './useCartModal';
import {usePayment} from './usePayment';
import PaymentTypeModal from '../Payment/PaymentTypeModal';
import {useMyCart} from '../../../state';
import {CashierHomeNavProps} from '../../../screens/app/CashierScreen';
import {useNavigation, useRoute} from '@react-navigation/native';
import CartItem from './CartItem';
import {CartFooter} from './CartFooter';
import PaymentLandingModal from '../Payment/PaymentLandingModal';
import {useReturn} from './useReturn';
import ReturnTypeModal from '../Return/ReturnTypeModal';
import {clearReturn} from '..';
import {UpdateTransactionNavProps} from '../../../screens/app/TransactionScreen';
import {TOAST_TEMPLATE} from '../../../shared/constants';
import ReturnLandingModal from '../Return/ReturnLandingModal';
import {useWindowDimensions} from 'react-native';

export interface ICashierCartDefaultValues {
  payment_type: TransactionPaymentTypeEnum | null;
  cash_in_amount: TRHNumberValueType;
  return_reason: string;
}

const defaultValues: ICashierCartDefaultValues = {
  payment_type: null,
  cash_in_amount: {
    formattedValue: '',
    value: 0,
  },
  return_reason: 'Retur produk',
};

const Cart = () => {
  const window = useWindowDimensions();
  console.log(
    '🚀 ~ file: index.tsx ~ line 59 ~ DashboardScreen ~ window',
    window,
  );

  const cartHeight: number | undefined = useBreakpointValue({
    base: undefined,
    lg: window.height - 130,
  });

  const myCart = useMyCart();
  const route = useRoute<CashierHomeNavProps['route']>();
  const navigation = useNavigation<UpdateTransactionNavProps['navigation']>();
  const toast = useToast();

  const {
    paymentTypeModalOpen,
    paymentLandingModalOpen,
    setPaymentLandingModalOpen,
    setPaymentTypeModalOpen,

    returnTypeModalOpen,
    returnLandingModalOpen,
    setReturnTypeModalOpen,
    setReturnLandingModalOpen,
  } = useCartModal();

  const {
    handlePaymentSubmission,
    paymentProcessResult,
    setPaymentProcessResult,
    _createTransactionMutationResult,
  } = usePayment({setPaymentLandingModalOpen, setPaymentTypeModalOpen});

  const {
    transactionReturnData,
    oldProductFromInvoice,
    newProductForReturn,
    isReturnDirty,
    returnedProduct,
    handleReturnSubmission,
    _returnTransactionStatus,
    returnProcessResult,
    setReturnProcessResult,
  } = useReturn({setReturnTypeModalOpen, setReturnLandingModalOpen});

  const {
    watch,
    handleSubmit,
    control,
    setValue,
    formState: {errors},
    reset,
  } = useForm({
    defaultValues,
  });

  const formValue = watch();

  return (
    <>
      <PaymentTypeModal
        paymentTypeModalOpen={paymentTypeModalOpen}
        onPressBack={() => setPaymentTypeModalOpen(false)}
        handlePaymentSubmission={handleSubmit(handlePaymentSubmission)}
        buttonPaymentSubmissionDisabled={!formValue.payment_type}
        loadingPaymentSubmission={_createTransactionMutationResult.loading}
        control={control}
        errors={errors}
        setValue={setValue}
        formValue={formValue}
      />
      <PaymentLandingModal
        paymentLandingModalOpen={paymentLandingModalOpen}
        onPressBack={() => {
          setPaymentLandingModalOpen(false);
          setPaymentProcessResult(null);
          reset(defaultValues);
        }}
        paymentProcessResult={paymentProcessResult}
      />
      <ReturnTypeModal
        returnTypeModalOpen={returnTypeModalOpen}
        onPressBack={() => {
          setReturnTypeModalOpen(false);
          setReturnProcessResult(null);
          reset(defaultValues);
        }}
        handleReturnSubmission={handleSubmit(handleReturnSubmission)}
        buttonReturnSubmissionDisabled={!formValue.payment_type}
        loadingReturnSubmission={_returnTransactionStatus.loading}
        control={control}
        errors={errors}
        setValue={setValue}
        formValue={formValue}
        transactionReturnData={transactionReturnData}
        returnedProduct={returnedProduct}
        newProductForReturn={newProductForReturn}
      />
      <ReturnLandingModal
        returnLandingModalOpen={returnLandingModalOpen}
        setReturnLandingModalOpen={setReturnLandingModalOpen}
        onPressBack={() => {
          setReturnLandingModalOpen(false);
          setReturnProcessResult(null);
          reset(defaultValues);
          clearReturn(
            navigation,
            myCart,
            route.params?.invoiceNumberRefundPart,
          );
        }}
        returnProcessResult={returnProcessResult}
      />
      <Box
        bgColor="white"
        flex={1}
        height={{base: '64', lg: cartHeight}}
        borderRadius="xl"
        mt={{base: -10, lg: undefined}}
        p="4">
        <Heading fontSize="xl" mb="4">
          Cart
        </Heading>

        <VStack
          py="4"
          flex={1}
          justifyContent={myCart.cartItems.length === 0 ? 'center' : undefined}
          alignItems={myCart.cartItems.length === 0 ? 'center' : undefined}>
          <ScrollView>
            {route.params?.invoiceNumberRefundPart ? (
              <>
                <Box>
                  <Text fontSize="md">Produk pada invoice lama</Text>
                </Box>
                {oldProductFromInvoice.map((item, index) => (
                  <CartItem
                    item={item}
                    showBorderBottom={
                      oldProductFromInvoice.length !== index + 1
                    }
                    isReturnItem={true}
                    key={item.product_name_concise}
                  />
                ))}
                {newProductForReturn.length > 0 && (
                  <>
                    <Box mt="4">
                      <Text fontSize="md">Produk baru ditambahkan</Text>
                    </Box>

                    {newProductForReturn.map((item, index) => (
                      <CartItem
                        item={item}
                        showBorderBottom={
                          oldProductFromInvoice.length !== index + 1
                        }
                        isReturnItem={false}
                        key={item.product_name_concise}
                      />
                    ))}
                  </>
                )}
              </>
            ) : (
              <>
                {myCart.cartItems.map((item, index) => (
                  <CartItem
                    item={item}
                    showBorderBottom={myCart.cartItems.length !== index + 1}
                    isReturnItem={false}
                    key={item.product_inventory_id}
                  />
                ))}
                {myCart.cartItems.length > 0 && (
                  <Button
                    onPress={() => myCart.clearCart()}
                    bg="white"
                    variant="outline"
                    mt="4">
                    Clear Cart
                  </Button>
                )}
              </>
            )}
          </ScrollView>
        </VStack>

        <CartFooter
          onPayButtonPress={() => {
            if (
              myCart.cartItems.length > 0 &&
              !route.params?.invoiceNumberRefundPart
            ) {
              setPaymentTypeModalOpen(true);
            } else if (
              myCart.cartItems.length > 0 &&
              route.params?.invoiceNumberRefundPart &&
              isReturnDirty
            ) {
              setReturnTypeModalOpen(true);
            } else {
              toast.show(
                TOAST_TEMPLATE.cancelled(
                  'Return transaksi tidak jadi. Tidak ada perubahan data sebelum dan sesudah return.',
                ),
              );
              clearReturn(
                navigation,
                myCart,
                route.params?.invoiceNumberRefundPart,
              );
            }
          }}
        />
      </Box>
    </>
  );
};
export default Cart;
