/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  Button,
  HamburgerIcon,
  Pressable,
  Heading,
  HStack,
  Popover,
  Text,
  VStack,
  Icon,
  Badge,
  useContrastText,
} from 'native-base';
import {useMyUser, getXHasuraContextHeader} from '../../shared/utils';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useState} from 'react';
import {allAppRoutes, AppNavigationParamList} from '../../screens/app';
import {MyAvatar} from '../../shared/components';
import {useSignOut, useAuthenticationStatus} from '@nhost/react';
import {useNavigation} from '@react-navigation/native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {useMyNotification} from '../../state';
import {useNotification_DeleteFcmTokenMutation} from '../../graphql/gql-generated';
import messaging from '@react-native-firebase/messaging';
import to from 'await-to-js';

export const customHeaderHeight: number = 70;

const getRouteNiceName = (routeName: string) => {
  const niceName = allAppRoutes.find(
    route => route.name === routeName,
  )?.routeNiceName;

  return niceName ? niceName : '';
};

interface ICustomHeaderProps {}

const CustomHeader = ({}: ICustomHeaderProps) => {
  const navigation =
    useNavigation<
      DrawerScreenProps<AppNavigationParamList, any>['navigation']
    >();
  const route =
    useNavigation<DrawerScreenProps<AppNavigationParamList, any>['route']>();
  const authStatus = useAuthenticationStatus();
  const myUser = useMyUser();
  // console.log('🚀 ~ file: index.tsx ~ line 49 ~ CustomHeader ~ myUser', myUser);
  const {signOut, isSuccess: _isSignoutSuccess} = useSignOut();
  const bgLight = 'white';
  const colorContrastLight = useContrastText(bgLight);

  const [isNotifPressed, setNotifPressed] = useState(false);
  const [isAvatarPressed, setAvatarPressed] = useState(false);

  const myNotif = useMyNotification();

  const [deleteFcmToken] = useNotification_DeleteFcmTokenMutation({
    ...getXHasuraContextHeader({role: 'me'}),
  });

  const handleLogout = async () => {
    const fcm_token = await messaging().getToken();
    const [err, res] = await to(deleteFcmToken({variables: {fcm_token}}));
    if (err || !res) {
      console.log('🚀 ~ file: index.tsx ~ line 72 ~ handleLogout ~ err', err);
    }
    await signOut();
  };

  return (
    <HStack
      bgColor="milano_red.500"
      alignItems="center"
      justifyContent="space-between"
      px="4"
      height={customHeaderHeight}>
      <HStack space="6">
        <Pressable onPress={() => navigation.toggleDrawer()}>
          <HamburgerIcon size="sm" color="white" />
        </Pressable>
        <Heading size="md" color="white">
          {getRouteNiceName(route.name)}
        </Heading>
      </HStack>
      <HStack space="6" alignItems="center">
        <Pressable
          onPressIn={() => setNotifPressed(true)}
          onPressOut={() => {
            setNotifPressed(false);
            navigation.navigate('Notification');
          }}>
          <VStack>
            {myNotif.total_unread > 0 && (
              <Badge
                bgColor={isNotifPressed ? 'orange.300' : 'orange.500'}
                rounded="full"
                mb="-10px"
                mr={-2}
                zIndex={1}
                variant="solid"
                alignSelf="flex-end"
                _text={{
                  fontSize: 10,
                }}>
                {myNotif.total_unread}
              </Badge>
            )}
            <Icon as={FeatherIcon} name="bell" size="lg" color="white" />
          </VStack>
        </Pressable>
        <Popover
          trigger={triggerProps => (
            <Pressable
              onPressIn={() => setAvatarPressed(true)}
              onPressOut={() => setAvatarPressed(false)}
              {...triggerProps}>
              <MyAvatar
                source={{
                  fileUrl: myUser.avatarUrl,
                  w: 150,
                  q: 60,
                }}
                fallbackText={myUser.displayName || ''}
                size={50}
                bgColor={isAvatarPressed ? 'gray.200' : 'white'}
                textColor={
                  isAvatarPressed ? 'milano_red.500' : 'milano_red.600'
                }
                isDisableZoom={true}
              />
            </Pressable>
          )}>
          <Popover.Content accessibilityLabel="User settings" bgColor="white">
            <Popover.Header>
              <Text>Hai, {myUser.displayName}!</Text>
            </Popover.Header>
            <Popover.Body>
              <VStack space="3">
                <Button
                  onPress={() => {
                    navigation.navigate('Profile');
                  }}
                  justifyContent="flex-start"
                  bg={bgLight}
                  _text={{color: colorContrastLight}}
                  variant="ghost"
                  startIcon={
                    <Icon as={FeatherIcon} name="user" size="sm" mr="3" />
                  }>
                  Profile
                </Button>
                <Button
                  isLoading={authStatus.isLoading}
                  onPress={handleLogout}
                  justifyContent="flex-start"
                  variant="ghost"
                  colorScheme="milano_red"
                  startIcon={
                    <Icon as={FeatherIcon} name="log-out" size="sm" mr="3" />
                  }>
                  Logout
                </Button>
              </VStack>
            </Popover.Body>
          </Popover.Content>
        </Popover>
      </HStack>
    </HStack>
  );
};
export default CustomHeader;
