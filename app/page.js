'use client'
import React from 'react'
import usePokemons from '@/components/ usePokemos';
import PokeCard from '@/components/pokeCard';
import Image from 'next/image';

export default function Home() {

  const { pokeInfo, loading } = usePokemons();

  return (
    <React.Fragment>
      <header className=' w-screen flex flex-row bg-cyan-800'>
        <nav className='w-full h-20 flex items-center justify-center'>
          <ul className='flex justify-evenly w-3/5 text-gray-100'>
            <li className=' cursor-pointer hover:text-gray-300'>Categories</li>
            <li className=' cursor-pointer hover:text-gray-300'>Years</li>
            <li className=' cursor-pointer hover:text-gray-300'>Type</li>
            <li className=' cursor-pointer hover:text-gray-300'>Random</li>
          </ul>
        </nav>
      </header >
      <main className=' w-screen flex flex-col min-h-[calc(100vh-80px)]  bg-gray-100 '>
        <ul className='flex flex-wrap md:justify-start gap-6 justify-center items-center p-9 max-w-[1320px] mx-auto '>

          {
            (!pokeInfo.length > 0) &&
            <Image src={'/poke.svg'} width={'280'} height={'280'} alt='Poke' className=' animate-spin absolute top-0 bottom-0 right-0 left-0 m-auto shadow-lg rounded-fullgit '/>

          }

          {
            (pokeInfo) &&
            pokeInfo.map(poke => (
              <PokeCard
                key={poke.id}
                id={poke.id}
                name={poke.name}
                img={poke.img}
              />
            ))
          }

        </ul>
      </main>
    </React.Fragment>

  )
}
