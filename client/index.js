/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';

import {AppRegistry, Linking} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {myNotifeeActions, onDisplayNotification} from './src/shared/utils';
import MyNativeBaseProvider from './src/components/MyNativeBaseProvider';
import notifee from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';
import {NhostApolloProvider} from '@nhost/react-apollo';
import {NhostReactProvider} from '@nhost/react';

messaging().setBackgroundMessageHandler(message =>
  onDisplayNotification(message, 'setBackgroundMessageHandler'),
);

notifee.onBackgroundEvent(async event => {
  myNotifeeActions(event, 'background');
});

const Render = () => (
  <MyNativeBaseProvider>
    <NhostReactProvider nhost={nhost}>
      <NhostApolloProvider nhost={nhost}>
        <App />
      </NhostApolloProvider>
    </NhostReactProvider>
  </MyNativeBaseProvider>
);

AppRegistry.registerComponent(appName, () => Render);
