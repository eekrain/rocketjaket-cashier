import React from 'react';
import {AppNavProps, UserRootNavProps} from '../index';
import UsersHome from '../../../components/Users';
import CreateUser from '../../../components/Users/CreateUser';
import UpdateUser from '../../../components/Users/UpdateUser';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {CompositeScreenProps} from '@react-navigation/native';

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

export type ListUserProps = CompositeScreenProps<
  NativeStackScreenProps<UserRootStackParamList, 'ListUser'>,
  AppNavProps
>;
export type ListUserNavProp = ListUserProps['navigation'];
export type CreateUserProps = CompositeScreenProps<
  NativeStackScreenProps<UserRootStackParamList, 'CreateUser'>,
  AppNavProps
>;
export type UpdateUserProps = CompositeScreenProps<
  NativeStackScreenProps<UserRootStackParamList, 'UpdateUser'>,
  AppNavProps
>;

const UserStack = createNativeStackNavigator<UserRootStackParamList>();

interface IUserScreenProps extends UserRootNavProps {}

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
