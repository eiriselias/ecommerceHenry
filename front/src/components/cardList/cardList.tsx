import products from '@/helpers/products'
import React from 'react'
import Card from '../card/card';

const CardList = () => {
    const product = products;
  return (
    <div>
      {
        product && product?.map((prod)=>{
            return(
                <Card key={prod.id} {...prod}/>
            )
        })
      }
    </div>
  )
}

export default CardList
