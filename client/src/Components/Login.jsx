import React from 'react'
import Hands from '../assets/Hands-Phone.png'

export default function Login() {
  return (
    <div className='flex flex-col items-center justify-evenly h-screen'>
      <div className='flex flex-row w-full justify-evenly items-center'>
        <div id="form" className='flex flex-col gap-[20px]'>
          <div className='mb-6 gap-[40px]'>
            <h4 className='text-3xl font-bold leading-9 text-center'>Login to your account</h4>
          </div>
          <div className='flex flex-col'>
            <label for="">Email</label>
            <input type="text" className='input-login' />
          </div>
          <div className='flex flex-col'>
            <label for="">Password</label>
            <input type="text" className='input-login' />
          </div>
          <div className='flex gap-2 pb-4'>
            <input type="checkbox" name="remeber-me" id="" value='Remember me' />
            <label>Remember me</label>
          </div>
          <div className='flex flex-col items-center'>
            {/* <button className='input-login bg-[#64025f] text-white mb-4'>Login</button> */}
            <img src="https://s3.amazonaws.com/idme/developer/idme-buttons/assets/img/signin.svg" className='w-[28rem] h-[40px] bg-[#07833d] rounded-md mb-6'/>
            <p className='text-blue-600'>Forgotten your password?</p>
          </div>
        </div>
        <div id="logo">
          <img src={Hands} className='h-[587px] w-[]' />
        </div>
      </div>
    </div>
  )
}
