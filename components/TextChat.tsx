import React from 'react'
import Sidebar from './Sidebar'
import {TextChatContextProvider} from '@/context/TextChatContext'
import TextChatBox from './TextChatBox'

function TextChat() {
  return (
    <div className='h-[calc(100vh-60px)] w-full flex flex-row '>
        <Sidebar width={'w-1/3'}/>
        <TextChatContextProvider>
            <TextChatBox />
        </TextChatContextProvider>
    </div>
  )
}

export default TextChat