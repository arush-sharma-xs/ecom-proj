import React from 'react'

export default function layout({children}:{children:React.ReactNode}) {
  return (
    <div className='flex pt-20 justify-center h-screen bg-gradient-to-b from-white to-red-100/80'>{children}</div>
  )
}
