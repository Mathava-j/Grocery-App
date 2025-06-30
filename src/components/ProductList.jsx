import React from 'react';
import './ProductList.css';
import Sidebar from './Sidebar';

export default function ProductList({ 
  products, 
  cartItems, 
  addToCart,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy
}) {
  const getQty = (id) => cartItems.find(item => item.id === id)?.quantity || 0;

  return (
    <div className="product-section">
      <div className="sidebar-area">
        <Sidebar 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>
      <div className="grid-area">
        {products.map(product => {
          const quantity = getQty(product.id);

          return (
            <div className="product-card" key={product.id}>
              <div className="image-wrapper">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.weight}</p>
              </div>

              <div className="price-cart-row">
                <div className="price-block">
                  <div className="original-price">₹{product.originalPrice}</div>
                  <div className="actual-price">₹{product.price}</div>
                </div>

                <div className="cart-block">
                  {quantity === 0 ? (
                    <button
                      className="add-cart-btn"
                      onClick={() => addToCart(product, 1)}
                    >
                      🛒 Cart
                    </button>
                  ) : (
                    <div className="qty-controls">
                      <button onClick={() => addToCart(product, -1)}>-</button>
                      <span>{quantity}</span>
                      <button onClick={() => addToCart(product, 1)}>+</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}