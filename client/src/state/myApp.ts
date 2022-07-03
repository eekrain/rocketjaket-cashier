import create from 'zustand';
import {createTrackedSelector} from 'react-tracked';
import {useEffect} from 'react';
// import {ScaledSize, Dimensions, useWindowDimensions} from 'react-native';
// import {useEffect} from 'react';

interface MyAppStore {
  isLoadingWholePage: boolean;
  isLoadingSplashScreen: boolean;
  setLoadingWholePage: (newVal: boolean) => void;
  setLoadingSplashScreen: (newVal: boolean) => void;
}

const zustandAppStore = create<MyAppStore>(set => ({
  isLoadingWholePage: false,
  isLoadingSplashScreen: false,
  setLoadingWholePage: newVal => {
    set(state => ({
      ...state,
      isLoadingWholePage: newVal,
    }));
  },
  setLoadingSplashScreen: newVal => {
    set(state => ({
      ...state,
      isLoadingSplashScreen: newVal,
      isLoadingWholePage: newVal,
    }));
  },
}));

export const useMyAppState = createTrackedSelector(zustandAppStore);

// export const useMyAppState = () => {
//   const myAppState = useMyAppTrackedState();

//   const window = useWindowDimensions();
//   console.log('🚀 ~ file: myApp.ts ~ line 31 ~ useMyAppState ~ window', window);

//   return myAppState;
// };
