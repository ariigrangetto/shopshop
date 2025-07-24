/* eslint-disable react/react-in-jsx-scope */
import { createRoot } from "react-dom/client";
import "./index.css";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import FilterProvider from "./context/FilterContext.tsx";
import { RouterProvider } from "react-router-dom";
import router from "./router.tsx";
import CartProvider from "./context/CartContext.tsx";

const client = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={client}>
    <FilterProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </FilterProvider>
  </QueryClientProvider>
);
