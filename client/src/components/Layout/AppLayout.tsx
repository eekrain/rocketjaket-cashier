import React from 'react';
import {AppNavProps} from '../../screens/app';
import CustomHeader from '../CustomHeader';
import {Box} from 'native-base';
import {useMyAppState} from '../../state';
import LoadingOverlay from '../Overlay/LoadingOverlay';

const withAppLayout = (Component: any) => {
  return (props: AppNavProps) => {
    const appState = useMyAppState();
    return (
      <>
        <LoadingOverlay
          size="xl"
          borderRadius={false}
          visible={appState.isLoadingWholePage}
        />
        <CustomHeader {...props} />
        <Box p={4}>
          <Component {...props} />
        </Box>
      </>
    );
  };
};
export default withAppLayout;
