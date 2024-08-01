export interface ILoginProps{
    email: string,
    password: string
}

export interface ILoginErrors{
    email?: string,
    password?: string
}

export interface IRegisterProps{
    name: string,
    email: string,
    address: string,
    phone: string,
    password: string,
    passwordConfirm: string
}

export interface IRegisterErrors{
    name?: string,
    email?: string,
    address?: string,
    phone?: string,
    password?: string,
    passwordConfirm?: string
}