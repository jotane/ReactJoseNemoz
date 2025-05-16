
import {getProducts} from "../mock/asyncService"
import { useEffect, useState } from "react"
import ItemList from './itemList'
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../service/firebase"

const ItemListContainer = ({greeting}) => {
  const[data, setData]= useState([])
  const [loader, setLoader] = useState (false)
  const {categoryId} = useParams()

  useEffect (() =>{
    setLoader(true)
    //nos conectamos con nuestra coleccion
    const productsCollection = collection(db, 'productos') 
    //pido los documentos (getdoc o docs)
    getDocs(productsCollection)
    .then((res) =>{
      const list = res.docs.map((doc)=> {
        return {
          id: doc.id,
          ...doc.data()

        }
      })
    
    setData(list)
    console.log("🔥 Datos cargados desde Firestore:", data)
    })

    .catch((error) => console.log(error))
    .finally(() => setLoader(false))

  },[])


  
  

    //useEffect(()=>{
      //setLoader(true)
      //getProducts()
     // .then((res) => {
       // if(categoryId){
         // setData(res.filter((prod) => prod.category === categoryId))
        //}else{
          //setData(res)
        //}
      //})
      //.catch((error) => console.log(error))
      //.finally(() => setLoader(false))
    //},[categoryId]) 

  
    return (
       <div>
        {
           loader ? <LoaderComponent/>
           :<div>
           <h1>{greeting} {categoryId && <span style={{textTransform: 'capitalize'}}>{categoryId}</span>}</h1>
           <ItemList data={data}/>
           </div>
        }
       </div>
        
    )
}
    

export default ItemListContainer
