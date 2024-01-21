"use client"
import React from 'react'
import Brand from '@/components/Brand'
import Link from 'next/link'
import { useModal } from '@/hooks/use-modal-store'
import Image from 'next/image'

function Home() {

  const { onOpen } = useModal(); 

  return (
    <div className='w-full h-full'>

      <Brand />
      <div className='text-center mt-2'>
        <p className='text-[#5f6d80] italic '>The most trustable Online Chatting Platform to help people connect <span className='font-bold'>anonymously</span> </p>
      </div>
      
    
      <div className='w-full md:w-3/4 m-auto p-2'>
        <h4 className='italic text-[##5f6d80] text-lg font-extralight'>
          Omeglerr is a free chat room and Video Calling room that allows you to connect with millions of people anonymously. No login is required, just start chatting with single click.
        </h4>
      </div>

      <div className='flex justify-center gap-5'>
        <button className='bg-[#3c99fc] text-white rounded-md p-3 font-bold'
          onClick={()=>onOpen('terms',"text")}
        >
          Chat Online
        </button>
        <button className='bg-[#3c99fc] text-white rounded-md p-3 font-bold'
          onClick={()=>onOpen('terms',"vichat")}
        >
          Video Chat Online 
        </button>
      </div>

      <div className='flex flex-col lg:flex-row w-full lg:h-1/2 p-4 md:px-16 gap-5'>
        
        <div className='w-full lg:w-1/2 h-full lg:h-1/2'>
          <div className='w-full h-full content'/>
        </div>
          
        <div className='w-full h-full lg:w-1/2 lg:h-1/2'>
            <div className='mx-auto w-full h-full rounded-lg border shadow-2xl bg-white '>
              <div className='flex flex-col items-center bg-gray-100 border-none p-2'>
                <Image src={'/chat.jpg'} width={200} height={200} alt='Make_friends' className='rounded-xl'/>
              </div>
              <div className='text-center p-2 mt-5'>
                <h1 className='text-orange-600 font-bold text-xl'>Make new Friends ! </h1>
                <p className='text-gray-500 '>Talk with strangers  <span className='font-bold'>anonymously</span> and Make your new friends !
                  <br /> Where video calling meets genuine connections. Here, privacy isn't just a policy, It's a <span className='font-bold'>Promise. </span>Our platform offers the magic of random connections, wrapped in the security of absolute privacy.
                </p>
              </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center mt-4 gap-1'>
        <Link href={'/terms'} style={{textDecoration:"underline", color:"blue" }}>Terms of Use </Link>
        <Link href={'/privacy'} style={{textDecoration:"underline", color:"blue" }}>Privacy Policy</Link>
        <p className='text-sm text-gray-400'>© 2024 Omeglerr.com. All rights reserved.</p>
      </div>
     </div>
  )
}

export default Home;