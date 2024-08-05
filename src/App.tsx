// import {  Route, Routes } from 'react-router-dom'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
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
import LayoutAdmin from "./Admin/AdminHome";
import ProductsList from "./Admin/Products/ProductsList";
import ProductForm from "./Admin/Products/ProductForm";
import UsersList from "./Admin/Users/UserList";
import { useEffect, useState } from "react";
import Instance from "./api";
import { Iproduct } from "./interface/Iproduct";

function App() {
  const [products, setProducts] = useState<Iproduct[]>([]);

	useEffect(() => {
		(async () => {
			try {
				const { data } = await Instance.get("/products");
				console.log(data);
				setProducts(data);
			} catch (error) {
				console.error("Error fetching products:", error);
			}
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
          <Route path="/productDetail/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />





          <Route path="/admin" element={<LayoutAdmin />}>
            <Route index element={<h1>Hello Admin</h1>} />
            <Route path="/admin/products" element={<ProductsList products={products} setProducts={setProducts}/>} />
             <Route path="/admin/product-add" element={<ProductForm />} />
            <Route path="/admin/product-edit/:id" element={<ProductForm />} />

            <Route path="/admin/users" element={<UsersList />} />
            {/*<Route path="/admin/category-add" element={<CategoryForm />} />
            <Route path="/admin/category-edit/:id" element={<ProductForm />} /> */}
          </Route>


          <Route path="*" element={<PageNotFound />} />
        </Routes>


      }

    </>
  );
}

export default App;
