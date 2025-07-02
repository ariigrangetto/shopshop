import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Header from "./components/Header";
import useService from "./hooks/useService";
import useFilterContext from "./hooks/useFilterContext";
import { type Product } from "./types.d";

function App() {
  const { filterProducts } = useFilterContext();
  const { isPending, isError, products } = useService();

  const filteredProducts: Product[] = filterProducts(products);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Header />
                {isPending && <p>Cargando...</p>}
                {/* <Filter /> */}
                {/* {!isPending && !isError && (
                  <Products product={filteredProducts} />
                )} */}
              </>
            }
          />
          <Route
            path='/product/:id'
            // element={<ProductDetail products={filteredProducts} />}
          />
        </Routes>
      </BrowserRouter>
      <ul>
        {filteredProducts.map((product) => {
          return (
            <li key={product.id}>
              <p>name {product.title}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
