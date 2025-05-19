import { Request, Response } from "express";

export const _404Handler = (_: Request, res: Response) => {
  res.status(404).send("Not found");
};
