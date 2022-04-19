import { Request, Response } from "express";

export default (req: Request, res: Response) => {
  return res
    .status(200)
    .send(`Hello ${req.query.name}! It's now: ${new Date().toUTCString()}`);
};
