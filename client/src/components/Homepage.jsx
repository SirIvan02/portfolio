import React from 'react'
import Navbar from './Navbar'
import logo from '../logo.jpeg';
import TypeWriterEffect from 'react-typewriter-effect';

export default function Homepage() {
  return (
    <div className='xl:h-screen' id='Homepage'>
      <div className='w-full fixed z-20 md:relative'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='absolute'>
            <path fill="#ff8c42" className='scale-125' fill-opacity="1" d="M0,192L120,170.7C240,149,480,107,720,101.3C960,96,1200,128,1320,144L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
        </svg>
        <Navbar />
      </div>

        <div className='lg:flex w-full xl:mt-52 justify-center xl:pt-0 pt-20'>
            <div className='xl:mr-20 lg:ml-0 ml-3 content-center'>
              <span className='font-think text-4xl lg:text-6xl'>Hello, my name is </span>

              <div className='my-5 '>
                <h1 className='text-6xl lg:text-8xl'>Ivan and im </h1>
                <TypeWriterEffect
                  textStyle={{
                  color: '#ff8c42',
                  fontWeight: 500,
                  fontSize: '2.75em',
                }}
                startDelay={2000}
                cursorColor="#3F3D56"
                multiText={[
                  'Gamer',
                  'Designer',
                  'Freelancer',
                  'Developer',
                  'Web Designer',
                ]}
                multiTextDelay={1000}
                typeSpeed={30}
              />
              </div>

            </div>
            <div className='lg:ml-64 flex justify-center lg:block'>
                <img src={logo} alt= "" className=''/>
                <ol className='lg:flex hidden text-2xl text-white my-2'>
                  <li className='px-1 mx-4 cursor-pointer bg-[#ff8c42] rounded-full hover:scale-125 hover:shadow-[#ff8c42] shadow-lg duration-300 hover:text-black '><a href="https://www.twitter.com/sir_ivan02/" target='_blank' rel="noopener noreferrer"><i class="fa-brands fa-twitter"></i></a></li>
                  <li className='px-1 mx-4 cursor-pointer bg-[#ff8c42] rounded-full hover:scale-125 hover:shadow-[#ff8c42] shadow-lg duration-300 hover:text-black '><a href="https://www.instagram.com/sir_ivan_/" target='_blank' rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a></li>
                  <li className='px-1 mx-4 cursor-pointer bg-[#ff8c42] rounded-full hover:scale-125 hover:shadow-[#ff8c42] shadow-lg duration-300 hover:text-black '><a href="https://www.linkedin.com/in/ivan-camassa-8b138a1a0/" target='_blank' rel="noopener noreferrer"><i class="fa-brands fa-linkedin-in"></i></a></li>
                  <li className='px-1 mx-4 cursor-pointer bg-[#ff8c42] rounded-full hover:scale-125 hover:shadow-[#ff8c42] shadow-lg duration-300 hover:text-black '><a href="https://github.com/SirIvan02" target='_blank' rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a></li>
                </ol>
            </div>

        </div>
        <div className='text-center my-10 text-xl block '>
          <i class="fa-solid fa-chevron-down fa-bounce"></i>
          <h2 className='font-extralight'>Scroll Down</h2>
        </div>
    </div>
  )
}
