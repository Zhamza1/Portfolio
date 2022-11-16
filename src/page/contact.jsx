import React from 'react'
import { useState } from 'react'
import Header from "../components/header"
import Illu2 from  "../asset/illu2.png" 

const Contact = () => {
  const [isError,setIsError] = useState("")
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [subject,setSubject] =useState("")
  const [message,setMessage] =useState("")



  return (
    <>
    <Header/>
      <section className='flex mt-10 justify-around pb-[4rem] ' >
        <div className='w-[45%]' >
        <div className='text-center text-red-500'>
          <p>{isError}</p>
        </div>
          <h1 className='text-[48px] text-third font-semibold mt-[6rem] '>Contactez nous</h1>
          <p className=' mt-4 pb-2 text-[#ADA3A3] font-semibold text-[16px] ' >Que vous ayez une question sur les fonctionnalités les prix ou autre, notre équipe est prête à répondre à toutes vos questions.</p>
          
          <form name='contact' className='mt-10' method='post' data-netlify="true" onSubmit="submit" >
          <input type="hidden" name="form-name" value="contact" />
            <div className='flex w-[100%] justify-between '>

              <div className='flex-col flex w-[30%] ' >
                <label className='block text-[#ADA3A3] ' htmlFor="">Name :</label>
                <input type="text" name='name' className=' mt-3 border-[#998C8C] py-1  px-2 text-[000000] border-x-0 border-t-0 focus:outline-none focus:border-blue-600 border-[3px] bg-[#F8FAFB] text-[16px] font-regular  ' 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  />
              </div>
              <div className='flex-col flex w-[60%] ' >
                <label className='block text-[#ADA3A3] ' htmlFor="">Email :</label>
                <input name='email' type="email" className=' mt-3 border-[#998C8C] py-1  px-2 text-[000000] border-x-0 border-t-0 focus:outline-none focus:border-blue-600 border-[3px] bg-[#F8FAFB] text-[16px] font-regular ' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className='mt-7' >
              <label className='text-[#ADA3A3] ' htmlFor="">Sujet :</label>
              <input name='subject' type="text" className=' w-full mt-3 border-[#998C8C] py-1 px-2 text-[000000] border-x-0 border-t-0 focus:outline-none focus:border-blue-600 border-[3px] bg-[#F8FAFB] text-[16px] font-regular '  
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className='mt-7' >
              <label className='text-[#ADA3A3] ' htmlFor="">Message :</label>
              <textarea name='message' className=' w-full mt-3 border-[#998C8C] py-1 px-2 text-[#000000] border-x-0 border-t-0 focus:outline-none focus:border-blue-600 border-[3px] bg-[#F8FAFB] text-[16px] font-regular  ' 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className='mt-7' >
              <button type='submit' className=' text-white bg-secondary px-[2rem] py-[1rem] rounded-[10px] text-[20px] hover:bg-[#F0BDB3] transition ease-in-out delay-100  hover:text-[#24252D] ' >Send a message</button>
            </div>
          </form>
        </div>
        <div className='w-[45%] '> 
          <img className=' w-[100%] ' src={Illu2} alt="illustration d'une personne écrivant un mail" />
        </div>
        
      </section> 
      </>
  )
}

export default Contact

  /* 
  mt-3 w-full appearance-none rounded-xl border-2 border-white bg-transparent py-2 px-2 leading-tight text-white placeholder:italic focus:outline-none focus:border-blue-600 */