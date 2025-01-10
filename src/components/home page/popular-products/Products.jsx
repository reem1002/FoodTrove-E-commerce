import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../../redux/slices/productSlice";
import { Link } from "react-router-dom";
import { ClipLoader } from 'react-spinners';
import { database } from "../../../firebase";
import { ref, onValue } from "firebase/database";

const fallbackProducts = [];

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);
    const maxProducts = 10;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const dbRef = ref(database, "popularProducts");
        onValue(dbRef, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                dispatch(setProducts(Object.values(data)));
            } else {
                dispatch(setProducts(fallbackProducts));
            }
            setLoading(false);
        }, (error) => {
            console.error("Error fetching data from Firebase:", error);
            dispatch(setProducts(fallbackProducts));
            setLoading(false);
        });
    }, [dispatch]);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="my-5">
            <div className="headerProducts">
                <h2>Popular Products</h2>
                <div className="filter-tabs d-flex align-items-center justify-content-center">
                    <Link to="/shop">
                        <button className="btn lightGreen" onClick={handleScrollToTop}>More...</button>
                    </Link>
                </div>
            </div>

            <div className="products-container">
                {loading ? (
                    <div className="loading-spinner">
                        <ClipLoader color="#3BB77E" />
                    </div>
                ) : (
                    products.slice(0, maxProducts).map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))
                )}
            </div>
        </div>
    );
};

export default Products;
