"use client"
import React from 'react'
import Link from "next/link"
import {motion} from "framer-motion"

export default function page() {
  return (
   
   <motion.div initial={{ x:-500, y:0 }} animate={{x:0, y:0}} className='relative z-999999 flex'>
        <form action="#" className='bg-white/90 h-[300px] p-8 rounded-lg shadow-xl flex items-center justify-start flex-col gap-4 '>
            <h2 className='text-xl font-semibold'>!! Welcome back !!</h2>
            <input type="email" required placeholder='give me your email' name="email" className=' px-6 py-2 outline-none text-md bg-black/40 text-white placeholder:text-white placeholder:text-white/80 rounded-full' />
            <input type="password" required placeholder='give me your password' name="password" className=' px-6 py-2 outline-none text-md bg-black/40 text-white placeholder:text-white placeholder:text-white/80 rounded-full' />
            <button type="submit" required className='px-4 py-2 bg-black rounded-full text-white transition-all ease-in-out duration-100 delay-100 hover:scale-105 hover:shadow-lg'>Login</button>
            <p className="text-sm">Don't have account ? <Link href="/register">Create one</Link></p>
        </form>

    </motion.div>  
  )
}
