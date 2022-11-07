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

    <div className=' items-center mt-13' >
      <section className='flex mt-10 pl-40 ' >
      
        <div>
        <div className='text-center text-red-500'>
          <p>{isError}</p>
        </div>
          <h1 className='text-3xl text-center '>Contactez nous</h1>
          <p className='text-center mt-4 border-b border-b-gray-500 pb-2' >Suivez vos investissements en temps réel.</p>
          
          
          <form className='mt-10' action="">
            <div>
              <label htmlFor="">Prénom :</label>
              <input type="text" className=' mt-3 w-full appearance-none rounded-xl border-white bg-transparent py-2 px-2 leading-tight text-white placeholder:italic focus:outline-none focus:border-blue-600 border-2 ' placeholder='Hamza' 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div className='mt-7'>
              <label htmlFor="">Nom de famille :</label>
              <input type="text" className=' mt-3 w-full appearance-none rounded-xl border-2 border-white bg-transparent py-2 px-2 leading-tight text-white placeholder:italic focus:outline-none focus:border-blue-600 ' placeholder='Mahmood'
                 value={name}
                 onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='mt-7' >
              <label htmlFor="">Email :</label>
              <input type="email" className=' mt-3 w-full appearance-none rounded-xl border-2 border-white bg-transparent py-2 px-2 leading-tight text-white placeholder:italic focus:outline-none focus:border-blue-600' placeholder='vous@exemple.fr' 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='mt-7' >
              <label htmlFor="">Mot de passe :</label>
              <input type="password" className=' mt-3 w-full appearance-none rounded-xl border-2 border-white bg-transparent py-2 px-2 leading-tight text-white placeholder:italic focus:outline-none focus:border-blue-600' placeholder='*********' 
              value={password}
              onChange={(e) => setPassWord(e.target.value)}
              />
            </div>
            <div className='mt-7' >
              <label htmlFor="">Confirmation de mot de passe :</label>
              <input type="password" className=' mt-3 w-full appearance-none rounded-xl border-2 border-white bg-transparent py-2 px-2 leading-tight text-white placeholder:italic focus:outline-none focus:border-blue-600' placeholder='*********' 
              value={confirmPassword}
              onChange={(e) => checkValidation(e.target.value)}
              />
            </div>
            <div className='mt-7' >
              <button type='submit' className='bg-[#1E3A8A] px-6 py-2.5 rounded-full text-sm hover:bg-white hover:text-[#1E3A8A]' >Inscription</button>
            </div>
          </form>
        </div>
        
      </section> 
    </div>
  )
}

export default Contact

