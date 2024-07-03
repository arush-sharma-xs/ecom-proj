import Image from 'next/image'
import React from 'react'
import Logo from "@/public/logo.png"

export default function page() {
  return (
    <div className='flex w-[200px] justify-center md:w-[800px]'>
      <form action="#" className='flex flex-col items-center gap-8'>
          <Image src={Logo} width={`200`} height={`200`} alt='Logo' />
          <input type='email' placeholder='Enter your email' className='ring-2 ring-purple-300 outline-purple-600 shadow-md rounded-md placeholder:text-center p-3 md:w-[500px] md:text-xl bg-white/10 hover:bg-white/40' />
          <input type='password' placeholder='Enter your password' className='ring-2 ring-purple-300 outline-purple-600  shadow-md rounded-md placeholder:text-center p-3 md:w-[500px] md:text-xl bg-white/10 hover:bg-white/40' />
          <button type='submit' className='p-4 md:w-[300px] w-[100px] transition delay-100 hover:bg-red-100 hover:scale-110 rounded-lg text-black text-lg font-bold bg-gradient-to-r from-blue-100 to-red-200'>Login</button>
      </form>
    </div>
  )
}
