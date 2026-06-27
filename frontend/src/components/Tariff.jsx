import {
  FaCarSide,
  FaUsers,
  FaSuitcase,
  FaCheckCircle,
} from "react-icons/fa";

function Tariff() {
  const vehicles = [
    {
      name: "Sedan",
      price: "₹14",
      unit: "/ KM",
      passengers: "4 Passengers",
      luggage: "2 Luggage",
      popular: false,
    },
    {
      name: "SUV",
      price: "₹18",
      unit: "/ KM",
      passengers: "6 Passengers",
      luggage: "4 Luggage",
      popular: true,
    },
    {
      name: "Tempo Traveller",
      price: "₹24",
      unit: "/ KM",
      passengers: "12+1 Passengers",
      luggage: "Large Luggage",
      popular: false,
    },
  ];

  return (
    <section
      id="tariff"
      className="relative py-24 bg-gradient-to-b from-slate-50 via-gray-100 to-slate-200"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="uppercase tracking-[5px] text-yellow-500 font-semibold">
            Transparent Pricing
          </span>

          <h2 className="text-5xl font-bold text-gray-900 mt-4">
            Taxi Tariff
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Affordable pricing with no hidden charges.
            Choose the perfect vehicle for your journey.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {vehicles.map((car, index) => (

            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-lg border transition duration-500 hover:-translate-y-3 hover:shadow-2xl ${
                car.popular
                  ? "border-yellow-500"
                  : "border-gray-200"
              }`}
            >

              {car.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="p-10">

                <div className="w-24 h-24 rounded-full bg-yellow-100 flex items-center justify-center mx-auto">

                  <FaCarSide className="text-5xl text-yellow-500"/>

                </div>

                <h3 className="text-3xl font-bold text-center mt-8">
                  {car.name}
                </h3>

                <div className="text-center mt-6">

                  <span className="text-5xl font-bold text-yellow-500">
                    {car.price}
                  </span>

                  <span className="text-xl text-gray-600">
                    {car.unit}
                  </span>

                </div>

                <div className="mt-10 space-y-5">

                  <div className="flex items-center gap-3">

                    <FaUsers className="text-yellow-500"/>

                    <span>{car.passengers}</span>

                  </div>

                  <div className="flex items-center gap-3">

                    <FaSuitcase className="text-yellow-500"/>

                    <span>{car.luggage}</span>

                  </div>

                  <div className="flex items-center gap-3">

                    <FaCheckCircle className="text-yellow-500"/>

                    <span>AC Vehicle</span>

                  </div>

                  <div className="flex items-center gap-3">

                    <FaCheckCircle className="text-yellow-500"/>

                    <span>Professional Driver</span>

                  </div>

                  <div className="flex items-center gap-3">

                    <FaCheckCircle className="text-yellow-500"/>

                    <span>24/7 Customer Support</span>

                  </div>

                </div>

                <button className="mt-10 w-full py-4 rounded-xl bg-yellow-500 text-black font-semibold hover:bg-gray-900 hover:text-white transition duration-300">

                  Book Now

                </button>

              </div>

            </div>

          ))}

        </div>

        {/* Note */}

        

      </div>
    </section>
  );
}

export default Tariff;