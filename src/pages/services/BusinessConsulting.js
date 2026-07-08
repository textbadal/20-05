import React, { useState } from 'react';

// Mock data for business consulting services
const CONSULTING_SERVICES = [
  {
    id: 1,
    title: 'Strategic Corporate Planning',
    description: 'Develop long-term corporate roadmaps, define clear OKRs, and streamline market expansion strategies to scale sustainably.',
    icon: '📊'
  },
  {
    id: 2,
    title: 'Operational Excellence',
    description: 'Analyze workflows, eliminate operational bottlenecks, and implement modern automation to optimize your internal resource efficiency.',
    icon: '⚙️'
  },
  {
    id: 3,
    title: 'Financial Advisory & Capital',
    description: 'Structured cash flow analysis, profit-margin optimization, financial risk modeling, and fundraising readiness advice.',
    icon: '💼'
  },
  {
    id: 4,
    title: 'Change Management',
    description: 'Guide your organization smoothly through leadership transitions, mergers, acquisitions, or massive digital transformations.',
    icon: '🔄'
  }
];

// Mock data for the consulting methodology steps
const METHODOLOGY = [
  { step: '01', title: 'Discovery & Assessment', desc: 'We audit your financial history, company culture, and operational pipelines.' },
  { step: '02', title: 'Strategic Blueprinting', desc: 'Our advisors draft a granular, action-oriented strategy custom tailored to your data.' },
  { step: '03', title: 'Execution Support', desc: 'We don’t just leave a PDF. We work directly beside your executive team during implementation.' }
];

export default function BusinessConsulting() {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', revenue: '', inquiryType: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Consulting Consultation Request:', formData);
    setSubmitted(true);
    setFormData({ name: '', company: '', email: '', revenue: '', inquiryType: '' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white py-28 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="border border-amber-500 text-amber-400 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-md">
            Management & Advisory Services
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight mt-6 mb-6">
            Turn Business Complexity Into Executive Clarity
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            We partner with mid-market enterprises and ambitious startups to solve operational bottlenecks, optimize capital, and accelerate enterprise value.
          </p>
          <a 
            href="#schedule" 
            className="bg-amber-500 text-slate-950 font-bold px-8 py-4 rounded shadow-lg hover:bg-amber-400 transition duration-300"
          >
            Request an Executive Briefing
          </a>
        </div>
      </header>

      {/* Core Consulting Capabilities */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Areas of Practice</h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CONSULTING_SERVICES.map((service) => (
            <div key={service.id} className="bg-white p-8 rounded-lg shadow-sm border border-slate-200/60 hover:shadow-md transition duration-300">
              <div className="text-3xl mb-4 text-amber-600">{service.icon}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2 font-serif">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology Section */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Our Advisory Methodology</h2>
            <p className="text-slate-400 max-w-md mx-auto">A rigorous framework designed to drive clear accountability and measurable revenue milestones.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {METHODOLOGY.map((m, index) => (
              <div key={index} className="relative border-t border-slate-700 pt-6">
                <div className="text-4xl font-mono font-bold text-amber-500 mb-3">{m.step}</div>
                <h3 className="text-xl font-semibold mb-2 font-serif">{m.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Consultation Intake Form */}
      <section id="schedule" className="py-20 px-6 max-w-3xl mx-auto">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-xl border border-slate-200">
          <h2 className="text-3xl font-serif font-bold text-slate-900 text-center mb-2">Schedule a Confidential Evaluation</h2>
          <p className="text-slate-500 text-center mb-10 text-sm md:text-base">
            Initiate an exploratory assessment with a principal partner. Absolute operational confidentiality guaranteed.
          </p>

          {submitted ? (
            <div className="bg-emerald-50 text-emerald-800 p-6 rounded border border-emerald-200 text-center font-medium">
              💼 Consultation Registered. A Managing Partner will review your file and reach out to align schedules.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Principal Contact</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded focus:ring-1 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                    placeholder="E.g., Alexander Vance"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Corporate Entity</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded focus:ring-1 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                    placeholder="Vance Logistics Ltd"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Secure Business Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded focus:ring-1 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                  placeholder="vance@company.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Annual Revenue Range</label>
                  <select
                    name="revenue"
                    value={formData.revenue}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded focus:ring-1 focus:ring-amber-500 bg-white outline-none transition"
                  >
                    <option value="">Select Scale...</option>
                    <option value="sub-1m">Under $1M</option>
                    <option value="1m-10m">$1M - $10M</option>
                    <option value="10m-50m">$10M - $50M</option>
                    <option value="50m-plus">$50M+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Primary Advisory Objective</label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded focus:ring-1 focus:ring-amber-500 bg-white outline-none transition"
                  >
                    <option value="">Select Engagement...</option>
                    <option value="strategy">Corporate Turnaround Strategy</option>
                    <option value="operations">Process/Ops Restructuring</option>
                    <option value="finance">M&A / Capital Planning</option>
                    <option value="other">General Management Advisory</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded shadow-md transition duration-300 text-center uppercase tracking-widest text-xs mt-4"
              >
                Submit Consultation Request
              </button>
            </form>
          )}
        </div>
      </section>

      

    </div>
  );
}