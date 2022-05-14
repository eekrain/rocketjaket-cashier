import React from 'react';
import {View, Text, Button} from 'native-base';
import withAppLayout from '../../../components/Layout/AppLayout';
import {nhost} from '../../../shared/utils';

interface IDashboardScreenProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DashboardScreen = ({}: IDashboardScreenProps) => {
  return (
    <View>
      <Button
        onPress={() => {
          console.log(nhost.auth.getAccessToken());
        }}>
        Test
      </Button>
      <Text>HAHAHAh</Text>
    </View>
  );
};

export default withAppLayout(DashboardScreen);
