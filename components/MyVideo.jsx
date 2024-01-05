'use client'
import React from 'react'
import {useCallContext} from '@/context/CallContext'

function MyVedio() {
    const { stream, myVideo } = useCallContext();

  return (
    stream && <video
        className="h-full w-full p-0 rounded-lg border-1 shadow-xl"
        playsInline
        muted
        ref={myVideo}
        autoPlay
    />
  )
}

export default MyVedio