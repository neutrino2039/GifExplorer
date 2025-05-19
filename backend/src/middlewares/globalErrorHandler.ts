import { NextFunction, Request, Response } from "express";
import { config } from "../config/config";

export interface AppError extends Error {
  status?: number;
}

export const globalErrorHandler = (
  e: AppError,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!e) {
    next();
    return;
  }

  console.error(e);

  const isDevelopment = config.NODE_ENV === "development";
  const message = isDevelopment ? e.message : "Internal Server Error";
  const code = isDevelopment && e.status ? e.status : 500;
  res.status(code).json({ message });
};
