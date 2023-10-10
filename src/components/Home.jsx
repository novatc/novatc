import React from 'react'
import {HiArrowNarrowRight} from "react-icons/hi";

const Home = () => {
    return (
        <div id='home' className='w-full h-screen bg-[#0a192f]'>

            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className={'text-pink-600'}>Hi, my name is</p>
                <h2 className='text-4xl sm:text-7xl font-bold text-gray-300'> Lucas Wagner</h2>
                <h2 className='text-4xl sm:text-7xl font-bold text-gray-500'>
                    I'm a computer scientist from Germany</h2>
                <p className='text-gray-500 py-4 max-[700px]'> with a passion for AI and everything that comes with it.
                    Also enthusiastic about powering a sustainable, intelligent, and green future with AI, smart grids,
                    and energy transformation</p>
                <div>
                    <button>
                        View Projects <HiArrowNarrowRight/>
                    </button>
                </div>
            </div>

        </div>
    )
}
export default Home