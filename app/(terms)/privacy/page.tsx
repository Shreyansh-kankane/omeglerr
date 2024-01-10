import React from 'react'
import type { Metadata } from 'next'

export const metadata:Metadata = {
    title: 'Privacy Policy - Omeglerr',
    description: 'Omeglerr Privacy Policy',
}

function page() {
  return (
        <div className='flex flex-col gap-3 mx-16'>
            <div className='h-80 flex justify-center items-center rounded-lg bg-slate-200'>
                <h1 className='font-bold text-3xl text-slate-500'>Privacy Policy</h1>
            </div> 

            <div className=''>
                <h4 className='text-sm'>This Privacy Policy was last updated on January 1, 2024</h4>
            </div>
            
            <h3 className='italic text-sm'>The highlighted text is aimed to give a plain English summary of our Privacy Policy.</h3>

            <div className='my-4'>
                <h2 className='text-lg font-bold'>What does this policy cover</h2>
                <p className='mt-3'>
                    This Privacy Policy applies to information that we collect about you when you use our websites, and other online products and services (collectively, the “Services”) or when you otherwise interact with us.
                </p>
            </div>

            <div className='my-4'>
                <h2 className='text-lg font-bold'>1. Information we collect</h2>
                <p className='mt-3'> Omeglerr is online platform where user can connect anonymously, We donot store any kind of data related to person that use our platform. </p>
            </div>

        </div>
  )
}

export default page