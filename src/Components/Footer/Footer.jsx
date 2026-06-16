import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <section className="newsletter-section">
                <h2 className="newsletter-title">Sign Up To Our Newsletter!</h2>
                <p className="newsletter-sub">Be The First To Know About New Flavors And More</p>
                <div className="newsletter-form">
                    <input
                        type="email"
                        placeholder="Your Email..."
                        className="newsletter-input"
                    />
                    <button className="newsletter-btn">Sign Up</button>
                </div>
            </section>

            <footer className="footer-bar">
                <div className="footer-logo">
                    <img 
                        src="https://wpbingo-jumys.myshopify.com/cdn/shop/files/logo-white.png?v=1714968080" 
                        alt="Jumys White Logo" 
                    />
                </div>

                <p className="footer-copy">© 2024 – JUMYS. ALL RIGHTS RESERVED.</p>

                <div className="footer-socials">
                    <a href="#" aria-label="Facebook" className="social-link">
                        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                        </svg>
                    </a>
                    <a href="#" aria-label="X" className="social-link">
                        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                    </a>
                    <a href="#" aria-label="WhatsApp" className="social-link">
                        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.558 4.121 1.533 5.851L.057 23.633a.5.5 0 0 0 .61.61l5.782-1.476A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.65-.515-5.166-1.41l-.371-.22-3.833.978.998-3.833-.242-.384A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                        </svg>
                    </a>
                    <a href="#" aria-label="TikTok" className="social-link">
                        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
                        </svg>
                    </a>
                </div>
            </footer>
        </>
    );
};

export default Footer;