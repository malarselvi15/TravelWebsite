import aboutImg from "../assets/about.avif";
import {
  FaShieldAlt,
  FaUserTie,
  FaClock,
} from "react-icons/fa";

function About() {
  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Safe & Secure",
      desc: "Your safety is our priority.",
    },
    {
      icon: <FaUserTie />,
      title: "Professional Drivers",
      desc: "Experienced chauffeurs.",
    },
    {
      icon: <FaClock />,
      title: "On-Time Service",
      desc: "Always punctual rides.",
    },
  ];

  return (
    <section
      id="about"
      className="bg-white py-16 lg:py-24 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}

          <div>

            <span className="uppercase tracking-[5px] text-yellow-500 font-semibold text-sm lg:text-base">
              About Us
            </span>

            {/* Desktop remains exactly the same */}

            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mt-4 leading-tight">
              We Provide The Best
              <br />
              <span className="text-yellow-500">
                Travel Experience
              </span>
            </h2>

            <p className="text-gray-600 mt-6 lg:mt-8 text-base lg:text-lg leading-relaxed">
              We provide premium taxi services, airport transfers,
              outstation travel and chauffeur-driven rides with a
              focus on comfort, reliability and customer satisfaction.
            </p>

            {/* Features */}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 mt-10 lg:mt-12">

              {features.map((item, index) => (
                <div key={index} className="group">

                  <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-yellow-50 text-yellow-500 flex items-center justify-center text-xl lg:text-2xl transition-all duration-300 group-hover:bg-yellow-500 group-hover:text-white">
                    {item.icon}
                  </div>

                  <h4 className="font-bold text-gray-900 mt-4">
                    {item.title}
                  </h4>

                  <p className="text-gray-500 text-sm mt-2">
                    {item.desc}
                  </p>

                </div>
              ))}

            </div>

          </div>

          {/* Right Image */}

          <div className="relative mt-8 lg:mt-0">

            <img
              src={aboutImg}
              alt="About"
              className="rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.15)]
              h-[320px] sm:h-[420px] lg:h-[500px]
              w-full object-cover"
            />

            {/* Floating Mission Card */}

            <div
              className="
              absolute
              left-4
              right-4
              sm:left-8
              sm:right-auto
              lg:left-8
              lg:right-auto
              -bottom-6
              bg-white
              border
              border-gray-100
              shadow-2xl
              rounded-3xl
              p-4
              lg:p-6
              flex
              items-center
              gap-4
              max-w-sm
              "
            >

              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-yellow-500 text-white flex items-center justify-center text-lg lg:text-xl flex-shrink-0">
                <FaUserTie />
              </div>

              <div>

                <h3 className="font-bold text-base lg:text-lg text-gray-900">
                  Our Mission
                </h3>

                <p className="text-gray-500 text-sm">
                  Deliver reliable and comfortable travel
                  experiences for every customer.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;