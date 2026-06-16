import React from "react";
import "./Flavor.css";

const flavors = [
    {
        name: "Matcha",
        desc: "Matcha Ice Cream Needs The Absolute Balance Between Sweetness, Fatness And Bitterness That Is Very...",
        bg: "#d4edda",
        circleBg: "#5a9e4a",
        img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/banner-1.jpg?v=1714103883",
    },
    {
        name: "Strawberry",
        desc: "The Main Ingredient Is Pureed Fresh Strawberries, So It's Not The Same As Other Strawberry-Flavored Milk...",
        bg: "#fadadd",
        circleBg: "#d4748a",
        img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/banner-2.jpg?v=1714615709",
    },
    {
        name: "Orange",
        desc: "The Ice Cream Has The Sweet Taste Of Honey And The Scent Of Orange Combined With The Fatty Milk That Is...",
        bg: "#fdf3d0",
        circleBg: "#e8c84a",
        img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/banner-3.jpg?v=1714615850",
    },
    {
        name: "Chocolate",
        desc: "Each Piece Of Melted Chocolate Blends With Fresh Milk And Rich, Thick Butter To Create Surprisingly...",
        bg: "#e8d5c4",
        circleBg: "#8b5e3c",
        img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/banner-4.jpg?v=1714616029",
    },
];

const Flavor = () => {
    return (
        <section className="flavor-section">
            {flavors.map((flavor, i) => (
                <div
                    className="flavor-card"
                    key={i}
                    style={{ backgroundColor: flavor.bg }}
                >
                    <div
                        className="flavor-circle"
                        style={{ backgroundColor: flavor.circleBg }}
                    >
                        <img src={flavor.img} alt={flavor.name} />
                    </div>
                    
                    <div className="flavor-content">
                        <h3 className="flavor-name">{flavor.name}</h3>
                        <p className="flavor-desc">{flavor.desc}</p>
                        <button className="flavor-btn">
                            <span>&#8250;</span>
                        </button>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Flavor;