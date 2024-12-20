import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css"; // Optional: Add custom styling here.

const NotFoundPage = () => {
    return (
        <div className="not-found-container">
            {/* <h1>404</h1> */}
            <img src={process.env.PUBLIC_URL + "/imgs/not-found.png"} alt="404" />
            <p>Oops! The page you are looking for does not exist.</p>
            <Link to="/" className="btn btn-primary">
                Go Back to Home
            </Link>
        </div>
    );
};

export default NotFoundPage;