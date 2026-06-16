import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Hero.css';

const slides = [
    {
        id: "01",
        tag: "ICE CREAM HEAVEN",
        title: <>Cool Confections:<br />Discover The Magic<br />Of Ice Cream</>,
        bg: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/bg-slider-2_3fa8b71c-4ff1-4e13-a827-3e2230c6e0d9.jpg?v=1719905136",
    },
    {
        id: "02",
        tag: "SUMMER SPECIALS",
        title: <>Chilled Delights:<br />Taste The Sweetness<br />Of Every Scoop</>,
        bg: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/bg-slider-1.jpg?v=1719904397",
    },
    {
        id: "03",
        tag: "FRESH & CREAMY",
        title: <>Icy Indulgences:<br />Explore Our Finest<br />Frozen Treats</>,
        bg: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/bg-slider-2_3fa8b71c-4ff1-4e13-a827-3e2230c6e0d9.jpg?v=1719905136",
    },
];

const Hero = () => {
    const [current, setCurrent] = useState(0);
    const [animation, setAnimation] = useState(false);
    
    const slider = (index) => {
        if (animation) return;
        setAnimation(true);
        setTimeout(() => {
            setCurrent(index);
            setAnimation(false);
        }, 400);
    };
    
    useEffect(() => {
        const timer = setInterval(() => slider((current + 1) % slides.length), 4000);
        return () => clearInterval(timer);
    }, [current]);
 
    const slide = slides[current];

    return (
        <section className="hero" style={{ backgroundImage: `url('${slide.bg}')` }}>
            <div 
                className="hero-mobile-image d-block d-sm-none" 
                style={{ backgroundImage: `url('${slide.bg}')` }}
            ></div>

            <Container fluid="lg" className="h-100 px-3 px-sm-5 position-relative">
                <Row className="align-items-center h-100">
                    <Col lg={6} md={8} sm={12} className="p-0">
                        <div className={`hero-content ${animation ? "fade-out" : "fade-in"}`}>
                            <p className="hero-tag">{slide.tag}</p>
                            <h1 className="hero-title">{slide.title}</h1>
                            <div className="hero-buttons d-flex gap-3 mt-4">
                                <button className="shop-btn">Shop Now</button>
                                <button className="more-btn">See More</button>
                            </div>
                        </div>
                    </Col>
                </Row>

                <div className="hero-counter d-flex flex-column align-items-start">
                    <span className="counter-num">{slide.id}</span>
                    <div className="counter-bar" />
                </div>
            </Container>
        </section>
    );
};

export default Hero;