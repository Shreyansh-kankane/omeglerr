'use client';
import React, { createContext, useState, useRef, useEffect, useContext } from 'react';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';

const SocketContext = createContext();

const initialMe = localStorage.getItem('myId') || '';

const socket = io('http://localhost:5000', { query: { myId: initialMe } } );

const CallContextProvider = ({ children }) => {
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState();
  const [call, setCall] = useState({});
  const [me, setMe] = useState('');

  const [messages, setMessages] = useState([]);
  
  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);

        if(myVideo.current){
            myVideo.current.srcObject = currentStream;
        }
        else {
          setTimeout(() => {
            setStream(currentStream);
            myVideo.current.srcObject = currentStream;
          },1000)
        }
      });
  }, []);

  useEffect(() => {
    socket.on('me', (id) => setMe(id));

    socket.on('callUser', ({ from, signal }) => {
      setCall({ isReceivingCall: true, from, signal });
    });

  },[]);

  useEffect(() => {
    socket.on('message', ({ text, from }) => {
        const updatedMessages = [...messages, { text, sender: from === me ? 'me' : 'user' }];
        setMessages(updatedMessages);
    });
  },[messages])

  const answerCall = () => {
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('answerCall', { signal: data, to: call.from });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  };

  const callUser = (id) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('callUser', { userToCall: id, signalData: data, from: me });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    socket.on('callAccepted', ({signal}) => {
      setCallAccepted(true);
      setCall({ isReceivingCall: false, to:id, signal });
      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);

    connectionRef.current.destroy();

    window.location.reload();
  };

  const sendMessage = (message) => {
    if (call.isReceivingCall) {
      // If the user is receiving a call, send the message to the caller
      socket.emit('message', { text: message, from: me, to: call.from });
    } else {
      // If the user is making the call, send the message to the user being called
      socket.emit('message', { text: message, from: me, to: call.to });
    }
    
    // socket.emit('message', { text: message, from: me, to: call.from});
    setMessages([...messages, { text: message, sender: 'me' }]);
  };

  return (
    <SocketContext.Provider value={{
      call,
      callAccepted,
      myVideo,
      userVideo,
      stream,
      callEnded,
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
