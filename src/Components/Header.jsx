import React from "react"
import "./Header.css"
import Cart from "./Cart.jsx"
import { ShoppingBasket } from "lucide-react"


export default function Header(){
    return(
        <>
        <h1><ShoppingBasket  className="icon" size={50}/> Shopshop</h1>
        <Cart/>
        </>
    )
}