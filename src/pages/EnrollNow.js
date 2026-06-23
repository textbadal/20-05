import React, { useState } from 'react';
import './EnrollNow.css'; // Make sure to create this CSS file

const EnrollNow = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    selectedCourse: '',
    experience: 'beginner',
    agreeToTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const courses = [
    { id: 'fsd', name: 'Full-Stack Software Engineering' },
    { id: 'ds-ai', name: 'Data Science & Artificial Intelligence' },
    { id: 'ui-ux', name: 'UI/UX Advanced Product Design' },
    { id: 'cloud', name: 'Cloud Architecture & DevOps' }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API request timeout
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      // Reset form on success
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        selectedCourse: '',
        experience: 'beginner',
        agreeToTerms: false
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="enroll-page">
      <div className="bg-elements">
        <div className="bg-dot dot-1"></div>
        <div className="bg-dot dot-2"></div>
      </div>

      <div className="container">
        <div className="hero-section">
          <div className="hero-badge">
            <span className="badge-icon">🚀</span> Limited cohorts available
          </div>
          <h1>Advance Your Career</h1>
          <p>Secure your seat in our upcoming cohort. Fill out the application details below to begin your transformation journey.</p>
        </div>

        <div className="enroll-card">
          <div className="card-inner">
            <div className="card-icon-wrapper">
              <span className="card-main-icon">📝</span>
            </div>
            <h2 className="card-title">Application Form</h2>
            <p className="card-subtitle">Complete your enrollment details</p>

            {submitStatus === 'success' && (
              <div className="alert alert-success">
                <span className="alert-icon">✨</span>
                <div>
                  <h4>Enrollment Initiated!</h4>
                  <p>Check your email inbox for your next onboarding instructions and syllabus drop.</p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="alert alert-error">
                <span className="alert-icon">⚠️</span>
                <div>
                  <h4>Submission Failed</h4>
                  <p>Please check your network configuration and try again.</p>
                </div>
              </div>
            )}

            <form className="enroll-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="input-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="email">Work Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="selectedCourse">Target Discipline</label>
                  <select
                    id="selectedCourse"
                    name="selectedCourse"
                    required
                    value={formData.selectedCourse}
                    onChange={handleChange}
                  >
                    <option value="" disabled hidden>Select your program...</option>
                    {courses.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="input-group radio-section">
                <label>Current Experience Level</label>
                <div className="radio-group">
                  {['beginner', 'intermediate', 'advanced'].map((level) => (
                    <label key={level} className={`radio-label ${formData.experience === level ? 'active' : ''}`}>
                      <input
                        type="radio"
                        name="experience"
                        value={level}
                        checked={formData.experience === level}
                        onChange={handleChange}
                      />
                      <span>{level.charAt(0).toUpperCase() + level.slice(1)}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    required
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                  />
                  <span className="checkbox-text">
                    I agree to the cohort terms of service, academic integrity policies, and community guidelines.
                  </span>
                </label>
              </div>

              <button 
                type="submit" 
                className="enroll-submit-btn" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div> Processing Application...
                  </>
                ) : (
                  'Submit Application & Lock Seat'
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="trust-footer">
          🔒 SSL Encrypted Checkout & Application Pipeline
        </div>
      </div>
    </div>
  );
};

export default EnrollNow;