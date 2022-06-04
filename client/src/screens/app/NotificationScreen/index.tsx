import React from 'react';
import {
  Text,
  Button,
  Box,
  Heading,
  FlatList,
  HStack,
  VStack,
  Pressable,
} from 'native-base';
import withAppLayout from '../../../components/Layout/AppLayout';
import {useMyNotification} from '../../../state';
import {useMyUser} from '../../../shared/utils';
import {UserRolesEnum} from '../../../types/user';

interface INotificationScreenProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NotificationScreen = ({}: INotificationScreenProps) => {
  const myNotif = useMyNotification();
  const myUser = useMyUser();
  return (
    <Box>
      <HStack mb="6" justifyContent="space-between" alignItems="center">
        <Heading fontSize="xl">Notifikasi</Heading>
        <HStack space="4">
          <Button
            onPress={() => {
              myNotif.handleMarkAllNotifAsRead();
            }}>
            Tandai Semuanya Terbaca
          </Button>
          {myUser.roles.includes(UserRolesEnum.administrator) && (
            <Button
              colorScheme="red"
              onPress={() => {
                myNotif.handleDeleteReadNotifications();
              }}>
              Hapus Terbaca
            </Button>
          )}
        </HStack>
      </HStack>
      <FlatList
        maxHeight="86%"
        data={myNotif.notifications}
        renderItem={({item, index}) => (
          <Pressable
            onPress={() => {
              myNotif.handleMarkAsRead([item.id]);
            }}>
            <Box
              borderBottomWidth={
                index !== myNotif.notifications.length - 1 ? 1 : 0
              }
              bgColor={item.is_read ? undefined : 'amber.200'}
              _dark={{
                borderColor: 'gray.600',
              }}
              borderColor="coolGray.200"
              py="2">
              <HStack space={3} justifyContent="space-between">
                <VStack>
                  <Text
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    color="coolGray.800"
                    bold>
                    {item.title}
                  </Text>
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: 'warmGray.200',
                    }}>
                    {item.body}
                  </Text>
                </VStack>

                <Text
                  fontSize="xs"
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  color="coolGray.800"
                  alignSelf="flex-start"
                  textAlign="right">
                  {item.created_at}
                </Text>
              </HStack>
            </Box>
          </Pressable>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </Box>
  );
};

export default withAppLayout(NotificationScreen);
