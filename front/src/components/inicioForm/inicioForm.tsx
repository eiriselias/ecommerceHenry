'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const InicioForm = () => {

    const initialState = {
        email: "",
        password:""
    }

    const [dataUser, setDataUser] = useState(initialState);

    const handelChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target;
        setDataUser({
            ...dataUser,
            [name]: value
        })
    }

    const handelSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        alert("se envio el formulario")
    }

    return (
        <div className='flex justify-center'>
            <div className='containerFormulario flex flex-col pt-8 items-center shadow-ps relative'>
                <Image src="./logoIngreso.svg" width={200} height={200} alt='logo de ingreso' />
                <form className='flex flex-col  items-center w-3/5' onSubmit={handelSubmit}>
                    <h2 className='mb-8 mt-8 text-white text-3xl'>Iniciar Sección</h2>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder='Correo Electronico' 
                        value={dataUser.email}
                        onChange={handelChange}
                        className='mb-8 p-1 w-full rounded-lg hover:shadow-ps focus:shadow-ps transition-all' 
                        
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder='Contraseña' 
                        value={dataUser.password}
                        onChange={handelChange}
                        className='mb-8 p-1 w-full rounded-lg hover:shadow-ps focus:shadow-ps transition-all' 
                    />
                    <button type="submit" className='bg-green-500 py-2 px-8 rounded-full hover:shadow-ps hover:scale-110 transition-all'>Ingresar</button>
                    <span className='self-end justify-self-end text-white absolute bottom-4 right-8 cursor-pointer hover:scale-110 transition-all'><Link href="/registrarse">Registrarse</Link></span>
                </form>
            </div>
        </div>
    )
}

export default InicioForm
