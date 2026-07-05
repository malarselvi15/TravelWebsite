import Navbar from "./Navbar";
import hero from "../assets/hero.avif";

function Home() {
  return (
    <>
      <Navbar />

      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/75"></div>

        {/* Hero Content */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">

            <div className="max-w-3xl">

              

              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
                Reliable,
                <br />
                <span className="text-yellow-400">
                  Luxurious
                </span>{" "}
                Rides
              </h1>

              {/* Description */}
              <p className="mt-8 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                Experience premium taxi and travel services with
                professional drivers, luxury vehicles, airport transfers,
                outstation trips, and comfortable rides for every journey.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-5 mt-10">

                <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition duration-300">
                  Book Now
                </button>

                <button className="border border-white/40 text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-300">
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