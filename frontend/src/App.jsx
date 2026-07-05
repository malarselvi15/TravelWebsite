import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import TariffPage from "./pages/TariffPage";
import PackagesPage from "./pages/PackagesPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
     <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/tariff" element={<TariffPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;