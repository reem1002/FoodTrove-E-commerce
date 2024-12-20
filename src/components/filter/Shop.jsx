import React, { useEffect, useState } from "react";
import "./shop.css";
import { MdGridOn } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateCart } from "../../redux/slices/cart";
import { selectProduct } from "../../redux/slices/productSlice";
import { Link } from "react-router-dom";
import HeadingBar from "../heading bar/red-heading-bar";
import { changePageName } from "../../redux/slices/pageNameSlice";
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
const Shop = () => {

    const [products, setProducts] = useState([]);
    const { searchTerm, category } = useSelector((state) => state.filter);
    const [loading, setLoading] = useState(true);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filters, setFilters] = useState({
        brand: "",
        dietType: [],
        minPrice: 0,
        maxPrice: 1000, 
        minRating: "",
        category: category,
    });
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6; 
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.value);

    useEffect(() => {
        dispatch(changePageName("Shop"))
        fetch("http://localhost:5000/popularProducts")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setLoading(false); 
            })
            .catch((error) => {
                setProducts(fallbackProducts);
                setLoading(false); 
            });




    }, [dispatch]);

    useEffect(() => {
        if (!loading) {
            const filtered = products.filter((product) => {
                const matchesSearch =
                    !searchTerm ||
                    product.title.toLowerCase().includes(searchTerm.toLowerCase());

                const matchesCategory =
                    !category ||
                    product.category.toLowerCase() === category.toLowerCase();

                return matchesSearch && matchesCategory;
            });

            setFilteredProducts(filtered);
        }
    }, [searchTerm, category, products, loading]);

    const handleAddToCart = (product) => {
        const existingProduct = cart.find((item) => item.id === product.id);

        if (existingProduct) {
            dispatch(
                updateCart({
                    ...existingProduct,
                    quantity: existingProduct.quantity + 1,
                })
            );
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
                size: product.size || "",
                quantity: 1,
            };

            dispatch(addToCart(productData));
        }
    };

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
            quantity: item.quantity,
        };
        dispatch(selectProduct(productData)); // Dispatch the correct product data
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };


    const handleFilterChange = (e) => {
        const { name, value, checked } = e.target;
        if (name === "dietType") {
            setFilters((prev) => {
                const newDietTypes = checked
                    ? [...prev.dietType, value]
                    : prev.dietType.filter((item) => item !== value);
                return { ...prev, dietType: newDietTypes };
            });
        } else {
            setFilters((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    useEffect(() => {
        let filtered = products;

        if (filters.category) {
            filtered = filtered.filter(
                (product) =>
                    product.category &&
                    product.category.toLowerCase() === filters.category.toLowerCase()
            );
        }

        if (filters.brand) {
            filtered = filtered.filter((product) =>
                product.brand.toLowerCase().includes(filters.brand.toLowerCase())
            );
        }

        if (filters.dietType.length > 0) {
            filtered = filtered.filter((product) =>
                filters.dietType.some((diet) => product.dietType.toLowerCase().includes(diet.toLowerCase()))
            );
        }

        if (filters.minPrice || filters.minPrice === 0) {
            filtered = filtered.filter(
                (product) => product.price >= parseFloat(filters.minPrice)
            );
        }

        if (filters.maxPrice) {
            filtered = filtered.filter(
                (product) => product.price <= parseFloat(filters.maxPrice)
            );
        }

        if (filters.minRating) {
            filtered = filtered.filter(
                (product) => product.rating >= parseFloat(filters.minRating)
            );
        }

        setFilteredProducts(filtered);
        setCurrentPage(1);
    }, [filters, products]);


    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };


    return (
        <div className="wholepage">

            <div className="heading-bar">
                <HeadingBar />
            </div>

            <div className="product-page">

                <div className="sideMenu">
                    <select
                        name="brand"
                        className="sort-dropdown"
                        onChange={handleFilterChange}
                    >
                        <option value="">All brands</option>
                        <option value="NestFood">NestFood</option>
                        <option value="Stouffer">Stouffer</option>
                        <option value="StarKist">StarKist</option>
                        <option value="Old El Paso">Old El Paso</option>
                        <option value="Tyson">Tyson</option>
                    </select>

                    <div className="diet-type-checkboxes">
                        <p>Diet Type:</p>
                        <label>
                            <input
                                type="checkbox"
                                name="dietType"
                                value="Vegan"
                                checked={filters.dietType.includes("Vegan")}
                                onChange={handleFilterChange}
                            />
                            Vegan
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="dietType"
                                value="Gluten Free"
                                checked={filters.dietType.includes("Gluten Free")}
                                onChange={handleFilterChange}
                            />
                            Gluten Free
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="dietType"
                                value="Organic"
                                checked={filters.dietType.includes("Organic")}
                                onChange={handleFilterChange}
                            />
                            Organic
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="dietType"
                                value="Low Fat"
                                checked={filters.dietType.includes("Low Fat")}
                                onChange={handleFilterChange}
                            />
                            Low Fat
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="dietType"
                                value="Non-Vegan"
                                checked={filters.dietType.includes("Non-Vegan")}
                                onChange={handleFilterChange}
                            />
                            Non-Vegan
                        </label>
                    </div>

                    <div className="price-range">
                        <p>Price Range:</p>
                        <input
                            type="range"
                            name="minPrice"
                            min="0"
                            max="1000" // You can adjust this max value based on your product range
                            value={filters.minPrice}
                            onChange={handleFilterChange}
                            className="filter-range"
                        />
                        <input
                            type="range"
                            name="maxPrice"
                            min="0"
                            max="1000" // Same as above
                            value={filters.maxPrice}
                            onChange={handleFilterChange}
                            className="filter-range"
                        />
                        <div className="price-display">
                            <span>Min: ${filters.minPrice}</span>
                            <span>Max: ${filters.maxPrice}</span>
                        </div>
                    </div></div>
                {/* Filter Section */}
                <div className="main">
                    <div className="filter-section ">
                        <button className="filter-button"><MdGridOn /></button>
                        <span className="result-count">
                            We found {filteredProducts.length} items for you!
                        </span>
                        <div className="filter-controls">
                            <select
                                name="category"
                                className="sort-dropdown"
                                onChange={handleFilterChange}
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

                        </div>
                    </div>

                    {/* Product Grid */}
                    {
                        loading ? (
                            <div className="loading-spinner">
                                <ClipLoader color="#3BB77E" />
                            </div>
                        ) : (
                            <div className="product-grid">
                                {currentProducts.map((product) => (
                                    <div className="product-card" key={product.id}>
                                        <div className="image" style={{ position: 'relative', padding: "0 " }} >
                                            <img
                                                src={product.image || "https://via.placeholder.com/150"}
                                                alt={product.name}
                                                className="product-image"
                                            />

                                            <span className="icon" style={{
                                                position: 'absolute', cursor: 'pointer',
                                                bottom: '0px', right: '50%', transform: 'translateX(50%)', backgroundColor: "#fff", border: "1px solid #E9E9E9", padding: "5px", borderRadius: "47%"
                                            }} onClick={() => handleAddToCart(product)}>
                                                <MdOutlineShoppingBag

                                                    style={{
                                                        fontSize: '20px',
                                                        color: "#64B496"
                                                    }}
                                                    title="cart"



                                                /></span>
                                        </div>
                                        <Link
                                            to={`/product/${product.id}`}
                                            onClick={() => handleClick(product)} className="text-decoration-none">
                                            <h4 className="product-title mt-2" >{product.title}</h4>

                                        </Link>
                                        <p className="product-price">
                                            <span className="current-price">${product.price}</span>
                                            {product.oldPrice && (
                                                <span className="original-price">${product.oldPrice}</span>
                                            )}
                                        </p>
                                        <div className="rating">
                                            {"⭐".repeat(Math.round(product.rating))}{" "}
                                            <span className="review-count">
                                                ({product.rating || 0})
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )

                    }


                    {/* Pagination */}
                    <div className="pagination">
                        <button
                            className="pagination-button"
                            onClick={handlePreviousPage}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                className={`pagination-button ${currentPage === index + 1 ? "active" : ""}`}
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button
                            className="pagination-button"
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Shop;
