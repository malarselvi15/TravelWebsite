import {
  FaTaxi,
  FaShieldAlt,
  FaClock,
  FaMapMarkedAlt,
  FaHeadset,
  FaMoneyBillWave,
} from "react-icons/fa";

function WhyChooseUs() {
  const reasons = [
    {
      icon: <FaTaxi />,
      title: "Premium Fleet",
      desc: "Luxury and well-maintained vehicles ensuring maximum comfort for every journey.",
    },
    {
      icon: <FaShieldAlt />,
      title: "100% Safe Travel",
      desc: "Verified professional drivers with GPS tracking for complete peace of mind.",
    },
    {
      icon: <FaClock />,
      title: "Always On Time",
      desc: "Punctual pickup and drop services with real-time scheduling support.",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Anywhere You Go",
      desc: "Airport transfers, city rides, outstation trips and customized tours.",
    },
    {
      icon: <FaHeadset />,
      title: "24×7 Support",
      desc: "Our dedicated customer care team is always ready to assist you.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Affordable Pricing",
      desc: "Transparent pricing with zero hidden charges and premium service.",
    },
  ];

  return (
    <section
      id="whychoose"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-yellow-50/30 to-gray-100"
    >
      {/* Decorative Background */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-yellow-200/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <span className="uppercase tracking-[6px] text-yellow-500 font-semibold">
            Why Choose Us
          </span>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-5">
            Experience Luxury
            <span className="text-yellow-500"> Every Ride</span>
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg leading-8">
            We combine luxury vehicles, professional drivers and exceptional
            customer service to deliver a premium travel experience every time.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {reasons.map((item, index) => (

            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-xl rounded-[32px] p-10 border border-white shadow-xl hover:shadow-2xl hover:-translate-y-4 duration-500 overflow-hidden"
            >

              {/* Number */}

              <span className="absolute top-6 right-8 text-6xl font-bold text-gray-100 group-hover:text-yellow-100 duration-500">
                0{index + 1}
              </span>

              {/* Yellow Line */}

              <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition duration-500 origin-left"></div>

              {/* Icon */}

              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-white text-4xl shadow-lg group-hover:rotate-6 group-hover:scale-110 transition duration-500">

                {item.icon}

              </div>

              {/* Title */}

              <h3 className="text-2xl font-bold text-gray-900 mt-8">

                {item.title}

              </h3>

              {/* Description */}

              <p className="text-gray-600 leading-8 mt-5">

                {item.desc}

              </p>

              {/* Bottom Link */}

              <div className="mt-8 flex items-center text-yellow-500 font-semibold">

                Learn More

                <span className="ml-2 group-hover:translate-x-2 transition">
                  →
                </span>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom Banner */}

        <div className="mt-20 rounded-[35px] bg-gradient-to-r from-yellow-500 to-yellow-400 p-10 lg:p-14 shadow-2xl">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            <div>

              <h3 className="text-4xl font-bold text-black">
                Ready For Your Next Journey?
              </h3>

              <p className="text-black/80 mt-4 text-lg">
                Book your ride today and enjoy luxury travel at affordable
                prices with TravelX.
              </p>

            </div>

            <button className="bg-black text-white px-10 py-4 rounded-full font-semibold hover:bg-gray-900 duration-300 shadow-lg">
              Book Your Ride
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;