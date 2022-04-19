/* eslint-disable @typescript-eslint/no-unused-vars */
import notifee, {Event, EventType} from '@notifee/react-native';
import {FirebaseMessagingTypes} from '@react-native-firebase/messaging';
import {NavigationContainerRefWithCurrent} from '@react-navigation/native';
import {AppNavigationParamList} from '../../screens/app';

export const myNotifeeActions = (
  event: Event,
  type: 'foreground' | 'background',
  navigation?: NavigationContainerRefWithCurrent<AppNavigationParamList>,
) => {
  console.log('🚀 ~ file: myNotifeeActions.ts ~ line 11 ~ type', type);
  if (event.type === EventType.ACTION_PRESS) {
    console.log(
      '🚀 ~ file: index.tsx ~ line 207 ~ returnnotifee.onForegroundEvent ~ notifee pressed',
      event.detail.notification?.title,
    );

    if (event.detail.pressAction?.id === 'mark-as-read') {
      console.log(
        '🚀 ~ file: index.tsx ~ line 207 ~ returnnotifee.onForegroundEvent ~ notifee Tandai dibaca',
        event.detail.notification?.title,
      );
      if (event.detail.notification?.id) {
        notifee.cancelNotification(event.detail.notification?.id);
      }
    }
  }
};

export const onDisplayNotification = async (
  remoteMessage: FirebaseMessagingTypes.RemoteMessage,
  from: string,
) => {
  console.log(
    '🚀 ~ file: index.tsx ~ line 213 ~ useEffect ~ notificationFrom =>',
    from,
  );
  if (remoteMessage?.data?.notifee) {
    console.log(
      '🚀 ~ file: App.tsx ~ line 82 ~ useEffect ~ remoteMessage',
      JSON.parse(remoteMessage?.data?.notifee),
    );
  }
  await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  if (remoteMessage?.data?.notifee) {
    await notifee.displayNotification(JSON.parse(remoteMessage?.data?.notifee));
  }
};
