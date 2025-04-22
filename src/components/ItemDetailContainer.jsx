
import React, { useEffect, useState } from 'react'
import { getOneProducts } from '../mock/asyncService'
import ItemCount from './ItemCount'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState ({})
  const {itemId} = useParams()
  useEffect(() => {
    getOneProducts(itemId)
    .then((res) => setProductDetail(res))

  },[])
  console.log(productDetail)
  return (
    <div>
      <ItemDetail productDetail={productDetail}/>
    </div> 
  )
}

export default ItemDetailContainer

