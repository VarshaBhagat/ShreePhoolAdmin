// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;