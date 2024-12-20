import React, { useEffect, useState } from 'react';
import './ProductDetails.css';
import ProductList from '../daily-best-sellers/ProductList';
import HeadingBar from '../heading bar/red-heading-bar';
import { useDispatch, useSelector } from 'react-redux';
import { changePageName } from '../../redux/slices/pageNameSlice';
import { RiHeartFill, RiHeartLine } from 'react-icons/ri';
import '../daily-best-sellers/daily.css';
import TabComponent from './Tap';
import { addToCart, incrementQuantity, updateCart } from '../../redux/slices/cart';
import { useParams } from 'react-router-dom';
import { addToFav } from '../../redux/slices/favSlice';

const ProductDetails = () => {
    const product = useSelector((state) => state.product.selectedProduct);
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.value);
    const favorites = useSelector((state) => state.fav.value);

    const { id } = useParams();
    const [mainImage, setMainImage] = useState('');
    const [selectedSize, setSelectedSize] = useState(product.size || product.sizes[0] || '');
    const [quantity, setQuantity] = useState(product.quantity || 1); // Quantity state

    useEffect(() => {
        dispatch(changePageName('Product'));

        if (product) {
            setMainImage(`${process.env.PUBLIC_URL}${product.image}`);
        }
    }, [product]);

    if (!product) {
        return <p>Loading...</p>;
    }

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
        const updatedQuantity = quantity || product.quantity || 1;
        dispatch(updateCart({ ...product, size, quantity: updatedQuantity }));
    };

    const handleQuantityChange = (e) => {
        const value = Math.max(1, parseInt(e.target.value) || 1); 
        setQuantity(value);
    };

    const handelAddToWishList = () => {
        const productData = {
            id: product.id,
            label: product.label,
            image: product.image,
            images: product.images,
            category: product.category,
            title: product.title,
            brand: product.brand,
            rating: product.rating,
            price: product.price,
            oldPrice: product.oldPrice,
            description: product.description,
            flavour: product.flavour,
            dietType: product.dietType,
            weight: product.weight,
            speciality: product.speciality,
            info: product.info,
            items: product.items,
            sizes: product.sizes,
            size: selectedSize,
            quantity: 1,
        };

        dispatch(addToFav(productData));
    };

    const isFavorite = favorites.some((fav) => fav.id === product.id);

    const handleAddToCart = () => {
        if (product.sizes && !selectedSize) {
            alert('Please select a size');
            return;
        }

        const existingProduct = cartItems.find(
            (item) => item.id === product.id && item.size === selectedSize
        );

        if (existingProduct) {
            dispatch(updateCart({ ...existingProduct, quantity }));
        } else {
            const productData = {
                id: product.id,
                label: product.label,
                image: product.image,
                images: product.images,
                category: product.category,
                title: product.title,
                brand: product.brand,
                rating: product.rating,
                price: product.price,
                oldPrice: product.oldPrice,
                description: product.description,
                flavour: product.flavour,
                dietType: product.dietType,
                weight: product.weight,
                speciality: product.speciality,
                info: product.info,
                items: product.items,
                sizes: product.sizes,
                size: selectedSize,
                quantity,
            };

            dispatch(addToCart(productData));
        }
    };

    return (
        <div className='top-container'>
            <img src={`${process.env.PUBLIC_URL}/imgs/decor/decor1.png`} alt="decor" className='decor1' />
            <img src={`${process.env.PUBLIC_URL}/imgs/decor/decor2.png`} alt="decor" className='decor3' />
            <img src={`${process.env.PUBLIC_URL}/imgs/decor/decor4.png`} alt="decor" className='decor4' />

            <div className="heading-bar">
                <HeadingBar />
            </div>

            <div className="product-details">
                <div className="mainSection">
                    <div className="first">
                        <div className="product-left">
                            <div className="mainimg">
                                <img
                                    src={mainImage}
                                    alt={product.title}
                                    className="main-product-image"
                                />
                            </div>
                            <div className="thumbnail-images">
                                {product.images?.map((thumbnail, index) => (
                                    <img
                                        key={index}
                                        src={thumbnail}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="thumbnail-image"
                                        onClick={() => setMainImage(thumbnail)}
                                        style={{
                                            border: mainImage === thumbnail ? '2px solid #bcbbbb' : 'none',
                                            cursor: 'pointer',
                                        }}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="product-right">
                            <h5 className='fw-bold'>{product.title}</h5>
                            <p className="product-description fs-6">{product.description}</p>

                            <div className="product-rating">
                                <span>★★★★★</span>
                                <span className='ms-3'>({product.rating} Reviews)</span>
                            </div>

                            <div className="product-info">
                                <p><strong>Brand:</strong> {product.brand}</p>
                                <p><strong>Flavour:</strong> {product.flavour}</p>
                                <p><strong>Diet Type:</strong> {product.dietType}</p>
                                <p><strong>Weight:</strong> {product.weight}</p>
                                <p><strong>Speciality:</strong> {product.speciality}</p>
                                <p><strong>Info:</strong> {product.info}</p>
                                <p><strong>Items:</strong> {product.items}</p>
                            </div>

                            <div className="product-price">
                                <span className="discounted-price">${product.price}</span>
                                {product.oldPrice && (
                                    <span className="original-price ms-3">${product.oldPrice}</span>
                                )}
                            </div>

                            <div className="size-weight">
                                <span>Size/Weight :</span>
                                {product.sizes?.map((size, index) => (
                                    <button
                                        key={index}
                                        style={{ border: selectedSize === size ? '2px solid #bcbbbb' : 'none' }}
                                        onClick={() => handleSizeSelect(size)}
                                        className="size-button"
                                    >{size}</button>
                                ))}
                            </div>

                            <div className="product-quantity">
                                <label>Qty:</label>
                                <input
                                    type="number"
                                    value={quantity}
                                    min="1"
                                    onChange={handleQuantityChange}
                                />
                                <button className="add-to-cart" onClick={handleAddToCart}>
                                    Add To Cart
                                </button>
                                <button className="wishlist" onClick={handelAddToWishList}>
                                    {isFavorite ? (
                                        <RiHeartFill style={{ fontSize: '18px', color: '#d8363f' }} />
                                    ) : (
                                        <RiHeartLine style={{ fontSize: '18px' }} />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="product-tabs">
                        <TabComponent />
                    </div>
                </div>

                <div className="additional">
                    <h3>Deals of the day</h3>
                    <div className="related-products">
                        <ProductList />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
