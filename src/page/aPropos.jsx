import React from 'react'
import Illu1 from "../asset/illu1.png"

const aPropos = () => {
  return (
    <>
  <section>
      <h1 className='flex justify-center mt-10 text-5xl' > A Propos </h1>
      <div className='flex pt-10 justify-around '>
        <div className= "w-1/2 h-[600px] mb-20  " >
          <img src={Illu1} alt="Illustration à propos" className='w-[100%] h-[100%] ' />
        </div>

        <div className='self-center  w-1/2' > 
          <h2 className='justify-center flex text-3xl'>Un développeur Web né</h2>
        

        <p className='pt-6 text-center flex justify-center' >
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