import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Home from "./Home";
import TermsAndConditions from "./sections/TermsAndConditions";
import PrivacyPolicy from "./sections/PrivacyPolicy";
import ScrollToTop from "./sections/ScrollToTop";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        {/* Ensures page scroll resets on navigation */}
        <ScrollToTop />

        <Routes>
          {/* Homepage */}
          <Route path="/" element={<Home />} />

          {/* Legal Pages (Trust Signals) */}
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />

          {/* Future SEO Pages (add later)
              <Route path="/technical-seo" element={<TechnicalSEO />} />
              <Route path="/seo-audit" element={<SEOAudit />} />
              <Route path="/local-seo" element={<LocalSEO />} />
          */}
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
