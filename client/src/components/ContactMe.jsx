import React from 'react'
import Form from './Form'

function ContactMe() {
  return (
    <div className='xl:h-screen' id='ContactMe'>
      <div className='absolute w-[600px] h-[600px] bg-[#ff8c42] rounded-full right-40 hidden md:block'></div>
        <div className='text-center relative '>
            <h2 className='text-6xl font-bold p-2 xl:text-[#ff8c42] text-[#ff8c42] sm:text-white '>Conta<span className='sm:text-white xl:text-[#ff8c42]'>ct <span className='xl:text-white 2xl:text-[#ff8c42]'>Me</span></span></h2>
            <span className='text-lg font-light text-gray-600'>Write me here for anything ;)</span>
            
            <Form />
  
        </div>
    </div>
  )
}

export default ContactMe