import cors from "cors";
import express, { Express } from "express";
import morgan from "morgan";
import { config } from "./config";
import { _404Handler, globalErrorHandler, metricsHandler } from "./middlewares";
import { gifsRouter, healthRouter, metricsRouter } from "./routes";

const app: Express = express();

app.use(cors());

app.use(metricsHandler);

// logging
app.use(morgan(config.NODE_ENV === "development" ? "dev" : "combined"));

app.use(express.json());

app.use("/api/gifs", gifsRouter);
app.use("/api", healthRouter);
app.use("/api", metricsRouter);

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
