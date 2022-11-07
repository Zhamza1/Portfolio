import React from 'react'
import {
  Link
} from "react-router-dom";
import "../index.css"

const header = () => {
  return (
    <>
      <header className='bg-secondary' >
        <ul className='flex justify-around px-60 text-white ' >
          <Link to="/" > <li>HOME</li> </Link> 
          <Link to="/portfolio" ><li>PORTFOLIO</li> </Link>
          <Link to="/tarifs"> <li>TARIFS</li></Link>
          <Link to="/contact" > <li>CONTACT</li> </Link>
        </ul>
      </header>
    </>
  )
}

export default header