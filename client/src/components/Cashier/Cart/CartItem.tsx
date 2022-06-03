import React from 'react';
import {ICartItem, useMyCart} from '../../../state';
import {Box, Text, HStack, IconButton, Icon} from 'native-base';
import {MyAvatar} from '../../../shared/components';
import {
  getStorageFileUrlWImageTransform,
  myNumberFormat,
} from '../../../shared/utils';
import {useRoute} from '@react-navigation/native';
import {CashierHomeNavProps} from '../../../screens/app/CashierScreen';
import Feather from 'react-native-vector-icons/Feather';

interface CartItemProps {
  item: ICartItem;
  showBorderBottom: boolean;
  isReturnItem: boolean;
}

const CartItem = ({item, showBorderBottom, isReturnItem}: CartItemProps) => {
  const myCart = useMyCart();
  // console.log(
  //   '🚀 ~ file: CartItem.tsx ~ line 21 ~ CartItem ~ myCart.cartItems',
  //   myCart.cartItems,
  // );
  const route = useRoute<CashierHomeNavProps['route']>();

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
        source={{
          uri: getStorageFileUrlWImageTransform({
            fileId: item.product_photo_id,
            w: 50,
            q: 80,
          }),
        }}
        size={50}
      />
      <Box ml="4" maxW="50%">
        <Text fontWeight="semibold" mb="2">
          {item.product_name_concise}
        </Text>
        <HStack space="3">
          <IconButton
            onPress={() => {
              myCart.handleRemoveFromCart(
                item.product_inventory_id,
                route.params?.invoiceNumberRefundPart && isReturnItem
                  ? true
                  : false,
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
                product_photo_id: item.product_photo_id,
                product_inventory_id: item.product_inventory_id,
                product_name: item.product_name,
                product_name_concise: item.product_name_concise,
                capital_price: item.capital_price,
                selling_price: item.selling_price,
                discount: item.discount,
                available_qty: item.available_qty,
                inventory_product_updated_at: item.inventory_product_updated_at,
                product_updated_at: item.product_updated_at,
                qty: 1,
              });
            }}
            size="sm"
            variant="solid"
            icon={<Icon as={Feather} name="plus" size="xs" />}
          />
        </HStack>
      </Box>
      <Box flex={1} alignItems="flex-end">
        {item.discount !== 0 && (
          <Text color={'milano_red.500'} strikeThrough={true}>
            {myNumberFormat.rp(item.selling_price * item.qty)}
          </Text>
        )}

        <Text color="green.700">
          {myNumberFormat.rp(
            item.selling_price * item.qty -
              (item.selling_price * item.qty * item.discount) / 100,
          )}
        </Text>
      </Box>
    </HStack>
  );
};

export default CartItem;
