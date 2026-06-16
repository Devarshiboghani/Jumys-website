import React from "react";
import "./ContactHero.css";

const ContactHero = () => {
  return (
    <>
      <div className="contact-hero-wrap">
        <div className="contact-hero-overlay">
          <h1 className="contact-hero-title">Contact</h1>
          <p className="contact-hero-breadcrumb">
            <a href="/">Home</a> / <span>Contact</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactHero;
