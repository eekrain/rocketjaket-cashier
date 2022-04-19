import React, {useMemo, useState} from 'react';
import {createClient} from 'nhost-js-sdk';
import create, {GetState, SetState} from 'zustand';
import {persist, StoreApiWithPersist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createTrackedSelector} from 'react-tracked';
import {HASURA_ENDPOINT, BACKEND_HBP_ENDPOINT} from '@env';
import {NhostApolloProvider} from '@nhost/react-apollo';
import {TUserRoleOptions, UserRolesEnum} from '../../types/user';
import {useEffect} from 'react';
import {useUser_GetUserByIdQuery} from '../../graphql/gql-generated';

export const nhostClient = createClient({
  baseURL: BACKEND_HBP_ENDPOINT,
  clientStorageType: 'react-native',
  clientStorage: AsyncStorage,
});

export const {auth, storage} = nhostClient;

interface INhostAuthStore {
  isLoading: boolean;
  isAuthenticated: boolean;
  fcmToken: string | null;
  user: {
    userId?: string | null;
    displayName?: string | null;
    email?: string | null;
    photoURL?: string | null;
    role?: string | null;
    store_id?: number | null;
  };
  updateFcmToken: (newFcmToken: string) => void;
  setLoading: (isLoading: boolean) => void;
  updateRole: (role: string | null | undefined) => void;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: (deleteFcm?: () => Promise<void>) => Promise<void>;
  updateUserData: (userData: INhostAuthStore['user']) => void;
  updateIsAuthenticated: (isAuthenticated: boolean) => void;
}

const useNhostStore = create<
  INhostAuthStore,
  SetState<INhostAuthStore>,
  GetState<INhostAuthStore>,
  StoreApiWithPersist<INhostAuthStore>
>(
  persist(
    (_set, _get) => ({
      isLoading: true as INhostAuthStore['isLoading'],
      isAuthenticated: false as INhostAuthStore['isLoading'],
      fcmToken: null as INhostAuthStore['fcmToken'],
      user: {
        userId: null,
        displayName: null,
        email: null,
        photoURL: null,
        role: null,
        store_id: null,
      } as INhostAuthStore['user'],
      updateFcmToken: newFcmToken => {
        _set(state => ({...state, fcmToken: newFcmToken}));
      },
      setLoading: isLoading => {
        _set(state => ({
          ...state,
          isLoading,
        }));
      },
      updateRole: role => {
        _set(state => ({
          ...state,
          user: {
            ...state.user,
            role,
          },
        }));
      },
      signIn: async (email, password) => {
        const res = await nhostClient.auth.login({email, password});

        _set(state => ({
          ...state,
          isAuthenticated: true,
          user: {
            ...state.user,
            userId: res.user?.id,
            displayName: res.user?.display_name,
            email: res.user?.email,
            photoURL: res.user?.avatar_url,
          },
        }));
      },
      updateUserData: (userData: INhostAuthStore['user']) => {
        _set(state => ({
          ...state,
          user: {
            ...state.user,
            ...userData,
          },
        }));
      },
      updateIsAuthenticated: (isAuthenticated: boolean) => {
        _set(state => ({
          ...state,
          isAuthenticated,
        }));
      },
      signOut: async deleteFcm => {
        if (deleteFcm) {
          await deleteFcm();
        }
        await nhostClient.auth.logout();
        _set(state => ({
          ...state,
          isAuthenticated: false,
          user: {
            userId: null,
            role: null,
            displayName: null,
            email: null,
            photoURL: null,
          },
        }));
      },
    }),
    {name: 'nhost-auth', getStorage: () => AsyncStorage},
  ),
);

export const useNhostAuth = createTrackedSelector(useNhostStore);

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
    headers['x-hasura-user-id'] = nhostClient.auth.getClaim(
      'x-hasura-user-id',
    ) as string | null;
  }

  return {context: {headers: headers}};
};

interface INhostProviderProps {
  children: React.ReactNode;
}

export const NhostCustomProvider = ({children}: INhostProviderProps) => {
  return (
    <NhostApolloProvider auth={nhostClient.auth} gqlEndpoint={HASURA_ENDPOINT}>
      <ManageAuthenticatedUser />
      {children}
    </NhostApolloProvider>
  );
};

const ManageAuthenticatedUser = () => {
  const nhostAuth = useNhostAuth();
  const [constructorHasRun, setConstructorHasRun] = useState(false);
  let unsubscribe: Function;

  const constructor = () => {
    if (constructorHasRun) return;

    unsubscribe = nhostClient.auth.onAuthStateChanged(isAuthenticated => {
      nhostAuth.updateIsAuthenticated(isAuthenticated);
      if (!isAuthenticated) {
        nhostAuth.signOut();
      }
      nhostAuth.setLoading(false);

      const userData = nhostClient.auth.user();
      if (userData) {
        nhostAuth.updateUserData({
          userId: userData.id,
          displayName: userData.display_name,
          email: userData.email,
        });
      }
    });
    setConstructorHasRun(true);
  };

  constructor();

  const getUserData = useUser_GetUserByIdQuery({
    variables: {
      id: nhostAuth.user?.userId,
    },
    pollInterval: 1000 * 60,
    ...getXHasuraContextHeader({role: 'me', withUserId: true}),
  });

  const userData = useMemo(() => {
    return getUserData.data?.users_by_pk;
  }, [getUserData.data?.users_by_pk]);

  useEffect(() => {
    nhostAuth.setLoading(getUserData.loading);
  }, [getUserData.loading, nhostAuth]);

  useEffect(() => {
    if (userData && nhostAuth.isAuthenticated) {
      nhostAuth.updateUserData({
        userId: userData.id,
        displayName: userData.display_name,
        email: userData.account?.email,
        photoURL: userData?.avatar_url || '',
        role: userData.account?.default_role,
      });
      if (userData.account?.default_role !== UserRolesEnum.administrator) {
        nhostAuth.updateUserData({
          store_id: userData.store_id,
        });
      }
    }
  }, [getUserData.loading, nhostAuth, userData]);

  useEffect(() => {
    return () => {
      try {
        unsubscribe();
      } catch (error) {}
    };
  });

  return null;
};
