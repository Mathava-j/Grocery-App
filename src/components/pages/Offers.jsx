import React, { useState } from 'react';
import './Offers.css';

const offers = [
  {
    id: 1,
    title: 'Express Delivery',
    image: require('../../assets/offers/offer1.jpg'),
    details: {
      description: 'Get your groceries delivered in 2 hours or less!',
      benefits: [
        'Delivery within 2 hours',
        'Priority handling of your order',
        'Real-time tracking',
        'No minimum order value',
      ],
      terms: 'Available in selected areas. Extra charges may apply for express delivery.',
      validUntil: 'Valid until December 31, 2025',
    },
  },
  {
    id: 2,
    title: 'Cash on Delivery',
    image: require('../../assets/offers/offer2.png'),
    details: {
      description: 'Pay when you receive your order - no advance payment needed!',
      benefits: [
        'No online payment required',
        'Pay in cash to delivery person',
        'Secure and convenient',
        'Available on all orders',
      ],
      terms: 'Exact change preferred. Digital payment also accepted at delivery.',
      validUntil: 'Always available',
    },
  },
  {
    id: 3,
    title: 'Gift Vouchers',
    image: require('../../assets/offers/offer3.jpg'),
    details: {
      description: 'Perfect gifts for your loved ones - grocery shopping made easy!',
      benefits: [
        'Available in ₹500, ₹1000, ₹2000 denominations',
        'Valid for 1 year from purchase',
        'Can be used for any products',
        'Digital delivery available',
      ],
      terms: 'Non-refundable. Cannot be exchanged for cash. One voucher per order.',
      validUntil: 'Valid for 1 year from purchase date',
    },
  },
  {
    id: 4,
    title: 'Fresh Items',
    image: require('../../assets/offers/offer4.jpg'),
    details: {
      description: 'Farm-fresh produce delivered to your doorstep daily!',
      benefits: [
        'Sourced directly from farmers',
        'Quality guarantee on all fresh items',
        'Delivered within 24 hours of harvest',
        'Free replacement if not satisfied',
      ],
      terms: 'Freshness guarantee applies to fruits, vegetables, and dairy products only.',
      validUntil: 'Ongoing offer',
    },
  },
  {
    id: 5,
    title: 'Secure Payment',
    image: require('../../assets/offers/offer5.png'),
    details: {
      description: '100% secure payment with multiple options for your convenience!',
      benefits: [
        'SSL encrypted transactions',
        'Multiple payment options (UPI, Cards, Wallets)',
        'Instant payment confirmation',
        'Refund protection guarantee',
      ],
      terms: 'All transactions are secured with bank-level encryption.',
      validUntil: 'Always available',
    },
  },
];

export default function Offers() {
  const [selectedOffer, setSelectedOffer] = useState(null);

  return (
    <div className="offers-page">
      <h2 className="offers-title">Available Offers</h2>

      <div className="offers-grid">
        {offers.map(offer => (
          <div key={offer.id} className="offer-card" onClick={() => setSelectedOffer(offer)}>
            <img src={offer.image} alt={offer.title} />
            <h3>{offer.title}</h3>
            <p className="short-desc">{offer.details.description}</p>
            <button className="view-btn">View Details</button>
          </div>
        ))}
      </div>

      {selectedOffer && (
        <div className="offer-modal-overlay" onClick={() => setSelectedOffer(null)}>
          <div className="offer-modal" onClick={e => e.stopPropagation()}>
            <div className="offer-modal-header">
              <h2>{selectedOffer.title}</h2>
              <button className="close-btn" onClick={() => setSelectedOffer(null)}>×</button>
            </div>

            <div className="offer-modal-content">
              <img src={selectedOffer.image} alt={selectedOffer.title} className="modal-img" />

              <p className="offer-description">{selectedOffer.details.description}</p>

              <div className="offer-benefits">
                <h4>Benefits:</h4>
                <ul>
                  {selectedOffer.details.benefits.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>

              <p className="offer-terms"><strong>Terms:</strong> {selectedOffer.details.terms}</p>
              <p className="offer-validity"><strong>Valid Until:</strong> {selectedOffer.details.validUntil}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
