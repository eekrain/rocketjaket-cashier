import React from 'react';
import {
  Box,
  Icon,
  IconButton,
  IBoxProps,
  IIconProps,
  IIconButtonProps,
} from 'native-base';
import MapboxGL, {
  MapViewProps,
  OnPressEvent,
} from '@react-native-mapbox-gl/maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useGetLocation} from '../../shared/utils';
import {StyleSheet} from 'react-native';
import LoadingOverlay from '../Overlay/LoadingOverlay';

MapboxGL.setAccessToken(
  'sk.eyJ1IjoiZWVrcmFpbiIsImEiOiJjbDQ1amNnYW8yMXJqM2JxeWVlbjV3dmlkIn0.d3OKo8Sem6SkohYsWyaU3w',
);

type GeoJSONFeature = OnPressEvent['features'][number];

export interface IMapViewWithMarkerProps extends IDefaultProps {
  // mapRef?: React.MutableRefObject<MapboxGL.MapView | null>;
  onPressMap?: MapViewProps['onPress'];
  onPressMapWithUpdateLocation?: MapViewProps['onPress'];
  onUpdateLocation: (latitude: number, longitude: number) => void;
  currentLocation?: {latitude: number | null; longitude: number | null};
}

interface IDefaultProps {
  containerProps?: IBoxProps;
  markerProps?: IIconProps;
  iconButtonProps?: IIconButtonProps;
  isLazyFetch?: boolean;
}

const defaultProps: IDefaultProps = {
  containerProps: {w: 'full', h: 400},
  markerProps: {
    as: Ionicons,
    name: 'location-sharp',
    size: '2xl',
    color: 'red.800',
  },
  iconButtonProps: {
    variant: 'solid',
    colorScheme: 'primary',
    position: 'absolute',
    borderRadius: 'full',
    right: 4,
    top: 4,
    size: 'lg',
    icon: <Icon as={Ionicons} name={'locate-sharp'} size="2xl" />,
  },
};

export const MapViewWithMarker = ({
  // mapRef,
  onPressMap,
  onPressMapWithUpdateLocation,
  onUpdateLocation,
  containerProps,
  markerProps,
  iconButtonProps,
  currentLocation,
  isLazyFetch,
}: IMapViewWithMarkerProps) => {
  const {location, setLocation, error, loading, refetch} = useGetLocation({
    onUpdateLocation,
    currentLocation:
      currentLocation && currentLocation?.latitude && currentLocation?.longitude
        ? {
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
          }
        : null,
    isLazyFetch,
  });

  const finalOnPress: MapViewProps['onPress'] = onPressMapWithUpdateLocation
    ? e => {
        onPressMapWithUpdateLocation(e);
        setLocation(e.geometry.coordinates);
        onUpdateLocation(e.geometry.coordinates[1], e.geometry.coordinates[0]);
      }
    : onPressMap;

  return (
    <Box
      {...defaultProps.containerProps}
      {...containerProps}
      position="relative"
      overflow={'hidden'}>
      <MapboxGL.MapView
        style={styles.map}
        // ref={mapRef}
        onPress={finalOnPress}>
        <MapboxGL.Camera zoomLevel={12} centerCoordinate={location} />
        {currentLocation?.latitude && currentLocation.longitude && (
          <MapboxGL.MarkerView id="main" coordinate={location}>
            <Icon {...defaultProps.markerProps} {...markerProps} />
          </MapboxGL.MarkerView>
        )}
      </MapboxGL.MapView>

      <IconButton
        {...defaultProps.iconButtonProps}
        {...iconButtonProps}
        onPress={refetch}
      />

      <LoadingOverlay size={'md'} visible={loading} />
    </Box>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
