"use client"
import React from 'react'
import Link from 'next/link'
import { useTextChatContext } from '@/context/TextChatContext';
import { useRouter } from 'next/navigation';

function Header() {

    const router = useRouter();

    const {callAccepted, loading,wantToConnect,leaveCall} = useTextChatContext();
    
    const handleClick = () => {
        if(!callAccepted && !loading){
            wantToConnect();
        }
        else if(callAccepted && !loading){
            leaveCall();
            wantToConnect();
        }
    }

    const handleHomeClick = () => {
      leaveCall();
      router.push('/');
    }

  return (
    <div className='flex flex-row items-center h-[60px] border border-b-2 shadow-lg'>
        <div className='flex items-center justify-center gap-4 flex-auto pl-4 p-3'>   
          <Link href={'/'}><h1 className={`text-orange-400 font-bold md:ml-4 text-3xl `}>Omeglerr <span className='text-xs' >.com</span></h1></Link>    
          <h3 className='hidden sm:block italic font-bold'>Talk with Strangers</h3>
        </div>

        <div className='flex lg:w-2/3 justify-end items-center gap-2'>

          <div className=''>
            <button 
              className='p-4 bg-orange-100 rounded-lg'
              onClick={handleHomeClick}
            > Home </button>
          </div>
          
          <button className={`p-4 bg-orange-500 text-white ${loading ? 'bg-orange-400/35': ''} `}
            disabled={loading}
            onClick={handleClick}
            >Next Room
          </button>

        </div>
    </div>
  )
}

export default Header