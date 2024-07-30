import React from 'react'
import Image from 'next/image'

const RegistrarseForm = () => {
  return (
    <>
       <div className='flex justify-center'>
            <div className='containerFormulario flex flex-col pt-8 items-center shadow-ps relative'>
                
                <form className='flex flex-col  items-center w-3/5'>
                    <h2 className='mb-8 mt-8 text-white text-3xl'>Registrarse</h2>
                    <input type="text" placeholder='Nombre de usuario' className='mb-8 p-1 w-full rounded-lg hover:shadow-ps focus:shadow-ps transition-all' />
                    <input type="text" placeholder='Correo Electronico' className='mb-8 p-1 w-full rounded-lg hover:shadow-ps focus:shadow-ps transition-all' />
                    <input type="text" placeholder='Direccion' className='mb-8 p-1 w-full rounded-lg hover:shadow-ps focus:shadow-ps transition-all' />
                    <input type="text" placeholder='telefono' className='mb-8 p-1 w-full rounded-lg hover:shadow-ps focus:shadow-ps transition-all' />
                    <input type="password" placeholder='Contraseña' className='mb-8 p-1 w-full rounded-lg hover:shadow-ps focus:shadow-ps transition-all' />
                    <input type="text" placeholder='Confirmar Contraseña' className='mb-8 p-1 w-full rounded-lg hover:shadow-ps focus:shadow-ps transition-all' />
                    <button className='bg-green-500 self-end mt-12 py-2 px-8 rounded-full hover:shadow-ps hover:scale-110 transition-all'>Registrarse</button>
                </form>
                <Image className='absolute bottom-16 left-16 hidden lg:block' src="./logoRegistro.svg" width={200} height={200} alt='logo de ingreso'/>
            </div>
        </div>
    </>
  )
}

export default RegistrarseForm
