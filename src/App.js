import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import About from "./pages/About";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="mainWrapper">
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
