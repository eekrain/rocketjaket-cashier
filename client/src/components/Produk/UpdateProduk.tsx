/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
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
  useProduk_GetAllKategoriProdukQuery,
  useProduk_GetProdukByPkQuery,
  useProduk_UpdateProdukByPkMutation,
} from '../../graphql/gql-generated';
import * as yup from 'yup';
import {
  getStorageFileUrlWImageTransform,
  getXHasuraContextHeader,
  myNumberFormat,
  renameFilenameWithAddedNanoid,
  storage,
} from '../../shared/utils';
import {TOAST_TEMPLATE} from '../../shared/constants';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  SimpleDataGrid,
  DismissKeyboardWrapper,
  RHTextInput,
} from '../../shared/components';
import {ButtonBack, ButtonSave} from '../Buttons';
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
import {UpdateProdukNavProps} from '../../screens/app/ProdukScreen';
import {useMyAppState} from '../../state';
import dayjs from 'dayjs';

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

interface AssetWithUpdate extends Asset {
  isChanged?: boolean;
  defaultPhotoURL?: string;
}

interface Props extends UpdateProdukNavProps {}

const UpdateProduk = ({navigation, route}: Props) => {
  const toast = useToast();
  const myAppState = useMyAppState();
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
    setValue,
    formState: {errors, isSubmitSuccessful},
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  console.log(
    '🚀 ~ file: UpdateProduk.tsx ~ line 115 ~ UpdateProduk ~ isSubmitSuccessful',
    isSubmitSuccessful,
  );

  const [productFoto, setProductFoto] = useState<AssetWithUpdate | null>(null);

  const [isErrorOnce, setErrorOnce] = useState(false);
  const getProdukData = useProduk_GetProdukByPkQuery({
    variables: {
      id: route.params.productId,
    },
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    if (!isSubmitSuccessful) {
      myAppState.setLoadingWholePage(getProdukData.loading);
    } else {
      myAppState.setLoadingWholePage(false);
    }
  }, [getProdukData.loading, isSubmitSuccessful, myAppState]);

  useEffect(() => {
    if (
      getProdukData.data?.rocketjaket_product_by_pk === null &&
      !isErrorOnce
    ) {
      toast.show({
        ...TOAST_TEMPLATE.error('Produk tidak ditemukan.'),
      });
      navigation.goBack();
      setErrorOnce(true);
    } else {
      if (getProdukData.data?.rocketjaket_product_by_pk) {
        setProductFoto({
          isChanged: false,
          defaultPhotoURL: getProdukData.data.rocketjaket_product_by_pk
            ?.photo_url
            ? getStorageFileUrlWImageTransform({
                fileKey:
                  getProdukData.data.rocketjaket_product_by_pk?.photo_url || '',
                w: 500,
                q: 60,
              })
            : undefined,
        });
        setValue('name', getProdukData.data?.rocketjaket_product_by_pk.name);
        setValue(
          'product_category_id',
          getProdukData.data?.rocketjaket_product_by_pk.product_category_id.toString(),
        );
        setValue('capital_price', {
          formattedValue: myNumberFormat.thousandSeparated(
            getProdukData.data.rocketjaket_product_by_pk.capital_price,
          ),
          value: getProdukData.data.rocketjaket_product_by_pk.capital_price,
        });
        setValue('selling_price', {
          formattedValue: myNumberFormat.thousandSeparated(
            getProdukData.data?.rocketjaket_product_by_pk.selling_price,
          ),
          value: getProdukData.data?.rocketjaket_product_by_pk.selling_price,
        });
        setValue('discount', {
          formattedValue: myNumberFormat.thousandSeparated(
            getProdukData.data?.rocketjaket_product_by_pk?.discount || 0,
          ),
          value: getProdukData.data?.rocketjaket_product_by_pk?.discount,
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getProdukData.data?.rocketjaket_product_by_pk, isErrorOnce]);

  const getAllKategoriProduk = useProduk_GetAllKategoriProdukQuery();
  const kategoriProduk = useMemo(() => {
    const kategori =
      getAllKategoriProduk.data?.rocketjaket_product_category.map(cat => ({
        value: cat.id.toString(),
        label: cat.name,
      })) || [];
    return kategori;
  }, [getAllKategoriProduk.data?.rocketjaket_product_category]);

  const [updateProdukMutation, _updateProdukMutationResult] =
    useProduk_UpdateProdukByPkMutation({
      ...getXHasuraContextHeader({role: 'administrator'}),
      refetchQueries: [namedOperations.Query.Produk_GetAllProduk],
    });

  const handleSubmission = async (data: IDefaultValues) => {
    console.log(
      '🚀 ~ file: UpdateProduk.tsx ~ line 202 ~ handleSubmission ~ data',
      data,
    );
    let photo_url =
      getProdukData.data?.rocketjaket_product_by_pk?.photo_url || '';
    if (productFoto?.isChanged && productFoto?.uri) {
      try {
        const finalFileName = renameFilenameWithAddedNanoid(
          data.name,
          productFoto.uri,
        );
        const image = {
          type: productFoto.type,
          uri: productFoto.uri,
          name: finalFileName.modifiedName,
        };
        const res = await storage.put(
          `/public/products/${finalFileName.modifiedName}`,
          image,
        );
        if (
          res?.key &&
          getProdukData.data?.rocketjaket_product_by_pk?.photo_url !== ''
        ) {
          await storage.delete(
            `/${getProdukData.data?.rocketjaket_product_by_pk?.photo_url}`,
          );
        }
        photo_url = res?.key ? res.key : 'error key undefined';
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
    const res = await updateProdukMutation({
      variables: {
        id: route.params.productId,
        name: data.name,
        photo_url: photo_url,
        capital_price: data.capital_price.value,
        selling_price: data.selling_price.value,
        discount: data.discount.value,
        product_category_id: parseInt(data.product_category_id, 10),
      },
    });
    if (res.errors) {
      myAppState.setLoadingWholePage(false);
      toast.show({
        ...TOAST_TEMPLATE.error(
          `Gagal melakukan update produk ${res.data?.update_rocketjaket_product_by_pk?.name}.`,
        ),
      });
    } else {
      toast.show({
        ...TOAST_TEMPLATE.success(
          `Berhasil update produk ${res.data?.update_rocketjaket_product_by_pk?.name}.`,
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
          setProductFoto(prev => {
            return {...prev, ...asset, isChanged: true};
          });
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
          setProductFoto(prev => ({...prev, ...asset, isChanged: true}));
        }
      },
    );
  };

  return (
    <ScrollView>
      <DismissKeyboardWrapper>
        <Box pb="40" position="relative">
          <HStack justifyContent="space-between">
            <Heading fontSize="xl" mb="10">
              Edit Produk
            </Heading>
          </HStack>
          <Stack direction={containerDirection} space="6">
            <Box bgColor="white" p="8" borderRadius="xl" w={formWidth}>
              <VStack space="4">
                <HStack justifyContent="flex-end">
                  <Box>
                    <SimpleDataGrid
                      data={[
                        {
                          title: 'Dibuat tanggal',
                          value: dayjs(
                            getProdukData.data?.rocketjaket_product_by_pk
                              ?.created_at,
                          ).format('D/M/YYYY H:mm'),
                        },
                        {
                          title: 'Terakhir diubah',
                          value: dayjs(
                            getProdukData.data?.rocketjaket_product_by_pk
                              ?.updated_at,
                          ).format('D/M/YYYY H:mm'),
                        },
                      ]}
                    />
                  </Box>
                </HStack>
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
                {productFoto?.isChanged ? (
                  <Box h="40">
                    <Image
                      source={{uri: productFoto?.uri}}
                      resizeMode="contain"
                      style={{height: '100%'}}
                    />
                  </Box>
                ) : productFoto?.defaultPhotoURL ? (
                  <Box h="40">
                    <Image
                      source={{
                        headers: {
                          Pragma: 'no-cache',
                        },
                        uri: productFoto?.defaultPhotoURL,
                      }}
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

          <HStack justifyContent="flex-end" mt="8" space="4">
            <ButtonSave
              isLoading={_updateProdukMutationResult.loading}
              onPress={handleSubmit(handleSubmission)}
            />
            <ButtonBack onPress={() => navigation.goBack()} />
          </HStack>
        </Box>
      </DismissKeyboardWrapper>
    </ScrollView>
  );
};

export default withAppLayout(UpdateProduk);
