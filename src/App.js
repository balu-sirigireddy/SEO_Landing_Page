import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import TermsAndConditions from "./sections/TermsAndConditions";
import PrivacyPolicy from "./sections/PrivacyPolicy";
import ScrollToTop from "./sections/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* ADD THIS LINE */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
