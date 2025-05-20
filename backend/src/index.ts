import cors from "cors";
import express, { Express } from "express";
import { config } from "./config/config";
import { _404Handler } from "./middlewares/404Handler";
import { globalErrorHandler } from "./middlewares/globalErrorHandler";
import { gifsRouter } from "./routes/gifsRouter";
import { healthRouter } from "./routes/healthRouter";

const app: Express = express();

app.use(cors());

app.use(express.json());

app.use("/api/gifs", gifsRouter);
app.use("/api", healthRouter);

app.use(globalErrorHandler);
app.use(_404Handler);

const server = app.listen(config.PORT, () => {
  console.log(`App is listening on port ${config.PORT}`);
});

process.on("SIGTERM", () => {
  console.log("SIGTERM signal received: closing API server");
  server.close(() => {
    console.log("API Server closed");
  });
});
