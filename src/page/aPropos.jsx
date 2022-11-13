import React from 'react'
import Illu1 from "../asset/illu1.png"

const aPropos = () => {
  return (
    <>
  <section>
      <h1 className='flex justify-center mt-10 text-[48px] font-medium ' > A propos </h1>
      <div className='flex pt-10 justify-around '>
          <img src={Illu1} alt="Illustration à propos" className='w-[45%] h-[50%] ' />
        <div className='self-center  w-[45%] ' > 
          <h2 className='justify-center flex text-[36px] font-semibold '>Un développeur Web polyvalent</h2>
        
        <p className='pt-6  flex justify-center text-[24px] font-regular  ' >
          DÉVELOPPEUR INFORMATIQUE INDÉPENDANT<br></br>
          Développeur Web fullstack & Webdesigner freelance, je suis à votre disposition pour répondre à tout type de projets de création de sites internet, de développement spécifique ou d'applications web.
          Passionné par les technologies liées au Web, je mets mes compétences au service de vos besoins dans divers domaines.
        </p>
        </div>
      </div>
      </section>
    </>
  )
}

export default aPropos