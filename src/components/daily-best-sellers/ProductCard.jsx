import React from 'react';
import { useDispatch } from 'react-redux';
import { selectProduct } from '../../redux/slices/productSlice';
import { Link } from 'react-router-dom';
import { addToCart } from '../../redux/slices/cart';


const ProductCard = ({
    id,
    discount,
    tag,
    image,
    images,
    title,
    brand,
    rating,
    price,
    originalPrice,
    sold,
    total,
    description,
    flavour,
    dietType,
    weight,
    speciality,
    info,
    items,
    sizes
}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        const productData = {
            id,
            discount,
            tag,
            image,
            images,
            title,
            brand,
            rating,
            price,
            originalPrice,
            sold,
            total,
            description,
            flavour,
            dietType,
            weight,
            speciality,
            info,
            items,
            sizes
        };
        dispatch(selectProduct(productData)); // Dispatch the selected product directly
        window.scrollTo(
            {
                top: 0,
                behavior: "smooth"
            }
        );
    };
    const handleAddToCart = () => {
        const productData = {
            id,
            discount,
            tag,
            image,
            images,
            title,
            brand,
            rating,
            price,
            originalPrice,
            sold,
            total,
            description,
            flavour,
            dietType,
            weight,
            speciality,
            info,
            items,
            sizes
        };
        dispatch(addToCart(productData));
    };


    return (
        <div className="product-card shadow-sm">
            <div className="discount">
                {discount && <div className="tag">{tag}</div>}
            </div>
            <Link to={`/product/${id}`} onClick={handleClick} className="product-image">
                <img src={image} alt={title} className="product-image" />
            </Link>
            <Link to={`/product/${id}`} className="text-decoration-none  product-title" onClick={handleClick}>
                <h4 className="product-title fw-bold">{title}</h4>
            </Link>


            <p className="product-price ms-0">
                {price ? `$${price.toFixed(2)}` : "Price Unavailable"}
                {originalPrice && <span className="original-price ms-3">${originalPrice.toFixed(2)}</span>}
            </p>

            <div className="progress-bar">
                <span style={{ width: `${(sold / total) * 100}%` }}></span>
            </div>
            <p className="sold-info">Sold: {sold}/{total}</p>
            <button className="add-to-cart shop-button" onClick={handleAddToCart}>Add To Cart</button>
        </div>
    );
};

export default ProductCard;
