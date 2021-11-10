import express from "express";

const app = express();

let requestCount = 0;

app.get("/pingpong", function (req, res) {
  requestCount = requestCount + 1;
  const responseText = `pong ${requestCount}`;
  res.send(responseText);
});

app.listen(3000);
