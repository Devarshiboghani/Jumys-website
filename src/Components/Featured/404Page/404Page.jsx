import React from "react";
import "./404Page.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1 className="error-code">404</h1>

      <h2 className="error-title">Oops! That page can't be found.</h2>

      <div className="error-line"></div>

      <p className="error-text">
        We're really sorry but we can't seem to find
        <br />
        the page you were looking for.
      </p>

      <Link to="/" className="home-btn">
        Back The Homepage →
      </Link>
    </div>
  );
};

export default NotFound;
