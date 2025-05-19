import express, { Express } from "express";
import { config } from "./config/config";
import { gifsRouter } from "./routes/gifsRouter";

const app: Express = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200).json("Hello GIF Explorer!!!");
});

app.use("/api/gifs", gifsRouter);

app.listen(config.PORT, () => {
  console.log(`App is listening on port ${config.PORT}`);
});
