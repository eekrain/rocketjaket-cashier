import React from 'react';
import {View, Text} from 'native-base';
import {DashboardRootNavProps} from '../index';
import withAppLayout from '../../../components/Layout/AppLayout';

interface IDashboardScreenProps extends DashboardRootNavProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DashboardScreen = (props: IDashboardScreenProps) => {
  return (
    <View>
      <Text>HAHAHAh</Text>
    </View>
  );
};

export default withAppLayout(DashboardScreen);
