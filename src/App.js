import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Career from './pages/Career';
import Terms from './pages/Terms';
import Support from './pages/Support';
import Pricing from './pages/Pricing';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Footer from './components/Footer';
import WebDevelopment from './pages/services/WebDevelopment';
import UiUxDesign from './pages/services/UiUxDesign';
import DigitalMarketing from './pages/services/DigitalMarketing';
import BusinessConsulting from './pages/services/BusinessConsulting';

import Projects from './pages/Projects';

import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

import LiveChat from './components/LiveChat';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/services" element={<Services />} />
  <Route path="/projects" element={<Projects />} />
 
  <Route path="/contact" element={<Contact />} />
  <Route path="/career" element={<Career />} />
  <Route path="/terms" element={<Terms />} />
  <Route path="/support" element={<Support />} />
  <Route path="/pricing" element={<Pricing />} />
  <Route path="/privacypolicy" element={<PrivacyPolicy />} />
  <Route path="/services/web-development" element={<WebDevelopment />} />
  <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
  <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
  <Route path="/services/business-consulting" element={<BusinessConsulting />} />
</Routes>

<LiveChat />

<WhatsAppButton />

<ScrollToTop />

      <Footer />
    </Router>
  );
}

export default App;
