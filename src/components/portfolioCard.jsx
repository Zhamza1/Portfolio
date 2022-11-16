import React from 'react'

const portfolioCard = (props) => {
  return (
    <>
        <div className=' w-[45%] h-[100%] rounded-[10px]'>
          <a href={`${props.link}`} > <img src={`${props.img}`} alt={`${props.alt}`} className='w-[100%]' />  </a>
        </div>
    </>
  )
}

export default portfolioCard