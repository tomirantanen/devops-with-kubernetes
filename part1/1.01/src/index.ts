import { v4 as uuidv4 } from "uuid";
import { setInterval } from "timers";

const INTERVAL = 5000;

const uuid = uuidv4();

const logOutput = () => {
  const date = new Date().toISOString();
  console.log(`${date} ${uuid}`);
};

setInterval(logOutput, INTERVAL);
