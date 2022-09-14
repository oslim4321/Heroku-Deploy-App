import React, {useContext, createContext, useReducer} from "react";
import {products} from '../Data'
import { CartReducer } from "./CartReducer";



const Cart = React.createContext()


const CartContext = ({ children }) => {

    const [state, dispatch] = useReducer(CartReducer, {
        products: products,
        cart: [],
        totoalPrice: 0, 
        totalQuantity:0
    })

return <Cart.Provider value={{state, dispatch, }}>{children}</Cart.Provider>
    }

export default CartContext;

export const GlobalCartState = () => {
    return useContext(Cart)
}