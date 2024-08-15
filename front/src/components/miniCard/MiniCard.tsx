import IProduct from '@/types/IProduct'
import React from 'react'
import Image from 'next/image'

const MiniCard = (producto: IProduct) => {
  const {image, price, name} = producto
  return (
    <div className='flex items-center gap-10 my-4'>
        <div>
            <Image src={image} alt={name} width={150} height={150}/>
        </div>
        <div>
            <h3>{name}</h3>
            <p>Precio: ${price}</p>
        </div>
    </div>
  )
}

export default MiniCard
