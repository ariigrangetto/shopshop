import React, { useId } from "react";
import "./Cart.css"
import { ShoppingCart } from "lucide-react";
import useCartReducer from "../hooks/useCartReducer";
import { CircleX } from "lucide-react";
import { CirclePlus } from "lucide-react";


export default function Cart(){ 
    const cartId = useId();
    const {cart, addToCart, removeFromCart} = useCartReducer();

    const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0)

    return(
        <>
        <label htmlFor={cartId} className="cart-button">
            <ShoppingCart className="iconCart" size={25}/>
        </label>
        <input type="checkbox" hidden id={cartId} />

        <aside className="cart">
            {cart.length > 0 ? (
            <ul>
                {cart.map((product) => {

                    return(
                        <>
                    
                    <li key={product.id}>
                        <img src={product.images?.[0]} alt={product.title} />
                        <p>{product.title}</p>

                        <footer>
                            <strong>${product.price}</strong>
                            <small>Qty: {product.quantity}</small>
                        </footer>

                         <p>Total: ${product.price * product.quantity}</p>

                        <button className="add" onClick={() => addToCart(product)}><CirclePlus size={20}/></button>
                        <button className="remove" onClick={() => removeFromCart(product)}><CircleX size={20}/></button>

                       

                    </li>
                    </>
                    )

                })}
            </ul>
            ):(
            <p className="notCart"><CircleX/>You don't have any products in your cart.</p>
        )}
          <p className="total">Total of cart: ${total}</p>  
        </aside>
        </>
    )
}