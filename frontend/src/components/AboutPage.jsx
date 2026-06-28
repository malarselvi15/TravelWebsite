import Navbar from "./Navbar";
import HeroBanner from "./HeroBanner";
import About from "./About";
import StatsSection from "./StatsSection";
import WhyChooseUs from "./WhyChooseUs";
import Footer from "./Footer";

import banner from "../assets/about-banner.webp";

function AboutPage() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Banner */}
      <HeroBanner
        title="About Us"
        subtitle="Your trusted travel partner for luxury taxi services, airport transfers and unforgettable journeys."
        image={banner}
      />

      {/* About Section */}
      <About />

      {/* Statistics */}
      <StatsSection />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default AboutPage;