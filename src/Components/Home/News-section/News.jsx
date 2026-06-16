import React, { useEffect, useState } from "react";
import "./News.css";

const posts = [
  {
    category: "BUSINESS TIPS",
    date: "Jun 30, 2024",
    title: "The Best Ice Cream You'll Never Eat",
    img: "https://wpbingo-jumys.myshopify.com/cdn/shop/articles/blog-7_1080x.jpg?v=1719804468",
  },
  {
    category: "BUSINESS TIPS",
    date: "Jun 30, 2024",
    title: "Fancy Figs? Make This Ice Cream",
    img: "https://wpbingo-jumys.myshopify.com/cdn/shop/articles/blog-5_1080x.jpg?v=1719804408",
  },
  {
    category: "BUSINESS TIPS",
    date: "Jun 30, 2024",
    title: "The Art Of Crafting Gourmet Ice Cream",
    img: "https://wpbingo-jumys.myshopify.com/cdn/shop/articles/blog-2_1080x.jpg?v=1719804262",
  },
  {
    category: "BUSINESS TIPS",
    date: "Jul 05, 2024",
    title: "Top 10 Flavors Trending This Summer",
    img: "https://wpbingo-jumys.myshopify.com/cdn/shop/articles/blog-5_1080x.jpg?v=1719804408",
  },
];

const News = () => {
  const [start, setStart] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const visiblePosts = posts.slice(start, start + visibleCount);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1100) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => setStart((prev) => Math.max(0, prev - 1));
  const handleNext = () =>
    setStart((prev) => Math.min(posts.length - visibleCount, prev + 1));

  return (
    <section className="news-section">
      <div className="news-heading">
        <span className="news-tag">Our News</span>
        <h2 className="news-title">Tastiest Updates</h2>
      </div>

      <div className="news-slider-wrapper">
        {/* Left Arrow Button */}
        <button
          className="news-arrow news-arrow-left"
          onClick={handlePrev}
          disabled={start === 0}
        >
          ‹
        </button>

        <div
          className="news-grid"
          style={{ gridTemplateColumns: `repeat(${visibleCount}, 1fr)` }}
        >
          {visiblePosts.map((post, i) => (
            <div className="news-card" key={i}>
              <div className="news-img-wrap">
                <img src={post.img} alt={post.title} className="news-img" />
              </div>
              <div className="news-meta">
                <span className="news-category">{post.category}</span>
                <span className="news-dot">•</span>
                <span className="news-date">{post.date}</span>
              </div>
              <h3 className="news-card-title">{post.title}</h3>
            </div>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          className="news-arrow news-arrow-right"
          onClick={handleNext}
          disabled={start >= posts.length - visibleCount}
        >
          ›
        </button>
      </div>

      <div className="news-btn-wrap">
        <button className="news-read-btn">Read More</button>
      </div>
    </section>
  );
};

export default News;
