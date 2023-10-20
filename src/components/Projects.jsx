import React from 'react';
import News from '../assets/news.png'
import Energy from '../assets/renewable-energy.png'
import Housing from '../assets/home.png'
import Gas from '../assets/planet-earth.png'

function Projects() {
    return (
        <div id={'projects'} className={'w-full h-screen md:h-screen bg-[#0a192f] text-gray-300 py-100'}>
            <div className={'max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'}>
                <div className={'pb-8'}>
                    <p className={'text-4xl font-bold inline border-b-4 border-pink-600'}>Projects</p>
                    <p className={'py-6'}>// Have a look at some of my projects 👨🏼‍💻</p>
                </div>

                {/* container for projects */}
                <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">

                    {/* Gird Item */}
                    <div
                        style={{
                            backgroundImage: `url(${News})`,
                            backgroundSize: 'contain',
                        }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md
                        flex justify-center text-center items-center mx-auto content-div ">

                        {/* Hover effect*/}
                        <div className={'opacity-0 group-hover:opacity-100'}>
                                <span className={'text-2xl font-bold text-white tracking-wider'}>
                                    Sent News // NLP News Analysis in Python/Flutter
                                </span>
                            <div className={'pt-8 text-center'}>
                                <a href={"https://github.com/novatc/sent-news"}>
                                    <button
                                        className="text-center rounded-lg px-4 py-3 m-2
                                            bg-white text-gray-700 font-bold text-lg"
                                    >Code
                                    </button>
                                </a>
                                <a href={"https://sent-news.com/home"}>
                                    <button
                                        className="text-center rounded-lg px-4 py-3 m-2
                                            bg-white text-gray-700 font-bold text-lg"
                                    >Website
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{
                            backgroundImage: `url(${Energy})`,
                            backgroundSize: 'contain',
                        }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md
                        flex justify-center text-center items-center mx-auto content-div ">

                        {/* Hover effect*/}
                        <div className={'opacity-0 group-hover:opacity-100'}>
                                <span className={'text-2xl font-bold text-white tracking-wider'}>
                                    EnerGAIN // AI Energy Trading with Reinforcement Learning
                                </span>
                            <div className={'pt-8 text-center'}>
                                <a href={"https://github.com/novatc/EnerGAIN"}>
                                    <button
                                        className="text-center rounded-lg px-4 py-3 m-2
                                            bg-white text-gray-700 font-bold text-lg"
                                    >Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{
                            backgroundImage: `url(${Housing})`,
                            backgroundSize: 'contain',
                        }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md
                        flex justify-center text-center items-center mx-auto content-div ">

                        {/* Hover effect*/}
                        <div className={'opacity-0 group-hover:opacity-100'}>
                                <span className={'text-2xl font-bold text-white tracking-wider'}>
                                    THE DORM CONNECTION // Student Housing App in Kotlin
                                </span>
                            <div className={'pt-8 text-center'}>
                                <a href={"https://github.com/novatc/the-dorm-connection/tree/master"}>
                                    <button
                                        className="text-center rounded-lg px-4 py-3 m-2
                                            bg-white text-gray-700 font-bold text-lg"
                                    >Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{
                            backgroundImage: `url(${Gas})`,
                            backgroundSize: 'contain',
                        }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md
                        flex justify-center text-center items-center mx-auto content-div ">

                        {/* Hover effect*/}
                        <div className={'opacity-0 group-hover:opacity-100'}>
                                <span className={'text-2xl font-bold text-white tracking-wider'}>
                                    Emission Data Pipeline // Data analysis with Python
                                </span>
                            <div className={'pt-8 text-center'}>
                                <a href={"https://github.com/novatc/gas-pipelines"}>
                                    <button
                                        className="text-center rounded-lg px-4 py-3 m-2
                                            bg-white text-gray-700 font-bold text-lg"
                                    >Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Projects;