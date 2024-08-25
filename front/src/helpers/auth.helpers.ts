import { ILoginProps, IRegisterProps } from "@/types/ITypes"
import Swal from "sweetalert2"

const APIURL = process.env.NEXT_PUBLIC_API_URL

export async function register (userData: IRegisterProps){
    try{
        
        const res = await fetch(`${APIURL}/users/register`,{
            method: "POST",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        if(res.ok){
            return res.json()
        }else{
            throw Error("fallo el registro de usuario")
        }

    } catch (error: any){
        throw new Error(error)
        
    }
    
}

export async function login (userData: ILoginProps){
    try{
        
        const res = await fetch(`${APIURL}/users/login`,{
            method: "POST",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        if(res.ok){
            return res.json()
        }else{
            throw Error("usuario o contraseña no coincide con usuario registrado")
        }

    } catch (error: any){
        Swal.fire({
            title:"No Coincide",
            text:"Usuario o contraseña no coincide con usuario registrado",
            icon:"error",
            showConfirmButton: false,
            timer:3000,
            timerProgressBar:true
        })
    }
    
}