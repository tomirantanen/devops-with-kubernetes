import { v4 as uuidv4 } from "uuid";
import { setInterval } from "timers";
import express from "express";

const app = express();

const INTERVAL = 5000;
const uuid = uuidv4();

let status = "";

const logOutput = () => {
  const date = new Date().toISOString();
  status = `${date} ${uuid}`;
  console.log(status);
};

setInterval(logOutput, INTERVAL);

app.get("/status", function (req, res) {
  res.send(status);
});

app.listen(3000);
