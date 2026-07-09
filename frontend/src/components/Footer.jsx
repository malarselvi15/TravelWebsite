import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Wtaxi.png";

function Footer() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <footer className="relative bg-[#08111F] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-20 left-0 w-80 h-80 bg-yellow-500/10 rounded-full blur-[120px]"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px]"></div>

      {/* Top Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* ================= Company ================= */}

          <div className="lg:-mt-10">

            <img
              src={logo}
              alt="Dharani Global Travels"
              className="w-[240px] lg:w-[260px] h-auto object-contain -ml-3"
            />

            <p className="text-gray-400 mt-5 leading-8">
              Dharani Global Travels offers premium taxi services,
              airport transfers, local rides, outstation trips and
              customized tour packages with professional drivers.
              Available 24×7 for safe and comfortable travel.
            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/919043294678"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black transition"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

          {/* ================= Quick Links ================= */}

          <div>

            <h3 className="text-2xl font-semibold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <button
                  onClick={() => handleNavigate("/")}
                  className="text-gray-400 hover:text-yellow-400 transition"
                >
                  Home
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleNavigate("/about")}
                  className="text-gray-400 hover:text-yellow-400 transition"
                >
                  About
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleNavigate("/services")}
                  className="text-gray-400 hover:text-yellow-400 transition"
                >
                  Services
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleNavigate("/tariff")}
                  className="text-gray-400 hover:text-yellow-400 transition"
                >
                  Tariff
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleNavigate("/packages")}
                  className="text-gray-400 hover:text-yellow-400 transition"
                >
                  Packages
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleNavigate("/contact")}
                  className="text-gray-400 hover:text-yellow-400 transition"
                >
                  Contact
                </button>
              </li>

            </ul>

          </div>

          {/* ================= Contact ================= */}

          <div>

            <h3 className="text-2xl font-semibold text-white mb-6">
              Contact Us
            </h3>

            <div className="space-y-5">

              <div className="flex items-start gap-4">

                <FaPhoneAlt className="text-yellow-400 mt-1" />

                <div className="text-gray-400 space-y-1">

                  <a
                    href="tel:+919043294678"
                    className="hover:text-yellow-400 transition"
                  >
                    +91 90432 94678
                  </a>

                  <br />

                  <a
                    href="tel:+919043194678"
                    className="hover:text-yellow-400 transition"
                  >
                    +91 90431 94678
                  </a>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <FaEnvelope className="text-yellow-400 mt-1" />

                <a
                  href="mailto:snithes23aug@gmail.com"
                  className="text-gray-400 hover:text-yellow-400 transition break-all"
                >
                  snithes23aug@gmail.com
                </a>

              </div>

              <div className="flex items-start gap-4">

                <FaMapMarkerAlt className="text-yellow-400 mt-1" />

                <span className="text-gray-400">
                  Opposite to Railway station, Geetha hall road
                  <br />
                  Gopalapuram-641018 Coimbatore,Tamil Nadu.
                </span>

              </div>

            </div>

          </div>

          {/* ================= Working Hours ================= */}

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
                  24×7 Taxi & Travel Service
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ================= Bottom ================= */}

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col lg:flex-row justify-between items-center gap-3">

          <p className="text-gray-500 text-sm text-center lg:text-left">
            © {new Date().getFullYear()} Dharani Global Travels. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm text-center relative z-10">
  Developed by{" "}
  <a
  href="https://twintechy.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-yellow-400 hover:text-yellow-300 transition duration-300"
>
  Twin Technologies
</a>
</p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;