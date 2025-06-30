import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import productList from '../data/products';

export default function Header({ cartItems, toggleCart, setSelectedCategory }) {
  const [isGroceryOpen, setGroceryOpen] = useState(false);
  const [isPagesOpen, setPagesOpen] = useState(false);
  const [availableCategories, setAvailableCategories] = useState([]);

  const groceryRef = useRef(null);
  const pagesRef = useRef(null);

  useEffect(() => {
    const categories = [...new Set(productList.map(p => p.category))];
    const formatted = categories.map(c => c.charAt(0).toUpperCase() + c.slice(1).toLowerCase());
    setAvailableCategories(['All Items', ...formatted.filter((c, i, arr) => arr.indexOf(c) === i)]);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (groceryRef.current && !groceryRef.current.contains(event.target)) {
        setGroceryOpen(false);
      }
      if (pagesRef.current && !pagesRef.current.contains(event.target)) {
        setPagesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === 'All Items' ? 'All' : category);
    setGroceryOpen(false);
  };

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0).toFixed(2);

  return (
    <header className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">PickBazar</Link>

        <div className="dropdown-container" ref={groceryRef}>
          <button className="category-dropdown" onClick={() => setGroceryOpen(!isGroceryOpen)}>
            Grocery <span className="arrow">▼</span>
          </button>
          {isGroceryOpen && (
            <div className="dropdown-menu">
              {availableCategories.map((category, idx) => (
                <div
                  key={idx}
                  className="dropdown-item"
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="navbar-right">
        <Link to="/shops" className="simple-link">Shops</Link>
        <Link to="/offers" className="simple-link">Offers</Link>
        <Link to="/contact" className="simple-link">Contact</Link>

        <div className="dropdown-container" ref={pagesRef}>
          <button className="category-dropdown" onClick={() => setPagesOpen(!isPagesOpen)}>
            Pages <span className="arrow">▼</span>
          </button>
          {isPagesOpen && (
            <div className="dropdown-menu right-dropdown">
              <Link to="/about" className="dropdown-item">About Us</Link>
              <Link to="/faq" className="dropdown-item">FAQ</Link>
              <Link to="/terms" className="dropdown-item">Terms & Conditions</Link>
            </div>
          )}
        </div>

        <button className="cart-summary" onClick={toggleCart}>
          🛒 {totalCount} - ₹{totalPrice}
        </button>
      </div>
    </header>
  );
}
