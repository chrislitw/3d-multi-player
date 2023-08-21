require("dotenv").config();
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const WebSocket = require("ws");

const wss = new WebSocket.Server({ server });

wss.on("connection", function connection(ws) {
  console.log("client is connected", wss.clients.size);
  ws.send("connecting successful!");

  ws.on("error", console.error);

  ws.on("message", function message(data) {
    console.log("received: ", data);
  });
});

const PORT = process.env.PORT || 8081;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

server.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
