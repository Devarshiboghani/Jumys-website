import React from "react";
import "./BlogList.css";

const allPosts = [
    {
        id:1, category:"Business Tips", date:"Jun 30, 2024",
        title:"The Best Ice Cream You'll Never Eat",
        excerpt:"sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a...",
        img:"https://wpbingo-jumys.myshopify.com/cdn/shop/articles/blog-7_1080x.jpg?v=1719804468",
    },
    {
        id:2, category:"Business Tips", date:"Jul 02, 2024",
        title:"Fancy Figs? Make this Ice Cream",
        excerpt:"sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a...",
        img: "https://wpbingo-jumys.myshopify.com/cdn/shop/articles/blog-5_1080x.jpg?v=1719804408",
    },
    {
        id:3, category:"Business Tips", date:"Jun 30, 2024",
        title:"The Art Of Crafting Gourmet Ice Cream",
        excerpt:"sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a...",
        img: "https://wpbingo-jumys.myshopify.com/cdn/shop/articles/blog-2_1080x.jpg?v=1719804262",
    },
    {
        id:4, category:"Business Tips", date:"Jun 30, 2024",
        title:"Top Ice Cream Flavors To Sell This Year",
        excerpt:"sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a...",
        img:"https://wpbingo-jumys.myshopify.com/cdn/shop/articles/blog-1.jpg?v=1714968571",
    },
    {
        id:5, category:"Dessert Recipes", date:"Jun 30, 2024",
        title:"5 Easy Dessert Recipes Using Ice Cream",
        excerpt:"sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a...",
        img:"https://wpbingo-jumys.myshopify.com/cdn/shop/articles/blog-2.jpg?v=1714968571",
    },
    {
        id:6, category:"Flavor Trends", date:"Jun 30, 2024",
        title:"Top Flavor Trends Of 2024",
        excerpt:"sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a...",
        img:"https://wpbingo-jumys.myshopify.com/cdn/shop/articles/blog-3.jpg?v=1714968571",
    },
    {
        id:7, category:"Ice Cream", date:"Jun 30, 2024",
        title:"Why Ice Cream Will Never Go Out Of Style",
        excerpt:"sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a...",
        img:"https://wpbingo-jumys.myshopify.com/cdn/shop/articles/blog-1.jpg?v=1714968571",
    },
    {
        id:8, category:"Healthy Options", date:"Jun 30, 2024",
        title:"Healthy Ice Cream Swaps You'll Love",
        excerpt:"sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a...",
        img:"https://wpbingo-jumys.myshopify.com/cdn/shop/articles/blog-2.jpg?v=1714968571",
    },
];

const BlogList = ({ activeCategory }) => {
    const filtered = allPosts.filter((p) => p.category === activeCategory);
    const posts = filtered.length > 0 ? filtered : allPosts;

    return (
        <div className="blog-list">
            {posts.map((post) => (
                <article className="blog-post-card" key={post.id}>

                    <div className="blog-post-img-wrap">
                        <img src={post.img} alt={post.title} className="blog-post-img" />
                        <span className="blog-post-cat-badge">{post.category}</span>
                    </div>

                    <div className="blog-post-content">
                        <p className="blog-post-date">{post.date}</p>
                        <h2 className="blog-post-title">{post.title}</h2>
                        <p className="blog-post-excerpt">{post.excerpt}</p>
                        <button className="blog-read-btn">Read More</button>
                    </div>

                </article>
            ))}
            <a href="#" className="pd-top-btn">TOP</a>
        </div>
    );
};

export default BlogList;