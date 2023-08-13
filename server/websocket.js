const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", function connection(ws) {
  console.log("client is connected", wss.clients.size);

  ws.on("error", console.error);

  ws.on("message", function message(data) {
    console.log("received: %s", data);
  });

  ws.send("something");
});
