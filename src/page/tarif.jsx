import React from 'react'
import Header from "../components/header"
import TarifsCard from '../components/tarifsCard'

const tarif = (site, prix, description, description2, gris,bgColor) => {
  return (
    <>
      <Header/>
      <section className='mb-[4rem]' >
        <h1 className='font-medium text-[48px] flex justify-center mt-[4rem] ' > Tarifs </h1>
        <h2 className=' text-[20px] font-regular flex justify-center mb-[4rem] ' > Un tarif adapté pour un site internet de qualité ! </h2>
        <TarifsCard site="STANDARD" prix="699" description="La formule de la hess " description2="Lorem ipsum dolor sit amet consectetur. Scelerisque" bgColor="bg-[#FFF3F1]" bgButton="bg-secondary" textButton="text-[#FFFFFF] " gris="text-[#DDBCBC]" />

        <TarifsCard site="PERSONNALISÉ" prix="999" description="Pour un site en accord avec vos gouts et couleurs" description2="Lorem ipsum dolor sit amet consectetur. Scelerisque" bgColor="bg-secondary" bgButton="bg-[#F5EFEF]" textButton="text-[#000000]" textColor="text-[#FFFFFF]"  />
      </section>
    </>
  )
}

export default tarif