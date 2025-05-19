import express, { Express } from "express";
import { config } from "./config/config";

const app: Express = express();

app.get("/", (_req, res) => {
  res.status(200).json("Hello from the server!!!");
});

app.listen(config.port, () => {
  console.log(`App is listening on port ${config.port}`);
});
