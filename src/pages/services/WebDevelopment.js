import React, { useState } from 'react';

const SERVICES = [
  {
    id: 1,
    title: 'Custom Web Applications',
    description: 'Tailor-made web applications built from scratch using React, Next.js, and high-performance Node.js architectures to align with enterprise workflows.',
    icon: '💻',
    metric: '< 1.2s Load Time'
  },
  {
    id: 2,
    title: 'E-Commerce Engines',
    description: 'High-converting online storefronts engineered with robust custom payment gateways, real-time inventory systems, and lightning-fast edge rendering.',
    icon: '🛒',
    metric: '99.99% Uptime SLA'
  },
  {
    id: 3,
    title: 'Headless CMS Frameworks',
    description: 'Decoupled systems using Strapi, Contentful, or Sanity, allowing your team to distribute content across web, mobile, and IoT seamlessly without touching infrastructure.',
    icon: '📝',
    metric: '100% Secure Architecture'
  },
  {
    id: 4,
    title: 'Performance Engineering',
    description: 'Deep optimization protocols targeting Google Core Web Vitals to elevate your search rankings and maximize visual rendering speeds.',
    icon: '⚡',
    metric: '100/100 Lighthouse Score'
  }
];

const TECH_STACK = ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'TypeScript', 'GraphQL', 'PostgreSQL', 'AWS Cloud'];

export default function WebDevelopment() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Web Development Lead:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-slate-950">
      <div className="bg-gradient-to-r from-cyan-950 via-slate-900 to-indigo-950 border-b border-cyan-500/20 py-2 text-center text-xs font-mono tracking-widest text-cyan-400">
        [ INTEGRATED AGENCY MODULE // ENGINEERING DIVISION ]
      </div>

      <header className="relative overflow-hidden py-28 px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
        <div className="relative max-w-4xl mx-auto z-10">
          <span className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span> Scalable Global Architecture
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Next-Generation <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">Web Engineering</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            We write clean, semantic, and highly optimized code to transform complex business infrastructure into elegant, high-speed digital products.
          </p>
          <a href="#intake" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-cyan-500/10 transition duration-300 inline-block font-mono text-sm tracking-wide">
            Initiate Project Scope
          </a>
        </div>
      </header>

      <section className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-900">
        <div className="text-center md:text-left md:flex justify-between items-end mb-16">
          <div>
            <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">// Core Specializations</h2>
            <p className="text-3xl font-bold text-white tracking-tight">Full-Stack Development Suite</p>
          </div>
          <p className="text-slate-400 max-w-sm mt-4 md:mt-0 text-sm">Deploying reliable software systems with strict test-driven development mechanisms.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-slate-900/60 p-8 rounded-2xl border border-slate-900 hover:border-cyan-500/30 transition duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <div className="text-3xl bg-slate-950 w-14 h-14 flex items-center justify-center rounded-xl border border-slate-800">{service.icon}</div>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/40 px-2.5 py-1 rounded border border-cyan-800/30">{service.metric}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900/30 border-t border-b border-slate-900 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-4">// System Infrastructure</h2>
          <p className="text-2xl font-bold text-white mb-8">Our Core Technology Stack</p>
          <div className="flex flex-wrap justify-center gap-3">
            {TECH_STACK.map((tech, index) => (
              <span key={index} className="bg-slate-900 text-slate-300 px-5 py-2 rounded-xl text-sm font-mono border border-slate-800">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="intake" className="py-20 px-6 max-w-3xl mx-auto">
        <div className="bg-slate-900/80 p-8 md:p-12 rounded-3xl border border-slate-800 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Request Architecture Proposal</h2>
          <p className="text-slate-400 mb-8 text-sm md:text-base">Provide details concerning your platform's scope, tech limitations, and anticipated traffic requirements below.</p>
          {submitted ? (
            <div className="bg-cyan-950/40 text-cyan-400 p-6 rounded-2xl border border-cyan-900 text-center font-mono text-sm">🚀 Infrastructure request locked into queue. Our systems architect will align with you directly.</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Lead Architect / Contact Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition font-mono text-sm" placeholder="E.g., David Chen" />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Corporate Destination Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition font-mono text-sm" placeholder="david@enterprise.io" />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Technical Requirements Overview</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows="4" className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition font-mono text-sm leading-relaxed" placeholder="Outline desired performance parameters, multi-tenant databases, or API integrations..."></textarea>
              </div>
              <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-4 rounded-xl transition duration-300 font-mono text-xs uppercase tracking-widest mt-2">Compile and Send Requirements</button>
            </form>
          )}
        </div>
      </section>

     
    </div>
  );
}