import React from 'react'
import { BiSolidHide } from "react-icons/bi"
import { CiVideoOff } from "react-icons/ci"
import { CiVideoOn } from "react-icons/ci"
import { CiMicrophoneOff } from "react-icons/ci";
import { CiMicrophoneOn } from "react-icons/ci";

function VedioChat() {
  return (
    <div className='h-[calc(95vh-60px)] m-4'>
      <div className='h-1/2 border-2 rounded-xl relative'>
        <div className='absolute top-2 left-4 bg-slate-200 p-2 rounded-lg '> 
            <button className='flex flex-row space-x-2'>
              <p>Video Enabled</p>
              <BiSolidHide className='text-2xl'/>
            </button>
          </div>

          {/* <div className='absolute bottom-3 w-full flex justify-center gap-3'>
            <button 
              className='border-2  rounded-full p-2 text-[#ab5438] flex items-center justify-center'>
              <CiVideoOff className='text-2xl'/>
            </button>
            <button 
            className='border rounded-full p-2 text-[#ab5438] flex items-center justify-center'>
              <CiMicrophoneOff className='text-2xl'/>
            </button>
          </div> */}

      </div>

      <div className='h-1/2 border-2 rounded-xl mt-2 relative'>
        <div className='absolute top-2 left-4 bg-slate-200 p-2 rounded-lg '> 
            <button className='flex flex-row space-x-2'>
              <p>Video Enabled</p>
              <BiSolidHide className='text-2xl'/>
            </button>
          </div>

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

export default VedioChat