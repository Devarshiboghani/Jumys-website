import React, { useState } from "react";
import "./ProductTabs.css";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [openTab, setOpenTab] = useState("description");
  return (
    <>
      <div className="tabs-section">
        <div className="tabs-header">
          {["description", "review", "shipping", "return"].map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <hr className="tab-divider" />

        <div className="tab-content">
          {activeTab === "description" && (
            <div className="tab-pane">
              <p className="tab-text">
                Get a fresh 'fit for spring with the Banana Cream Pudding ice
                cream! Made with real bananas, ultra-rich coconut cream and
                scratch-made vanilla wafers. This dairy-free frozen dessert is
                gluten-free and absolutely delicious — the perfect balance of
                sweet, creamy and indulgent.
              </p>
            </div>
          )}

          {activeTab === "review" && (
            <div className="tab-pane review-pane">
              <h3 className="review-title">Customer Reviews</h3>
              <div className="review-box">
                <div className="review-left">
                  <div className="review-stars">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="star-empty">
                        ☆
                      </span>
                    ))}
                  </div>
                  <p className="review-sub">Be the first to write a review</p>
                </div>
                <div className="review-divider" />
                <div className="review-right">
                  <button className="write-review-btn">Write a review</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "shipping" && (
            <div className="tab-pane">
              <p>
                For orders placed before 7am AEDT, we endeavour to process the
                same business day. Orders placed after 11am AEDT will be
                processed the next business day.
              </p>
              <p>
                During sale events and new collection launches, there may be a
                slightly longer processing time.
              </p>
              <p>
                All orders are hand-picked and packed with love from our
                warehouse.
              </p>
            </div>
          )}

          {activeTab === "return" && (
            <div className="tab-pane">
              <p>
                You can choose between a refund or a credit note on full priced
                items.
              </p>
              <ul className="return-list">
                <li>
                  Item(s) must be returned in their original condition and
                  packaging: unworn, unwashed and with all tags attached.
                </li>
                <li>
                  Perishable items cannot be returned due to health and safety
                  reasons.
                </li>
                <li>
                  Return shipping methods and associated costs are the
                  responsibility of the customer.
                </li>
                <li>Sale items can not be refunded for change of mind.</li>
              </ul>
            </div>
          )}
        </div>

        <div className="mobile-accordion">
          <div className="accordion-item">
            <button
              className="accordion-header"
              onClick={() =>
                setOpenTab(openTab === "description" ? "" : "description")
              }
            >
              <span>Description</span>
              <span>{openTab === "description" ? "−" : "+"}</span>
            </button>

            {openTab === "description" && (
              <div className="accordion-body">
                <p>
                  Get a fresh 'fit for spring with the Banana Cream Pudding ice
                  cream! Made with real bananas, ultra-rich coconut cream and
                  scratch-made vanilla wafers. This dairy-free frozen dessert is
                  gluten-free and absolutely delicious — the perfect balance of
                  sweet, creamy and indulgent.{" "}
                </p>
              </div>
            )}
          </div>

          <div className="accordion-item">
            <button
              className="accordion-header"
              onClick={() => setOpenTab(openTab === "review" ? "" : "review")}
            >
              <span>Review</span>
              <span>{openTab === "review" ? "−" : "+"}</span>
            </button>

            {openTab === "review" && (
              <div className="accordion-body review-mobile">
                <h3 className="review-mobile-title">Customer Reviews</h3>

                <div className="review-mobile-stars">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s}>☆</span>
                  ))}
                </div>

                <p className="review-mobile-text">
                  Be the first to write a review
                </p>

                <button className="review-mobile-btn">Write a review</button>
              </div>
            )}
          </div>

          <div className="accordion-item">
            <button
              className="accordion-header"
              onClick={() =>
                setOpenTab(openTab === "shipping" ? "" : "shipping")
              }
            >
              <span>Shipping</span>
              <span>{openTab === "shipping" ? "−" : "+"}</span>
            </button>

            {openTab === "shipping" && (
              <div className="accordion-body">
                <p>
                  For orders placed before 7am AEDT, we endeavour to process the
                  same business day. Orders placed after 11am AEDT will be
                  processed the next business day.
                </p>
                <p>
                  During sale events and new collection launches, there may be a
                  slighly longer processing time.
                </p>
                <p>
                  All Auguste orders are hand-picked and packed with love from
                  Byron Bay, Australie.
                </p>
              </div>
            )}
          </div>

          <div className="accordion-item">
            <button
              className="accordion-header"
              onClick={() => setOpenTab(openTab === "return" ? "" : "return")}
            >
              <span>Return</span>
              <span>{openTab === "return" ? "−" : "+"}</span>
            </button>

            {openTab === "return" && (
              <div className="accordion-body">
                <ul className="return-list">
                  <p>
                    You can choose between a refund or a credit note on full
                    priced items.
                  </p>
                  <li>
                    Item(s) must be returned in their original condition and
                    packaging: unworn, unwashed and with all tags attached.
                  </li>
                  <li>
                    Earrings cannot be returned due to health and safety
                    reasons.
                  </li>
                  <li>
                    Return shipping methods and associated costs are the
                    responsibility of the customer.
                  </li>
                  <li>Sale items can not be refunded for change of mind.</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductTabs;
