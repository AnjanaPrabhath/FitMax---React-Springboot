import React from 'react'
import LogoImg from '../../assets/logo.png'

const Login = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2'>
        {/* left image */}
        <div>
            <img src={LogoImg} width={600} alt="" />
        </div>

        {/* form */}
        <div>
            <form>
                <h2>LOGIN</h2> 
                <div>
                    <input className='border border-gray-500 rounded-md px-2 py-1 mt-3' type="text" placeholder='username ' />                    
                </div>               
                <div>
                    <input className='border border-gray-500 rounded-md px-2 py-1 my-3' type="password" placeholder='password ' />
                </div>
                <button className='bg-red-500 rounded-md w-[200px] text-center py-1 shadow-sm hover:cursor-pointer text-white font-semibold hover:bg-[#C6091F] duration-500'> LOGIN</button>
                <div>
                    <p><input type="checkbox"/> remember me</p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login