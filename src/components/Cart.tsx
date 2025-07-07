import { useId } from "react";
import useCartReducer from "../hooks/useCartReducer";
import "./Cart.css";
import React from "react";
import { CirclePlus, CircleX, ShoppingCart } from "lucide-react";

export default function Cart() {
  const cartId = useId();
  const { cart, addToCart, removeFromCart } = useCartReducer();

  const total = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <>
      <label htmlFor={cartId} className='cart-button'>
        <ShoppingCart className='iconCart' size={25} />
      </label>
      <input type='checkbox' hidden id={cartId} />

      <aside className='cart'>
        {cart.length > 0 ? (
          <ul className='list-none justify-center m-auto mt-[20px]'>
            {cart.map((product) => (
              <li
                key={product.id}
                className='border-[1px,solid,#444] justify-center m-auto pb-[16px]'
              >
                <img
                  src={product.images?.[0]}
                  alt={product.title}
                  className='h-[100px] justify-center m-auto flex'
                />
                <p>{product.title}</p>

                <footer className='flex gap-2 justify-center items-center'>
                  <strong>${product.price}</strong>
                  <small className='text-[15px]'>Qty: {product.quantity}</small>
                </footer>

                <p>Total: ${product.price * product.quantity}</p>

                <div className='justify-center m-auto flex mt-[10px]'>
                  <button
                    className=' mr-[5px] w-[50px] bg-[rgba(0,0,0,0.87)] border-0 outline-0 rounded-[10px] h-[30px] cursor-pointer flex justify-center m-auto'
                    onClick={() => addToCart(product)}
                  >
                    <CirclePlus size={20} />
                  </button>
                  <button
                    className='h-[30px]  w-[50px] bg-[rgba(0,0,0,0.87)] border-0 outline-0 rounded-[10px] cursor-pointer m-auto flex justify-center'
                    onClick={() => removeFromCart(product)}
                  >
                    <CircleX size={20} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className='text-white text-[20px] text-center justify-center flex m-auto mt-[40px]'>
            <CircleX />
            You don't have any products in your cart.
          </p>
        )}
        <p className='bg-[rgba(99,115,187,0.781)] rounded-[5px] mb-[200px'>
          Total of cart: ${total}
        </p>
      </aside>
    </>
  );
}
