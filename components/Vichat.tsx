import React from 'react'
import Chat from '@/components/Chat';
import VedioPlayer from '@/components/VideoPlayer';

function Vichat() {
  return (
    <div className='flex-1 flex overflow-y-hidden'>
        <div className='flex-1'>
            <VedioPlayer/>
        </div>
        <div>
            <Chat/>
        </div>
    </div>
  )
}

export default Vichat