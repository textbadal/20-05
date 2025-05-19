import React from "react";
import "./Privacy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <div className="privacy-content">
        <h1>Privacy Policy</h1>
        <p>Last updated: April 16, 2025</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            At <strong>Averiqo</strong>, we are committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, and safeguard your personal information when you visit our
            website or use our services.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, phone number, etc. provided through forms or contact pages.</li>
            <li><strong>Technical Data:</strong> IP address, browser type, operating system, and usage statistics.</li>
            <li><strong>Cookies:</strong> We use cookies to improve user experience and analyze website traffic.</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>To provide and manage our services.</li>
            <li>To respond to inquiries and provide support.</li>
            <li>To send marketing or promotional content (only if you opt-in).</li>
            <li>To improve website performance and security.</li>
          </ul>
        </section>

        <section>
          <h2>4. Sharing Your Information</h2>
          <p>
            We do not sell, rent, or trade your personal information. However, we may share data with
            trusted third parties who assist in operating our website or business, under confidentiality agreements.
          </p>
        </section>

        <section>
          <h2>5. Data Security</h2>
          <p>
            We take appropriate measures to secure your personal data from unauthorized access,
            disclosure, or destruction.
          </p>
        </section>

        <section>
          <h2>6. Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal information. If you wish
            to exercise these rights, please contact us.
          </p>
        </section>

        <section>
          <h2>7. Third-Party Links</h2>
          <p>
            Our website may contain links to external sites. We are not responsible for the content
            or privacy practices of those websites.
          </p>
        </section>

        <section>
          <h2>8. Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. Any changes will be posted on this page
            with an updated "Last updated" date.
          </p>
        </section>

        <section>
          <h2>9. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at: <br />
            <strong>Email:</strong> contact@averiqo.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
