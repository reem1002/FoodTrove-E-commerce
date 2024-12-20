
import './App.css';
import Header from './components/home page/header/Header';
import Footer from './components/home page/footer/Footer.jsx';
import Home from './pages/Home.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './pages/Product.jsx';
import Cart from './components/cart page/cartComponent.jsx';
import Shop from './components/filter/Shop.jsx';
import Checkout from './components/checkout/Checkout.jsx';
import AboutUs from './components/about/AboutUs.jsx';
import Faq from './components/faq/Faq.jsx';



function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/faq" element={<Faq />} />
          
          {/* <Route path="/products" element={<Products />} />
          
          <Route path="/cart" element={<Cart />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
