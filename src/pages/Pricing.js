import React, { useState } from 'react';
import './Pricing.css';
import { FaCheckCircle, FaChevronDown } from 'react-icons/fa';

// Pricing plans data
const pricingPlans = [
  {
    title: 'Basic',
    price: '$19/month',
    features: ['Responsive Website', 'Up to 5 Pages', 'Basic SEO', 'Email Support'],
  },
  {
    title: 'Pro',
    price: '$49/month',
    features: ['Responsive Website', 'Up to 15 Pages', 'Advanced SEO', 'Priority Email Support', 'Custom Features'],
  },
  {
    title: 'Enterprise',
    price: '$99/month',
    features: ['Responsive Website', 'Unlimited Pages', 'Advanced SEO', 'Phone & Email Support', 'Custom Development'],
  },
];

const faqs = [
  {
    question: "What is included in the Basic Plan?",
    answer: "The Basic Plan includes a responsive website with up to 5 pages, basic SEO, and email support.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Absolutely! You can upgrade at any time based on your growing needs.",
  },
  {
    question: "Do you offer custom features?",
    answer: "Yes, we provide custom features tailored to your business. Contact us to discuss your needs.",
  },
  {
    question: "Is there any hidden cost?",
    answer: "No, we maintain complete transparency in our pricing with no hidden charges.",
  },
];

const Pricing = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="pricing-section">
      <div className="container">
        <h2 className="pricing-heading">Our Pricing Plans</h2>
        
        <div className="pricing-cards">
          {pricingPlans.map((plan, index) => (
            <div className="pricing-card" key={index}>
              <h3>{plan.title}</h3>
              <p className="price">{plan.price}</p>
              <ul className="features-list">
                {plan.features.map((feature, i) => (
                  <li key={i}><FaCheckCircle /> {feature}</li>
                ))}
              </ul>
              <button className="cta-button">Choose Plan</button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <h2 className="faq-heading">Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'open' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <span>{faq.question}</span>
                <FaChevronDown className={`faq-icon ${activeIndex === index ? 'rotate' : ''}`} />
              </div>
              <div className="faq-answer">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
