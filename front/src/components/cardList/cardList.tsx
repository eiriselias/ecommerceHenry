import products from '@/helpers/products'
import React from 'react'
import Card from '../card/card';
import styles from "./cardList.module.css"

const CardList = () => {
    const product = products;
  return (
    <div className={styles.container}>
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
