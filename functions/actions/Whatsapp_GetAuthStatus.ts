import { Request, Response } from "express";
import axios from "axios";
import to from "await-to-js";
import { getAdminSdk, getWhatsappConfig } from "../../utils";
import dayjs from "dayjs";

export default async (_req: Request, res: Response) => {
  const whatsappConfig = getWhatsappConfig();
  const url = `${whatsappConfig.WHATSAPP_API_URL}/auth/getauthstatus`;
  const axiosConfig = {
    headers: {
      "x-mywa-secret": whatsappConfig.WHATSAPP_API_SECRET,
    },
  };

  const sdk = getAdminSdk();
  const [errSubs, resSubs] = await to(
    sdk.Whatsapp_GetLastWhatsappSubscription()
  );
  const latestSubscription = resSubs?.data?.whatsapp_subscription?.[0]?.until;

  const defaultFailReq: Whatsapp_GetAuthStatusOutput = {
    is_authenticated: false,
    is_client_ready: false,
    is_qr_ready: false,
    qrcode: null,
    client_name: null,
    client_phone_number: null,
    client_platform: null,
    client_state: null,
    isError: true,
    errorMessage: "",
    subscription_until: latestSubscription
      ? dayjs(latestSubscription).toISOString()
      : null,
  };

  const [errAuth, resAuth] = await to(
    axios.get<MyWAGetAuthStatusOutput>(url, axiosConfig)
  );

  if (errAuth || !resAuth) {
    console.log(
      "🚀 ~ file: Whatsapp_GetAuthStatus.ts ~ line 54 ~ errAuth",
      errAuth
    );
    const output: Whatsapp_GetAuthStatusOutput = {
      ...defaultFailReq,
      errorMessage:
        "Request gagal. Service Whatsapp API mungkin tidak berjalan dengan benar!",
    };
    return res.send(output);
  }

  console.log(
    "🚀 ~ file: Whatsapp_GetAuthStatus.ts ~ line 24 ~ resAuth",
    resAuth
  );

  const client = resAuth.data.info;
  const defaultSuccessReq: Whatsapp_GetAuthStatusOutput = {
    ...defaultFailReq,
    is_authenticated: resAuth.data.is_authenticated,
    is_client_ready: resAuth.data.is_client_ready,
    is_qr_ready: resAuth.data.is_qr_ready,
    qrcode: resAuth.data.qrcode || null,
    client_name: client?.pushname || null,
    client_phone_number: client?.wid.user || null,
    client_platform: client?.platform || null,
    client_state: resAuth.data.state || null,
    isError: false,
    subscription_until: latestSubscription
      ? dayjs(latestSubscription).toISOString()
      : null,
  };

  if (
    resAuth.data.is_authenticated === false ||
    resAuth.data.is_client_ready === false
  ) {
    return res.send({
      ...defaultSuccessReq,
      isError: true,
      errorMessage: "Service Whatsapp API belum ready / ter-autentikasi",
    } as Whatsapp_GetAuthStatusOutput);
  }
  return res.send(defaultSuccessReq);
};
