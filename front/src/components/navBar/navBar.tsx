'use client'
import { IUserSession } from '@/types/ITypes'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Swal from 'sweetalert2'


const NavBar:React.FC = () => {
  const [userSession, setUserSession] = useState<IUserSession>()
  const [navBar, setNavBar] = useState<boolean>(false)
  const pathname = usePathname()

  useEffect(()=>{
    const localUser = localStorage.getItem("userSession")
    setUserSession(JSON.parse(localUser!))
  },[pathname])

  const handleClose = ()=>{
    localStorage.clear()
    setUserSession(undefined)
    Swal.fire({
      title:"Sección Finalizada",
      text:"Gracias por utilizar nuestro servicio, regresa pronto :)",
      icon:"info",
      showConfirmButton:false,
      timer:3000,
      timerProgressBar:true
    })

  }

  return (
    <nav className="flex z-50 p-4 pl-8 justify-between md:ml-12 lg:ml-16 bg-gradient-to-l from-blue-500 via-purple-100 to-green-500 rounded-l-full fixed shadow-ps right-0 top-[2px] w-[98%]">
      <Link className='flex items-center gap-2 hover:scale-125 cursor-pointer duration-500' href="/">
        <Image src="./store.svg" width={30} height={30} alt='menu' />
        <h2>Ecommerce</h2>
      </Link>
      <button className={`${navBar ? "hidden":"md:hidden"}`} onClick={()=>setNavBar(!navBar)} >
          <Image src="./menu.svg" width={40} height={40} alt='menu' />
      </button>
      <button className={`${navBar ? "md:hidden":"hidden"} absolute right-0 top-2`} onClick={()=>setNavBar(!navBar)} >
          <Image src="./close.svg" width={40} height={40} alt='close' />
      </button>
      <div className={`md:flex ${navBar ? "md:flex":"hidden"}`}>
        <ul className={`md:gap-8 cursor-pointer flex flex-col md:flex-row absolute md:relative left-0 bg-blue-400  md:bg-transparent top-16 md:top-0 w-full`}>
          <li className='navListStyles hover:bg-blue-300 md:hover:bg-transparent p-4 md:p-0'><Link onClick={()=>setNavBar(!navBar)} href="/">Home</Link></li>
          <li className='navListStyles hover:bg-blue-300 md:hover:bg-transparent p-4 md:p-0'><Link onClick={()=>setNavBar(!navBar)} href="/products">Productos</Link></li>
          
          {
            userSession?.token ? (
              <>
              
              <li className='navListStyles hover:bg-blue-300 md:hover:bg-transparent p-4 md:p-0'><Link onClick={()=>setNavBar(!navBar)} href="/carrito">Carrito</Link></li>
              <li className='navListStyles hover:bg-blue-300 md:hover:bg-transparent p-4 md:p-0'><Link onClick={()=>setNavBar(!navBar)} href="/orders">Ordenes</Link></li>
              <li className='navListStyles hover:bg-blue-300 md:hover:bg-transparent p-4 md:p-0'><Link onClick={()=>setNavBar(!navBar)} href="/">
                <div onClick={handleClose} className='flex gap-2 mr-8'>
                  <div className='hidden md:block'>
                    <Image src="./logoIngreso.svg" width={30} height={30} alt='logo de ingreso' />
                  </div>
                  <div>
                    Cerrar Sección
                  </div>  
                </div>
              </Link></li>
              </>
            ):(
              <li className='navListStyles hover:bg-blue-300 md:hover:bg-transparent p-4 md:p-0'><Link onClick={()=>setNavBar(!navBar)} href="/inicio">Iniciar Sección</Link></li>
            )
          }
          
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
