import express from "express";
import { Request, Response } from "express";
import { readdir, readFile } from "fs/promises";
import { isBefore } from "date-fns";

const app = express();
const logFilePath = "/app/files";

/**
 * Filenames contain timestamp in UTC.
 * Example: 2021-11-15T14:59:04.513Z
 */
const sortByTimeDescending = (filenameA: string, filenameB: string) => {
  const dateA = Date.parse(filenameA);
  const dateB = Date.parse(filenameB);
  return isBefore(dateA, dateB) ? 1 : -1;
};

const readLatestLogfile = async (): Promise<string> => {
  const filenames = await readdir(logFilePath);
  const sortedFilenames = filenames.sort(sortByTimeDescending);

  if (sortedFilenames.length > 0) {
    const newestFile = sortedFilenames[0];
    const fileContent = await readFile(`${logFilePath}/${newestFile}`);
    return `${newestFile} ${fileContent}`;
  } else {
    throw "No log files found";
  }
};

app.get("/status", async function (req: Request, res: Response) {
  try {
    const log = await readLatestLogfile();
    res.send(log);
  } catch (error) {
    console.error(error);
    res.status(404).send("Failed to read log files");
  }
});

app.listen(3000);
