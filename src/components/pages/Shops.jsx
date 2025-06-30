import React from 'react';
import './Shops.css';

const shops = [
  {
    id: 1,
    name: 'PickDaily Supermarket',
    description: 'Best for everyday grocery and daily essentials.',
    location: 'Chennai, Tamil Nadu',
    rating: 4.5
  },
  {
    id: 2,
    name: 'Healthy Mart',
    description: 'Fresh organic produce and healthy snacks.',
    location: 'Coimbatore, Tamil Nadu',
    rating: 4.7
  },
  {
    id: 3,
    name: 'FreshCo',
    description: 'Affordable and fresh products for your home.',
    location: 'Madurai, Tamil Nadu',
    rating: 4.3
  },
  {
    id: 4,
    name: 'Daily Needs',
    description: 'Quick delivery of essentials and household goods.',
    location: 'Trichy, Tamil Nadu',
    rating: 4.4
  },
  {
    id: 5,
    name: 'Green Basket',
    description: 'Locally sourced organic fruits and vegetables.',
    location: 'Salem, Tamil Nadu',
    rating: 4.6
  },
  {
    id: 6,
    name: 'QuickPick',
    description: 'Fast delivery of groceries and household items.',
    location: 'Erode, Tamil Nadu',
    rating: 4.2
  },
  {
    id: 7,
    name: 'UrbanFresh',
    description: 'Modern shop for fresh produce and dairy.',
    location: 'Tirunelveli, Tamil Nadu',
    rating: 4.8
  },
  {
    id: 8,
    name: 'SuperGro',
    description: 'All-in-one grocery and essentials hub.',
    location: 'Vellore, Tamil Nadu',
    rating: 4.1
  }
];

export default function Shops() {
  return (
    <div className="shops-page">
      <h2 className="shops-title">Our Partner Shops</h2>
      <p className="shops-subtitle">Explore stores that deliver fresh groceries and essentials to your doorstep.</p>
      <div className="shops-grid">
        {shops.map(shop => (
          <div key={shop.id} className="shop-card">
            <div className="shop-details">
              <h3>{shop.name}</h3>
              <p className="shop-desc">{shop.description}</p>
              <p className="shop-location">📍 {shop.location}</p>
              <p className="shop-rating">⭐ {shop.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
