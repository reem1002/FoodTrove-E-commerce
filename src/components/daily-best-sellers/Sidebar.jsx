import React from 'react';
import { Link } from 'react-router-dom';
import './sideBar.css';

const Sidebar = () => {
    const handelClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="sidebar">
            <h2>Bring nature into your home</h2>
            <Link to="/shop">
                <button className="btn  shop-button " onClick={handelClick}>Shop Now</button>
            </Link>
        </div>
    );
}




export default Sidebar;
