import React from 'react';
import './Terms.css';

export default function TermsAndConditions() {
  return (
    <div className="terms-container">
      <h2>Terms & Conditions</h2>

      <p>
        Welcome to PickBazar. By accessing or using our services, you agree to be bound by the following terms and conditions.
      </p>

      <h4>1. User Responsibilities</h4>
      <p>
        You agree to provide accurate account information and to use our platform lawfully.
      </p>

      <h4>2. Pricing and Payments</h4>
      <p>
        Prices are subject to change without notice. We ensure secure payment handling via encrypted channels.
      </p>

      <h4>3. Returns and Refunds</h4>
      <p>
        Returns must be initiated within 3 days of delivery. Refunds will be processed within 7 working days.
      </p>

      <h4>4. Changes to Terms</h4>
      <p>
        We reserve the right to update these terms at any time. Continued use of the site implies agreement to the updated terms.
      </p>
    </div>
  );
}
