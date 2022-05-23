import app from "./app";
import "./db";
// import http from 'http';
// const server = http.createServer(app);
// import { Server } from "socket.io";
// const io = new Server(server);




import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket : any) => {
  console.log('socket.io connected')
});

httpServer.listen(3000, () => {
  console.log("Server on port 3000");
});

<<<<<<< HEAD
=======

// io.on('connection', (socket) => {
//   console.log('a user connected');
// });
>>>>>>> ae4fb86454dada988359621dd6cb407610c255ca
