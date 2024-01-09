import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <div className='flex flex-row items-center h-[60px] border border-b-2 shadow-lg'>
        <div className='flex items-center justify-center gap-4 flex-auto pl-4 p-3'>       
          <h1 className={`text-orange-400 font-bold md:ml-4 text-3xl `}>Omeglerr</h1>
          <h3 className='hidden sm:block italic font-bold'>Talk with Strangers</h3>
        </div>

        <div className='flex h-full lg:w-2/3 justify-center items-center gap-4'>
            <div className='flex-1 flex h-full items-center justify-center gap-2 md:gap-8'>
                <Link href={'/'} className='hover:bg-slate-100 text-orange-600 p-4'>Home</Link>
                <Link href={'/chatting'} className=' hover:bg-slate-100 text-orange-600 p-4'>ViChat</Link>
                <Link href={'/text'} className=' hover:bg-slate-100 text-orange-600 p-4'>Text</Link>
            </div>

          <button className='hidden md:block p-4 bg-orange-500 text-white'
            >Next Room/ Spacebar 
          </button>
        </div>
    </div>
  )
}

export default Header