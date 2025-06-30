import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import OfferCarousel from './components/OfferCarousel';
import ProductList from './components/ProductList';
import CartPopup from './components/CartPopup';
import CheckoutPage from './components/CheckoutPage';

import Shops from './components/pages/Shops';
import Offers from './components/pages/Offers';
import Contact from './components/pages/Contact';
import AboutUs from './components/pages/AboutUs';
import FAQ from './components/pages/FAQ';
import Terms from './components/pages/Terms';

import productsData from './data/products.js';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const addToCart = (product, quantityChange = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        const newQty = existing.quantity + quantityChange;
        if (newQty <= 0) return prev.filter(item => item.id !== product.id);
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: newQty } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const clearCart = () => setCartItems([]);

  const proceedToCheckout = () => {
    setIsCheckout(true);
    setIsCartOpen(false);
  };

  const returnHome = () => {
    setIsCheckout(false);
    clearCart();
  };

  const getFilteredProducts = () => {
    let filtered = [...productsData];

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product =>
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (sortBy === 'price-low-to-high') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high-to-low') {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  };

  return (
    <Router>
      <div className="App">
        <Header
          cartItems={cartItems}
          toggleCart={toggleCart}
          setSelectedCategory={setSelectedCategory}
        />

        <Routes>
          <Route
            path="/"
            element={
              !isCheckout ? (
                <>
                  <SearchBar onSearch={handleSearch} />
                  <OfferCarousel />
                  <ProductList
                    products={getFilteredProducts()}
                    cartItems={cartItems}
                    addToCart={addToCart}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                  />
                </>
              ) : (
                <CheckoutPage
                  cartItems={cartItems}
                  onReturnHome={returnHome}
                />
              )
            }
          />
          <Route path="/shops" element={<Shops />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>

        {isCartOpen && (
          <CartPopup
            cartItems={cartItems}
            toggleCart={toggleCart}
            addToCart={addToCart}
            proceedToCheckout={proceedToCheckout}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
