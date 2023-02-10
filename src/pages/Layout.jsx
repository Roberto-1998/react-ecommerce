import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductList from "./ProductList";
import Product from "./Product";
import Cart from "./Cart";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Home from "./Home";

const Layout = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Layout;
