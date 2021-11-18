import express from "express";
import { Request, Response, NextFunction } from "express";

const app = express();
let pingCount = 0;

const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  const date = new Date().toISOString();
  console.log(`${date} ${req.method} ${req.url}`);
  next();
};

app.use(requestLogger);

app.get("/pingpong", (req: Request, res: Response) => {
  pingCount = pingCount + 1;
  res.send("pong");
});

app.get("/count", (req: Request, res: Response) => {
  res.send(pingCount.toString());
});

app.listen(3001);
