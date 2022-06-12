import create from 'zustand';
import {createTrackedSelector} from 'react-tracked';
// import {ScaledSize, Dimensions, useWindowDimensions} from 'react-native';
// import {useEffect} from 'react';

interface MyAppStore {
  isLoadingWholePage: boolean;
  // window: ScaledSize;
  // screen: ScaledSize;
  setLoadingWholePage: (newVal: boolean) => void;
}

const zustandAppStore = create<MyAppStore>(set => ({
  isLoadingWholePage: false,
  // window: Dimensions.get('window'),
  // screen: Dimensions.get('screen'),
  setLoadingWholePage: newVal => {
    set(state => ({
      ...state,
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
