import React, { createContext, useReducer } from "react";
import {
  cartInitialState,
  CartReducer,
  type CartState,
} from "../reducer/cartReducer";
import { CartActionType, type Product } from "../types.d";

interface CartContextType {
  cart: CartState;
  addToCart: (product: Product) => void;
  removeFromCart: (produc: { id: number }) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

interface CartProviderProp {
  children: React.ReactNode;
}

export default function CartProvider({ children }: CartProviderProp) {
  const [state, dispatch] = useReducer(CartReducer, cartInitialState);

  const addToCart = (product: Product) =>
    dispatch({
      type: CartActionType.ADD_TO_CART,
      payload: product,
    });

  const removeFromCart = (product: { id: number }) =>
    dispatch({
      type: CartActionType.REMOVE_FROM_CART,
      payload: product,
    });

  const clearCart = () =>
    dispatch({
      type: CartActionType.CLEAR_CART,
    });

  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
