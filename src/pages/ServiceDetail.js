import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICE_CATEGORIES } from '../data/servicesData';
import { ArrowLeft, Cpu, KanbanSquare, PackageOpen } from 'lucide-react';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { id } = useParams();
  const service = SERVICE_CATEGORIES.find(s => s.id === id);

  if (!service) {
    return (
      <div className="service-detail-error">
        <h2>Service not found</h2>
        <Link to="/services" className="back-link">Return to Services</Link>
      </div>
    );
  }

  const { Icon, title, description, details } = service;

  return (
    <main className="service-detail-wrapper">
      <div className="service-detail-hero">
        <Link to="/services" className="back-link">
          <ArrowLeft size={20} /> Back to Services
        </Link>
        <div className="hero-icon-container">
          <Icon size={48} className="hero-icon" />
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="service-detail-container">
        <div className="service-detail-content">
          <section className="detail-section">
            <div className="section-header">
              <Cpu size={24} className="section-icon" />
              <h2>{details.techLabel}</h2>
            </div>
            <div className="tech-tags">
              {details.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
          </section>

          <section className="detail-section">
            <div className="section-header">
              <KanbanSquare size={24} className="section-icon" />
              <h2>Operational Process</h2>
            </div>
            <ol className="process-list">
              {details.process.map((step, idx) => (
                <li key={idx}>
                  <div className="step-number">{(idx + 1).toString().padStart(2, '0')}</div>
                  <div className="step-text">{step}</div>
                </li>
              ))}
            </ol>
          </section>

          <section className="detail-section">
            <div className="section-header">
              <PackageOpen size={24} className="section-icon" />
              <h2>Deliverables</h2>
            </div>
            <ul className="deliverables-list">
              {details.deliverables.map((item, idx) => (
                <li key={idx}>
                  <div className="bullet"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="service-detail-cta">
          <h2>Ready to get started?</h2>
          <p>Contact our experts to discuss how we can help you achieve your goals.</p>
          <Link to="/contact" className="cta-btn primary">Request a Quote</Link>
        </div>
      </div>
    </main>
  );
};

export default ServiceDetail;
