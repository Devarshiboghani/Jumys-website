import React from "react";
import AboutHero        from "./AboutHero/AboutHero";
import AboutManufacture from "./AboutManufacture/AboutManufacture";
import AboutStatus       from "./AboutStatus/AboutStatus";
import AboutHistory     from "./AboutHistory/AboutHistory";
import AboutTestimonial from "./AboutTestimonial/AboutTestimonial";
import News from "../../Home/News-section/News"

const AboutPage = () => {
    return (
        <div className="about-page">
            <AboutHero />
            <AboutManufacture />
            <AboutStatus />
            <AboutHistory />
            <AboutTestimonial />
            <News />
            <a href="#" className="contact-top-btn">TOP</a>
        </div>
    );
};

export default AboutPage;