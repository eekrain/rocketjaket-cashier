import React, {PropsWithChildren} from 'react';
import {extendTheme, NativeBaseProvider} from 'native-base';

interface Props {}
const MyNativeBaseProvider = ({children}: PropsWithChildren<Props>) => {
  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        '50': '#f3f5f7',
        '100': '#e7ecef',
        '200': '#c2cfd8',
        '300': '#9eb3c1',
        '400': '#557992',
        '500': '#0c4063',
        '600': '#0b3a59',
        '700': '#09304a',
        '800': '#07263b',
        '900': '#061f31',
      },
      big_stone: {
        '50': '#f2f4f5',
        '100': '#e6eaec',
        '200': '#c0c9cf',
        '300': '#9aa9b3',
        '400': '#4e6979',
        '500': '#022840',
        '600': '#02243a',
        '700': '#021e30',
        '800': '#011826',
        '900': '#01141f',
      },
      milano_red: {
        50: '#fbf3f3',
        100: '#f8e6e6',
        200: '#edc1c1',
        300: '#e29b9b',
        400: '#cd5151',
        500: '#b70606',
        600: '#a50505',
        700: '#890505',
        800: '#6e0404',
        900: '#5a0303',
      },
      scarlet: {
        '50': '#fef3f3',
        '100': '#fee7e7',
        '200': '#fbc3c3',
        '300': '#f99f9f',
        '400': '#f55757',
        '500': '#f00f0f',
        '600': '#d80e0e',
        '700': '#b40b0b',
        '800': '#900909',
        '900': '#760707',
      },
      // Redefinig only one shade, rest of the color will remain same.
      amber: {
        400: '#d97706',
      },
    },
  });

  return <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>;
};

export default MyNativeBaseProvider;
