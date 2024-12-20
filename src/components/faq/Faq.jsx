import React from "react";
import HeadingBar from "../heading bar/red-heading-bar";
import { useDispatch } from "react-redux";
import { changePageName } from "../../redux/slices/pageNameSlice";
import { useEffect } from "react";
import "./faq.css";
const Faq = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(changePageName("FAQ"));
    }, [dispatch]);
    return (
        <div className="full-container">
            <div className="heading-bar">
                <HeadingBar />
            </div>
            <div className="row faq-container m-auto">
                {/* Image Section */}
                <div className="col-md-6">
                    <img
                        src={process.env.PUBLIC_URL + "/imgs/faq.png"}
                        alt="Fresh Vegetables"
                        className="img-fluid rounded"
                    />
                </div>
                {/* FAQ Section */}
                <div className="col-md-6">
                    <h3 className="mb-4">Frequently Asked Questions</h3>
                    <div className="accordion" id="faqAccordion">
                        {/* FAQ Item 1 */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                    style={{ backgroundColor: "transparent" }}
                                >
                                    What Facilities Does Your Hotel Have?
                                </button>
                            </h2>
                            <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad
                                    voluptate dolores eos sunt labore.
                                </div>
                            </div>
                        </div>
                        {/* FAQ Item 2 */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                    style={{ backgroundColor: "transparent" }}
                                >
                                    How Do I Book A Room For My Vacation?
                                </button>
                            </h2>
                            <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body">
                                    You can book a room by visiting our website or contacting our
                                    front desk.
                                </div>
                            </div>
                        </div>
                        {/* FAQ Item 3 */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                    style={{ backgroundColor: "transparent" }}
                                >
                                    Is There Any Fitness Center In Your Hotel?
                                </button>
                            </h2>
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body">
                                    Yes, our hotel features a state-of-the-art fitness center.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
