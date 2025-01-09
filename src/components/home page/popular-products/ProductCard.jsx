import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import { useDispatch } from "react-redux";
import { selectProduct } from "../../../redux/slices/productSlice";
import { addToCart } from "../../../redux/slices/cart"; // Import addToCart action

const ProductCard = ({
    id,
    label,
    image,
    images,
    category,
    title,
    brand,
    rating,
    price,
    oldPrice,
    description,
    flavour,
    dietType,
    weight,
    speciality,
    info,
    items,
    sizes,
}) => {
    const dispatch = useDispatch();

    // Handle product selection
    const handleClick = () => {
        const productData = {
            id,
            label,
            image,
            images,
            category,
            title,
            brand,
            rating,
            price,
            oldPrice,
            description,
            flavour,
            dietType,
            weight,
            speciality,
            info,
            items,
            sizes,
        };
        dispatch(selectProduct(productData));
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Handle adding to cart
    const handleAddToCart = () => {
        const productData = {
            id,
            label,
            image,
            images,
            category,
            title,
            brand,
            rating,
            price,
            oldPrice,
            description,
            flavour,
            dietType,
            weight,
            speciality,
            info,
            items,
            sizes,
        };
        dispatch(addToCart(productData));
    };

    return (
        <div className="card product-card mb-4 shadow-sm">
            <div className="card-header-badge d-flex justify-content-start">
                {label && <span className={`badge ${label.toLowerCase()}`}>{label}</span>}
            </div>

            <Link to={`/product/${id}`} onClick={handleClick} className="card-img-top">
                <img src={image} className="card-img-top" alt={title} />
            </Link>

            <div className="card-body m-0">
                <p className="text-muted small mb-1">{category}</p>
                <Link to={`/product/${id}`} className="text-decoration-none card-title" onClick={handleClick}>
                    <h6 className="card-title fw-bold">{title}</h6>
                </Link>
                <div className="d-flex align-items-center">
                    <span className="me-2">
                        ⭐ <span className="ms-5">({rating})</span>
                    </span>
                </div>
                <div className="by">
                    <span className="text-muted small">
                        By <span className="lightGreen small">{brand}</span>
                    </span>
                </div>
                <div className="d-flex align-items-center mb-2 add-to-cart">
                    <span className="fw-bold lightGreen me-2 fs-6">${price}</span>
                    <span className="text-muted text-decoration-line-through">
                        {oldPrice !== 0 ? `$${oldPrice}` : ""}
                    </span>

                    <button
                        className="btn btn-danger btn-sm align-self-start"
                        onClick={handleAddToCart}
                    >
                        <RiShoppingCartLine style={{ fontSize: "20px", color: "white", marginRight: "5px" }} title="cart" />
                        <span>Add</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
