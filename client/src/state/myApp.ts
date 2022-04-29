import create from 'zustand';
import {createTrackedSelector} from 'react-tracked';

interface MyAppStore {
  isLoadingWholePage: boolean;
  setLoadingWholePage: (newVal: boolean) => void;
}

const zustandAppStore = create<MyAppStore>(set => ({
  isLoadingWholePage: false,
  setLoadingWholePage: newVal => {
    set(state => ({
      ...state,
      isLoadingWholePage: newVal,
    }));
  },
}));

export const useMyAppState = createTrackedSelector(zustandAppStore);
