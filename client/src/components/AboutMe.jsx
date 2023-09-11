import React from 'react'
import img from'../aboutme.jpg'
export default function AboutMe() {
  return (
    <div className='2xl:h-screen' id='AboutMe'>
      <div className='lg:mt-10'>
      <div className='absolute w-[150px] h-[150px]  bg-[#ff8c42] rounded-full right-0 lg:w-[300px] lg:h-[300px]'></div>
        <div className='text-center p-10 relative'>
            <h2 className='sm:text-8xl text-5xl font-bold p-2 text-[#ff8c42]'>About <span className='sm:text-[#ff8c42]  text-white relative lg:0 ml-6'>Me</span></h2>
            <span className='lg:text-lg sm:text-3xl font-light text-gray-600'>My introduction</span>
        </div>
        <div className='lg:flex justify-center lg:mt-20'>
            <div className=''>
               <img src={img} alt="" width={400} className='drop-shadow-md  rounded-[20px] scale-90 lg:scale-110'/>
            </div>
            <div className='lg:row-span-2 lg:col-span-2 lg:w-2/6 lg:ml-10 ml-5 flex mt-2 lg:mt-0 text-lg'>
                <p className='tracking-wide italic text-gray-700 '>I was born in 02 in the south of Italy, where from a young age, 
                  I cultivated an immense passion for the world of computers and technology. 
                  My first encounter with the magical universe of PCs happened at the tender age of 8 when I immersed myself in
                   the fantastic world of Minecraft and other thrilling video games.<br />
                  From that moment on, I knew I had discovered something extraordinary, and since then, I have never stopped exploring
                   and learning everything about computers and programming. Driven by curiosity and a thirst for knowledge, 
                   I spent hours studying, experimenting, and honing my computer skills.
                </p>
            </div>
        
          </div>
        </div>
    </div>
  )
}
