/* eslint-disable react/react-in-jsx-scope */
import { ShoppingBasket } from "lucide-react";
import Cart from "./Cart";
// import Cart from "./Cart";

export default function Header() {
  return (
    <>
      <h1 className='font-sans items-center text-center justify-center flex text-[35px] m-[10px] text-black'>
        <ShoppingBasket className='mr-[5px]' size={40} />
        ShopShop
      </h1>
      <Cart />
    </>
  );
}
