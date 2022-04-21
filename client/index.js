/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {myNotifeeActions, onDisplayNotification} from './src/shared/utils';
import notifee from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(message =>
  onDisplayNotification(message, 'setBackgroundMessageHandler'),
);

notifee.onBackgroundEvent(async event => {
  myNotifeeActions(event, 'background');
});

const Render = () => <App />;

AppRegistry.registerComponent(appName, () => Render);
