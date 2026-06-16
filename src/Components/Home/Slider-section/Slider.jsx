import React from "react";
import { Container } from "react-bootstrap";
import { useCart } from "../../Cart/CartContext";
import { addToWishlist } from "../../../Utils/wishlist";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "./Slider.css";

const products = [
    {
        id: 1,
        image: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-14_900x.webp?v=1719559069",
        title: "Cream Puff",
        price: "$11.00",
        oldPrice: "",
        discount: "",
    },
    {
        id: 2,
        image: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-2_900x.webp?v=1719559119",
        title: "Wedding Cake",
        price: "$12.00",
        oldPrice: "$13.00",
        discount: "-7%",
    },
    {
        id: 3,
        image: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-20_900x.webp?v=1719558769",
        title: "Burnt Orange Dreamsicle",
        price: "$12.00",
        oldPrice: "$15.00",
        discount: "-20%",
    },
    {
        id: 4,
        image: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-10_900x.webp?v=1719558899",
        title: "Wedding Cake",
        price: "$12.00",
        oldPrice: "$13.00",
        discount: "-7%",
    },
    {
        id: 5,
        image: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-19_900x.webp?v=1719558435",
        title: "Brown Sugar",
        price: "$15.00",
        oldPrice: "",
        discount: "",
    },
];

const Slider = () => {
    const { addToCart } = useCart();

    const handleAddToCart = (item) => {
        const price = parseFloat(String(item.price).replace(/[^0-9\.]/g, "")) || 0;
        addToCart({ id: item.id, name: item.title, price, img: item.image });
    };

    const handleWishlist = (item) => {
        addToWishlist({
            id: item.id,
            title: item.title,
            price: item.price,
            oldPrice: item.oldPrice || null,
            discount: item.discount || null,
            image: item.image,
        });
    };

    const handleShare = async (item) => {
        try {
            const shareData = { title: item.title, text: item.title, url: window.location.href };
            if (navigator.share) {
                await navigator.share(shareData);
            } else if (navigator.clipboard) {
                await navigator.clipboard.writeText(window.location.href);
                alert("Link copied to clipboard");
            } else {
                alert("Share not supported in this browser");
            }
        } catch (e) { /* silent */ }
    };

    const handleSearch = () => {
        const input = document.querySelector(".search-input");
        if (input) input.focus();
        else alert("Search not available on this page");
    };
        
    return (
        <section className="best-section">
            <Container fluid="lg">
                <h1 className="section-title">Best Ice Cream Shops</h1>

                <Swiper
                    slidesPerView={4}
                    spaceBetween={24} 
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 16,
                        },
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        992: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 24,
                        },
                    }}
                    className="product-swiper"
                >
                    {products.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="product-card">
                                {/* Image Box */}
                                <div className="product-image">
                                    {item.discount && (
                                        <span className="discount-badge">
                                            {item.discount}
                                        </span>
                                    )}

                                    <img src={item.image} alt={item.title} className="img-fluid" />

                                    <div className="product-hover-icons">
                                        <button title="Add to cart" onClick={() => handleAddToCart(item)}>🛒</button>
                                        <button title="Wishlist" onClick={() => handleWishlist(item)}>♡</button>
                                        <button title="Share" onClick={() => handleShare(item)}>🔗</button>
                                        <button title="Search" onClick={handleSearch}>🔍</button>
                                    </div>
                                </div>

                                {/* Content Box */}
                                <div className="product-content">
                                    <h3>{item.title}</h3>
                                    <p className="reviews">☆☆☆☆☆ No reviews</p>
                                    <div className="price-box">
                                        {item.oldPrice && (
                                            <span className="old-price">{item.oldPrice}</span>
                                        )}
                                        <span className="new-price">{item.price}</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section>
    );
};

export default Slider;