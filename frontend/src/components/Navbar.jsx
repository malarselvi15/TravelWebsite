import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      title: "Home",
      href: "#home",
    },
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Services",
      href: "#services",
    },
    {
      title: "Tariff",
      href: "#tariff",
    },
    {
      title: "Packages",
      href: "#packages",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}

        <a href="#home">
          <h1
            className={`text-3xl font-serif font-semibold transition duration-300 ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            Travel<span className="text-yellow-500">X</span>
          </h1>
        </a>

        {/* Desktop Menu */}

        <ul
          className={`hidden lg:flex items-center gap-8 uppercase text-sm tracking-wider font-medium transition duration-300 ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          {navItems.map((item) => (
            <li key={item.title}>
              <a
                href={item.href}
                className="hover:text-yellow-500 transition duration-300"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}

        <a
          href="#contact"
          className="hidden lg:block bg-yellow-500 text-black px-7 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
        >
          Book Ride
        </a>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden text-3xl transition duration-300 ${
            scrolled ? "text-gray-900" : "text-white"
          }`}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-white shadow-xl">

          {navItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block px-8 py-5 border-b text-gray-700 hover:text-yellow-500 transition"
            >
              {item.title}
            </a>
          ))}

          <div className="p-6">

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block text-center bg-yellow-500 text-black py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
            >
              Book Ride
            </a>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;