import dayjs from "dayjs";
import { Request, Response } from "express";
import { getAdminSdk } from "../../utils";
import to from "await-to-js";
import { sendNotification } from "../../utils/sendNotification";

export default async (req: Request, res: Response) => {
  const sdk = getAdminSdk();

  const [errSubs, resSubs] = await to(
    sdk.Whatsapp_GetLastWhatsappSubscription()
  );
  if (errSubs || !resSubs) {
    console.log(
      "🚀 ~ file: Transaction_SendReceipt.ts ~ line 37 ~ errSubs",
      errSubs
    );
  }

  let title = "";
  let body = "";

  let isSubscribed = false;
  const subUntil = resSubs?.data?.whatsapp_subscription?.[0]?.until;
  if (subUntil && dayjs(subUntil).isAfter(dayjs())) isSubscribed = true;

  let diffDays: number | undefined;
  if (subUntil) diffDays = dayjs(subUntil).diff(dayjs(), "day");

  if (diffDays && diffDays >= 0 && diffDays <= 3) {
    title = "Segera Perbarui Langganan API Whatsapp Web";
    body = `Langganan Anda akan berakhir dalam ${diffDays} hari`;
  } else {
    title = "Langganan API Whatsapp Web Non-aktif";
    body =
      "Langganan API Whatsapp Web Anda tidak aktif. Segera perbarui untuk dapat mengirimkan nota!";
  }

  const [errSend, resSend] = await to(sendNotification({ title, body }));

  if (errSend) {
    console.log(
      "🚀 ~ file: Whatsapp_CheckSubscription.ts ~ line 42 ~ errSend",
      errSend
    );
  }

  res.send("ok");
};
