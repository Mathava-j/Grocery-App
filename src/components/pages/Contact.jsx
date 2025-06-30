import React from 'react';
import './Conatct.css';

export default function Contact() {
  return (
    <div className="contact-page">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-subtitle">We'd love to hear from you! Send us your questions or feedback below.</p>

      <div className="contact-content">
        <form className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your full name" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" required />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Your message..." rows="5" required></textarea>
          </div>

          <button type="submit" className="submit-button">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Reach Us At</h3>
          <p><strong>Email:</strong> support@pickbazar.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Address:</strong> 12A, Park Avenue, Chennai, TN - 600001</p>
        </div>
      </div>
    </div>
  );
}
