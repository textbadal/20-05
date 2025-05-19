import React, { useState } from 'react';
import './FloatingCTA.css';
import { Link } from 'react-router-dom';

const FloatingCTA = () => {
  const [visible, setVisible] = useState(true);

  const closeCTA = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="floating-cta">
      <div className="cta-content">
        <h4>🚀 Boost Your Brand</h4>
        <p>Start your ad campaign today for just ₹1000!</p>
        <Link to="/contact" className="cta-btn">Start Now</Link>
      </div>
      <button className="cta-close" onClick={closeCTA} aria-label="Close CTA">×</button>
    </div>
  );
};

export default FloatingCTA;
