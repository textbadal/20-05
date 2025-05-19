// src/pages/services/DigitalMarketing.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './DigitalMarketing.css';

export default function DigitalMarketing() {
  return (
    <div className="service-detail-page">
      <div className="container">
        <motion.h1 
          className="service-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Digital Marketing
        </motion.h1>

        <motion.p 
          className="service-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          We help you grow your audience, improve visibility, and convert leads using modern digital strategies.
        </motion.p>

        <motion.div 
          className="service-features"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2>Our Expertise</h2>
          <ul>
            <li>🔎 Search Engine Optimization (SEO)</li>
            <li>📢 Pay-Per-Click Advertising (PPC)</li>
            <li>📱 Social Media Marketing</li>
            <li>📈 Performance Analytics & Reports</li>
            <li>📝 Content Strategy & Blogging</li>
          </ul>
        </motion.div>

        <motion.div 
          className="cta-box"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3>Let us boost your online presence!</h3>
          <Link to="/contact" className="cta-button">
            Contact Us →
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
