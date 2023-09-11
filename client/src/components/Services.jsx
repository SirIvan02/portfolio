import React from 'react'

export default function Services() {
  return (
    <div className='2xl:h-screen' id='MyServices'>
        <div className='text-center mt-6'>
            <h2 className='text-6xl font-bold p-2 text-[#ff8c42]'>My Services</h2>
            <span className='text-lg font-light text-gray-600'>What i offer</span>
        </div>
        <div className='absolute w-[400px] h-[400px] bg-[#ff8c42] rounded-full lg:block hidden'></div>
        <div className='md:flex justify-center p-8 text-xl text-stone-700'>
            <div className='w-64 h-96 border-2 rounded-lg drop-shadow-md text-center bg-white p-8 m-10'>
                <i class="fa-solid fa-microchip text-4xl"></i>
                <h1 className='text-[#ff8c42] font-medium text-xl'>Technologies I use</h1>
                
                <div className='flex mt-4'>
                    <i class="fa-brands fa-react text-xl"></i>
                    <p className='pl-2'>React</p>
                </div>
                <div className='flex mt-4'>
                    <i class="fa-brands fa-css3-alt text-xl "></i>
                    <p className='pl-2'>css</p>
                </div>
                <div className='flex mt-4'>
                    <i class="fa-brands fa-html5 text-xl "></i>
                    <p className='pl-2'>html</p>
                </div>
                <div className='flex mt-4'>
                    <i class="fa-brands fa-square-js text-xl "></i>
                    <p className='pl-2'>Javascript</p>
                </div>
            </div>

            <div className='w-64 border-2 rounded-lg drop-shadow-md bg-white p-8 m-10'>
                <div className='text-center'>
                    <i class="fa-solid fa-laptop-code text-4xl"></i>
                    <h1 className='text-[#ff8c42] font-medium text-xl '>Web Designer</h1>
                </div>

                <div className='flex mt-4'>
                  <i class="fa-solid fa-circle-check mt-2"></i>
                  <p className='pl-2'>user-frendly website </p>
                </div>
                <div className='flex mt-4'>
                  <i class="fa-solid fa-circle-check mt-2"></i>
                  <p className='pl-2'>captivating style</p>
                </div>
                <div className='flex mt-4'>
                  <i class="fa-solid fa-circle-check mt-2"></i>
                  <p className='pl-2'>Social Media Integration</p>
                </div>
            </div>

            <div className='w-64 border-2 rounded-lg drop-shadow-md bg-white p-8 m-10'>
              <div className='text-center'>
                <i class="fa-regular fa-object-group text-4xl"></i>
                <h1 className='text-[#ff8c42] font-medium text-xl'>Visual Designer</h1>
              </div>

                <div className='flex mt-4'>
                  <i class="fa-solid fa-palette mt-2"></i>
                  <p className='pl-2'>Palette Matched</p>
                </div>
                <div className='flex mt-4'>
                  <i class="fa-solid fa-circle-check mt-2"></i>
                  <p className='pl-2'>UI/UX Design</p>
                </div>
                <div className='flex mt-4'>
                  <i class="fa-solid fa-circle-check mt-2"></i>
                  <p className='pl-2'>Responsive Design</p>
                </div>
            </div>
            
        </div>
      
    </div>
  )
}
