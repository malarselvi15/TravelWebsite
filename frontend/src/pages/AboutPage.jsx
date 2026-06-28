import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import About from "../components/About";
import StatsSection from "../components/StatsSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";

import banner from "../assets/about-banner.webp";

function AboutPage() {
  return (
    <>
      <Navbar />

      <HeroBanner
        title="About Us"
        subtitle="Your trusted travel partner for luxury taxi services, airport transfers and unforgettable journeys."
        image={banner}
      />

      <About />

      <StatsSection />

      <WhyChooseUs />

      <Footer />
    </>
  );
}

export default AboutPage;