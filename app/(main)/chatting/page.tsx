import React, { use } from 'react'
import Sidebar from '@/components/Sidebar'
import Vichat from '@/components/Vichat'
import { CallContextProvider } from '@/context/CallContext'
import Link from 'next/link'

function Chatting() {

  return (
    <div className='flex flex-col'>

      <div className='flex flex-row items-center h-[60px] border border-b-2 shadow-lg'>

        <div className='flex items-center justify-start gap-4 m-2 flex-auto pl-4 p-3'>       
          <h1 className={`text-orange-400 font-bold md:ml-4 text-3xl `}>Omeglerr</h1>
          <h3 className='hidden sm:block italic font-bold'>Talk with Strangers</h3>
        </div>

        <div className='flex lg:w-2/3 justify-center items-center gap-4 m-2'>
          <Link href={'/'} className='hover:underline text-orange-600'>Home</Link>
          <Link href={'/about'} className='hover:underline text-orange-600'>About</Link>
          <Link href={'/text'} className='hover:underline text-orange-600'>Text-Chat</Link>

          <button className='hidden md:block p-2 bg-orange-500 mr-2 text-white rounded-lg'
            >Next Room/ Spacebar 
          </button>
        </div>

      </div>

      <div className='h-[calc(100vh-60px)] w-full flex flex-col md:flex-row flex-wrap'>
        <CallContextProvider>
          <Sidebar />
          <Vichat />
        </CallContextProvider>
      </div>

    </div>
  )
}

export default Chatting;