import React from 'react'
import {IoMdSettings} from 'react-icons/io'
import Image from 'next/image'

function Sidebar() {
  return (
    <div className='hidden md:flex items-center justify-center  w-1/4 bg-[#FFF7EE] overflow-hidden'>
      {/* card */}
      <div className='w-full h-2/3 m-3 p-4 rounded-md border shadow-xl bg-white '>
        <div className='flex flex-col items-center bg-gray-100 border-none p-2'>
          <Image src={'/chat.jpg'} width={200} height={200} alt='' className='rounded-xl'/>
        </div>
        <div className='text-center p-2 mt-5'>
          <h1 className='text-orange-600 font-bold text-xl'>Start Chat free </h1>
          <p className='text-gray-500 '>Talk with strangers anonymously and make your new friends !</p>
          <p className='text-gray-500 '>On one click</p>
        </div>
      </div>


    </div>
  )
}

export default Sidebar


{/* <div className='flex flex-col h-full items-center justify-center gap-4 transform -rotate-45'>   
    <div className='leading-relaxed '>
      <h1 className={`text-orange-400 font-bold md:ml-4 text-5xl leading-tight text-center`}>Omeglerr</h1>
      <h1 className='hidden sm:block italic font-bold text-xl text-center'>Talk with Strangers</h1>
    </div>
    <p className='text-gray-400 '>Click Spacebar for next-room</p>
  </div> */}