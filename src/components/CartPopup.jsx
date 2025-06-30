import React, { useEffect } from 'react';
import './CartPopup.css';

export default function CartPopup({ cartItems, toggleCart, addToCart, proceedToCheckout }) {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.classList.contains('cart-popup-overlay')) {
        toggleCart();
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [toggleCart]);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0).toFixed(2);
  const discount = cartItems.reduce((sum, item) => sum + item.quantity * (item.originalPrice - item.price), 0).toFixed(2);

  return (
    <div className="cart-popup-overlay">
      <div className="cart-popup">
        <div className="cart-header">
          <h2>Your Cart ({totalItems} {totalItems === 1 ? 'item' : 'items'})</h2>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <button className="continue-shopping" onClick={toggleCart}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-name">{item.name}</div>
                  <div className="item-weight">{item.weight}</div>
                  <div className="item-controls">
                    <div className="qty-selector">
                      <button onClick={() => addToCart(item, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => addToCart(item, 1)}>+</button>
                    </div>
                    <div className="price-section">
                      <div className="current-price">{(item.price * item.quantity).toFixed(2)}</div>
                      <div className="original-price">{(item.originalPrice * item.quantity).toFixed(2)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>{totalPrice}</span>
              </div>
              <div className="summary-row discount">
                <span>Discount</span>
                <span>-{discount}</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>{totalPrice}</span>
              </div>
            </div>

            <button className="checkout-btn" onClick={proceedToCheckout}>
              Proceed to Checkout
            </button>
            <button className="continue-shopping" onClick={toggleCart}>
              Continue Shopping
            </button>
          </>
        )}
      </div>
    </div>
  );
}