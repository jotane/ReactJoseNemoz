import { createContext, useState } from "react";

export const CartContext = createContext({})

export const CartProvider = ({children}) => {
    const[cart, setCart] = useState([])

    //agregar al carrito
    const addToCart = (item, cantidad) =>{
        //tengo que ver si el producto ya esta en el carrito con la funcion isincart
        if(isInCart(item.id)){

        }else{
            //sumar un nuevo item al carrito
        setCart([...cart, {...item, quantity:cantidad}])
    }

        }
        

    //borrar el carrito
    const clear = () =>{
        setCart([])
    }    

        //eliminar un item del carrito
    const removeItem = (id) => {
        setCart (cart.filter ((prod) => prod.id !== id))

    }

    //si esta en el carrito. .some (devuelve siempre un booleano)
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    return(
        <CartContext.Provider value={{cart, addToCart, clear, removeItem}}>
           {children}
        
        </CartContext.Provider>
    )
    }

