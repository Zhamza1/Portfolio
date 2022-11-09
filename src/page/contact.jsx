import React from 'react'
import { useState } from 'react'

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
      <section className='flex mt-10 pl-40 ' >
        <div>
        <div className='text-center text-red-500'>
          <p>{isError}</p>
        </div>
          <h1 className='text-[48px] text-center text-[#FE856E]  font-semibold  '>Contactez nous</h1>
          <p className='text-center mt-4 pb-2' >Que vous ayez une question sur les fonctionnalités les prix ou autre, notre équipe est prête à répondre à toutes vos questions.</p>
          
          
          <form className='mt-10' action="">
            <div>
              <label htmlFor="">Name :</label>
              <input type="text" className=' mt-3 w-[12rem] appearance-none rounded-xl border-white bg-transparent py-2 px-2 leading-tight text-[000000] placeholder:italic focus:outline-none focus:border-blue-600 border-2 ' 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div className='mt-7' >
              <label htmlFor="">Email :</label>
              <input type="email" className=' mt-3 w-full appearance-none rounded-xl border-2 border-white bg-transparent py-2 px-2 leading-tight text-white placeholder:italic focus:outline-none focus:border-blue-600' 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='mt-7' >
              <label htmlFor="">Sujet :</label>
              <input type="text" className=' mt-3 w-full appearance-none rounded-xl border-2 border-white bg-transparent py-2 px-2 leading-tight text-white placeholder:italic focus:outline-none focus:border-blue-600'  
              value={password}
              onChange={(e) => setPassWord(e.target.value)}
              />
            </div>
            <div className='mt-7' >
              <label htmlFor="">Message :</label>
              <input type="text" className=' mt-3 w-full appearance-none rounded-xl border-2 border-white bg-transparent py-2 px-2 leading-tight text-white placeholder:italic focus:outline-none focus:border-blue-600' 
              value={confirmPassword}
              onChange={(e) => checkValidation(e.target.value)}
              />
            </div>
            <div className='mt-7' >
              <button type='submit' className=' text-white bg-[#EA656D] px-6 py-2.5 rounded-[10px] text-[20px] hover:bg-white hover:text-[#1E3A8A]' >Send a message</button>
            </div>
          </form>
        </div>
        
      </section> 
  )
}

export default Contact

