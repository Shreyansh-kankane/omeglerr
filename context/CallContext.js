// 'use client';
// import React, { createContext, useState, useRef, useEffect, useContext } from 'react';
// import Peer from 'simple-peer';
// import socket from '../lib/CreateSocket';

// const SocketContext = createContext();

// const CallContextProvider = ({ children }) => {
//   const [stream, setStream] = useState();
//   const [call, setCall] = useState({});
//   const [me, setMe] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [callAccepted, setCallAccepted] = useState(false);
  
//   const myVideo = useRef();
//   const userVideo = useRef();
//   const connectionRef = useRef();

//   //get user media
//   useEffect(() => {
//     navigator.mediaDevices.getUserMedia({ video: true, audio: true })
//       .then((currentStream) => {
//         setStream(currentStream);

//         if(myVideo.current){
//             myVideo.current.srcObject = currentStream;
//         }
//       });
//   }, []);

//   useEffect(() => {
//     setMe(socket.id);
//   },[])
  

//   useEffect(() => {
//     socket.on('me', (id) => setMe(id));
//     //1. on reciever side
//     //recieve call and send signal to caller
//     socket.on('callUser', ({ from, signal }) => {
//       setCall({ isReceivingCall: true, from, signal });
//       console.log(signal);
//     },[]);

//     socket.on('callEnded', () => {
//       setCallAccepted(false);
//       setCall({});
//       if(connectionRef.current){
//         connectionRef.current.destroy();
//       }
//     })
//   },[]);



//   useEffect(() => {
//     socket.on('message', ({ text, from }) => {
//         const updatedMessages = [...messages, { text, sender: from === me ? 'me' : 'user' }];
//         setMessages(updatedMessages);
//     });
//   },[messages])

//   const callUser = (id) => {
//     const peer = new Peer({ initiator: true, trickle: false, stream });
//     //1 on caller side
//     peer.on('signal', (data) => {
//       socket.emit('callUser', { userToCall: id, signalData: data, from: me });
//       console.log(data);
//     });
//     //3 on caller side
//     peer.on('stream', (currentStream) => {
//       userVideo.current.srcObject = currentStream;
//     });
//     //2 on caller side
//     //caller recieve user signal from receiver
//     socket.on('callAccepted', ({signal}) => {
//       setCallAccepted(true);
//       setCall({ isReceivingCall: false, to:id, signal });
//       if (peer && !peer.destroyed) {
//         peer.signal(signal);
//       }
//       console.log(signal);
//     });
//     connectionRef.current = peer;
//   };

//   //answer call on receiver side
//   const answerCall = () => {
//     setCallAccepted(true);
//     const peer = new Peer({ initiator: false, trickle: false, stream });
//     //2 on receiver side
//     //call accepted and send signal to caller
//     peer.on('signal', (data) => {
//       socket.emit('answerCall', { signal: data, to: call.from });
//     });
//     //4 on receiver side
//     peer.on('stream', (currentStream) => {
//       userVideo.current.srcObject = currentStream;
//     });
//     //3 on receiver side
//     peer.signal(call.signal);
//     connectionRef.current = peer;
//   };


//   const leaveCall = () => {
//     setCallAccepted(false);
   
//     if(call.isReceivingCall){
//       socket.emit("callEnded",{to:call.from})
//     }
//     else {
//       socket.emit("callEnded",{to:call.to})
//     }
//     if(connectionRef.current){
//       connectionRef.current.destroy();
//     }
//     setCall({});
//   };

//   const sendMessage = (message) => {
//     if (call.isReceivingCall) {
//       // If the user is receiving a call, send the message to the caller
//       socket.emit('message', { text: message, from: me, to: call.from });
//     } else {
//       // If the user is making the call, send the message to the user being called
//       socket.emit('message', { text: message, from: me, to: call.to });
//     }
//     setMessages([...messages, { text: message, sender: 'me' }]);
//   };


