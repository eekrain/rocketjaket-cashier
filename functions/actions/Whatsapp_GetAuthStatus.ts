import { Request, Response } from "express";
import axios from "axios";
import to from "await-to-js";

interface MyWASendMessageResponse {
  status: "AUTHENTICATED" | "NOT_AUTHENTICATED";
  qrcode: string;
  state:
    | "CONFLICT"
    | "CONNECTED"
    | "DEPRECATED_VERSION"
    | "OPENING"
    | "PAIRING"
    | "PROXYBLOCK"
    | "SMB_TOS_BLOCK"
    | "TIMEOUT"
    | "TOS_BLOCK"
    | "UNLAUNCHED"
    | "UNPAIRED"
    | "UNPAIRED_IDLE";
  info?: {
    pushname: string;
    platform: string;
    me: {
      server: string;
      user: string;
      _serialized: string;
    };
    wid: {
      server: string;
      user: string;
      _serialized: string;
    };
    phone: {
      wa_version: string;
      mcc: string;
      mnc: string;
      os_version: string;
      device_manufacturer: string;
      device_model: string;
      os_build_number: string;
    };
  };
}

export default async (req: Request, res: Response) => {
  const params: Whatsapp_GetAuthStatusArgs = req.body.input;

  const defaultOutput: Whatsapp_GetAuthStatusOutput = {
    is_authenticated: false,
    qr_code: null,
    client_device_manufacturer: null,
    client_device_model: null,
    client_name: null,
    client_phone_number: null,
    client_platform: null,
    client_state: null,
    isError: true,
    errorMessage: "",
  };

  const [errAuth, resAuth] = await to(
    axios.get<MyWASendMessageResponse>(
      `${process.env.WHATSAPP_API_URL}/auth/getqr`
    )
  );

  res.send("ok");
  // if (errAuth) {
  //   console.log(
  //     "🚀 ~ file: Whatsapp_GetAuthStatus.ts ~ line 54 ~ errAuth",
  //     errAuth
  //   );
  //   const output: Whatsapp_GetAuthStatusOutput = {
  //     ...defaultOutput,
  //     errorMessage:
  //       "Request gagal. Service Whatsapp API mungkin tidak berjalan dengan benar!",
  //   };
  //   return res.send(output);
  // }
  // console.log(
  //   "🚀 ~ file: Whatsapp_GetAuthStatus.ts ~ line 49 ~ resAuth",
  //   resAuth
  // );

  // if (resAuth) {
  //   const client = resAuth.data.info;
  //   const output: Whatsapp_GetAuthStatusOutput = {
  //     ...defaultOutput,
  //     is_authenticated: resAuth.data.status === "AUTHENTICATED" ? true : false,
  //     qr_code: resAuth.data.qrcode || null,
  //     client_device_manufacturer: client?.phone.device_manufacturer || null,
  //     client_device_model: client?.phone.device_model || null,
  //     client_name: client?.pushname || null,
  //     client_phone_number: client?.me.user || null,
  //     client_platform: client?.platform || null,
  //     client_state: resAuth.data.state || null,
  //     isError: false,
  //   };

  //   return res.send(output);
  // } else {
  //   const output: Whatsapp_GetAuthStatusOutput = {
  //     ...defaultOutput,
  //     errorMessage: "Request berhasil tetapi response Whatsapp API undefined.",
  //   };
  //   return res.send(output);
  // }
};
