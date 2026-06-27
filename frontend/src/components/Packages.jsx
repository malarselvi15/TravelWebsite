import ooty from "../assets/ooty.webp";
import kodaikanal from "../assets/kodaikanal.webp";
import munnar from "../assets/munnar.webp";
import valparai from "../assets/valparai.jpg";
import mysore from "../assets/mysore.jpg";
import wayanad from "../assets/wayanad.avif";

import {
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

function Packages() {
  const packages = [
    {
      image: ooty,
      title: "Ooty Tour",
      duration: "2 Days / 1 Night",
      price: "₹5,999",
    },
    {
      image: kodaikanal,
      title: "Kodaikanal Tour",
      duration: "2 Days / 1 Night",
      price: "₹6,499",
    },
    {
      image: munnar,
      title: "Munnar Tour",
      duration: "3 Days / 2 Nights",
      price: "₹7,499",
    },
    {
      image: valparai,
      title: "Valparai Tour",
      duration: "1 Day",
      price: "₹3,999",
    },
    {
      image: mysore,
      title: "Mysore Tour",
      duration: "2 Days / 1 Night",
      price: "₹6,999",
    },
    {
      image: wayanad,
      title: "Wayanad Tour",
      duration: "3 Days / 2 Nights",
      price: "₹7,999",
    },
  ];

  return (
    <section
      id="packages"
      className="py-24 bg-[#0B1220]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="text-yellow-400 uppercase tracking-[4px] font-semibold">
            Holiday Packages
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Explore Beautiful Destinations
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Discover amazing destinations with our comfortable taxi
            services and customized travel packages.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {packages.map((item, index) => (

            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden h-[460px] shadow-2xl cursor-pointer"
            >

              {/* Image */}

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              {/* Content */}

              <div className="absolute bottom-0 left-0 w-full p-8">

                <div className="flex items-center gap-2 text-yellow-400">

                  <FaMapMarkerAlt />

                  <span className="font-medium">
                    Tamil Nadu Tour
                  </span>

                </div>

                <h3 className="text-3xl font-bold text-white mt-3">
                  {item.title}
                </h3>

                <div className="flex items-center gap-2 text-gray-300 mt-4">

                  <FaClock />

                  <span>{item.duration}</span>

                </div>

                <div className="flex justify-between items-center mt-8">

                  <div>

                    <p className="text-gray-300 text-sm">
                      Starting From
                    </p>

                    <h4 className="text-3xl font-bold text-yellow-400">
                      {item.price}
                    </h4>

                  </div>

                  <button className="bg-yellow-500 hover:bg-white text-black font-semibold px-6 py-3 rounded-xl transition duration-300 flex items-center gap-2">

                    Book Now

                    <FaArrowRight />

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Packages;