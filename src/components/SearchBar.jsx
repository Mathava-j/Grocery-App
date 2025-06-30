import React, { useState } from 'react';
import './SearchBar.css';

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="searchbar-wrapper">
      <div className="searchbar-content">
        <h2 className="searchbar-title">Grocery Delivered in 90 Minutes</h2>
        <p className="searchbar-subtitle">
          Get your healthy foods & snacks delivered at your doorsteps all day every day
        </p>
        <form className="searchbar-form" onSubmit={handleSearch}>
          <input
            className="searchbar-input"
            type="text"
            placeholder="Search your products from here"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="searchbar-button" type="submit">
            <span className="search-icon">🔍</span> Search
          </button>
        </form>
      </div>
    </div>
  );
}