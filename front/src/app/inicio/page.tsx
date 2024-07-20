//React
import React from 'react'

//componentes
import NavBar from '@/components/navBar/navBar';

//next
import Image from 'next/image';
import Link from 'next/link';

const Inicio = () => {
  return (
    <>
        
        <div className='flex justify-center'>
            <div className='containerFormulario flex flex-col pt-8 items-center shadow-ps relative'>
                <Image src="./logoIngreso.svg" width={200} height={200} alt='logo de ingreso'/>
                <form className='flex flex-col  items-center w-3/5'>
                    <h2 className='mb-8 mt-8 text-white text-3xl'>Iniciar Sección</h2>
                    <input type="text" placeholder='Correo Electronico' className='mb-8 p-1 w-full rounded-lg hover:shadow-ps focus:shadow-ps transition-all' />
                    <input type="password" placeholder='Contraseña' className='mb-8 p-1 w-full rounded-lg hover:shadow-ps focus:shadow-ps transition-all' />
                    <button className='bg-green-500 py-2 px-8 rounded-full hover:shadow-ps hover:scale-110 transition-all'>Ingresar</button>
                    <span className='self-end justify-self-end text-white absolute bottom-4 right-8 cursor-pointer hover:scale-110 transition-all'><Link href="/registrarse">Registrarse</Link></span>
                </form>
            </div>
        </div>
    </>
  )
}

export default Inicio;
