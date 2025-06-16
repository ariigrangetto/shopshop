import React, { useEffect, useState } from "react";
import './App.css'
import Products from "./Components/Products";
import useFilter from "./hooks/useFilter";
import Filter from "./Components/Filter";
import Header from "./Components/Header";
import CartProvider from "./Context/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./Components/ProductDetail";
import { useProducts } from "./hooks/useProducts";



function App() {
  const { products } = useProducts();
  const {filteredProducts} = useFilter();

  const filterProducts = filteredProducts(products);

  return (
    <>
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route
          path="/"
          element={
            <>
            <Header/>
            <Filter/>
            <Products products={filterProducts}/>
            </>
          }
        />
          <Route path="/product/:id" element={<ProductDetail products={filterProducts}/>}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
   
    </>
  )
}

export default App
