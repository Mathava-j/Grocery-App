import React from 'react';
import './CartTag.css';
import { FiShoppingBag } from 'react-icons/fi';

export default function CartTag({ cartItems }) {
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems
    .reduce((sum, item) => sum + item.quantity * item.price, 0)
    .toFixed(2);

  return (
    <div className="cart-tag-container">
      <div className="cart-badge">
        <FiShoppingBag className="cart-badge-icon" />
        <span className="cart-badge-items">{totalCount} Item{totalCount !== 1 ? 's' : ''}</span>
        <span className="cart-badge-price">${totalPrice}</span>
      </div>
    </div>
  );
}
