import React, { use } from 'react'
import Sidebar from '@/components/Sidebar'
import Brand from '@/components/Brand'
import Vichat from '@/components/Vichat'
import { CallContextProvider } from '@/context/CallContext'

function Chatting() {

  return (
    <div className='flex flex-col'>

      <div className='flex flex-row items-center h-[60px] border border-b-2 shadow-lg justify-between'>
        <div className='flex items-center'>
          <Brand className='text-2xl'/> 
          <h3 className='italic font-light'>Talk with Strangers</h3>
        </div>
        <button className='p-2 bg-orange-500 mr-2 text-white rounded-lg'
          >Next Room/ Spacebar 
        </button>
      </div>

      <div className='flex'>
        <CallContextProvider>
          <Sidebar />
          <Vichat />
        </CallContextProvider>
      </div>

    </div>
  )
}

export default Chatting;