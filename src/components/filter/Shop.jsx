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
import { ref, onValue } from "firebase/database";
import { database } from "../../firebase";

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
        dispatch(changePageName("Shop"));

        const dbRef = ref(database, "popularProducts");
        onValue(dbRef, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                setProducts(Object.values(data));
                setLoading(false);
            } else {
                setProducts([]);
                setLoading(false);
            }
        }, (error) => {
            console.error("Error fetching data from Firebase:", error);
            setProducts([]);
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
        dispatch(selectProduct(productData)); 
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
            <img src={`${process.env.PUBLIC_URL}/imgs/decor/decor5.png`} alt="decor" className="decor4" />
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
