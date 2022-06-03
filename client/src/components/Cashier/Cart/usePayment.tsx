import React, {useState} from 'react';
import to from 'await-to-js';
import {Alert} from 'react-native';
import {
  Cashier_CreateTransactionMutation,
  namedOperations,
  TransactionPaymentTypeEnum,
  TransactionStatusEnum,
  Transaction_Items_Input,
  useCashier_CreateTransactionMutation,
} from '../../../graphql/gql-generated';
import {myNumberFormat, useMyUser} from '../../../shared/utils';
import {useMyCart} from '../../../state';
import {ICashierCartDefaultValues} from '../CashierCart';

interface usePaymentProps {
  setPaymentLandingModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setPaymentTypeModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const usePayment = ({
  setPaymentLandingModalOpen,
  setPaymentTypeModalOpen,
}: usePaymentProps) => {
  const myCart = useMyCart();
  const myUser = useMyUser();

  const [paymentProcessResult, setPaymentProcessResult] =
    useState<Cashier_CreateTransactionMutation['Cashier_CreateTransaction']>(
      null,
    );

  console.log(
    '🚀 ~ file: usePayment.tsx ~ line 29 ~ paymentProcessResult',
    paymentProcessResult,
  );
  const [createTransactionMutation, _createTransactionMutationResult] =
    useCashier_CreateTransactionMutation({
      refetchQueries: [
        namedOperations.Query.Inventory_GetAllInventoryProductByStoreId,
        namedOperations.Query.Transaction_GetAllTransactionByStoreId,
        namedOperations.Query.Transaction_GetTransactionByPK,
      ],
    });

  const handlePaymentSubmission = async (data: ICashierCartDefaultValues) => {
    console.log(
      '🚀 ~ file: CashierCart.tsx ~ line 78 ~ handlePaymentSubmission ~ data',
      data,
    );
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
      return;
    }
    if (!data.payment_type || !myUser.store_id) {
      console.error(
        '🚀 ~ file: CashierCart.tsx ~ line 83 ~ handlePaymentSubmission ~ data.payment_type is invalid',
        data.payment_type,
      );
      return;
    }
    if (!myUser.store_id) {
      console.error(
        '🚀 ~ file: CashierCart.tsx ~ line 83 ~ handlePaymentSubmission ~ myUser.store_id is invalid',
        myUser.store_id,
      );
    }
    const transaction_items: Transaction_Items_Input[] = myCart.cartItems.map(
      item => ({
        product_inventory_id: item.product_inventory_id,
        product_name_concise: item.product_name_concise,
        capital_price: item.capital_price,
        selling_price: item.selling_price,
        discount: item.discount,
        purchace_qty: item?.qty || 0,
        inventory_product_updated_at: item.inventory_product_updated_at,
        product_updated_at: item.product_updated_at,
      }),
    );

    const [errTransact, resTransact] = await to(
      createTransactionMutation({
        variables: {
          total_transaction: myCart.getTotalPrice(),
          payment_type: data.payment_type,
          karyawan_name: myUser.displayName,
          transaction_items,
          cash_in_amount: data.cash_in_amount.value as number,
          store_id: myUser.store_id,
        },
      }),
    );
    if (errTransact || !resTransact) {
      console.log(
        '🚀 ~ file: CashierCart.tsx ~ line 203 ~ errTransact',
        errTransact,
      );
      setPaymentProcessResult({
        isError: true,
        errorMessage: errTransact.message,
        transaction_status: TransactionStatusEnum.Failed,
      });
    } else {
      setPaymentProcessResult(resTransact.data?.Cashier_CreateTransaction);

      if (resTransact.data?.Cashier_CreateTransaction?.isError === false)
        myCart.clearCart();
    }

    setPaymentTypeModalOpen(false);
    setPaymentLandingModalOpen(true);
  };

  return {
    paymentProcessResult,
    setPaymentProcessResult,
    handlePaymentSubmission,
    _createTransactionMutationResult,
  };
};
