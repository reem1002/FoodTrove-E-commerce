import React from "react";
import { Card } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changePageName } from "../../redux/slices/pageNameSlice";
import { useSelector } from "react-redux";

const Summary = () => {
    // Fetch products from the Redux state
    const checkoutProducts = useSelector((state) => state.checkout.products);

    // Calculate subtotal dynamically
    const subtotal = checkoutProducts.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // Static delivery charge (you can make it dynamic if needed)
    const deliveryCharge = subtotal > 0 ? 10.0 : 0.0;

    // Calculate total amount
    const total = subtotal + deliveryCharge;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(changePageName("Checkout"));
    }, [dispatch]);




    return (
        <Card className="p-3 mb-4">
            <h5>Summary</h5>
            {checkoutProducts.length === 0 ? (
                <p>Your cart is empty!</p>
            ) : (
                <>
                    <div className="summary-box p-0 m-0">
                        <strong>Items:</strong>
                        <ul style={{ listStyleType: "none", padding: 0, maxHeight: "80px", overflowY: "auto" }}>
                            {checkoutProducts.map((item) => (
                                <li key={item.id}>
                                    <img src={item.image} alt={item.title} style={{ width: 40, height: 40, objectFit: "cover", marginRight: "10px" }} />
                                    {item.title.slice(0, 25)}... x {item.quantity} = $
                                    {(item.price * item.quantity).toFixed(2)}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <hr />
                    <div>Subtotal: <strong>${subtotal.toFixed(2)}</strong></div>
                    <div>Delivery Charges: <strong>${deliveryCharge.toFixed(2)}</strong></div>
                    <hr />
                    <h5>Total Amount: <strong>${total.toFixed(2)}</strong></h5>
                </>
            )}
        </Card>
    );
};


export default Summary;
