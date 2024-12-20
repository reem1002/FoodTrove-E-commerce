import React from 'react';
import ProductList from './ProductList';
import Sidebar from './Sidebar';
import './daily.css';
import { Link } from 'react-router-dom';

function DailyBS() {
    const handelClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <div className="app-container">
            {/* Popular Products Header */}
            <div className="headerdaily">
                <h2 className="">Daily Best Sellers</h2>

                {/* Filter Buttons */}
                <div className="d-flex align-items-center justify-content-center filter-buttons">
                    <Link to="/shop">
                        <button className="btn lightGreen" onClick={handelClick}>More...</button>
                    </Link>



                </div>
            </div>
            <div className="dailyprod">
                <Sidebar />
                <ProductList />
            </div>

        </div>




    );
}

export default DailyBS;
