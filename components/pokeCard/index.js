import React from 'react'
import Image from 'next/image'

const PokeCard = ({ 
    id,
    name,
    img 
}) => {
    return (
        <li className='flex flex-col h-96 w-72  rounded-2xl shadow-md mx-auto  bg-slate-950 text-gray-300 hover:animate-bounce cursor-pointer'>
            <div className='flex justify-between items-center px-6 py-2' >
                <span className='flex gap-3'>

                    <Image src={'/poke.svg'} width={'20'} height={'20'} alt='like icomn' />

                    {id}
                </span>

                
            </div>

            <div className=' h-full bg-cyan-500'>
                <img src={img}
                    className=' w-full h-full object-cover'
                />
            </div>

            <div className='flex justify-center items-center'>
                <span>{name}</span>
            </div>
        </li>
    )
}

export default PokeCard