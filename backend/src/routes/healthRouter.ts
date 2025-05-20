import { Router } from "express";
import { health } from "../controllers/healthController";

const healthRouter = Router();

healthRouter.get("/health", health);

export { healthRouter };
