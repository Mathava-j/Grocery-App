import React from 'react';
import './Sidebar.css';

export default function Sidebar({ setSelectedCategory, setSortBy }) {
  const categories = [
    { value: 'All', label: 'All Products' },
    { value: 'Fruits', label: 'Fruits' },
    { value: 'Vegetables', label: 'Vegetables' }
  ];

  const sortOptions = [
    { value: 'default', label: 'Default' },
    { value: 'price-low-to-high', label: 'Price: Low to High' },
    { value: 'price-high-to-low', label: 'Price: High to Low' }
  ];

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <h4>
          <span className="icon">📋</span>
          Categories
        </h4>
        <select onChange={handleCategoryChange}>
          {categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
      </div>

      <div className="sidebar-section">
        <h4>
          <span className="icon">🔃</span>
          Sort By
        </h4>
        <select onChange={handleSortChange}>
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}