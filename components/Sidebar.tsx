import React from 'react'
import Brand from './Brand'
import {IoMdSettings} from 'react-icons/io'

function Sidebar() {
  return (
    <div className='flex flex-col-reverse bg-[#FFF7EE] w-[200px] h-[calc(100vh-60px)]'>
        <div className='flex space-x-4 p-4 items-center'>
            <IoMdSettings className='text-2xl' />
            <p>Settings</p>
        </div>
  </div>
  )
}

export default Sidebar