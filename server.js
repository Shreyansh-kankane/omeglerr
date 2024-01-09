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

const dummyAvailableUsers = [
 "sdefrgtgt4hy5hy5",
 "defwrfregt4hy5hy"
]

const dummyOnCallUsers = [
  {
    id1: "naldfkrwfjrfdfgo",//initiator socket id
    id2: "fgdsfgegththyhyy",//socket id
  }
]


const availableUsers = [];

const oncallUsers = [];

io.on("connection",socket => {

  const auth = socket.handshake.auth;
  if(auth.token === 'omeglerr'){
    socket.emit("me",socket.id);
  }else {
    socket.disconnect();
  }

  socket.on("disconnect",() => {
    
    if (availableUsers.indexOf(socket.id) > -1) {
      availableUsers.splice(availableUsers.indexOf(socket.id),1);
    }else if(oncallUsers.indexOf(socket.id) > -1){
      oncallUsers.splice(oncallUsers.indexOf(socket.id),1);
    } 
    socket.broadcast.emit("callEnded");
  })

  socket.on("wantToConnect",(id)=>{
    if(availableUsers.length > 0){
      const user = availableUsers.pop();
      oncallUsers.push(user);
      oncallUsers.push(socket.id);

      io.to(user.id).emit("userFound",socket.id,true);
      io.to(socket.id).emit("userFound",user.id,false);

    }else {
      availableUsers.push({
        id: id
      });
      console.log(availableUsers);
    }
  })

  socket.on("joinCall",({signalData,id})=>{
    io.to(id).emit("acceptCall",signalData);
  })



  socket.on("callEnded",data => {
    availableUsers.push(data.to);
    availableUsers.push(socket.id);
    oncallUsers.splice(oncallUsers.indexOf(data.to),1);
    oncallUsers.splice(oncallUsers.indexOf(socket.id),1);

    io.to(data.to).emit("callEnded");
  });

  socket.on('message', (data) => {
    console.log(data);
    socket.to(data.to).emit('message', data);
  });
});

server.listen(5000, () => {
  console.log('Server is running on port 5000');
});




  // socket.on("callUser",(data)=>{
  //     io.to(data.userToCall).emit("callUser",{signal:data.signalData, from: data.from});
  // })

  // socket.on("answerCall",data => {

  //   availableUsers.indexOf(data.to) > -1 && availableUsers.splice(availableUsers.indexOf(data.to),1);
  //   availableUsers.indexOf(socket.id) > -1 && availableUsers.splice(availableUsers.indexOf(socket.id),1);
  //   oncallUsers.push(data.to);
  //   oncallUsers.push(socket.id);

  //   io.to(data.to).emit("callAccepted",{signal:data.signal});
  // })



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
//  if (socket.handshake.auth.token) {
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
// const userIo = io.on('/user',{auth: {token: '123'}}) });

// socket.on('connect_error', (err) => {console.log(err.message);});

// disconnect the socket
// socket.disconnect(); 

// socket.volatite.emit => client send the not all the message to server if gets disconnected in between

