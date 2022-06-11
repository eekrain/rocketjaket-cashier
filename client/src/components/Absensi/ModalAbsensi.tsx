import React, {useEffect, useState} from 'react';
import {
  Box,
  Text,
  Center,
  Heading,
  HStack,
  Button,
  IconButton,
  Icon,
  Modal,
  useToast,
  VStack,
  Badge,
} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import {
  Attendance_Type_Enum_Enum,
  namedOperations,
  useAttendance_InsertOneMutation,
} from '../../graphql/gql-generated';
import {
  getXHasuraContextHeader,
  nhost,
  renameFilenameWithAddedNanoid,
  useGetLocation,
  useMyUser,
} from '../../shared/utils';
import {launchCamera, Asset} from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import to from 'await-to-js';
import {TOAST_TEMPLATE} from '../../shared/constants';
import {MapViewWithRadiusAndUserLocation} from '../MapViews/MapViewWithRadiusAndUserLocation';
import turfCircle from '@turf/circle';

interface ModalAbsensiProps {
  modalAbsensiOpen: boolean;
  onPressClose: () => void;
  tokoCoords: number[];
  useGetLocationReturn: ReturnType<typeof useGetLocation>;
  radiusCircle: ReturnType<typeof turfCircle>;
  distanceMeter: number;
  maximumDistanceFromToko: number;
}

const ModalAbsensi = ({
  modalAbsensiOpen,
  onPressClose,
  tokoCoords,
  useGetLocationReturn,
  radiusCircle,
  distanceMeter,
  maximumDistanceFromToko,
}: ModalAbsensiProps) => {
  const toast = useToast();
  const myUser = useMyUser();

  const [photo, setPhoto] = useState<Asset | null>(null);

  const openCamera = () => {
    launchCamera(
      {
        mediaType: 'photo',
        saveToPhotos: false,
        cameraType: 'front',
        includeExtra: false,
        quality: 0.5,
      },
      data => {
        if (data?.assets) {
          const asset = data.assets[0] || null;
          setPhoto(asset);
        }
      },
    );
  };

  const [insertAttendance, _insertAttendanceStatus] =
    useAttendance_InsertOneMutation({
      ...getXHasuraContextHeader({role: 'karyawan'}),
      refetchQueries: [namedOperations.Query.Attendance_GetMyAttendanceToday],
    });

  const handleSubmission = (photo: Asset) => {
    const mutation = async () => {
      if (photo.uri) {
        const finalFileName = renameFilenameWithAddedNanoid(
          myUser.displayName,
          photo.uri,
        );
        const image = {
          type: photo.type,
          uri: photo.uri,
          name: finalFileName.originalName.name,
        };

        const [errUpload, resUpload] = await to(
          nhost.storage.upload({file: image, bucketId: 'attendance'}),
        );
        if (errUpload || !resUpload) {
          console.log(
            '🚀 ~ file: ModalAbsensi.tsx ~ line 74 ~ mutation ~ errUpload',
            errUpload,
          );
        }
        console.log(
          '🚀 ~ file: ModalAbsensi.tsx ~ line 85 ~ mutation ~ resUpload',
          resUpload,
        );

        const [err, res] = await to(
          insertAttendance({
            variables: {
              object: {
                attendance_type: Attendance_Type_Enum_Enum.Enter,
                photo_file_id: resUpload?.fileMetadata?.id || null,
                user_id: myUser.id,
              },
            },
          }),
        );
        if (err || !res) {
          console.log(
            '🚀 ~ file: ModalAbsensi.tsx ~ line 98 ~ mutation ~ err',
            err,
          );
          toast.show(TOAST_TEMPLATE.error('Gagal melakukan absensi'));
        } else {
          toast.show(TOAST_TEMPLATE.success('Gagal melakukan absensi'));
        }
      }
    };

    return mutation();
  };

  useEffect(() => {
    if (photo && photo.uri) {
      handleSubmission(photo);
      setPhoto(null);
    }
  }, [photo]);

  return (
    <Modal isOpen={modalAbsensiOpen} size="xl" pb="16">
      <Modal.Content>
        <Modal.Header>
          <Box>
            <Box position="absolute" w="full" mt={1}>
              <Center>
                <Text fontSize="lg">Absen</Text>
              </Center>
            </Box>
            <HStack
              justifyContent="flex-end"
              alignItems="center"
              position="relative">
              <IconButton
                icon={
                  <Icon
                    as={Feather}
                    name="x-circle"
                    size="sm"
                    onPress={onPressClose}
                  />
                }
              />
            </HStack>
          </Box>
        </Modal.Header>
        <Box px="3" pt="3" pb="40">
          <MapViewWithRadiusAndUserLocation
            onUpdateLocation={() => {
              console.log('update');
            }}
            containerProps={{h: 250}}
            radiusLocation={tokoCoords}
            isLazyFetch={false}
            zoomLevel={16}
            useGetLocationReturn={useGetLocationReturn}
            radiusCircle={radiusCircle}
            distanceMeter={distanceMeter}
          />
          <Center mb="4">
            <Heading>Anda belum absen hari ini</Heading>
          </Center>
          <Center>
            <VStack space="2">
              <HStack>
                <Text w="32">Jarak dari toko</Text>
                <Text w="4">:</Text>
                <Text>{Math.round(distanceMeter)} meter</Text>
              </HStack>
              <HStack>
                <Text w="32">Maksimal jarak</Text>
                <Text w="4">:</Text>
                <Text>{Math.round(maximumDistanceFromToko)} meter</Text>
              </HStack>
              <HStack>
                <Text w="32">Bisa absen</Text>
                <Text w="4">:</Text>
                <Badge
                  colorScheme={
                    Math.round(distanceMeter) <
                    Math.round(maximumDistanceFromToko)
                      ? 'success'
                      : 'error'
                  }>
                  {Math.round(distanceMeter) <
                  Math.round(maximumDistanceFromToko)
                    ? 'Bisa'
                    : 'Tidak'}
                </Badge>
              </HStack>
            </VStack>
          </Center>
          <HStack justifyContent={'center'} mt="4">
            <Button
              disabled={
                Math.round(distanceMeter) > Math.round(maximumDistanceFromToko)
              }
              isDisabled={
                Math.round(distanceMeter) > Math.round(maximumDistanceFromToko)
              }
              isLoading={_insertAttendanceStatus.loading}
              size={'lg'}
              leftIcon={<Icon as={Ionicons} name="enter-sharp" size={'3xl'} />}
              onPress={openCamera}>
              Masuk
            </Button>
          </HStack>
        </Box>
      </Modal.Content>
    </Modal>
  );
};
export default ModalAbsensi;
