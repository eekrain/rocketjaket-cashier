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
import MyNativeBaseProvider from './src/components/MyNativeBaseProvider';
import {NhostReactProvider, useAuthenticationStatus} from '@nhost/react';
import {NhostApolloProvider} from '@nhost/react-apollo';
import {appPermission, nhost} from './src/shared/utils';
import SplashScreen from './src/components/Overlay/Splashscreen';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation, {AppNavigationParamList} from './src/screens/app';
import AuthNavigation from './src/screens/auth';
import Config from 'react-native-config';

const App = () => {
  const authStatus = useAuthenticationStatus();

  const [accessTokenLatest, setAccessTokenLatest] = useState(
    nhost.auth.getAccessToken(),
  );
  console.log(
    '🚀 ~ file: App.tsx ~ line 35 ~ App ~ accessTokenLatest',
    accessTokenLatest,
  );

  const [loadingSplashScreen, setLoadingSplashScreen] = useState(true);
  const loading = useMemo(
    () => authStatus.isLoading || loadingSplashScreen,
    [authStatus, loadingSplashScreen],
  );

  useEffect(() => {
    nhost.storage.setAccessToken(accessTokenLatest);
    nhost.storage.setAdminSecret(Config.NHOST_HASURA_ADMIN_SECRET);
  }, [accessTokenLatest]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAccessTokenLatest(nhost.auth.getAccessToken());
    }, 5000);

    const splash = setTimeout(() => {
      setLoadingSplashScreen(false);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(splash);
    };
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer<AppNavigationParamList>>
      {!loading && authStatus.isAuthenticated ? (
        <AppNavigation />
      ) : (
        <AuthNavigation />
      )}
    </NavigationContainer>
  );
};

const Container = () => {
  useEffect(() => {
    appPermission();
  }, []);

  return (
    <MyNativeBaseProvider>
      <NhostReactProvider nhost={nhost}>
        <NhostApolloProvider nhost={nhost}>
          <App />
        </NhostApolloProvider>
      </NhostReactProvider>
    </MyNativeBaseProvider>
  );
};

export default Container;
