import React from "react";
import "./ProductCard.css";
import { useCart } from "../Cart/CartContext";

const STARS = 5;

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
    });
  };

  return (
    <div className="pc-card">
      <div className="pc-img-wrap">
        {product.discount && (
          <span className="pc-badge">{product.discount}</span>
        )}
        <img src={product.img} alt={product.name} className="pc-img" />

        <button
          className="pc-cart-btn"
          onClick={handleAddToCart}
          title="Add to Cart"
        >
          🛒 Add to Cart
        </button>
      </div>

      <div className="pc-info">
        <div className="pc-stars">
          {Array(STARS)
            .fill(0)
            .map((_, i) => (
              <span
                key={i}
                className={
                  i < (product.rating || 0) ? "pc-star filled" : "pc-star"
                }
              >
                ★
              </span>
            ))}
          <span className="pc-reviews">{product.reviews || "No reviews"}</span>
        </div>

        <h3 className="pc-name">{product.name}</h3>

        <div className="pc-price">
          {product.oldPrice && <s className="pc-old">${product.oldPrice}.00</s>}
          <span className="pc-new">${product.price}.00</span>
        </div>

        {product.colors?.length > 0 && (
          <div className="pc-colors">
            {product.colors.map((c, i) => (
              <span
                key={i}
                className="pc-color-dot"
                style={{ background: c }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
