import { v4 as uuidv4 } from "uuid";
import express from "express";
import { Request, Response, NextFunction } from "express";
import { readFile } from "fs/promises";

const app = express();
const pingCountFile = "/app/files/count";

const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  const date = new Date().toISOString();
  console.log(`${date} ${req.method} ${req.url}`);
  next();
};

app.use(requestLogger);

const getPingCount = async (): Promise<string> => {
  try {
    const pingCount = await readFile(pingCountFile, { encoding: "utf8" });
    return pingCount;
  } catch (error) {
    console.error(error);
    return "0";
  }
};

app.get("/status", async function (req: Request, res: Response) {
  try {
    const date = new Date().toISOString();
    const uuid = uuidv4();
    const pingCount = await getPingCount();

    const responseText = `${date} ${uuid}.\nPing / Pongs: ${pingCount}`;
    res.send(responseText);
  } catch (error) {
    console.error(error);
    res.status(404).send("Status not found.");
  }
});

app.listen(3000);
