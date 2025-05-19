import express, { Express } from "express";
import { config } from "./config/config";
import { _404Handler } from "./middlewares/404Handler";
import { globalErrorHandler } from "./middlewares/globalErrorHandler";
import { gifsRouter } from "./routes/gifsRouter";

const app: Express = express();

app.use(express.json());

app.use("/api/gifs", gifsRouter);

app.use(globalErrorHandler);

app.use(_404Handler);

app.listen(config.PORT, () => {
  console.log(`App is listening on port ${config.PORT}`);
});
