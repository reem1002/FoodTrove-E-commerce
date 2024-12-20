import React, { useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./cart.css";
import HeadingBar from "../heading bar/red-heading-bar";
import ProductList from "../daily-best-sellers/ProductList";
import { useSelector, useDispatch } from "react-redux";
import { changePageName } from "../../redux/slices/pageNameSlice";
import { removeFromCart, incrementQuantity, decrementQuantity } from "../../redux/slices/cart"; // Import correct actions
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { selectProduct } from "../../redux/slices/productSlice";
import { setCheckoutProducts } from "../../redux/slices/checkoutSlice";



const Cart = () => {
    const cartItems = useSelector((state) => state.cart.value); // Fetch cart items
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(changePageName("Cart"));
    }, [dispatch]);


    const handleQuantityChange = (id, increment) => {
        if (increment > 0) {
            dispatch(incrementQuantity(id));
        } else {
            dispatch(decrementQuantity(id));
        }
    };

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleHomeBack = () => {
        navigate("/shop");
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const handleClick = (item) => {

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
            quantity: item.quantity,
        };
        dispatch(selectProduct(productData)); // Dispatch the correct product data
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleCheckout = () => {
        // Send cart items to Redux state for checkout
        dispatch(setCheckoutProducts(cartItems));
        navigate("/checkout"); // Navigate to the Checkout page
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };


    return (
        <div className="cart-container">
            <img src={`${process.env.PUBLIC_URL}/imgs/decor/decor8.png`} alt="decor" className="decor1" />
            <img src={`${process.env.PUBLIC_URL}/imgs/decor/decor6.png`} alt="decor" className="decor3" />
            <img src={`${process.env.PUBLIC_URL}/imgs/decor/decor7.png`} alt="decor" className="decor4" />
            <div className="heading-bar">
                <HeadingBar />
            </div>
            <div style={{ padding: "20px" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Size</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {cartItems.length === 0 ? (
                        <p style={
                            { textAlign: "center", fontSize: "1.5rem", color: "black", padding: "20px", margin: "auto", alignSelf: "center" }
                        }>Your cart is empty!!</p>
                    ) : (
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id}>
                                    <td >
                                        <Link
                                            to={`/product/${item.id}`} // Correct URL with the product ID
                                            onClick={() => handleClick(item)} // Pass the item to handleClick
                                            className="text-decoration-none link-from-cart"
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                style={{ width: "50px", marginRight: "10px" }}
                                            />
                                            {item.title}
                                        </Link>

                                    </td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>{item.size ? item.size : item.sizes[0]}</td>
                                    <td>
                                        <div className="quantity">
                                            <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                                            <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                                            <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                                        </div>
                                    </td>
                                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                                    <td>
                                        <button onClick={() => handleRemove(item.id)}>
                                            <RiDeleteBin6Line />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    )}


                </table>
                <div style={{ marginTop: "20px", textAlign: "right" }}>
                    <strong>Total: ${total.toFixed(2)}</strong>
                </div>
                <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between" }}>
                    <button className="continue-btn" onClick={handleHomeBack}>
                        Continue Shopping
                    </button>
                    <button style={{ backgroundColor: "#f43e31", color: "white" }} className="checkout-btn" onClick={handleCheckout}>
                        Check Out
                    </button>
                </div>
            </div>
            <div className="additional">
                <h3>Deals of the day</h3>
                <div className="related-products">
                    <ProductList />
                </div>
            </div>
        </div >
    );
};

export default Cart;
