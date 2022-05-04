import { Request, Response } from "express";
import axios from "axios";
import to from "await-to-js";
import { getAdminSdk } from "../utils/graphqlClient";

export default async (req: Request, res: Response) => {
  const params: User_SignUpArgs = req.body.input;
  // console.log("🚀 ~ file: User_SignUp.ts ~ line 7 ~ params", params);
  const defaultOutput: User_SignUpOutput = {
    email: params.email,
    isError: true,
    displayName: params.displayName,
    errorMessage: "",
  };

  const sdk = getAdminSdk();

  const [errRegister, dataRegister] = await to<
    { status: number },
    {
      response: {
        data: {
          status: number;
          message: string;
        };
      };
    }
  >(
    axios.post(
      `${process.env.NHOST_BACKEND_URL}/v1/auth/signup/email-password`,
      {
        email: params.email,
        password: params.password,
        options: { displayName: params.displayName },
      }
    )
  );
  if (errRegister) {
    // console.log("🚀 ~ file: User_SignUp.ts ~ line 32 ~ err", err);
    const output = {
      ...defaultOutput,
      isError: true,
      errorMessage: errRegister.response.data.message,
    };
    return res.status(200).json(output);
  } else if (dataRegister.status !== 200) {
    // console.log("🚀 ~ file: User_SignUp.ts ~ line 31 ~ data", data);
    const output = {
      ...defaultOutput,
      isError: true,
      errorMessage: "Request status not 200. Contact developer!",
    };
    return res.status(200).json(output);
  }

  const [errUser, resUser] = await to(
    sdk.User_GetUserByEmail({ email: params.email })
  );
  if (errUser) {
    console.log("🚀 ~ file: User_SignUp.ts ~ line 59 ~ err", errUser);
    const output = {
      ...defaultOutput,
      isError: true,
      errorMessage: "Registration failed! Cant find the user id.",
    };
    return res.status(200).json(output);
  }
  const userId = resUser.data.users?.[0]?.id;
  // console.log("🚀 ~ file: User_SignUp.ts ~ line 68 ~ userId", userId);

  const [errUpdate, resUpdate] = await to(
    sdk.User_UpdateUser({
      id: userId,
      updateUser: { defaultRole: params.defaultRole },
      insertUserRole: { userId, role: params.defaultRole },
      insertMetadata: {
        user_id: userId,
        store_id:
          params.defaultRole === "administrator" ? null : params.defaultStore,
      },
    })
  );
  if (errUpdate) {
    console.log("🚀 ~ file: User_SignUp.ts ~ line 76 ~ err", errUpdate);
    const output = {
      ...defaultOutput,
      isError: true,
      errorMessage: "Registration not completed! Failed to update user role.",
    };
    return res.status(200).json(output);
  }

  if (errUser || errUpdate) {
    try {
      await sdk.User_DeleteUser({ email: params.email });
    } catch (error) {
      console.log("🚀 ~ file: User_SignUp.ts ~ line 91 ~ error", error);
    }
  }

  const output = { ...defaultOutput, isError: false };
  return res.status(200).json(output);
};
