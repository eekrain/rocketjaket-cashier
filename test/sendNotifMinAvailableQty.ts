import { Request, Response } from "express";
import { myFirebaseAdminApp } from "../utils";
import to from "await-to-js";

export default async (req: Request, res: Response) => {
  const tokens = [
    "f597VEMsRx2CWUzBnVwMo0:APA91bFB3s3O0v4MD8V1429y1bl_l8Ciq2sMsVqjPZXgbE2pvbubJ06djNymGLAOhgqk1ufxFnYe-Y1b_WDJpE2ilfeI1nSlaMgSHlD8Vuc8c3woyQB30zW5egx54WqG3MS_wc1ASJja",
  ];
  // const firebaseAdmin = await myFirebaseAdminApp();
  const notification = {
    title: "Stok Produk Menipis",
    body: `Produk Celana / Chinos / M hanya tersisa 19!`,
  };
  // const [errMulticast, resMulticast] = await to(
  //   firebaseAdmin.messaging.sendMulticast({
  //     tokens,
  //     data: {
  //       notifee: JSON.stringify({
  //         title: notification.title,
  //         body: notification.body,
  //         data: {
  //           link: "myapp://inventory",
  //           notification_id: "16",
  //         },
  //         android: {
  //           channelId: "default",
  //           pressAction: {
  //             id: "default",
  //           },
  //           actions: [
  //             {
  //               title: "Mark as Read",
  //               pressAction: {
  //                 id: "mark-as-read",
  //               },
  //             },
  //           ],
  //         },
  //       }),
  //     },
  //   })
  // );

  return res.send("ok");
};
