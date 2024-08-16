import IProduct from "./IProduct"

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

export interface IUserSession{
    token: string,
    userData:{
        id: number,
        address: string,
        email: string,
        name: string, 
        phone: string,
        orders: []
    }
}

export interface IOrder{
    id: number,
    status: string,
    date: Date,
    products: IProduct[]
}