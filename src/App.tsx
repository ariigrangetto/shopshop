/* eslint-disable react/react-in-jsx-scope */

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import useServices from "./hooks/useServices";
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import { useFilterStore } from "./store/useFilterStore";
import type { Product } from "./types.d";
import Filter from "./components/Filter";
import ProductDetail from "./components/ProductsDetail";

function App() {
  const { isPending, isError, products } = useServices();
  const filter = useFilterStore((state) => state.filter);
  const filterProducts = useFilterStore((state) => state.filterProducts);

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
                <Filter />
                {isPending && <p>Cargando...</p>}
                {!isPending && !isError && (
                  <ProductList products={filteredProducts} />
                )}
              </>
            }
          />
          <Route
            path='product/:id'
            element={<ProductDetail products={filteredProducts} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
