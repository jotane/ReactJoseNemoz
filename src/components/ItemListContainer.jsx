import ItemCount from "./ItemCount"
import {getProducts} from "../mock/asyncService"
import { useEffect, useState } from "react"
import ItemList from './itemList'
const ItemListContainer = ({greeting}) => {
  const[data, setData]= useState([])
  console.log("itemlistcontainer")
  /*const getData = () => {
    let error = false
    
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        if(error){
          reject('No hay nada aqui')
        }else{
          resolve('Se guardara en dos segundos')
        }
      },2000)

    })
  }*/

    useEffect(()=>{
      getProducts()
      .then((res) => setData(res))
      .catch((error) => console.log(error))
    },[])

  
    return (
        <div>
          <h1>{greeting}</h1>
          <ItemList data={data}/>
        </div>
    )
}
    

export default ItemListContainer
