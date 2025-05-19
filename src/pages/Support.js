import React from "react";
import "./Support.css";

const Support = () => {
  return (
    <div className="support-container">
      <div className="support-hero">
        <h1>Support & Help Center</h1>
        <p>Need assistance? We're here to help you every step of the way.</p>
      </div>

      <div className="support-contact">
        <h2>Contact Support</h2>
        <p>If you have any questions or need support, please reach out via:</p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:support@averiqo.com">support@averiqo.com</a></li>
          <li><strong>Phone:</strong> <a href="tel:+919876543210">+91 98765 43210</a></li>
          <li><strong>Business Hours:</strong> Monday – Friday, 9 AM – 6 PM IST</li>
        </ul>
      </div>

      <div className="support-form-section">
        <h2>Submit a Support Request</h2>
        <form className="support-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Describe your issue..." required></textarea>
          <button type="submit">Send Request</button>
        </form>
      </div>

      <div className="support-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h4>How long does it take to get a response?</h4>
          <p>We usually respond within 24 hours during working days.</p>
        </div>
        <div className="faq-item">
          <h4>Can I get help with billing?</h4>
          <p>Yes, our billing team can assist you with invoices, refunds, and pricing queries.</p>
        </div>
        <div className="faq-item">
          <h4>Where can I track my project progress?</h4>
          <p>You can track ongoing projects via your client dashboard or by contacting our team directly.</p>
        </div>
      </div>
    </div>
  );
};

export default Support;
