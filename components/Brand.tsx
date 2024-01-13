import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

interface BrandProps {
    className?: string

}

function Brand() {
  return (
    <div className='flex flex-col items-center p-4 '>
      <div className='flex justify-center items-center gap-2 mb-3'>
        <Image src={'/omegler.png'} alt='Omeglerr-logo' height={5} width={31} className='w-auto h-auto'/>
        <Link href={'/'}><h1 className={`text-orange-400 font-bold text-4xl`}>Omeglerr <span className='text-sm'>.com</span> </h1></Link>
      </div>
      <h3 className='text-slate-400'>Connecting Lives, Connecting minds beyond borders</h3>
    </div>
    
  )
}

export default Brand