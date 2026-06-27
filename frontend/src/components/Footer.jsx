import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-[#08111F] overflow-hidden">

      {/* Decorative Background */}

      <div className="absolute -top-20 left-0 w-80 h-80 bg-yellow-500/10 rounded-full blur-[120px]"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-400/10 rounded-full blur-[120px]"></div>

      {/* Gold Border */}

      <div className="h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-bold text-yellow-400">
              TravelX
            </h2>

            <p className="text-gray-400 mt-6 leading-8">
              Premium taxi and travel services offering airport transfers,
              local rides, outstation trips and customized holiday packages
              with professional drivers.
            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black transition duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black transition duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black transition duration-300"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-semibold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <a href="#home" className="text-gray-400 hover:text-yellow-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="text-gray-400 hover:text-yellow-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#services" className="text-gray-400 hover:text-yellow-400 transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#tariff" className="text-gray-400 hover:text-yellow-400 transition">
                  Tariff
                </a>
              </li>

              <li>
                <a href="#packages" className="text-gray-400 hover:text-yellow-400 transition">
                  Packages
                </a>
              </li>

              <li>
                <a href="#contact" className="text-gray-400 hover:text-yellow-400 transition">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-semibold text-white mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-4">

                <FaPhoneAlt className="text-yellow-400 mt-1" />

                <span className="text-gray-400">
                  +91 98765 43210
                </span>

              </div>

              <div className="flex gap-4">

                <FaEnvelope className="text-yellow-400 mt-1" />

                <span className="text-gray-400">
                  info@travelx.com
                </span>

              </div>

              <div className="flex gap-4">

                <FaMapMarkerAlt className="text-yellow-400 mt-1" />

                <span className="text-gray-400">
                  Coimbatore, Tamil Nadu
                </span>

              </div>

            </div>

          </div>

          {/* Working Hours */}

          <div>

            <h3 className="text-2xl font-semibold text-white mb-6">
              Working Hours
            </h3>

            <div className="flex gap-4">

              <FaClock className="text-yellow-400 mt-1" />

              <div className="text-gray-400 space-y-2">

                <p>Monday - Sunday</p>

                <p>Open 24 Hours</p>

                <p className="text-yellow-400 font-semibold">
                  24×7 Taxi Service
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-sm">
            © 2026 TravelX. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm mt-3 md:mt-0">
            Designed with ❤️ for Premium Travel
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;