import React from 'react'
import {HiArrowNarrowRight} from "react-icons/hi";
import Me from '../assets/me.jpeg'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'
import resumePdf from '../assets/CV.pdf'

const Home = () => {
    return (
        <div id='home' className='w-full h-screen bg-[#0a192f] relative flex flex-col sm:flex-row items-center justify-center pt-20'>            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className={'text-pink-600'}>Hi, my name is</p>
                <h2 className='text-4xl sm:text-7xl font-bold text-gray-300'> Lucas Wagner</h2>
                <img src={Me} alt="Lucas Wagner"
                     className="mt-8 sm:absolute sm:top-20 sm:right-80 w-64 h-64 rounded-full border-4 border-transparent
                  transition-border duration-500 shadow-xl bg-[#0a192f]" />
                <h2 className='text-4xl sm:text-7xl font-bold text-gray-500'>
                    I'm a computer scientist from Germany</h2>
                <p className='text-gray-500 py-4 max-[700px]'> with a passion for AI and everything that comes with it.
                    Also enthusiastic about powering a sustainable, intelligent, and green future with AI, smart grids,
                    and energy transformation</p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                        View Projects
                        <span className={'group-hover:rotate-90 duration-300'}>
                            <HiArrowNarrowRight className='ml-3'/>
                        </span>
                    </button>
                </div>
                {/* Mobile social icons under intro */}
                <div className='flex md:hidden justify-center mt-8 space-x-6'>
                    <a href='https://www.linkedin.com/in/lucas-wagner-5b5405200/' target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-pink-600'>
                        <FaLinkedin size={30}/>
                    </a>
                    <a href='https://github.com/novatc' target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-pink-600'>
                        <FaGithub size={30}/>
                    </a>
                    <a href={resumePdf} download='MyResume.pdf' className='text-gray-300 hover:text-pink-600'>
                        <BsFillPersonFill size={30}/>
                    </a>
                </div>
            </div>

            {/* Round Image below the text on small screens and in the top-right corner on larger screens */}


        </div>
    )
}
export default Home
