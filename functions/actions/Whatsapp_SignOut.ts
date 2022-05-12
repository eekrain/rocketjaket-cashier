import { Request, Response } from "express";
import axios from "axios";
import to from "await-to-js";

export default async (req: Request, res: Response) => {
  const [errSignout, resSignout] = await to(
    axios.get<MyWASignoutResponse>(
      `${process.env.WHATSAPP_API_URL}/auth/signout`,
      {
        headers: {
          "x-mywa-secret": process.env.WHATSAPP_API_SECRET || "",
        },
      }
    )
  );

  if (errSignout || !resSignout) {
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

  const output: Whatsapp_SignOutOutput = {
    is_success: true,
  };
  return res.send(output);
};
