import React from 'react'
import Sidebar from '@/components/Sidebar'
import Brand from '@/components/Brand'
import {IoMdSettings} from 'react-icons/io'
import Video from '@/components/Video'
import Chat from '@/components/Chat';


function Chatting() {
  return (
    <div className='flex flex-col'>

      {/* Header */}
      <div className='flex flex-row items-center h-[60px] border border-b-2 shadow-lg justify-between'>
        <div className='flex items-center'>
          <Brand className='text-2xl'/> 
          <h3 className='italic font-light'>Talk with Strangers</h3>
        </div>
        <div>
          <button 
            className='p-2 bg-orange-500 mr-2 text-white rounded-lg'
          >Next Room/ Spacebar </button>
        </div>
      </div>

      {/* Body */}
      <div className='flex'>
        <Sidebar />
        <div className='flex-1 flex overflow-y-hidden'>
          <div className='flex-1'>
            <Video />
          </div>
          <div className='overflow-auto'>
            <Chat />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Chatting