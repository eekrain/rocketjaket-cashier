import to from "await-to-js";
import { myFirebaseAdminApp } from ".";
import { getAdminSdk } from "./graphqlClient";

interface INotification {
  title: string;
  body: string;
  link?: string;
}

export const sendNotification = async (notification: INotification) => {
  const sdk = getAdminSdk();
  const [errFcm, resFcm] = await to(sdk.Notification_GetActiveFcmTokens());
  const fcmRaw = resFcm?.data.active_fcm_tokens;
  console.log(
    "🚀 ~ file: sendNotification.ts ~ line 15 ~ sendNotification ~ fcmRaw",
    fcmRaw
  );

  if (errFcm || !fcmRaw) {
    console.log(
      "🚀 ~ file: sendNotification.ts ~ line 5 ~ sendNotification ~ errFcm",
      errFcm
    );
  } else {
    const tokens = fcmRaw.map((x) => x.fcm_token);
    const firebaseAdmin = await myFirebaseAdminApp();

    const [errNotif, resNotif] = await to(
      sdk.Notification_CreateOneNotification({
        notification: {
          notification_body: notification.body,
          notification_title: notification.title,
        },
      })
    );
    if (errNotif || !resNotif) {
      console.log(
        "🚀 ~ file: UpdateAvailableQtyOnInsertTransactionItem.ts ~ line 161 ~ errNotif",
        errNotif
      );
    } else {
      console.log(
        "🚀 ~ file: sendNotification.ts ~ line 33 ~ sendNotification ~ resNotif",
        resNotif
      );
    }
    const notification_id = resNotif?.data.insert_notification_one?.id;

    const [errMulticast, resMulticast] = await to(
      firebaseAdmin.messaging.sendMulticast({
        tokens,
        data: {
          notifee: JSON.stringify({
            title: notification.title,
            body: notification.body,
            data: {
              link: notification.link,
              notification_id: notification_id
                ? notification_id.toString()
                : undefined,
            },
            android: {
              channelId: "default",
              pressAction: {
                id: "default",
              },
              actions: notification_id
                ? [
                    {
                      title: "Mark as Read",
                      pressAction: {
                        id: "mark-as-read",
                      },
                    },
                  ]
                : undefined,
            },
          }),
        },
      })
    );
    if (errMulticast || !resMulticast) {
      console.log(
        "🚀 ~ file: UpdateAvailableQtyOnInsertTransactionItem.ts ~ line 143 ~ errMulticast",
        errMulticast
      );
    }
  }
};
