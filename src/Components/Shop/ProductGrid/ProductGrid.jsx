import React, { useState, useEffect } from "react";
import { useCart } from "../../Cart/CartContext";
import {
  addToWishlist,
  removeFromWishlist,
  getWishlist,
} from "../../../Utils/wishlist";
import "./ProductGrid.css";

const products = [
  {
    id: 1,
    name: "Banana Cream Pudding",
    price: 12,
    collection: "Frozen Yogurt",
    oldPrice: 15,
    discount: "-20%",
    img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-21_360x.webp?v=1719558054",
    reviews: "No reviews",
    rating: 0,
    colors: [],
    size: "S",
    inStock: true,
  },
  {
    id: 2,
    name: "Brambleberry Crisp",
    price: 10,
    collection: "Frozen Yogurt",
    oldPrice: 12,
    discount: "-16%",
    img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-15_540x.webp?v=1719558207",
    reviews: "No reviews",
    rating: 0,
    colors: [],
    size: "L",
    inStock: true,
  },
  {
    id: 3,
    name: "Burnt Orange Dreamsicle",
    price: 12,
    collection: "Ice Cream Cakes",
    oldPrice: 15,
    discount: "-20%",
    img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-8_540x.webp?v=1719558347",
    reviews: "No reviews",
    rating: 0,
    colors: ["#4a7fc1", "#f5a0b0"],
    size: "M",
    inStock: true,
  },
  {
    id: 4,
    name: "Cold Brew With Coconut Cream",
    price: 12,
    collection: "Canned Ice Cream",
    oldPrice: null,
    discount: null,
    img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-19_540x.webp?v=1719558435",
    reviews: "No reviews",
    rating: 0,
    colors: [],
    size: "S",
    inStock: true,
  },
  {
    id: 5,
    name: "Cream Puff",
    price: 11,
    collection: "Canned Ice Cream",
    oldPrice: null,
    discount: null,
    img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-1_540x.webp?v=1719558508",
    reviews: "No reviews",
    rating: 0,
    colors: [],
    size: "L",
    inStock: true,
  },
  {
    id: 6,
    name: "Cookies In Cream",
    price: 12,
    collection: "Canned Ice Cream",
    oldPrice: null,
    discount: null,
    img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-14_540x.webp?v=1719559069",
    reviews: "No reviews",
    rating: 0,
    colors: [],
    size: "M",
    inStock: true,
  },
  {
    id: 7,
    name: "Blackout Chocolate Cake",
    price: 12,
    collection: "Canned Ice Cream",
    oldPrice: null,
    discount: null,
    img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-20_540x.webp?v=1719558769",
    reviews: "1 review",
    rating: 3,
    colors: ["#8b3a2a", "#4a7fc1"],
    size: "M",
    inStock: true,
  },
  {
    id: 8,
    name: "Brown Sugar Cinnamon",
    price: 15,
    collection: "Canned Ice Cream",
    oldPrice: null,
    discount: null,
    img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-10_540x.webp?v=1719558899",
    reviews: "No reviews",
    rating: 0,
    colors: [],
    size: "S",
    inStock: true,
  },
  {
    id: 9,
    name: "Chocolate Mud",
    price: 15,
    collection: "Canned Ice Cream",
    oldPrice: null,
    discount: null,
    img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-1_540x.webp?v=1719558508",
    reviews: "No reviews",
    rating: 0,
    colors: [],
    size: "L",
    inStock: false,
  },
  {
    id: 10,
    name: "Banana Cream Pudding",
    price: 12,
    collection: "Canned Ice Cream",
    oldPrice: 15,
    discount: "-20%",
    img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-6-1_540x.webp?v=1719558638",
    reviews: "No reviews",
    rating: 0,
    colors: [],
    size: "M",
    inStock: true,
  },
  {
    id: 11,
    name: "Cookies In Cream",
    price: 12,
    oldPrice: null,
    discount: null,
    img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-10_540x.webp?v=1719558899",
    reviews: "No reviews",
    rating: 0,
    colors: [],
    size: "S",
    inStock: true,
  },
  {
    id: 12,
    name: "Blackout Chocolate Cake",
    price: 12,
    oldPrice: null,
    discount: null,
    img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-15_540x.webp?v=1719558207",
    reviews: "1 review",
    rating: 3,
    colors: ["#8b3a2a", "#4a7fc1"],
    size: "L",
    inStock: true,
  },
  {
    id: 13,
    name: "Brambleberry Crisp",
    price: 10,
    oldPrice: 12,
    discount: "-16%",
    img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-8_540x.webp?v=1719558347",
    reviews: "No reviews",
    rating: 0,
    colors: [],
    size: "S",
    inStock: true,
  },
  {
    id: 14,
    name: "Brown Sugar Cinnamon",
    price: 15,
    oldPrice: null,
    discount: null,
    img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-19_540x.webp?v=1719558435",
    reviews: "No reviews",
    rating: 0,
    colors: [],
    size: "M",
    inStock: false,
  },
  {
    id: 15,
    name: "Burnt Orange Dreamsicle",
    price: 12,
    oldPrice: 15,
    discount: "-20%",
    img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-1_540x.webp?v=1719558508",
    reviews: "No reviews",
    rating: 0,
    colors: ["#4a7fc1", "#f5a0b0"],
    size: "L",
    inStock: true,
  },
  {
    id: 16,
    name: "Chocolate Mud",
    price: 15,
    oldPrice: null,
    discount: null,
    img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-6-1_540x.webp?v=1719558638",
    reviews: "No reviews",
    rating: 0,
    colors: [],
    size: "S",
    inStock: true,
  },
  {
    id: 17,
    name: "Cold Brew With Coconut Cream",
    price: 12,
    oldPrice: null,
    discount: null,
    img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-20_540x.webp?v=1719558769",
    reviews: "No reviews",
    rating: 0,
    colors: [],
    size: "M",
    inStock: true,
  },
  {
    id: 18,
    name: "Cookies In Cream",
    price: 12,
    oldPrice: null,
    discount: null,
    img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-10_540x.webp?v=1719558899",
    reviews: "No reviews",
    rating: 0,
    colors: [],
    size: "L",
    inStock: true,
  },
  {
    id: 19,
    name: "Cream Puff",
    price: 11,
    oldPrice: null,
    discount: null,
    img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-22_540x.webp?v=1719559014",
    reviews: "No reviews",
    rating: 0,
    colors: [],
    size: "S",
    inStock: true,
  },
  {
    id: 20,
    name: "Cookies In Cream",
    price: 12,
    oldPrice: null,
    discount: null,
    img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-10_540x.webp?v=1719558899",
    reviews: "No reviews",
    rating: 0,
    colors: [],
    size: "M",
    inStock: true,
  },
];

