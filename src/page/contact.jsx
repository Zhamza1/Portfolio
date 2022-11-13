import React from 'react'
import { useState } from 'react'
import Header from "../components/header"

const Contact = () => {
  const [isError,setIsError] = useState("")
  const [firstName, setFirstName] = useState("")
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassWord] =useState("")
  const [confirmPassword,setConfirmPassword] = useState("")

  const checkValidation = (e) => {
    setConfirmPassword(e.target.value)
    if(password != confirmPassword ) {
      setIsError("Le mot de passe est différent")
    }else{
      setIsError("")
    }
  }

  return (
    <>
    <Header/>
      <section className='flex mt-10 justify-around pb-[4rem] ' >
        <div className='w-[45%]' >
        <div className='text-center text-red-500'>
          <p>{isError}</p>
        </div>
          <h1 className='text-[48px] text-third font-semibold mt-[5rem] '>Contactez nous</h1>
          <p className=' mt-4 pb-2 text-[#ADA3A3] font-semibold text-[16px] ' >Que vous ayez une question sur les fonctionnalités les prix ou autre, notre équipe est prête à répondre à toutes vos questions.</p>
          
          <form className='mt-10' action="">
            <div className='flex' >
              <label className='block text-[#ADA3A3] ' htmlFor="">Name :</label>
              <input type="text" className=' mt-3 border-[#998C8C] py-1  px-2 text-[000000] border-x-0 border-t-0 focus:outline-none focus:border-blue-600 border-[3px] bg-[#F8FAFB] text-[16px] font-regular  ' 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                />
              <label  className='block text-[#ADA3A3] ' htmlFor="">Email :</label>
              <input type="email" className=' mt-3 border-[#998C8C] py-1  px-2 text-[000000] border-x-0 border-t-0 focus:outline-none focus:border-blue-600 border-[3px] bg-[#F8FAFB] text-[16px] font-regular ' 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='mt-7' >
              <label className='text-[#ADA3A3] ' htmlFor="">Sujet :</label>
              <input type="text" className=' w-full mt-3 border-[#998C8C] py-1 px-2 text-[000000] border-x-0 border-t-0 focus:outline-none focus:border-blue-600 border-[3px] bg-[#F8FAFB] text-[16px] font-regular '  
              value={password}
              onChange={(e) => setPassWord(e.target.value)}
              />
            </div>
            <div className='mt-7' >
              <label className='text-[#ADA3A3] ' htmlFor="">Message :</label>
              <input type="text" className=' w-full mt-3 border-[#998C8C] py-1 px-2 text-[#000000] border-x-0 border-t-0 focus:outline-none focus:border-blue-600 border-[3px] bg-[#F8FAFB] text-[16px] font-regular  ' 
              value={confirmPassword}
              onChange={(e) => checkValidation(e.target.value)}
              />
            </div>
            <div className='mt-7' >
              <button type='submit' className=' text-white bg-[#EA656D] px-[2rem] py-[1rem] rounded-[10px] text-[20px] hover:bg-white hover:text-[#1E3A8A]' >Send a message</button>
            </div>
          </form>
        </div>
        <div className='w-[45%] bg-illu2 '> 

        </div>
        
      </section> 
      </>
  )
}

export default Contact

  /* 
  mt-3 w-full appearance-none rounded-xl border-2 border-white bg-transparent py-2 px-2 leading-tight text-white placeholder:italic focus:outline-none focus:border-blue-600 */