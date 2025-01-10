import React, { useEffect, useState, useRef } from "react";
import ProductCard from "./ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ClipLoader } from "react-spinners";
import { database } from "../../firebase";
import { ref, onValue } from "firebase/database";

const fallbackProducts = [];

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const productListRef = useRef(null);
    const [cardWidth, setCardWidth] = useState(0);
    const move = cardWidth + 15;

    useEffect(() => {
        const dbRef = ref(database, "dailyProducts");

        const unsubscribe = onValue(
            dbRef,
            (snapshot) => {
                if (snapshot.exists()) {
                    setProducts(Object.values(snapshot.val()));
                } else {
                    setProducts(fallbackProducts); // بيانات محلية في حالة عدم وجود بيانات
                }
                setLoading(false);
            },
            (error) => {
                console.error("Error fetching data from Firebase:", error);
                setProducts(fallbackProducts);
                setLoading(false);
            }
        );

        // حساب عرض الكروت لتحديد الحركة
        const updateCardWidth = () => {
            if (productListRef.current) {
                const card = productListRef.current.querySelector(".product-card");
                if (card) {
                    setCardWidth(card.offsetWidth);
                }
            }
        };

        updateCardWidth();
        window.addEventListener("resize", updateCardWidth);

        return () => {
            unsubscribe(); // إلغاء الاشتراك عند تفكيك الكومبوننت
            window.removeEventListener("resize", updateCardWidth);
        };
    }, []);

    const scrollLeft = () => {
        if (productListRef.current) {
            productListRef.current.scrollBy({ left: -move, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (productListRef.current) {
            productListRef.current.scrollBy({ left: move, behavior: "smooth" });
        }
    };

    return (
        <div className="scrollbar">
            {loading ? (
                <div className="loading-spinner">
                    <ClipLoader color="#3BB77E" />
                </div>
            ) : (
                <>
                    <button onClick={scrollLeft} className="scroll-button">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <div className="product-wrapper" style={{ overflow: "hidden" }}>
                        <div
                            className="product-list"
                            ref={productListRef}
                            style={{
                                display: "flex",
                                overflowX: "hidden",
                                scrollBehavior: "smooth",
                                gap: "12px",
                            }}
                        >
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="product-card-container"
                                    style={{ width: "191px", flex: "0 0 auto" }}
                                >
                                    <ProductCard {...product} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <button onClick={scrollRight} className="scroll-button">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </>
            )}
        </div>
    );
};

export default ProductList;
