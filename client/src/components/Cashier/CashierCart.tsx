/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  Box,
  Text,
  Center,
  ScrollView,
  Heading,
  HStack,
  Button,
  IconButton,
  Icon,
  Modal,
} from 'native-base';
import {Alert} from 'react-native';
import {ICart, ICartItem, useMyCart} from '../../state';
import {MyAvatar} from '../../shared/components';
import {myNumberFormat, useMyUser} from '../../shared/utils';
import Feather from 'react-native-vector-icons/Feather';
import {ALL_POSSIBLE_PAYMENT_METHOD} from '../../shared/constants';
import PaymentTypeForm from './PaymentTypeForm';
import PaymentLanding from './PaymentLanding';
import {useForm} from 'react-hook-form';
import {TRHNumberValueType} from '../../shared/components';
import {
  Cashier_CreateTransactionMutation,
  namedOperations,
  TransactionPaymentTypeEnum,
  Transaction_Items,
  useCashier_CreateTransactionMutation,
} from '../../graphql/gql-generated';
import * as yup from 'yup';
import {useApolloClient} from '@apollo/client';
import {CashierHomeNavProps} from '../../screens/app/CashierScreen';

const schema = yup
  .object({
    payment_type: yup
      .string()
      .oneOf(ALL_POSSIBLE_PAYMENT_METHOD.map(x => x.payment_type)),
    cash_in_amount: yup.object({
      value: yup.number().required(),
    }),
  })
  .required();

export interface ICashierCartDefaultValues {
  payment_type: TransactionPaymentTypeEnum | null;
  cash_in_amount: TRHNumberValueType;
}

const defaultValues: ICashierCartDefaultValues = {
  payment_type: null,
  cash_in_amount: {
    formattedValue: '',
    value: 0,
  },
};

interface Props {
  route: CashierHomeNavProps['route'];
}

