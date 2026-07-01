function PackageHero() {
  return (
    <div
      className="h-[60vh] bg-cover bg-center flex items-center justify-center text-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee)",
      }}
    >
      {/* Content without overlay */}
      <div className="p-8 rounded-xl">
        <h1 className="text-5xl font-bold text-yellow-400 drop-shadow-lg">
          Tour Packages
        </h1>

        <p className="text-white mt-4 text-lg drop-shadow-md">
          Explore our best travel packages with affordable pricing
        </p>
      </div>
    </div>
  );
}

export default PackageHero;