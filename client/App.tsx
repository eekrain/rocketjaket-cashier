/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useMemo, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from 'native-base';
import MyNativeBaseProvider from './src/components/MyNativeBaseProvider';
import {NhostReactProvider, useAuthenticationStatus} from '@nhost/react';
import {NhostApolloProvider} from '@nhost/react-apollo';
import {nhost} from './src/shared/utils';
import SplashScreen from './src/components/Overlay/Splashscreen';

const App = () => {
  const authStatus = useAuthenticationStatus();

  const [loadingSplashScreen, setLoadingSplashScreen] = useState(true);
  const loading = useMemo(
    () => authStatus.isLoading || loadingSplashScreen,
    [authStatus, loadingSplashScreen],
  );

  useEffect(() => {
    const splash = setTimeout(() => {
      setLoadingSplashScreen(false);
    }, 1000);

    return () => {
      clearTimeout(splash);
    };
  });
  if (loading) {
    return <SplashScreen />;
  }

  return (
    <MyNativeBaseProvider>
      <NhostReactProvider nhost={nhost}>
        <NhostApolloProvider nhost={nhost}>
          <SafeAreaView>
            <Text>ANjing</Text>
          </SafeAreaView>
        </NhostApolloProvider>
      </NhostReactProvider>
    </MyNativeBaseProvider>
  );
};

export default App;
