import { v4 as uuidv4 } from "uuid";
import express from "express";
import { Request, Response, NextFunction } from "express";
import axios from "axios";

const message = process.env.MESSAGE;

const app = express();

const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  const date = new Date().toISOString();
  console.log(`${date} ${req.method} ${req.url}`);
  next();
};

app.use(requestLogger);

const getPingCount = async (): Promise<string> => {
  const response = await axios.get("http://ping-pong-service:2346/count");
  return response.data;
};

app.get("/status", async function (req: Request, res: Response) {
  try {
    const date = new Date().toISOString();
    const uuid = uuidv4();
    const pingCount = await getPingCount();

    const responseText = `${message}\n${date} ${uuid}.\nPing / Pongs: ${pingCount}`;
    res.send(responseText);
  } catch (error) {
    console.error(error);
    res.status(404).send("Status not found.");
  }
});

app.listen(3000);
