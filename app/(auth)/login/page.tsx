"use client"

import React, {useState, useRef} from 'react'
import Link from "next/link"
import {motion} from "framer-motion"
import {permanentRedirect} from "next/navigation"

export default function page() {
  const [error, setError] = useState("");
  const ref = useRef();

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();

    const form = ref.current;
    const fd = new FormData(form);  
    
    try {
        axios.post("/user/login", fd)
        permanentRedirect("/dashboard")
    } catch(err:any) {
      setError(err.message)
      // anything goes bad handle here
    }

  }
  
  
  
  
  
  return (
   
   <motion.div initial={{ x:-500, y:0 }} animate={{x:0, y:0}} className='relative z-999999 flex'>
        <form ref={ref} onSubmit={handleSubmit} className='bg-white/90 h-[300px] p-8 rounded-lg shadow-xl flex items-center justify-start flex-col gap-4 '>
            <h2 className='text-xl font-semibold'>!! Welcome back !!</h2>
            <input type="email" required placeholder='give me your email' name="email" className='transition-all duration-200 focus:ring-2 focus:shadow-lg ring-black focus:scale-105 px-6 py-2 outline-none text-md bg-black/40 text-white placeholder:text-white placeholder:text-white/80 rounded-full ' />
            <input type="password" required placeholder='give me your password' name="password" className='transition-all duration-200 focus:ring-2 focus:shadow-lg ring-black px-6 py-2 outline-none text-md bg-black/40 text-white placeholder:text-white placeholder:text-white/80 rounded-full focus:outline-2 focus:scale-105' />
            <button type="submit" className='px-4 py-2 bg-black rounded-full text-white transition-all ease-in-out duration-100 delay-100  hover:scale-105 hover:shadow-lg'>Login</button>
            {error && <p className="text-xs text-red-900">{error}</p>}
            <p className="text-sm">Don't have account ? <Link href="/register">Create one</Link></p>
        </form>

    </motion.div>  
  )
}
