import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function useCartReducer() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCartReducer must be used whithin a cartProvider");
  }

  return context;
}
