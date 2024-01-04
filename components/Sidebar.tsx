'use client'
import React from 'react'
import {IoMdSettings} from 'react-icons/io'
import { useCallContext } from '@/context/CallContext'
import { useState } from 'react'

function Sidebar() {
  const { me, callAccepted, callEnded, leaveCall, callUser,answerCall, call } = useCallContext();
  const [idToCall, setIdToCall] = useState('');

  return (
    <div className='flex flex-col justify-between bg-[#FFF7EE] w-[200px] h-[calc(100vh-60px)]'>

      <div className=''>
        Your id: <span className='font-bold'>{me}</span>
        <p>Make Call</p>
        <input type="text" 
          value={idToCall}
          onChange={(e) => setIdToCall(e.target.value)}
          className='border border-gray-300 p-1 rounded-md w-full'
          placeholder='Enter ID to call'
        />
        {callAccepted && !callEnded ? (
          <button 
            className='bg-red-500 text-white p-2 rounded-md mt-2'
            onClick={leaveCall} 
          >
            Hang Up
          </button>
        ) : (
          <button 
            className='bg-green-500 text-white p-2 rounded-md mt-2'
            onClick={() => callUser(idToCall)}>
            Call
          </button>
        )}

        {call.isReceivingCall && !callAccepted && (
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <h1>Someone is calling:</h1>
            <button onClick={answerCall}>
              Answer
            </button>
        </div>
      )}

      </div>

      <div className='flex space-x-4 p-4 items-center'>
        <IoMdSettings className='text-2xl' />
        <p>Settings</p>
      </div>

  </div>
  )
}

export default Sidebar