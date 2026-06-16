import React from "react";
import "./AboutHero.css";

const AboutHero = () => {
    return (
        <div className="about-hero">
            <div className="about-hero-overlay">
                <h1 className="about-hero-title">About Us</h1>
                <p className="about-hero-breadcrumb">
                    <a href="/">Home</a> / <span>About Us</span>
                </p>
            </div>
        </div>
    );
};

export default AboutHero;