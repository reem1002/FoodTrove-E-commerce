import React, { useState } from 'react';
import './header styles/desk.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { RiPhoneLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function Desk() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handelNavLink = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        setIsMenuOpen(false); 
    };

    return (
        <div className="desk-container p-1">
            {/* Hamburger Icon for Small Screens */}
            <div className="col-1 humbergerlist ">
                <AiOutlineMenu
                    style={{ fontSize: '24px', border: '1px solid #ccc', borderRadius: '5px', padding: '1px' }}
                    title="menu"
                    onClick={toggleMenu}
                    className='hamIcon'
                />
            </div>

            {/* Navigation Links for Large Screens */}
            <div className="col-auto navLinkk d-none d-md-block">
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={handelNavLink}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/shop" className="nav-link" onClick={handelNavLink}>Shop</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link" onClick={handelNavLink}>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/faq" className="nav-link" onClick={handelNavLink}>Q&A</Link>
                    </li>
                </ul>
            </div>

            {isMenuOpen && (
                <div className="dropdown-menu-container">
                    <ul className="nav flex-column dropdown-menu-list">

                        <li className="nav-item">
                            <Link to="/" className="nav-link" onClick={handelNavLink}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/shop" className="nav-link" onClick={handelNavLink}>Shop</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" onClick={handelNavLink}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/faq" className="nav-link" onClick={handelNavLink}>Q&A</Link>
                        </li>

                    </ul>
                </div>
            )}


            {/* Telephone Section */}
            <div className="col-auto telephone d-flex align-items-center">
                <RiPhoneLine style={{ fontSize: '22px' }} title="menu" />
                <p className="mb-0 ms-1">+20 102 239 1604</p>
            </div>
        </div>
    );
}
