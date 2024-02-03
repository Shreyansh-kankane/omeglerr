'use client'
import React from 'react'
// import AdsenseComp from './AdsenseComp'
// import {IoMdSettings} from 'react-icons/io'
import Image from 'next/image'

function Sidebar({width}:{width:string}) {
  return (
    <div className={`hidden md:flex flex-col ${width} bg-[#e8ded2] overflow-hidden`}>
      {/* card */}

      {/* <AdsenseComp /> */}

      <div className='w-full h-2/3 m-3 p-4 rounded-md border shadow-xl bg-white'>
        <div className='flex flex-col items-center bg-gray-100 border-none p-2'>
          <Image src={'/chat.jpg'} width={200} height={200} alt='Chatting' className='rounded-xl' priority/>
        </div>
        <div className='text-center p-2 mt-5'>
          <h1 className='text-orange-600 font-bold text-xl'>Start free Chat</h1>
          <p className='text-gray-500 '>Talk with strangers anonymously and make your new friends with one click !</p>
        </div>
        <div className='text-center bg-slate-50 mt-5 italic'>
          <p>Click on New to Start</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

