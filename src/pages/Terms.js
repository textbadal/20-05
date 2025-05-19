import React from "react";
import "./Terms.css";

const Terms = () => {
  return (
    <div className="terms-container">
      <div className="terms-content">
        <h1>Terms & Conditions</h1>
        <p>Last updated: April 16, 2025</p>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using our services at <strong>Averiqo</strong>,
            including our website, digital products, or consultation offerings,
            you agree to be bound by these Terms & Conditions. If you do not
            agree, please do not use our services.
          </p>
        </section>

        <section>
          <h2>2. Services</h2>
          <p>
            We provide digital solutions such as web development, UI/UX design,
            app development, business consulting, and digital marketing. All
            services are subject to availability and may change at our
            discretion.
          </p>
        </section>

        <section>
          <h2>3. Client Responsibilities</h2>
          <ul>
            <li>Provide accurate project requirements and deadlines.</li>
            <li>Communicate any changes or feedback in a timely manner.</li>
            <li>Make payments as agreed upon in the proposal or invoice.</li>
          </ul>
        </section>

        <section>
          <h2>4. Intellectual Property</h2>
          <p>
            All content, designs, and source code created by Averiqo remain our
            intellectual property unless otherwise agreed upon in writing. You
            may not reproduce or redistribute our materials without permission.
          </p>
        </section>

        <section>
          <h2>5. Payments & Refunds</h2>
          <p>
            Payments are to be made as per the terms in our proposal or invoice.
            Refunds are not applicable once the service has been partially or
            fully delivered, unless explicitly agreed upon.
          </p>
        </section>

        <section>
          <h2>6. Termination</h2>
          <p>
            We reserve the right to suspend or terminate services at any time
            for violation of terms, non-payment, or misconduct. Clients may also
            terminate a project with written notice (terms will apply).
          </p>
        </section>

        <section>
          <h2>7. Limitation of Liability</h2>
          <p>
            We are not liable for any indirect or consequential damages arising
            out of the use or inability to use our services, including but not
            limited to lost profits, data, or opportunities.
          </p>
        </section>

        <section>
          <h2>8. Modifications</h2>
          <p>
            Averiqo reserves the right to update these Terms & Conditions at any
            time without prior notice. It is your responsibility to review them
            periodically.
          </p>
        </section>

        <section>
          <h2>9. Governing Law</h2>
          <p>
            These Terms shall be governed in accordance with the laws of India.
            Any disputes will be handled in the jurisdiction of Purnea, Bihar.
          </p>
        </section>

        <section>
          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about these Terms & Conditions, please
            contact us at: <br />
            <strong>Email:</strong> contact@averiqo.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
