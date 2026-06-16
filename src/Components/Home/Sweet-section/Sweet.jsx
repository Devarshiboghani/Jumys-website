import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Sweet.css";

const Sweet = () => {
    return (
        <section className="sweet-section">
            <Container className="h-100 d-flex align-items-center">
                <Row className="w-100 align-items-center">
                    <Col xl={6} lg={6} md={7} sm={10} xs={12}>
                        <div className="sweet-left">
                            <h1>
                                Make Every Day A <br className="d-none d-sm-block" />
                                Sweet Day
                            </h1>

                            <p>
                                But Incorporating Liquor Into Ice Cream Seems Like
                                Nothing When You Consider How Inventive...
                            </p>

                            <div className="feature-list">
                                <div className="feature-item">
                                    <span className="icon">❄</span>
                                    <h3>Guaranteed Frozen Delivery</h3>
                                </div>

                                <div className="feature-item">
                                    <span className="icon">🚚</span>
                                    <h3>Flat-Rate Shipping Nationwide</h3>
                                </div>

                                <div className="feature-item">
                                    <span className="icon">📦</span>
                                    <h3>Instagram-Worthy Unboxing</h3>
                                </div>
                            </div>

                            <button className="view-btn">
                                View More →
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Sweet;