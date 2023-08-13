require("dotenv").config();

const PORT = process.env.PORT || 8081;

const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: PORT });

console.log("PORT: ", PORT);

wss.on("connection", function connection(ws) {
  console.log("client is connected", wss.clients.size);

  ws.on("error", console.error);

  ws.on("message", function message(data) {
    console.log("received: %s", data);
  });

  ws.send("something");
});
