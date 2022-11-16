import React from 'react'
import HomeCard from '../components/homeCard'
import APropos from './aPropos'
import {
  Link
} from "react-router-dom";

const Home = (name) => {
  return (
    <>
   
    <section className=' bg-header2 bg-no-repeat  pb-[10rem] text-white w-full ' >
       <header className='pt-[4rem] pb-[4rem] ' >
        <ul className='flex justify-around px-60 text-white items-center font-regular text-[16px]' >
          <Link to="/" className='text-[40px] font-bold ' > TITRE </Link>
          <Link to="/portfolio" ><li>PORTFOLIO</li> </Link>
          <Link to="/tarifs"> <li>TARIFS</li></Link>
          <Link to="/contact" > <li>CONTACT</li> </Link>
        </ul>
      </header>
      <div className='text-center' >
        <h2 className='text-[32px] font-medium ' >Hamza Mahmood </h2>
        <h1 className='text-[48px] font-semibold' >Développeur web</h1>
        <h2 className='text-[32px] font-medium' > Création de site web : site vitrine,<br></br>  corporate et e-commerce </h2>

        <Link to="/contact" ><div className='pt-[3rem]' > <button type='submit' className=' text-[#FE6965] bg-[#FFFFFF] font-medium px-12 py-2.5 rounded-full text-[20px] hover:bg-[#3891A6] hover:text-[#FFFFFF] ' >Contact</button></div></Link>
        </div>
        
    </section>

    <section >
      <h1 className='text-5xl flex justify-center '>Mes Services </h1>

      <div>
        <div className=' flex justify-center flex-wrap mx-40'  >
            <HomeCard name="Wordpress" bgImage="bg-wordpress" />
            <HomeCard name="Web design" bgImage="bg-webdesignsvg" />
            <HomeCard name="SEO" bgImage="bg-seo" />
        </div>
        
        <div className='flex justify-center flex-wrap mx-40 '  >
          <HomeCard name="Responsive design" bgImage="bg-responsive" />
          <HomeCard name="Mise en place d'outils" bgImage="bg-calendly" />
          <HomeCard name="Maintenance site " bgImage="bg-maintenance" />
        </div>
        </div>
    </section>

    
      <APropos/>
    

    </>
  )
}

export default Home