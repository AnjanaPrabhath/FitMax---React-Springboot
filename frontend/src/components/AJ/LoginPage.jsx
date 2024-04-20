import React from 'react'
import Login from './Login'
import LogoImg from '../../assets/logo.png'

const LoginPage = () => {
  return (
    <div className='flex w-full h-screen'>
      
      
      {/* left screen */}
      <div className='hidden  lg:flex h-full w-1/2 items-center justify-center bg-white'>
        {/* <div className='w-60 h-60 bg-gradient-to-tr from-violet-700 to-blue-600 rounded-full' /> */}

        <img src={LogoImg} className='w-[600px]'
        alt="" />
        
      </div>

      {/* right screen */}
      <div className='w-full flex items-center justify-center lg:w-1/2 bgb bg-white'>
       
        <Login/>

      </div>
    </div>
  )
}

export default LoginPage