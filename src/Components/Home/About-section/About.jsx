import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";

const About = () => {
    return (
        <>
            <section className="about-section">
                <Container fluid="xxl">
                    <Row className="g-5">
                        <Col lg={6} md={12} className="mb-4 mb-lg-0">
                            <div className="about-card-wrapper h-100 d-flex flex-column justify-content-between">
                                <div className="about-card d-flex flex-column flex-sm-row gap-4">
                                    <h2 className="about-heading">
                                        Best <br />Ice <br />Cream <br />Shops
                                    </h2>
                                    <div className="about-right">
                                        <p className="about-text">
                                            It's Quite Possible That We Are Living In The Golden Age Of Ice Cream
                                            Innovation. Old-School Creameries Are Churning Out Vanilla Bean
                                            Masterpieces Honed Over Generations While New Shops Are Tossing The
                                            Term "Chef".
                                        </p>
                                        <a href="#" className="read-more mt-2">Read More</a>
                                    </div>
                                </div>
                                <div className="about-bottom-lines mt-3 d-none d-sm-block">
                                    <div className="dashed-line" />
                                </div>
                            </div>
                        </Col>

                        <Col lg={6} md={12}>
                            <div className="about-card-wrapper h-100 d-flex flex-column justify-content-between">
                                <div className="about-card d-flex flex-column flex-sm-row gap-4">
                                    <h2 className="about-heading">
                                        Wave <br />Artisan <br />Shops
                                    </h2>
                                    <div className="about-right position-relative">
                                        <p className="about-text">
                                            These Ice Cream Shops Represent Everything That Is Well And Good:
                                            New-Wave Artisan Shops Challenging The Very Notion Of What Should Be
                                            Placed On A Cone (Or Stick, Or Between Cookies), Old-School Parlors
                                            Learning...
                                        </p>
                                        <a href="#" className="read-more mt-2">Read More</a>
                                        
                                        <div className="cup d-none d-xxl-block">
                                            <img 
                                                src="https://wpbingo-jumys.myshopify.com/cdn/shop/files/png-1.png?v=1719912407" 
                                                alt="Ice Cream Cup" 
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="about-bottom-lines mt-3 d-none d-sm-block">
                                    <div className="dashed-line" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <a href="#top" className="top-btn">TOP</a>
            </section>

<section className="summer-section">
    <Container fluid="lg">
        <Row className="g-4 justify-content-center">
            
            <Col md={4} xs={12}>
                <div className="summer-card position-relative overflow-hidden rounded shadow-sm">
                    <img 
                        src="https://wpbingo-jumys.myshopify.com/cdn/shop/files/banner-1_165a7093-b857-41ec-8617-629d4cbbd871.jpg?v=1719929469" 
                        alt="Ice Cream Summer" 
                        className="w-100 img-fluid transition-transform" 
                    />
                    <div className="card-content text-center position-absolute top-50 start-50 translate-middle text-white w-100">
                        <h3>hello</h3>
                        <h1>SUMMER!</h1>
                    </div>
                </div>
            </Col>

            <Col md={4} xs={12}>
                <div className="summer-card position-relative overflow-hidden rounded shadow-sm">
                    <img 
                        src="https://wpbingo-jumys.myshopify.com/cdn/shop/files/banner-2_e4c406a0-0e93-42ec-8c56-3f013c3ce875.jpg?v=1719929685" 
                        alt="Ice Cream Grid" 
                        className="w-100 img-fluid transition-transform" 
                    />
                </div>
            </Col>

            <Col md={4} xs={12}>
                <div className="summer-card position-relative overflow-hidden rounded shadow-sm">
                    <img 
                        src="https://wpbingo-jumys.myshopify.com/cdn/shop/files/banner-3_0b74f0a0-fd76-43cd-8eff-00f01a954dbc.jpg?v=1719929703" 
                        alt="Ice Cream Creamy" 
                        className="w-100 img-fluid transition-transform" 
                    />
                    <div className="card-content creamy text-center position-absolute top-50 start-50 translate-middle text-white w-100">
                        <h1>CREAMY</h1>
                        <h3>enjoy</h3>
                    </div>
                </div>
            </Col>

        </Row>
    </Container>
            </section>
        </>
    );
};

export default About;