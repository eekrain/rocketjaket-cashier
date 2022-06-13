import React, {useEffect, useMemo, useState} from 'react';
import FastImage, {Source} from 'react-native-fast-image';
import {Box, HStack, Text, IBoxProps} from 'native-base';
import {
  generateAvatarName,
  getStorageFileUrlWImageTransform,
  IGetImageTransform,
} from '../../utils';
import {useAccessToken} from '@nhost/react';
import {Pressable} from 'react-native';
import {useMyZoomImageViewer} from '../../../state/zoomImageViewer';

interface Props {
  fallbackText: string;
  source: IGetImageTransform;
  disableErrorFallback?: boolean;
  overlay?: boolean;
  overlayColor?: IBoxProps['bgColor'];
  size?: number | string;
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  borderTopRadius?: number;
  bgColor?: IBoxProps['bgColor'];
  textColor?: IBoxProps['color'];
  fontSize?: IBoxProps['fontSize'];
  fontWeight?: IBoxProps['fontWeight'];
  topRightElement?: JSX.Element;
  isDisableZoom?: boolean;
}

export const MyAvatar = ({
  fallbackText,
  disableErrorFallback,
  source,
  size,
  width,
  height,
  borderRadius = 100,
  borderTopRadius,
  bgColor = 'gray.200',
  textColor,
  topRightElement,
  fontSize,
  fontWeight = 'bold',
  overlay,
  overlayColor = 'rgba(255, 255, 255, 0.2)',
  isDisableZoom = false,
}: Props) => {
  const [isError, setError] = useState(false);
  // console.log('🚀 ~ file: index.tsx ~ line 51 ~ isError', isError);
  const accessToken = useAccessToken();
  const myZoomImageViewer = useMyZoomImageViewer();

  // console.log('🚀 ~ file: index.tsx ~ line 50 ~ source', source);

  useEffect(() => setError(false), [source]);

  const finalSource = useMemo(
    () => ({
      normal: {
        uri: getStorageFileUrlWImageTransform(source),
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
      zoom: {
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
      },
    }),
    [source, accessToken],
  );
  // console.log(
  //   '🚀 ~ file: index.tsx ~ line 82 ~ finalSource.normal',
  //   finalSource.normal.uri,
  // );

  const render = () => {
    return (
      <Box position="relative">
        {finalSource.normal && (!isError || disableErrorFallback) ? (
          <Box position="relative" overflow="hidden">
            {topRightElement && (
              <Box position="absolute" zIndex={2} top={0} right={0}>
                {topRightElement}
              </Box>
            )}
            <FastImage
              source={finalSource.normal}
              style={{
                borderRadius: borderTopRadius ? undefined : borderRadius,
                borderTopLeftRadius: borderRadius
                  ? undefined
                  : borderTopRadius
                  ? borderTopRadius
                  : undefined,
                borderTopRightRadius: borderRadius
                  ? undefined
                  : borderTopRadius
                  ? borderTopRadius
                  : undefined,
                width: size ? size : width,
                height: size ? size : height,
              }}
              resizeMode="cover"
              onError={() => {
                setError(true);
              }}
            />
          </Box>
        ) : (
          <HStack
            position="relative"
            overflow="hidden"
            justifyContent="center"
            alignItems="center"
            w={size ? size : width}
            h={size ? size : height}
            bgColor={bgColor}
            borderTopRadius={borderTopRadius}
            borderRadius={
              borderTopRadius
                ? undefined
                : borderRadius === 100
                ? 'full'
                : borderRadius === 0
                ? 'none'
                : borderRadius
            }>
            {topRightElement && (
              <Box position="absolute" zIndex={2} top={0} right={0}>
                {topRightElement}
              </Box>
            )}
            <Text
              fontWeight={fontWeight}
              color={textColor}
              letterSpacing={2}
              textTransform="uppercase"
              fontSize={fontSize}>
              {generateAvatarName(fallbackText)}
            </Text>
          </HStack>
        )}
        {overlay && (
          <Box
            bgColor={overlayColor}
            w="full"
            h="full"
            position="absolute"
            top="0"
            left="0">
            {null}
          </Box>
        )}
      </Box>
    );
  };

  if (!isDisableZoom)
    return (
      <Pressable
        onPress={() => {
          myZoomImageViewer.openImage(finalSource.zoom);
        }}>
        {render()}
      </Pressable>
    );

  return render();
};
