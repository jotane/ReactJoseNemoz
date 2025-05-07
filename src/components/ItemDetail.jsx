
import React, {useContext, useState} from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/cartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({productDetail}) => {
  const [purchase, setPurchase] = useState(false)
  const {addToCart} = useContext(CartContext)


  const onAdd = (cantidad) => {
    addToCart(productDetail, cantidad)
    setPurchase(true)
    
  }
  

  return (
    <div>
        <h2>{productDetail.name}</h2>
        <img className="imgdetail" src={productDetail.img} alt={productDetail.name}/>
        <p>{productDetail.price}</p>
        <p>stock{productDetail.stock}</p>
        {purchase ? <Link className='btn btn-dark' to='/cart'>Ir al carrito</Link> : <ItemCount stock={productDetail.stock} onAdd={onAdd}/>}
    </div>
  )
}

export default ItemDetail
