import React from 'react'
import Header from '@/components/Header'
import TextChat from '@/components/TextChat'


function page() {
  return (
    <div className='h-full w-full flex flex-col flex-wrap'>
      <Header />
      <TextChat />
    </div>
  )
}

export default page