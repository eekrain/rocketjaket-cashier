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
  IconButton,
  Badge,
  useContrastText,
} from 'native-base';
import {
  useMyUser,
  // getXHasuraContextHeader,
  getStorageFileUrlWImageTransform,
} from '../../shared/utils';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useState} from 'react';
import {allAppRoutes, AppNavigationParamList} from '../../screens/app';
import {MyAvatar} from '../../shared/components';
// import {useUser_DeleteFcmTokenByUserIdMutation} from '../../graphql/gql-generated';
import {useSignOut, useAuthenticationStatus} from '@nhost/react';
import {useNavigation} from '@react-navigation/native';
import {DrawerScreenProps} from '@react-navigation/drawer';

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
  const {signOut, isSuccess: isSignoutSuccess} = useSignOut();
  const bgLight = 'white';
  const colorContrastLight = useContrastText(bgLight);

  const [isNotifPressed, setNotifPressed] = useState(false);
  const [isAvatarPressed, setAvatarPressed] = useState(false);

  // const [deleteFcmToken] = useUser_DeleteFcmTokenByUserIdMutation({
  //   ...getXHasuraContextHeader({role: 'me', withUserId: true}),
  // });

  const handleLogout = () => {
    signOut();
    // nhostAuth.setLoading(true);
    // nhostAuth
    //   .signOut(async () => {
    //     const resDelete = await deleteFcmToken({
    //       variables: {
    //         user_id: nhostAuth.user.userId,
    //         fcm_token: nhostAuth.fcmToken,
    //       },
    //     }).catch(error => {
    //       console.error(
    //         '🚀 ~ file: index.tsx ~ line 65 ~ .signOut ~ error',
    //         error,
    //       );
    //     });
    //     console.log(
    //       '🚀 ~ file: index.tsx ~ line 65 ~ .signOut ~ resDelete',
    //       resDelete,
    //     );
    //   })
    //   .finally(() => nhostAuth.setLoading(false));
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
      <HStack space="4" alignItems="center">
        <VStack>
          <Badge
            bgColor={isNotifPressed ? 'orange.300' : 'orange.500'}
            rounded="full"
            mb={-6}
            mr={0}
            zIndex={1}
            variant="solid"
            alignSelf="flex-end"
            _text={{
              fontSize: 12,
            }}>
            2
          </Badge>
          <IconButton
            variant="ghost"
            mx={{
              base: 'auto',
              md: 0,
            }}
            rounded="full"
            p="2"
            _icon={{as: FeatherIcon, name: 'bell', color: 'white'}}
            onPressIn={() => setNotifPressed(true)}
            onPressOut={() => setNotifPressed(false)}
          />
        </VStack>
        <Popover
          trigger={triggerProps => (
            <Pressable
              onPressIn={() => setAvatarPressed(true)}
              onPressOut={() => setAvatarPressed(false)}
              {...triggerProps}>
              <MyAvatar
                source={{
                  uri: getStorageFileUrlWImageTransform({
                    fileUrl: myUser.avatarUrl,
                    w: 150,
                    q: 60,
                  }),
                }}
                fallbackText={myUser.displayName || ''}
                size={50}
                bgColor={isAvatarPressed ? 'gray.200' : 'white'}
                textColor={
                  isAvatarPressed ? 'milano_red.500' : 'milano_red.600'
                }
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
