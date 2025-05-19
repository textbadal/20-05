// src/pages/services/BusinessConsulting.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './BusinessConsulting.css';

export default function BusinessConsulting() {
  return (
    <div className="service-detail-page">
      <div className="container">
        <motion.h1 
          className="service-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Business Consulting
        </motion.h1>

        <motion.p 
          className="service-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Turn your vision into strategy. We guide businesses with data-driven analysis and customized solutions.
        </motion.p>

        <motion.div 
          className="service-features"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2>What We Offer</h2>
          <ul>
            <li>📊 Market & Competitor Analysis</li>
            <li>🧩 Business Model Optimization</li>
            <li>🗺️ Strategy Planning & Execution</li>
            <li>💼 Financial Forecasting</li>
            <li>🔍 Operational Efficiency Review</li>
          </ul>
        </motion.div>

        <motion.div 
          className="cta-box"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3>Let’s build your business strategy together.</h3>
          <Link to="/contact" className="cta-button">
            Schedule a Free Call →
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
