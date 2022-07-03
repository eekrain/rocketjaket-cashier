import {useToast} from 'native-base';
import {useEffect, useState} from 'react';
import Geolocation, {
  GeoPosition,
  GeoError,
} from 'react-native-geolocation-service';
import {TOAST_TEMPLATE} from '../constants';

export const defaultCoords = [110.369492, -7.79558];

export interface IUseGetLocation {
  onUpdateLocation: (latitude: number, longitude: number) => void;
  currentLocation?: {latitude: number; longitude: number} | null;
  isLazyFetch?: boolean;
}

export const useGetLocation = ({
  onUpdateLocation,
  currentLocation,
  isLazyFetch,
}: IUseGetLocation) => {
  const toast = useToast();
  const [location, setLocation] = useState(
    currentLocation
      ? [currentLocation.longitude, currentLocation.latitude]
      : defaultCoords,
  );
  const [loading, setLoading] = useState(false);
  const [isRefetch, setRefetch] = useState(isLazyFetch ? false : true);
  const [error, setError] = useState<GeoError | null>(null);

  const refetch = () => {
    setRefetch(true);
  };

  useEffect(() => {
    if (isRefetch === true) {
      setRefetch(false);
      setLoading(true);
      Geolocation.getCurrentPosition(
        position => {
          // console.log(
          //   '🚀 ~ file: CreateToko.tsx ~ line 96 ~ useEffect ~ position',
          //   position,
          // );
          setLocation([position.coords.longitude, position.coords.latitude]);
          setLoading(false);
          onUpdateLocation(position.coords.latitude, position.coords.longitude);
        },
        error => {
          // See error code charts below.
          console.log(
            '🚀 ~ file: CreateToko.tsx ~ line 99 ~ useEffect ~ error',
            error,
          );
          toast.show(TOAST_TEMPLATE.error('Gagal mendapatkan lokasi', 1000));
          setError(error);
          setLoading(false);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  }, [isRefetch]);

  const [isDataRemoteReady, setDataRemoteReady] = useState(false);
  useEffect(() => {
    if (currentLocation && !isDataRemoteReady) {
      console.log(
        '🚀 ~ file: useGetLocation.ts ~ line 66 ~ useEffect ~ currentLocation',
        currentLocation,
      );
      setDataRemoteReady(true);
      setLocation([currentLocation.longitude, currentLocation.latitude]);
    }
  }, [currentLocation]);

  return {location, setLocation, loading, error, refetch};
};
