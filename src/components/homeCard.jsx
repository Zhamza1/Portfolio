import React from 'react'

/*  */

const homeCard = (props) => {
  return (
    <>
        <div className={` cursor-pointer font-medium text-[36px] w-[28%] rounded-xl h-[700px] mx-[10%] bg-no-repeat mx-4 ${props.bgImage}`}> 
          <div className='pt-20 text-center transition transition-opacity-25 backdrop-blur-[5px] bg-[#000000] top-0 left-0 w-full h-full rounded-xl opacity-0 hover:opacity-60 transition-transform-25 hover:translate-y-[0px] translate-y-[20px] '>
            <div className='text-[#ffffff]' >{props.name}</div>
              <p className='text-[#ffffff] font-regular text-[14px] text-center ' >WordPress est un logiciel de la famille des CMS. Le CMS WordPress permet à la fois de gagner du temps de développement au niveau de la création de votre site internet et d’y ajouter facilement des pages, WordPress permet donc la création de sites dynamiques.</p>
            
          </div>
        </div>
    </>
  )
}

export default homeCard

/*  https://www.wikihow.com/images/thumb/f/fc/Get-the-URL-for-Pictures-Step-1-Version-6.jpg/v4-728px-Get-the-URL-for-Pictures-Step-1-Version-6.jpg.webp */

/* 
backdrop-blur-[5px] */