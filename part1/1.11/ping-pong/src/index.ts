import express from "express";
import { Request, Response, NextFunction } from "express";
import { readFile, writeFile } from "fs/promises";

const app = express();
const pingCountFile = "/app/files/count";

const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  const date = new Date().toISOString();
  console.log(`${date} ${req.method} ${req.url}`);
  next();
};

app.use(requestLogger);

const getPingCount = async (): Promise<number> => {
  try {
    const pingFileContent = await readFile(pingCountFile, { encoding: "utf8" });
    const pingCount = parseInt(pingFileContent);

    return pingCount;
  } catch (error) {
    return 0;
  }
};

const savePingCount = (count: number) => {
  writeFile(pingCountFile, count.toString());
};

app.get("/pingpong", async (req: Request, res: Response) => {
  try {
    const pingCount = await getPingCount();
    const newPingCount = pingCount + 1;
    savePingCount(newPingCount);

    res.send("pong");
  } catch (error) {
    console.error(error);
    res.status(404).send("Pingpong failed.");
  }
});

app.listen(3001);
