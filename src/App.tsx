/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import Header from "./components/Header";
import useService from "./hooks/useService";
import Products from "./components/Products";
import CartProvider from "./context/CartContext";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  const { isPending, isError } = useService();

  return (
    <>
      <CartProvider>
        <Header />

        {isPending && <p>Cargando...</p>}
        {!isPending && !isError && <Products />}
      </CartProvider>
    </>
  );
}

export default App;
