'use client'
import React, { useRef, useEffect } from 'react';
import Message from './Message';
import ChatInput from './ChatInput';
import { useCallContext } from '@/context/CallContext';


const ChatApp = () => {

  const messagesEndRef = useRef(null);
  const { messages } = useCallContext();

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);


  return (
    <div className="h-1/2 w-full sm:w-1/3 sm:h-full border-l shadow-md flex flex-col-reverse overflow-auto relative">

      <ChatInput />

      <div className='min-w-fit mb-14'>

        <div className=''>
          {messages?.map((message, index) => (
            <Message key={index} text={message.text} sender={message.sender} />
          ))}
          <div ref={messagesEndRef} />

        </div>

      </div>

    </div>
  );
};

export default ChatApp;
