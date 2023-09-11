import React, { useState } from 'react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleDropdownClick = () => {
      setIsOpen(!isOpen);
    }

  return (
    <div className='grid grid-rows-2 grid-flow-col relative'>
        <div className='row-span-2 col-span-12 md:m-8 m-2'>
            <div>
                <span className='mx-4 text-xl'>I</span><span className='mx-3 text-xl'>V</span><span className='mx-3 text-xl'>A</span><span className='mx-3 text-xl'>N</span>
            </div>
            <div className='font-light'>
                <span className='text-lg'>C</span><span className='mx-2 text-lg'>A</span><span className='mx-2 text-lg'>M</span><span className='mx-2 text-lg'>A</span><span className='mx-2 text-lg'>S</span><span className='mx-2 text-lg'>S</span><span className='mx-2 text-lg'>A</span>
            </div>
        </div>

        <span className='md:hidden block my-4 text-4xl' onClick={handleDropdownClick}>
            {isOpen ? (<i class="fa-solid fa-xmark cursor-pointer right-5 fixed top-6 z-20 transition-all ease-linear duration-500 text-white "></i>) : (<i class="fa-solid fa-bars cursor-pointer transition-all ease-linear duration-500 "></i>)} 
        </span>
        {isOpen && (  
        <div className='md:block md:row-span-2 md:justify-self-end md:m-8 md:bg-transparent md:z-0 h-full bg-[#222222]  z-10 top-0 right-0 fixed transition-all ease-in duration-500'>
            <ul className='md:flex text-xl text-white h-4/6 md:p-0 p-10'>
                <li className='hover:text-black duration-300 mx-4 cursor-pointer md:p-0 p-10'><a href="#AboutMe">About me</a></li>
                <li className='hover:text-black duration-300 mx-4 cursor-pointer md:p-0 p-10'><a href="#MyServices">Services</a></li>   
                <li className='hover:text-black duration-300 mx-4 cursor-pointer md:p-0 p-10'><a href="#ContactMe">Contact me</a></li>   
            </ul>
       
            <div className='mt-20'>
                <div className='flex justify-center'>
                    <h1 className='text-2xl text-[#ff8c42] font-bold p-3'>MY SOCIALS</h1>
                </div>

                <div className='m-auto justify-center h-0.5 w-1/2 bg-white  md:hidden'></div>

                <div>
                  <ol className='flex text-4xl mt-4 justify-center inset-x-0 bottom-0 text-white'>
                    <li className='px-1 mx-4 cursor-pointer bg-[#ff8c42] rounded-full hover:scale-125 hover:shadow-[#ff8c42] shadow-lg duration-300 hover:text-black p-0.5'><a href="https://www.twitter.com/sir_ivan02/" target='_blank' rel="noopener noreferrer"><i class="fa-brands fa-twitter"></i></a></li>
                    <li className='px-1 mx-4 cursor-pointer bg-[#ff8c42] rounded-full hover:scale-125 hover:shadow-[#ff8c42] shadow-lg duration-300 hover:text-black p-0.5'><a href="https://www.instagram.com/sir_ivan_/" target='_blank' rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a></li>
                    <li className='px-1 mx-4 cursor-pointer bg-[#ff8c42] rounded-full hover:scale-125 hover:shadow-[#ff8c42] shadow-lg duration-300 hover:text-black p-0.5'><a href="https://www.linkedin.com/in/ivan-camassa-8b138a1a0/" target='_blank' rel="noopener noreferrer"><i class="fa-brands fa-linkedin-in"></i></a></li>
                    <li className='px-1 mx-4 cursor-pointer bg-[#ff8c42] rounded-full hover:scale-125 hover:shadow-[#ff8c42] shadow-lg duration-300 hover:text-black p-0.5'><a href="https://github.com/SirIvan02" target='_blank' rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a></li> 
                  </ol>
                </div>
             </div>
            </div> 
             )}

         <div  className='md:block md:row-span-2 md:justify-self-end md:m-8 md:bg-transparent hidden'>
            <ul className='md:flex text-xl text-white h-5/6 md:p-0 p-10'>
                <li className='hover:text-black duration-300 mx-4 cursor-pointer md:p-0 p-10'><a href="#ContactMe">Contact me</a></li>   
                <li className='hover:text-black duration-300 mx-4 cursor-pointer md:p-0 p-10'><a href="#AboutMe">About me</a></li>
                <li className='hover:text-black duration-300 mx-4 cursor-pointer md:p-0 p-10'><a href="#MyServices">Services</a></li>   
            </ul>

            </div> 
    </div>
  )
}

export default Navbar