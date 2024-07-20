import Link from 'next/link'
import React from 'react'


const NavBar:React.FC = () => {
  return (
    <div className="flex p-4 pl-8 justify-between ml-16 mt-2 bg-gradient-to-l from-blue-500 via-purple-100 to-green-500 rounded-l-full sticky shadow-ps">
      <h2 className='hover:scale-125 cursor-pointer'><Link href="/">Ecommerce</Link></h2>
      <ul className="flex gap-8 cursor-pointer">
        <li className='hover:scale-125'><Link href="/">Home</Link></li>
        <li className='hover:scale-125'>Productos</li>
        <li className='hover:scale-125'>Carrito</li>
        <li className='hover:scale-125'><Link href="/inicio">Iniciar Sección</Link></li>
      </ul>
    </div>
  )
}

export default NavBar
