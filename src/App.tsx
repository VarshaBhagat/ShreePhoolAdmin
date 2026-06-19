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
import ProductDetails from "./pages/ProductDetails";
import Profile from "./pages/Profile";
import ContactUs from "./pages/ContactUs";
import BasketPage from "./pages/BasketPage";

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
        <Route
          path="/product/:productId"
          element={<ProductDetails />}

        />
        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/contact"
          element={<ContactUs />}
        />
        <Route
          path="/basket"
          element={<BasketPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;