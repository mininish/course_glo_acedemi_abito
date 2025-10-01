import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage/HomePage";

import { BrowserRouter } from "react-router";
import { Route, Routes } from "react-router";
import ProductPage from "./pages/ProductPage/ProductPage";
import LayoutPage from "./pages/LayoutPage/LayoutPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<HomePage />} />
        <Route path="product/:productId" element={<ProductPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);
