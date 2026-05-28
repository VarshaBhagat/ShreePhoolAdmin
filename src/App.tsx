// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/adminProduct" element={<Products />} />
        <Route path="/adminOrders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;