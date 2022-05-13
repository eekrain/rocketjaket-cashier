/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Box, Pressable} from 'native-base';
import {Animated} from 'react-native';
import {useMemo} from 'react';
import withAppLayout from '../Layout/AppLayout';
import {SettingsScreenProps} from '../../screens/app/SettingsScreen';
import ListToko from './ListToko';
import WhatsappHome from './WhatsappHome';

const routes = [
  {key: 'first', title: 'List Toko', component: ListToko},
  {key: 'second', title: 'Whatsapp', component: WhatsappHome},
];

interface ITokoHomeProps {}

const TokoHome = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const Component: React.ComponentType<any> = useMemo(() => {
    return routes[activeTab].component;
  }, [activeTab]);

  const renderTab = () => (
    <Box flexDirection="row" mb="6">
      {routes.map((route, i) => {
        const color = activeTab === i ? '#1f2937' : '#a1a1aa';
        const borderColor = activeTab === i ? 'scarlet.400' : 'coolGray.200';

        return (
          <Pressable
            key={route.key}
            borderBottomWidth="3"
            borderColor={borderColor}
            flex={1}
            alignItems="center"
            p="3"
            onPress={() => {
              console.log(i);
              setActiveTab(i);
            }}>
            <Animated.Text style={{color}}>{route.title}</Animated.Text>
          </Pressable>
        );
      })}
    </Box>
  );

  return (
    <Box>
      {renderTab()}
      {<Component />}
    </Box>
  );
};

export default withAppLayout(TokoHome);
