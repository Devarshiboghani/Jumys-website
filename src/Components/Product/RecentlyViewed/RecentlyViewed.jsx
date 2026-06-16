import React, { useState, useEffect } from "react";
import "./RecentlyViewed.css";
import { useCart } from "../../Cart/CartContext";
import { addToWishlist } from "../../../Utils/wishlist";

const recentItems = [
    { id:1, name:"Banana Cream Pudding",    price:12, oldPrice:15, discount:"-20%", img:"https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-21_360x.webp?v=1719558054",  rating:0, reviews:"No reviews", colors:[] },
    { id:2, name:"Darkest Chocolate",       price:13, oldPrice:null,discount:null,  img:"https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-15_540x.webp?v=1719558207",  rating:0, reviews:"No reviews", colors:[] },
    { id:3, name:"Blackout Chocolate Cake", price:12, oldPrice:null,discount:null,  img:"https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-8_540x.webp?v=1719558347",   rating:3, reviews:"1 review",  colors:["#8b3a2a","#4a7fc1"] },
    { id:4, name:"Double Dough",            price:10, oldPrice:13, discount:"-23%", img:"https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-19_540x.webp?v=1719558435",  rating:0, reviews:"No reviews", colors:[] },
    { id:5, name:"Brambleberry Crisp",      price:10, oldPrice:12, discount:"-16%", img:"https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-1_540x.webp?v=1719558508",   rating:0, reviews:"No reviews", colors:[] },
];

const STARS   = 5;

const RecentlyViewed = () => {
    const { addToCart } = useCart();
    const [start, setStart] = useState(0);

    const handleAddToCart = (item) => {
        addToCart({ id: item.id, name: item.name, price: item.price, img: item.img });
    };

    const handleWishlist = (item) => {
        addToWishlist({
            id: item.id,
            title: item.name,
            price: `$${item.price}.00`,
            oldPrice: item.oldPrice ? `$${item.oldPrice}.00` : null,
            discount: item.discount,
            image: item.img,
        });
    };

    const handleShare = async (item) => {
        try {
            const shareData = { title: item.name, text: item.name, url: window.location.href };
            if (navigator.share) {
                await navigator.share(shareData);
            } else if (navigator.clipboard) {
                await navigator.clipboard.writeText(window.location.href);
                alert("Link copied to clipboard");
            } else {
                alert("Share is not supported in this browser.");
            }
        } catch (e) {
            // ignore
        }
    };

    const handleSearch = () => {
        const input = document.querySelector(".search-input");
        if (input) input.focus();
        else alert("Search is not available on this page");
    };

    const [visible, setVisible] = useState(4);

useEffect(() => {
    const updateVisible = () => {
        if (window.innerWidth < 768) {
            setVisible(2);
        } else if (window.innerWidth < 992) {
            setVisible(3);
        } else {
            setVisible(4);
        }
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);

    return () => window.removeEventListener("resize", updateVisible);
}, []);

    return (
        <section className="rv-section">
            <h2 className="rv-title">Recently Viewed Products</h2>

            <div className="rv-slider-wrap">
                <button
                    className="rv-arrow"
                    onClick={() => setStart((s) => Math.max(0, s - 1))}
                    disabled={start === 0}
                >‹</button>

                <div className="rv-grid">
                    {recentItems.slice(start, start + visible).map((p) => (
                        <div className="rv-card" key={p.id}>
                            <div className="rv-img-box" style={{ background: p.bg }}>
                                {p.discount && <span className="rv-badge">{p.discount}</span>}
                                <img src={p.img} alt={p.name} />
                                <div className="rv-hover-icons">
                                    <button title="Add to cart" onClick={(e) => { e.stopPropagation(); handleAddToCart(p); }}>🛒</button>
                                    <button title="Wishlist" onClick={(e) => { e.stopPropagation(); handleWishlist(p); }}>♡</button>
                                    <button title="Share" onClick={(e) => { e.stopPropagation(); handleShare(p); }}>🔗</button>
                                    <button title="Search" onClick={(e) => { e.stopPropagation(); handleSearch(); }}>🔍</button>
                                </div>
                            </div>
                            <h4 className="rv-name">{p.name}</h4>
                            <div className="rv-stars-row">
                                {Array(STARS).fill(0).map((_, i) => (
                                    <span key={i} className={i < p.rating ? "rv-star filled" : "rv-star"}>★</span>
                                ))}
                                <span className="rv-reviews">{p.reviews}</span>
                            </div>
                            <div className="rv-price-row">
                                {p.oldPrice && <s className="rv-old">${p.oldPrice}.00</s>}
                                <span className="rv-new">${p.price}.00</span>
                            </div>
                            {p.colors.length > 0 && (
                                <div className="rv-colors">
                                    {p.colors.slice(0,2).map((c,i) => (
                                        <span key={i} className="rv-dot" style={{ background: c }} />
                                    ))}
                                    {p.colors.length > 2 && <span className="rv-more">+{p.colors.length-2}</span>}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <button
                    className="rv-arrow"
                    onClick={() => setStart((s) => Math.min(recentItems.length - visible, s + 1))}
                    disabled={start >= recentItems.length - visible}
                >›</button>
            </div>
        </section>
    );
};

export default RecentlyViewed;