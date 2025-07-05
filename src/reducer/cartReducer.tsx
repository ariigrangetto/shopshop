import { CartActionType, type Product } from "../types.d";

export type CartProduct = Product & {
  quantity: number;
};

export type CartState = CartProduct[];

type CartAction =
  | { type: CartActionType.ADD_TO_CART; payload: Product }
  | { type: CartActionType.REMOVE_FROM_CART; payload: { id: number } }
  | { type: CartActionType.CLEAR_CART };

export const cartInitialState = JSON.parse(
  window.localStorage.getItem("cart") || "[]"
);

export const updateLocalStorage = (state: CartState) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

export const CartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case CartActionType.ADD_TO_CART: {
      const { id } = action.payload;
      const productInCartIndex = state.findIndex((item) => item.id === id);

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state);
        newState[productInCartIndex].quantity += 1;
        updateLocalStorage(newState);
        return newState;
      }

      //evitar mutacion del estado y con el ...payload estoy copiando todo el contenido del producto
      const newState = [...state, { ...action.payload, quantity: 1 }];
      updateLocalStorage(newState);
      return newState;
    }

    case CartActionType.REMOVE_FROM_CART: {
      const { id } = action.payload;
      const newState = state.filter((item) => item.id !== id);
      updateLocalStorage(newState);
      return newState;
    }

    case CartActionType.CLEAR_CART: {
      return cartInitialState;
    }
  }
  return state;
};
