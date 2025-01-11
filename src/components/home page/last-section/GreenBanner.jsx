import React from 'react';
import './greenbanner.css';
import { useState } from 'react';
import Swal from 'sweetalert2';

export default function GreenBanner() {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(email)) {
            Swal.fire({
                icon: 'success',
                title: 'Subscribed!',
                text: 'You have successfully subscribed.',
                confirmButtonColor: '#28a745',
            });
            setEmail('');
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Email',
                text: 'Please enter a valid email address.',
                confirmButtonColor: '#dc3545',
            });
        }
    };
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
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                < button className="btn lightGreenbtn " style={{ borderRadius: '30px', marginLeft: '-60px', zIndex: '999' }} onClick={handleSubscribe}>
                                    Subscribe
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <img src={`${process.env.PUBLIC_URL}/imgs/lastsectionyarab/banner-9.png.png`} className="green-banner-image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
