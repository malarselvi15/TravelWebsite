import {
  FaPlaneArrival,
  FaCarSide,
  FaRoute,
  FaBriefcase,
  FaUmbrellaBeach,
  FaHeart,
} from "react-icons/fa";

import airport from "../assets/airport.jpg";
import local from "../assets/local.jpg";
import outstation from "../assets/outstation.webp";
import corporate from "../assets/corporate.jpg";
import tour from "../assets/tour.avif";
import wedding from "../assets/wedding.webp";

function Services() {
  const services = [
    {
      image: airport,
      icon: <FaPlaneArrival />,
      title: "Airport Transfers",
      desc: "Reliable airport pickup and drop services with experienced professional drivers.",
    },
    {
      image: local,
      icon: <FaCarSide />,
      title: "Local City Rides",
      desc: "Comfortable city rides for shopping, meetings and daily transportation.",
    },
    {
      image: outstation,
      icon: <FaRoute />,
      title: "Outstation Trips",
      desc: "Enjoy safe and memorable long-distance journeys with our premium fleet.",
    },
    {
      image: corporate,
      icon: <FaBriefcase />,
      title: "Corporate Travel",
      desc: "Executive transportation solutions designed for business professionals.",
    },
    {
      image: tour,
      icon: <FaUmbrellaBeach />,
      title: "Tour Packages",
      desc: "Customized travel experiences to explore beautiful destinations comfortably.",
    },
    {
      image: wedding,
      icon: <FaHeart />,
      title: "Wedding & Events",
      desc: "Luxury cars for weddings, receptions and all your special occasions.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-[#08111F] py-24 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="uppercase tracking-[5px] text-white font-semibold">
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mt-4">
            Premium Travel Solutions
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            Luxury transportation services designed for comfort,
            safety and unforgettable travel experiences.
          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              className="group relative h-[360px] rounded-[28px] overflow-hidden shadow-2xl cursor-pointer transition-all duration-500 hover:-translate-y-3"
            >

              {/* Image */}

              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Bottom Title */}

              <div className="absolute bottom-8 left-8 right-8 transition-all duration-300 group-hover:opacity-0">

                <h2 className="text-white text-2xl lg:text-3xl font-bold drop-shadow-lg">
                  {service.title}
                </h2>

              </div>

              {/* Hover Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/50 backdrop-blur-sm flex flex-col justify-center items-center text-center p-8 opacity-0 group-hover:opacity-100 transition-all duration-500">

                <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center text-3xl text-black shadow-xl mb-6">

                  {service.icon}

                </div>

                <h3 className="text-white text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="text-gray-300 mt-4 text-sm leading-7">
                  {service.desc}
                </p>

                <button className="mt-6 px-7 py-3 rounded-full bg-yellow-500 text-black font-semibold hover:bg-white transition-all duration-300 shadow-lg">

                  Learn More

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;