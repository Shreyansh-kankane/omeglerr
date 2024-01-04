'use client'
import { BiSolidHide } from "react-icons/bi"
import { CiVideoOff } from "react-icons/ci"
import { CiVideoOn } from "react-icons/ci"
import { CiMicrophoneOff } from "react-icons/ci";
import { CiMicrophoneOn } from "react-icons/ci";

import { useCallContext } from "@/context/CallContext";

function VedioPlayer() {

  const {me, callAccepted, myVideo, userVideo, callEnded, stream } = useCallContext();

  return (
    <div className='h-[calc(95vh-60px)] w-full m-4 overflow-auto flex flex-col-reverse'>
      <p>Your Id {me}</p>
      <div className='h-1/2 border-2 rounded-xl relative'>
          {callAccepted && !callEnded ? (
            <video className='w-full h-full' playsInline ref={userVideo} autoPlay muted/>
          ) : 
          null}
      </div>

      <div className='h-1/2 w-full border-2 rounded-xl mt-2 relative'>
        {stream && (
          <video className='w-full h-full' playsInline muted ref={myVideo} autoPlay />
        )}
        
        <div className='absolute bottom-3 w-full flex justify-center gap-3'>
          <button 
            className='border-2  rounded-full p-2 text-[#ab5438] flex items-center justify-center'>
            <CiVideoOff className='text-2xl'/>
          </button>
          <button 
          	className='border rounded-full p-2 text-[#ab5438] flex items-center justify-center'>
            <CiMicrophoneOff className='text-2xl'/>
          </button>
        </div>
      </div>

    </div>
  )
}

export default VedioPlayer;



// <div className='absolute top-2 left-4 bg-slate-200 p-2 rounded-lg '> 
// <button className='flex flex-row space-x-2'>
//   <p>Video Enabled</p>
//   <BiSolidHide className='text-2xl'/>
// </button>
// </div>