'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { IRegisterErrors, IRegisterProps } from '@/types/ITypes';
import { validateRegisterForm } from '@/helpers/validate';
import { register } from '@/helpers/auth.helpers';
import { useRouter } from 'next/navigation';

const RegistrarseForm = () => {
  const router = useRouter();
  const initialState = {
    name: "",
    email: "",
    address: "",
    phone: "",
    password: "",
    passwordConfirm: ""
  }

  const [dataUser, setDataUser] = useState<IRegisterProps>(initialState);
  const [errors, setErrors] = useState<IRegisterErrors>(initialState);
  const [isDisabled, setIsDisabled] = useState(true)

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = e.target;
    setDataUser({
      ...dataUser,
      [name]: value
    })
  }

  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    await register(dataUser)
    alert("Registro completado correctamente")
    router.push("/inicio")
  }

  useEffect(()=>{
    const errors = validateRegisterForm(dataUser)
    setErrors(errors)

    //verifica los campos requeridos para habilitar el boton de submit
    const allFilled = Object.values(dataUser).every(field => field.trim() !== '');
        setIsDisabled(!allFilled);
  },[dataUser])

  return (
    <>
       <div className='flex justify-center mt-16'>
            <div className='containerFormulario flex flex-col pt-8 items-center shadow-ps relative'>
                
                <form onSubmit={handelSubmit} className='flex flex-col  items-center w-3/5'>
                    <h2 className='mb-8 mt-8 text-white text-3xl'>Registrarse</h2>
                    <input 
                      name='name'
                      type="text" 
                      placeholder='Nombre de usuario' 
                      value={dataUser.name}
                      onChange={handelChange}
                      className='p-1 w-full rounded-lg hover:shadow-ps focus:shadow-ps transition-all' 
                      required
                    />
                    {
                        errors.name && <span className="text-red-400 mt-2">{errors.name}</span>
                    }
                    <input 
                      name='email'
                      type="text" 
                      placeholder='Correo Electronico' 
                      value={dataUser.email}
                      onChange={handelChange}
                      className='mt-8 p-1 w-full rounded-lg hover:shadow-ps focus:shadow-ps transition-all' 
                      required
                    />
                    {
                        errors.email && <span className="text-red-400 mt-2">{errors.email}</span>
                    }
                    <input 
                      name='address'
                      type="text" 
                      placeholder='Direccion' 
                      value={dataUser.address}
                      onChange={handelChange}
                      className='mt-8 p-1 w-full rounded-lg hover:shadow-ps focus:shadow-ps transition-all' 
                    />
                    {
                        errors.address && <span className="text-red-400 mt-2">{errors.address}</span>
                    }
                    <input 
                      name='phone'
                      type="text" 
                      placeholder='telefono' 
                      value={dataUser.phone}
                      onChange={handelChange}
                      className='mt-8 p-1 w-full rounded-lg hover:shadow-ps focus:shadow-ps transition-all' 
                    />
                    {
                        errors.phone && <span className="text-red-400 mt-2">{errors.phone}</span>
                    }
                    <input 
                      name='password'
                      type="password" 
                      placeholder='Contraseña' 
                      value={dataUser.password}
                      onChange={handelChange}
                      className='mt-8 p-1 w-full rounded-lg hover:shadow-ps focus:shadow-ps transition-all' 
                      required
                    />
                    {
                        errors.password && <span className="text-red-400 mt-2">{errors.password}</span>
                    }
                    <input 
                      name='passwordConfirm'
                      type="password" 
                      placeholder='Confirmar Contraseña' 
                      value={dataUser.passwordConfirm}
                      onChange={handelChange}
                      className='mt-8 p-1 w-full rounded-lg hover:shadow-ps focus:shadow-ps transition-all' 
                      required
                    />
                    {
                        errors.passwordConfirm && <span className="text-red-400 mt-2">{errors.passwordConfirm}</span>
                    }
                    <button 
                      type='submit' 
                      disabled={isDisabled}
                      className='bg-green-500 self-end mt-12 py-2 px-8 rounded-full hover:shadow-ps hover:scale-110 transition-all 
                                  disabled:hover:scale-100 disabled:hover:shadow-none disabled:opacity-10'>
                        Registrarse
                      </button>
                </form>
                <Image className='absolute bottom-16 left-16 hidden lg:block' src="./logoRegistro.svg" width={200} height={200} alt='logo de ingreso'/>
            </div>
        </div>
    </>
  )
}

export default RegistrarseForm
