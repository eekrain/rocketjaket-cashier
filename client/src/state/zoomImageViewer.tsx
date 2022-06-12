import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';
import create from 'zustand';
import {createTrackedSelector} from 'react-tracked';
import {Box, HStack, Icon, IconButton, Modal} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import {MyImageViewer} from '../shared/components';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {
  PinchGestureHandler,
  PinchGestureHandlerGestureEvent,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import FastImage, {Source} from 'react-native-fast-image';
import {getStorageFileUrlWImageTransform} from '../shared/utils';
import {useAccessToken} from '@nhost/react';
const AnimatedFastImage = Animated.createAnimatedComponent(
  FastImage as unknown as React.FunctionComponent<any>,
);

interface MyZoomImageViewerStore {
  isModalZoomImageOpen: boolean;
  imgSource: null | Source;
  openImage: (imgSource: Source) => void;
  closeModalZoomImageOpen: () => void;
}

const myZoomImageViewerStore = create<MyZoomImageViewerStore>(set => ({
  isModalZoomImageOpen: false,
  imgSource: null,
  openImage: imgSource => {
    set(state => ({
      ...state,
      isModalZoomImageOpen: true,
      imgSource,
    }));
  },
  closeModalZoomImageOpen: () => {
    set(state => ({...state, imgSource: null, isModalZoomImageOpen: false}));
  },
}));

export const useMyZoomImageViewer = createTrackedSelector(
  myZoomImageViewerStore,
);

interface IZoomImageViewerModalProps {
  isModalZoomImageOpen: boolean;
  closeModalZoomImageOpen: () => void;
}

const {width, height} = Dimensions.get('window');
const imageNotFound = require('../assets/images/image-not-found.png');
export const ZoomImageViewerModal = ({
  isModalZoomImageOpen,
  closeModalZoomImageOpen,
}: IZoomImageViewerModalProps) => {
  const [isError, setError] = useState(false);
  // console.log('🚀 ~ file: zoomImageViewer.tsx ~ line 66 ~ isError', isError);

  const scale = useSharedValue(1);
  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);

  const pinchHandler =
    useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
      onActive: event => {
        scale.value = event.scale;
        focalX.value = event.focalX;
        focalY.value = event.focalY;
      },
      onEnd: () => {
        scale.value = withTiming(1);
      },
    });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: focalX.value},
        {translateY: focalY.value},
        {translateX: -width / 2},
        {translateY: -height / 2},
        {scale: scale.value},
        {translateX: -focalX.value},
        {translateY: -focalY.value},
        {translateX: width / 2},
        {translateY: height / 2},
      ],
    };
  });

  const accessToken = useAccessToken();

  const myZoomImageViewer = useMyZoomImageViewer();
  useEffect(() => {
    if (myZoomImageViewer.imgSource === null) setError(false);
  }, [myZoomImageViewer.imgSource]);

  const finalSource = useMemo(() => {
    return !isError ? myZoomImageViewer.imgSource : imageNotFound;
  }, [isError, accessToken, myZoomImageViewer.imgSource]);
  // console.log(
  //   '🚀 ~ file: zoomImageViewer.tsx ~ line 108 ~ finalSource ~ finalSource',
  //   finalSource,
  // );

  return (
    <Modal isOpen={isModalZoomImageOpen} onClose={closeModalZoomImageOpen}>
      <Box w="full" h="full" p="2">
        <HStack justifyContent="flex-end">
          <IconButton
            variant="solid"
            borderRadius={'full'}
            p="2"
            bgColor={'indigo.700'}
            icon={<Icon as={Feather} name="x" size="4xl" color="white" />}
            onPress={closeModalZoomImageOpen}
          />
        </HStack>
        <GestureHandlerRootView style={{flex: 1}}>
          <PinchGestureHandler onGestureEvent={pinchHandler}>
            <Animated.View style={{flex: 1}}>
              {myZoomImageViewer.imgSource && (
                <AnimatedFastImage
                  source={finalSource}
                  resizeMode="contain"
                  onError={() => {
                    setError(true);
                  }}
                  style={[
                    {
                      flex: 1,
                    },
                    rStyle,
                  ]}
                />
              )}
            </Animated.View>
          </PinchGestureHandler>
        </GestureHandlerRootView>
      </Box>
    </Modal>
  );
};
