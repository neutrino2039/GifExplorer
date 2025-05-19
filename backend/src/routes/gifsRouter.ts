import { Router } from "express";
import { content, search } from "../controllers/gifsController";

const gifsRouter = Router();

gifsRouter.get("/content", content);
gifsRouter.get("/search", search);

export { gifsRouter };
