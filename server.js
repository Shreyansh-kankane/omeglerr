
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

const socket = require('socket.io');
const io = socket(server,{
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET","POST"]
  }
});


io.on("connection",socket => {
  const myId = socket.handshake.query.myId;

  if(myId == ''){
    socket.emit("me",socket.id);
  }
  else {
    socket.emit("me",myId);
  }

  socket.on("disconnect",() => {
    socket.broadcast.emit("callEnded")
  })

  socket.on("callUser",(data)=>{
      io.to(data.userToCall).emit("callUser",{signal:data.signalData, from: data.from});
  })

  socket.on("answerCall",data => {
    io.to(data.to).emit("callAccepted",{signal:data.signal});
  })

  socket.on('message', (data) => {
    console.log(data);
    socket.to(data.to).emit('message', data);
  });
})

server.listen(5000, () => {
  console.log('Server is running on port 5000');
});


// defined on server side


// socket.on('listen event', (data) => {...some code...});
// io.emit => server send to everyone
// socket.emit => server send to sender only
// socket.broadcast.emit => server send to everyone except the sender
// socket.to(room).emit => server send to everyone in the room except the sender
// socket.on('join_room', (room) => { socket.join(room) });
// io.to(room).emit => server send to everyone in the room


// creating middleware
// userIo.use((socket, next) => {
//  if (socket.handshake.autth.token) {
//    socket.user = getUser(socket.handshake.auth.token); // access user from db
//    return next();
//  }
// else { return next(new Error("invalid token")); }
// }



// defined on client side
// const socket = io('http://localhost:5000');

// socket.on('connect',()=>{...some code...});
// socket.emit('what to listen by server',data) => client send to server
// socket.emit('what to listen by server', data , cb_function) => client send to server and wait for callback function);
// this callback function is called on server side so there will be two way communication, client code is run by server

// creating namespace
// const userIo = io.of('/user');
// userIo.on('connection', (socket) => {...some code...})

// authentication
// const userIo = io.of('/user',{auth: {token: '123'}}) });

// socket.on('connect_error', (err) => {console.log(err.message);});

// disconnect the socket
// socket.disconnect(); 

// socket.volatite.emit => client send the not all the message to server if gets disconnected in between