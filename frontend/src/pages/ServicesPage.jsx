import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import Footer from "../components/Footer";

import Vehicles from "../components/Vehicles"; // ✅ FIXED
import Services from "../components/Services";

import banner from "../assets/service-banner.png";

function ServicesPage() {
  return (
    <>
      <Navbar />

      <HeroBanner
        title="Our Services"
        subtitle="We provide safe, comfortable and affordable travel solutions for every journey."
        image={banner}
        // titleClass="text-yellow-400"
      />

      <Services />
      <Vehicles />

      <Footer />
    </>
  );
}

export default ServicesPage;