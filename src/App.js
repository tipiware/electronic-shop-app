import { CssBaseline } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import {
  Home,
  Products,
  ProductsDetail,
  Categories,
  CategoriesDetail,
  Cart,
  Checkout,
  About
} from "./pages";

const App = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        paddingBottom: "350px"
      }}
    >
      <Router>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products/:permalink" element={<ProductsDetail />} />
          <Route path="/categories/:slug" element={<CategoriesDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
