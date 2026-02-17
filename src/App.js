import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import TermsAndConditions from "./sections/TermsAndConditions";
import PrivacyPolicy from "./sections/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
