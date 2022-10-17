import { Response } from "express";
import StatusCodes from "http-status-codes";

export const resTemplates = {
  INTERNAL_SERVER_ERROR(res: Response) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ message: "Internal Server Error" });
  },
  BAD_REQUEST(res: Response) {
    res.status(StatusCodes.BAD_REQUEST).send({ message: "Bad Request" });
  },
  OK(res: Response) {
    res.status(StatusCodes.OK).send({ message: "OK" });
  },
};
