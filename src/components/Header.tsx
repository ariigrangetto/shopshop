import { ShoppingBasket } from "lucide-react";
import React from "react";
import Cart from "./Cart";

export default function Header() {
  return (
    <>
      <h1 className='font-sans items-center text-center justify-center flex m-[10px]'>
        <ShoppingBasket className='mr-[5px]' size={50} />
        ShopShop
      </h1>
      <Cart />
    </>
  );
}
