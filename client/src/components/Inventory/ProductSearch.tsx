import React, {useMemo} from 'react';
import {Box, Text, VStack, HStack, Pressable} from 'native-base';
import {useWatch, Control} from 'react-hook-form';
import {MyImageViewer, RHTextInput} from '../../shared/components';
import {useProduk_GetAllProdukQuery} from '../../graphql/gql-generated';
import {MyAvatar} from '../../shared/components';
import {
  getStorageFileUrlWImageTransform,
  nhost,
  useFlexSearch,
} from '../../shared/utils';
import {ButtonCancelDelete} from '../Buttons';
import {IProductInventoryDefaultValues} from './types';

interface ISearchData {
  id: string;
  photo_id?: string | null;
  label: string;
  product_name: string;
}

interface Props {
  control: Control<IProductInventoryDefaultValues>;
  errors: any;
  setSelectedProductId: (newProductId: string | null) => void;
}

const ProductSearch = ({control, errors, setSelectedProductId}: Props) => {
  const product_id = useWatch({
    control,
    name: 'product_id',
  });
  const product_search_term = useWatch({
    control,
    name: 'product_search_term',
  });

  const getAllProducts = useProduk_GetAllProdukQuery();
  const allProducts = useMemo(
    () => getAllProducts.data?.products || [],
    [getAllProducts.data?.products],
  );
  // console.log(
  //   '🚀 ~ file: ProductSearch.tsx ~ line 43 ~ ProductSearch ~ allProducts',
  //   allProducts,
  // );

  const searchData: ISearchData[] = useMemo(() => {
    return allProducts.map(pdk => ({
      id: pdk.id,
      label: `${pdk.product_category.name} / ${pdk.name}`,
      photo_id: pdk.photo_id,
      product_name: pdk.name,
    }));
  }, [allProducts]);

  const flexSearch = useFlexSearch<ISearchData>(
    product_search_term,
    searchData,
    {
      preset: 'default',
      tokenize: 'full',
      id: 'id',
      document: {
        index: 'label',
        // @ts-ignore: Unreachable code error
        store: ['photo_id', 'id', 'label', 'product_name'],
      },
    },
    {enrich: true},
  );

  const searchResult: ISearchData[] = useMemo(() => {
    const found = flexSearch?.[0]?.result || [];
    return found.map(val => val.doc);
  }, [flexSearch]);

  const selectedProduct = useMemo(() => {
    if (product_id) {
      const found = searchData.find(pdk => pdk.id === product_id);
      return found ? found : null;
    } else {
      return null;
    }
  }, [searchData, product_id]);

  return (
    <Box>
      <Text fontWeight="semibold" mb="2">
        Produk
      </Text>
      {selectedProduct !== null ? (
        <HStack alignItems="center" space="5">
          <HStack
            rounded="lg"
            bgColor="primary.200"
            alignItems="center"
            px="4"
            py="2"
            space="6">
            <MyImageViewer
              source={{
                uri: getStorageFileUrlWImageTransform({
                  fileId: selectedProduct.photo_id,
                  w: 50,
                }),
              }}
              size={50}
            />
            <Text>{selectedProduct.label}</Text>
          </HStack>
          <Box>
            <ButtonCancelDelete
              customText="Ganti Produk"
              onPress={() => setSelectedProductId(null)}
            />
          </Box>
        </HStack>
      ) : null}
      {product_id === null
        ? searchDropdown(
            control,
            errors,
            searchResult,
            product_search_term,
            setSelectedProductId,
          )
        : null}
    </Box>
  );
};

const searchDropdown = (
  control: Control<IProductInventoryDefaultValues>,
  errors: any,
  searchResult: ISearchData[],
  product_search_term: string,
  setSelectedProductId: (newProductId: string | null) => void,
) => {
  return (
    <Box>
      <RHTextInput
        name="product_search_term"
        label="Cari Produk..."
        control={control}
        errors={errors}
        isDisableLabel={true}
        overrideErrorName="product_id"
      />
      <VStack borderWidth={product_search_term ? 1 : 0} borderColor="gray.200">
        {typeof product_search_term === 'string' &&
          product_search_term !== '' &&
          searchResult.map((item, index) => {
            return (
              <Pressable
                key={item.id}
                onPress={() => {
                  setSelectedProductId(item.id);
                }}>
                {({isPressed}) => (
                  <HStack
                    bgColor={isPressed ? 'primary.200' : 'gray.100'}
                    alignItems="center"
                    px="4"
                    py="2"
                    space="6"
                    borderBottomWidth={
                      index === searchResult.length - 1 ? 0 : 1
                    }
                    borderColor="gray.200">
                    <MyImageViewer
                      source={{
                        uri: getStorageFileUrlWImageTransform({
                          fileId: item.photo_id,
                          w: 50,
                        }),
                      }}
                      size={50}
                    />
                    <Text>{item.label}</Text>
                  </HStack>
                )}
              </Pressable>
            );
          })}
      </VStack>
    </Box>
  );
};

export default ProductSearch;
