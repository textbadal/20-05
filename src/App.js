import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import LiveChat from "./components/LiveChat";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Internship from "./pages/Internship";
import CertificateVerification from "./pages/CertificateVerification";
import QuotationGenerator from "./pages/QuotationGenerator";
import Contact from "./pages/Contact";
import InternshipRegistration from "./pages/InternshipRegistration";
import Career from "./pages/Career";
import Terms from "./pages/Terms";
import Support from "./pages/Support";
import Pricing from "./pages/Pricing";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import WebDevelopment from "./pages/services/WebDevelopment";
import UiUxDesign from "./pages/services/UiUxDesign";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import BusinessConsulting from "./pages/services/BusinessConsulting";

import OfferLetterGenerator from "./components/OfferLetterGenerator";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/internship" element={<Internship />} />
          <Route
            path="/certificate-verification"
            element={<CertificateVerification />}
          />
          <Route
            path="/quotation-generator"
            element={<QuotationGenerator />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/internship-registration" element={<InternshipRegistration />} />
          <Route path="/career" element={<Career />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/support" element={<Support />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          <Route
            path="/services/web-development"
            element={<WebDevelopment />}
          />
          <Route
            path="/services/ui-ux-design"
            element={<UiUxDesign />}
          />
          <Route
            path="/services/digital-marketing"
            element={<DigitalMarketing />}
          />
          <Route
            path="/services/business-consulting"
            element={<BusinessConsulting />}
          />

          <Route
            path="/offer-letter"
            element={<OfferLetterGenerator />}
          />
        </Routes>

        <LiveChat />
        <WhatsAppButton />
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;