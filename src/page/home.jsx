import React from 'react'
import HomeCard from '../components/homeCard'
import APropos from './aPropos'

const Home = (name) => {
  return (
    <>
    <section className='text-center bg-secondary pt-[13rem] pb-[18rem] rounded-bl-[90px] text-white ' >
        <h2 className='text-2xl' >Hamza Mahmood </h2>
        <h1 className='text-5xl font-weight: 700' >Développeur web</h1>
        <h2 className='text-2xl' > Création de site web : site vitrine, corporate et e-commerce </h2>
    </section>

    <section className='mb-24 mt-24' >
      <h1 className='text-5xl flex justify-center '>Mes Services </h1>

      <div className='flex justify-center mt-10 flex-wrap' >
        {/* <HomeCard name="wordpress" />
        <HomeCard/>
        <HomeCard/>
        </div>
        
        <div className='flex justify-center mt-8 ' >
        <HomeCard/>
        <HomeCard/>
        <HomeCard/> */}
        
        <HomeCard/>
        </div>
    </section>

    
      <APropos/>
    

    </>
  )
}

export default Home