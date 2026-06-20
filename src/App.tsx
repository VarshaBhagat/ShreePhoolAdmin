import { BrowserRouter, Routes, Route } from "react-router-dom";

import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import Profile from "./pages/Profile";
import ContactUs from "./pages/ContactUs";
import BasketPage from "./pages/BasketPage";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./pages/NotFound";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route
          path="/terms-conditions"
          element={<TermsConditions />}
        />
        <Route path="/adminProduct" element={<Products />} />
        <Route path="/adminOrders" element={<Orders />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/login" element={<Login />} />
        {/* Protected Routes */}
        <Route
          path="/product/:productId"
          element={
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <ContactUs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/basket"
          element={
            <ProtectedRoute>
              <BasketPage />
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="/add-money"
          element={
            <ProtectedRoute>
              <AddMoney />
            </ProtectedRoute>
          }
        /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
