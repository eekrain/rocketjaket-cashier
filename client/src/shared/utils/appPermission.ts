import {
  checkMultiple,
  requestMultiple,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions';
import {Alert} from 'react-native';

export const appPermission = async () => {
  checkMultiple([
    PERMISSIONS.ANDROID.CAMERA,
    PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
    PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
    PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
  ]).then(checkStatuses => {
    if (checkStatuses[PERMISSIONS.ANDROID.CAMERA] === RESULTS.BLOCKED) {
      Alert.alert(
        'Izin Kamera Terblokir',
        'Izin kamera untuk aplikasi ini telah diblokir. Aktifkan izin kamera untuk menggunakan aplikasi ini!',
      );
    }

    if (
      checkStatuses[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE] ===
        RESULTS.BLOCKED ||
      checkStatuses[PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE] ===
        RESULTS.BLOCKED
    ) {
      Alert.alert(
        'Izin Storage Terblokir',
        'Izin storage untuk aplikasi ini telah diblokir. Aktifkan izin storage untuk menggunakan aplikasi ini!',
      );
    }

    if (
      checkStatuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION] ===
        RESULTS.BLOCKED ||
      checkStatuses[PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION] ===
        RESULTS.BLOCKED
    ) {
      Alert.alert(
        'Izin Lokasi Terblokir',
        'Izin lokasi untuk aplikasi ini telah diblokir. Aktifkan izin lokasi untuk menggunakan aplikasi ini!',
      );
    }

    requestMultiple([
      PERMISSIONS.ANDROID.CAMERA,
      PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
      PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
    ]).then(_reqStatuses => {
      // console.log('Kamera', _reqStatuses[PERMISSIONS.ANDROID.CAMERA]);
      // console.log(
      //   'Storage write',
      //   _reqStatuses[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE],
      // );
      // console.log(
      //   'Storage read',
      //   _reqStatuses[PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE],
      // );
    });
  });
};
