import React from 'react'
import Illu1 from "../asset/illu1.png"

const aPropos = () => {
  return (
    <>
  <section>
      <h1 className='flex justify-center mt-10 text-[48px] font-medium ' > A propos </h1>
      <div className='flex pt-10 justify-around pb-[5rem] '>
          <img src={Illu1} alt="Illustration à propos" className='w-[35%] h-[40%] ' />
        <div className='self-center  w-[45%] ' > 
          <h2 className='justify-center flex text-[36px] font-semibold '>Un développeur Web polyvalent</h2>
        
        <p className='pt-6  flex justify-center text-[20px] font-regular  ' >
          Je suis un développeur Web, le développement Web est ma passion et je m'assure que chaque projet sur lequel je travaille est de qualité.Faite passer votre site de son état actuel à un état où il est prêt à se développer.En tant que développeur front et back-end, je peux vous aider à définir l'expérience utilisateur de votre projet ou à amener votre entreprise au niveau supérieur.
          <br />
          Vous trouverez mon travail de premier ordre et convivial tout en étant suffisamment professionnel pour impressionner vos clients. N'hésitez pas à m'envoyer un message si vous avez des questions ou des conseils sur les services que je propose. Merci!
        </p>
        </div>
      </div>
      </section>
    </>
  )
}

export default aPropos