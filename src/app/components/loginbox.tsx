'use client'
import { loginUser } from '@/lib/auth/auth'
import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'

const Loginbox = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    try {
      const user = await loginUser(email, password)
      console.log('Login successful:', user)
    } catch (err: any) {
      console.error('Login failed:', err.message)
    }
  }

  return (
    <div className='flex flex-col m-1 md:w-1/2  rounded-md items-center justify-center gap-9'>
      {/* Welcome Banner */}
      <div className='flex flex-col items-center md:w-1/2 lg:w-[450px]'>
        <p className='text-4xl text-black font-semibold text-center'>
          Welcome to Virtual-Labs
        </p>
        <p className='text-sm text-gray-500 text-center italic'>
          Log in to unleash productivity
        </p>
        <div className='bg-black w-full h-[1px] mt-5 mb-2'></div>
      </div>

      {/* Credentials field div */}
      <div className='flex flex-col gap-7 items-center justify-center md:w-1/2 lg:w-[450px]'>
        {/* Email Input Field */}
        <div className='flex flex-col items-start gap-1 relative md:w-1/2 lg:w-[450px]'>
          <label
            htmlFor='emailbox'
            className='text-md text-black font-semibold bg-white absolute ml-5 z-10'
          >
            Email
          </label>
          <input
            id='emailbox'
            type='text'
            placeholder='Enter your email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            className='rounded-lg h-[40px] w-full text-md text-black px-3 border border-black bg-white mt-3 placeholder:text-sm placeholder:text-gray-400'
          />
        </div>

        {/* Password Input Field */}
        <div className='flex flex-col items-start gap-1 relative w-full md:w-1/2 lg:w-[450px]'>
          <label
            htmlFor='passwordbox'
            className='text-md bg-white font-semibold text-black absolute ml-5 z-10'
          >
            Password
          </label>
          <div className='relative w-full'>
            <input
              id='passwordbox'
              type={isPasswordVisible ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder='Enter your password'
              className='rounded-lg h-[40px] w-full px-3 pr-10 mt-3 text-lg text-black border border-black bg-white placeholder:text-sm placeholder:text-gray-400'
            />
            {/* Eye Icon */}
            <button
              type='button'
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              className='absolute right-3 top-4 text-black'
            >
              {isPasswordVisible ? (
                <div className='flex items-center justify-center w-full h-full text-2xl'>
                  <FaRegEyeSlash />
                </div>
              ) : (
                <div className='flex items-center justify-center text-2xl'>
                  <FaRegEye />
                </div>
              )}
            </button>
          </div>
          <button className='self-end text-xs font-semibold hover:underline'>
            Forgot Password?
          </button>
        </div>
      </div>

      {/* Log In Button */}
      <button
        onClick={handleLogin}
        className='bg-blue-600 w-full md:w-1/2 lg:w-[450px] text-center py-2 px-4 rounded-md text-white text-sm font-semibold border border-black hover:bg-blue-500'
      >
        Log In
      </button>
    </div>
  )
}

export default Loginbox
