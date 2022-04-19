/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Box,
  HStack,
  VStack,
  Stack,
  Heading,
  ScrollView,
  useToast,
  useBreakpointValue,
  Button,
  Icon,
  Text,
  Center,
} from 'native-base';
import {Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import withAppLayout from '../Layout/AppLayout';
import {
  namedOperations,
  useProduk_CreateProdukMutation,
  useProduk_GetAllKategoriProdukQuery,
} from '../../graphql/gql-generated';
import * as yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import {
  getXHasuraContextHeader,
  renameFilenameWithAddedNanoid,
  storage,
} from '../../shared/utils';
import {TOAST_TEMPLATE} from '../../shared/constants';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {DismissKeyboardWrapper, RHTextInput} from '../../shared/components';
import {ButtonSave} from '../Buttons';
import RHNumberInput, {
  TRHNumberValueType,
} from '../../shared/components/RHNumberInput';
import {useMemo} from 'react';
import RHSelect from '../../shared/components/RHSelect';
import {
  launchCamera,
  Asset,
  launchImageLibrary,
} from 'react-native-image-picker';
import {useState} from 'react';

interface IDefaultValues {
  product_category_id: string;
  name: string;
  capital_price: TRHNumberValueType;
  selling_price: TRHNumberValueType;
  discount: TRHNumberValueType;
}

const schema = yup
  .object({
    product_category_id: yup.string().required('Kategori produk harus diisi'),
    name: yup.string().required('Nama produk harus diisi'),
    capital_price: yup.object({
      value: yup.number().min(0).required(),
    }),
    selling_price: yup.object({
      value: yup.number().min(0).required(),
    }),
    discount: yup.object({
      value: yup.number().min(0).max(100).required(),
    }),
  })
  .required();

const defaultValues: IDefaultValues = {
  name: '',
  product_category_id: '',
  capital_price: {
    formattedValue: '0',
    value: 0,
  },
  selling_price: {
    formattedValue: '0',
    value: 0,
  },
  discount: {
    formattedValue: '0',
    value: 0,
  },
};

interface Props {}

const CreateProduk = ({}: Props) => {
  const toast = useToast();
  const navigation = useNavigation();
  const containerDirection = useBreakpointValue({
    base: 'column',
    lg: 'row',
  });
  const formWidth = useBreakpointValue({
    base: 'full',
    lg: '3/5',
  });
  const productImageWidth = useBreakpointValue({
    base: 'full',
    lg: '2/5',
  });

  const {
    handleSubmit,
    control,
    formState: {errors},
    reset,
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const [productFoto, setProductFoto] = useState<Asset | null>(null);

  const getAllKategoriProduk = useProduk_GetAllKategoriProdukQuery();
  const kategoriProduk = useMemo(() => {
    const kategori =
      getAllKategoriProduk.data?.rocketjaket_product_category.map(cat => ({
        value: cat.id.toString(),
        label: cat.name,
      })) || [];
    return kategori;
  }, [getAllKategoriProduk.data?.rocketjaket_product_category]);

  const [createKategoriMutation, _createKategoriMutationResult] =
    useProduk_CreateProdukMutation({
      ...getXHasuraContextHeader({role: 'administrator'}),
      refetchQueries: [namedOperations.Query.Produk_GetAllProduk],
    });

  const handleSubmission = async (data: IDefaultValues) => {
    let photo_url = '';
    if (productFoto?.uri) {
      try {
        const finalFileName = renameFilenameWithAddedNanoid(
          data.name,
          productFoto.uri,
        );
        const image = {
          type: productFoto.type,
          uri: productFoto.uri,
          name: finalFileName.originalName.name,
        };

        const res = await storage.put(
          `/public/products/${finalFileName.modifiedName}`,
          image,
        );
        photo_url = res?.key || '';
      } catch (error) {
        console.log(
          '🚀 ~ file: CreateProduk.tsx ~ line 145 ~ handleSubmission ~ error',
          error,
        );
        toast.show({
          ...TOAST_TEMPLATE.error(
            `Gagal melakukan upload foto produk ${data.name}.`,
          ),
        });
      }
    }

    const res = await createKategoriMutation({
      variables: {
        name: data.name,
        photo_url: photo_url,
        capital_price: data.capital_price.value || 0,
        selling_price: data.selling_price.value || 0,
        discount: data.discount.value || 0,
        product_category_id: parseInt(data.product_category_id, 10),
      },
    });
    if (res.errors) {
      toast.show({
        ...TOAST_TEMPLATE.error(
          `Gagal melakukan penambahan produk ${res.data?.insert_rocketjaket_product_one?.name}.`,
        ),
      });
    } else {
      reset();
      toast.show({
        ...TOAST_TEMPLATE.success(
          `Berhasil menambahkan produk ${res.data?.insert_rocketjaket_product_one?.name}.`,
        ),
      });
      navigation.goBack();
    }
  };

  const getImageFromCamera = () => {
    launchCamera(
      {
        mediaType: 'photo',
        saveToPhotos: true,
        cameraType: 'back',
      },
      data => {
        if (data?.assets) {
          const asset = data.assets[0] || {};
          setProductFoto(prev => ({...prev, ...asset}));
        }
      },
    );
  };

  const getImageFromGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 1,
      },
      data => {
        if (data?.assets) {
          const asset = data.assets[0] || {};
          setProductFoto(prev => ({...prev, ...asset}));
        }
      },
    );
  };

  return (
    <ScrollView>
      <DismissKeyboardWrapper>
        <Box pb="40">
          <HStack justifyContent="space-between">
            <Heading fontSize="xl" mb="10">
              Buat Produk Baru
            </Heading>
          </HStack>
          <Stack direction={containerDirection} space="6">
            <Box bgColor="white" p="8" borderRadius="xl" w={formWidth}>
              <VStack space="4">
                <RHSelect
                  selectOptions={kategoriProduk}
                  control={control}
                  errors={errors}
                  name="product_category_id"
                  label="Kategori Produk"
                />
                <RHTextInput
                  name="name"
                  control={control}
                  errors={errors}
                  label="Nama Produk"
                />
                <RHNumberInput
                  keyboardType="number-pad"
                  name="capital_price"
                  control={control}
                  errors={errors}
                  label="Default Harga Modal"
                  format="rp"
                />
                <RHNumberInput
                  keyboardType="number-pad"
                  name="selling_price"
                  control={control}
                  errors={errors}
                  label="Default Harga Jual"
                  format="rp"
                />
                <RHNumberInput
                  keyboardType="number-pad"
                  name="discount"
                  control={control}
                  errors={errors}
                  label="Default Diskon"
                  format="discountPercentage"
                />
              </VStack>
            </Box>
            <Box bgColor="white" p="8" borderRadius="xl" w={productImageWidth}>
              <VStack space="4">
                <Center>
                  <Text fontWeight="bold">Foto Produk</Text>
                </Center>
                {productFoto?.uri ? (
                  <Box h="40">
                    <Image
                      source={{uri: productFoto?.uri}}
                      resizeMode="contain"
                      style={{height: '100%'}}
                    />
                  </Box>
                ) : (
                  <Center h="40">
                    <Image
                      source={require('../../assets/images/image-not-found.png')}
                      resizeMode="contain"
                      style={{height: '100%'}}
                    />
                  </Center>
                )}
                <VStack space="2" justifyContent="center" alignItems="center">
                  <Box mb="4">
                    <Text>Belum ada foto</Text>
                  </Box>
                  <Box>
                    <Button
                      onPress={getImageFromCamera}
                      leftIcon={<Icon as={Feather} name="camera" size="sm" />}>
                      Ambil Dari Kamera
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      onPress={getImageFromGallery}
                      leftIcon={<Icon as={Feather} name="image" size="sm" />}>
                      Ambil Dari Galeri
                    </Button>
                  </Box>
                </VStack>
              </VStack>
            </Box>
          </Stack>

          <HStack justifyContent="flex-end" mt="8">
            <ButtonSave
              isLoading={_createKategoriMutationResult.loading}
              onPress={handleSubmit(handleSubmission)}
            />
          </HStack>
        </Box>
      </DismissKeyboardWrapper>
    </ScrollView>
  );
};

export default withAppLayout(CreateProduk);
