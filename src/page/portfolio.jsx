import React from 'react'

const portfolio = () => {
  return (
    <>
    <section>
      <h1 className=' mt-[6rem] text-4xl font-semibold flex justify-center' >Mes récents travaux </h1>
      <h2 className=' text-xl flex justify-center' >Voici les différents auquel chez pu travaillé dessus tu connais </h2>
      <div className='flex justify-around mt-[4rem]  ' >
        <div className='bg-red-600 w-[25%] h-[15rem] rounded-xl '></div>
        <div className='bg-blue-600 w-[25%] h-[15rem] rounded-xl'></div>
        <div className='bg-gray-600 w-[25%] h-[15rem] rounded-xl'></div>
      </div>

      <div className='flex justify-around mt-8 mb-[12rem] ' >
        <div className='bg-red-600 w-[25%] h-[15rem] rounded-xl '></div>
        <div className='bg-blue-600 w-[25%] h-[15rem] rounded-xl'></div>
        <div className='bg-gray-600 w-[25%] h-[15rem] rounded-xl'></div>
      </div>
    </section>
    </>
  )
}

export default portfolio