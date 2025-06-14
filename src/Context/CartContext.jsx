import { createContext, useReducer } from "react";
import { cartInitialState, CartReducer } from "../reducer/cart";
import React from "react";

export const CartContext = createContext();

export default function CartProvider({ children }){
    const [state, dispatch] = useReducer(CartReducer, cartInitialState);


    const addToCart = product => dispatch({
        type: "ADD_TO_CART",
        payload: product,
    })

    const removeFromCart = product => dispatch({
        type: "REMOVE_FROM_CART",
        payload: product,
    })

    const clearCart = () => dispatch({
        type: "CLEAR_CART"
    })


    return (
        <CartContext.Provider value={{cart: state, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}