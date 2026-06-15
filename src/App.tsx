// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Home from "./pages/Home";
import './index.css'
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route
          path="/terms-conditions"
          element={<TermsConditions />}
        />
        <Route path="/adminProduct" element={<Products />} />
        <Route path="/adminOrders" element={<Orders />} />
        <Route path="/productList" element={<ProductList />} />
        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;