import { ILoginErrors, ILoginProps, IRegisterErrors, IRegisterProps } from "@/types/ITypes";

export function validateLoginForm(values: ILoginProps): ILoginErrors{
    const errors: ILoginErrors = {}
    
    if(values.email && !/\S+@\S+\.\S+/.test(values.email)){
        errors.email =  "El correo no es valido - este@ejemplo.com";
    }

    if(values.password && values.password.length < 4){
        errors.password = "La contraseña debe tener mas de cuatro caracteres"
    }

    return errors
}

export function validateRegisterForm(values: IRegisterProps): IRegisterErrors{
    const errors: IRegisterErrors = {}

    if(values.name && values.name.length < 3){
        errors.name = "El nombre debe contener mas de tres caracteres"
    }

    if(values.email && !/\S+@\S+\.\S+/.test(values.email)){
        errors.email =  "El correo no es valido - este@ejemplo.com";
    }

    if(values.password && values.password.length < 4){
        errors.password = "La contraseña debe tener mas de cuatro caracteres"
    }

    if(values.passwordConfirm && values.passwordConfirm !== values.password){
        errors.passwordConfirm = "La contraseña debe coincidir"
    }

    return errors;
}