import { Request, Response } from "express";
import axios from "axios";
import to from "await-to-js";

interface MyWASignoutResponse {
  is_success: boolean;
}

export default async (req: Request, res: Response) => {
  const [errSignout, resSignout] = await to(
    axios.get<MyWASignoutResponse>(
      `${process.env.WHATSAPP_API_URL}/auth/signout`
    )
  );

  if (errSignout) {
    console.log(
      "🚀 ~ file: Whatsapp_SignOut.ts ~ line 17 ~ errSignout",
      errSignout
    );
    const output: Whatsapp_SignOutOutput = {
      is_success: false,
    };
    return res.send(output);
  }

  console.log(
    "🚀 ~ file: Whatsapp_SignOut.ts ~ line 11 ~ resSignout",
    resSignout
  );

  if (resSignout) {
    const output: Whatsapp_SignOutOutput = {
      is_success: resSignout.data.is_success,
    };
    return res.send(output);
  } else {
    const output: Whatsapp_SignOutOutput = {
      is_success: false,
    };
    return res.send(output);
  }
};
