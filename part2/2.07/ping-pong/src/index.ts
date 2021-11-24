import express from "express";
import { Request, Response, NextFunction } from "express";
import { getPingCount, initDatabase, savePing } from "./ping/ping-service";

const app = express();
initDatabase();

const requestLogger = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const date = new Date().toISOString();
  console.log(`${date} ${request.method} ${request.url}`);
  next();
};

app.use(requestLogger);

app.get("/pingpong", async (request: Request, response: Response) => {
  const userAgent = request.headers["user-agent"] || "";
  await savePing(userAgent);
  response.send("pong");
});

app.get("/count", async (request: Request, response: Response) => {
  const count = await getPingCount();
  response.send(count.toString());
});

app.listen(3001);
