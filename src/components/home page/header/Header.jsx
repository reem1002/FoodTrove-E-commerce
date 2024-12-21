import React from 'react';
import Desk from './Desk';
import './header styles/header.css';
import { RiSearchLine, RiShoppingCartLine, RiHeartLine, RiUserLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../redux/slices/cart';
import { RiDeleteBin6Line } from "react-icons/ri";
import { selectProduct } from '../../../redux/slices/productSlice';
import { Link } from 'react-router-dom';
import { removeFromFav } from '../../../redux/slices/favSlice';
import { setSearchTerm, setCategory } from '../../../redux/slices/searsh';


export default function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const cartItems = useSelector((state) => state.cart.value);
    const cartCount = cartItems.reduce((total, item) => total + 1, 0);

    const favItems = useSelector((state) => state.fav.value);
    const favCount = favItems.reduce((total, item) => total + 1, 0);


    const handleClick = () => {
        navigate('/cart');
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    const handleNavigateClick = (item) => {

        const productData = {
            id: item.id,
            label: item.label,
            image: item.image,
            images: item.images,
            category: item.category,
            title: item.title,
            brand: item.brand,
            rating: item.rating,
            price: item.price,
            oldPrice: item.oldPrice,
            description: item.description,
            flavour: item.flavour,
            dietType: item.dietType,
            weight: item.weight,
            speciality: item.speciality,
            info: item.info,
            items: item.items,
            sizes: item.sizes,
            size: item.size,
        };
        dispatch(selectProduct(productData));
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleHomeBack = () => {
        navigate("/");
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            dispatch(setSearchTerm(e.target.value));
            navigate('/shop');
        }
    };

    const handleCategoryChange = (e) => {
        dispatch(setCategory(e.target.value));
        navigate('/shop');
    };
    // Popover content
    const popover = (
        <Popover id="cart-popover">
            <Popover.Body>
                {cartItems.length > 0 ? (
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {cartItems.map((item) => (
                            <li key={item.id} style={{ marginBottom: '10px', padding: "10px 0", borderBottom: "1px solid #ddd", position: "relative" }}>
                                <Link to={`/product/${item.id}`} onClick={() => handleNavigateClick(item)} style={{
                                    textDecoration: "none",
                                    color: "#000",
                                    display: "block",
                                    position: "relative",
                                    padding: "5px 0",
                                    marginRight: "30px"
                                }}>
                                    <strong>{item.title}</strong> x {item.quantity} - ${item.price * item.quantity}
                                </Link>
                                <button
                                    className="btn btn-sm  " style={{ position: "absolute", right: "0", top: "25px", backgroundColor: "transparent", border: "none", color: "#d8363f", }}
                                    onClick={() => dispatch(removeFromCart(item.id))}
                                > <RiDeleteBin6Line /> </button>

                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Your cart is empty!</p>
                )}
            </Popover.Body>
        </Popover>
    );
    const favPopover = (
        <Popover id="fav-popover">
            <Popover.Body>
                {favItems.length > 0 ? (
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {favItems.map((item) => (
                            <li key={item.id} style={{ marginBottom: '10px', padding: "10px 0", borderBottom: "1px solid #ddd", position: "relative" }}>
                                <Link to={`/product/${item.id}`} onClick={() => handleNavigateClick(item)} style={{
                                    textDecoration: "none",
                                    color: "#000",
                                    display: "block",
                                    position: "relative",
                                    padding: "5px 0",
                                    marginRight: "30px"
                                }}>
                                    <strong>{item.title}</strong> x {item.quantity} - ${item.price * item.quantity}
                                </Link>
                                <button
                                    className="btn btn-sm  " style={{ position: "absolute", right: "0", top: "25px", backgroundColor: "transparent", border: "none", color: "#d8363f", }}
                                    onClick={() => dispatch(removeFromFav(item.id))}
                                > <RiDeleteBin6Line /> </button>

                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Your favorite list is empty!!</p>
                )}
            </Popover.Body>
        </Popover>
    );

    const accountPopover = (
        <Popover id="account-popover">
            <Popover.Body>
                <div>
                    <Link to="/login" style={{ textDecoration: "none", color: "#000", display: "block", padding: "5px 0", marginRight: "30px" }}>
                        <span className='register'>Login</span>
                    </Link>
                    <Link to="/signup" style={{ textDecoration: "none", color: "#000", display: "block", padding: "5px 0", marginRight: "30px" }}>
                        <span className='register'>Sign Up</span>
                    </Link>
                </div>
            </Popover.Body>
        </Popover>
    );


    return (
        <div className="header container-fluid">
            <div className="row">
                {/* Desk Component */}
                <Desk />
            </div>
            <div className="row second-desk d-flex align-items-center justify-content-around">
                {/* Logo */}
                <div className="col-auto logo" onClick={handleHomeBack}>
                    <img
                        src={`${process.env.PUBLIC_URL}/imgs/header/Singaporean.svg`}
                        alt="logo"
                        className="img-fluid"
                        style={{ maxHeight: '60px' }}
                    />
                    <img
                        src={`${process.env.PUBLIC_URL}/imgs/header/FoodTrove.png`}
                        alt="logo"
                        className="img-fluid"
                        style={{ height: '16px', marginLeft: '-15px' }}
                    />
                </div>

                {/* Search */}
                <div className="col-4 search">
                    <div className="input-group" style={{ maxWidth: '600px', height: '40px' }}>
                        <input type="text" className="form-control search-input" placeholder="Search" onKeyDown={handleSearch} />

                        <select
                            name="category"
                            className="sort-dropdown"
                            onChange={handleCategoryChange}
                        >
                            <option value="">All categories</option>
                            <option value="Vegetables">Vegetables</option>
                            <option value="Snack">Snack</option>
                            <option value="Hodo Foods">Hodo Foods</option>
                            <option value="Pet Foods">Pet Foods</option>
                            <option value="Meats">Meats</option>
                            <option value="Coffes">Coffes</option>
                            <option value="Cream">Cream</option>
                        </select>
                        <button className="btn" style={{ backgroundColor: "#f53e32", cursor: "auto" }}>
                            <RiSearchLine style={{ fontSize: '20px', color: "white", cursor: "auto" }} title="search" className="lens" />
                        </button>
                    </div>
                </div>

                {/* Icons */}
                <div className="icons col-auto">
                    <div className="row p-3">
                        {/* User Icon */}
                        <div className="col-auto icon">
                            <OverlayTrigger trigger="click" placement="bottom" overlay={accountPopover} rootClose>
                                <span>
                                    <RiUserLine style={{ fontSize: '20px', cursor: 'pointer' }} title="user" />
                                </span>
                            </OverlayTrigger>
                        </div>

                        {/* Wishlist Icon */}
                        <div className="col-auto icon position-relative">
                            <OverlayTrigger trigger="click" placement="bottom" overlay={favPopover} rootClose>
                                <div style={{ cursor: 'pointer', }}>
                                    <RiHeartLine
                                        style={{ fontSize: '20px', cursor: 'pointer' }}
                                        title="wishlist"
                                    />

                                    {favCount > 0 && (
                                        <span
                                            className="cart-count position-absolute translate-middle badge rounded-pill bg-danger"
                                            style={{ fontSize: '10px' }}
                                        >
                                            {favCount}
                                        </span>
                                    )}
                                </div>
                            </OverlayTrigger>
                        </div>

                        {/* Cart Icon with Popover */}
                        <div className="col-auto icon position-relative">
                            <RiShoppingCartLine
                                style={{ fontSize: '20px', position: 'relative', cursor: 'pointer' }}
                                title="cart"
                                onClick={handleClick}
                            />
                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover} rootClose>
                                <div style={{ cursor: 'pointer', }}>

                                    {cartCount > 0 && (
                                        <span
                                            className="cart-count position-absolute translate-middle badge rounded-pill bg-danger"
                                            style={{ fontSize: '10px' }}
                                        >
                                            {cartCount}
                                        </span>
                                    )}
                                </div>
                            </OverlayTrigger>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
