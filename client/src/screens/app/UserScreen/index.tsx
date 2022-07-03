import React from 'react';
import UsersHome from '../../../components/Users';
import CreateUser from '../../../components/Users/CreateUser';
import UpdateUser from '../../../components/Users/UpdateUser';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type UserRootStackParamList = {
  ListUser: undefined;
  CreateUser: undefined;
  UpdateUser: {userId: string};
};

type IUserRoutes = {
  name: keyof UserRootStackParamList;
  component: React.ComponentType<any>;
  routeNiceName: string;
};

export const rootUserRoutes: IUserRoutes[] = [
  {name: 'ListUser', component: UsersHome, routeNiceName: 'Pengguna'},
  {name: 'CreateUser', component: CreateUser, routeNiceName: 'Pengguna'},
  {name: 'UpdateUser', component: UpdateUser, routeNiceName: 'Pengguna'},
];

export type UserScreenProps = {
  [Properties in keyof UserRootStackParamList]: NativeStackScreenProps<
    UserRootStackParamList,
    keyof UserRootStackParamList
  >;
};

const UserStack = createNativeStackNavigator<UserRootStackParamList>();

interface IUserScreenProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const UserScreen = (props: IUserScreenProps) => {
  return (
    <UserStack.Navigator screenOptions={{headerShown: false}}>
      {rootUserRoutes.map(route => (
        <UserStack.Screen
          key={`${route.name}${route.routeNiceName}`}
          name={route.name}
          component={route.component}
        />
      ))}
    </UserStack.Navigator>
  );
};

export default UserScreen;
