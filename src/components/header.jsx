import { useRef,React } from 'react'
import {
  Link
} from "react-router-dom";
import "./header.css"

import { FaBars,FaTimes } from 'react-icons/fa';

const Header = () => {

  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

  return (
    <>
      <header className="bg-header2 w-[100%] md:py-[1rem] md:flex md:flex-row-reverse " >
        <nav className='z-[100000]' ref={navRef} >
          <ul className='flex justify-around px-[15rem] text-white items-center pt-[2.8rem] bg-no-repeat text-[1.6rem] md:text-[40px] md:flex-col ' >
            <Link to="/" className='text-[4rem] font-bold md:text-[40px] ' > TITRE </Link>
            <Link to="/portfolio" ><li className=' font-medium text-[#ffffff] opacity-50 hover:opacity-100 transition-all duration-500 active:opacity-100 ' >PORTFOLIO</li> </Link>
            <Link to="/tarifs"> <li className=' font-medium text-[#ffffff] opacity-50 hover:opacity-100 transition-all duration-500  focus:opacity-100'  >TARIFS</li></Link>
            <Link to="/contact" > <li className=' font-medium text-[#ffffff] opacity-50 hover:opacity-100 transition-all duration-500 '  >CONTACT</li> </Link>
          </ul>
          <button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
        </nav>
        <button className="nav-btn nav-open-btn " 
        onClick={showNavbar}>
				  <FaBars />
			  </button>
      </header>
    </>
  )
}

export default Header