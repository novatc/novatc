import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa";
import {BsFillPersonFill} from "react-icons/bs";
import Logo from '../assets/me.jpeg'
import resumePdf from '../assets/CV.pdf'; // Adjust the path accordingly to your file structure

import {Link} from 'react-scroll'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50'>
            <div>
                <img src={Logo} className={"rounded-full py-4 px-4"} style={{width: '80px'}}/>
            </div>

            {/* Menu*/}
            <ul className='hidden md:flex'>
                <li className='px-4'>
                    <Link to="home" smooth={true} spy={true} offset={-80} duration={500} activeClass="text-pink-600">
                        Home
                    </Link>
                </li>
                <li className='px-4'>
                    <Link to="about" smooth={true} spy={true} offset={-80} duration={500} activeClass="text-pink-600">
                        About
                    </Link>
                </li>
                <li className='px-4'>
                    <Link to="skills" smooth={true} spy={true} offset={-80} duration={500} activeClass="text-pink-600">
                        Skills
                    </Link>
                </li>
                <li className='px-4'>
                    <Link to="projects" smooth={true} spy={true} offset={-80} duration={500} activeClass="text-pink-600">
                        Projects
                    </Link>
                </li>
                <li className='px-4'>
                    <Link to="contact" smooth={true} spy={true} offset={-80} duration={500} activeClass="text-pink-600">
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Hamburger*/}
            <button onClick={handleClick} aria-label={nav ? 'Close menu' : 'Open menu'} className='md:hidden z-10 focus:outline-none'>
                {!nav ? <FaBars/> : <FaTimes/>}
            </button>

            {/* Mobile menu*/}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className={'py-6 text-4xl'}>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className={'py-6 text-4xl'}>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className={'py-6 text-4xl'}>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className={'py-6 text-4xl'}>
                    <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className={'py-6 text-4xl'}>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* social Icons*/}
            <nav className='hidden lg:flex fixed flex-col top-[35%] left-0 space-y-2'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                           href='https://www.linkedin.com/in/lucas-wagner-5b5405200/'>
                            LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                           href='https://github.com/novatc'>
                            GitHub <FaGithub size={30}/>
                        </a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-400'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                           href={resumePdf}
                           download='MyResume.pdf' // This will name the downloaded file as 'MyResume.pdf'
                        >
                            Resume <BsFillPersonFill size={30}/>
                        </a>
                    </li>
                </ul>

            </nav>

        </div>

    )

}
export default Navbar