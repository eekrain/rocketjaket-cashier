/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Box,
  Text,
  Stack,
  HStack,
  Pressable,
  Icon,
  ScrollView,
  Heading,
  Button,
  Center,
} from 'native-base';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {myNumberFormat, useMyUser} from '../../shared/utils';
import {UserRolesEnum} from '../../types/user';
import {Control, UseFormSetValue} from 'react-hook-form';
import {MyAvatar, RHTextInput} from '../../shared/components';
import {IDefaultValues, IInventoryProductData} from '.';
import {useMyCart} from '../../state';
import {CashierHomeNavProps} from '../../screens/app/CashierScreen';
import FastImage from 'react-native-fast-image';

interface Props {
  route: CashierHomeNavProps['route'];
  searchTerm: string;
  setValue: UseFormSetValue<IDefaultValues>;
  dataStoreActive:
    | {
        __typename?: 'rocketjaket_store' | undefined;
        id: number;
        name: string;
        latitude?: string | null | undefined;
        longitude?: string | null | undefined;
        address?: string | null | undefined;
        created_at: any;
        updated_at: any;
      }
    | null
    | undefined;
  control: Control<IDefaultValues, object>;
  errors: any;
  kategoriProdukTab: {
    value: number | null;
    label: string;
  }[];
  activeCategory: number | null;
  filteredByCategoryProductData: IInventoryProductData[];
  searchedInventoryProductData: IInventoryProductData[];
}

const ProductsContent = ({
  route,
  setValue,
  searchTerm,
  dataStoreActive,
  control,
  errors,
  kategoriProdukTab,
  activeCategory,
  filteredByCategoryProductData,
  searchedInventoryProductData,
}: Props) => {
  const myUser = useMyUser();

  return (
    <ScrollView w={['full', 'full', '4/6']}>
      <Stack w="full" direction="column" space="3" pb="100">
        {route.params?.invoiceNumberRefundPart && (
          <Heading fontSize="xl" mb="2">
            Refund Sebagian Invoice {route.params.invoiceNumberRefundPart}
          </Heading>
        )}
        <HStack space="4" alignItems="center">
          <Heading fontSize="xl">Toko {dataStoreActive?.name}</Heading>
          {myUser.roles.includes(UserRolesEnum.administrator) && (
            <Button
              onPress={() => setValue('show_modal_change_toko', true)}
              size="sm"
              leftIcon={<Icon as={FeatherIcon} name="home" size="xs" />}>
              Ganti Toko
            </Button>
          )}
        </HStack>

        <Box bgColor="white" borderRadius="lg">
          <RHTextInput
            control={control}
            errors={errors}
            label="Search..."
            isDisableLabel={true}
            name="search_term"
            InputLeftElement={
              <Icon
                as={<FeatherIcon name="search" />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
          />
        </Box>
        {!searchTerm && (
          <HStack>
            <ScrollView horizontal={true} nestedScrollEnabled={true}>
              {kategoriProdukTab.map((cat, i) => {
                const borderColor =
                  activeCategory === cat.value ? 'scarlet.400' : 'coolGray.200';

                return (
                  <Pressable
                    key={`${cat.value}${cat.label}`}
                    borderBottomWidth="3"
                    borderColor={borderColor}
                    alignItems="center"
                    px="3"
                    pb="2"
                    cursor="pointer"
                    onPress={() => {
                      console.log(i);
                      setValue('active_category', i === 0 ? null : cat.value);
                    }}>
                    <Text>{cat.label}</Text>
                  </Pressable>
                );
              })}
            </ScrollView>
          </HStack>
        )}
        <HStack flexWrap="wrap" w="full" justifyContent="space-evenly" mt="2">
          {!searchTerm
            ? filteredByCategoryProductData.map(product => (
                <ProductItem product={product} key={product.id} />
              ))
            : searchedInventoryProductData.map(product => (
                <ProductItem product={product} key={product.id} />
              ))}
        </HStack>
      </Stack>
    </ScrollView>
  );
};

export default ProductsContent;

const ProductItem = ({product}: {product: IInventoryProductData}) => {
  const myCart = useMyCart();

  if (product.available_qty < 1) {
    return <Box w="32%">{productItemInner(product)}</Box>;
  }

  return (
    <Pressable
      w="32%"
      onPress={() => {
        if (product.available_qty > 0) {
          myCart.handleAddToCart({
            product_inventory_id: product.id,
            product_name: product.product_name,
            variant: product.variant,
            product_photo_url: product.product_photo_url,
            capital_price: product.capital_price,
            selling_price: product.selling_price,
            discount: product.discount,
            available_qty: product.available_qty,
            inventory_product_updated_at: product.inventory_product_updated_at,
            product_updated_at: product.product_updated_at,
          });
        }
      }}>
      {productItemInner(product)}
    </Pressable>
  );
};

const productItemInner = (product: IInventoryProductData) => {
  return (
    <Box bgColor="white" borderRadius={10} mb="4">
      <Box position="relative">
        <MyAvatar
          fallbackText={product.product_name}
          source={{
            uri: product.product_photo_url,
          }}
          height={150}
          width="100%"
          borderTopRadius={10}
          fontSize="4xl"
          overlay={product.available_qty < 1}
          topRightElement={
            product.discount !== 0 ? (
              <Box
                bgColor="white"
                py="2"
                px="12"
                shadow="9"
                style={{
                  transform: [
                    {rotate: '45deg'},
                    {translateX: 35},
                    {translateY: -20},
                  ],
                }}>
                <Text fontWeight="bold" fontSize="md" color="milano_red.500">
                  {myNumberFormat.percentageDiscount(product.discount)}
                </Text>
              </Box>
            ) : undefined
          }
        />
        {product.available_qty < 1 && (
          <HStack
            position="absolute"
            bottom="0"
            left="0"
            w="full"
            h="full"
            zIndex={10}
            justifyContent="center"
            alignItems="center"
            pb="2">
            <FastImage
              source={require('../../assets/images/sold_out.png')}
              style={{width: '80%', height: '70%'}}
              resizeMode="contain"
            />
          </HStack>
        )}
      </Box>
      <Box px="4" py="2">
        <Center>
          <Text fontWeight="bold" fontSize="md">
            {product.product_name}
          </Text>
          <Text mt="2">{product.product_category}</Text>
          <Text>{product.variant}</Text>
          <Text>Tersedia: {product.available_qty}</Text>
          <Text fontWeight="semibold" color="green.700">
            {myNumberFormat.rp(product.selling_price)}
          </Text>
        </Center>
      </Box>
    </Box>
  );
};
