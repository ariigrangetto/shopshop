import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export default function useCartReducer() {
  return useContext(CartContext);
}
