import React from "react";
import "./Contact.css";
import ContactHero from "./ContactHero/ContactHero";
import ContactMap  from "./ContactMap/ContactMap";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
    return (
        <div className="contact-page">
            <ContactHero />
            <ContactMap />
            <ContactForm />
            <a href="#" className="contact-top-btn">TOP</a>
        </div>
    );
};

export default Contact;