/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';

import {AppRegistry, Linking} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {
  myNotifeeActions,
  NhostCustomProvider,
  onDisplayNotification,
} from './src/shared/utils';
import MyNativeBaseProvider from './src/components/MyNativeBaseProvider';
import notifee from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(message =>
  onDisplayNotification(message, 'setBackgroundMessageHandler'),
);

notifee.onBackgroundEvent(async event => {
  myNotifeeActions(event, 'background');
});

const Render = () => (
  <MyNativeBaseProvider>
    <NhostCustomProvider>
      <App />
    </NhostCustomProvider>
  </MyNativeBaseProvider>
);

AppRegistry.registerComponent(appName, () => Render);
