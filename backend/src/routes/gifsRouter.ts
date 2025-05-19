import { Router } from "express";
import { content } from "../controllers/gifsController";

const gifsRouter = Router();

gifsRouter.get("/content", content);

export { gifsRouter };
