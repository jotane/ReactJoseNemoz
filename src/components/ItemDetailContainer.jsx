
import React, { useEffect, useState } from 'react'
import { getOneProducts } from '../mock/asyncService'
import ItemCount from './ItemCount'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { collection, getDoc, doc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({})
  const [invalid, setInvalid] = useState (null)
  const [loading, setLoading] = useState(false)
  const { itemId } = useParams()

  //Firebase
  useEffect(() => {
    setLoading(true)
    //conectamos con nuestra collection
    const productsCollection = collection(db, 'productos')
    //crea la ref del doc
    const docRef = doc(productsCollection, itemId)

    getDoc(docRef)
      .then((res) => {
        if (res.data()){
        setProductDetail({id: res.id, ...res.data()})
        }else{
          setInvalid(true)
        }
      })

  .catch ((error) => console.log(error)) 
  .finally(() => setLoading(false)) 


}, [])


//useEffect(() => {
//  setLoading(true)
//  getOneProducts(itemId)
//  .then((res) => setProductDetail(res))
//  .catch((error) => console.log(error))
//  .finally(() =>setLoading(false))

//},[itemId])

if(invalid){
  return <div>
    <h2>Lo siento, ese producto no existe</h2>
    <link className='btn btn-dark' to='/'>Volver</link>
  </div>
}

return (
  <div>
    {loading ? <LoaderComponent/> : <ItemDetail productDetail={productDetail} />}
  </div>
)
}

export default ItemDetailContainer

