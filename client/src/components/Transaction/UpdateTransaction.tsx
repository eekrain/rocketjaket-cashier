/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useCallback, useMemo, useState} from 'react';
import {
  Box,
  Button,
  HStack,
  VStack,
  Heading,
  ScrollView,
  useToast,
  Text,
  Popover,
  useContrastText,
  Badge,
  Icon,
} from 'native-base';
import withAppLayout from '../Layout/AppLayout';
import {
  Rocketjaket_Transaction_Status_Enum_Enum,
  TransactionStatusEnum,
  useTransaction_GetTransactionByPkQuery,
} from '../../graphql/gql-generated';
import * as yup from 'yup';
import {TOAST_TEMPLATE} from '../../shared/constants';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {SimpleDataGrid, DismissKeyboardWrapper} from '../../shared/components';
import {ButtonBack} from '../Buttons';
import {useEffect} from 'react';
import {useMyAppState, useMyCart} from '../../state';
import {UpdateTransactionNavProps} from '../../screens/app/TransactionScreen';
import {
  getStorageFileUrlWImageTransform,
  myNumberFormat,
} from '../../shared/utils';
import CustomTable from '../CustomTable';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import ModalSendReceipt from './ModalSendReceipt';
import FeatherIcon from 'react-native-vector-icons/Feather';
import ModalRefundConfirmation from './ModalRefundConfirmation';

dayjs.extend(isSameOrBefore);

interface IDefaultValues {
  name: string;
  description: string;
}

const schema = yup
  .object({
    name: yup.string().required('Nama kategori harus diisi'),
    description: yup.string().optional(),
  })
  .required();

const defaultValues: IDefaultValues = {name: '', description: ''};

interface Props extends UpdateTransactionNavProps {}

