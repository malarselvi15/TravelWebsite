import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

function ContactInfo() {
  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden h-full">

      {/* Header */}
      <div className="p-8 border-b border-gray-200">
        <span className="uppercase tracking-[4px] text-yellow-500 font-semibold">
          Contact Us
        </span>

        <h2 className="text-3xl font-bold text-gray-900 mt-2">
          Get In Touch
        </h2>

        <p className="text-gray-500 mt-3 leading-7">
          We're available 24/7 to assist you with taxi bookings, airport
          transfers, corporate travel, and outstation trips.
        </p>
      </div>

      {/* Contact Details */}
      <div className="p-8 space-y-6">

        {/* Phone */}
        <div className="flex items-start gap-4 pb-6 border-b border-gray-100">

          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
            <FaPhoneAlt className="text-yellow-500 text-lg" />
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">
              Call Us
            </h4>

            <a
              href="tel:+919876543210"
              className="text-gray-600 hover:text-yellow-500 transition"
            >
              +91 90432 94678 <br />
              +91 90431 94678
            </a>
          </div>

        </div>

        {/* WhatsApp */}
        <div className="flex items-start gap-4 pb-6 border-b border-gray-100">

          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
            <FaWhatsapp className="text-yellow-500 text-lg" />
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">
              WhatsApp
            </h4>

            <a
              href="https://wa.me/919043294678"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-yellow-500 transition"
            >
              Chat with us
            </a>
          </div>

        </div>

        {/* Email */}
        <div className="flex items-start gap-4 pb-6 border-b border-gray-100">

          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
            <FaEnvelope className="text-yellow-500 text-lg" />
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">
              Email
            </h4>

            <a
              href="mailto:info@yourtravel.com"
              className="text-gray-600 hover:text-yellow-500 transition"
            >
              snithes23aug@gmail.com
            </a>
          </div>

        </div>

        {/* Address */}
        <div className="flex items-start gap-4 pb-6 border-b border-gray-100">

          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
            <FaMapMarkerAlt className="text-yellow-500 text-lg" />
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">
              Office Address
            </h4>

            <p className="text-gray-600 leading-7">
              123, Avinashi Road,
              <br />
              Coimbatore,
              <br />
              Tamil Nadu - 641018
            </p>
          </div>

        </div>

        {/* Working Hours */}
        <div className="flex items-start gap-4">

          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
            <FaClock className="text-yellow-500 text-lg" />
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">
              Working Hours
            </h4>

            <p className="text-gray-600">
              24 × 7 Customer Support
            </p>
          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="px-8 pb-8">

        <a
          href="https://wa.me/919043294678"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-xl transition duration-300"
        >
          Chat on WhatsApp
          <FaArrowRight />
        </a>

      </div>

    </div>
  );
}

export default ContactInfo;