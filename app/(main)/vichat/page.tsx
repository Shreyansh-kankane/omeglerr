import React, { use } from 'react'
import Sidebar from '@/components/Sidebar'
import Vichat from '@/components/Vichat'
import { CallContextProvider } from '@/context/CallContext'
import Header from '@/components/HeaderViChat'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ViChat - Omeglerr',
  description: 'free video calling | talk with stranger | video call | random call',
}


function Chatting() {

  return (
    <div className='flex flex-col'>
        <CallContextProvider>
        <Header />
        <div className='h-[calc(100vh-60px)] w-full flex flex-col md:flex-row flex-wrap'>
            <Sidebar width={'w-1/4'} />
            <Vichat />
        </div>
        </CallContextProvider>
    </div>
  )
}

export default Chatting;