import React, { useState } from "react";
import "./ProductDetail.css";
import { addToWishlist } from "../../../Utils/wishlist";
import { useCart } from "../../Cart/CartContext";

const product = {
  id: 21,
  name: "Banana Cream Pudding",
  rating: 0,
  reviews: "No reviews",
  oldPrice: 15,
  price: 12,
  discount: "-20%",
  inStock: true,
  viewers: 36,
  soldCount: 31,
  soldHours: 13,
  image:
    "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-21_360x.webp?v=1719558054",
  images: [
    "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-21_360x.webp?v=1719558054",
    "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-21-1.webp?v=1719558066&width=150",
    "//wpbingo-jumys.myshopify.com/cdn/shop/files/product-21-2.webp?v=1719558066&width=150",
    "//wpbingo-jumys.myshopify.com/cdn/shop/files/product-21-3.webp?v=1719558066&width=150",
  ],
};

const STARS = 5;

const ProductDetail = () => {
  const { addToCart } = useCart();
  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="pd-page">
      <nav className="pd-breadcrumb">
        <a href="/">Home</a>
        <a href="/shop">Frozen Yogurt</a>
        <span>{product.name}</span>
      </nav>

      <div className="pd-main">
        <div className="pd-thumbs">
          {product.images.map((img, i) => (
            <div
              key={i}
              className={`pd-thumb ${activeImg === i ? "active" : ""}`}
              onClick={() => setActiveImg(i)}
            >
              <img src={img} alt={`thumb-${i}`} />
            </div>
          ))}
        </div>

        <div className="pd-img-wrap" style={{ background: product.bg }}>
          {product.discount && (
            <span className="pd-badge">{product.discount}</span>
          )}
          <img
            src={product.images[activeImg]}
            alt={product.name}
            className="pd-main-img"
          />
        </div>

        <div className="pd-info">
          <h1 className="pd-title">{product.name}</h1>

          <div className="pd-stars">
            {Array(STARS)
              .fill(0)
              .map((_, i) => (
                <span
                  key={i}
                  className={i < product.rating ? "star filled" : "star"}
                >
                  ★
                </span>
              ))}
            <span className="pd-reviews">{product.reviews}</span>
          </div>

          <div className="pd-prices">
            <s className="pd-old">${product.oldPrice}.00</s>
            <span className="pd-price">${product.price}.00</span>
          </div>

          <hr className="text-customColor" />

          <p className="pd-viewers">
            👁 {product.viewers} people are viewing this right now
          </p>
          <p className="pd-sold">
            🔥 {product.soldCount} sold in last {product.soldHours} hours
          </p>
          <p className="pd-stock">✅ In stock</p>

          <div className="pd-cart-row">
            <div className="pd-qty">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))}>
                −
              </button>
              <span>{qty}</span>
              <button onClick={() => setQty((q) => q + 1)}>+</button>
            </div>
            <button
              className="pd-add-btn"
              onClick={() =>
                addToCart({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  img: product.image,
                })
              }
            >
              Add To Cart
            </button>
            <button
              className="pd-wish-btn"
              onClick={() =>
                addToWishlist({
                  id: product.id,
                  title: product.name,
                  price: `$${product.price}.00`,
                  oldPrice: product.oldPrice ? `$${product.oldPrice}.00` : null,
                  discount: product.discount,
                  image: product.image,
                })
              }
            >
              ♡
            </button>
          </div>

          <label className="pd-terms">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <span>
              I agree with the <u>terms and conditions</u>
            </span>
          </label>

          <button className="pd-buy-btn">Buy It Now</button>

          <div className="pd-actions">
            <button>⇄ Compare</button>
            <button>⊙ Question</button>
            <button>⊡ Shipping info</button>
            <button>⇗ Share</button>
          </div>

          <hr className="text-customColor" />

          <div className="pd-delivery">
            <span>🚚</span>
            <p>
              Order in the next <strong>11 hours 12 minutes</strong> to get it
              between <u>Thursday, Jun 4</u> and <u>Monday, Jun 8</u>
            </p>
          </div>

          <hr className="text-customColor" />

          <div className="pd-pickup">
            <p>
              <span className="pd-checkmark">✓</span> Pickup available at{" "}
              <strong>Alaska</strong>
            </p>
            <p className="pd-pickup-sub">Usually ready in 24 hours</p>
            <a href="#" className="pd-store-link">
              Check availability at other stores
            </a>
          </div>

          <div className="pd-checkout-box">
            <p className="pd-checkout-title">Guaranteed Checkout</p>
            <div className="pd-payment-icons">
              <img
                src="https://wpbingo-jumys.myshopify.com/cdn/shop/files/payment-product.png?crop=center&height=28&v=1719800844&width=400"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <a href="#" className="pd-top-btn">
        TOP
      </a>
    </div>
  );
};

export default ProductDetail;
