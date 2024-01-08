'use client';
import React, { createContext, useState, useRef, useEffect, useContext } from 'react';
import Peer from 'simple-peer';
import socket from '../lib/CreateSocket';

const SocketContext = createContext();

const CallContextProvider = ({ children }) => {
  const [stream, setStream] = useState();
  const [call, setCall] = useState({});
  const [me, setMe] = useState('');
  const [messages, setMessages] = useState([]);
  const [callAccepted, setCallAccepted] = useState(false);
  
  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  //get user media
  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);

        if(myVideo.current){
            myVideo.current.srcObject = currentStream;
        }
      });
  }, []);

  useEffect(() => {
    setMe(socket.id);
  },[])
  

  useEffect(() => {
    socket.on('me', (id) => setMe(id));
    //1. on reciever side
    //recieve call and send signal to caller
    socket.on('callUser', ({ from, signal }) => {
      setCall({ isReceivingCall: true, from, signal });
      console.log(signal);
    },[]);

    socket.on('callEnded', () => {
      setCallAccepted(false);
      setCall({});
      if(connectionRef.current){
        connectionRef.current.destroy();
      }
    })
  },[]);

  useEffect(() => {
    socket.on('message', ({ text, from }) => {
        const updatedMessages = [...messages, { text, sender: from === me ? 'me' : 'user' }];
        setMessages(updatedMessages);
    });
  },[messages])


  const callUser = (id) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });
    //1 on caller side
    peer.on('signal', (data) => {
      socket.emit('callUser', { userToCall: id, signalData: data, from: me });
      console.log(data);
    });
    //3 on caller side
    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });
    //2 on caller side
    //caller recieve user signal from receiver
    socket.on('callAccepted', ({signal}) => {
      setCallAccepted(true);
      setCall({ isReceivingCall: false, to:id, signal });
      if (peer && !peer.destroyed) {
        peer.signal(signal);
      }
      console.log(signal);
    });
    connectionRef.current = peer;
  };

  //answer call on receiver side
  const answerCall = () => {
    setCallAccepted(true);
    const peer = new Peer({ initiator: false, trickle: false, stream });
    //2 on receiver side
    //call accepted and send signal to caller
    peer.on('signal', (data) => {
      socket.emit('answerCall', { signal: data, to: call.from });
    });
    //4 on receiver side
    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });
    //3 on receiver side
    peer.signal(call.signal);
    connectionRef.current = peer;
  };


  const leaveCall = () => {
    setCallAccepted(false);
   
    if(call.isReceivingCall){
      socket.emit("callEnded",{to:call.from})
    }
    else {
      socket.emit("callEnded",{to:call.to})
    }
    if(connectionRef.current){
      connectionRef.current.destroy();
    }

    setCall({});
  };

  const sendMessage = (message) => {
    if (call.isReceivingCall) {
      // If the user is receiving a call, send the message to the caller
      socket.emit('message', { text: message, from: me, to: call.from });
    } else {
      // If the user is making the call, send the message to the user being called
      socket.emit('message', { text: message, from: me, to: call.to });
    }
    setMessages([...messages, { text: message, sender: 'me' }]);
  };

  return (
    <SocketContext.Provider value={{
      call,
      callAccepted,
      userVideo,
      myVideo,
      stream,
      me,
      messages,
      callUser,
      leaveCall,
      answerCall,
      sendMessage
    }}
    >
      {children}
    </SocketContext.Provider>
  );
};

const useCallContext = () => useContext(SocketContext);

export { useCallContext ,CallContextProvider, SocketContext };
