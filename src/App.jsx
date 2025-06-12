import products from "./mocks/products.json"
import React from "react";
import './App.css'
import Products from "./Components/Products";
import useFilter from "./hooks/useFilter";
import Filter from "./Components/Filter";
import Header from "./Components/Header";
import CartProvider from "./Context/CartContext";

function App() {
  const {filteredProducts} = useFilter();

  const ListOfProducts = products.products;

  const filterProducts = filteredProducts(ListOfProducts);

  return (
    <>

    <main>
      <CartProvider>
        <Header/>
        <Filter/>
        <Products products={filterProducts}/>
      </CartProvider>
      
    </main>
    </>
  )
}

export default App
