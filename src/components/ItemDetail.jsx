
import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({productDetail}) => {
  return (
    <div>
        <h2>{productDetail.name}</h2>
        <img className="imgdetail" src={productDetail.img} alt={productDetail.name}/>
        <p>{productDetail.price}</p>
        <p>stock{productDetail.stock}</p>
        <ItemCount stock={productDetail.stock}/>
    </div>
  )
}

export default ItemDetail
