"use client";

import React from 'react'
import { RecoilRoot } from 'recoil'

export default function layout({children} : {children : React.ReactNode}) {
  return <RecoilRoot>{children}</RecoilRoot>
}
