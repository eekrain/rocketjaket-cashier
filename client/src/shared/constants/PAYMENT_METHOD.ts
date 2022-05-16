import {TransactionPaymentTypeEnum} from '../../graphql/gql-generated';

export const PAYMENT_METHOD = {
  cash: {payment_type: TransactionPaymentTypeEnum.Cash, title: 'Cash'},
  edc: [
    {payment_type: TransactionPaymentTypeEnum.EdcBri, title: 'BRI'},
    {payment_type: TransactionPaymentTypeEnum.EdcBca, title: 'BCA'},
    {payment_type: TransactionPaymentTypeEnum.EdcMandiri, title: 'MANDIRI'},
  ],
  ewallet: [
    {payment_type: TransactionPaymentTypeEnum.EwalletGopay, title: 'GOPAY'},
    {
      payment_type: TransactionPaymentTypeEnum.EwalletShopeepay,
      title: 'SHOPEEPAY',
    },
    {payment_type: TransactionPaymentTypeEnum.EwalletLinkaja, title: 'LINKAJA'},
  ],
};

export const ALL_POSSIBLE_PAYMENT_METHOD = [
  PAYMENT_METHOD.cash,
  ...PAYMENT_METHOD.edc.map(x => x),
  ...PAYMENT_METHOD.ewallet.map(x => x),
];
