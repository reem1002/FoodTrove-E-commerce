import React from "react";
import "./AboutUs.css";
import HeadingBar from "../heading bar/red-heading-bar";
import { useDispatch } from "react-redux";
import { changePageName } from "../../redux/slices/pageNameSlice";
import { useEffect } from "react";


const AboutUs = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(changePageName("About Us"));
    }, [dispatch]);
    return (
        <div className="full-container position-relative">
            <img src={`${process.env.PUBLIC_URL}/imgs/decor/decor7.png`} alt="decor" className="decor4" />
            <div className="heading-bar">
                <HeadingBar />
            </div>
            <div className="about-container">
                <div className="firstpart col-8">
                    <header className="about-header">
                        <h1>About The Carrot</h1>
                    </header>
                    <section className="about-description">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
                            recusandae necessitatibus quasi incidunt alias adipisci pariatur
                            earum iure beatae assumenda rerum quod. Tempora magni autem a
                            voluptatibus neque.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae
                            rerum cum accusamus magni consequatur architecto, ipsum deleniti
                            expedita doloribus suscipit voluptatem eius perferendis amet.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
                            maxime amet architecto est exercitationem optio ea maiores corporis
                            beatae, dolores doloribus libero nesciunt qui illum? Voluptates
                            deserunt adipisci voluptatem magni sunt sed blanditiis quod
                            aspernatur! Iusto?
                        </p>
                    </section>
                    <section className="about-stats">
                        <div className="stats-card">
                            <h2>0.1k</h2>
                            <p>Vendors</p>
                        </div>
                        <div className="stats-card">
                            <h2>23k</h2>
                            <p>Customers</p>
                        </div>
                        <div className="stats-card">
                            <h2>2k</h2>
                            <p>Products</p>
                        </div>
                    </section>
                </div>
                <section className="about-features">
                    <div className="feature-card">
                        <h3>Product Packing</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </div>
                    <div className="feature-card">
                        <h3>24x7 Support</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Delivery in 5 Days</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Payment Secure</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutUs;
