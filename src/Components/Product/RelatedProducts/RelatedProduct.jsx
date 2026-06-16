import React, { useState, useEffect } from "react";
import "./RelatedProduct.css";
import { useCart } from "../../Cart/CartContext";
import { addToWishlist } from "../../../Utils/wishlist";

const related = [
  {
    id: 1,
    name: "Wedding Cake",
    price: 12,
    oldPrice: 13,
    discount: "-7%",
    img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-13.webp?v=1719561700&width=600",
    rating: 0,
    reviews: "No reviews",
    colors: [],
  },
  {
    id: 2,
    name: "Sunshine",
    price: 10,
    oldPrice: null,
    discount: null,
    img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-17.webp?v=1719561526&width=600",
    rating: 0,
    reviews: "No reviews",
    colors: [],
  },
  {
    id: 3,
    name: "Sparkling Cherry Pie",
    price: 10,
    oldPrice: 12,
    discount: "-16%",
    img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-4.webp?v=1719561378&width=600",
    rating: 0,
    reviews: "No reviews",
    colors: ["#f5a0b0", "#4a7fc1"],
  },
  {
    id: 4,
    name: "Sorbet Street Treats",
    price: 10,
    oldPrice: 12,
    discount: "-16%",
    img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-11-1.webp?v=1719561104&width=600",
    rating: 0,
    reviews: "No reviews",
    colors: ["#2ecc71", "#f5a0b0"],
  },
  {
    id: 5,
    name: "Cookies In Cream",
    price: 12,
    oldPrice: null,
    discount: null,
    img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-15_1907b866-4b11-4a6d-b22c-c2f44ba8f671.webp?v=1719560476&width=600",
    rating: 0,
    reviews: "No reviews",
    colors: [],
  },
  {
    id: 6,
    name: "Cream Puff",
    price: 11,
    oldPrice: null,
    discount: null,
    img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-9.webp?v=1719560916&width=600",
    rating: 0,
    reviews: "No reviews",
    colors: [],
  },
];

const STARS = 5;

const RelatedProducts = () => {
  const { addToCart } = useCart();
  const [start, setStart] = useState(0);

  const [visible, setVisible] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisible(2);
      } else if (window.innerWidth < 992) {
        setVisible(3);
      } else {
        setVisible(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="rp-section">
      <h2 className="rp-title">Related Products</h2>

      <div className="rp-slider-wrap">
        <button
          className="rp-arrow"
          onClick={() => setStart((s) => Math.max(0, s - 1))}
          disabled={start === 0}
        >
          ‹
        </button>

        <div className="rp-grid">
          {related.slice(start, start + visible).map((p) => (
            <div className="rp-card" key={p.id}>
              <div className="rp-img-box" style={{ background: p.bg }}>
                {p.discount && <span className="rp-badge">{p.discount}</span>}
                <img src={p.img} alt={p.name} />
                <div className="rp-hover-icons">
                  <button
                    title="Add to cart"
                    onClick={() =>
                      addToCart({
                        id: p.id,
                        name: p.name,
                        price: p.price,
                        img: p.img,
                      })
                    }
                  >
                    🛒
                  </button>
                  <button
                    title="Wishlist"
                    onClick={() =>
                      addToWishlist({
                        id: p.id,
                        title: p.name,
                        price: `$${p.price}.00`,
                        oldPrice: p.oldPrice ? `$${p.oldPrice}.00` : null,
                        discount: p.discount,
                        image: p.img,
                      })
                    }
                  >
                    ♡
                  </button>
                  <button title="Compare">⇄</button>
                  <button title="Quick view">🔍</button>
                </div>
              </div>
              <h4 className="rp-name">{p.name}</h4>
              <div className="rp-stars-row">
                {Array(STARS)
                  .fill(0)
                  .map((_, i) => (
                    <span
                      key={i}
                      className={i < p.rating ? "rp-star filled" : "rp-star"}
                    >
                      ★
                    </span>
                  ))}
                <span className="rp-reviews">{p.reviews}</span>
              </div>
              <div className="rp-price-row">
                {p.oldPrice && <s className="rp-old">${p.oldPrice}.00</s>}
                <span className="rp-new">${p.price}.00</span>
              </div>
              {p.colors.length > 0 && (
                <div className="rp-colors">
                  {p.colors.slice(0, 2).map((c, i) => (
                    <span
                      key={i}
                      className="rp-dot"
                      style={{ background: c }}
                    />
                  ))}
                  {p.colors.length > 2 && (
                    <span className="rp-more">+{p.colors.length - 2}</span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          className="rp-arrow"
          onClick={() =>
            setStart((s) => Math.min(related.length - visible, s + 1))
          }
          disabled={start >= related.length - visible}
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default RelatedProducts;
