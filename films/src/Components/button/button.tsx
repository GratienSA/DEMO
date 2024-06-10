import { ButtonProps } from '@/Utils/types'
import React from 'react'

export const Button = ({ name, additionalCss }: ButtonProps) => {
  return (
    <button className={`text-white  m-4 w-32 h-8  ${additionalCss}`}>
      {name}
    </button>
  )
}