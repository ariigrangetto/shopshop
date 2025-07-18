/* eslint-disable react/react-in-jsx-scope */
import { render, screen, fireEvent } from "@testing-library/react";
import CartProvider from "../context/CartContext";
import Products from "./Products";

test("click add to cart icon", () => {
  return (
    <CartProvider>
      <Products />
    </CartProvider>
  );

  const button = screen.getByLabelText(/add to cart icon/i);
  fireEvent.click(button);
});