const UpdateTransaction = ({navigation, route}: Props) => {
  const bgLight = 'white';
  const colorContrastLight = useContrastText(bgLight);
  const toast = useToast();
  const myAppState = useMyAppState();
  const myCart = useMyCart();
  const [isErrorOnce, setErrorOnce] = useState(false);
  const [modalReceiptOpen, setModalReceiptOpen] = useState(false);
  const [modalRefundOpen, setModalRefundOpen] = useState(false);

  const {
    handleSubmit,
    control,
    formState: {errors, isDirty, isSubmitSuccessful},
    reset,
    setValue,
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const getDataTransaction = useTransaction_GetTransactionByPkQuery({
    variables: {invoice_number: route.params.transaction_invoice_number},
    fetchPolicy: 'network-only',
  });

  const dataTransaction = useMemo(() => {
    return getDataTransaction.data?.rocketjaket_transaction_by_pk || null;
  }, [getDataTransaction.data?.rocketjaket_transaction_by_pk]);

  const dataTransactionItems = useMemo(() => {
    return (
      dataTransaction?.transaction_items.map(item => ({
        ...item,
        transaction_status:
          item.transaction_status_enum.transaction_status === 'success' ? (
            <Badge colorScheme="success">
              {item.transaction_status_enum.title}
            </Badge>
          ) : (
            <Badge colorScheme="danger">
              {item.transaction_status_enum.title}
            </Badge>
          ),
        selling_price_real: item.selling_price,
        selling_price_formatted: myNumberFormat.rp(item.selling_price),
        discount_real: item.discount,
        discount:
          item.transaction_status ===
          Rocketjaket_Transaction_Status_Enum_Enum.Success
            ? (item.selling_price * item.purchase_qty * item.discount) / 100
            : 0,
        discount_formatted: myNumberFormat.rpDiscount(
          item.transaction_status ===
            Rocketjaket_Transaction_Status_Enum_Enum.Success
            ? (item.selling_price * item.purchase_qty * item.discount) / 100
            : 0,
        ),
        capital_price_real: item.capital_price,
        subtotal:
          item.transaction_status ===
          Rocketjaket_Transaction_Status_Enum_Enum.Success
            ? item.subtotal
            : 0,
        subtotal_formatted: myNumberFormat.rp(
          item.transaction_status ===
            Rocketjaket_Transaction_Status_Enum_Enum.Success
            ? item.subtotal
            : 0,
        ),
        profit_formatted: myNumberFormat.rp(item.profit),
      })) || []
    );
  }, [dataTransaction?.transaction_items]);

  const dataTransactionReceipt = useMemo(() => {
    return (
      dataTransaction?.transaction_receipts.map(receipt => ({
        ...receipt,
        customer_name: receipt.customer.name,
        customer_id: receipt.customer.id,
        receipt_type_title: receipt.transaction_receipt_type_enum.title,
        receipt_send_to:
          receipt.transaction_receipt_type_enum.receipt_type === 'whatsapp'
            ? myNumberFormat.phoneNumber(
                receipt.customer.phone_number,
                'with+62',
              )
            : receipt.customer.email,
        created_at: dayjs(receipt?.created_at).format('D/M/YYYY H:mm'),
        is_sent: receipt.is_sent ? (
          <Badge colorScheme="success">Terkirim</Badge>
        ) : (
          <Badge colorScheme="danger">Gagal</Badge>
        ),
      })) || []
    );
  }, [dataTransaction?.transaction_receipts]);

  useEffect(() => {
    if (!isSubmitSuccessful) {
      myAppState.setLoadingWholePage(getDataTransaction.loading);
    } else {
      myAppState.setLoadingWholePage(false);
    }
  }, [getDataTransaction.loading, isSubmitSuccessful, myAppState]);

  useEffect(() => {
    if (
      getDataTransaction.data?.rocketjaket_transaction_by_pk === null &&
      !isErrorOnce
    ) {
      toast.show({
        ...TOAST_TEMPLATE.error('Data transaksi tidak ditemukan!'),
      });
      navigation.goBack();
      setErrorOnce(true);
    }
  }, [
    getDataTransaction.data?.rocketjaket_transaction_by_pk,
    isErrorOnce,
    navigation,
    setValue,
    toast,
  ]);

  const checkRefundAbility = useCallback(() => {
    const isAllowed = dayjs()
      .subtract(7, 'day')
      .isSameOrBefore(dayjs(dataTransaction?.created_at));
    console.log(
      '🚀 ~ file: UpdateTransaction.tsx ~ line 165 ~ checkRefundAbility ~ isAllowed',
      isAllowed,
    );
    if (!isAllowed) {
      toast.show({
        ...TOAST_TEMPLATE.error(
          `Invoice ${route.params.transaction_invoice_number} tidak valid untuk klaim garansi. Tanggal invoice dibuat lebih dari 7 hari!`,
        ),
      });
    }
    return isAllowed;
  }, [
    dataTransaction?.created_at,
    route.params.transaction_invoice_number,
    toast,
  ]);

  const handleRefundPart = useCallback(() => {
    myCart.clearCart();
    myCart.handleSetCartItem(
      dataTransactionItems.map(item => ({
        product_photo_url: getStorageFileUrlWImageTransform({
          fileKey: item.inventory_product.product.photo_url,
          w: 100,
          q: 60,
        }),
        product_inventory_id: item.inventory_product_id,
        product_name: item.inventory_product.product.name,
        variant: item.inventory_product.inventory_product_variants
          .map(x => x.inventory_variant_metadata_id)
          .join(' / '),
        capital_price: item.capital_price_real,
        selling_price: item.selling_price_real,
        discount: item.discount_real,
        available_qty: item.inventory_product.available_qty,
        product_updated_at: item.inventory_product.product.updated_at,
        inventory_product_updated_at: item.inventory_product.updated_at,
        qty: item.purchase_qty,
        transaction_item_id: item.id,
      })),
    );
    navigation.navigate('CashierRoot', {
      screen: 'CashierHome',
      params: {
        invoiceNumberRefundPart: route.params.transaction_invoice_number,
      },
    });
  }, [
    dataTransactionItems,
    myCart,
    navigation,
    route.params.transaction_invoice_number,
  ]);

  return (
    <ScrollView>
      <DismissKeyboardWrapper>
        <Box pb="200">
          <ModalSendReceipt
            invoice_number={route.params.transaction_invoice_number}
            modalReceiptOpen={modalReceiptOpen}
            setModalReceiptOpen={setModalReceiptOpen}
            customer_name={dataTransactionReceipt?.[0]?.customer_name || ''}
            phone_number={
              myNumberFormat.phoneNumber(
                dataTransactionReceipt?.[0]?.customer?.phone_number,
                'withoutFirst',
              ) || ''
            }
          />
          <ModalRefundConfirmation
            title="Refund Semua"
            invoice_number={route.params.transaction_invoice_number}
            isRefundAll={true}
            modalRefundOpen={modalRefundOpen}
            setModalRefundOpen={setModalRefundOpen}
            setModalReceiptOpen={setModalReceiptOpen}
            refund_total={dataTransaction?.total_transaction || 0}
          />

          <Heading fontSize="xl" mb="10">
            Update Transaksi {route.params.transaction_invoice_number}
          </Heading>

          <Box bgColor="white" p="8">
            <VStack space="4">
              <HStack flexDirection="row-reverse">
                <Box>
                  <SimpleDataGrid
                    gridWidth={400}
                    data={[
                      {
                        title: 'Toko',
                        value: dataTransaction?.store?.name,
                      },
                      {
                        title: 'Dibuat tanggal',
                        value: dayjs(dataTransaction?.created_at).format(
                          'D/M/YYYY H:mm',
                        ),
                      },
                      {
                        title: 'Terakhir diubah',
                        value: dayjs(dataTransaction?.updated_at).format(
                          'D/M/YYYY H:mm',
                        ),
                      },
                      {
                        title: 'Customer',
                        value:
                          dataTransaction?.transaction_receipts?.[0]?.customer
                            .name || '',
                      },
                    ]}
                  />
                </Box>
              </HStack>
              <Box>
                {dataTransaction && dataTransaction.transaction_status_enum && (
                  <HStack mb="4">
                    <Text fontWeight="semibold" mr="4">
                      Status Transaksi
                    </Text>
                    <Badge
                      colorScheme={
                        dataTransaction.transaction_status_enum
                          .transaction_status ===
                        Rocketjaket_Transaction_Status_Enum_Enum.Success
                          ? 'success'
                          : dataTransaction.transaction_status_enum
                              .transaction_status ===
                              Rocketjaket_Transaction_Status_Enum_Enum.Failed ||
                            dataTransaction.transaction_status_enum
                              .transaction_status ===
                              Rocketjaket_Transaction_Status_Enum_Enum.Refund
                          ? 'danger'
                          : 'warning'
                      }>
                      {dataTransaction.transaction_status_enum.title}
                    </Badge>
                  </HStack>
                )}
                <Text fontWeight="semibold" mb={2}>
                  Item Dibeli
                </Text>
                <CustomTable
                  data={dataTransactionItems}
                  rowHeight={50}
                  headerHeight={40}
                  columns={[
                    {
                      Header: 'Nama Produk',
                      accessor: 'product_name',
                      widthRatio: 0.8,
                      isDisableSort: true,
                    },
                    {
                      Header: 'Variant',
                      accessor: 'variant',
                      widthRatio: 0.6,
                      isDisableSort: true,
                    },
                    {
                      Header: 'Harga Jual',
                      accessor: 'selling_price_formatted',
                      widthRatio: 0.5,
                      isDisableSort: true,
                    },
                    {
                      Header: 'Qty',
                      accessor: 'purchase_qty',
                      widthRatio: 0.3,
                      isDisableSort: true,
                    },
                    {
                      Header: 'Total Discount',
                      accessor: 'discount_formatted',
                      widthRatio: 0.5,
                      isDisableSort: true,
                    },
                    {
                      Header: 'Subtotal',
                      accessor: 'subtotal_formatted',
                      widthRatio: 0.5,
                      isDisableSort: true,
                    },
                    {
                      Header: 'Status',
                      accessor: 'transaction_status',
                      widthRatio: 0.4,
                      isDisableSort: true,
                    },
                  ]}
                  footer={[
                    {
                      accessor: 'discount_formatted',
                      value: myNumberFormat.rpDiscount(
                        dataTransactionItems.reduce(
                          (prevVal: number, currentVal) =>
                            prevVal + currentVal.discount,
                          0,
                        ),
                      ),
                    },
                    {
                      accessor: 'subtotal_formatted',
                      value: myNumberFormat.rp(
                        dataTransactionItems.reduce(
                          (prevVal: number, currentVal) =>
                            prevVal + currentVal.subtotal,
                          0,
                        ),
                      ),
                    },
                    {
                      accessor: 'purchase_qty',
                      value: dataTransactionItems
                        .reduce(
                          (prevVal: number, currentVal) =>
                            prevVal + currentVal.purchase_qty,
                          0,
                        )
                        .toString(),
                    },
                  ]}
                  isLoading={false}
                  withPagination={false}
                  withTableHeader={false}
                />
                <HStack alignItems="center" mt="4" mb="2">
                  <Text fontWeight="semibold">Log Pengiriman Nota</Text>
                  <Button
                    ml="4"
                    size="sm"
                    onPress={() => setModalReceiptOpen(true)}
                    leftIcon={
                      <Icon as={FeatherIcon} name="repeat" size="xs" />
                    }>
                    Kirim Ulang Nota
                  </Button>
                </HStack>
                <CustomTable
                  data={dataTransactionReceipt}
                  rowHeight={40}
                  headerHeight={40}
                  columns={[
                    {
                      Header: 'Nama Customer',
                      accessor: 'customer_name',
                      widthRatio: 1,
                      isDisableSort: true,
                    },
                    {
                      Header: 'Tipe Nota',
                      accessor: 'receipt_type_title',
                      widthRatio: 0.5,
                      isDisableSort: true,
                    },
                    {
                      Header: 'Kirim Ke',
                      accessor: 'receipt_send_to',
                      widthRatio: 1,
                      isDisableSort: true,
                    },
                    {
                      Header: 'Tanggal',
                      accessor: 'created_at',
                      widthRatio: 0.8,
                      isDisableSort: true,
                    },
                    {
                      Header: 'Status',
                      accessor: 'is_sent',
                      widthRatio: 0.5,
                      isDisableSort: true,
                    },
                  ]}
                  isLoading={false}
                  withPagination={false}
                  withTableHeader={false}
                />
              </Box>
              <HStack justifyContent="flex-end" mt="8" space="4">
                {dataTransaction?.transaction_status_enum.transaction_status ===
                  TransactionStatusEnum.Success && (
                  <Popover
                    placement="top right"
                    offset={-22}
                    trigger={triggerProps => {
                      return (
                        <Button {...triggerProps} colorScheme="milano_red">
                          Refund
                        </Button>
                      );
                    }}>
                    <Popover.Content
                      accessibilityLabel="Refund Transaksi"
                      w="40">
                      <Popover.Body>
                        <Button
                          onPress={() => {
                            handleRefundPart();
                          }}
                          justifyContent="flex-start"
                          bg={bgLight}
                          _text={{color: colorContrastLight}}
                          variant="ghost">
                          Refund Sebagian
                        </Button>
                        <Button
                          onPress={() => {
                            const isAllowed = checkRefundAbility();
                            if (isAllowed) {
                              setModalRefundOpen(true);
                            }
                          }}
                          justifyContent="flex-start"
                          bg={bgLight}
                          _text={{color: colorContrastLight}}
                          variant="ghost">
                          Refund Semua
                        </Button>
                      </Popover.Body>
                    </Popover.Content>
                  </Popover>
                )}
                <ButtonBack onPress={() => navigation.goBack()} />
              </HStack>
            </VStack>
          </Box>
        </Box>
      </DismissKeyboardWrapper>
    </ScrollView>
  );
};

export default withAppLayout(UpdateTransaction);
