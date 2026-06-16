import React, { useState, useEffect } from "react";
import "./LoginDrawer.css";

const LoginDrawer = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signing in as: ${email}`);

    setEmail("");
    setPassword("");
    setShowPass(false);
    onClose();
  };

  return (
    <>
      {/* Dark Overlay */}
      {isOpen && <div className="drawer-overlay" onClick={onClose} />}

      {/* Drawer */}
      <div
        className={`login-drawer ${isOpen ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="drawer-close" onClick={onClose}>
          ✕
        </button>

        <div className="drawer-content">
          <p className="drawer-label">SIGN IN</p>

          <form className="drawer-form" onSubmit={handleSubmit}>
            <div className="drawer-field">
              <input
                type="email"
                placeholder="Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="drawer-input"
                required
              />
            </div>

            <div className="drawer-field">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Password*"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="drawer-input"
                required
              />
              <button
                type="button"
                className="drawer-eye"
                onClick={() => setShowPass(!showPass)}
                aria-label="Toggle password"
              >
                {showPass ? (
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="1"
                      y1="1"
                      x2="23"
                      y2="23"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                )}
              </button>
            </div>

            <a href="#" className="drawer-forgot">
              Lost your password ?
            </a>

            <div className="drawer-btns">
              <button type="submit" className="drawer-signin-btn">
                Sign In
              </button>
              <button type="button" className="drawer-register-btn">
                Create Your Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginDrawer;
