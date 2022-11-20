import React from 'react'
import Header from "../components/header"
import TarifsCard from '../components/tarifsCard'
import Footer from '../components/footer'

const tarif = (site, prix, description, description2, gris,bgColor) => {
  return (
    <>
      <Header/>
      <section className='mb-[4rem]' >
        <h1 className='font-medium text-[4.8rem] flex justify-center mt-[4rem] ' > Tarifs </h1>
        <h2 className=' text-[2rem] font-regular flex justify-center mb-[4rem] ' > Un tarif adapté pour un site internet de qualité ! </h2>
        <TarifsCard site="STANDARD" prix="699" description="La formule de la hess Lorem ipsum dolor sit amet consectetur. Scelerisque " description2="Lorem ipsum dolor sit amet consectetur. Scelerisque Lorem ipsum dolor sit amet consectetur. Scelerisque" bgColor="bg-[#FFF3F1]" bgButton="bg-secondary" textButton="text-[#FFFFFF] " gris="text-[#DDBCBC]" maquette="✓  Charte graphique à partir d'une maquette pré-définie" animation="hover:bg-[#F0BDB3] transition ease-in-out delay-100  hover:text-[#24252D]" />

        <TarifsCard site="PERSONNALISÉ" prix="999" description="Pour un site en accord avec vos gouts et couleurs" description2="Lorem ipsum dolor sit amet consectetur. Scelerisque Lorem ipsum dolor sit amet consectetur. Scelerisque" bgColor="bg-secondary" bgButton="bg-[#FFFFFF]" textButton="text-[#000000]" textColor="text-[#FFFFFF]" animation=" hover:bg-[#EFEFEF] transition ease-in-out delay-100 "/>
      </section>
      <Footer css="sm:absolute sm:bottom-0 " />
    </>
  )
}

export default tarif