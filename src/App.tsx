import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Header from "./components/Header";
import useService from "./hooks/useService";
import useFilterContext from "./hooks/useFilterContext";
import { type Product } from "./types.d";
import ProductDetail from "./components/ProductDetail";
import Filter from "./components/Filter";
import Products from "./components/Products";
import CartProvider from "./context/CartContext";

function App() {
  const { filterProducts } = useFilterContext();
  const { isPending, isError, products } = useService();

  const filteredProducts: Product[] = filterProducts(products);

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <Header />
                  {isPending && <p>Cargando...</p>}
                  <Filter />
                  {!isPending && !isError && (
                    <Products products={filteredProducts} />
                  )}
                </>
              }
            />
            <Route
              path='/product/:id'
              element={<ProductDetail products={filteredProducts} />}
            />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
