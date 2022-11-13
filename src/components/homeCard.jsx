import React from 'react'


const homeCard = (props) => {
  return (
    <>
        <div className={` font-medium text-[36px] w-[16rem]  h-[30rem] bg-no-repeat mx-4 ${props.bgImage}`}>
          <p className='pt-20 text-center' >{props.name}</p>
          </div>
    </>
  )
}

export default homeCard

/*  https://www.wikihow.com/images/thumb/f/fc/Get-the-URL-for-Pictures-Step-1-Version-6.jpg/v4-728px-Get-the-URL-for-Pictures-Step-1-Version-6.jpg.webp */