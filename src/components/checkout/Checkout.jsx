import React, { useState } from "react";
import { Form, Button, Card, Row, Col, Modal } from "react-bootstrap";
import "./CheckoutForm.css";
import HeadingBar from "../heading bar/red-heading-bar";
import Summary from "./Summary";

const CheckoutForm = () => {
    const [billingDetails, setBillingDetails] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postCode: "",
        country: "",
        region: "",
    });
    const [cardDetails, setCardDetails] = useState({
        cardNumber: '',
        cardHolderName: '',
        expiryDate: '',
        cvv: ''
    });

    const [bankTransfer, setBankTransfer] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState("");
    const [showBankModal, setShowBankModal] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBillingDetails({ ...billingDetails, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Billing Details:", billingDetails);
        console.log("Payment Method:", paymentMethod);
    };

    const handleBankTransfer = () => {
        setBankTransfer(true);
        setPaymentMethod("Bank Transfer");
        setShowBankModal(true);
    };

    const handleCashOnDelivery = () => {
        setBankTransfer(false);
        setPaymentMethod("Cash on Delivery");
    };

    const handleCloseModal = () => {
        setShowBankModal(false);
    };

    const handlePlaceOrder = () => {
        //sweet alert
        alert("Order Placed Successfully!");
    }


    return (
        <div className="check-container">
            <div className="heading-bar">
                <HeadingBar />
            </div>
            <Row className="justify-content-center p-4 wholepagee ">
                {/* Order Summary */}
                <Col md={4}>
                    <Summary />
                    {/* Payment Method */}
                    <Card className="p-3 mb-4">
                        <h5>Payment Method</h5>
                        <Form.Check
                            type="radio"
                            label="Cash on Delivery"
                            name="paymentMethod"
                            className="custom-radio"
                            style={{ accentColor: 'red' }}
                            onChange={handleCashOnDelivery}
                        />
                        <Form.Check
                            type="radio"
                            label="Visa/Master Card"
                            name="paymentMethod"
                            className="custom-radio"
                            style={{ accentColor: 'red' }}
                            onChange={handleBankTransfer}
                        />
                    </Card>
                </Col>

                {/* Billing Details */}
                <Col md={6}>
                    <Card className="p-4">
                        <h5>Billing Details</h5>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col md={6}>
                                    <Form.Group controlId="firstName">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter first name"
                                            name="firstName"
                                            onChange={handleInputChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="lastName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter last name"
                                            name="lastName"
                                            onChange={handleInputChange}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group controlId="address">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your address"
                                    name="address"
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Row>
                                <Col md={6}>
                                    <Form.Group controlId="city">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="City"
                                            name="city"
                                            onChange={handleInputChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="postCode">
                                        <Form.Label>Post Code</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Post Code"
                                            name="postCode"
                                            onChange={handleInputChange}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <Form.Group controlId="country">
                                        <Form.Label>Country</Form.Label>
                                        <Form.Control as="select" name="country" onChange={handleInputChange}>
                                            <option value="">Select Country</option>
                                            <option value="Egypt">Egypt</option>
                                            <option value="India">India</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="region">
                                        <Form.Label>Region/State</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Region/State"
                                            name="region"
                                            onChange={handleInputChange}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Card>
                    <Button
                        type="submit"
                        className="mt-3 col-3 btn-checkout"
                        style={{ float: "right" }}
                        onClick={handlePlaceOrder}
                    >
                        Place Order
                    </Button>
                </Col>
            </Row>

            {/* Bank Transfer Modal */}
            <Modal show={showBankModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Card Payment Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="cardNumber">
                            <Form.Label>Card Number</Form.Label>
                            <Form.Control
                                type="text"
                                name="cardNumber"
                                value={cardDetails.cardNumber}
                                onChange={handleInputChange}
                                placeholder="Enter Card Number"
                            />
                        </Form.Group>
                        <Form.Group controlId="cardHolderName">
                            <Form.Label>Cardholder Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="cardHolderName"
                                value={cardDetails.cardHolderName}
                                onChange={handleInputChange}
                                placeholder="Enter Cardholder Name"
                            />
                        </Form.Group>
                        <Form.Group controlId="expiryDate">
                            <Form.Label>Expiry Date</Form.Label>
                            <Form.Control
                                type="month"
                                name="expiryDate"
                                value={cardDetails.expiryDate}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="cvv">
                            <Form.Label>CVV</Form.Label>
                            <Form.Control
                                type="text"
                                name="cvv"
                                value={cardDetails.cvv}
                                onChange={handleInputChange}
                                placeholder="Enter CVV"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleCloseModal}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CheckoutForm;



