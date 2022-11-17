import React from 'react'
import EDT from "../asset/EDT.svg"
import Shoppy from "../asset/Shoppy.svg"
import Weexa from "../asset/Weexa.svg"
import World from "../asset/World.svg"
import Header from "../components/header"
import PortfolioCard from '../components/portfolioCard'


import {
  Link
} from "react-router-dom";


const portfolio = () => {
  return (
    <>
    <section>
    <Header/>
      <h1 className=' mt-[6rem] text-[48px] flex justify-center font-medium ' >Mes récents travaux </h1>
      <h2 className=' text-xl flex justify-center font-light ' >Vous retrouverez ici les derniers travaux que j’ai pu réaliser  </h2>


      <div className='flex justify-around mt-[4rem] mx-[20%] '>
        <PortfolioCard link="https://www.group-edt.fr/" alt="Image Site EDT" img={EDT} />
        <PortfolioCard link="https://weexa.com/fr/accueil/" alt="Image Site Weexa" img={Weexa} />
      </div>


      <div className='flex justify-around mt-[2rem] mb-[8rem] mx-[20%] ' >
      <PortfolioCard link="https://resplendent-tapioca-2d5dee.netlify.app/" alt="Image Site World" img={World} />
      <PortfolioCard link="https://teal-gaufre-972163.netlify.app/" alt="Image Site Shoppy" img={Shoppy} />
      </div> 
    </section>
    </>
  )
}

export default portfolio