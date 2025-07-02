import { ShoppingBasket } from "lucide-react";
import React from "react";

export default function Header() {
  return (
    <>
      <h1>
        <ShoppingBasket className='icon' size={50} />
        ShopShop
      </h1>
    </>
  );
}
