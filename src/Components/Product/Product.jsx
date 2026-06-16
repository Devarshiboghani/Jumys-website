import React from "react";
import ProductDetail from "./ProductDetail/ProductDetail";
import ProductTabs      from "./ProductTabs/ProductTabs";
import RelatedProducts  from "./RelatedProducts/RelatedProduct";
import RecentlyViewed   from "./RecentlyViewed/RecentlyViewed";

const Product = () => {
    return (
        <>
            <ProductDetail />
            <ProductTabs />
            <RelatedProducts />
            <RecentlyViewed />
        </>
    )
}

export default Product;