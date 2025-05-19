// src/pages/services/UiUxDesign.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './UiUxDesign.css';

export default function UiUxDesign() {
  return (
    <div className="service-detail-page">
      <div className="container">
        <motion.h1 
          className="service-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          UI/UX Design
        </motion.h1>

        <motion.p 
          className="service-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          We design intuitive and delightful digital experiences to boost user engagement and brand loyalty.
        </motion.p>

        <motion.div 
          className="service-features"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2>What We Offer</h2>
          <ul>
            <li>🔍 User Research & Personas</li>
            <li>🧩 Wireframing & Prototyping</li>
            <li>🎨 UI Design Systems & Branding</li>
            <li>📱 Mobile-First & Responsive Designs</li>
            <li>🧪 Usability Testing</li>
          </ul>
        </motion.div>

        <motion.div 
          className="cta-box"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3>Want to elevate your user experience?</h3>
          <Link to="/contact" className="cta-button">
            Contact Us →
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
