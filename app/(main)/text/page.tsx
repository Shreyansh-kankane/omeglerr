import React from 'react'
import Header from '@/components/HeaderText'
import TextChat from '@/components/TextChat'
import {TextChatContextProvider} from '@/context/TextChatContext'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chatting - Omeglerr',
  description: 'Chat with people | talk with stranger | chatting with people | free chat',
}

function page() {
  return (
    <div className='h-full w-full flex flex-col flex-wrap'>
      <TextChatContextProvider>
        <Header />
        <TextChat />
      </TextChatContextProvider>
    </div>
  )
}

export default page