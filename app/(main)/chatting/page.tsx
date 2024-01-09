import React, { use } from 'react'
import Sidebar from '@/components/Sidebar'
import Vichat from '@/components/Vichat'
import { CallContextProvider } from '@/context/CallContext'
import Header from '@/components/Header'
import Link from 'next/link'

function Chatting() {

  return (
    <div className='flex flex-col'>

      <Header />

      <div className='h-[calc(100vh-60px)] w-full flex flex-col md:flex-row flex-wrap'>
        <CallContextProvider>
          <Sidebar width={'w-1/4'} />
          <Vichat />
        </CallContextProvider>
      </div>

    </div>
  )
}

export default Chatting;