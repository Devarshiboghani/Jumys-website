import React, { useEffect, useState } from "react";
import "./WishlistPage.css";

import { FaTimes, FaShoppingCart, FaShareAlt, FaSearch } from "react-icons/fa";
import { useCart } from "../../Cart/CartContext";
import { getWishlist, removeFromWishlist } from "../../../Utils/wishlist";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const updateWishlist = () => {
      setWishlist(getWishlist());
    };

    updateWishlist();
    window.addEventListener("wishlistUpdated", updateWishlist);

    return () => {
      window.removeEventListener("wishlistUpdated", updateWishlist);
    };
  }, []);

  const handleRemove = (id) => {
    removeFromWishlist(id);
    setWishlist(getWishlist());
  };

  const handleAddToCart = (item) => {
    const normalizedPrice = parseFloat(
      item.price?.toString().replace(/[^0-9.-]+/g, "") || 0,
    );

    addToCart({
      id: item.id,
      name: item.title || item.name,
      price: Number.isNaN(normalizedPrice) ? 0 : normalizedPrice,
      img: item.image || item.img,
    });
  };

  const handleShare = async (item) => {
    const url = window.location.origin + `/product/${item.id}`;
    const title = item.title || "Product";

    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch (err) {
        /* ignore */
      }
    } else if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(url);
        alert("Link copied to clipboard");
      } catch (err) {
        alert("Copy this link: " + url);
      }
    } else {
      alert("Share this link: " + url);
    }
  };

  const handleSearch = (item) => {
    window.dispatchEvent(
      new CustomEvent("openSearch", { detail: { query: item.title } }),
    );
  };

  return (
    <section className="wishlist-page">
      <div className="wishlist-banner">
        <h1>wishlist</h1>
        <p>Home / wishlist</p>
      </div>

      <div className="wishlist-grid">
        {wishlist.length === 0 ? (
          <div className="empty-wishlist">
            <h2>No Wishlist Products</h2>
          </div>
        ) : (
          wishlist.map((item) => (
            <div className="wishlist-card" key={item.id}>
              <div className="wishlist-image">
                {item.discount && (
                  <span className="wishlist-discount">{item.discount}</span>
                )}

                <button
                  className="remove-btn"
                  onClick={() => handleRemove(item.id)}
                  title="Remove Item"
                >
                  <FaTimes />
                </button>

                <img src={item.image} alt={item.title} />

                <div className="wishlist-actions">
                  <button
                    className="action-btn"
                    onClick={() => handleAddToCart(item)}
                    title="Add to cart"
                  >
                    <FaShoppingCart />
                  </button>

                  <button
                    className="action-btn"
                    onClick={() => handleShare(item)}
                    title="Share"
                  >
                    <FaShareAlt />
                  </button>

                  <button
                    className="action-btn"
                    onClick={() => handleSearch(item)}
                    title="Search"
                    className="action-btn"
                  >
                    <FaSearch />
                  </button>
                </div>
              </div>

              <div className="wishlist-content">
                <p className="wishlist-review">☆☆☆☆☆ No reviews</p>
                <h3>{item.title}</h3>
                <div className="wishlist-price">
                  {item.oldPrice && (
                    <span className="old-price">{item.oldPrice}</span>
                  )}
                  <span className="new-price">{item.price}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Wishlist;
