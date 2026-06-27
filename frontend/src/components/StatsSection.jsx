import { useEffect, useRef, useState } from "react";
import {
  FaUsers,
  FaCarSide,
  FaMapMarkedAlt,
  FaStar,
} from "react-icons/fa";

import bg from "../assets/stats-bg.jpg";

function Counter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;

        started.current = true;

        let start = 0;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;

          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function StatsSection() {
  const stats = [
    {
      icon: <FaUsers />,
      value: 15000,
      suffix: "+",
      title: "Happy Customers",
    },
    {
      icon: <FaCarSide />,
      value: 25,
      suffix: "+",
      title: "Premium Vehicles",
    },
    {
      icon: <FaMapMarkedAlt />,
      value: 120,
      suffix: "+",
      title: "Destinations",
    },
    {
      icon: <FaStar />,
      value: 5,
      suffix: "★",
      title: "Customer Rating",
    },
  ];

  return (
    <section
      id="stats"
      className="relative min-h-screen lg:h-screen bg-cover bg-center bg-fixed flex items-center py-16 lg:py-0"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-black/45"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-6 lg:px-6">

        {/* Heading */}

        <div className="text-center mb-12 lg:mb-20">

          <span className="uppercase tracking-[4px] lg:tracking-[6px] text-yellow-400 font-semibold text-sm lg:text-base">
            WHY CHOOSE US
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 lg:mt-5 leading-tight">
            Travel Beyond Boundaries
          </h2>

          <p className="text-gray-200 mt-5 lg:mt-6 max-w-3xl mx-auto text-base lg:text-lg leading-7 lg:leading-8">
            Experience safe, comfortable and luxury travel with our trusted
            taxi services.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">

          {stats.map((item, index) => (

            <div
              key={index}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl lg:rounded-3xl p-6 lg:p-10 text-center hover:bg-yellow-500/20 hover:-translate-y-3 transition duration-500"
            >

              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-yellow-500 flex items-center justify-center mx-auto text-black text-2xl sm:text-3xl lg:text-4xl mb-5 lg:mb-8">

                {item.icon}

              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">

                <Counter
                  end={item.value}
                  suffix={item.suffix}
                />

              </h3>

              <p className="mt-3 lg:mt-4 text-gray-200 text-sm sm:text-base lg:text-lg">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default StatsSection;