import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import { MdOutlineMail } from "react-icons/md";
import { RiPhoneLine } from 'react-icons/ri';
import { GrLocation } from "react-icons/gr";





function Footer() {
    return (
        <footer className="footer mb-0">
            <div className="footer-container">
                <div className="footer-section about">
                    <div className='m-0'>
                        <img src={`${process.env.PUBLIC_URL}/imgs/header/Singaporean.svg`} alt="logo" className="img-fluid" style={{ maxHeight: '60px', margin: '0' }} />
                        <img src={`${process.env.PUBLIC_URL}/imgs/header/FoodTrove.png`} alt="logo" className="img-fluid" style={{ height: '16px', marginLeft: '-15px' }} />
                    </div>
                    <p>FoodTrove is the biggest market of grocery products. Get your daily needs from our store.</p>
                    <ul className="contact-info">
                        <li>
                            <GrLocation style={{ color: "#f53e32", marginRight: "5px", fontSize: '20px', fontWeight: 'bold' }} />
                            Quesina, Menoufia, Egypt
                        </li>
                        <li>
                            <MdOutlineMail style={{ color: "#f53e32", marginRight: "5px", fontSize: '18px', }} />
                            reem619123@gmail.com
                        </li>
                        <li>
                            <RiPhoneLine style={{ color: "#f53e32", marginRight: "5px", fontSize: '20px', fontWeight: 'bold' }} />
                            +20 102 239 1604
                        </li>
                    </ul>
                </div>

                <div className="footer-section company my-4">
                    <h4>Company</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Delivery Information</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Contact Us</li>
                        <li>Support Center</li>
                    </ul>
                </div>

                <div className="footer-section category my-4">
                    <h4>Category</h4>
                    <ul>
                        <li>Dairy & Bakery</li>
                        <li>Fruits & Vegetables</li>
                        <li>Snacks & Spice</li>
                        <li>Juice & Drinks</li>
                        <li>Chicken & Meat</li>
                        <li>Fast Food</li>
                    </ul>
                </div>

                <div className="footer-section newsletter my-4">
                    <h4>Subscribe Our Newsletter</h4>
                    <div className="newsletter-input">
                        <input type="text" placeholder="Search here..." />
                        <button>
                            <FontAwesomeIcon icon={faPaperPlane} style={{ color: "#000" }} />
                        </button>
                    </div>
                    <div className="social-icons">
                        <button><FontAwesomeIcon icon={faFacebook} style={{ color: "#000" }} /></button>
                        <button><FontAwesomeIcon icon={faTwitter} style={{ color: "#000" }} /></button>
                        <button><FontAwesomeIcon icon={faInstagram} style={{ color: "#000" }} /></button>
                    </div>
                    <div className="footer-gallery">
                        <img src={`${process.env.PUBLIC_URL}/imgs/type.png`} alt="gallery-1" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div style={{
                    height: "1px",
                    backgroundColor: "#ddd",
                    margin: "20px 0",
                    width: "70%"
                }}></div>
                <p>&copy; 2024 <span>FoodTrove</span>, All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
