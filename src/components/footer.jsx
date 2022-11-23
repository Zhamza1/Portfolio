import React from 'react'
import {
  Link
} from "react-router-dom";
import Logo from "../asset/LogoNoir.svg"


const footer = (props) => {
  return (
    <>
      <footer className={` bg-third text-white w-full pb-[1.2rem] rounded-tr-[10rem] pt-[8rem] ${props.css} `} /* style="position: absolute;bottom: 0;" */ >
        <section className='flex px-[0.5rem] justify-around pb-[4.8rem]' >
        <div>
          <h1 className='text-[3.2rem] font-medium ' ><img src={Logo} className="w-[12rem] h-[12rem]" alt="logo du site zhamza" />  </h1>
        </div>

        <div>
          <p className='text-[2rem] font-normal ' >Coordonnées</p>
          <p className='pt-[2rem] font-light text-[1.6rem]'>HAMZA MAHMOOD</p>
          <p className='pt-[1rem] font-light text-[1.6rem]' >Paris, France
          </p>
          <p className='pt-[1rem] font-light text-[1.6rem] ' >(+33) 7.67.33.69.79</p>

          <p className='pt-[1rem] font-light text-[1.6rem]' >hamza.mahmood@outlook.fr</p>
        </div>

        <div>
          <p className='text-[2rem] font-normal '>Connect</p>
          <Link to="/contact" > <p className='pt-[2rem] font-light text-[1.6rem]'>Contact</p> </Link>
          <p className='pt-[1rem] font-light cursor-pointer text-[1.6rem] ' >Mentions légales </p>
          </div>
        </section>

        <div className='text-center pt-[2rem] font-light text-[1.2rem]  ' >Copyright © 2022-2022 TITRE DU SITE - Agence de développement WEB</div>  
      </footer>
    </>
  )
}

export default footer