
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server,{
    cors: {
        origin: 'http://localhost:3000', 
        methods: ['GET', 'POST'],      
    },
});

io.on('connection', (socket) => {
  console.log(`a user connected with id ${socket.id}`);

  socket.on('message', (message) => {
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(3001, () => {
  console.log('Server is running on port 3001');
});
