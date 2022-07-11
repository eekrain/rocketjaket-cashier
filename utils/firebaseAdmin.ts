import { initializeApp, cert } from "firebase-admin/app";
import { getMessaging } from "firebase-admin/messaging";
import axios from "axios";
import to from "await-to-js";
import { nhost } from "./nhost";
import { getfirebaseConfig, getNhostConfig } from "./getConfig";

export const myFirebaseAdminApp = async () => {
  const url = nhost.storage.getPublicUrl({
    fileId: getfirebaseConfig().FIREBASE_ADMIN_CONFIG_FILE_ID,
  });
  const header = {
    headers: { "x-hasura-admin-secret": getNhostConfig().NHOST_ADMIN_SECRET },
  };
  const [err, res] = await to(axios.get(url, header));
  const firebaseConfig = res?.data;
  if (!firebaseConfig) throw new Error("Firebase config not found");
  // console.log(
  //   "🚀 ~ file: firebaseAdmin.ts ~ line 30 ~ myFirebaseAdminApp ~ firebaseConfig",
  //   firebaseConfig
  // );

  const app = initializeApp({
    credential: cert(firebaseConfig),
  });

  return {
    messaging: getMessaging(app),
  };
};
