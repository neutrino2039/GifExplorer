import { NextFunction, Request, Response } from "express";
import { config } from "../config/config";
import { gify } from "./api";

export const content = (req: Request, res: Response, next: NextFunction) => {
  try {
    const apiKey = config.GIPHY_API_KEY;
    const limit = req.query.limit;
    const offset = req.query.offset;

    gify
      .get(`/trending/?api_key=${apiKey}&limit=${limit}&offset=${offset}`)
      .then((response) => res.send(response.data))
      .catch((e) => next(e));
  } catch (error) {
    next(error);
  }
};

export const search = (req: Request, res: Response, next: NextFunction) => {
  try {
    const apiKey = config.GIPHY_API_KEY;
    const q = req.params.q;
    const limit = req.query.limit;
    const offset = req.query.offset;
    const rating = req.query.rating;
    const bundle = req.query.bundle;

    gify
      .get(
        `/search/?api_key=${apiKey}&q=${q}&limit=${limit}&offset=${offset}&rating=${rating}&bundle=${bundle}`
      )
      .then((response) => res.send(response.data))
      .catch((e) => next(e));
  } catch (error) {
    next(error);
  }
};
