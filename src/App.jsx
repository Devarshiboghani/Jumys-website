import React from "react"
import { Routes, Route } from "react-router-dom"; 
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import Footer from "./Components/Footer/Footer";
import Shop from "./Components/Shop/Shop";
import Product from "./Components/Product/Product";
import Blog from "./Components/Blog/Blog";
import AboutPage from "./Components/Featured/AboutPage/AboutPage";
import NotFound from "./Components/Featured/404Page/404Page";
import Faqs from "./Components/Featured/FaqsPage/FaqsPage";
import Contact from "./Components/Featured/ContactPage/ContactPage";
import Wishlist from "./Components/Featured/WishlistPage/WishlistPage";

function App() {

  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product" element={<Product />} />
          <Route path="/blog" element={<Blog />} />

          {/* Featured Pages */}
          <Route path="/featured" element={<AboutPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/404-page" element={<NotFound />} />

           {/* Invalid URL */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App