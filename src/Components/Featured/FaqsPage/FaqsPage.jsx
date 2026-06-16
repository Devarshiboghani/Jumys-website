import React from "react";
import "./FaqsPage.css";

const faqData = [
  {
    number: "01.",
    title: "The order",
  },
  {
    number: "02.",
    title: "Shipment",
  },
  {
    number: "03.",
    title: "The order",
  },
  {
    number: "04.",
    title: "Returns, exchanges and complaints",
  },
];

const Faqs = () => {
  return (
    <section className="faqs-page">
      {/* Hero */}
      <div className="faqs-hero">
        <h1>Faqs</h1>
        <p>Home / Faqs</p>
      </div>

      {/* FAQ Grid */}
      <div className="faq-grid">
        {faqData.map((item, index) => (
          <div className="faq-card" key={index}>
            <h2>
              {item.number} {item.title}
            </h2>

            <div className="faq-item">
              <h4>When do I receive my order?</h4>
              <p>
                When placing the order, a day of shipment is indicated. After
                the order has been placed, the same delivery time will also be
                stated on the order confirmation. It is therefore never possible
                that during the order, the shipping day on the website, is
                different than on the order confirmation.
              </p>
            </div>

            <div className="faq-item">
              <h4>
                I now see the longer delivery time of my order. How can I cancel
                it?
              </h4>
              <p>
                If the order has a longer delivery time than you had previously
                seen, it is of course possible to cancel (a part of) the order.
                For this you can contact our customer service. They will cancel
                the order for you. The purchase amount will be back on your bank
                account within two working days. When an order has already been
                shipped, it can no longer be cancelled.
              </p>
            </div>

            <div className="faq-item">
              <h4>When will I receive the invoice for my order?</h4>
              <p>
                When you have paid for the order, you will not automatically
                receive an invoice for your order. If you wish to receive an
                invoice, this can be done in two ways.The first way is through
                your account at our store. When you log in to your account you
                can see your orders and download the invoice.
              </p>
            </div>
          </div>
        ))}
      </div>

      <a href="#" className="contact-top-btn">
        TOP
      </a>
    </section>
  );
};

export default Faqs;
