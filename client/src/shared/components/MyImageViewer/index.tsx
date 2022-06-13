import React, {useEffect, useMemo, useState} from 'react';
import FastImage from 'react-native-fast-image';
import {Box} from 'native-base';
import {useAccessToken} from '@nhost/react';
import {
  getStorageFileUrlWImageTransform,
  IGetImageTransform,
} from '../../utils';
import {Pressable} from 'react-native';
import {useMyZoomImageViewer} from '../../../state/zoomImageViewer';
interface IMyImageViewerProps {
  source: IGetImageTransform;
  size?: number | string;
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  topRightElement?: JSX.Element;
  isDisableZoom?: boolean;
  // reanimatedStyle?: ReturnType<typeof useAnimatedStyle>;
}

const imageNotFound = require('../../../assets/images/image-not-found.png');

export const MyImageViewer = ({
  source,
  size,
  width,
  height,
  borderRadius = 0,
  topRightElement,
  isDisableZoom = false,
}: // reanimatedStyle,
IMyImageViewerProps) => {
  // console.log('🚀 ~ file: index.tsx ~ line 23 ~ source', source);
  const accessToken = useAccessToken();
  const [isError, setError] = useState(false);
  // console.log('🚀 ~ file: index.tsx ~ line 39 ~ isError', isError);
  const myZoomImageViewer = useMyZoomImageViewer();

  const finalSource = useMemo(
    () => ({
      normal:
        !isError && source
          ? {
              uri: getStorageFileUrlWImageTransform(source),
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          : imageNotFound,
      zoom:
        !isError && source
          ? {
              uri: getStorageFileUrlWImageTransform({
                ...source,
                w: undefined,
                h: undefined,
                q: undefined,
                alwaysRefresh: undefined,
              }),
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          : imageNotFound,
    }),
    [isError, source, accessToken],
  );
  // console.log('🚀 ~ file: index.tsx ~ line 38 ~ source', source);
  // console.log(
  //   '🚀 ~ file: index.tsx ~ line 73 ~ finalSource',
  //   finalSource.normal,
  // );

  useEffect(() => setError(false), [source]);

  const imageComponent = () => {
    return (
      <FastImage
        source={finalSource.normal}
        resizeMode="cover"
        onError={() => {
          setError(true);
        }}
        style={{
          borderRadius: borderRadius ? undefined : borderRadius,
          width: size ? size : width,
          height: size ? size : height,
        }}
      />
    );
  };

  const render = () => {
    return (
      <Box position="relative">
        <Box position="relative" overflow="hidden">
          {topRightElement && (
            <Box position="absolute" zIndex={2} top={0} right={0}>
              {topRightElement}
            </Box>
          )}
          {imageComponent()}
        </Box>
      </Box>
    );
  };

  if (!isDisableZoom)
    return (
      <Pressable
        onPress={() => {
          if (!isDisableZoom) myZoomImageViewer.openImage(finalSource.zoom);
        }}>
        {render()}
      </Pressable>
    );

  return render();
};
