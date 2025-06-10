import React, { useId } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css"
import useCartReducer from "../hooks/useCartreducer";

export default function Cart(){ 
    const cartId = useId();
    const {cart, addToCart, removeFromCart} = useCartReducer();

    const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0)

    return(
        <>
        <label htmlFor={cartId} className="cart-button">
            <FontAwesomeIcon icon={faCartShopping} />
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
            <p>No tienes ningun producto en carrito</p>
        )}
            <p>Total del carrito: ${total}</p>
        </aside>
        </>
    )
}