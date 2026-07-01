import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import Footer from "../components/Footer";

import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

import banner from "../assets/service-banner.png";

function ContactPage() {
  return (
    <>
      <Navbar />

      <HeroBanner
        title="Contact Us"
        subtitle="We are available 24/7 for bookings and support"
        image={banner}
        titleClass="text-yellow-400"
      />

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 px-6 py-16">
        <ContactForm />
        <ContactInfo />
      </div>

      <Footer />
    </>
  );
}

export default ContactPage;