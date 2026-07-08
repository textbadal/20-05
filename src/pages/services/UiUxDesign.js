import React, { useState } from 'react';

const CAPABILITIES = [
  {
    id: 1,
    title: 'Behavioral Flow & Journey Mapping',
    description: 'Diagnosing system logic loops, isolating user drops, and blueprinting interactive information maps before implementing styling.',
    tag: 'UX Logic',
    metric: 'User Friction Audited'
  },
  {
    id: 2,
    title: 'High-Density Design Systems',
    description: 'Constructing robust, componentized visual design ecosystems inside Figma with tokenized layouts ready for developer compilation.',
    tag: 'UI Toolkit',
    metric: 'Pixel-Perfect Handover'
  },
  {
    id: 3,
    title: 'High-Fidelity Interaction Motion',
    description: 'Injecting physics-based micro-interactions and transitional animations to simulate production-grade application environments.',
    tag: 'Prototypes',
    metric: '1:1 Real feel'
  },
  {
    id: 4,
    title: 'SaaS Dashboard Diagnostics',
    description: 'Specialized information architecture refactoring to simplify deep analytical data matrices into accessible dashboard viewports.',
    tag: 'Data Architecture',
    metric: 'Cognitive Load Reduction'
  }
];

const DESIGN_PROCESS = [
  { phase: 'Phase 01', name: 'Deconstruct & Hypothesize', desc: 'Isolating workflow vulnerabilities, parsing user persona patterns, and establishing strict design goals.' },
  { phase: 'Phase 02', name: 'Iterate & Componentize', desc: 'Rapid gray-box structural testing changing rapidly into standardized layout systems.' },
  { phase: 'Phase 03', name: 'Figma Token Delivery', desc: 'Assembling systematic developer handoff packages complete with reactive auto-layouts and variable styles.' }
];

export default function UiUxDesign() {
  const [formData, setFormData] = useState({ name: '', link: '', email: '', details: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Design Blueprint Briefing Received:', formData);
    setSubmitted(true);
    setFormData({ name: '', link: '', email: '', details: '' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-slate-950">
      <div className="bg-gradient-to-r from-cyan-950 via-slate-900 to-indigo-950 border-b border-cyan-500/20 py-2 text-center text-xs font-mono tracking-widest text-cyan-400">
        [ INTEGRATED AGENCY MODULE // INTERACTIVE SYSTEM DESIGN DIVISION ]
      </div>

      <header className="relative overflow-hidden py-28 px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
        <div className="relative max-w-4xl mx-auto z-10">
          <span className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span> Form Follows Optimization
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Systematic UI Engineering. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">Human-Centric UX.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            We engineer high-fidelity user interfaces and predictable interactive paradigms, combining human spatial habits with aesthetic elegance.
          </p>
          <a href="#intake" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-cyan-500/10 transition duration-300 inline-block font-mono text-sm tracking-wide">
            Launch Product Discovery
          </a>
        </div>
      </header>

      <section className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-900">
        <div className="text-center md:text-left md:flex justify-between items-end mb-16">
          <div>
            <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">// Capability Metrics</h2>
            <p className="text-3xl font-bold text-white tracking-tight">Interface Engineering Scope</p>
          </div>
          <p className="text-slate-400 max-w-sm mt-4 md:mt-0 text-sm">Mitigating friction points and driving engagement metrics through data-backed layout strategies.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAPABILITIES.map((cap) => (
            <div key={cap.id} className="bg-slate-900/60 p-8 rounded-2xl border border-slate-900 hover:border-cyan-500/30 transition duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-400">{cap.tag}</span>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/40 px-2.5 py-1 rounded border border-cyan-800/30">{cap.metric}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{cap.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">{cap.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900/30 border-t border-b border-slate-900 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">// Handoff Architecture</h2>
            <p className="text-2xl font-bold text-white">The Creative Handoff Pipeline</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {DESIGN_PROCESS.map((proc, idx) => (
              <div key={idx} className="border-t border-slate-800 pt-6">
                <div className="text-xs font-mono text-neutral-500 mb-2 uppercase">{proc.phase}</div>
                <h3 className="text-lg font-bold text-white mb-2">{proc.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{proc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="intake" className="py-20 px-6 max-w-3xl mx-auto">
        <div className="bg-slate-900/80 p-8 md:p-12 rounded-3xl border border-slate-800 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Initiate Interaction Matrix Scope</h2>
          <p className="text-slate-400 mb-8 text-sm md:text-base">Share product vectors, active wireframe schemas, or platform design guidelines to align scope.</p>
          {submitted ? (
            <div className="bg-cyan-950/40 text-cyan-400 p-6 rounded-2xl border border-cyan-900 text-center font-mono text-sm">✨ Creative pipeline initialized. Our system interaction director will coordinate wireframe audits.</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Product Lead Champion</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition font-mono text-sm" placeholder="E.g., Julian Vance" />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Active Interface URL (Optional)</label>
                  <input type="url" name="link" value={formData.link} onChange={handleChange} className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition font-mono text-sm" placeholder="https://app.interface.net" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Secure Communications Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition font-mono text-sm" placeholder="julian@interface.net" />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">UX Intent & Component Mandates</label>
                <textarea name="details" value={formData.details} onChange={handleChange} required rows="4" className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition font-mono text-sm leading-relaxed" placeholder="Detail preferred interface rules, typography patterns, or high-intent behavioral goals..."></textarea>
              </div>
              <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-4 rounded-xl transition duration-300 font-mono text-xs uppercase tracking-widest mt-2">Transmit Design Directives</button>
            </form>
          )}
        </div>
      </section>

      
    </div>
  );
}