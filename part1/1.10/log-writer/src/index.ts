import { setInterval } from "timers";
import { writeFile } from "fs/promises";
import { v4 as uuidv4 } from "uuid";

const INTERVAL = 5000;

const writelogOutput = async () => {
  const date = new Date().toISOString();
  const uuid = uuidv4();
  const filePath = `/app/files/${date}`;

  try {
    await writeFile(filePath, uuid);
  } catch (error) {
    console.error(`Writing to file ${date} failed.`, error);
  }
};

setInterval(writelogOutput, INTERVAL);
