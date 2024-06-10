import React from 'react'
import { Card } from '../Card/Card'
import { CardsProps } from '@/Utils/types'

export const Cards = ({ title, children }: CardsProps) => {
  return (
    <div>
      <h2 className="my-6 ml-8 text-2xl">{title}</h2>

      <div className="flex items-center w-full">{children}</div>
    </div>
  )
}
