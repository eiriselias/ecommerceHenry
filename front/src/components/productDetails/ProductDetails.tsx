'use client'
import IProduct from '@/types/IProduct'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { IUserSession } from '@/types/ITypes'
import { useRouter } from 'next/navigation'

const ProductDetails = ({id, name, description, price, stock, image, categoryId}: IProduct) => {
  const router = useRouter()
  const [userSession, setUserSession] = useState<IUserSession>()

  useEffect(()=>{
    const localUser = localStorage.getItem("userSession")
    setUserSession(JSON.parse(localUser!))
  },[])

  const handleAdd = ()=>{

    if(!userSession?.token){
      alert("Debe haber un inicio de sección para agregar al carrito");
      router.push("/inicio");
    }else{
      const cart: IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]")
      const productExist = cart.some((prod: IProduct)=>{
        if(prod.id === id) return true
        return false
      })
      if(productExist){
        alert("Este producto ya existe en tu carro de compras")
        router.push("/carrito")
      }else{
        cart.push({
          id,
          name, 
          description,
          price,
          stock,
          image,
          categoryId
        })
        console.log(cart);
        
        localStorage.setItem("cart", JSON.stringify(cart))
        alert("producto agregado con exito")
        router.push("/carrito")
      }
    }
  }
    
  return (
    <div className="flex justify-center">
      <div className='grid grid-cols-2 mt-28 shadow-lg w-10/12 justify-center h-[80vh] border-t-black border-t-2 border-opacity-10'>
        <div className='relative'>
            <Image src={image} alt={name} fill={true} />
        </div>
        <div style={{backgroundImage: `url(${image})`}} className='relative flex flex-col px-32 pt-16 items-center border-l-black border-l-2 border-opacity-10 bg-cover bg-center'>
            <div className='absolute top-[-1.7rem] bg-gradient-to-l from-blue-500 via-purple-100 to-green-500 py-4 px-16 rounded-full z-10'>{name}</div>
            <p className='mt-16 z-10 text-justify'>{description}</p>
            <div className='flex w-full justify-between'>
              <div className='mt-8 z-10'>
                <p>presio: ${price}</p>
                <p>disponible: {stock}</p>
              </div>
              <button onClick={handleAdd} className='z-10 self-end hover:scale-110 hover:bg-green-500 hover:p-2 hover:rounded-md transition-all'>
                <div className='flex flex-col items-center'>
                  <Image 
                    src="/cartAdd.svg"
                    alt="enviar al carrito"
                    width={30}
                    height={30}
                  />
                  <p>Agregar al carrito</p>
                </div>
              </button>
            </div>
          <div className='bg-blue-200 absolute top-0 left-0 w-full h-full opacity-90'></div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
