import React, { useState } from "react";
import BlogHeader from "./BlogHeader/BlogHeader";
import BlogSidebar from "./BlogSidebar/BlogSidebar";
import BlogList from "./BlogList/BlogList";
import "./Blog.css";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("Business Tips");

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <>
      <div className="blog-page">
        <BlogHeader
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="blog-body">
          <BlogSidebar
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          <BlogList activeCategory={activeCategory} />
        </div>
      </div>
    </>
  );
};

export default Blog;
