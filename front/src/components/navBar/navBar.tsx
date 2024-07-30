import Link from 'next/link'
import React from 'react'


const NavBar:React.FC = () => {
  return (
    <nav className="flex z-10 p-4 pl-8 justify-between ml-4 md:ml-12 lg:ml-16 mt-2 bg-gradient-to-l from-blue-500 via-purple-100 to-green-500 rounded-l-full sticky shadow-ps">
      <h2 className='hover:scale-125 cursor-pointer duration-500'><Link href="/">Ecommerce</Link></h2>
      <ul className="flex gap-2 md:gap-8 cursor-pointer">
        <li className='navListStyles'><Link href="/">Home</Link></li>
        <li className='navListStyles'>Productos</li>
        <li className='navListStyles'>Carrito</li>
        <li className='navListStyles'><Link href="/inicio">Iniciar Sección</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar
