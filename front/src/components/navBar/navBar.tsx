'use client'
import { IUserSession } from '@/types/ITypes'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'


const NavBar:React.FC = () => {
  const [userSession, setUserSession] = useState<IUserSession>()
  const pathname = usePathname()

  useEffect(()=>{
    const localUser = localStorage.getItem("userSession")
    setUserSession(JSON.parse(localUser!))
  },[pathname])

  const handleClose = ()=>{
    localStorage.clear()
    setUserSession(undefined)
  }

  return (
    <nav className="flex z-50 p-4 pl-8 justify-between md:ml-12 lg:ml-16 bg-gradient-to-l from-blue-500 via-purple-100 to-green-500 rounded-l-full fixed shadow-ps right-0 top-[2px] w-[98%]">
      <h2 className='hover:scale-125 cursor-pointer duration-500'><Link href="/">Ecommerce</Link></h2>
      <ul className="flex gap-2 md:gap-8 cursor-pointer">
        <li className='navListStyles'><Link href="/">Home</Link></li>
        <li className='navListStyles'><Link href="/products">Productos</Link></li>
        
        {
          userSession?.token ? (
            <>
            <li className='navListStyles'><Link href="/carrito">Carrito</Link></li>
            <li className='navListStyles'><Link href="/orders">Ordenes</Link></li>
            <li className='navListStyles'><Link href="/">
              <div onClick={handleClose} className='flex gap-2 mr-8'>
                <div>
                  <Image src="./logoIngreso.svg" width={30} height={30} alt='logo de ingreso' />
                </div>
                <div>
                  Cerrar Sección
                </div>  
              </div>
            </Link></li>
            </>
          ):(
            <li className='navListStyles'><Link href="/inicio">Iniciar Sección</Link></li>
          )
        }
        
      </ul>
    </nav>
  )
}

export default NavBar
