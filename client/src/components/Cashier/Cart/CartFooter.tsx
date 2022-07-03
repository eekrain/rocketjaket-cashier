import React from 'react';
import {Box, Heading, HStack, Button} from 'native-base';
import {useMyCart} from '../../../state';
import {myNumberFormat} from '../../../shared/utils';
import {useRoute} from '@react-navigation/native';
import {CashierHomeNavProps} from '../../../screens/app/CashierScreen';

interface CartFooterProps {
  onPayButtonPress: () => void;
}

export const CartFooter = ({onPayButtonPress}: CartFooterProps) => {
  const myCart = useMyCart();
  const route = useRoute<CashierHomeNavProps['route']>();

  return (
    <Box mt="4" borderTopWidth={1} paddingTop={'8'} borderColor="gray.400">
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
      <Button mt="6" onPress={onPayButtonPress}>
        {route.params?.invoiceNumberRefundPart ? 'Proses Retur' : 'Bayar'}
      </Button>
    </Box>
  );
};
