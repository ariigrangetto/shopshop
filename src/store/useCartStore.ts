import { create } from "zustand";
import type { Product } from "../types";
import { persist } from "zustand/middleware";

interface CartStore {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: { id: number }) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],

      addToCart: (product) =>
        set((state) => {
          const cart = state.cart;
          const existingProductIndex = cart.findIndex(
            (item) => item.id === product.id
          );

          if (existingProductIndex !== -1) {
            //evitar mutar el array
            const updateCart = [...cart];
            //obetener el indice del producto existente
            const existingProduct = updateCart[existingProductIndex];
            //clorar las propiedades del producto actual y cambiando solo quantity
            updateCart[existingProductIndex] = {
              ...existingProduct,
              quantity: (existingProduct.quantity || 1) + 1,
            };
            return { cart: updateCart };
          }
          return {
            cart: [...cart, { ...product, quantity: 1 }],
          };
        }),

      removeFromCart: ({ id }) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        }));
      },
      clearCart: () => {
        set({ cart: [] });
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
