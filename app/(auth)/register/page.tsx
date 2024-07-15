"use client";

import React, { useRef, useState } from 'react'
import Link from "next/link"
import {motion} from "framer-motion"
import axios from "@/app/axios.config"
import {permanentRedirect} from "next/navigation"

export default function page() {
  const [error, setError] = useState("");
  const ref = useRef();

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();

    const form = ref.current;
    const fd = new FormData(form);  
    
    const userData = {
      name : fd.get("name"),
      email : fd.get("email"),
      password : fd.get("password")
    }

    console.log(userData)

    try {
        const res = await axios.post("/user/register", userData)
        permanentRedirect("/product")
    } catch(err:any) {
      setError(err.message)
      // anything goes bad handle here
    }

  }
  
  return (
   <motion.div initial={{ x:-500, y:0 }} animate={{x:0, y:0}} className='relative z-999999 flex'>
        <form ref={ref} onSubmit={handleSubmit} className='bg-white/90 h-[350px] p-8 rounded-lg shadow-xl flex items-center justify-start flex-col gap-4 '>
            <h2 className='text-xl font-semibold'>!! Welcome !!</h2>
            <input type="text" required placeholder='give me your name' name="name" className='transition-all duration-200 focus:ring-2 focus:shadow-lg ring-black focus:scale-105 px-6 py-2 outline-none text-md bg-black/40 text-white placeholder:text-white placeholder:text-white/80 rounded-full' />
            <input type="email" required placeholder='give me your email' name="email" className='transition-all duration-200 focus:ring-2 focus:shadow-lg ring-black focus:scale-105 px-6 py-2 outline-none text-md bg-black/40 text-white placeholder:text-white placeholder:text-white/80 rounded-full' />
            <input type="password" required placeholder='give me your password' name="password" className='transition-all duration-200 focus:ring-2 focus:shadow-lg ring-black focus:scale-105 px-6 py-2 outline-none text-md bg-black/40 text-white placeholder:text-white placeholder:text-white/80 rounded-full' />
            <button type="submit" className='px-4 py-2 bg-black rounded-full text-white transition-all ease-in-out duration-100 delay-100 hover:scale-105 hover:shadow-lg'>Register</button>
            {error && <p className="text-xs text-red-900">{error}</p>}
            <p className="text-sm">Already have account ? <Link href="/login">Login</Link></p>
        </form>

    </motion.div>  
  )
}
