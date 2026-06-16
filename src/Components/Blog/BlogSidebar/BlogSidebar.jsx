import React, { useState } from "react";
import "./BlogSidebar.css";

const categories = [
  "Business Tips",
  "Dessert Recipes",
  "Flavor Trends",
  "Healthy Options",
  "Ice Cream",
  "Uncategorized",
];

const relatedPosts = [
  {
    id: 1,
    date: "Jun 30, 2024",
    title: "The Best Ice Cream You'll Never Eat",
    comments: 0,
    img: "https://wpbingo-jumys.myshopify.com/cdn/shop/articles/blog-7_1080x.jpg?v=1719804468",
  },
  {
    id: 2,
    date: "Jul 02, 2024",
    title: "Fancy Figs? Make this Ice Cream",
    comments: 0,
    img: "https://wpbingo-jumys.myshopify.com/cdn/shop/articles/blog-5_1080x.jpg?v=1719804408",
  },
  {
    id: 3,
    date: "Jun 30, 2024",
    title: "The Art Of Crafting Gourmet Ice Cream",
    comments: 0,
    img: "https://wpbingo-jumys.myshopify.com/cdn/shop/articles/blog-2_1080x.jpg?v=1719804262",
  },
];

const tags = [
  "Beauty",
  "Electric",
  "Fashion",
  "Hot",
  "Jewelry",
  "Organic",
  "Simple",
  "Sport",
];

const BlogSidebar = ({ activeCategory, onCategoryChange }) => {
  const [search, setSearch] = useState("");

  return (
    <aside className="blog-sidebar">
      <div className="sidebar-block">
        <h3 className="sidebar-title">Search</h3>
        <div className="sidebar-search">
          <input
            type="text"
            placeholder="Search blog..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button aria-label="search">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
              <circle
                cx="11"
                cy="11"
                r="7"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M16.5 16.5l4 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="sidebar-block">
        <h3 className="sidebar-title">Categories</h3>
        <ul className="sidebar-cat-list">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                className={`sidebar-cat-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => onCategoryChange(cat)}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-block">
        <h3 className="sidebar-title">Related Posts</h3>
        <div className="sidebar-posts">
          {relatedPosts.map((post) => (
            <div className="sidebar-post-item" key={post.id}>
              <div className="sidebar-post-img">
                <img src={post.img} alt={post.title} />
              </div>
              <div className="sidebar-post-info">
                <p className="sidebar-post-date">{post.date}</p>
                <p className="sidebar-post-title">{post.title}</p>
                <p className="sidebar-post-comments">
                  {post.comments} comments
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar-block">
        <h3 className="sidebar-title">Tags</h3>
        <div className="sidebar-tags">
          {tags.map((tag) => (
            <button key={tag} className="sidebar-tag">
              {tag}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default BlogSidebar;
