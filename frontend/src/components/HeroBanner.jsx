function HeroBanner({ title, subtitle, image }) {
  return (
    <section
      className="relative h-[55vh] md:h-[65vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          {title}
        </h1>

        <p className="text-gray-200 text-lg md:text-xl mt-6 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

export default HeroBanner;