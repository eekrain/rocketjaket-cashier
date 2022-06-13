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
  nhost,
} from '../../shared/utils';
import {TOAST_TEMPLATE} from '../../shared/constants';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  SimpleDataGrid,
  DismissKeyboardWrapper,
  RHTextInput,
  RHSelect,
  RHNumberInput,
  TRHNumberValueType,
  MyImageViewer,
} from '../../shared/components';
import {ButtonBack, ButtonSave} from '../Buttons';
import {useMemo} from 'react';
import {
  launchCamera,
  Asset,
  launchImageLibrary,
} from 'react-native-image-picker';
import {useState} from 'react';
import {UpdateProdukNavProps} from '../../screens/app/ProdukScreen';
import {useMyAppState} from '../../state';
import dayjs from 'dayjs';
import to from 'await-to-js';

interface IDefaultValues {
  product_category_id: string;
  name: string;
  capital_price: TRHNumberValueType;
  selling_price: TRHNumberValueType;
  discount: TRHNumberValueType;
  photo: {
    currentPhotoFileId: string;
    asset?: Asset;
  };
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
  photo: {currentPhotoFileId: ''},
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
    reset,
    watch,
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const photo = watch('photo');
  console.log(
    '🚀 ~ file: UpdateProduk.tsx ~ line 139 ~ UpdateProduk ~ photo',
    photo,
  );

  const [isErrorOnce, setErrorOnce] = useState(false);
  const getProdukData = useProduk_GetProdukByPkQuery({
    variables: {
      id: route.params.productId,
    },
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    myAppState.setLoadingWholePage(getProdukData.loading);

    return () => {
      myAppState.setLoadingWholePage(false);
    };
  }, [getProdukData.loading]);

  useEffect(() => {
    const produkData = getProdukData.data?.products_by_pk;
    if (produkData === null && !isErrorOnce) {
      toast.show(TOAST_TEMPLATE.error('Produk tidak ditemukan.'));
      navigation.goBack();
      setErrorOnce(true);
    } else {
      if (produkData) {
        reset({
          name: produkData?.name || '',
          product_category_id: produkData.product_category_id.toString(),
          capital_price: {
            formattedValue: myNumberFormat.thousandSeparated(
              produkData.capital_price,
            ),
            value: produkData.capital_price,
          },
          selling_price: {
            formattedValue: myNumberFormat.thousandSeparated(
              produkData.selling_price,
            ),
            value: produkData.selling_price,
          },
          discount: {
            formattedValue: myNumberFormat.thousandSeparated(
              produkData.discount || 0,
            ),
            value: produkData.discount,
          },
          photo: {currentPhotoFileId: produkData.photo_id || ''},
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getProdukData.data?.products_by_pk, isErrorOnce]);

  const getAllKategoriProduk = useProduk_GetAllKategoriProdukQuery();
  const kategoriProduk = useMemo(() => {
    const kategori =
      getAllKategoriProduk.data?.product_categories.map(cat => ({
        value: cat.id.toString(),
        label: cat.name,
      })) || [];
    return kategori;
  }, [getAllKategoriProduk.data?.product_categories]);

  const [updateProdukMutation, _updateProdukMutationResult] =
    useProduk_UpdateProdukByPkMutation({
      ...getXHasuraContextHeader({role: 'administrator'}),
      refetchQueries: [
        namedOperations.Query.Produk_GetAllProduk,
        namedOperations.Query.Inventory_GetAllInventoryProductByStoreId,
      ],
    });

  const handleSubmission = async (data: IDefaultValues) => {
    let photo_id = getProdukData.data?.products_by_pk?.photo_id || '';
    if (data.photo.asset?.uri) {
      const finalFileName = renameFilenameWithAddedNanoid(
        data.name,
        data.photo.asset?.uri,
      );
      const image = {
        type: data.photo.asset.type,
        uri: data.photo.asset.uri,
        name: finalFileName.modifiedName,
      };
      const [err, res] = await to(
        nhost.storage.upload({
          file: image,
          bucketId: 'products',
        }),
      );
      if (err || !res) {
        console.log(
          '🚀 ~ file: CreateProduk.tsx ~ line 145 ~ handleSubmission ~ err',
          err,
        );
        toast.show(
          TOAST_TEMPLATE.error(
            `Gagal melakukan upload foto produk ${data.name}.`,
          ),
        );
      }
      if (
        res?.fileMetadata?.id &&
        getProdukData.data?.products_by_pk?.photo_id !== ''
      ) {
        const [err, res] = await to(
          nhost.storage.delete({
            fileId: getProdukData?.data?.products_by_pk?.photo_id || '',
          }),
        );
        if (err || !res) {
          console.log(
            '🚀 ~ file: UpdateProduk.tsx ~ line 250 ~ handleSubmission ~ err',
            err,
          );
        } else {
          console.log(
            '🚀 ~ file: UpdateProduk.tsx ~ line 250 ~ handleSubmission ~ res',
            res,
          );
        }
      }
      photo_id = res?.fileMetadata?.id ? res?.fileMetadata?.id : photo_id;
    }
    const [err, res] = await to(
      updateProdukMutation({
        variables: {
          id: route.params.productId,
          product: {
            name: data.name,
            photo_id: photo_id,
            capital_price: data.capital_price.value,
            selling_price: data.selling_price.value,
            discount: data.discount.value,
            product_category_id: parseInt(data.product_category_id, 10),
          },
        },
      }),
    );
    if (err || !res) {
      toast.show(
        TOAST_TEMPLATE.error(`Gagal melakukan update produk ${data.name}.`),
      );
    } else {
      toast.show(
        TOAST_TEMPLATE.success(`Berhasil update produk ${data.name}.`),
      );
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
          setValue('photo.asset', asset, {shouldDirty: true});
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
          setValue('photo.asset', asset, {shouldDirty: true});
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
                      gridWidth={220}
                      titleWidthRatio={0.9}
                      dividerWidthRatio={0.1}
                      valueWidthRatio={1}
                      data={[
                        {
                          title: 'Dibuat tanggal',
                          value: dayjs(
                            getProdukData.data?.products_by_pk?.created_at,
                          ).format('D/M/YYYY H:mm'),
                        },
                        {
                          title: 'Terakhir diubah',
                          value: dayjs(
                            getProdukData.data?.products_by_pk?.updated_at,
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
                <Center>
                  <MyImageViewer
                    source={{
                      fileUrl: photo.asset?.uri,
                      fileId: photo.asset?.uri
                        ? undefined
                        : photo.currentPhotoFileId
                        ? photo.currentPhotoFileId
                        : undefined,
                      w: 180,
                      q: 60,
                    }}
                    size={180}
                    isDisableZoom={true}
                  />
                </Center>
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
