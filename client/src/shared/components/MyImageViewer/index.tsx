import React, {useState} from 'react';
import FastImage, {Source} from 'react-native-fast-image';
import {Box} from 'native-base';
import {useAccessToken} from '@nhost/react';

interface Props {
  source: Source;
  size?: number | string;
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  topRightElement?: JSX.Element;
}

export const MyImageViewer = ({
  source,
  size,
  width,
  height,
  borderRadius = 0,
  topRightElement,
}: Props) => {
  const accessToken = useAccessToken();
  const [isError, setError] = useState(false);

  return (
    <Box position="relative">
      <Box position="relative" overflow="hidden">
        {topRightElement && (
          <Box position="absolute" zIndex={2} top={0} right={0}>
            {topRightElement}
          </Box>
        )}
        <FastImage
          source={
            isError || !source.uri
              ? require('../../../assets/images/image-not-found.png')
              : {
                  ...source,
                  headers: {
                    authorization: `Bearer ${accessToken}`,
                  },
                }
          }
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
      </Box>
    </Box>
  );
};
