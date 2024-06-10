'use client'
import { Button } from '@/components/Button/Button'
import { Buttons } from '@/components/Buttons/Buttons'
import { Card } from '@/components/Card/Card'
import { Cards } from '@/components/Cards/Cards'
import { Footer } from '@/components/Footer/footer'
import { Header } from '@/components/Header/Header'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { Oval } from 'react-loader-spinner'
import { FaShoppingBasket } from "react-icons/fa";
export default function Home() {
  const router = useRouter()
  let id = 121313121

  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-between p-24">
        <h1>This is a Home page for our services - pathe Simplon company </h1>
        <FaShoppingBasket />
        <button
          className="w-32 h-8 bg-green-400 text-white p-2 m-4 rounded-md"
          onClick={() => {
            toast.success('Login successfull')
          }}
        >
          Success
        </button>

        <button
          className="w-32 h-8 bg-red-600 text-white p-2 m-4 rounded-md"
          onClick={() => {
            toast.error('Login failed')
          }}
        >
          Error
        </button>
        <Oval
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />

        <Cards title="Our childhood heroes">
          <Card
            name="Jimmy neutron"
            image="https://ih1.redbubble.net/image.273313361.1479/flat,750x,075,f-pad,750x1000,f8f8f8.u7.jpg"
            job={'Apprenti ingénieur'}
            additionalCss="w-full h-64 object-cover"
          />
          <Card
            name="Sangoku"
            image="https://store-images.s-microsoft.com/image/apps.27838.13687659141052070.597c3f80-25bd-4e0f-9e57-c5b222575852.9cce8847-c517-4297-a8d1-f773dc56f8cb?q=90&w=480&h=270"
            job={'Casseur de machoire'}
            additionalCss="w-full h-64 object-cover"
          />
          <Card
            name="Digimon"
            image="https://www.mangatori.fr/1828711-large_default/megahouse-meho834462-digimon-adventure-look-up-gabumon-11-cm.jpg"
            job={'Monstre de combat'}
            additionalCss="w-full h-64 object-cover"
          />
        </Cards>

        <ul>
          {/* // On peut faire de la navigation de 3 manières différentes. */}
          <li>
            {/* 1) La version classique, non optimisée. */}
            <a href="/contact">Contact</a>
          </li>
          <li>
            {/* 2) NextJs propose un composant Link, qui est optimisé pour le SEO et le rendu coté serveur */}
            <Link href="/profile"> Profile</Link>
          </li>

          {/* 3) Dans React, on peut rendre nimportequelle élément cliquable, 
        pour cela il suffit de passer la propriété onClick, avec une fonction fléchée.
        On pourra ainsi passer le router de Next Js , c-a-d sa fonction ( hooks ) useRouter
        // avec sa fonction push 
         */}

          <Buttons name="Tous mes boutons" additionalCss="bg-black text-white">
            <Button
              name={'Follow me '}
              additionalCss={' bg-purple-500  rounded-full'}
              functionToPlay={() => {
                alert('ola')
              }}
            />
            <Button
              name={'Unfollow me '}
              additionalCss={' black-500  rounded-md'}
              functionToPlay={() => console.log('Hello')}
            />
            <Button
              name={'tips me '}
              additionalCss={' black-500  rounded-md'}
              functionToPlay={() => console.log('Hello')}
            />
          </Buttons>
          <li
            onClick={() => {
              router.push(`profile/${id}`)
            }}
          >
            Self profile
          </li>
        </ul>
      </main>
      <Footer />
    </div>
  )
}
