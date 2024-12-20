import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../../redux/slices/productSlice";
import { Link } from "react-router-dom";
import { ClipLoader } from 'react-spinners';

const fallbackProducts = [
    {
        id: 1,
        title: "Fresh organic villa farm lemon 500gm pack",
        category: "Snack",
        price: 28.85,
        oldPrice: 32.8,
        brand: "NestFood",
        rating: 4.0,
        label: "Hot",
        image: "/imgs/popularsection/product1.png",
        description: "Fresh organic lemons, perfect for cooking or making lemon water.",
        images: ["/imgs/popularsection/product1.png", "/imgs/popularsection/product1-alt.png"],
        flavour: "Citrus",
        dietType: "Vegan",
        weight: "500g",
        speciality: "No pesticides",
        info: "Packed with vitamin C and antioxidants.",
        items: 1,
        sizes: ["250g", "500g", "1kg"],
    },
    {
        id: 2,
        title: "Best snacks with hazel nut pack 200gm",
        category: "Hodo Foods",
        price: 52.85,
        oldPrice: 55.8,
        brand: "Stouffer",
        rating: 3.5,
        label: "Sale",
        image: "/imgs/popularsection/product2.png",
        description: "A delightful combination of crunchy snacks with hazelnuts.",
        images: ["/imgs/popularsection/product2.png", "/imgs/popularsection/product2-alt.png"],
        flavour: "Hazelnut",
        dietType: "Gluten Free",
        weight: "200g",
        speciality: "No added sugar",
        info: "Perfect for a midday snack or as an ingredient in baking.",
        items: 1,
        sizes: ["200g", "500g"],
    },
    {
        id: 3,
        title: "Organic fresh venila farm watermelon 5kg",
        category: "Snack",
        price: 48.85,
        oldPrice: 52.8,
        brand: "StarKist",
        rating: 4.0,
        label: "New",
        image: "/imgs/popularsection/product3.png",
        description: "Sweet, juicy organic watermelon, perfect for hot summer days.",
        images: ["/imgs/popularsection/product3.png", "/imgs/popularsection/product3-alt.png"],
        flavour: "Sweet",
        dietType: "Vegan",
        weight: "5kg",
        speciality: "Organic",
        info: "Freshly picked, high in vitamins and minerals.",
        items: 1,
        sizes: ["5kg", "10kg"],
    },
    {
        id: 4,
        title: "Fresh organic apple 1kg simla marmine",
        category: "Vegetables",
        price: 17.85,
        oldPrice: 19.8,
        brand: "NestFood",
        rating: 4.0,
        label: "",
        image: "/imgs/popularsection/product4.png",
        description: "Fresh organic apples with a sweet and tart flavor.",
        images: ["/imgs/popularsection/product4.png", "/imgs/popularsection/product4-alt.png"],
        flavour: "Sweet & Tart",
        dietType: "Organic",
        weight: "1kg",
        speciality: "High in fiber",
        info: "Perfect for snacking, baking, or making fresh juice.",
        items: 1,
        sizes: ["500g", "1kg"],
    },
    {
        id: 5,
        title: "Blue Diamond Almonds Lightly Salted Vegetables",
        category: "Pet Foods",
        price: 23.85,
        oldPrice: 25.8,
        brand: "NestFood",
        rating: 4.0,
        label: "-14%",
        image: "/imgs/popularsection/product5.png",
        description: "Lightly salted almonds, a perfect snack for pets and humans.",
        images: ["/imgs/popularsection/product5.png", "/imgs/popularsection/product5-alt.png"],
        flavour: "Salted",
        dietType: "Gluten Free",
        weight: "200g",
        speciality: "No preservatives",
        info: "Rich in protein and healthy fats, perfect for energy.",
        items: 1,
        sizes: ["200g", "500g"],
    },
    {
        id: 6,
        title: "Chobani Complete Vanilla Greek Yogurt",
        category: "Hodo Foods",
        price: 54.85,
        oldPrice: 0,
        brand: "NestFood",
        rating: 4.0,
        label: "",
        image: "/imgs/popularsection/product6.png",
        description: "Creamy vanilla Greek yogurt, a perfect addition to breakfast.",
        images: ["/imgs/popularsection/product6.png", "/imgs/popularsection/product6-alt.png"],
        flavour: "Vanilla",
        dietType: "Low Fat",
        weight: "500g",
        speciality: "High protein",
        info: "Probiotic-rich yogurt to support gut health.",
        items: 1,
        sizes: ["500g", "1kg"],
    },
    {
        id: 7,
        title: "Canada Dry Ginger Ale - 2 L Bottle - 200ml - 400g",
        category: "Meats",
        price: 32.85,
        oldPrice: 0,
        brand: "NestFood",
        rating: 4.0,
        label: "",
        image: "/imgs/popularsection/product7.png",
        description: "Refreshing ginger ale with a hint of spice.",
        images: ["/imgs/popularsection/product7.png", "/imgs/popularsection/product7-alt.png"],
        flavour: "Ginger",
        dietType: "Non-Alcoholic",
        weight: "2L",
        speciality: "No artificial flavors",
        info: "Great for mixing with spirits or enjoying on its own.",
        items: 1,
        sizes: ["200ml", "500ml", "2L"],
    },
    {
        id: 8,
        title: "Encore Seafoods Stuffed Alaskan Salmon",
        category: "Snack",
        price: 53.85,
        oldPrice: 55.8,
        brand: "NestFood",
        rating: 4.0,
        label: "Sale",
        image: "/imgs/popularsection/product8.png",
        description: "Stuffed Alaskan salmon, a rich and flavorful seafood dish.",
        images: ["/imgs/popularsection/product8.png", "/imgs/popularsection/product8-alt.png"],
        flavour: "Seafood",
        dietType: "Gluten Free",
        weight: "500g",
        speciality: "Wild-caught",
        info: "High in Omega-3 and protein, a healthy choice.",
        items: 1,
        sizes: ["500g", "1kg"],
    },
    {
        id: 9,
        title: "Gorton's Beer Battered Fish Fillets with soft paper",
        category: "Coffes",
        price: 23.85,
        oldPrice: 0,
        brand: "Old El Paso",
        rating: 4.0,
        label: "Hot",
        image: "/imgs/popularsection/product9.png",
        description: "Crispy beer-battered fish fillets, perfect for any meal.",
        images: ["/imgs/popularsection/product9.png", "/imgs/popularsection/product9-alt.png"],
        flavour: "Beer-battered",
        dietType: "Non-Vegan",
        weight: "400g",
        speciality: "High protein",
        info: "Great for pairing with fries or in sandwiches.",
        items: 1,
        sizes: ["400g", "1kg"],
    },
    {
        id: 10,
        title: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
        category: "Cream",
        price: 22.85,
        oldPrice: 24.6,
        brand: "Tyson",
        rating: 2.0,
        label: "",
        image: "/imgs/popularsection/product10.png",
        description: "Caramel cone ice cream with a twist of savory ketchup.",
        images: ["/imgs/popularsection/product10.png", "/imgs/popularsection/product10-alt.png"],
        flavour: "Caramel",
        dietType: "Non-Vegan",
        weight: "500g",
        speciality: "Gluten Free",
        info: "Sweet and savory combination of flavors.",
        items: 1,
        sizes: ["500g", "1kg"],
    },
];


const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);
    const maxProducts = 10;
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        fetch("http://localhost:5000/popularProducts")
            .then((response) => response.json())
            .then((data) => {
                dispatch(setProducts(data));
                setLoading(false); 
            })
            .catch((error) => {
                dispatch(setProducts(fallbackProducts));
                setLoading(false); 
            });
    }, [dispatch]);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="my-5">
            <div className="headerProducts">
                <h2>Popular Products</h2>
                <div className="filter-tabs d-flex align-items-center justify-content-center">
                    <Link to="/shop">
                        <button className="btn lightGreen" onClick={handleScrollToTop}>More...</button>
                    </Link>
                </div>
            </div>

            <div className="products-container">
                {loading ?
                    <div className="loading-spinner">
                        <ClipLoader color="#3BB77E" />
                    </div>

                    : (
                        products.slice(0, maxProducts).map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))
                    )}
            </div>
        </div>
    );
};

export default Products;
