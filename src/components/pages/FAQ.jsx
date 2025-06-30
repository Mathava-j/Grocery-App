import React from 'react';
import './FAQ.css';

export default function FAQ() {
  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>

      <div className="faq-item">
        <h4>1. How do I place an order?</h4>
        <p>Browse products, add them to your cart, and proceed to checkout. It's that simple!</p>
      </div>

      <div className="faq-item">
        <h4>2. What are the delivery charges?</h4>
        <p>Standard delivery is free for orders above ₹500. Express delivery charges vary by location.</p>
      </div>

      <div className="faq-item">
        <h4>3. Can I return a product?</h4>
        <p>Yes, we offer a 3-day return window for eligible products. Contact support for assistance.</p>
      </div>

      <div className="faq-item">
        <h4>4. What payment methods do you accept?</h4>
        <p>We accept UPI, credit/debit cards, net banking, and cash on delivery.</p>
      </div>
    </div>
  );
}
