import React from 'react'
import {
  Link
} from "react-router-dom";
import "../index.css"


const header = () => {
  return (
    <>
      <header className="bg-header2 w-[100%]" >
        <ul className='flex justify-around px-60 text-white items-center py-7 bg-no-repeat   ' >
          <Link to="/" className='text-[40px] font-bold ' > TITRE </Link>
          <Link to="/portfolio" ><li className=' font-medium text-[#ffffff] opacity-50 hover:opacity-100 transition-all duration-500 active:opacity-100 ' >PORTFOLIO</li> </Link>
          <Link to="/tarifs"> <li className=' font-medium text-[#ffffff] opacity-50 hover:opacity-100 transition-all duration-500  focus:opacity-100'  >TARIFS</li></Link>
          <Link to="/contact" > <li className=' font-medium text-[#ffffff] opacity-50 hover:opacity-100 transition-all duration-500 '  >CONTACT</li> </Link>
        </ul>
      </header>
    </>
  )
}

export default header