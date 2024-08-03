// import {  Route, Routes } from 'react-router-dom'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Iproduct } from "./interface/Iproduct";
import Instance from "./api";
import Home from "./pages/Home";
import AddProduct from "./Admin/AddProduct";
import EditProduct from "./Admin/EditProduct";
import AdminHome from "./Admin/AdminHome";
import PageNotFound from "./pages/PageNotFound";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Shop from "./pages/Shop";

function App() {
  const [Products, setProducts] = useState<Iproduct[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await Instance.get("/products");
      setProducts(data);
    })();
  }, []);
  return (
    <>
      {
          <Routes>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/productDetail" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />




            <Route path="/admin" element={<AdminHome Products={Products} setProducts={setProducts} />}>
              <Route path="add" element={<AddProduct setProducts={setProducts} />} />
              <Route path="edit/:id" element={<EditProduct Products={Products} setProducts={setProducts} />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>


      }

    </>
  );
}

export default App;
