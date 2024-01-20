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
            setMessages((prev)=> [...prev,{text:'Sorry User has left the chat, Lets find other mate 😃, click new to continue!',sender:'user'}]);
            if(connectionRef.current){
                connectionRef.current.destroy();
            }
        });
    },[])

    useEffect(() => {
        const handleBeforeUnload = () => {
            if(call.id !== '' && call.id !== null && call.id !== undefined){
                socket.emit('callEnded', call.id);
            }
            connectionRef.current.destroy();
        };
        // const handleKeyDown = (event) => {
        //     if(event.keyCode === 32){
        //         if(callAccepted && !loading){
        //             leaveCall();
        //             wantToConnect();
        //         }
        //         else if(!callAccepted && !loading){
        //             wantToConnect();
        //         }
        //     }
        // }

        if(typeof window !== 'undefined'){
            window.addEventListener('beforeunload', handleBeforeUnload);
            // window.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            if(typeof window !== 'undefined'){
                window.removeEventListener('beforeunload', handleBeforeUnload);
                // window.addEventListener('keydown', handleKeyDown);
            }
        }
    }, [call]);

    useEffect(() => {
        socket.on('message', ({ text, from }) => 
            setMessages([...messages, { text, sender: from === me ? 'me' : 'user' }])
        );
    },[messages])


    const wantToConnect = () => {
        setLoading(true);
        setMessages([]);
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
        })
        socket.on('acceptCall',(signal)=>{
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
        if(call.id){
            socket.emit('callEnded',call.id);
        }
        setCall({});
        if(connectionRef.current){
            connectionRef.current.destroy();
        }
        setMessages([]);
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