//   return (
//     <SocketContext.Provider value={{
//       call,
//       callAccepted,
//       userVideo,
//       myVideo,
//       stream,
//       me,
//       messages,
//       callUser,
//       leaveCall,
//       answerCall,
//       sendMessage
//     }}
//     >
//       {children}
//     </SocketContext.Provider>
//   );
// };

// const useCallContext = () => useContext(SocketContext);

// export { useCallContext ,CallContextProvider, SocketContext };


'use client'
import React, { createContext, useState, useRef, useEffect, useContext } from 'react';
import Peer from 'simple-peer';
import socket from '../lib/CreateSocket';

const SocketContext = createContext();

const CallContextProvider = ({ children }) => {

    const [me, setMe] = useState('');
    const [call, setCall] = useState({});
    const [stream, setStream] = useState();
    const [callAccepted, setCallAccepted] = useState(false);
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const myVideo = useRef();
    const userVideo = useRef();
    const connectionRef = useRef();

    const startWebCam = () => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then((currentStream) => {
            setStream(currentStream);
            if(myVideo.current){
                myVideo.current.srcObject = currentStream;
            }
        });
    }

    const stopWebCam = () => {
        if(stream){
            stream.getTracks().forEach(function(track) {
                track.stop();
            });
            myVideo.current.srcObject = null;
        }
    }

    useEffect(() => {
        startWebCam();
    },[])

    useEffect(() => {
        setMe(socket.id);
    },[])

    useEffect(() => {  
        socket.on('me', (id) => setMe(id));
        socket.on('callEnded',()=>{
            setCallAccepted(false);
            setCall({});
            if(connectionRef.current){
                connectionRef.current.destroy();
            }
        });
    },[])

    useEffect(() => {
        socket.on('message', ({ text, from }) => 
            setMessages([...messages, { text, sender: from === me ? 'me' : 'user' }])
        );
    },[messages])


    const wantToConnect = () => {
        setLoading(true);
        socket.emit('wantToConnect',{
            id: socket.id,
        })
        socket.on('userFound',(id,initiator)=>{
            makeCall(id,initiator)
        })
    }

    const makeCall = (id,initiator) => {
        if (connectionRef.current) {
            connectionRef.current.destroy();
        }
        socket.off('acceptCall');

        const peer = new Peer({initiator: initiator, trickle: false, stream: stream});
        peer.on('signal',(data)=>{
            socket.emit('joinCall',{signalData: data, id: id});
        })
        peer.on('stream',(currentStream)=>{
            userVideo.current.srcObject = currentStream;
            console.log('streaming ', userVideo);
        })
        socket.on('acceptCall',(signal)=>{
            console.log('accepting call ',signal);
            peer.signal(signal);
            setCall({isReceivingCall: initiator, id: id});
            setCallAccepted(true);
            setMessages([{text:'You connected to the person✨. You can start your conversation',sender:'user'}]);
            setLoading(false);
        })
        connectionRef.current = peer;
    }

    const leaveCall = () => {
        setCallAccepted(false);
        socket.emit('callEnded',call.id);
        setCall({});
        if(connectionRef.current){
            connectionRef.current.destroy();
        }
        socket.off('acceptCall');
    };

    const sendMessage = (message) => {
        if (call.isReceivingCall) {
            socket.emit('message', { text: message, from: me, to: call.id });
        } else {
            socket.emit('message', { text: message, from: me, to: call.id });
        }
        setMessages((m)=> [...m, { text: message, sender: 'me' }]);
    };

    return (
        <SocketContext.Provider value={{
            me,
            call,
            callAccepted,
            userVideo,
            myVideo,
            stream,
            messages,
            loading,
            leaveCall,
            wantToConnect,
            sendMessage,
            startWebCam,
            stopWebCam
        }}
        >
            {children}
        </SocketContext.Provider>
    );
};

const useCallContext = () => useContext(SocketContext);
export { useCallContext ,CallContextProvider, SocketContext };
