import React from 'react'

import Dogo1 from "@/public/dogo1.png"
import Image from 'next/image'
export default function layout({children}:{children:React.ReactNode}) {
  return (
    <div className='flex pt-20 justify-center h-screen w-screen bg-gradient-to-b from-white to-red-100/80'>{children}
        <div className='absolute top-2'>
          <Image src={Dogo1} width={`300`} height={`100`} alt='background-cliparts'/>
        </div>

    </div>
  )
}
