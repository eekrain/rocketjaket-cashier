/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Box, Pressable} from 'native-base';
import {Animated} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {
  useStore_GetAllStoreQuery,
  useStore_DeleteStoreByPkMutation,
  namedOperations,
} from '../../graphql/gql-generated';
import CustomTable from '../CustomTable';
import {useMemo} from 'react';
import {ButtonEdit, IconButtonDelete} from '../Buttons';
import {StackNavigationProp} from '@react-navigation/stack';
import {TOAST_TEMPLATE} from '../../shared/constants';
import {useMyAppState} from '../../state';
import withAppLayout from '../Layout/AppLayout';
import {
  SettingsHomeNavProps,
  SettingsStackParamList,
} from '../../screens/app/SettingsScreen';
import ListToko from './ListToko';
import WhatsappHome from './WhatsappHome';

const routes = [
  {key: 'first', title: 'List Toko', component: ListToko},
  {key: 'second', title: 'Whatsapp', component: WhatsappHome},
];

interface ITokoHomeProps extends SettingsHomeNavProps {}

const TokoHome = (props: ITokoHomeProps) => {
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
            cursor="pointer"
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
      {<Component {...props} />}
    </Box>
  );
};

export default withAppLayout(TokoHome);
