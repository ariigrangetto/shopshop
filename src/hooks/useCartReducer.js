import { useContext } from "react";
import { CartContext } from "../Context/cartContext";

export default function useCartReducer() {
  return useContext(CartContext);
}