const STARS = 5;
const PRODUCTS_PER_PAGE = 9;

const ProductGrid = ({ filters }) => {
  const { addToCart } = useCart();
  const [gridCols, setGridCols] = useState(3);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("az");
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const updateWishlist = () => {
      setWishlistItems(getWishlist().map((item) => item.id));
    };

    updateWishlist();
    window.addEventListener("wishlistUpdated", updateWishlist);
    return () => window.removeEventListener("wishlistUpdated", updateWishlist);
  }, []);

  const toggleWishlist = (product) => {
    if (wishlistItems.includes(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist({
        id: product.id,
        title: product.name,
        price: `$${product.price}.00`,
        oldPrice: product.oldPrice ? `$${product.oldPrice}.00` : null,
        discount: product.discount,
        image: product.img,
      });
    }
  };

  let filtered = [...products];

  if (filters?.collections?.length > 0)
    filtered = filtered.filter((p) =>
      filters.collections.includes(p.collection),
    );

  if (filters?.maxPrice !== undefined)
    filtered = filtered.filter((p) => p.price <= filters.maxPrice);

  if (filters?.inStock && !filters?.outOfStock)
    filtered = filtered.filter((p) => p.inStock === true);
  else if (!filters?.inStock && filters?.outOfStock)
    filtered = filtered.filter((p) => p.inStock === false);

  if (filters?.sizes?.length > 0)
    filtered = filtered.filter((p) => filters.sizes.includes(p.size));

  if (filters?.colors?.length > 0)
    filtered = filtered.filter((p) =>
      p.colors.some((c) => filters.colors.includes(c)),
    );

  if (sort === "az") filtered.sort((a, b) => a.name.localeCompare(b.name));
  if (sort === "za") filtered.sort((a, b) => b.name.localeCompare(a.name));
  if (sort === "lh") filtered.sort((a, b) => a.price - b.price);
  if (sort === "hl") filtered.sort((a, b) => b.price - a.price);

  const totalPages = Math.ceil(filtered.length / PRODUCTS_PER_PAGE);
  const safePage = Math.min(page, totalPages || 1);
  const startIndex = (safePage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = filtered.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE,
  );

  const goToPage = (n) => {
    setPage(n);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="product-grid-wrap">
      <div className="grid-toolbar">
        <p className="grid-count">
          You've viewed{" "}
          {Math.min(safePage * PRODUCTS_PER_PAGE, filtered.length)} of{" "}
          {filtered.length} products
        </p>
        <div className="grid-view-btns">
          {[2, 3, 4].map((n) => (
            <button
              key={n}
              className={`view-btnn ${gridCols === n ? "active" : ""}`}
              onClick={() => setGridCols(n)}
              aria-label={`${n} columns`}
            >
              {Array(n)
                .fill(0)
                .map((_, i) => (
                  <span key={i} className="view-dot" />
                ))}
            </button>
          ))}
        </div>
        <select
          className="grid-sort"
          value={sort}
          onChange={(e) => {
            setSort(e.target.value);
            setPage(1);
          }}
        >
          <option value="az">Alphabetically, A-Z</option>
          <option value="za">Alphabetically, Z-A</option>
          <option value="lh">Price, Low to High</option>
          <option value="hl">Price, High to Low</option>
        </select>
      </div>

      {currentProducts.length === 0 ? (
        <div className="no-products">
          <p>Koi product nahi mila. Filters change karo.</p>
        </div>
      ) : (
        <div className="product-grid" style={{ "--desktop-cols": gridCols }}>
          {currentProducts.map((p) => (
            <div className="product-card" key={p.id}>
              <div className="product-img-wrap">
                {p.discount && (
                  <span className="product-badge">{p.discount}</span>
                )}
                <img src={p.img} alt={p.name} className="product-img" />
                <div className="product-hover-icons">
                  <button
                    title="Add to cart"
                    onClick={() =>
                      addToCart({
                        id: p.id,
                        name: p.name,
                        price: p.price,
                        img: p.img,
                      })
                    }
                  >
                    🛒
                  </button>
                  <button
                    title="Wishlist"
                    onClick={() => toggleWishlist(p)}
                    className={
                      wishlistItems.includes(p.id) ? "wishlist-active" : ""
                    }
                  >
                    {wishlistItems.includes(p.id) ? "♥" : "♡"}
                  </button>
                  <button title="Share">⇄</button>
                  <button title="Quick view">🔍</button>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-name">{p.name}</h3>
                <div className="product-stars">
                  {Array(STARS)
                    .fill(0)
                    .map((_, i) => (
                      <span
                        key={i}
                        className={i < p.rating ? "star filled" : "star"}
                      >
                        ★
                      </span>
                    ))}
                  <span className="product-reviews">{p.reviews}</span>
                </div>
                <div className="product-price">
                  {p.oldPrice && <s className="old-price">${p.oldPrice}.00</s>}
                  <span className="new-price">${p.price}.00</span>
                </div>
                {p.colors.length > 0 && (
                  <div className="product-colors">
                    {p.colors.map((c, i) => (
                      <span
                        key={i}
                        className="product-color-dot"
                        style={{ background: c }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="page-btn"
            onClick={() => goToPage(Math.max(safePage - 1, 1))}
            disabled={safePage === 1}
          >
            ‹
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              className={`page-btn ${safePage === n ? "active" : ""}`}
              onClick={() => goToPage(n)}
            >
              {n}
            </button>
          ))}

          <button
            className="page-btn"
            onClick={() => goToPage(Math.min(safePage + 1, totalPages))}
            disabled={safePage === totalPages}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
