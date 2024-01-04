import React from 'react';
import { IoMdSend } from 'react-icons/io';
import { useRef } from 'react';
import { useCallContext } from '@/context/CallContext';


const ChatInput = () => {

  const { sendMessage } = useCallContext();

  const inputRef = useRef<HTMLInputElement>(null);

  const onSendMessage = () => {
    if (inputRef.current?.value.trim() === '') {
      return;
    }
    sendMessage(inputRef.current?.value);
  }

  return (
    <div className='flex items-center p-2 space-x-3 absolute bottom-3'>
      <input
        type='text'
        placeholder='Type a message'
        className='w-[90%] p-2 rounded-md border border-gray-300'
        ref={inputRef}
      />
      <IoMdSend className='text-2xl text-[#5f6d80] cursor-pointer' onClick={onSendMessage} />
    </div>
  );
};

export default ChatInput;
