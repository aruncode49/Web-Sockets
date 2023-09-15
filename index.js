const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const PORT = 8000;

// serve static file
app.use(express.static("public"));

// create http server
const httpServer = http.createServer(app);

// socket server instance
const io = new Server(httpServer);

app.get("/", (req, res) => {
  res.sendFile("/index.html", (err) => {
    console.log(`Error inside sendFile: ${err}`);
  });
});

// make socket connection
io.on("connection", (socket) => {
  // recieve message on server from client
  socket.on("client-message", (message) => {
    console.log(message);
  });
});

// here app.listen is not working because of new httpServer
httpServer.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
