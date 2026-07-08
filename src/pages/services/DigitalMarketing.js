import React, { useState } from 'react';

// Mock data for digital marketing services
const MARKETING_SERVICES = [
  {
    id: 1,
    title: 'Search Engine Optimization (SEO)',
    description: 'Grow your organic traffic and dominate search rankings with data-driven keyword strategies and technical on-page optimization.',
    icon: '📈'
  },
  {
    id: 2,
    title: 'Pay-Per-Click Advertising (PPC)',
    description: 'Get immediate visibility and high-quality leads through targeted Google Ads and social media ad campaigns (Meta, LinkedIn).',
    icon: '🎯'
  },
  {
    id: 3,
    title: 'Social Media Management',
    description: 'Build an active, loyal community. We handle content creation, scheduling, and community engagement across all major platforms.',
    icon: '📱'
  },
  {
    id: 4,
    title: 'Content & Email Marketing',
    description: 'Nurture leads and convert subscribers with compelling blog posts, copy, and automated email funnel workflows.',
    icon: '✉️'
  }
];

// Mock data for agency performance metrics
const METRICS = [
  { value: '250%+', label: 'Average ROI Increase' },
  { value: '$12M+', label: 'Ad Spend Managed' },
  { value: '50M+', label: 'Impressions Generated' },
  { value: '98%', label: 'Client Retention Rate' }
];

export default function DigitalMarketing() {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', budget: '', goal: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Marketing Lead Captured:', formData);
    setSubmitted(true);
    setFormData({ name: '', company: '', email: '', budget: '', goal: '' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="bg-purple-600 text-purple-100 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
            Drive Traffic & Revenue
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mt-4 mb-6">
            Scale Your Brand Fast.
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-2xl mx-auto mb-8">
            Data-backed digital marketing strategies designed to outsmart your competition and maximize your ROI.
          </p>
          <a 
            href="#audit" 
            className="bg-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-yellow-300 transition duration-300"
          >
            Claim Your Free Marketing Audit
          </a>
        </div>
      </header>

      {/* Metrics / Social Proof Section */}
      <section className="bg-indigo-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {METRICS.map((metric, index) => (
            <div key={index}>
              <div className="text-3xl md:text-5xl font-extrabold text-yellow-400 mb-2">{metric.value}</div>
              <div className="text-sm md:text-base text-indigo-200">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Marketing Services */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Growth Channels</h2>
          <p className="text-gray-600 max-w-xl mx-auto">We don't believe in guesswork. We use comprehensive omni-channel marketing campaigns to hit your business targets.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MARKETING_SERVICES.map((service) => (
            <div key={service.id} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-purple-300 transition duration-300">
              <div className="text-4xl mb-4 bg-white w-14 h-14 flex items-center justify-center rounded-xl shadow-sm">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lead Capture / Audit Form */}
      <section id="audit" className="bg-gray-50 py-20 px-6">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
          <h2 className="text-3xl font-bold text-center mb-2">Get a Custom Marketing Plan</h2>
          <p className="text-gray-600 text-center mb-8">
            Let our experts analyze your digital footprint. Receive a tailored growth roadmap completely free.
          </p>

          {submitted ? (
            <div className="bg-purple-50 text-purple-800 p-6 rounded-xl text-center font-medium border border-purple-200">
              📈 Growth strategy unlocked! Check your email inbox. Our team will contact you shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition"
                    placeholder="Acme Corp"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Work Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition"
                  placeholder="jane@company.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Monthly Marketing Budget</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition bg-white"
                  >
                    <option value="">Select a range...</option>
                    <option value="under-2k">Under $2,000</option>
                    <option value="2k-5k">$2,000 - $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-plus">$10,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Primary Growth Goal</label>
                  <select
                    name="goal"
                    value={formData.goal}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition bg-white"
                  >
                    <option value="">Select your priority...</option>
                    <option value="leads">Generate More Leads</option>
                    <option value="sales">Increase E-Commerce Sales</option>
                    <option value="brand">Build Brand Awareness</option>
                    <option value="seo">Improve Organic Rankings</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl shadow-md transition duration-300 text-center mt-4"
              >
                Analyze My Brand
              </button>
            </form>
          )}
        </div>
      </section>

      
    </div>
  );
}