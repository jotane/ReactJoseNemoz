
import React, { useEffect, useState } from 'react'
import { getOneProducts } from '../mock/asyncService'
import ItemCount from './ItemCount'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { collection, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState ({})
  const [loading, setLoading] = useState(false)
  const {itemId} = useParams()

  //Firebase
useEffect (() =>{
  setLoading(true)
  //conectamos con nuestra collection
  const productsCollection = collection(db, 'productos')
  //crea la ref del doc
  const docRef= doc(productsCollection, itemId)

  getDoc(docRef)
  .then((res) => {

  })
  .catch((error) => console.log()) 


},[])


  //useEffect(() => {
  //  setLoading(true)
  //  getOneProducts(itemId)
  //  .then((res) => setProductDetail(res))
  //  .catch((error) => console.log(error))
  //  .finally(() =>setLoading(false))

  //},[itemId])
  
  return (
    <div>
      {loading ? <LoaderComponent/> : <ItemDetail productDetail={productDetail}/>}
    </div> 
  )
}

export default ItemDetailContainer

