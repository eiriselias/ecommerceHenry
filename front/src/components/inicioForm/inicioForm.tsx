'use client'
import { login } from "@/helpers/auth.helpers"
import { validateLoginForm } from "@/helpers/validate"
import { ILoginErrors, ILoginProps } from "@/types/ITypes"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"

const InicioForm = () => {

    const router = useRouter()
    const initialState = {
        email: "",
        password:""
    }

    const [dataUser, setDataUser] = useState<ILoginProps>(initialState);
    const [errors, setErrors] = useState<ILoginErrors>(initialState);
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
        const response = await login(dataUser)
        const {token, user} = response;
        const clearUser = {
            id: user.id,
            name: user.name,
            address: user.address,
            phone: user.phone,
            email: user.email,
            orders: user.orders
        }
        localStorage.setItem("userSession", JSON.stringify({token, userData: clearUser}))
        Swal.fire({
            title:"Inicio Sección",
            text:"Inicio de sección exitoso",
            icon:"success",
            showConfirmButton:false,
            timer:3000,
            timerProgressBar:true
        })
        router.push("/products")
    }

    useEffect(()=>{
        const errors = validateLoginForm(dataUser)
        setErrors(errors)

        //verifica que los campos requeridos esten llenos para habilitar el boton de submit
        const allFilled = Object.values(dataUser).every(field => field.trim() !== '');
        setIsDisabled(!allFilled);

    },[dataUser])

    return (
        <div className='flex justify-center mt-16'>
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
                        className='p-1 w-full rounded-lg hover:shadow-ps focus:shadow-ps transition-all' 
                        required
                    />
                    {
                        errors.email && <span className="text-red-400 mt-2">{errors.email}</span>
                    }
                    <input 
                        type="password" 
                        name="password" 
                        placeholder='Contraseña' 
                        value={dataUser.password}
                        onChange={handelChange}
                        className='mt-8 p-1 w-full rounded-lg hover:shadow-ps focus:shadow-ps transition-all' 
                        required
                    />
                    {
                        errors.password && <span className="text-red-400 mt-2">{errors.password}</span>
                    }
                    <button 
                        type="submit" 
                        disabled={isDisabled}
                        className='bg-green-500 py-2 px-8 rounded-full hover:shadow-ps hover:scale-110 transition-all mt-8 
                                    disabled:hover:scale-100 disabled:hover:shadow-none disabled:opacity-10'>
                            Ingresar
                    </button>
                    <span className='self-end justify-self-end text-white absolute bottom-4 right-8 cursor-pointer hover:scale-110 transition-all'><Link href="/registrarse">Registrarse</Link></span>
                </form>
            </div>
        </div>
    )
}

export default InicioForm
