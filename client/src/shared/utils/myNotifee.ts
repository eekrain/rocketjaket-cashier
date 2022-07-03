/* eslint-disable @typescript-eslint/no-unused-vars */
import notifee, {Event, EventType} from '@notifee/react-native';
import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';
import {
  NavigationContainerRefWithCurrent,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {useEffect} from 'react';
import {useNotification_InsertFcmTokenMutation} from '../../graphql/gql-generated';
import {AppNavigationParamList} from '../../screens/app';
import {getXHasuraContextHeader, nhost} from './nhost';
import to from 'await-to-js';
import {NotificationAPI} from '../api';

const myNotifeeActions = (
  event: Event,
  type: 'foreground' | 'background',
  navigation?: NavigationContainerRefWithCurrent<AppNavigationParamList>,
) => {
  console.log('🚀 ~ file: myNotifee.ts ~ line 22 ~ event', event);
  console.log('🚀 ~ file: myNotifeeActions.ts ~ line 11 ~ type', type);
  if (event.type === EventType.ACTION_PRESS) {
    if (event.detail.pressAction?.id === 'mark-as-read') {
      console.log(
        '🚀 ~ file: index.tsx ~ line 207 ~ returnnotifee.onForegroundEvent ~ notifee Tandai dibaca',
        event.detail.notification?.title,
      );

      // If notification_id is exist, then proceed to delete the notification with axios via graphql
      if (event.detail.notification?.data?.notification_id) {
        console.log(
          '🚀 ~ file: myNotifee.ts ~ line 35 ~ event.detail.notification?.data?.notification_id',
          event.detail.notification?.data?.notification_id,
        );

        const notifApi = new NotificationAPI(nhost.auth.getAccessToken() || '');
        notifApi.markAsReadOne(
          parseInt(event.detail.notification.data.notification_id, 10),
          nhost.auth.getUser()?.id || '',
        );
      }

      // Canceling the notification on phone
      if (event.detail.notification?.id) {
        notifee.cancelNotification(event.detail.notification?.id);
      }
    }
  }
};

const onDisplayNotification = async (
  remoteMessage: FirebaseMessagingTypes.RemoteMessage,
  from: string,
) => {
  console.log(
    `🚀 ~ file: myNotifee.ts ~ line 57 ~ onDisplayNotification
    \n${JSON.stringify(remoteMessage)}
    \nfrom : ${from}`,
  );

  if (remoteMessage?.data?.notifee) {
    await notifee.displayNotification(JSON.parse(remoteMessage?.data?.notifee));
  }
};

export const setBackgroundNotifeeTask = () => {
  const createChannel = async () => {
    await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });
  };

  messaging().setBackgroundMessageHandler((message: any) =>
    onDisplayNotification(message, 'setBackgroundMessageHandler'),
  );

  notifee.onBackgroundEvent(async event => {
    myNotifeeActions(event, 'background');
  });

  createChannel();
};

export const useMyNotifee = () => {
  const navigation = useNavigationContainerRef<AppNavigationParamList>();
  const [insertFcmToken] = useNotification_InsertFcmTokenMutation({
    ...getXHasuraContextHeader({role: 'me'}),
  });

  useEffect(() => {
    const registerFcm = async () => {
      const fcm_token = await messaging().getToken();
      // console.log(
      //   '🚀 ~ file: myNotifee.ts ~ line 83 ~ registerFcm ~ fcm_token',
      //   fcm_token,
      // );
      const [err, res] = await to(
        insertFcmToken({
          variables: {
            object: {
              fcm_token,
            },
          },
        }),
      );
      if (err || !res) {
        console.log(
          '🚀 ~ file: myNotifee.ts ~ line 118 ~ registerFcm ~ err',
          err,
        );
      }
    };
    registerFcm();

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
};
