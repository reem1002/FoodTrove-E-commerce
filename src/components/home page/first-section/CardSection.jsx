import React from "react";
import "./CardSection.css"; // Keep a small custom CSS file for any additional styling
import { Link } from "react-router-dom";

const CardSection = () => {
    return (
        <div className=" my-5  d-flex align-items-center justify-content-center big">
            <div className="card-container"> {/* Add Bootstrap's gutter spacing */}
                <Card
                    bgImage="url('imgs/cardsection/banner-1.png')"
                    title="Everyday Fresh & Clean with Our Products"
                    buttonText="Shop Now"
                />
                <span className="second">
                    <Card
                        bgImage="url('imgs/cardsection/banner-2.png')"
                        title="Make your Breakfast Healthy and Easy"
                        buttonText="Shop Now"
                        className="second"
                    />
                </span>
                <Card
                    bgImage="url('imgs/cardsection/banner-3.png')"
                    title="The best Organic Products Online"
                    buttonText="Shop Now"
                />
            </div>
        </div>
    );
};

const Card = ({ bgImage, title, buttonText }) => {
    const handelClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="col-md-3 m-2">
            <div
                className=" card text-center"
                style={{
                    backgroundImage: bgImage,
                    backgroundSize: "fit",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "350%",
                    height: "220px",
                    borderRadius: "10px",
                    color: "#333",
                    border: "none",
                }}
            >
                <div className="card-body ">
                    <h4 className="card-title mb-3">{title}</h4>
                    <Link to="/shop" >
                        <button className="btn btn-danger " onClick={handelClick}>{buttonText}</button>
                    </Link>

                </div>
            </div>

        </div>

    );
};

export default CardSection;
