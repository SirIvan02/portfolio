import React from 'react'

export default function Footer() {
  return (
    <footer className='xl:mt-72 md:mt-52 bg-[#222222]'>
        <div className='relative text-white'>
            <div className='inset-x-0 bottom-0  mt-24'>
              <div className='md:flex justify-center content-center md:p-8 '>
              <div className='md:w-1/3  '>
                  <h1 className='text-2xl text-[#ff8c42] text-center font-bold'>MY CONTACTS</h1>
                  <ol className='mt-4 grid justify-center'>
                    <li className='mt-2'><i class="fa-solid fa-location-dot"></i> Italy, Apulia, Taranto</li>    
                    <li className='mt-2'><i class="fa-solid fa-phone"></i><a href="tel:+393703720986" className='hover:text-[#ff8c42] duration-300'>+39 370 372 0986</a></li>
                    <li className='mt-2'><i class="fa-regular fa-envelope"></i><a href="mailto:ivancamassa@gmail.com" className=' hover:text-[#ff8c42] duration-300'> ivancamassa@gmail.com</a></li>
                  </ol>
                </div>

                <div className='hidden md:block w-1/3 text-center items-center'> 
                  <h1 className='text-2xl text-[#ff8c42] font-bold'>SOCIAL NETWORKS</h1>
                  <ol className='md:flex hidden text-2xl mt-4 justify-center '>
                    <li className='px-1 mx-4 cursor-pointer bg-[#ff8c42] rounded-full hover:scale-125 hover:shadow-[#ff8c42] shadow-lg duration-300 hover:text-black '><a href="https://www.twitter.com/sir_ivan02/" target='_blank' rel="noopener noreferrer"><i class="fa-brands fa-twitter"></i></a></li>
                    <li className='px-1 mx-4 cursor-pointer bg-[#ff8c42] rounded-full hover:scale-125 hover:shadow-[#ff8c42] shadow-lg duration-300 hover:text-black '><a href="https://www.instagram.com/sir_ivan_/" target='_blank' rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a></li>
                    <li className='px-1 mx-4 cursor-pointer bg-[#ff8c42] rounded-full hover:scale-125 hover:shadow-[#ff8c42] shadow-lg duration-300 hover:text-black '><a href="https://www.linkedin.com/in/ivan-camassa-8b138a1a0/" target='_blank' rel="noopener noreferrer"><i class="fa-brands fa-linkedin-in"></i></a></li>
                    <li className='px-1 mx-4 cursor-pointer bg-[#ff8c42] rounded-full hover:scale-125 hover:shadow-[#ff8c42] shadow-lg duration-300 hover:text-black '><a href="https://github.com/SirIvan02" target='_blank' rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a></li> 
                  </ol>
                </div>

                <div className='md:w-1/3 hidden md:block'>
                  <h1 className='text-2xl text-[#ff8c42] text-center font-bold'>LINK</h1>
                  <ol className='md:mt-4 grid justify-center'>
                    <li className='mt-2 hover:text-[#ff8c42] duration-300'><a href="#Homepage">Homepage</a></li>    
                    <li className='mt-2 hover:text-[#ff8c42] duration-300'><a href="#AboutMe">About me</a></li>
                    <li className='mt-2 hover:text-[#ff8c42] duration-300'><a href="#MyServices">Services</a></li>
                    <li className='mt-2 hover:text-[#ff8c42] duration-300'><a href="#ContactMe">Contact me</a></li>
                  </ol>
                </div>
              </div>

              <div className='text-center font-bold p-7 bg-[#222222]'>
                <h1 className=''>@2023 Ivan Camassa | All rights reserved</h1>
              </div>
            </div>
        </div>
    </footer>
  )
}
