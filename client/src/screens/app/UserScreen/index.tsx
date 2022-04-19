import React from 'react';
import {AppNavProps, UserRootNavProps} from '../index';
import UsersHome from '../../../components/Users';
import CreateUser from '../../../components/Users/CreateUser';
import UpdateUser from '../../../components/Users/UpdateUser';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
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

export type ListUserNavProps = CompositeScreenProps<
  StackScreenProps<UserRootStackParamList, 'ListUser'>,
  AppNavProps
>;
export type CreateUserNavProps = CompositeScreenProps<
  StackScreenProps<UserRootStackParamList, 'CreateUser'>,
  AppNavProps
>;
export type UpdateUserNavProps = CompositeScreenProps<
  StackScreenProps<UserRootStackParamList, 'UpdateUser'>,
  AppNavProps
>;

const UserStack = createStackNavigator<UserRootStackParamList>();

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
