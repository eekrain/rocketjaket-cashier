import {Box} from 'native-base';
import React, {useState} from 'react';
import {ListAbsensiAll} from '../../../components/Absensi/ListAbsensiAll';
import {ListAbsensiByUser} from '../../../components/Absensi/ListAbsensiByUser';
import withAppLayout from '../../../components/Layout/AppLayout';
import {IRouteTab, RenderTab} from '../../../shared/components';

const routes: IRouteTab[] = [
  {key: 'first', title: 'List Absensi Per User', component: ListAbsensiByUser},
  {key: 'second', title: 'List Absensi Semua', component: ListAbsensiAll},
];

interface IAbsensiScreenProps {}
const AbsensiScreen = (props: IAbsensiScreenProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const Component: React.ComponentType<any> = routes[activeTab].component;

  return (
    <Box>
      <RenderTab
        routes={routes}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Component {...props} />
    </Box>
  );
};

export default withAppLayout(AbsensiScreen);
