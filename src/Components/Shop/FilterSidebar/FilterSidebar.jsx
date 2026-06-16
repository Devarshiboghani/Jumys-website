import React, { useState } from "react";
import "./FilterSidebar.css";

const FilterSidebar = ({ onFilterChange }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [openSections, setOpenSections] = useState({
    collections: true,
    availability: true,
    price: true,
    color: true,
    size: true,
    featured: true,
  });

  const [selectedCollections, setSelectedCollections] = useState([]);
  const [priceRange, setPriceRange] = useState(15);
  const [inStock, setInStock] = useState(false);
  const [outOfStock, setOutOfStock] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  const toggle = (key) =>
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));

  const notify = (updated) => {
    onFilterChange && onFilterChange(updated);
  };

  const handleCollection = (collection) => {
    const updated = selectedCollections.includes(collection)
      ? selectedCollections.filter((c) => c !== collection)
      : [...selectedCollections, collection];

    setSelectedCollections(updated);
    notify({
      maxPrice: Number(priceRange),
      inStock,
      outOfStock,
      sizes: selectedSizes,
      colors: selectedColors,
      collections: updated,
    });
  };

  const handlePrice = (val) => {
    setPriceRange(val);
    notify({
      maxPrice: Number(val),
      inStock,
      outOfStock,
      sizes: selectedSizes,
      colors: selectedColors,
      collections: selectedCollections,
    });
  };

  const handleStock = (type, val) => {
    const ni = type === "in" ? val : inStock;
    const no = type === "out" ? val : outOfStock;
    setInStock(ni);
    setOutOfStock(no);
    notify({
      maxPrice: Number(priceRange),
      inStock: ni,
      outOfStock: no,
      sizes: selectedSizes,
      colors: selectedColors,
      collections: selectedCollections,
    });
  };

  const handleSize = (size) => {
    const updated = selectedSizes.includes(size)
      ? selectedSizes.filter((s) => s !== size)
      : [...selectedSizes, size];
    setSelectedSizes(updated);
    notify({
      maxPrice: Number(priceRange),
      inStock,
      outOfStock,
      sizes: updated,
      colors: selectedColors,
      collections: selectedCollections,
    });
  };

  const handleColor = (hex) => {
    const updated = selectedColors.includes(hex)
      ? selectedColors.filter((c) => c !== hex)
      : [...selectedColors, hex];
    setSelectedColors(updated);
    notify({
      maxPrice: Number(priceRange),
      inStock,
      outOfStock,
      sizes: selectedSizes,
      colors: updated,
      collections: selectedCollections,
    });
  };

  const resetAll = () => {
    setSelectedCollections([]);
    setPriceRange(15);
    setInStock(false);
    setOutOfStock(false);
    setSelectedSizes([]);
    setSelectedColors([]);
    notify({
      maxPrice: 15,
      inStock: false,
      outOfStock: false,
      sizes: [],
      colors: [],
      collections: [],
    });
  };

  return (
    <aside className="filter-sidebar">
      <div
        className={`mobile-filter-trigger ${isSidebarOpen ? "active" : ""}`}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <div className="trigger-content">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" y1="21" x2="4" y2="14"></line>
            <line x1="4" y1="10" x2="4" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12" y2="3"></line>
            <line x1="20" y1="21" x2="20" y2="16"></line>
            <line x1="20" y1="12" x2="20" y2="3"></line>
            <line x1="1" y1="14" x2="7" y2="14"></line>
            <line x1="9" y1="8" x2="15" y2="8"></line>
            <line x1="17" y1="16" x2="23" y2="16"></line>
          </svg>
          <span>Filter</span>
        </div>
        <span className="trigger-arrow">&#8964;</span>
      </div>

      <div
        className={`filter-content-wrapper ${isSidebarOpen ? "mobile-show" : ""}`}
      >
        {/* Reset Button */}
        <button className="filter-reset-btn" onClick={resetAll}>
          Reset Filters
        </button>

        {/* Collections */}
        <div className="filter-group">
          <div className="filter-header" onClick={() => toggle("collections")}>
            <span>Collections</span>
            <span
              className={`filter-arrow ${openSections.collections ? "open" : ""}`}
            >
              &#8964;
            </span>
          </div>
          {openSections.collections && (
            <div className="filter-body">
              {[
                ["Canned Ice Cream", 8],
                ["Frozen Yogurt", 6],
                ["Ice Cream Cakes", 21],
              ].map(([label, count]) => (
                <label className="filter-check" key={label}>
                  <input
                    type="checkbox"
                    checked={selectedCollections.includes(label)}
                    onChange={() => handleCollection(label)}
                  />
                  <span>
                    {label} ({count})
                  </span>
                </label>
              ))}
              <button className="view-more">+ View more</button>
            </div>
          )}
        </div>
        <hr className="filter-divider" />

        {/* Availability */}
        <div className="filter-group">
          <div className="filter-header" onClick={() => toggle("availability")}>
            <span>Availability</span>
            <span
              className={`filter-arrow ${openSections.availability ? "open" : ""}`}
            >
              &#8964;
            </span>
          </div>
          {openSections.availability && (
            <div className="filter-body">
              <label className="filter-check">
                <input
                  type="checkbox"
                  checked={inStock}
                  onChange={(e) => handleStock("in", e.target.checked)}
                />
                <span>In stock (23)</span>
              </label>
              <label className="filter-check">
                <input
                  type="checkbox"
                  checked={outOfStock}
                  onChange={(e) => handleStock("out", e.target.checked)}
                />
                <span>Out of stock (1)</span>
              </label>
            </div>
          )}
        </div>
        <hr className="filter-divider" />

        {/* Price */}
        <div className="filter-group">
          <div className="filter-header" onClick={() => toggle("price")}>
            <span>Price</span>
            <span
              className={`filter-arrow ${openSections.price ? "open" : ""}`}
            >
              &#8964;
            </span>
          </div>
          {openSections.price && (
            <div className="filter-body">
              <input
                type="range"
                min="0"
                max="15"
                value={priceRange}
                onChange={(e) => handlePrice(e.target.value)}
                className="price-range"
              />
              <p className="price-label">
                Price :{" "}
                <span className="price-val">
                  ${"0.00"} — ${parseFloat(priceRange).toFixed(2)}
                </span>
              </p>
            </div>
          )}
        </div>
        <hr className="filter-divider" />

        {/* Color */}
        <div className="filter-group">
          <div className="filter-header" onClick={() => toggle("color")}>
            <span>Color</span>
            <span
              className={`filter-arrow ${openSections.color ? "open" : ""}`}
            >
              &#8964;
            </span>
          </div>
          {openSections.color && (
            <div className="filter-body">
              {[
                { name: "Black", count: 1, hex: "#1a1a1a" },
                { name: "Blue", count: 3, hex: "#4a7fc1" },
                { name: "Brick", count: 2, hex: "#8b3a2a" },
              ].map((c) => (
                <label
                  className="filter-color-row"
                  key={c.name}
                  onClick={() => handleColor(c.hex)}
                >
                  <span
                    className={`color-dot ${selectedColors.includes(c.hex) ? "color-selected" : ""}`}
                    style={{ background: c.hex }}
                  />
                  <span>
                    {c.name} ({c.count})
                  </span>
                </label>
              ))}
              <button className="view-more red">+ View more</button>
            </div>
          )}
        </div>
        <hr className="filter-divider" />

        {/* Size */}
        <div className="filter-group">
          <div className="filter-header" onClick={() => toggle("size")}>
            <span>Size</span>
            <span className={`filter-arrow ${openSections.size ? "open" : ""}`}>
              &#8964;
            </span>
          </div>
          {openSections.size && (
            <div className="filter-body">
              {[
                ["S", 3],
                ["M", 3],
                ["L", 3],
              ].map(([s, count]) => (
                <label className="filter-check" key={s}>
                  <input
                    type="checkbox"
                    checked={selectedSizes.includes(s)}
                    onChange={() => handleSize(s)}
                  />
                  <span>
                    {s} ({count})
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>
        <hr className="filter-divider" />

        {/* Feature Product */}
        <div className="filter-group">
          <div className="filter-header" onClick={() => toggle("featured")}>
            <span>Feature Product</span>
            <span
              className={`filter-arrow ${openSections.featured ? "open" : ""}`}
            >
              &#8964;
            </span>
          </div>
          {openSections.featured && (
            <div className="filter-body">
              {[
                {
                  name: "Darkest Chocolate",
                  price: "$13.00",
                  oldPrice: null,
                  bg: "#e8c8a0",
                  img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-15_540x.webp?v=1719558207",
                },
                {
                  name: "Double Dough",
                  price: "$10.00",
                  oldPrice: "$13.00",
                  bg: "#c8e8d0",
                  img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-2_180x.webp?v=1719559119",
                },
                {
                  name: "Cold Brew With Coconut Cream",
                  price: "$12.00",
                  oldPrice: null,
                  bg: "#c8d8e8",
                  img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-20_540x.webp?v=1719558769",
                },
              ].map((p) => (
                <div className="featured-product-item" key={p.name}>
                  <div className="fp-img-wrap" style={{ background: p.bg }}>
                    <img src={p.img} alt={p.name} />
                  </div>
                  <div className="fp-info">
                    <div className="fp-stars">
                      ★★★★★<span className="fp-review"> No reviews</span>
                    </div>
                    <p className="fp-name">{p.name}</p>
                    <p className="fp-price">
                      {p.oldPrice && <s className="fp-old">{p.oldPrice}</s>}
                      <span>{p.price}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
