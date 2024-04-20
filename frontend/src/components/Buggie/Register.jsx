import React from 'react'
import {Link} from 'react-router-dom'
import RegisterPage from './RegisterPage'

const Register = () => {
  return (
    <div className='text-black'>
    <h1 className='text-4xl text-center font-bold'>FITMAX</h1>
    <p className='py-3 text-center'>please enter your details </p>
    <div className='w-[500px]'>
        <div className='w-[500px]'>
            <input type="text"
            placeholder='enter your email address'
            className='border border-red-500 text-[#444444]  rounded-md px-2 py-2 my-2 w-[500px]'
            />
        </div>
        <div className='w-[500px]'>
            <input type="text"
            placeholder='first name'
            className='border border-red-500 text-[#444444]  rounded-md px-2 py-2 my-2 w-[500px]'
            />
        </div>
        <div className='w-[500px]'>
            <input type="text"
            placeholder='last name'
            className='border border-red-500 text-[#444444]  rounded-md px-2 py-2 my-2 w-[500px]'
            />
        </div>
        <div className='w-[500px]'>
            <input type="password"
            placeholder='password'
            className='border border-red-500 text-[#444444]  rounded-md px-2 py-2 my-2 w-[500px]'
            />
        </div>
        <div className='w-[500px]'>
            <input type="password"
            placeholder='confirm password'
            className='border border-red-500 text-[#444444]  rounded-md px-2 py-2 my-2 w-[500px]'
            />
        </div>
        <div>

        
    
            <button className='bg-red-500 my-5 px-4 py-2 w-full font-bold text-white hover:bg-red-600 duration-500' >LOGIN</button>              
     
            <p className='text-center'>if you dont have account</p>
        
            
            <button className='border-red-500 border my-5 px-4 py-1 w-full hover:text-red-500 hover:scale-105 duration-500'>Register Now</button>              
            
        </div>
      </div>
    </div>
  )
}

export default Register