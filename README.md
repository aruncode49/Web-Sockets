# Web-Sockets
WebSocket is a computer communications protocol, providing full-duplex communication channels over a single TCP connection. 

# Socket.io Library
Socket.IO is a library that enables low-latency, bidirectional and event-based communication between a client and a server.
- The Socket.IO connection can be established with different low-level transports:
  - HTTP long-polling
  - WebSocket
  - WebTransport
- Socket.IO will automatically pick the best available option, depending on:
  - the capabilities of the browser (see here and here)
  - the network (some networks block WebSocket and/or WebTransport connections)

### Server Implementation
JavaScript(Node Js)
### Client Implementation
JavaScript(browser, Node Js, React, React Native)

### Installation

**Step-1** `npm i socket.io`

**Step-2 -> On Server Side** 
```
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket) => {
  // send message to one client
  socket.emit("msg", "hello world");

  // send message to all clients
  io.emit("msg", "hello world");

  // recieve message from client
  socket.on("client-msg", (msg) => {
  console.log(msg);
  }  
});

httpServer.listen(3000);
```
**Step-3 -> On Client Side** 
```
<script src="/socket.io/socket.io.js"></script>
    <script>
      //   client socket instance
      const socket = io();

      //   recieve message on client from server
      socket.on("server-message", (message) => {
       console.log(message);
      });

      //   send message function
      function sendMessage() {
        // send message from client -> server
        socket.emit("client-message", `Hello world`);
      }
    </script>
```
**_Note:_ This README.md file is written from my understanding of web sockets or socket.io, if you want to add any change you can change it and make a pull request.!!**
