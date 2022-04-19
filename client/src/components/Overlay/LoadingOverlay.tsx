/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {HStack, VStack, Text} from 'native-base';
import FastImage from 'react-native-fast-image';

interface Props {
  size: 'xl' | 'md';
  visible: boolean;
  borderRadius?: 'xl' | false;
  isWholePage?: true;
}

const LoadingOverlay = ({size, visible, borderRadius = 'xl'}: Props) => {
  const imgsize = 50;
  const fontSize = size === 'xl' ? 'xl' : 'md';
  const px = size === 'xl' ? '50' : '12';
  const py = size === 'xl' ? '10' : '5';

  if (visible) {
    return (
      <HStack
        position="absolute"
        borderRadius={borderRadius ? borderRadius : undefined}
        top={0}
        left={0}
        zIndex={100}
        w="full"
        h="full"
        bgColor="rgba(0, 0, 0, 0.2)"
        justifyContent="center"
        alignItems="center">
        <VStack bgColor="white" py={py} px={px}>
          <FastImage
            style={{width: imgsize, height: imgsize, alignSelf: 'center'}}
            source={require('../../assets/images/indicator5.gif')}
            resizeMode={FastImage.resizeMode.contain}
          />
          <Text
            color="primary.600"
            fontSize={fontSize}
            letterSpacing="2xl"
            fontWeight="extrabold">
            Loading
          </Text>
        </VStack>
      </HStack>
    );
  }
  return null;
};

export default LoadingOverlay;
