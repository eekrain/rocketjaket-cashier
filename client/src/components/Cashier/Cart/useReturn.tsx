import React, {useMemo, useState} from 'react';
import to from 'await-to-js';
import {
  namedOperations,
  TransactionReturnType,
  Transaction_GetTransactionByPkQuery,
  Transaction_Items_Input,
  Transaction_ReturnTransactionMutation,
  Transaction_ReturnTransactionMutationVariables,
  useTransaction_GetTransactionByPkQuery,
  useTransaction_ReturnTransactionMutation,
} from '../../../graphql/gql-generated';
import {useRoute} from '@react-navigation/native';
import {CashierHomeNavProps} from '../../../screens/app/CashierScreen';
import {ICartItem, useMyCart} from '../../../state';
import equal from 'fast-deep-equal/es6/react';
import {ICashierCartDefaultValues} from '.';
import {useToast} from 'native-base';
import {useMyUser} from '../../../shared/utils';
import {clearReturn} from '..';

interface useReturnProps {
  setReturnTypeModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setReturnLandingModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useReturn = ({
  setReturnLandingModalOpen,
  setReturnTypeModalOpen,
}: useReturnProps) => {
  const route = useRoute<CashierHomeNavProps['route']>();
  const myCart = useMyCart();
  const myUser = useMyUser();

  const invoice_number = route.params?.invoiceNumberRefundPart || '';

  const getTransactionReturnData = useTransaction_GetTransactionByPkQuery({
    variables: {
      invoice_number,
    },
  });

  const transactionReturnData:
    | Transaction_GetTransactionByPkQuery['transaction_by_pk']
    | null = useMemo(() => {
    return getTransactionReturnData.data?.transaction_by_pk || null;
  }, [getTransactionReturnData.data?.transaction_by_pk]);

  const oldProductFromInvoice = useMemo(() => {
    return myCart.cartItems.filter(item =>
      item?.transaction_item_id ? true : false,
    );
  }, [myCart.cartItems]);

  const newProductForReturn = useMemo(() => {
    return myCart.cartItems.filter(item =>
      item?.transaction_item_id ? false : true,
    );
  }, [myCart.cartItems]);

  const returnedProduct = useMemo(() => {
    const temp: ICartItem[] = [];
    transactionReturnData?.transaction_items.forEach(oldItem => {
      const foundInCart = myCart.cartItems.find(
        item => item.product_name_concise === oldItem.product_name,
      );
      if (foundInCart && foundInCart.qty < oldItem.purchase_qty) {
        temp.push({
          ...foundInCart,
          qty: oldItem.purchase_qty - foundInCart.qty,
        });
      }
    });
    return temp;
  }, [transactionReturnData?.transaction_items, myCart.cartItems]);

  const isReturnDirty = useMemo(() => {
    const fromInvoice = transactionReturnData?.transaction_items.map(item => ({
      name: item.product_name,
      qty: item.purchase_qty,
    }));
    const fromCart = myCart.cartItems.map(item => ({
      name: item.product_name_concise,
      qty: item.qty,
    }));
    return !equal(fromInvoice, fromCart);
  }, [transactionReturnData?.transaction_items, myCart.cartItems]);

  const [returnTransaction, _returnTransactionStatus] =
    useTransaction_ReturnTransactionMutation({
      refetchQueries: [
        namedOperations.Query.Transaction_GetTransactionByPK,
        namedOperations.Query.Transaction_GetAllTransactionByStoreId,
      ],
    });

  const [returnProcessResult, setReturnProcessResult] =
    useState<
      Transaction_ReturnTransactionMutation['Transaction_ReturnTransaction']
    >(null);

  const handleReturnSubmission = async (data: ICashierCartDefaultValues) => {
    console.log(
      '🚀 ~ file: ModalRefundConfirmation.tsx ~ line 74 ~ data',
      data,
    );

    const added_items: Transaction_Items_Input[] = newProductForReturn.map(
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

    const returned_items: Transaction_ReturnTransactionMutationVariables['returned_items'] =
      returnedProduct.map(item => ({
        transaction_item_id: item.transaction_item_id!,
        returned_qty: item.qty,
        capital_price: item.capital_price,
        discount: item.discount,
        selling_price: item.selling_price,
      }));

    const returnReqObj = {
      variables: {
        invoice_number,
        karyawan_name: myUser.displayName,
        return_type:
          myCart.getTotalItem() === 0
            ? TransactionReturnType.ReturnAll
            : TransactionReturnType.ReturnPart,
        return_reason: data.return_reason,
        cash_in_amount:
          myCart.getTotalItem() === 0
            ? 0
            : transactionReturnData?.total_transaction &&
              myCart.getTotalPrice() < transactionReturnData?.total_transaction
            ? myCart.getTotalPrice()
            : data.cash_in_amount?.value || 0,
        total_transaction: myCart.getTotalPrice(),
        returned_items,
        added_items,
      },
    };
    console.log(
      '🚀 ~ file: useReturn.tsx ~ line 147 ~ handleReturnSubmission ~ returnReqObj',
      returnReqObj,
    );

    const [err, res] = await to(returnTransaction(returnReqObj));
    if (err || !res) {
      console.log(
        '🚀 ~ file: ModalRefundConfirmation.tsx ~ line 91 ~ err',
        err,
      );
      setReturnProcessResult({isError: true, errorMessage: err.message});
    } else {
      setReturnProcessResult(res.data?.Transaction_ReturnTransaction);
    }
    myCart.clearCart();
    setReturnTypeModalOpen(false);
    setReturnLandingModalOpen(true);
  };
  return {
    transactionReturnData,
    oldProductFromInvoice,
    newProductForReturn,
    isReturnDirty,
    returnedProduct,
    handleReturnSubmission,
    returnProcessResult,
    setReturnProcessResult,
    _returnTransactionStatus,
  };
};
