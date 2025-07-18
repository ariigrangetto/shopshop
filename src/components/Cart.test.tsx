/* eslint-disable react/react-in-jsx-scope */
import { render, screen, fireEvent } from "@testing-library/react";
import CartProvider from "../context/CartContext";
import Cart from "./Cart";

test("Open cart button", () => {
  render(
    <CartProvider>
      <Cart />
    </CartProvider>
  );

  const button = screen.getByLabelText(/open cart/i);
  fireEvent.click(button);
});
