import React from 'react';
import './greenbanner.css';

export default function GreenBanner() {
    return (
        <div>
            <div className="green-banner">
                <div className="banner-container">
                    <div className="row row-banner">
                        <div className="col-lg-6 col-md-6 col-sm-12 left-side-banner">
                            <h2 className="green-banner-title">Stay home & get your daily needs from our shop</h2>
                            <p className="green-banner-text">Start your daily shopping with us!</p>
                            <div className="input-group my-4 me-0 " style={{ width: '68%', height: '45px', marginLeft: '-40px' }}>
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
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <img src="./imgs/lastsectionyarab/banner-9.png.png" className="green-banner-image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
