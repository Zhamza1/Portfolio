import React from 'react'
import {
  Link
} from "react-router-dom";
import "../index.css"


const header = () => {
  return (
    <>
      <header className="bg-header2" >
        <ul className='flex justify-around px-60 text-white items-center py-7 bg-no-repeat ' >
          <Link to="/" className='text-[40px] font-bold ' > TITRE </Link>
          <Link to="/portfolio" ><li>PORTFOLIO</li> </Link>
          <Link to="/tarifs"> <li>TARIFS</li></Link>
          <Link to="/contact" > <li>CONTACT</li> </Link>
        </ul>
      </header>
    </>
  )
}

export default header