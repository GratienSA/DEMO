import { ButtonsProps } from '@/Utils/types'
import React from 'react'

export const Buttons = ({ name, additionalCss, children }: ButtonsProps) => {
  return (
    <div>
      <div>
        <h1>{name}</h1>
        <div className={`flex items-center w-full ${additionalCss}`}>
          {children}
        </div>
      </div>
    </div>
  )
}
