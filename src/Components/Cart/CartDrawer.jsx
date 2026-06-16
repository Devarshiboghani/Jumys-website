import React from "react";
import "./CartDrawer.css";

const CartDrawer = ({ isOpen, onClose, cartItems, onRemove }) => {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0,
  );

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="cart-overlay" onClick={onClose} />}

      {/* Drawer */}
      <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
        {/* Header */}
        <div className="cart-drawer-header">
          <h2 className="cart-drawer-title">SHOPPING CART</h2>
          <button className="cart-drawer-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <hr className="cart-divider" />

        {/* Items */}
        <div className="cart-drawer-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <span>🛒</span>
              <p>Your cart is empty</p>
              <a href="/shop" className="cart-shop-link" onClick={onClose}>
                Go Shopping
              </a>
            </div>
          ) : (
            cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-img">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="cart-item-info">
                  <h4 className="cart-item-name">{item.name}</h4>
                  <p className="cart-item-price">
                    {item.qty} × <span>${item.price}.00</span>
                  </p>
                </div>
                <button
                  className="cart-item-remove"
                  onClick={() => onRemove(item.id)}
                  aria-label="Remove"
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="cart-drawer-footer">
            <hr className="cart-divider" />
            <div className="cart-subtotal">
              <span>Subtotal:</span>
              <span className="cart-subtotal-amount">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <button className="cart-checkout-btn">CHECKOUT</button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
