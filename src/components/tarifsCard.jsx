import React from 'react'

const tarifsCard = (props) => {
  return (
    <>
        <div className='flex justify-center drop-shadow-lg w-[90%] bg-[#FFFFFF] py-[1rem]  mx-[5%] rounded-[10px] mb-[4rem] ' >
            <div className={` w-[26%] ${props.bgColor} rounded-[10px] text-center px-[3rem] pt-[2rem] pb-[3rem] ${props.textColor}  `} >
                <h3 className='font-semibold text-[20px] ' >SITE VITRINE <br /> {props.site} </h3>
                <h2 className='font-semibold text-[32px] ' >À PARTIR DE {props.prix}€ </h2>
                <h4 className='font-light text-[14px] pb-[3rem] uppercase  ' > {props.description} </h4>
                <button type='submit' className={`uppercase ${props.textButton} ${props.bgButton} px-6 py-[1rem] rounded-[7px] text-[18px] font-regular hover:bg-white hover:text-[#1E3A8A] mb-[2rem] `} > Nous contacter </button>
                <h4 className='font-light text-[14px] uppercase' > {props.description2} </h4>
            </div>
            <div className='w-[30%] ml-[2rem] py-[2rem] font-regular text-[16px] ' >
                <p className='leading-9  ' >
                    ✓  Développé sous WORDPRESS    <br />

                    ✓  Sélection d'une palette de couleur <br />

                    ✓  Domaine + hébergement + e-mail pendant 12 mois <br />

                    ✓  Formulaire de contact <br />

                    { props.maquette ? <> {props.maquette}  <br /> </> : "" }  

                    <span className={`${props.gris}`} >  ✓ Création charte graphique personnalisée <br /> </span>

                    <span className={`${props.gris}`} >  ✓ Création entière du design via Figma <br /> </span>
                </p>
            </div>
            <div className='w-[30%] ml-[2rem] py-[2rem] font-regular text-[16px]' >
                <p className='leading-9  ' >
                    ✓  Site responsive <br />

                    ✓  Mise en place du contenu (textes & images) <br />

                    ✓  Liens de partage sur les réseaux sociaux <br />

                    ✓  Optimisation du référencement <br />

                    ✓  Statistiques de visite <br />

                    ✓  Mise en ligne du site <br />

                    <span className={`${props.gris}`} > ✓  Mise en place d’outil spécifique <br /> </span>

                    <span className={`${props.gris}`} > ✓  Création d’une page Google My Business  <br /> </span>
                </p>
            </div>
        </div>
    </>
  )
}

export default tarifsCard