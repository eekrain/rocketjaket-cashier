import React, {useRef} from 'react';
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
import turfCircle from '@turf/circle';

MapboxGL.setAccessToken(
  'sk.eyJ1IjoiZWVrcmFpbiIsImEiOiJjbDQ1amNnYW8yMXJqM2JxeWVlbjV3dmlkIn0.d3OKo8Sem6SkohYsWyaU3w',
);

type GeoJSONFeature = OnPressEvent['features'][number];

export interface IMapViewWithMarkerProps extends IDefaultProps {
  // mapRef?: React.MutableRefObject<MapboxGL.MapView | null>;
  onPressMap?: MapViewProps['onPress'];
  onPressMapWithUpdateLocation?: MapViewProps['onPress'];
  onUpdateLocation: (latitude: number, longitude: number) => void;
  radiusLocation: number[];
  radiusCircle: ReturnType<typeof turfCircle>;
  useGetLocationReturn: ReturnType<typeof useGetLocation>;
  distanceMeter: number;
}

interface IDefaultProps {
  containerProps?: IBoxProps;
  markerProps?: IIconProps;
  iconButtonProps?: IIconButtonProps;
  isLazyFetch?: boolean;
  zoomLevel?: number;
}

const defaultProps: IDefaultProps = {
  containerProps: {w: 'full', h: 400},
  markerProps: {
    as: Ionicons,
    name: 'navigate-circle-sharp',
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

export const MapViewWithRadiusAndUserLocation = ({
  // mapRef,
  onPressMap,
  onPressMapWithUpdateLocation,
  onUpdateLocation,
  containerProps,
  markerProps,
  iconButtonProps,
  radiusLocation,
  isLazyFetch,
  zoomLevel = 12,
  radiusCircle,
  useGetLocationReturn,
  distanceMeter,
}: IMapViewWithMarkerProps) => {
  const cameraRef = useRef<MapboxGL.Camera | null>(null);
  const finalOnUpdateLocation = (latitude: number, longitude: number) => {
    if (cameraRef.current) {
      console.log('fly to');
      cameraRef.current.flyTo([longitude, latitude]);
    }
    onUpdateLocation(latitude, longitude);
  };
  const {location, setLocation, error, loading, refetch} = useGetLocation({
    onUpdateLocation: finalOnUpdateLocation,
    currentLocation: null,
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
        <MapboxGL.Camera
          ref={cameraRef}
          zoomLevel={zoomLevel}
          centerCoordinate={location}
        />
        {radiusLocation && (
          <MapboxGL.MarkerView id="main" coordinate={radiusLocation}>
            <Icon
              {...defaultProps.markerProps}
              {...markerProps}
              {...{name: 'location-sharp', color: 'red.800'}}
            />
          </MapboxGL.MarkerView>
        )}
        {location && (
          <MapboxGL.MarkerView id="main" coordinate={location}>
            <Icon
              {...defaultProps.markerProps}
              {...markerProps}
              {...{color: 'primary.800'}}
            />
          </MapboxGL.MarkerView>
        )}
        {distanceMeter > 10 && (
          <MapboxGL.ShapeSource
            id="source1"
            lineMetrics={true}
            shape={{
              type: 'Feature',
              geometry: {
                type: 'LineString',
                coordinates: [radiusLocation, location],
              },
            }}>
            <MapboxGL.LineLayer
              id="layer1"
              style={{
                lineColor: 'red',
                lineCap: 'round',
                lineJoin: 'round',
                lineWidth: 2,
              }}
            />
          </MapboxGL.ShapeSource>
        )}

        <MapboxGL.ShapeSource id="main" shape={radiusCircle}>
          <MapboxGL.FillLayer
            id="main"
            style={{
              fillAntialias: true,
              fillColor: 'rgba(162, 28, 175, 0.4)',
              fillOutlineColor: 'rgba(162, 28, 175, 1)',
              fillTranslate: [10, 10],
            }}
          />
        </MapboxGL.ShapeSource>
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
