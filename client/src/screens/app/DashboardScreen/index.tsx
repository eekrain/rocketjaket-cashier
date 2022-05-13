import React from 'react';
import {View, Text} from 'native-base';
import withAppLayout from '../../../components/Layout/AppLayout';

interface IDashboardScreenProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DashboardScreen = ({}: IDashboardScreenProps) => {
  return (
    <View>
      <Text>HAHAHAh</Text>
    </View>
  );
};

export default withAppLayout(DashboardScreen);
