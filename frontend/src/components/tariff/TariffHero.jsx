function TariffHero() {
  return (
    <div
      className="h-[60vh] bg-cover bg-center flex items-center justify-center text-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1502877338535-766e1452684a)",
      }}
    >
      <div className="bg-black/60 p-8 rounded-xl">
        <h1 className="text-5xl font-bold text-yellow-400">
          Tariff Plans
        </h1>
        <p className="text-white mt-4 text-lg">
          Affordable Local & Outstation Taxi Packages
        </p>
      </div>
    </div>
  );
}

export default TariffHero;