import React from "react";
import "./AboutHistory.css";

const AboutHistory = () => {
  return (
    <section className="history-section">
      <div className="history-left">
        <img
          src="https://wpbingo-jumys.myshopify.com/cdn/shop/files/banner-8.jpg?v=1715660504"
          alt="History"
          className="history-img"
        />
      </div>
      <div className="history-right">
        <p className="history-tag">Frozen Joy</p>
        <h2 className="history-title">History Begin</h2>
        <p className="history-text">
          On hot summer days like today, in addition to a glass of cool
          beverage, a glass of ice cream can also help relieve some of the heat.
          Ice cream is popular not only among children but also loved by many
          people of many different ages...
        </p>
        <button className="history-btn">View More →</button>
      </div>
    </section>
  );
};

export default AboutHistory;
