import contactBanner from "../../assets/service-banner.png";

function ContactHero() {
  return (
    <div
      className="h-[55vh] bg-cover bg-center flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${contactBanner})`,
      }}
    >
      <div>
        <h1 className="text-5xl font-bold text-yellow-400 drop-shadow-lg">
          Contact Us
        </h1>

        <p className="text-white mt-4 text-lg drop-shadow-md">
          We are here to help you 24/7 for bookings and support
        </p>
      </div>
    </div>
  );
}

export default ContactHero;