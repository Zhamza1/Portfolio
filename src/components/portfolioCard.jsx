import React from 'react'

const portfolioCard = (props) => {
  return (
    <>
        <div className=' w-[40%] h-[25rem] rounded-[10px]'>
          <a href={`${props.link}`} > <img src={`${props.img}`} alt={`${props.alt}`} className='w-full' />  </a>
        </div>
    </>
  )
}

export default portfolioCard