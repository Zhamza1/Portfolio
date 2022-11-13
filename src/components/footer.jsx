import React from 'react'

const footer = () => {
  return (
    <>
      <footer className=' bg-third text-white w-full pb-3 rounded-tr-[100px] pt-[5rem] ' >
        <section className='flex px-1 justify-around pb-[3rem]' >
        <div>
          <h1 className='text-4xl font-medium ' >Titre du site </h1>
        </div>

        <div>
          <p className='text-xl font-normal ' >Coordonnées</p>
          <p className='pt-8 font-light text-sm'>HAMZA MAHMOOD</p>
          <p className='pt-4 font-light text-sm' >210, avenue du 8 mai 1945 93150 Le Blanc-Mesnil
          </p>
          <p className='pt-4 font-light text-sm ' >(+33) 7.67.33.69.79</p>

          <p className='pt-4 font-light text-sm' >hamza.mahmood@outlook.fr</p>
        </div>

        <div>
          <p className='text-xl font-normal '>Connect</p>
          <p className='pt-8 font-light text-sm'>Contact</p>
          <p className='pt-4 font-light text-sm' >Mentions légales </p>
          </div>
        </section>

        <div className='text-center pt-8 font-light text-sm  ' >Copyright © 2022-2022 TITRE DU SITE - Agence de développement WEB</div>  
      </footer>
    </>
  )
}

export default footer