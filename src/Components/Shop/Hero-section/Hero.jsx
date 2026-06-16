import React, { useState } from "react";
import "./Hero.css";
import FilterSidebar from "../FilterSidebar/FilterSidebar";
import ProductGrid from "../ProductGrid/ProductGrid";

const Hero = () => {
  return (
    <>
      <div className="shop-page">
        <div className="shop-heading">
          <h1 className="shop-title">Products</h1>
          <p className="shop-breadcrumb">
            <a href="/">
              <span>Home / Products</span>
            </a>
          </p>
        </div>
        <a href="#" className="pd-top-btn">
          TOP
        </a>
      </div>
    </>
  );
};

export default Hero;
