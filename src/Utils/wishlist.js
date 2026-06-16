export const getWishlist = () => {
  try {
    const stored = localStorage.getItem("wishlist");
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Failed to read wishlist from localStorage:", error);
    return [];
  }
};

export const addToWishlist = (product) => {
  const wishlist = getWishlist();

  const exists = wishlist.find((item) => item.id === product.id);

  if (!exists) {
    wishlist.push(product);

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    window.dispatchEvent(new Event("wishlistUpdated"));
  }
};

export const removeFromWishlist = (id) => {
  const updated = getWishlist().filter((item) => item.id !== id);

  localStorage.setItem("wishlist", JSON.stringify(updated));

  window.dispatchEvent(new Event("wishlistUpdated"));
};
