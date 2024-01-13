import React, { useRef } from 'react';
import { IoMdSend } from 'react-icons/io';
import { useTextChatContext } from '@/context/TextChatContext';
import { useState } from 'react';

const TextChatInput = () => {
  const [escape, setEscape] = useState(false);
  const { callAccepted, sendMessage,leaveCall,wantToConnect,loading } = useTextChatContext();

  const handleLeaveCall = () => {
    leaveCall();
    setEscape(false);
  }

  const inputRef = useRef<HTMLInputElement>(null);

  const onSendMessage = () => {
    if (inputRef.current?.value.trim() === '') {
      return;
    }
    sendMessage(inputRef.current?.value);
    inputRef.current!.value = '';
  };

  return (
    <div className='flex items-center w-full h-fit p-2 mt-2 space-x-3 absolute bottom-1'>

    { callAccepted && !escape && <button 
          className='bg-slate-400 text-white p-2 rounded-md mt-2'
          onClick={e=> setEscape(prev=>!prev)}
        >
          Stop
        </button> 
    }
  
      {callAccepted && escape && <button 
            className='bg-slate-200 text-black p-2 rounded-md mt-2'
            onClick={handleLeaveCall}
          >
            Esc?
          </button> 
      }


    {loading && <button className='bg-slate-100 text-black p-2 rounded-md mt-2 '>
        Connecting...
      </button>
    }

    { !callAccepted && !loading && <button 
        className='bg-sky-500 text-white p-2 w-1/4 rounded-md mt-2'
        onClick={wantToConnect}
      >
        New
    </button>

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
      <IoMdSend className='text-2xl text-[#5f6d80] cursor-pointer min-w-8' onClick={onSendMessage} />
      
    </div>
  );
};

export default TextChatInput;

