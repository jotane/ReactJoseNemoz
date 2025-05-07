import React, { useState } from 'react'

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1)

  const add = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  const substract = () => {
    if (count > 0) {

      setCount(count - 1)
    }

  }

 const comprar = () => {
  onAdd(count)
 }
  

  return (
    <div>
      <div>
        <button onClick={substract}>-</button>
        <span>{count}</span>
        <button onClick={add}>+</button>
      </div>
       <button>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount




