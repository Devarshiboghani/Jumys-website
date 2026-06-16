import React, { useState } from "react";
import FilterSidebar from "./FilterSidebar/FilterSidebar";
import ProductGrid from "./ProductGrid/ProductGrid";
import Hero from "./Hero-section/Hero";

const Shop = () => {
    
    const [filters, setFilters] = useState({
        maxPrice: 15,
        inStock: false,
        outOfStock: false,
        sizes: [],
        colors: [],
        collections: [],
    });

    return (
        <>
            <Hero />
            <div className="shop-content">
                <FilterSidebar onFilterChange={setFilters} />
                <ProductGrid filters={filters} />
            </div>
        </>
    )
}

export default Shop;