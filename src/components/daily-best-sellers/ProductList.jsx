import React, { useEffect, useState, useRef } from 'react';
import ProductCard from './ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ClipLoader } from 'react-spinners';
const dailyProducts = [
    {
        id: 11,
        title: "All Natural Italian-Style Chicken Meatballs",
        price: 238.85,
        originalPrice: 245.8,
        sold: 90,
        total: 120,
        discount: 35,
        tag: "Save 35%",
        image: "/imgs/daily/product-11.png",
        description: "Made with all-natural ingredients, these chicken meatballs offer a healthy and delicious meal option.",
        images: ["/imgs/daily/product-11.png", "/imgs/daily/product-11-alt.png"],
        rating: 4.5,
        brand: "Natural Delights",
        flavour: "Herb Infused",
        dietType: "Gluten Free",
        weight: "500g",
        speciality: "No preservatives",
        info: "Packed with protein and low in fat.",
        items: 1,
        sizes: ["200g", "500g", "1kg"],
    },
    {
        id: 12,
        title: "Angie’s Boomchickapop Sweet and Wommies",
        price: 238.85,
        originalPrice: 245.8,
        sold: 90,
        total: 120,
        discount: null,
        tag: "Sale",
        image: "/imgs/daily/product-12.png",
        description: "Deliciously sweet and crunchy popcorn snacks for a perfect treat.",
        images: ["/imgs/daily/product-12.png", "/imgs/daily/product-12-alt.png"],
        rating: 4.0,
        brand: "Angie's",
        flavour: "Sweet Caramel",
        dietType: "Non-GMO",
        weight: "150g",
        speciality: "No artificial ingredients",
        info: "Perfect for on-the-go snacking.",
        items: 1,
        sizes: ["100g", "150g", "300g"],
    },
    {
        id: 13,
        title: "Foster Farms Takeout Crispy Classic",
        price: 238.85,
        originalPrice: 245.8,
        sold: 90,
        total: 120,
        discount: null,
        tag: "Best sale",
        image: "/imgs/daily/product-13.png",
        description: "Crispy and delicious takeout-style chicken, ready to serve.",
        images: ["/imgs/daily/product-13.png", "/imgs/daily/product-13-alt.png"],
        rating: 4.2,
        brand: "Foster Farms",
        flavour: "Classic Crispy",
        dietType: "Gluten Free",
        weight: "1kg",
        speciality: "Free range chicken",
        info: "Quick and easy meal option.",
        items: 1,
        sizes: ["500g", "1kg"],
    },
    {
        id: 14,
        title: "Blue Diamond Almonds Lightly Salted",
        price: 238.85,
        originalPrice: 245.8,
        sold: 90,
        total: 120,
        discount: 15,
        tag: "Save 15%",
        image: "/imgs/daily/product-14.png",
        description: "Slightly salted almonds that make the perfect snack or topping.",
        images: ["/imgs/daily/product-14.png", "/imgs/daily/product-14-alt.png"],
        rating: 4.8,
        brand: "Blue Diamond",
        flavour: "Lightly Salted",
        dietType: "Non-GMO",
        weight: "250g",
        speciality: "Heart healthy",
        info: "Rich in antioxidants and vitamin E.",
        items: 1,
        sizes: ["200g", "250g", "500g"],
    },
    {
        id: 15,
        title: "All Natural Italian-Style Chicken Meatballs",
        price: 238.85,
        originalPrice: 245.8,
        sold: 90,
        total: 120,
        discount: 35,
        tag: "Save 35%",
        image: "/imgs/daily/product-11.png",
        description: "Made with all-natural ingredients, these chicken meatballs offer a healthy and delicious meal option.",
        images: ["/imgs/daily/product-11.png", "/imgs/daily/product-11-alt.png"],
        rating: 4.5,
        brand: "Natural Delights",
        flavour: "Herb Infused",
        dietType: "Gluten Free",
        weight: "500g",
        speciality: "No preservatives",
        info: "Packed with protein and low in fat.",
        items: 1,
        sizes: ["200g", "500g", "1kg"],
    },
    {
        id: 16,
        title: "Angie’s Boomchickapop Sweet and Wommies",
        price: 238.85,
        originalPrice: 245.8,
        sold: 90,
        total: 120,
        discount: null,
        tag: "Sale",
        image: "/imgs/daily/product-12.png",
        description: "Deliciously sweet and crunchy popcorn snacks for a perfect treat.",
        images: ["/imgs/daily/product-12.png", "/imgs/daily/product-12-alt.png"],
        rating: 4.0,
        brand: "Angie's",
        flavour: "Sweet Caramel",
        dietType: "Non-GMO",
        weight: "150g",
        speciality: "No artificial ingredients",
        info: "Perfect for on-the-go snacking.",
        items: 1,
        sizes: ["100g", "150g", "300g"],
    },
];


const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state
    const productListRef = useRef(null);
    const [cardWidth, setCardWidth] = useState(0);
    const move = cardWidth + 15;

    useEffect(() => {
        fetch("http://localhost:5000/dailyProducts")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setLoading(false); // Stop loading after data is fetched
            })
            .catch(() => {
                setProducts(dailyProducts); // Fallback to local data
                setLoading(false); // Stop loading after fallback
            });

        const updateCardWidth = () => {
            if (productListRef.current) {
                const card = productListRef.current.querySelector('.product-card');
                if (card) {
                    setCardWidth(card.offsetWidth);
                }
            }
        };

        updateCardWidth();
        window.addEventListener('resize', updateCardWidth);

        return () => window.removeEventListener('resize', updateCardWidth);
    }, []);

    const scrollLeft = () => {
        if (productListRef.current) {
            productListRef.current.scrollBy({ left: -move, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (productListRef.current) {
            productListRef.current.scrollBy({ left: move, behavior: 'smooth' });
        }
    };

    return (
        <div className="scrollbar">
            {loading ? ( // Show a loading spinner or placeholder
                <div className="loading-spinner">
                    <ClipLoader color="#3BB77E" />
                </div>
            ) : (
                <>
                    <button onClick={scrollLeft} className="scroll-button">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <div className="product-wrapper" style={{ overflow: 'hidden' }}>
                        <div
                            className="product-list"
                            ref={productListRef}
                            style={{
                                display: 'flex',
                                overflowX: 'hidden',
                                scrollBehavior: 'smooth',
                                gap: '12px',
                            }}
                        >
                            {products.map((product) => (
                                <div key={product.id} className="product-card-container" style={{ width: '191px', flex: '0 0 auto' }}>
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
