import React, { useState } from "react";
import { Form, Button, Card, Row, Col, Modal } from "react-bootstrap";
import "./CheckoutForm.css";
import HeadingBar from "../heading bar/red-heading-bar";
import Summary from "./Summary";
import Swal from "sweetalert2";

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
        cardNumber: "",
        cardHolderName: "",
        expiryDate: "",
        cvv: "",
    });

    const [paymentMethod, setPaymentMethod] = useState("");
    const [showBankModal, setShowBankModal] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "paymentMethod") {
            setPaymentMethod(value);
        } else if (
            ["cardNumber", "cardHolderName", "expiryDate", "cvv"].includes(name)
        ) {
            setCardDetails({ ...cardDetails, [name]: value });
        } else {
            setBillingDetails({ ...billingDetails, [name]: value });
        }
    };

    const isFormValid = () => {
        return (
            billingDetails.firstName &&
            billingDetails.lastName &&
            billingDetails.address &&
            billingDetails.city &&
            billingDetails.postCode &&
            billingDetails.country &&
            billingDetails.region &&
            paymentMethod &&
            (paymentMethod !== "Visa/Master Card" ||
                (cardDetails.cardNumber &&
                    cardDetails.cardHolderName &&
                    cardDetails.expiryDate &&
                    cardDetails.cvv))
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate payment method
        if (!paymentMethod) {
            Swal.fire({
                icon: "error",
                title: "No Payment Method Selected",
                text: "Please select a payment method.",
                confirmButtonText: "OK",
                customClass: {
                    confirmButton: "btn-alert",
                },
            });
            return;
        }

        // Validate billing details
        if (
            !billingDetails.firstName ||
            !billingDetails.lastName ||
            !billingDetails.address ||
            !billingDetails.city ||
            !billingDetails.postCode ||
            !billingDetails.country ||
            !billingDetails.region
        ) {
            Swal.fire({
                icon: "error",
                title: "Missing Billing Information",
                text: "Please fill in all required billing details.",
                confirmButtonText: "OK",
                customClass: {
                    confirmButton: "btn-alert",
                },
            });
            return;
        }

        // If payment method is Visa/Master Card, validate card details
        if (paymentMethod === "Visa/Master Card") {
            if (
                !cardDetails.cardNumber ||
                !cardDetails.cardHolderName ||
                !cardDetails.expiryDate ||
                !cardDetails.cvv
            ) {
                Swal.fire({
                    icon: "error",
                    title: "Incomplete Payment Details",
                    text: "Please fill in all payment details.",
                    confirmButtonText: "OK",
                    customClass: {
                        confirmButton: "btn-alert",
                    },
                });
                return;
            }
        }

        Swal.fire({
            icon: "success",
            title: "Order Placed Successfully!",
            text: "Your order has been placed successfully.",
            confirmButtonText: "OK",
            customClass: {
                confirmButton: "btn-alert",
            },
        });
    };

    const handleBankTransfer = () => {
        setPaymentMethod("Visa/Master Card");
        setShowBankModal(true);
    };

    const handleCardPaymentConfirm = () => {
        // Validate card details
        if (
            !cardDetails.cardNumber ||
            !cardDetails.cardHolderName ||
            !cardDetails.expiryDate ||
            !cardDetails.cvv
        ) {
            Swal.fire({
                icon: "error",
                title: "Incomplete Payment Details",
                text: "Please fill in all payment details.",
                confirmButtonText: "OK",
                customClass: {
                    confirmButton: "btn-alert",
                },
            });
            return;
        }

        // Validate card number (16 digits)
        const cardNumberPattern = /^[0-9]{16}$/;
        if (!cardNumberPattern.test(cardDetails.cardNumber)) {
            Swal.fire({
                icon: "error",
                title: "Invalid Card Number",
                text: "Please enter a valid 16-digit card number.",
                confirmButtonText: "OK",
                customClass: {
                    confirmButton: "btn-alert",
                },
            });
            return;
        }

        // Validate expiry date (must not be in the past)
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();
        const [expiryYear, expiryMonth] = cardDetails.expiryDate.split("-");
        if (
            parseInt(expiryYear) < currentYear ||
            (parseInt(expiryYear) === currentYear &&
                parseInt(expiryMonth) < currentMonth)
        ) {
            Swal.fire({
                icon: "error",
                title: "Invalid Expiry Date",
                text: "Your card has expired. Please enter a valid expiry date.",
                confirmButtonText: "OK",
                customClass: {
                    confirmButton: "btn-alert",
                },
            });
            return;
        }

        // Validate CVV (3 digits)
        if (cardDetails.cvv.length !== 3) {
            Swal.fire({
                icon: "error",
                title: "Invalid CVV",
                text: "Please enter a valid 3-digit CVV.",
                confirmButtonText: "OK",
                customClass: {
                    confirmButton: "btn-alert",
                },
            });
            return;
        }

        // If validation passes, close the modal and confirm
        setShowBankModal(false);
        Swal.fire({
            icon: "success",
            title: "Payment Confirmed",
            text: "Your payment details have been successfully verified.",
            confirmButtonText: "OK",
            customClass: {
                confirmButton: "btn-alert",
            },
        });
    };

    const handleCashOnDelivery = () => {
        setPaymentMethod("Cash on Delivery");
    };

    const handleCloseModal = () => {
        setShowBankModal(false);
    };

    return (
        <div className="check-container">
            <div className="heading-bar">
                <HeadingBar />
            </div>
            <Row className="justify-content-center p-4 wholepagee">
                <Col md={4}>
                    <Summary />
                    <Card className="p-3 mb-4">
                        <h5>Payment Method</h5>
                        <div>
                            <label style={{ display: "block", marginBottom: "10px", fontSize: "16px" }}>
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="Cash on Delivery"
                                    style={{
                                        accentColor: "red",
                                        marginRight: "10px",
                                        cursor: "pointer",
                                    }}
                                    onChange={handleCashOnDelivery}
                                />
                                Cash on Delivery
                            </label>

                            <label style={{ display: "block", marginBottom: "10px", fontSize: "16px" }}>
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="Visa/Master Card"
                                    style={{
                                        accentColor: "red",
                                        marginRight: "10px",
                                        cursor: "pointer",
                                    }}
                                    onChange={handleBankTransfer}
                                />
                                Visa/Master Card
                            </label>
                        </div>

                    </Card>
                </Col>
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
                                        <Form.Control
                                            as="select"
                                            name="country"
                                            onChange={handleInputChange}
                                        >
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
                        onClick={handleSubmit}
                        disabled={!isFormValid()}
                    >
                        Place Order
                    </Button>
                </Col>
            </Row>
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
                    <Button variant="danger" onClick={handleCardPaymentConfirm}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CheckoutForm;
