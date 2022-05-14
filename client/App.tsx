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
import {nhost} from './src/shared/utils';
import SplashScreen from './src/components/Overlay/Splashscreen';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation, {AppNavigationParamList} from './src/screens/app';
import AuthNavigation from './src/screens/auth';
import {Alert} from 'react-native';
import {
  checkMultiple,
  requestMultiple,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions';
import Config from 'react-native-config';

const App = () => {
  const authStatus = useAuthenticationStatus();

  const [accessTokenLatest, setAccessTokenLatest] = useState(
    nhost.auth.getAccessToken(),
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

const appPermission = async () => {
  checkMultiple([
    PERMISSIONS.ANDROID.CAMERA,
    PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
  ]).then(checkStatuses => {
    if (checkStatuses[PERMISSIONS.ANDROID.CAMERA] === RESULTS.BLOCKED) {
      Alert.alert(
        'Izin Kamera Terblokir',
        'Izin kamera untuk aplikasi ini telah diblokir. Aktifkan izin kamera untuk menggunakan aplikasi ini!',
      );
    }

    if (
      checkStatuses[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE] ===
        RESULTS.BLOCKED ||
      checkStatuses[PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE] ===
        RESULTS.BLOCKED
    ) {
      Alert.alert(
        'Izin Storage Terblokir',
        'Izin storage untuk aplikasi ini telah diblokir. Aktifkan izin storage untuk menggunakan aplikasi ini!',
      );
    }

    requestMultiple([
      PERMISSIONS.ANDROID.CAMERA,
      PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
    ]).then(_reqStatuses => {
      // console.log('Kamera', _reqStatuses[PERMISSIONS.ANDROID.CAMERA]);
      // console.log(
      //   'Storage write',
      //   _reqStatuses[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE],
      // );
      // console.log(
      //   'Storage read',
      //   _reqStatuses[PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE],
      // );
    });
  });
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
