import { ILoginProps, IRegisterProps } from "@/types/ITypes"

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
            throw Error("usuario o contraseña no concide con usuario registrado")
        }

    } catch (error: any){
        alert("usuario o contraseña no concide con usuario registrado")
        
    }
    
}