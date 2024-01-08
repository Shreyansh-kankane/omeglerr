'use client'
import React from 'react';
import { CiVideoOff, CiMicrophoneOff } from 'react-icons/ci';
import { useCallContext } from '@/context/CallContext';

function VideoPlayer() {
  const { callAccepted, myVideo, stream,userVideo } = useCallContext();

  return (
    <div  className="h-2/4 w-full md:h-full flex-1 p-2 overflow-hidden relative">

      {/* My vedio  */}
      <div 
        className={` 
        ${callAccepted ?  'absolute top-0 right-0 w-1/4 h-1/4 z-10': 'w-full object-fill mb-2 p-0'}

        `}
      >
        {stream &&
          <video muted playsInline autoPlay ref={myVideo} className='max-md:h-full mx-auto' ></video>
        }
      </div>

      {/* User Vedio */}
      {callAccepted && <div
        className='absolute top-0 left-0 h-full w-full'
      >
        <video muted playsInline autoPlay ref={userVideo} className='w-full object-fill'></video>

      </div> }

    </div>

  )};

export default VideoPlayer; 