// src/components/Payment.jsx
import React from "react";
import "./Payment.css";

function Payment() {
  return (
    <div className="payment-page-wrapper">
      <div className="payment-card">
        <div className="payment-logo">
          <img
            src="/logo.png"
            alt="Averiqo Technologies"
          />
        </div>

        <h1 className="payment-title">
          Complete Your Payment
        </h1>

        <p className="payment-subtitle">
          Scan the QR Code below using any UPI application to complete your
          payment securely.
        </p>

        <div className="qr-wrapper">
          <img
            src="/QrCode.jpeg"
            alt="Razorpay QR"
            className="qr-code"
          />
        </div>

        <div className="payment-apps">
          <h3 className="payment-apps-title">
            Accepted Payment Apps
          </h3>

          <div className="payment-apps-list">
            <span className="payment-app-item">
              <span className="app-icon">📱</span> Google Pay
            </span>
            <span className="payment-app-item">
              <span className="app-icon">📱</span> PhonePe
            </span>
            <span className="payment-app-item">
              <span className="app-icon">🏦</span> Paytm
            </span>
            <span className="payment-app-item">
              <span className="app-icon">🇮🇳</span> BHIM
            </span>
            <span className="payment-app-item">
              <span className="app-icon">✨</span> Any UPI App
            </span>
          </div>
        </div>

        <div className="instructions">
          <h3 className="instructions-title">Payment Instructions</h3>

          <ol className="instructions-list">
            <li>Open any UPI application.</li>
            <li>Scan the QR Code.</li>
            <li>Enter the payment amount.</li>
            <li>Complete the payment.</li>
            <li>Send us the payment screenshot.</li>
          </ol>
        </div>

        <a
          href="https://wa.me/919334991688"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
            alt="WhatsApp" 
            className="whatsapp-icon"
          />
          Send Payment Screenshot
        </a>

        <div className="payment-footer">
          <p>
            Payments are securely processed through <strong>Razorpay</strong>.
          </p>
          <div className="razorpay-badge">
            <span className="shield">✓</span>
            Secured by Razorpay
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;