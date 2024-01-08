import React, { useRef } from 'react';
import { IoMdSend } from 'react-icons/io';
import { useCallContext } from '@/context/CallContext';

const ChatInput = () => {
  const { callAccepted, sendMessage,leaveCall,wantToConnect } = useCallContext();

  const inputRef = useRef<HTMLInputElement>(null);

  const onSendMessage = () => {
    if (inputRef.current?.value.trim() === '') {
      return;
    }
    sendMessage(inputRef.current?.value);
    inputRef.current!.value = '';
  };

  return (
    <div className='flex items-center w-full h-fit p-2 mt-2 space-x-3 absolute bottom-0'>

    {
      callAccepted ? (
        <button 
          className='bg-slate-400 text-white p-2 rounded-md mt-2'
          onClick={leaveCall}
        >
          Stop
        </button>
      ) : (
        <button 
          className='bg-sky-500 text-white p-2 rounded-md mt-2'
          onClick={wantToConnect}
        >
          New
        </button>
      )
    }

      <input
        type='text'
        placeholder='Type a message'
        className='w-[90%] p-2 rounded-md border border-gray-300'
        ref={inputRef}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onSendMessage();
          }
        }}
      />
      <IoMdSend className='text-2xl text-[#5f6d80] cursor-pointer' onClick={onSendMessage} />
    </div>
  );
};

export default ChatInput;

