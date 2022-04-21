import AsyncStorage from '@react-native-async-storage/async-storage';
import {NhostClient} from '@nhost/nhost-js';

export const nhost = new NhostClient({
  backendUrl: 'http://localhost:1337',
  clientStorage: AsyncStorage,
  clientStorageType: 'react-native',
  autoLogin: false,
});
