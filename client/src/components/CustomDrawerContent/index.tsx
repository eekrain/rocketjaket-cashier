import React, {useCallback, useMemo} from 'react';
import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {
  Box,
  Pressable,
  VStack,
  Text,
  HStack,
  Divider,
  Icon,
  Image,
} from 'native-base';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {rootAppRoutes, getAppIcon, IAppRoutes} from '../../screens/app';
import {useMyUser} from '../../shared/utils';

interface Props extends DrawerContentComponentProps {}

const CustomDrawerContent = (props: Props) => {
  const myUser = useMyUser();

  const routeItem = useCallback(
    (route: IAppRoutes, index: number) => {
      return (
        <Pressable
          key={`${route.name}${route.routeNiceName}`}
          px="5"
          py="5"
          rounded="md"
          bg={
            index === props.state.index
              ? 'rgba(236, 171, 73, 0.2)'
              : 'transparent'
          }
          onPress={_event => {
            props.navigation.navigate(route.name);
          }}>
          <HStack space="7" alignItems="center">
            <Icon
              color={
                index === props.state.index ? 'milano_red.500' : 'gray.500'
              }
              size="5"
              as={<FeatherIcon name={getAppIcon(route.name) as string} />}
            />
            <Text
              fontWeight="500"
              color={
                index === props.state.index ? 'milano_red.500' : 'gray.700'
              }>
              {route.routeNiceName}
            </Text>
          </HStack>
        </Pressable>
      );
    },
    [props.navigation, props.state.index],
  );

  const routes = useMemo(() => {
    return rootAppRoutes.map((route, index) => {
      const temp1 = route.role.some(r => myUser.roles.includes(r))
        ? routeItem(route, index)
        : null;
      const temp2 = !route.isHideOnDrawer ? temp1 : null;
      return temp2;
    });
  }, [myUser.roles, routeItem]);

  return (
    <DrawerContentScrollView {...props}>
      <VStack space="6" my="2" mx="1">
        <Box px="4">
          <Image
            source={require('../../assets/images/logo.png')}
            alt="Logo Rocketjaket"
            h="12"
            resizeMode="contain"
          />
        </Box>
        <VStack divider={<Divider />} space="4">
          <VStack space="3">{routes}</VStack>
        </VStack>
      </VStack>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
