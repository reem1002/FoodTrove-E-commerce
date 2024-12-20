import React from 'react';
import './header styles/desk.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { RiPhoneLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function Desk() {
    const handelNavLink = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div className="desk-container p-1">
            {/* Hamburger Icon */}
            <div className="col-1 humbergerlist">
                <AiOutlineMenu
                    style={{ fontSize: '24px', border: '1px solid #ccc', borderRadius: '5px', padding: '1px' }}
                    title="menu"
                />
            </div>

            {/* Navigation Links */}
            <div className="col-auto navLinkk">
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={handelNavLink} >Home</Link>
                    </li>
                    <li className="nav-item d-flex">
                        <Link to="/shop" className="nav-link">Shop</Link>
                    </li>
                    <li className="nav-item d-flex">
                        <Link to="/about" className="nav-link">About</Link>

                    </li>
                    <li className="nav-item d-flex">
                        <Link to="/faq" className="nav-link">Q&A</Link>

                    </li>


                </ul>
            </div>

            {/* Telephone Section */}
            <div className="col-auto telephone d-flex align-items-center">
                <RiPhoneLine
                    style={{ fontSize: '22px' }}
                    title="menu"
                />
                <p className="mb-0 ms-1">+20 102 239 1604</p>
            </div>
        </div >
    );
}
