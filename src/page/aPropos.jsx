import React from 'react'
import Illu1 from "../asset/illu1.png"

const aPropos = () => {
  return (
    <>
  <section>
      <h1 className='flex justify-center mt-10 text-5xl' > A Propos </h1>
      <div className='flex pt-10 justify-around '>
        <div className= "w-1/2 h-[600px] mb-20  " >
          <img src={Illu1} alt="Illustration à propos" className='w-[100%] h-[100%] ' />
        </div>

        <div className='self-center ' > 
          <h2 className='justify-center flex text-3xl'>Un développeur Web né</h2>
        

        <p className='pt-6' >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu penatibus in odio quis eu id sit. Mauris odio risus, quam turpis.<br></br> Neque euismod orci, iaculis facilisi. Dapibus faucibus libero lorem dui elementum neque, at auctor justo. 
          Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit. Arcu penatibus in odio quis eu id sit. Mauris odio risus, quam turpis.<br></br> Neque euismod orci, iaculis facilisi. Dapibus faucibus libero lorem dui elementum neque, at auctor justo. 
          Lorem ipsum dolor sit amet,<br></br>consectetur adipiscing elit. Arcu penatibus in odio quis eu id sit. Mauris odio risus, quam turpis. <br></br>Neque euismod orci, iaculis facilisi. Dapibus faucibus libero lorem dui elementum neque, at auctor justo. 
          Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit. Arcu penatibus in odio quis eu id sit. Mauris odio risus, quam turpis.<br></br> Neque euismod orci, iaculis facilisi. Dapibus faucibus libero lorem dui elementum neque, at auctor justo. 
        </p>
        </div>
      </div>
      </section>
    </>
  )
}

export default aPropos