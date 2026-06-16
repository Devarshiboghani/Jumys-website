import React, { useState } from "react";
import "./BlogHeader.css";

const categories = [
  "Business Tips",
  "Dessert Recipes",
  "Flavor Trends",
  "Healthy Options",
  "Ice Cream",
  "Uncategorized",
];

const BlogHeader = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="blog-header">
      <h1 className="blog-main-title">Blogs</h1>
      <div className="blog-cat-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`blog-cat-tab ${activeCategory === cat ? "active" : ""}`}
            onClick={() => onCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogHeader;
