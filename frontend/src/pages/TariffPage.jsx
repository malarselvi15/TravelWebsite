import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import Footer from "../components/Footer";

import TariffTabs from "../components/tariff/TariffTabs";
import TermsAndConditions from "../components/tariff/TermsAndConditions";

import banner from "../assets/service-banner.png";

function TariffPage() {
  return (
    <>
      {/* ✅ SAME HEADER STYLE AS SERVICES PAGE */}
      <Navbar />

      <HeroBanner
        title="Tariff Plans"
        subtitle="Transparent pricing for local, outstation and kilometer-based taxi services."
        image={banner}
        titleClass="text-yellow-400"
      />

      {/* CONTENT */}
      <TariffTabs />

      <TermsAndConditions />

      <Footer />
    </>
  );
}

export default TariffPage;