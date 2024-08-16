'use client'
import { getOrders } from '@/helpers/orders.helpers'
import { IOrder, IUserSession } from '@/types/ITypes'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import MiniCard from '../miniCard/MiniCard'

const Orders = () => {

    const [userSession, setUserSession] = useState<IUserSession>()
    const [orders, setOrders] = useState<IOrder[]>([])
    const router = useRouter()

    useEffect(()=>{
        const localUser = JSON.parse(localStorage.getItem("userSession")!)
        setUserSession(localUser)
    },[])

    const fetchData = async ()=>{
        const ordersResponse = await getOrders(userSession?.token!)
        setOrders(ordersResponse)
        
    }

    useEffect(()=>{
        
        
        if(userSession?.userData.name){
            userSession.userData.name === undefined ? router.push("/inicio") : fetchData()
        }
    },[userSession?.userData])

  return (
    <div>
      <div className='flex flex-col mt-32 mx-32'>
            {
                
                orders && orders.length > 0 ? ( orders?.map((order)=>{
                    
                    return(
                        <>
                            <div key={order.id}>
                                <p>{new Date(order.date).toDateString()}</p>
                                <p>Estado: {order.status.toLocaleUpperCase()}</p>
                                <div className='grid grid-cols-4'>
                                    {
                                        order.products.map((prod)=>{
                                            return(
                                                <MiniCard key={prod.id} {...prod}/>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <hr className='mb-4'/>
                        </>
                    )
                })) : (
                    <p className='self-center mt-32'>El usuario no ha realizado compras hasta el momento</p>
                )
            }
        </div>
    </div>
  )
}

export default Orders
