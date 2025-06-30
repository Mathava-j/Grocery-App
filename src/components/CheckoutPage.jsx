import React, { useState } from 'react';
import './CheckoutPage.css';
import { FiCheckCircle } from 'react-icons/fi';

export default function CheckoutPage({ cartItems, onReturnHome }) {
  const [showToast, setShowToast] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'cash'
  });

  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0).toFixed(2);
  const discount = cartItems.reduce((sum, item) => sum + item.quantity * (item.originalPrice - item.price), 0).toFixed(2);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // Validate form
    if (!customerDetails.name || !customerDetails.email || !customerDetails.phone || !customerDetails.address) {
      alert('Please fill all required fields');
      return;
    }
    
    // In a real app, you would send this to your backend
    console.log('Order placed with details:', { customerDetails, cartItems });
    setOrderPlaced(true);
  };

  const handleConfirmOrder = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      onReturnHome(); // Return to home after toast disappears
    }, 3000);
  };

  if (orderPlaced) {
    return (
      <div className="checkout-page">
        <h2>Order Confirmation</h2>
        <div className="order-summary">
          <h3>Customer Details</h3>
          <div className="customer-details">
            <p><strong>Name:</strong> {customerDetails.name}</p>
            <p><strong>Email:</strong> {customerDetails.email}</p>
            <p><strong>Phone:</strong> {customerDetails.phone}</p>
            <p><strong>Address:</strong> {customerDetails.address}</p>
            <p><strong>Payment Method:</strong> {customerDetails.paymentMethod === 'cash' ? 'Cash on Delivery' : 'Online Payment'}</p>
          </div>

          <h3>Order Summary</h3>
          <div className="checkout-items">
            {cartItems.map(item => (
              <div className="checkout-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="details">
                  <h4>{item.name}</h4>
                  <p>{item.weight}</p>
                  <p>Qty: {item.quantity}</p>
                </div>
                <div className="price">
                  <div className="current-price">₹{(item.price * item.quantity).toFixed(2)}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="checkout-summary">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{totalPrice}</span>
            </div>
            <div className="summary-row discount">
              <span>Discount</span>
              <span>-₹{discount}</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </div>
          </div>

          <div className="checkout-actions">
            <button className="confirm-order-btn" onClick={handleConfirmOrder}>
              Confirm Order
            </button>
            <button className="edit-order-btn" onClick={() => setOrderPlaced(false)}>
              Edit Details
            </button>
          </div>
        </div>

        {showToast && (
          <div className="toast-message">
            <FiCheckCircle className="toast-icon" />
            <span>Order placed successfully!</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <form onSubmit={handlePlaceOrder}>
        <div className="customer-details-form">
          <h3>Customer Information</h3>
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={customerDetails.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={customerDetails.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={customerDetails.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Delivery Address *</label>
            <textarea
              id="address"
              name="address"
              value={customerDetails.address}
              onChange={handleInputChange}
              required
            />
          </div>

          <h3>Payment Method</h3>
          <div className="payment-methods">
            <label className="payment-option">
              <input
                type="radio"
                name="paymentMethod"
                value="cash"
                checked={customerDetails.paymentMethod === 'cash'}
                onChange={handleInputChange}
              />
              Cash on Delivery
            </label>
            <label className="payment-option">
              <input
                type="radio"
                name="paymentMethod"
                value="online"
                checked={customerDetails.paymentMethod === 'online'}
                onChange={handleInputChange}
              />
              Online Payment
            </label>
          </div>
        </div>

        <div className="order-summary-section">
          <h3>Order Summary</h3>
          <div className="checkout-items">
            {cartItems.map(item => (
              <div className="checkout-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="details">
                  <h4>{item.name}</h4>
                  <p>{item.weight}</p>
                  <p>Qty: {item.quantity}</p>
                </div>
                <div className="price">
                  <div className="current-price">₹{(item.price * item.quantity).toFixed(2)}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="checkout-summary">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{totalPrice}</span>
            </div>
            <div className="summary-row discount">
              <span>Discount</span>
              <span>-₹{discount}</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </div>
          </div>
        </div>

        <div className="checkout-actions">
          <button type="submit" className="place-order-btn">
            Proceed to Order Confirmation
          </button>
          <button type="button" className="return-btn" onClick={onReturnHome}>
            Return Home
          </button>
        </div>
      </form>
    </div>
  );
}