import {NhostClient, useUserData} from '@nhost/react';
import {User} from '@nhost/core';
import {TUserRoleOptions} from '../../types/user';
import create from 'zustand';
import {persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createTrackedSelector} from 'react-tracked';
import Config from 'react-native-config';
import {useMemo} from 'react';

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
  'x-hasura-role': TUserRoleOptions | null;
  'x-hasura-user-id': string | null;
}

export const getXHasuraContextHeader = ({
  role = null,
  withUserId = false,
}: IGetXHasuraRoleHeader) => {
  const headers: IHasuraHeader = {
    'x-hasura-role': role,
    'x-hasura-user-id': null,
  };

  if (withUserId) {
    const user = nhost.auth.getUser();
    if (user && user.id) headers['x-hasura-user-id'] = user.id;
  }

  return {context: {headers: headers}};
};

interface INhostAuthStore {
  fcmToken: string | null;
  store_id: number | null;
  updateFcmToken: (newFcmToken: string | null) => void;
  updateStoreId: (newStoreId: number | null) => void;
}

const useStore = create<INhostAuthStore>()(
  persist(
    set => ({
      fcmToken: null as INhostAuthStore['fcmToken'],
      store_id: null as INhostAuthStore['store_id'],
      updateFcmToken: newFcmToken => {
        set(state => ({...state, fcmToken: newFcmToken}));
      },
      updateStoreId: newStoreId => {
        set(state => ({...state, store_id: newStoreId}));
      },
    }),
    {name: 'nhost-auth', getStorage: () => AsyncStorage},
  ),
);

export const useMyUserSelector = createTrackedSelector(useStore);

const nullUser: User = {
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
};

type CustomUserData = User & INhostAuthStore;

interface MyUser extends CustomUserData {
  isValid: boolean;
}

export const useMyUser = (): MyUser => {
  const user = useUserData();
  const myUserData = useMyUserSelector();

  const newAvatarUrl = useMemo(() => {
    if (!user?.avatarUrl) return '';
    const url = nhost.storage.getPublicUrl({fileId: user?.avatarUrl});
    return url;
  }, [user?.avatarUrl]);

  if (user)
    return {
      ...user,
      ...myUserData,
      avatarUrl: newAvatarUrl,
      isValid: true,
    };
  else return {...nullUser, ...myUserData, isValid: false};
};
