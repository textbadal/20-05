import React from 'react';
import './Career.css'; // Make sure to create a CSS file for styling
import { FaUsers, FaRocket, FaLaptopCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const jobOpenings = [
  {
    title: 'Frontend Developer',
    location: 'Remote / Bengaluru',
    type: 'Full-Time',
    requirements: ['ReactJS', 'CSS3', 'Responsive Design'],
  },
  {
    title: 'UI/UX Designer',
    location: 'Remote',
    type: 'Contract',
    requirements: ['Figma', 'Adobe XD', 'Design Thinking'],
  },
  {
    title: 'Digital Marketing Executive',
    location: 'Delhi',
    type: 'Full-Time',
    requirements: ['SEO', 'Google Ads', 'Content Strategy'],
  },
];

const Career = () => {
  return (
    <div className="career-page">
      {/* Hero Section */}
      <section className="career-hero">
        <div className="container">
          <h1>Join Our Team</h1>
          <p>We’re building something amazing. Be part of our story.</p>
          <Link to="/contact" className="apply-btn">Apply Now</Link>
        </div>
      </section>

      {/* Culture Section */}
      <section className="career-culture container">
        <h2>Why Work With Us?</h2>
        <div className="culture-highlights">
          <div className="culture-box">
            <FaUsers size={40} color="#00bcd4" />
            <h4>Collaborative Team</h4>
            <p>Work with passionate and talented professionals in a team-driven environment.</p>
          </div>
          <div className="culture-box">
            <FaRocket size={40} color="#ff9800" />
            <h4>Growth Opportunities</h4>
            <p>We invest in your learning and provide career advancement at every step.</p>
          </div>
          <div className="culture-box">
            <FaLaptopCode size={40} color="#4caf50" />
            <h4>Innovative Projects</h4>
            <p>Build solutions for real-world business challenges across industries.</p>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="career-openings container">
        <h2>Current Openings</h2>
        <div className="job-listings">
          {jobOpenings.map((job, index) => (
            <div className="job-card" key={index}>
              <h3>{job.title}</h3>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Type:</strong> {job.type}</p>
              <p><strong>Skills Required:</strong></p>
              <ul>
                {job.requirements.map((req, i) => (
                  <li key={i}>✅ {req}</li>
                ))}
              </ul>
              <Link to="/contact" className="apply-btn">Apply Now</Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="career-cta">
        <div className="container">
          <h2>Didn’t find your role?</h2>
          <p>We’re always looking for fresh talent. Send us your resume and we’ll get in touch!</p>
          <Link to="/contact" className="apply-btn">Submit Resume</Link>
        </div>
      </section>
    </div>
  );
};

export default Career;
