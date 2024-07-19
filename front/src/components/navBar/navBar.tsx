import React from 'react'
import style from './navBar.module.css'

const NavBar:React.FC = () => {
  return (
    <div className="flex p-4 justify-between mx-16">
      <h2 >Ecommerce</h2>
      <ul className="flex gap-4">
        <li>Home</li>
        <li>Productos</li>
        <li>Carrito</li>
        <li>Iniciar Sección</li>
      </ul>
    </div>
  )
}

export default NavBar
