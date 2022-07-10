import { Request, Response } from "express";
import axios from "axios";
import to from "await-to-js";
import { getWhatsappConfig } from "../../utils";

export default async (req: Request, res: Response) => {
  const whatsappConfig = getWhatsappConfig();
  console.log(
    "🚀 ~ file: Whatsapp_GetAuthStatus.ts ~ line 8 ~ whatsappConfig",
    whatsappConfig
  );
  const url = `${whatsappConfig.WHATSAPP_API_URL}/auth/signout`;
  const axiosConfig = {
    headers: {
      "x-mywa-secret": whatsappConfig.WHATSAPP_API_SECRET,
    },
  };

  const [errSignout, resSignout] = await to(
    axios.get<MyWASignoutResponse>(url, axiosConfig)
  );

  if (errSignout || !resSignout) {
    console.log(
      "🚀 ~ file: Whatsapp_SignOut.ts ~ line 17 ~ errSignout",
      errSignout
    );
    const output: Whatsapp_SignOutOutput = {
      is_success: false,
      errorMessage: errSignout.message,
    };
    return res.send(output);
  }

  console.log(
    "🚀 ~ file: Whatsapp_SignOut.ts ~ line 11 ~ resSignout",
    resSignout
  );

  const output: Whatsapp_SignOutOutput = {
    is_success: true,
  };
  return res.send(output);
};
