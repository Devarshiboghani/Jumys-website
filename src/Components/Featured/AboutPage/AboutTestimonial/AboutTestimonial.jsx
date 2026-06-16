import React, { useEffect, useState } from "react";
import "./AboutTestimonial.css";

const testimonials = [
  {
    id: 1,
    name: "Mia Chen",
    role: "Graphic Designer",
    img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/tes.jpg?v=1714730064",
    bg: "#f5c0c8",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non mattis dui, sit amet hendrerit nibh. Duis congue volutpat urna ut accumsan.",
  },
  {
    id: 2,
    name: "Eshan B",
    role: "CEO",
    img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/tes-2_180x.jpg?v=1714719644",
    bg: "#c8a882",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non mattis dui, sit amet hendrerit nibh. Duis congue volutpat urna ut accumsan.",
  },
  {
    id: 3,
    name: "KPindia",
    role: "Designer",
    img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/tes-1.jpg?v=1715670691",
    bg: "#e8b840",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non mattis dui, sit amet hendrerit nibh. Duis congue volutpat urna ut accumsan.",
  },
  {
    id: 4,
    name: "Sara K",
    role: "Marketing Head",
    img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/testimonial-1.jpg?v=1714968571",
    bg: "#a0c4d8",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non mattis dui, sit amet hendrerit nibh. Duis congue volutpat urna ut accumsan.",
  },
  {
    id: 5,
    name: "James T",
    role: "Food Blogger",
    img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/testimonial-2.jpg?v=1714968571",
    bg: "#b8d8a0",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non mattis dui, sit amet hendrerit nibh. Duis congue volutpat urna ut accumsan.",
  },
];

const AboutTestimonial = () => {
  const [start, setStart] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const visible = testimonials.slice(start, start + visibleCount);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1200) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="testimonial-section">
      <div className="testimonial-top">
        <div className="testimonial-heading">
          <p className="testimonial-tag">Testimonial</p>
          <h2 className="testimonial-title">Ice Cream Shop</h2>
        </div>
        <div className="testimonial-arrows">
          <button
            className="t-arrow"
            onClick={() => setStart((s) => Math.max(0, s - 1))}
            disabled={start === 0}
          >
            ‹
          </button>
          <button
            className="t-arrow"
            onClick={() =>
              setStart((s) =>
                Math.min(testimonials.length - visibleCount, s + 1),
              )
            }
            disabled={start >= testimonials.length - visibleCount}
          >
            ›
          </button>
        </div>
      </div>

      <div
        className="testimonial-grid"
        style={{ gridTemplateColumns: `repeat(${visibleCount}, 1fr)` }}
      >
        {visible.map((t) => (
          <div className="testimonial-card" key={t.id}>
            <div className="t-card-top">
              <div className="t-avatar" style={{ background: t.bg }}>
                <img src={t.img} alt={t.name} />
              </div>
              <div className="t-info">
                <h4 className="t-name">{t.name}</h4>
                <p className="t-role">{t.role}</p>
              </div>
            </div>
            <p className="t-text">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutTestimonial;
