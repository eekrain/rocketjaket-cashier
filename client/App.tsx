/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {useUserId, useAuthenticationStatus} from '@nhost/react';
import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './src/screens/auth';
import AppNavigation, {AppNavigationParamList} from './src/screens/app';
import {Alert, Linking} from 'react-native';
import {useMemo} from 'react';
import {
  checkMultiple,
  requestMultiple,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions';
import SplashScreen from './src/components/Overlay/Splashscreen';

import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';
import notifee, {EventType} from '@notifee/react-native';
import {
  useUser_CreateOneUserFcmTokenMutation,
  useUser_GetAllUserFcmTokensByIdQuery,
} from './src/graphql/gql-generated';
import {
  getXHasuraContextHeader,
  myNotifeeActions,
  onDisplayNotification,
  useMyUser,
} from './src/shared/utils';
import {useNavigationContainerRef} from '@react-navigation/native';

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

const linking: LinkingOptions<AppNavigationParamList> = {
  prefixes: ['myapp://'],
  config: {
    initialRouteName: 'Dashboard',
    screens: {
      InventoryRoot: 'inventory',
    },
  },
  async getInitialURL() {
    // First, you may want to do the default deep link handling
    // Check if app was opened from a deep link
    const url = await Linking.getInitialURL();

    if (url != null) {
      return url;
    }

    // Next, you would need to get the initial URL from your third-party integration
    // It depends on the third-party SDK you use
    // For example, to get to get the initial URL for branch.io:
    const notif = await notifee.getInitialNotification();
    console.log('🚀 ~ file: App.tsx ~ line 109 ~ getInitialURL ~ notif', notif);

    return notif?.notification?.data?.link;
  },
  subscribe(listener) {
    const onReceiveURL = ({url}: {url: string}) => listener(url);
    // Listen to incoming links from deep linking
    Linking.addEventListener('url', onReceiveURL);
    // Listen to firebase push notifications
    const unsubscribeNotification = notifee.onForegroundEvent(
      async notifeeEvent => {
        if (notifeeEvent.type === EventType.PRESS) {
          if (notifeeEvent.detail.notification?.data?.link) {
            listener(notifeeEvent.detail.notification?.data?.link);
          }
          if (notifeeEvent.detail.notification?.id) {
            notifee.cancelNotification(notifeeEvent.detail.notification?.id);
          }
        }
      },
    );

    notifee.onBackgroundEvent(async notifeeEvent => {
      if (notifeeEvent.type === EventType.PRESS) {
        if (notifeeEvent.detail.notification?.data?.link) {
          listener(notifeeEvent.detail.notification?.data?.link);
        }
        if (notifeeEvent.detail.notification?.id) {
          notifee.cancelNotification(notifeeEvent.detail.notification?.id);
        }
      }
    });

    return () => {
      // Clean up the event listeners
      Linking.removeAllListeners('url');
      unsubscribeNotification();
    };
  },
};

const App = () => {
  useEffect(() => {
    appPermission();
  }, []);

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
    <NavigationContainer<AppNavigationParamList> linking={linking}>
      {!loading && authStatus.isAuthenticated ? (
        <>
          <MyNotifee />
          <AppNavigation />
        </>
      ) : (
        <AuthNavigation />
      )}
    </NavigationContainer>
  );
};
export default App;

interface MyNotifeeProps {}

const MyNotifee = ({}: MyNotifeeProps) => {
  const navigation = useNavigationContainerRef<AppNavigationParamList>();
  const myUser = useMyUser();

  const [bootstrapFcmDone, setBootstrapFcmDone] = useState(false);

  const getAllFcmUser = useUser_GetAllUserFcmTokensByIdQuery({
    variables: {
      user_id: myUser.id,
    },
    ...getXHasuraContextHeader({role: 'me', withUserId: true}),
  });

  const [createFcmToken] = useUser_CreateOneUserFcmTokenMutation({
    ...getXHasuraContextHeader({role: 'me', withUserId: true}),
  });

  useEffect(() => {
    const allFcmUser = getAllFcmUser.data?.users_fcm_token;
    const registerFcm = async () => {
      const token = await messaging().getToken();
      myUser.updateFcmToken(token);

      const found = allFcmUser?.find(fcm => fcm.fcm_token === token);
      console.log('🚀 ~ file: App.tsx ~ line 205 ~ registerFcm ~ found', found);
      if (!found) {
        const res = await createFcmToken({
          variables: {
            insert_users_fcm_token: {
              fcm_token: token,
              user_id: myUser.id,
            },
          },
        });
        console.log('🚀 ~ file: index.tsx ~ line 161 ~ registerFcm ~ res', res);
      }
    };

    if (!bootstrapFcmDone && allFcmUser && myUser.id) {
      registerFcm();
      setBootstrapFcmDone(true);
    }
  }, [
    bootstrapFcmDone,
    createFcmToken,
    getAllFcmUser.data?.users_fcm_token,
    myUser,
  ]);

  useEffect(() => {
    messaging().registerDeviceForRemoteMessages();
    const unsubscribe = messaging().onMessage(message =>
      onDisplayNotification(message, 'onMessage'),
    );

    return unsubscribe;
  }, []);

  useEffect(() => {
    return notifee.onForegroundEvent(notifeeEvent => {
      myNotifeeActions(notifeeEvent, 'foreground', navigation);
    });
  }, [navigation]);

  return null;
};
