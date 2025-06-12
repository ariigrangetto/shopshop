import React, { useId } from "react";
import "./Cart.css"
import { ShoppingCart } from "lucide-react";
import useCartReducer from "../hooks/useCartreducer";
import { CircleX } from "lucide-react";

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
                    <li key={product.id}>
                        <img src={product.images?.[0]} alt={product.title} />
                        <p>{product.title}</p>
                        <strong>${product.price}</strong>

                        <footer>
                            <small>Qty: {product.quantity}</small>
                        </footer>
                         <p>cantidad a pagar: ${product.price * product.quantity}</p>

                        <button onClick={() => addToCart(product)}>+</button>
                        <button onClick={() => removeFromCart(product)}>remove</button>

                       

                    </li>
                    )

                })}
            </ul>
            ):(
            <p className="notCart"><CircleX/>No tienes ningun producto en carrito</p>
        )}
            <p>Total of cart: ${total}</p>
        </aside>
        </>
    )
}