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
    <div className="max-w-md w-[340px] border-l shadow-sm h-[calc(100vh-60px)] relative">
      <div className='m-2'>
        <select name="" id="">
          <option value="eng">English</option>
          <option value="hin">Hindi</option>
          <option value="tel">Telugu</option>
          <option value="tam">Tamil</option>
        </select>
      </div>

      <div className='max-h-[80vh] flex flex-col-reverse '>
        <div className='overflow-auto no-scrollbar '>
          {messages?.map((message, index) => (
            <Message key={index} text={message.text} sender={message.sender} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <ChatInput />
    </div>
  );
};

export default ChatApp;
