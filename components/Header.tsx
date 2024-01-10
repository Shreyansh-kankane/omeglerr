'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTextChatContext } from '@/context/TextChatContext'
import { useCallContext } from '@/context/CallContext'

function Header() {
    const pathname = usePathname();
    
    if(pathname === '/text'){
        var {callAccepted, loading,wantToConnect,leaveCall} = useTextChatContext();
    }
    if(pathname === '/vichat'){
        var {callAccepted, loading,wantToConnect,leaveCall} = useCallContext();
    }

  return (
    <div className='flex flex-row items-center h-[60px] border border-b-2 shadow-lg'>
        <div className='flex items-center justify-center gap-4 flex-auto pl-4 p-3'>   
          <Link href={'/'}><h1 className={`text-orange-400 font-bold md:ml-4 text-3xl `}>Omeglerr</h1></Link>    
          <h3 className='hidden sm:block italic font-bold'>Talk with Strangers</h3>
        </div>

        <div className='flex lg:w-2/3 justify-center items-center gap-4'>
            <div className='flex-1 flex items-center justify-center rounded-sm gap-0 sm:gap-2 md:gap-8'>
                <Link href={'/'} className={`${pathname==='/'? 'bg-slate-200 ': ''} hover:bg-slate-100   text-orange-600 p-4`}>Home</Link>
                <Link href={'/vichat'} className={`${pathname==='/vichat'? 'bg-slate-200 ': ''} hover:bg-slate-100   text-orange-600 p-4`}>ViChat</Link>
                <Link href={'/text'} className={`${pathname==='/text'? 'bg-slate-200': ''} hover:bg-slate-100   text-orange-600 p-4`}>Text</Link>
            </div>

          <button className={`hidden md:block p-4 bg-orange-500 text-white ${loading ? 'bg-orange-400/35': ''} `}
            disabled={loading}
            onClick={
                () =>{
                    if(!callAccepted && !loading){
                        wantToConnect();
                    }
                    if(callAccepted && !loading){
                        leaveCall();
                        wantToConnect();
                    }
                } 
            }
            >Next Room/ Spacebar 
          </button>

        </div>
    </div>
  )
}

export default Header