const CashierCart = ({route}: Props) => {
  const myCart = useMyCart();
  const myUser = useMyUser();
  const [isModalPayOpen, setModalPayOpen] = useState(false);
  const [formPayStep, setFormPayStep] = useState<0 | 1>(0);
  const [paymentProcessResult, setPaymentProcessResult] = useState<
    Cashier_CreateTransactionMutation['createTransaction'] | 'error' | null
  >(null);
  const [loadingProcessPayment, setLoadingProcessPayment] = useState(false);

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

  useEffect(() => {
    if (isModalPayOpen === false) {
      setPaymentProcessResult(null);
      setFormPayStep(0);
      reset(defaultValues);
    }
  }, [isModalPayOpen, reset]);

  const [createTransactionMutation, _createTransactionMutationResult] =
    useCashier_CreateTransactionMutation({
      refetchQueries: [
        namedOperations.Query.Inventory_GetAllInventoryProductByStorePK,
        namedOperations.Query.Transaction_GetAllTransactionByStoreId,
      ],
    });

  const client = useApolloClient();
  useEffect(() => {
    let timeoutId: NodeJS.Timeout[] = [];
    if (
      paymentProcessResult &&
      paymentProcessResult !== 'error' &&
      _createTransactionMutationResult.called &&
      !_createTransactionMutationResult.loading
    ) {
      const delay = setTimeout(() => {
        myCart.clearCart();
        client.refetchQueries({
          include: [
            namedOperations.Query.Inventory_GetAllInventoryProductByStorePK,
          ],
        });
      }, 500);
      console.log(
        '🚀 ~ file: CashierCart.tsx ~ line 114 ~ delay ~ delay refetch executed',
      );
      timeoutId.push(delay);
    }
    return () => {
      timeoutId.forEach(x => clearTimeout(x));
    };
  }, [
    _createTransactionMutationResult.called,
    _createTransactionMutationResult.loading,
    client,
    myCart,
    paymentProcessResult,
  ]);

  const handleSubmission = useCallback(
    async (data: ICashierCartDefaultValues) => {
      console.log(
        '🚀 ~ file: CashierCart.tsx ~ line 78 ~ handleSubmission ~ data',
        data,
      );
      setLoadingProcessPayment(true);
      if (
        data.payment_type === TransactionPaymentTypeEnum.Cash &&
        (data.cash_in_amount.value as number) < myCart.getTotalPrice()
      ) {
        Alert.alert(
          'Error',
          `Uang masuk sebesar ${myNumberFormat.rp(
            data.cash_in_amount.value,
          )} lebih kecil dari jumlah yang harus dibayar sebesar ${myNumberFormat.rp(
            myCart.getTotalPrice(),
          )}.`,
        );
        setLoadingProcessPayment(false);
        return;
      }
      if (!data.payment_type || !myUser.store_id) {
        console.error(
          '🚀 ~ file: CashierCart.tsx ~ line 83 ~ handleSubmission ~ data.payment_type is invalid',
          data.payment_type,
        );
        return;
      }
      if (!myUser.store_id) {
        console.error(
          '🚀 ~ file: CashierCart.tsx ~ line 83 ~ handleSubmission ~ myUser.store_id is invalid',
          myUser.store_id,
        );
      }
      const transaction_items: Transaction_Items[] = myCart.cartItems.map(
        item => ({
          product_inventory_id: item.product_inventory_id,
          product_name: item.product_name,
          variant: item.variant,
          capital_price: item.capital_price,
          selling_price: item.selling_price,
          discount: item.discount,
          purchace_qty: item?.qty || 0,
          inventory_product_updated_at: item.inventory_product_updated_at,
          product_updated_at: item.product_updated_at,
        }),
      );

      const transactionRes = await createTransactionMutation({
        variables: {
          total_transaction: myCart.getTotalPrice(),
          payment_type: data.payment_type,
          user_id: myUser.id,
          transaction_items: transaction_items,
          cash_in_amount: data.cash_in_amount.value as number,
          store_id: myUser.store_id,
        },
      }).catch(error => {
        setPaymentProcessResult('error');
        console.error(
          '🚀 ~ file: CashierCart.tsx ~ line 123 ~ handleSubmission ~ error',
          error,
        );
      });
      if (transactionRes && transactionRes.data?.createTransaction) {
        setPaymentProcessResult(transactionRes.data.createTransaction);
        myCart.clearCart();
      } else {
        setPaymentProcessResult('error');
      }
      setFormPayStep(1);
      setLoadingProcessPayment(false);
    },
    [createTransactionMutation, myCart, myUser.store_id, myUser.id],
  );

  const oldProductFromInvoice = useMemo(() => {
    return myCart.cartItems.filter(item =>
      item?.transaction_item_id ? true : false,
    );
  }, [myCart.cartItems]);

  const newProductForRefund = useMemo(() => {
    return myCart.cartItems.filter(item =>
      item?.transaction_item_id ? false : true,
    );
  }, [myCart.cartItems]);

  return (
    <Box
      bgColor="white"
      w={['full', 'full', '2/6']}
      h={['container', 'container', '89%']}
      borderRadius="xl"
      p="4">
      <Modal isOpen={isModalPayOpen} size="xl">
        <Modal.Content>
          <Modal.Header>
            <Box>
              <Box position="absolute" w="full" mt={1}>
                <Center>
                  <Text fontSize="lg">
                    {formPayStep === 0
                      ? 'Proses Pembayaran'
                      : formPayStep === 1
                      ? 'Status Pembayaran'
                      : null}
                  </Text>
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
                      onPress={() => {
                        if (formPayStep === 1) {
                          setPaymentProcessResult(null);
                        }
                        setModalPayOpen(false);
                      }}
                    />
                  }
                />
                <Box minWidth="5">
                  {formPayStep === 0 && (
                    <Button
                      isLoading={loadingProcessPayment}
                      onPress={handleSubmit(handleSubmission)}
                      variant="solid"
                      isDisabled={!formValue.payment_type}>
                      Bayar
                    </Button>
                  )}
                </Box>
              </HStack>
            </Box>
          </Modal.Header>
          <Box px="3" pt="3" pb="6">
            {formPayStep === 0 && (
              <PaymentTypeForm
                control={control}
                errors={errors}
                formValue={formValue}
                setValue={setValue}
              />
            )}
            {formPayStep === 1 && (
              <PaymentLanding
                paymentProcessResult={paymentProcessResult}
                setModalPayOpen={setModalPayOpen}
              />
            )}
          </Box>
        </Modal.Content>
      </Modal>

      <Heading fontSize="xl" mb="4">
        Cart
      </Heading>

      <Box
        h={380}
        borderTopWidth={1}
        borderBottomWidth={1}
        borderColor="gray.400"
        py="4">
        <ScrollView>
          {!route.params?.invoiceNumberRefundPart &&
            myCart.cartItems.map((item, index) =>
              cartItem(
                item,
                myCart.cartItems.length !== index + 1,
                route,
                myCart,
                true,
              ),
            )}

          {route.params?.invoiceNumberRefundPart && (
            <Box>
              <Text fontSize="md">Produk pada invoice lama</Text>
            </Box>
          )}

          {route.params?.invoiceNumberRefundPart &&
            oldProductFromInvoice.map((item, index) =>
              cartItem(
                item,
                oldProductFromInvoice.length !== index + 1,
                route,
                myCart,
                false,
              ),
            )}

          {route.params?.invoiceNumberRefundPart &&
            newProductForRefund.length > 0 && (
              <Box mt="4">
                <Text fontSize="md">Produk baru ditambahkan</Text>
              </Box>
            )}

          {route.params?.invoiceNumberRefundPart &&
            newProductForRefund.map((item, index) =>
              cartItem(
                item,
                newProductForRefund.length !== index + 1,
                route,
                myCart,
                true,
              ),
            )}
          {myCart.cartItems.length > 0 &&
            !route.params?.invoiceNumberRefundPart && (
              <Button
                onPress={() => myCart.clearCart()}
                bg="white"
                variant="outline"
                mt="4">
                Clear Cart
              </Button>
            )}
        </ScrollView>
      </Box>

      <Box mt="4">
        <HStack>
          <Heading fontSize="lg" w={120}>
            Total Item
          </Heading>
          <Heading fontSize="lg" w={4}>
            :
          </Heading>
          <Heading fontSize="lg">{myCart.getTotalItem()} item</Heading>
        </HStack>
        <HStack>
          <Heading fontSize="lg" w={120} color="green.700">
            Total Bayar
          </Heading>
          <Heading fontSize="lg" w={4} color="green.700">
            :
          </Heading>
          <Heading fontSize="lg" color="green.700">
            {myNumberFormat.rp(myCart.getTotalPrice())}
          </Heading>
        </HStack>
        <Button
          mt="6"
          onPress={() => {
            if (myCart.cartItems.length > 0) setModalPayOpen(true);
          }}>
          Bayar
        </Button>
      </Box>
    </Box>
  );
};

