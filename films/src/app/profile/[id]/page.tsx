import React from 'react'
import { Footer } from './Components/Footer/footer'
export type paramsProps = {
  params: {
    id: string
  }
}

const page = ({ params }: paramsProps) => {
  let myAge = 22
  let myName = 'Kev'

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Page id:{params.id} </h1>
      <p>Bonjour je m'appel, Kev, et j'ai 33 ans.</p>
      // Consigne 1 , afficher myName et myAge dans une phrase sur cette page
      id. // consigne 2 , dans la page contact, créer une route dynamique qui
      récupère donc un paramètre d'url et l'affiche dans le html.
    </main>
  )
}

export default page