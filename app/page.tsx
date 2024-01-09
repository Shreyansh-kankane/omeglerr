"use client"
import React from 'react'
import Brand from '@/components/Brand'
import Navbar from '@/components/Navbar'

import { useModal } from '@/hooks/use-modal-store'

function Home() {

  const { onOpen } = useModal();

  return (
    <div className=''>
      <Brand className='text-5xl text-center'/>
      <div className='text-center mt-2'>
        <p className='text-[#5f6d80] italic '>The most trustable Online Chatting Platform to help people connect anonymmously</p>
      </div>
      <Navbar />
    
      <div className='w-3/4 m-auto p-2'>
        <h4 className='italic text-[##5f6d80] text-lg font-extralight'>
          Omeglerr is a free chat room that allows you to connect with millions of people anonymously. No login is required, just start chatting with single click.
        </h4>
      </div>

      <div className='flex justify-center gap-5'>
        <button className='bg-[#3c99fc] text-white rounded-md p-3 font-bold'
          onClick={()=>onOpen('terms',"text")}
        >
          Chat Online
        </button>
        <button className='bg-[#3c99fc] text-white rounded-md p-3 font-bold'
          onClick={()=>onOpen('terms',"video")}
        >
          Vedio Chat Online 
        </button>
      </div>
     </div>
  )
}

export default Home