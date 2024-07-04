import React from 'react'
import beagle from "@/public/beagle.jpg"
import Image from 'next/image'

export default function layout({children}:{children:React.ReactNode}) {
  return (
    <div className={`flex h-screen pt-20 md:pl-20 screen justify-center md:justify-start w-screen bg-black`}>
      {children}
    </div>
  )
}
