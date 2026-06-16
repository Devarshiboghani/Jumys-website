import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import {
  FaSearch,
  FaRegUser,
  FaRegHeart,
  FaShoppingBasket, 
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import LoginDrawer from "../LoginDrawer/LoginDrawer";
import { getWishlist } from "../../Utils/wishlist";
import CartDrawer from "../Cart/CartDrawer";
import { useCart } from "../Cart/CartContext";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 
  const [searchVal, setSearchVal] = useState("");
  const [wishlistCount, setWishlistCount] = useState(0);
  const inputRef = useRef(null);
  const { cartItems, cartOpen, setCartOpen, removeFromCart, totalCount } = useCart();

  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setLoginOpen(false);
        setMenuOpen(false);
      }
    };
    if (loginOpen || searchOpen || cartOpen || menuOpen)
      window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [searchOpen, loginOpen, cartOpen, menuOpen]);

  useEffect(() => {
    const updateWishlistCount = () => {
      setWishlistCount(getWishlist().length);
    };
    updateWishlistCount();
    window.addEventListener("wishlistUpdated", updateWishlistCount);
    return () => window.removeEventListener("wishlistUpdated", updateWishlistCount);
  }, []);

  useEffect(() => {
    const openSearchHandler = (e) => {
      const q = e?.detail?.query || "";
      setSearchVal(q);
      setSearchOpen(true);
    };
    window.addEventListener("openSearch", openSearchHandler);
    return () => window.removeEventListener("openSearch", openSearchHandler);
  }, []);

  return (
    <>
      <nav className="navbar">
        {/* Mobile Hamburger Button - Left Side */}
        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          <FaBars />
        </div>

        <div className="logo">
          <img
            src="https://wpbingo-jumys.myshopify.com/cdn/shop/files/logo.png?crop=center&height=199&v=1714968571&width=434"
            alt="Jumys - Ice Cream Shopify Theme OS 2.0"
            width="100"
            height="50"
          />
        </div>

        {/* Backdrop for Sidebar menu */}
        {menuOpen && <div className="menu-backdrop" onClick={() => setMenuOpen(false)}></div>}

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li className="menu-close-btn" onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </li>

          <li className="nav-item">
            <NavLink to="/" end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} onClick={() => setMenuOpen(false)}>
              HOME <span className="arrow">❯</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/shop" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} onClick={() => setMenuOpen(false)}>
              SHOP <span className="arrow">❯</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/Product" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} onClick={() => setMenuOpen(false)}>
              PRODUCT <span className="arrow">❯</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/Blog" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} onClick={() => setMenuOpen(false)}>
              BLOG <span className="arrow">❯</span>
            </NavLink>
          </li>

          <li className="nav-item dropdown">
            <NavLink to="/Featured" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} onClick={() => setMenuOpen(false)}>
              FEATURED <span className="arrow">❯</span>
            </NavLink>
            <ul className="dropdown-menu">
              <li><a href="/about" onClick={() => setMenuOpen(false)}>About Page</a></li>
              <li><a href="/contact" onClick={() => setMenuOpen(false)}>Contact Page</a></li>
              <li><a href="/faqs" onClick={() => setMenuOpen(false)}>FAQs</a></li>
              <li><a href="/wishlist" onClick={() => setMenuOpen(false)}>Wishlist</a></li>
              <li><a href="/404" onClick={() => setMenuOpen(false)}>404 Page</a></li>
            </ul>
          </li>
        </ul>

        {/* Right side Icons (Search, User, Wishlist, Cart) */}
        <div className="nav-icons">
          <FaSearch
            className="search-icon nav-icon-btn"
            onClick={() => setSearchOpen(true)}
            title="Search"
          />

          <FaRegUser
            className="nav-icon-btn mobile-user-icon-visible"
            onClick={() => setLoginOpen(true)}
            title="Sign In"
          />

          <div className="icon-box">
            <NavLink to="/wishlist">
              <FaRegHeart className="nav-icon-btn" />
            </NavLink>
            <span>{wishlistCount}</span>
          </div>

          <div className="icon-box nav-icon-btn" onClick={() => setCartOpen(true)} title="Cart">
            <FaShoppingBasket />
            <span>{totalCount}</span>
          </div>
        </div>
      </nav>

      {searchOpen && (
        <div className="search-overlay" onClick={(e) => { if (e.target.classList.contains("search-overlay")) setSearchOpen(false); }}>
          <div className="search-modal">
            <button className="search-close" onClick={() => setSearchOpen(false)} aria-label="Close search">✕</button>
            <div className="search-box">
              <FaSearch className="search-box-icon" />
              <input ref={inputRef} type="text" className="search-input" placeholder="Search..." value={searchVal} onChange={(e) => setSearchVal(e.target.value)} />
            </div>
          </div>
        </div>
      )}

      <LoginDrawer isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} cartItems={cartItems} onRemove={removeFromCart} />
    </>
  );
};

export default Navbar;