import {
  FaUsers,
  FaSuitcase,
  FaArrowRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import etios from "../assets/etios.avif";
import dzire from "../assets/dzire.avif";
import innova from "../assets/innova.jpg";
import ertiga from "../assets/ertiga.jpg";
import tempo from "../assets/tempo.jpg";
import urbania from "../assets/urbania.webp";
import jaguar from "../assets/jaguar.jpg";
import coach from "../assets/coach.jpeg";
import benz from "../assets/benz.avif";

function Vehicles() {

  const navigate = useNavigate();
  const cars = [
    {
      name: "Toyota Etios",
      type: "Sedan",
      seats: 4,
      luggage: 2,
      image: etios,
    },
    {
      name: "Maruti Suzuki Dzire",
      type: "Sedan",
      seats: 4,
      luggage: 2,
      image: dzire,
    },
    {
      name: "Toyota Innova",
      type: "SUV",
      seats: 7,
      luggage: 4,
      image: innova,
    },
    {
      name: "Maruti Ertiga",
      type: "MPV",
      seats: 6,
      luggage: 3,
      image: ertiga,
    },
    {
      name: "Tempo Traveller",
      type: "12 / 17 Seater",
      seats: 17,
      luggage: 10,
      image: tempo,
    },
    {
      name: "Force Urbania",
      type: "Premium Traveller",
      seats: 17,
      luggage: 10,
      image: urbania,
    },
    {
      name: "Jaguar",
      type: "Luxury Sedan",
      seats: 4,
      luggage: 2,
      image: jaguar,
    },
    {
      name: "Mercedes-Benz E-Class",
      type: "Luxury Sedan",
      seats: 4,
      luggage: 2,
      image: benz,
    },
    {
      name: "Coach Bus",
      type: "Large Group",
      seats: 45,
      luggage: 30,
      image: coach,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="uppercase tracking-[4px] text-yellow-500 font-semibold">
            Our Fleet
          </span>

          <h2 className="text-5xl font-bold text-gray-900 mt-3">
            Choose Your Perfect Ride
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            Well-maintained vehicles for airport transfers, local trips,
            outstation travel, corporate travel, weddings and group tours.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-60 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {car.name}
                </h3>

                <p className="text-gray-500 mt-2">
                  Comfortable, clean and professional chauffeur service for all
                  your travel needs.
                </p>

                {/* Info */}
                <div className="flex items-center gap-8 mt-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <FaUsers className="text-yellow-500" />
                    <span>{car.seats} Seats</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaSuitcase className="text-yellow-500" />
                    <span>{car.luggage} Bags</span>
                  </div>
                </div>

                {/* Button */}
                <button onClick={() => navigate("/contact")} className="mt-8 w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-xl transition duration-300 flex items-center justify-center gap-2">
                  Book Now
                  <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Vehicles;