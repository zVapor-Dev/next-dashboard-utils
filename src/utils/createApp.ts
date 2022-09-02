import express, { Express } from "express";
import routes from "../routes";

export function createApp(): Express {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded());
  app.use("/api", routes);
  return app;
}
