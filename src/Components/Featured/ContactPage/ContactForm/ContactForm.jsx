import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="cf-section">
      {/* Left Info */}
      <div className="cf-left">
        <h2 className="cf-title">Get in touch</h2>

        <div className="cf-info-block">
          <p className="cf-address">
            Rains HQ, Jens Olsens Vej 13, 8200 Aarhus N, Denmark
          </p>
          <p className="cf-phone">(02) 6188 8062</p>
          <p className="cf-email">demo@gmail.com</p>
        </div>

        <div className="cf-hours-block">
          <h3 className="cf-sub-title">Open Hours</h3>
          <p>Contact Our Customer Happiness Team</p>
          <p>Monday–Friday 9am–5pm</p>
        </div>

        <div className="cf-follow-block">
          <h3 className="cf-sub-title">Follow Us:</h3>
          <div className="cf-socials">
            <a href="#" className="cf-social" aria-label="Facebook">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" className="cf-social" aria-label="X">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="cf-social" aria-label="WhatsApp">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.126.558 4.121 1.533 5.851L.057 23.633a.5.5 0 0 0 .61.61l5.782-1.476A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.955 9.955 0 0 1-5.166-1.41l-.371-.22-3.833.978.998-3.833-.242-.384A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
            </a>
            <a href="#" className="cf-social" aria-label="TikTok">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Right Form */}
      <div className="cf-right">
        <form className="cf-form" onSubmit={handleSubmit} noValidate>
          <div className="cf-row">
            <div className="cf-field">
              <input
                name="name"
                value={form.name}
                onChange={handle}
                placeholder="Your name"
                className="cf-input"
                required
              />
              <span className="cf-required">*</span>
            </div>
            <div className="cf-field">
              <input
                name="email"
                value={form.email}
                onChange={handle}
                placeholder="Your email"
                className="cf-input"
                type="email"
                required
              />
              <span className="cf-required">*</span>
            </div>
          </div>

          <div className="cf-field cf-field-full">
            <input
              name="phone"
              value={form.phone}
              onChange={handle}
              placeholder="Phone Number"
              className="cf-input"
              required
            />
            <span className="cf-required">*</span>
          </div>

          <div className="cf-field cf-field-full">
            <textarea
              name="message"
              value={form.message}
              onChange={handle}
              placeholder="Your message..."
              className="cf-textarea"
              rows={7}
            />
          </div>

          <button type="submit" className="cf-submit-btn">
            {submitted ? "Message Sent! ✓" : "Send Message"}
          </button>

          {submitted && (
            <p className="cf-success">Thank you! We'll get back to you soon.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
