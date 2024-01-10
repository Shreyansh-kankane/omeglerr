import React from 'react'
import Sidebar from './Sidebar'

import TextChatBox from './TextChatBox'

function TextChat() {
  return (
    <div className='h-[calc(100vh-60px)] w-full flex flex-row '>
        <Sidebar width={'w-1/3'}/>
        <TextChatBox />
    </div>
  )
}

export default TextChat