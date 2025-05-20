import { NextFunction, Request, Response } from "express";
import client from "prom-client";

export const metrics = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.set("Content-Type", client.register.contentType);
    res.end(await client.register.metrics());
  } catch (error) {
    next(error);
  }
};
