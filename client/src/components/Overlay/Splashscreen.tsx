import React from 'react';
import {Image, VStack, Text} from 'native-base';
import FastImage from 'react-native-fast-image';

const SplashScreen = () => {
  const imgsize = 80;
  return (
    <VStack
      justifyContent="center"
      alignItems="center"
      space="2"
      w="full"
      h="full">
      <Image
        source={require('../../assets/images/logo.png')}
        alt="Logo Rocketjaket"
        w="xs"
        resizeMode="contain"
      />
      <FastImage
        // eslint-disable-next-line react-native/no-inline-styles
        style={{width: imgsize, height: imgsize, alignSelf: 'center'}}
        source={require('../../assets/images/indicator5.gif')}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text
        color="primary.600"
        fontSize="lg"
        fontWeight="extrabold"
        letterSpacing="2xl">
        Loading
      </Text>
    </VStack>
  );
};

export default SplashScreen;
