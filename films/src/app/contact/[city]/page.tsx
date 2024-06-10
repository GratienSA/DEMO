import React from 'react'
import { Footer } from './Components/Footer/footer'
export type paramsProps = {
    params: {
      city: string
    }
  }


const page = ({ params }: paramsProps) => {
  let myAge = 22
  let myName = 'Kev'

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Page id:{params.city} </h1>
      <p>Bonjour je m'appel, {myName}, et j'ai {myAge} ans.</p>

    
    </main>
  )
}

export default page