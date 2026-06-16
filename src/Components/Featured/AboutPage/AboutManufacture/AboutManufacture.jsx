import React from "react";
import "./AboutManufacture.css";

const AboutManufacture = () => {
  return (
    <section className="manufacture-section">
      <div className="manufacture-left">
        <p className="manufacture-tag">Sweet Escape</p>
        <h2 className="manufacture-title">Manufacture</h2>
        <p className="manufacture-text">
          Once the ingredients have cooled enough, it's time to pour them into
          molds and freeze in a brine bath. After that, the ice cream sticks are
          dried and packaged in the freezer in square boxes. From here, this
          cool ice cream is ready to be delivered to visitors...
        </p>
        <button className="manufacture-btn">View More →</button>
      </div>
      <div className="manufacture-right">
        <img
          src="https://wpbingo-jumys.myshopify.com/cdn/shop/files/banner-7.jpg?v=1715587088"
          alt="Manufacture"
          className="manufacture-img"
        />
      </div>
    </section>
  );
};

export default AboutManufacture;
