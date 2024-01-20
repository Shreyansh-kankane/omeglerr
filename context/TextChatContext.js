'use client'
import React, { createContext, useState, useEffect, useContext } from 'react';

import socket from '../lib/CreateTextChatSocket';

const TextSocketContext = createContext();

const TextChatContextProvider = ({ children }) => {

    const [me, setMe] = useState('');
    const [user, setUser] = useState('');
    const [callAccepted, setCallAccepted] = useState(false);
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setMe(socket.id);
    },[])

    useEffect(() => {  
        socket.on('me', (id) => setMe(id));
        socket.on('callEnded',()=>{
            setCallAccepted(false);
            setUser('');
            setMessages((prev)=> [...prev,{text:'Sorry User has left the chat, Lets find other mate 😄, click new to continue!',sender:'user'}]);
        });
    },[])

    useEffect(() => {
        const handleBeforeUnload = () => {
            if(user !== '' && user !== null && user !== undefined){
                // console.log('call ended before unload');
                socket.emit('callEnded', user);
            }
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
                // window.removeEventListener('keydown', handleKeyDown);
            }
        }
    }, [user]);

    useEffect(() => {
        socket.on('message', ({ text, from }) => 
            setMessages([...messages, { text, sender: from === me ? 'me' : 'user' }])
        );
    },[messages])


    const wantToConnect = () => {
        setLoading(true);
        setMessages([]);
        // console.log('want to connect id: ',socket.id);
        socket.emit('wantToConnect',{
            id: socket.id,
        })
        socket.on('userFound',(id)=>{
            // console.log('user found id: ',id);
            makeCall(id)
        })
    }

    const makeCall = (id) => {
        // console.log('make call id: ',id);
        socket.emit('joinCall',{id: id})

        socket.on('acceptCall',()=>{
            // console.log('accept call id: ',id);
            setUser(id)
            setCallAccepted(true);
            setMessages([{text:'You connected to the person✨. You can start your conversation',sender:'user'}]);
            setLoading(false);
        })
    }

    const leaveCall = () => {
        // console.log("leaveCall")
        setCallAccepted(false);
        if(user !== '' && user !== null && user !== undefined) socket.emit('callEnded',user);
        setUser('');
        socket.off('acceptCall');
        setMessages([]);
    };

    const sendMessage = (message) => {
        socket.emit('message', { text: message, from: me, to: user });
        setMessages((m)=> [...m, { text: message, sender: 'me' }]);
    };

    return (
        <TextSocketContext.Provider value={{
            callAccepted,
            messages,
            loading,
            leaveCall,
            wantToConnect,
            sendMessage,
        }}
        >
            {children}
        </TextSocketContext.Provider>
    );
};

const useTextChatContext = () => useContext(TextSocketContext);

export { useTextChatContext,TextChatContextProvider };
