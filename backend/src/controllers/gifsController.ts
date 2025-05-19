import { NextFunction, Request, Response } from "express";
import { config } from "../config/config";
import { gify } from "./api";

export const content = (req: Request, res: Response, next: NextFunction) => {
  try {
    const apiKey = config.GIPHY_API_KEY;
    const limit = req.params.limit ?? 10;
    const offset = req.params.offset ?? 0;

    gify
      .get(`/trending/?api_key=${apiKey}&limit=${limit}&offset=${offset}`)
      .then((response) => res.send(response.data))
      .catch((e) => next(e));
  } catch (error) {
    next(error);
  }
};
