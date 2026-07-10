import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

import whiteLogo from "../assets/NY.png";
import blackLogo from "../assets/Btaxi.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Tariff",
      path: "/tariff",
    },
    {
      title: "Packages",
      path: "/packages",
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* ================= Logo ================= */}

        <Link
          to="/"
          className="flex items-center w-[270px] lg:w-[300px] overflow-hidden -ml-6"
        >
          <img
            src={scrolled ? blackLogo : whiteLogo}
            alt="Dharani Global Travels"
            className="
              w-[190px]
              lg:w-[200px]
              xl:w-[230px]
              h-auto
              object-contain
              transition-all
              duration-300
            "
          />
        </Link>

        {/* ================= Desktop Menu ================= */}

        <ul
          className={`hidden lg:flex items-center gap-8 uppercase text-sm tracking-wider font-medium ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          {navItems.map((item) => (
            <li key={item.title}>
              <Link
                to={item.path}
                className={`relative transition duration-300 hover:text-yellow-500 ${
                  location.pathname === item.path
                    ? "text-yellow-500"
                    : ""
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}

          <li>
            <Link
              to="/contact"
              className={`transition duration-300 hover:text-yellow-500 ${
                location.pathname === "/contact"
                  ? "text-yellow-500"
                  : ""
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* ================= Book Ride Button ================= */}

        <Link
  to="/contact"
  className="hidden lg:block bg-yellow-500 text-black px-7 py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-300"
>
  Book Ride
</Link>

        {/* ================= Mobile Button ================= */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden text-3xl ${
            scrolled ? "text-gray-900" : "text-white"
          }`}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* ================= Mobile Menu ================= */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-white shadow-xl">

          {navItems.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={`block px-8 py-5 border-b ${
                location.pathname === item.path
                  ? "text-yellow-500"
                  : "text-gray-700 hover:text-yellow-500"
              }`}
            >
              {item.title}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={`block px-8 py-5 border-b ${
              location.pathname === "/contact"
                ? "text-yellow-500"
                : "text-gray-700 hover:text-yellow-500"
            }`}
          >
            Contact
          </Link>

          <div className="p-6">
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="block text-center bg-yellow-500 text-black py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
            >
              Book Ride
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;