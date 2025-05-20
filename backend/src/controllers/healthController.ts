import { Request, Response } from "express";

export const health = (_req: Request, res: Response) => {
  const healthData = {
    uptime: process.uptime(),
    message: "OK",
    timestamp: Date.now(),
  };

  try {
    res.send(healthData);
  } catch (error) {
    res.status(503).send({ ...healthData, message: error });
  }
};
