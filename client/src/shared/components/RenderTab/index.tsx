import React from 'react';
import {Box, Pressable} from 'native-base';
import Animated from 'react-native-reanimated';

export interface IRouteTab {
  key: string;
  title: string;
  component: React.ComponentType<any>;
}

interface IRenderTabProps {
  routes: IRouteTab[];
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}

export const RenderTab = ({
  routes,
  activeTab,
  setActiveTab,
}: IRenderTabProps) => {
  return (
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
};
