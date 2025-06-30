import React, { useState, useEffect } from 'react';
import './OfferCarousel.css';

const offers = [
  { 
    id: 1, 
    title: 'Express Delivery', 
    image: require('../assets/offers/offer1.jpg'),
    details: {
      description: 'Get your groceries delivered in 2 hours or less!',
      benefits: [
        'Delivery within 2 hours',
        'Priority handling of your order',
        'Real-time tracking',
        'No minimum order value'
      ],
      terms: 'Available in selected areas. Extra charges may apply for express delivery.',
      validUntil: 'Valid until December 31, 2025'
    }
  },
  { 
    id: 2, 
    title: 'Cash on Delivery', 
    image: require('../assets/offers/offer2.png'),
    details: {
      description: 'Pay when you receive your order - no advance payment needed!',
      benefits: [
        'No online payment required',
        'Pay in cash to delivery person',
        'Secure and convenient',
        'Available on all orders'
      ],
      terms: 'Exact change preferred. Digital payment also accepted at delivery.',
      validUntil: 'Always available'
    }
  },
  { 
    id: 3, 
    title: 'Gift Vouchers', 
    image: require('../assets/offers/offer3.jpg'),
    details: {
      description: 'Perfect gifts for your loved ones - grocery shopping made easy!',
      benefits: [
        'Available in ₹500, ₹1000, ₹2000 denominations',
        'Valid for 1 year from purchase',
        'Can be used for any products',
        'Digital delivery available'
      ],
      terms: 'Non-refundable. Cannot be exchanged for cash. One voucher per order.',
      validUntil: 'Valid for 1 year from purchase date'
    }
  },
  { 
    id: 4, 
    title: 'Fresh Items', 
    image: require('../assets/offers/offer4.jpg'),
    details: {
      description: 'Farm-fresh produce delivered to your doorstep daily!',
      benefits: [
        'Sourced directly from farmers',
        'Quality guarantee on all fresh items',
        'Delivered within 24 hours of harvest',
        'Free replacement if not satisfied'
      ],
      terms: 'Freshness guarantee applies to fruits, vegetables, and dairy products only.',
      validUntil: 'Ongoing offer'
    }
  },
  { 
    id: 5, 
    title: 'Secure Payment', 
    image: require('../assets/offers/offer5.png'),
    details: {
      description: '100% secure payment with multiple options for your convenience!',
      benefits: [
        'SSL encrypted transactions',
        'Multiple payment options (UPI, Cards, Wallets)',
        'Instant payment confirmation',
        'Refund protection guarantee'
      ],
      terms: 'All transactions are secured with bank-level encryption.',
      validUntil: 'Always available'
    }
  },
];

export default function OfferCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        // If we reach the end, go back to the beginning
        if (prev >= offers.length - 3) {
          return 0;
        }
        return prev + 1;
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoScrolling, offers.length]);

  const scrollLeft = () => {
    setIsAutoScrolling(false); // Stop auto-scroll when user interacts
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
    // Resume auto-scroll after 5 seconds of inactivity
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const scrollRight = () => {
    setIsAutoScrolling(false); // Stop auto-scroll when user interacts
    if (currentIndex < offers.length - 3) {
      setCurrentIndex(prev => prev + 1);
    }
    // Resume auto-scroll after 5 seconds of inactivity
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const handleOfferClick = (offer) => {
    setSelectedOffer(offer);
    setIsAutoScrolling(false); // Pause auto-scroll when modal opens
  };

  const closeModal = () => {
    setSelectedOffer(null);
    setIsAutoScrolling(true); // Resume auto-scroll when modal closes
  };

  // Pause auto-scroll on hover
  const handleMouseEnter = () => {
    setIsAutoScrolling(false);
  };

  const handleMouseLeave = () => {
    setIsAutoScrolling(true);
  };

  return (
    <>
      <div 
        className="offer-carousel-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="scroll-btn left" onClick={scrollLeft} disabled={currentIndex === 0}>
          ‹
        </button>

        <div className="carousel-window">
          <div
            className="offer-carousel"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {offers.map(offer => (
              <div 
                className="offer-card" 
                key={offer.id}
                onClick={() => handleOfferClick(offer)}
                style={{ cursor: 'pointer' }}
              >
                <img src={offer.image} alt={offer.title} />
                <p>{offer.title}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          className="scroll-btn right"
          onClick={scrollRight}
          disabled={currentIndex >= offers.length - 3}
        >
          ›
        </button>
        
        {/* Auto-scroll indicator dots */}
        <div className="carousel-indicators">
          {offers.slice(0, offers.length - 2).map((_, index) => (
            <div
              key={index}
              className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoScrolling(false);
                setTimeout(() => setIsAutoScrolling(true), 5000);
              }}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedOffer && (
        <div className="offer-modal-overlay" onClick={closeModal}>
          <div className="offer-modal" onClick={(e) => e.stopPropagation()}>
            <div className="offer-modal-header">
              <h2>{selectedOffer.title}</h2>
              <button className="close-btn" onClick={closeModal}>×</button>
            </div>
            
            <div className="offer-modal-content">
              <div className="offer-image-section">
                <img src={selectedOffer.image} alt={selectedOffer.title} />
              </div>
              
              <div className="offer-details-section">
                <p className="offer-description">{selectedOffer.details.description}</p>
                
                <div className="offer-benefits">
                  <h3>Benefits:</h3>
                  <ul>
                    {selectedOffer.details.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="offer-terms">
                  <h3>Terms & Conditions:</h3>
                  <p>{selectedOffer.details.terms}</p>
                </div>
                
                <div className="offer-validity">
                  <strong>Valid Until: {selectedOffer.details.validUntil}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}