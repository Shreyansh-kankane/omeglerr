'use client'
import React, { useRef, useEffect } from 'react';
import Message from './Message';
import TextChatInput from './TextChatInput';
import { useTextChatContext } from '@/context/TextChatContext';

interface TextMessage {
    text: string;
    sender: "me"| "user";
}


const TextChatBox = () => {

    const messagesEndRef = useRef<HTMLDivElement>(null); // Add type annotation to useRef
    const { messages,loading,callAccepted }: {messages: TextMessage[],loading: boolean,callAccepted:boolean} = useTextChatContext();

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
  }, [messages]);


  return (
    <div className="h-full w-full border-l shadow-md flex flex-col-reverse relative">

        <TextChatInput />

        <div className='min-w-fit mb-14 overflow-auto'>

            <div className='w-full flex flex-col'>
            {messages?.map((message, index) => (
                <Message key={index} text={message.text} sender={message.sender} />
            ))}
            <div ref={messagesEndRef} />
            
            </div>

        </div>

        <div className='absolute top-0 left-0 w-full flex items-center justify-center bg-white p-2 z-2'>
            {!loading && !callAccepted && 
                    <p className='text-slate-400 text-lg'>Click on New to connect people</p>
            }
            { loading && !callAccepted && 
                <p className='text-slate-400 text-lg'>Connecting... Please Wait !</p>
            }
            { callAccepted &&
                <div className='text-slate-400 text-lg'><div className='inline-block rounded-full w-3 h-3 bg-green-600'/> Status: Connected </div> 
            }
        </div>
    </div>
  );
};

export default TextChatBox;
