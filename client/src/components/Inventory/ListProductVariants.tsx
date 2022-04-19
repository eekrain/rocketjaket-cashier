import React from 'react';
import {
  Box,
  Heading,
  HStack,
  Button,
  Icon,
  useToast,
  ScrollView,
} from 'native-base';
import {Alert, RefreshControl} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {
  useInventory_GetAllVariantMetadataQuery,
  useInventory_DeleteInventoryVariantsMetadataByTitleMutation,
  namedOperations,
} from '../../graphql/gql-generated';
import CustomTable from '../CustomTable';
import {useMemo} from 'react';
import {ButtonEdit, IconButtonDelete} from '../Buttons';
import {StackNavigationProp} from '@react-navigation/stack';
import {TOAST_TEMPLATE} from '../../shared/constants';
import {useMyAppState} from '../../state';
import {
  InventoryHomeNavProps,
  InventoryRootStackParamList,
} from '../../screens/app/InventoryScreen';

interface IActionProps {
  variant_title: string;
  navigation: StackNavigationProp<InventoryRootStackParamList, 'InventoryHome'>;
  handleDeleteKategori: () => Promise<void>;
}

const Action = ({
  variant_title,
  navigation,
  handleDeleteKategori,
}: IActionProps) => {
  const myAppState = useMyAppState();

  return (
    <HStack space="3">
      <ButtonEdit
        size="sm"
        onPress={() => {
          myAppState.setLoadingWholePage(true);
          navigation.navigate('UpdateProductVariants', {variant_title});
        }}
      />
      <IconButtonDelete size="sm" onPress={() => handleDeleteKategori()} />
    </HStack>
  );
};

interface IListProductVariantsProps extends InventoryHomeNavProps {}

const ListProductVariants = ({navigation}: IListProductVariantsProps) => {
  const getAllVariantMetadata = useInventory_GetAllVariantMetadataQuery();
  const toast = useToast();

  const [deleteVariantMetadataMutation, _deleteVariantMetadataMutationResult] =
    useInventory_DeleteInventoryVariantsMetadataByTitleMutation({
      refetchQueries: [namedOperations.Query.Inventory_GetAllVariantMetadata],
    });
  const data = useMemo(() => {
    const handleDeleteKategori = async (variant_title: string) => {
      const mutation = async () => {
        const res = await deleteVariantMetadataMutation({
          variables: {variant_title},
        });
        if (res.errors) {
          toast.show({
            ...TOAST_TEMPLATE.error(
              `Hapus data variasi ${variant_title} gagal.`,
            ),
          });
        } else {
          toast.show({
            ...TOAST_TEMPLATE.success(
              `Hapus data variasi ${variant_title} berhasil.`,
            ),
          });
        }
      };
      Alert.alert(
        'Hapus Toko',
        `Variasi ${variant_title} akan dihapus. Lanjutkan?`,
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            onPress: () => mutation(),
            text: 'Hapus',
            style: 'destructive',
          },
        ],
        {
          cancelable: true,
        },
      );
    };
    const varianstMetadata =
      getAllVariantMetadata.data?.rocketjaket_inventory_variant_metadata || [];

    const map = new Map();
    for (const item of varianstMetadata) {
      if (!map.has(item.variant_title)) {
        map.set(item.variant_title, true); // set any value to Map
      }
    }
    console.log(
      '🚀 ~ file: ListProductVariants.tsx ~ line 68 ~ data ~ map',
      map,
    );
    const processedVarianstMetadata: {
      variant_title: any;
      variant_value: string;
    }[] = [];
    map.forEach((_v, mappedTitle) => {
      const variant_values = varianstMetadata.filter(
        variant => variant.variant_title === mappedTitle,
      );
      let text_variant_value = '';
      variant_values.forEach((val, index) => {
        text_variant_value += `${val.variant_value}${
          index !== variant_values.length - 1 ? ' / ' : ''
        }`;
      });
      processedVarianstMetadata.push({
        variant_title: mappedTitle,
        variant_value: text_variant_value,
      });
    });

    const withAction = processedVarianstMetadata.map(val => ({
      ...val,
      component: (
        <Action
          {...{
            variant_title: val.variant_title,
            navigation,
          }}
          handleDeleteKategori={() => handleDeleteKategori(val.variant_title)}
        />
      ),
    }));

    return withAction;
  }, [
    deleteVariantMetadataMutation,
    getAllVariantMetadata.data?.rocketjaket_inventory_variant_metadata,
    navigation,
    toast,
  ]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={() => {
            getAllVariantMetadata.refetch();
          }}
        />
      }>
      <Box paddingBottom={300}>
        <HStack
          justifyContent="space-between"
          alignItems="center"
          mb="10"
          mt="4">
          <Heading fontSize="xl">List Inventory / Stok Produk</Heading>
          <Button
            onPress={() => {
              navigation.navigate('CreateProductVariants');
            }}
            size="lg"
            leftIcon={<Icon as={Feather} name="plus-square" size="sm" />}>
            Buat Baru
          </Button>
        </HStack>
        <CustomTable
          isLoading={
            getAllVariantMetadata.loading ||
            _deleteVariantMetadataMutationResult.loading
          }
          rowHeight={80}
          data={data}
          columns={[
            {Header: 'Judul Variasi', accessor: 'variant_title', widthRatio: 1},
            {
              Header: 'Opsi Variasi',
              accessor: 'variant_value',
              widthRatio: 2,
              isDisableSort: true,
            },
            {
              Header: 'Aksi',
              accessor: 'component',
              widthRatio: 0.7,
              isAction: true,
              isDisableSort: true,
            },
          ]}
        />
      </Box>
    </ScrollView>
  );
};

export default ListProductVariants;
