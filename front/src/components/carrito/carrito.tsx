'use client'
import React, { useEffect, useState } from 'react'
import MiniCard from '../miniCard/MiniCard'
import IProduct from '@/types/IProduct'
import Link from 'next/link'
import { createOrders } from '@/helpers/orders.helpers'
import { IUserSession } from '@/types/ITypes'
import { useRouter } from 'next/navigation'

const CompCarrito = () => {
    
    const [total, setTotal] = useState <number> (0)
    const [producto, setProdcuto] = useState<IProduct[]>([])
    const [userSession, setUserSession] = useState<IUserSession>()
    const router = useRouter()

    useEffect(()=>{
        const localUser = localStorage.getItem("userSession")
        setUserSession(JSON.parse(localUser!))
    },[])

    useEffect(()=>{
        const cart:  IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]")
        if(cart){
            let valorTotal = 0;
            cart.map((prod:IProduct)=>{
                valorTotal = valorTotal + prod.price
            })
            setTotal(valorTotal);
            setProdcuto(cart)
        }
    },[])

    const handleCompra = async ()=>{
        const idProducts = producto.map((prod)=> prod.id)
        await createOrders(idProducts, userSession?.token!)
        console.log(userSession);
        
        alert("Compra completada con exito...")
        setProdcuto([])
        setTotal(0)
        localStorage.setItem("cart", "[]")
        router.push("/orders")
    }

  return (
    <div className='grid grid-cols-2 mt-20 mx-8'>
        <div className='flex flex-col'>
            {
                producto && producto.length > 0 ? ( producto?.map((produc)=>{
                    
                    return(
                        <>
                            <MiniCard key={produc.id} {...produc}/>
                            <hr />
                        </>
                    )
                })) : (
                    <p className='self-center mt-32'>No ha agregados productos al carrito de compras</p>
                )
            }
        </div>
        <div className='justify-self-center self-center bg-blue-400 bg-opacity-50 p-16 rounded-lg shadow-ps'>
            <h2 className=''>Valor Total</h2>
            <p className='text-red-700'>${total}</p>
            <br />
            <div  className='bg-blue-400 px-8 py-4 rounded-full hover:scale-105 mt-16 shadow-lg hover:cursor-pointer'>
                <Link href="/products">Agregar Mas</Link>
            </div>
            <div className='bg-green-400 px-8 py-4 rounded-full hover:scale-105 mt-4 text-center shadow-lg hover:cursor-pointer'>
                <button onClick={handleCompra}>Comprar</button>
            </div>
        </div>
    </div>
  )
}

export default CompCarrito
