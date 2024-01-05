import React from 'react'
import Chat from '@/components/Chat';
import VedioPlayer from '@/components/VideoPlayer';

function Vichat() {
  return (
    <div className='flex-1 h-full w-full flex flex-col sm:flex-row overflow-hidden'>
        <VedioPlayer />
        <Chat />
    </div>
  )
}

export default Vichat