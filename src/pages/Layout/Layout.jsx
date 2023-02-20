import React from "react";
import { Route, Routes } from "react-router-dom";
import { Announcement } from "../../components/Announcement";
import { Navbar } from "../../components/Navbar";
import { Home } from "../Home";
import { ProductList } from "../ProductList";
import { Product } from "../Product";
import { Cart } from "../Cart";
import { Footer } from "../../components/Footer";

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
      <Footer />
    </>
  );
};

export default Layout;
