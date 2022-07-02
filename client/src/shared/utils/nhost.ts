import {NhostClient, useUserData} from '@nhost/react';
import {User} from '@nhost/core';
import {TUserRoleOptions} from '../../types/user';
import create from 'zustand';
import {persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createTrackedSelector} from 'react-tracked';
import Config from 'react-native-config';
import {useEffect, useMemo} from 'react';
import {useUser_GetUserByIdQuery} from '../../graphql/gql-generated';
import {useMyAppState} from '../../state';

export const nhost = new NhostClient({
  backendUrl: Config.NHOST_BACKEND_URL,
  clientStorage: AsyncStorage,
  clientStorageType: 'react-native',
  // autoLogin: false,
});
interface IGetXHasuraRoleHeader {
  role?: TUserRoleOptions | null;
  withUserId?: boolean;
}

interface IHasuraHeader {
  'x-hasura-role'?: TUserRoleOptions | null;
  'x-hasura-user-id'?: string | null;
}

export const getXHasuraContextHeader = ({
  role = null,
  withUserId = false,
}: IGetXHasuraRoleHeader) => {
  const headers: IHasuraHeader = {};
  if (role) {
    headers['x-hasura-role'] = role;
  }

  if (withUserId) {
    const user = nhost.auth.getUser();
    if (user && user.id) headers['x-hasura-user-id'] = user.id;
  }

  return {context: {headers: headers}};
};

interface IMyUser extends User {
  store_id: number | null;
  disabled: boolean;
}

interface INhostAuthStore {
  user: IMyUser | null;
  update: (user: IMyUser | null) => void;
  updateStoreId: (store_id: IMyUser['store_id']) => void;
}

const useStore = create<INhostAuthStore>()(
  persist(
    set => ({
      user: null as INhostAuthStore['user'],
      update: user => {
        set(state => ({...state, user: user}));
      },
      updateStoreId: store_id => {
        set(state => ({
          ...state,
          user: {...state.user, store_id} as INhostAuthStore['user'],
        }));
      },
    }),
    {name: 'nhost-auth', getStorage: () => AsyncStorage},
  ),
);

export const useMyUserSelector = createTrackedSelector(useStore);

type CustomUserData = IMyUser & INhostAuthStore['user'];

const nullUser: IMyUser = {
  id: '',
  createdAt: '',
  displayName: '',
  avatarUrl: '',
  locale: '',
  email: '',
  isAnonymous: true,
  defaultRole: '',
  roles: [],
  metadata: {},
  emailVerified: false,
  phoneNumber: null,
  phoneNumberVerified: false,
  activeMfaType: null,
  disabled: false,
  store_id: null,
};

interface useMyUser extends CustomUserData {
  isValid: boolean;
  updateStoreId: (store_id: IMyUser['store_id']) => void;
}

export const useMyUser = (): useMyUser => {
  const user = useUserData();
  const myUserData = useMyUserSelector();
  const myApp = useMyAppState();
  // console.log('🚀 ~ file: nhost.ts ~ line 109 ~ useMyUser ~ user.id', user?.id);

  const getUserById = useUser_GetUserByIdQuery({
    variables: {user_id: user?.id || ''},
    ...getXHasuraContextHeader({role: 'me', withUserId: true}),
  });

  useEffect(() => {
    myApp.setLoadingSplashScreen(getUserById.loading);
  }, [getUserById.loading]);

  const userFromRemote = useMemo(() => {
    const remote = getUserById.data?.user;

    const temp: Partial<IMyUser> = {
      avatarUrl: remote?.avatarUrl
        ? nhost.storage.getPublicUrl({fileId: remote?.avatarUrl})
        : '',
      defaultRole: remote?.defaultRole,
      displayName: remote?.displayName,
      email: remote?.newEmail ? remote?.newEmail : remote?.email,
      emailVerified: remote?.emailVerified,
      disabled: remote?.disabled || false,
      store_id: remote?.users_metadata?.[0].store_id,
      roles: remote?.roles.map(x => x.role),
    };
    return temp;
  }, [getUserById.data?.user]);
  // console.log(
  //   '🚀 ~ file: nhost.ts ~ line 134 ~ userFromRemote ~ myUserData.user?.store_id',
  //   myUserData.user?.store_id,
  // );

  useEffect(() => {
    if (user) {
      // console.log('effect user');
      const update: IMyUser = {
        ...user,
        avatarUrl: userFromRemote?.avatarUrl || user.avatarUrl,
        defaultRole: userFromRemote?.defaultRole || user.defaultRole,
        displayName: userFromRemote?.displayName || user.displayName,
        email: userFromRemote?.email,
        emailVerified: userFromRemote?.emailVerified || user.emailVerified,
        disabled: userFromRemote?.disabled || false,
        store_id: userFromRemote.store_id || null,
        roles: userFromRemote.roles || user.roles,
      };
      myUserData.update(update);
    } else {
      myUserData.update(null);
    }
  }, [userFromRemote, user]);

  if (myUserData.user)
    return {
      ...user,
      ...myUserData.user,
      defaultRole: myUserData.user?.defaultRole || 'karyawan',
      isValid: true,
      updateStoreId: myUserData.updateStoreId,
    };
  else
    return {
      ...nullUser,
      isValid: false,
      defaultRole: 'karyawan',
      updateStoreId: myUserData.updateStoreId,
    };
};

interface MyNhostStorageParamas {
  delete: {
    fileId: string;
    // asAdmin?: boolean;
    withUserId?: boolean;
  };
}
