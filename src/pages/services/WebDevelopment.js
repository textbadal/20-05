// src/pages/services/WebDevelopment.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './WebDevelopment.css';

export default function WebDevelopment() {
  return (
    <div className="service-detail-page">
      <div className="container">
        <motion.h1 
          className="service-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Web Development
        </motion.h1>

        <motion.p 
          className="service-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          We specialize in creating fast, scalable, and modern websites for startups and businesses.
        </motion.p>

        <motion.div 
          className="service-features"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2>What We Offer</h2>
          <ul>
            <li>🌐 Responsive Design</li>
            <li>⚙️ Custom CMS Integration</li>
            <li>🛒 E-Commerce Platforms</li>
            <li>🚀 SEO Optimized Development</li>
            <li>🔒 Security & Performance</li>
          </ul>
        </motion.div>

        <motion.div 
          className="cta-box"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3>Need a powerful website for your business?</h3>
          <Link to="/contact" className="cta-button">
            Get in Touch →
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
