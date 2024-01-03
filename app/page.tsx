'use client'
import React from 'react'
import Brand from '@/components/Brand'
import Navbar from '@/components/Navbar'
import Button from '@/utils/Button'
import { useRouter } from 'next/router'

function Home() {
  return (
    <div>
      <Brand className='text-5xl text-center'/>
      <div className='text-center mt-2'>
        <p className='text-[#5f6d80] italic '>The most trustable Online Chatting Platform to help people connect anonymmously</p>
      </div>
      <Navbar />
    
      <div className='w-3/4 m-auto p-2'>
        <h4 className='italic text-[##5f6d80] text-lg font-extralight'>
          Omeglee is a free chat room that allows you to connect with millions of people anonymously. No login is required, just start chatting with single click.
        </h4>
      </div>

      <div className='flex flex-row justify-center text-gray-400 m-3'>
        <input type="checkbox" 
          className=''

        />
        <p>By checking you declare that you are above 18 years</p>
      </div>

      <div className='flex justify-center gap-5'>
        <Button className='w-[200px]' >Chat Online</Button>
        <Button className=''>Vedio Chat Online</Button>
      </div>
      
     </div>
  )
}

export default Home