import { Router } from "express";
import { content, search } from "../controllers/gifsController";

const router = Router();

router.get("/content", content);
router.get("/search", search);

export { router as gifsRouter };
