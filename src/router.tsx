/* eslint-disable react/react-in-jsx-scope */
import { createBrowserRouter } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import ErrorPage from "./pages/ErrorPage";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
