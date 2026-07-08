import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

import hero from "../assets/hero.avif";
import ishaDesktop from "../assets/isha.png";
import ishaMobile from "../assets/isha-mobile.jpg";

function Home() {
  const navigate = useNavigate();

  // Desktop images
  const desktopImages = [ishaDesktop, hero];

  // Mobile images
  const mobileImages = [ishaMobile, hero];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % desktopImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      <section className="relative min-h-screen overflow-hidden">

        {/* ================= Desktop Slider ================= */}

        {desktopImages.map((image, index) => (
          <div
            key={`desktop-${index}`}
            className={`hidden md:block absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              currentImage === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}

        {/* ================= Mobile Slider ================= */}

        {mobileImages.map((image, index) => (
          <div
            key={`mobile-${index}`}
            className={`block md:hidden absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              currentImage === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/65"></div>

        {/* ================= Hero Content ================= */}

        <div className="relative z-10 flex items-center min-h-screen">

          <div className="max-w-7xl mx-auto w-full px-6">

            <div
              className="
                max-w-3xl
                text-center
                md:text-left
                pt-20
                md:pt-0
              "
            >

              {/* Heading */}

              <h1
                className="
                  font-bold
                  text-white
                  leading-tight
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  lg:text-8xl
                "
              >
                Reliable,
                <br />

                <span className="text-yellow-400">
                  Luxurious
                </span>{" "}
                Rides
              </h1>

              {/* Description */}

              <p
                className="
                  mt-5
                  text-gray-300
                  leading-7
                  md:leading-8
                  text-[15px]
                  sm:text-lg
                  md:text-xl
                  max-w-xl
                  mx-auto
                  md:mx-0
                "
              >
                Experience premium taxi and travel services with
                professional drivers, luxury vehicles, airport
                transfers, outstation trips and comfortable rides
                for every journey.
              </p>

              {/* Buttons */}

              <div
                className="
                  mt-8
                  flex
                  flex-row
                  flex-wrap
                  justify-center
                  md:justify-start
                  gap-4
                "
              >

                <button
                  onClick={() => navigate("/contact")}
                  className="
                    bg-yellow-500
                    hover:bg-yellow-400
                    text-black
                    font-semibold
                    rounded-full
                    transition
                    px-6 py-3
                    md:px-8 md:py-4
                  "
                >
                  Book Now
                </button>

                <button
                  className="
                    border
                    border-white/40
                    text-white
                    hover:bg-white
                    hover:text-black
                    rounded-full
                    transition
                    px-6 py-3
                    md:px-8 md:py-4
                  "
                >
                  Explore Fleet →
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default Home;