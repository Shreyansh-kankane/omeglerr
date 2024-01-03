'use client'
import React, { useState, ChangeEvent, useRef, useEffect } from 'react';
import { IoMdSend } from 'react-icons/io';

interface Message {
  text: string;
  sender: 'user' | 'system';
}
const dummyMessages: Message[] = [
    {
      text: 'Hello, how are you?',
      sender: 'system',
    },
    {
      text: 'I am fine, thanks!',
      sender: 'user',
    },
    {
      text: 'What is your name?',
      sender: 'system',
    },
    {
      text: 'My name is John Doe',
      sender: 'user',
    },
    {
      text: 'Nice to meet you!',
      sender: 'system',
    },
    {
      text: 'Nice to meet you too!',
      sender: 'user',
    },
    {
        text: 'Hello, how are you?',
        sender: 'system',
      },
      {
        text: 'I am fine, thanks!',
        sender: 'user',
      },
      {
        text: 'What is your name?',
        sender: 'system',
      },
      {
        text: 'My name is John Doe',
        sender: 'user',
      },
      {
        text: 'Nice to meet you!',
        sender: 'system',
      },
      {
        text: 'Nice to meet you too!',
        sender: 'user',
      },
      {
        text: 'Hello, how are you?',
        sender: 'system',
      },
      {
        text: 'I am fine, thanks!',
        sender: 'user',
      },
      {
        text: 'What is your name?',
        sender: 'system',
      },
      {
        text: 'My name is John Doe',
        sender: 'user',
      },
      {
        text: 'Nice to meet you!',
        sender: 'system',
      },
      {
        text: 'Nice to meet you too!',
        sender: 'user',
      },
  
]

const ChatApp: React.FC = () => {
    
  const [messages, setMessages] = useState<Message[]>(dummyMessages);
  const [newMessage, setNewMessage] = useState<string>('');

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the bottom when new messages are added
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '') {
      return;
    }

    const updatedMessages: Message[] = [
      ...messages,
      { text: newMessage, sender: 'user' },
    ];
    setMessages(updatedMessages);
    setNewMessage('');
  };



  return (
    <div className="max-w-md w-[340px] border-l shadow-sm h-[calc(100vh-60px)] relative">

        {/* header select language */}
        <div className='m-2'>
            <select name="" id="">
                <option value="eng">English</option>
                <option value="hin">Hindi</option>
                <option value="tel">Telugu</option>
                <option value="tam">Tamil</option>
            </select>
        </div>

        {/* messages */}
        <div className='max-h-[80vh] flex flex-col-reverse '>
            <div className='overflow-auto no-scrollbar '>
                {messages.map((message, index) => {
                    const sender = message.sender === 'user';

                    return (
                        <>
                        <div key={index}
                            className={`p-2 my-1 w-2/3 m-2 ${
                            !sender ? ' bg-[#a0562b] text-white float-right rounded-tl-lg rounded-bl-lg rounded-tr-lg' : 'bg-gray-300 float-left text-black rounded-tr-lg rounded-tl-lg rounded-br-lg'}

                        `}
                            ref={messagesEndRef}
                        >
                            {message.text}
                        </div>
                    </>
                    )
                })}
            </div>
        </div>

        {/* Input */}
        <div className='flex items-center p-2 space-x-3'>
            <input
                type='text'
                placeholder='Type a message'
                className='w-[90%] p-2 rounded-md border border-gray-300'
                value={newMessage}
                onChange={handleInputChange}
            />
            <IoMdSend 
                className='text-2xl text-[#5f6d80] cursor-pointer'
                onClick={handleSendMessage}
            />
        </div>
    </div>
  );
};

export default ChatApp;
