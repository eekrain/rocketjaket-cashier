import { Request, Response } from "express";
import { getAdminSdk, myFirebaseAdminApp } from "../utils";
import to from "await-to-js";
import {
  Inventory_GetInventoryProductByIdQuery,
  Transaction_Items_Insert_Input,
} from "../graphql/gql-generated";
import { getMessaging } from "firebase-admin/messaging";

interface UpdateAvailableQtyOnInsertTransactionItem_EventData {
  old?: null;
  new: Transaction_Items_Insert_Input;
}

export default async (req: Request, res: Response) => {
  const eventData: UpdateAvailableQtyOnInsertTransactionItem_EventData =
    req.body.event.data;
  // console.log(
  //   "🚀 ~ file: UpdateAvailableQtyOnInsertTransactionItem.ts ~ line 6 ~ handler ~ eventData",
  //   eventData
  // );

  if (eventData.new.transaction_status !== "success") {
    // This event only proceeds succeed transaction_items
    return res
      .status(200)
      .send("This event only proceeds succeed transaction_items");
  }

  const sdk = getAdminSdk();

  const [errInv, resInv] = await to(
    sdk.Inventory_GetInventoryProductById({
      id: eventData.new.inventory_product_id,
    })
  );

  const inv_pdk = resInv?.data?.inventory_products_by_pk;

  if (errInv) {
    // If error happens when requesting the inventory product
    console.log(
      "🚀 ~ file: UpdateAvailableQtyOnInsertTransactionItem.ts ~ line 21 ~ errInv",
      errInv
    );
    return res.status(500).send("Internal server error");
  }
  if (!inv_pdk) {
    // If inventory product is actually not found, might be the inventory already deleted,
    //then skip the available_qty synchronizing process
    return res.status(200).send("Inventory isnt found, no need syncing");
  }

  const qtyBefore = inv_pdk.available_qty;

  if (typeof eventData?.new?.purchase_qty !== "number") {
    return res
      .status(200)
      .send("Purchase qty is undefined, skipping the syncing process");
  }

  const newAvailableQtyAfterBought = qtyBefore
    ? qtyBefore - eventData.new.purchase_qty
    : qtyBefore;

  // console.log(
  //   "🚀 ~ file: UpdateAvailableQtyOnInsertTransactionItem.ts ~ line 32 ~ newAvailableQtyAfterBought",
  //   newAvailableQtyAfterBought
  // );

  const [errUpdate, resUpdate] = await to(
    sdk.Inventory_UpdateInventoryProductById({
      id: eventData.new.inventory_product_id,
      updateInventory: {
        available_qty: newAvailableQtyAfterBought,
      },
    })
  );
  if (errUpdate || !resUpdate) {
    console.log(
      "🚀 ~ file: UpdateAvailableQtyOnInsertTransactionItem.ts ~ line 47 ~ errUpdate",
      errUpdate
    );
    return res.status(500).send("Internal server error");
  }

  await sendNotificationOnMinAvailableQty(
    eventData,
    newAvailableQtyAfterBought,
    inv_pdk.min_available_qty
  );

  return res.status(200).send("OK");
};

const sendNotificationOnMinAvailableQty = async (
  eventData: UpdateAvailableQtyOnInsertTransactionItem_EventData,
  newAvailableQtyAfterBought: number,
  min_available_qty: number
) => {
  const sdk = getAdminSdk();

  if (newAvailableQtyAfterBought <= min_available_qty) {
    const [errFcm, resFcm] = await to(sdk.Notification_GetActiveFcmTokens());
    const fcmRaw = resFcm?.data.active_fcm_tokens;
    if (errFcm || !fcmRaw) {
      console.log(
        "🚀 ~ file: UpdateAvailableQtyOnInsertTransactionItem.ts ~ line 87 ~ errFcm",
        errFcm
      );
    } else {
      const tokens = fcmRaw.map((x) => x.fcm_token);
      const firebaseAdmin = myFirebaseAdminApp();
      const notification = {
        title: "Stok Produk Menipis",
        body: `Produk ${eventData.new.product_name} hanya tersisa ${newAvailableQtyAfterBought}!`,
      };

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
                link: "myapp://inventory",
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
  }
};