const cartItem = (
  item: ICartItem,
  showBorderBottom: boolean,
  route: CashierHomeNavProps['route'],
  myCart: ICart,
  isNew: boolean,
) => {
  return (
    <HStack
      py="3"
      key={item.product_inventory_id}
      alignItems="center"
      justifyContent="space-between"
      borderBottomWidth={showBorderBottom ? 1 : 0}
      borderColor="gray.200">
      <MyAvatar
        fallbackText={item.product_name}
        source={{uri: item.product_photo_url}}
        size={50}
      />
      <Box ml="4">
        <Text fontWeight="semibold" mb="2">
          {item.product_name}
        </Text>
        <HStack space="3">
          <IconButton
            onPress={() => {
              myCart.handleRemoveFromCart(
                item.product_inventory_id,
                route.params?.invoiceNumberRefundPart && !isNew ? true : false,
              );
            }}
            size="sm"
            variant="solid"
            colorScheme="milano_red"
            icon={<Icon as={Feather} name="minus" size="xs" />}
          />

          <Text>Qty : {item.qty}</Text>

          <IconButton
            onPress={() => {
              myCart.handleAddToCart({
                product_photo_url: item.product_photo_url,
                product_inventory_id: item.product_inventory_id,
                product_name: item.product_name,
                variant: item.variant,
                capital_price: item.capital_price,
                selling_price: item.selling_price,
                discount: item.discount,
                available_qty: item.available_qty,
                inventory_product_updated_at: item.inventory_product_updated_at,
                product_updated_at: item.product_updated_at,
              });
            }}
            size="sm"
            variant="solid"
            icon={<Icon as={Feather} name="plus" size="xs" />}
          />
        </HStack>
      </Box>
      <Box flex={1} alignItems="flex-end">
        <Text
          color={item.discount === 0 ? 'green.700' : 'milano_red.500'}
          strikeThrough={item.discount === 0 ? false : true}>
          {myNumberFormat.rp(
            item.qty ? item.selling_price * item.qty : item.selling_price,
          )}
        </Text>
        {item.discount !== 0 && (
          <Text color="green.700">
            {myNumberFormat.rp(
              item.qty
                ? item.selling_price * item.qty -
                    (item.selling_price * item.qty * item.discount) / 100
                : item.selling_price,
            )}
          </Text>
        )}
      </Box>
    </HStack>
  );
};

export default CashierCart;
