import React from 'react'
import EDT from "../asset/EDT.png"
import Shoppy from "../asset/Shoppy.png"
import Weexa from "../asset/Weexa.png"
import World from "../asset/World.png"

import {
  Link
} from "react-router-dom";


const portfolio = () => {
  return (
    <>
    <section>
      <h1 className=' mt-[6rem] text-[48px] flex justify-center font-medium ' >Mes récents travaux </h1>
      <h2 className=' text-xl flex justify-center font-light ' >Vous retrouverez ici les derniers travaux que j’ai pu réaliser  </h2>
      <div className='flex justify-around mt-[4rem]  ' >
        <div className=' w-[35%] h-[25rem] rounded-[10px]'>
          <a href='https://www.group-edt.fr/' > <img src={EDT} alt="Image Site EDT" className='w-full' />  </a>
        </div>
        <div className=' w-[35%] h-[25rem] rounded-[10px]'>
        <a href='https://weexa.com/' >  <img src={Weexa} alt="Image Site Weexa" className='w-full'/> </a>
        </div>
      </div>


      <div className='flex justify-around mt-8 mb-[12rem] ' >
        <div className=' w-[35%] h-[25rem] rounded-[10px]'>
        <a href='https://resplendent-tapioca-2d5dee.netlify.app/' > <img src={World} alt="Image Site World" className='w-full'/> </a>
          </div>
          <div className=' w-[35%] h-[25rem] rounded-[10px]'>
          <a href='https://teal-gaufre-972163.netlify.app/' > <img src={Shoppy} alt="Image Site Shoppy" className='w-full'/> </a>
          </div>
      </div>
    </section>
    </>
  )
}

export default portfolio