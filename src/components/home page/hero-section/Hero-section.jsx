import React from 'react';
import './heroSection.css';

export default function HeroSection() {
    return (
        <div className="hero-section container-fluid d-flex align-items-start  py-5 " style={{ backgroundColor: '#f5f5f5', position: 'relative' }}>

            <div className="row d-flex align-items-start  py-5 my-5">
                <img src="./imgs/header/LEAF.png" alt="hero" className="img-fluid leaf-img " style={{ maxWidth: '9%', borderRadius: '10px' }} />
                <img src="./imgs/header/__before.png" alt="hero" className="img-fluid orange-img " style={{ maxWidth: '9%', borderRadius: '10px' }} />

                <img src="./imgs/header/__after.png" alt="hero" className="img-fluid toot-img " style={{ maxWidth: '9%', borderRadius: '10px' }} />

                {/* Left Section: Text and Subscription */}
                <div className="col-lg-5 d-flex flex-column align-items-start   left-side">
                    <h6 className="text-success fw-bold">
                        <span className="text-danger under-line">100%</span> Organic Vegetables
                    </h6>
                    <h1 className="display-3 fw-bold">The best way to stuff your wallet.</h1>
                    <p className="text-muted" style={{ fontSize: '1rem', lineHeight: '1.5' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.
                    </p>

                    <div className="input-group my-4" style={{ maxWidth: '380px', height: '40px' }}>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Your email address"
                            aria-label="Email"
                            style={{
                                borderRadius: '30px', paddingLeft: '15px'
                            }}
                        />
                        < button className="btn lightGreenbtn" style={{ borderRadius: '30px', marginLeft: '-60px' }}>
                            Subscribe
                        </button>
                    </div>


                    <img src="./imgs/header/2.png" alt="hero" className="img-fluid fruit-dish-img " style={{ maxWidth: '7%', borderRadius: '10px' }} />
                </div>

                {/* Right Section: Tags and Image */}
                <div className="col-lg-5 d-flex justify-content-center align-items-end right-side align-self-start ">
                    <div className="d-flex gap-2 flex-wrap mb-4 bubbels">
                        <span className="badge rounded-pill bg-light  border-0 shadow-sm py-2" style={{ color: "#57b28b" }} >
                            <img src="./imgs/header/x.png" className="m-1" alt="x" /> Shopping</span>
                        <span className="badge rounded-pill bg-light .text-dark border-0 shadow-sm py-2" style={{ color: "#000" }} >
                            <img src="./imgs/header/x.png" className="m-1" alt="x" />Recipes</span>
                        <span className="badge rounded-pill bg-light border-0 shadow-sm py-2" style={{ color: "#57b28b" }}>
                            <img src="./imgs/header/x.png" className="m-1" alt="x" />Kitchen</span>
                        <span className="badge rounded-pill bg-light  border-0 shadow-sm py-2" style={{ color: "#57b28b" }}>
                            <img src="./imgs/header/x.png" className="m-1" alt="x" />News</span>
                        <span className="badge rounded-pill bg-light  border-0 shadow-sm py-2" style={{ color: "#57b28b" }}>
                            <img src="./imgs/header/x.png" className="m-1" alt="x" />Food</span>
                    </div>
                    <img src="./imgs/header/banner-13.png" alt="hero" className="img-fluid lattace" style={{ maxWidth: '36%', borderRadius: '10px' }} />
                </div>

            </div>
        </div >
    );
}
