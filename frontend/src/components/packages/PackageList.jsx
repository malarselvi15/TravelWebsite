import PackageCard from "./PackageCard";

function PackageList() {
  const packages = [
    {
      title: "Ooty Hill Station Tour",
      days: "2 Days / 1 Night",
      price: "₹6,500",
      desc: "Explore beautiful hills, lakes and gardens in Ooty.",
    },
    {
      title: "Kodaikanal Tour",
      days: "2 Days / 1 Night",
      price: "₹7,000",
      desc: "Mist-covered hills, lakes and scenic viewpoints.",
    },
    {
      title: "Munnar Kerala Package",
      days: "3 Days / 2 Nights",
      price: "₹10,500",
      desc: "Tea gardens, waterfalls and lush green nature.",
    },
    {
      title: "Coimbatore Local Sightseeing",
      days: "1 Day",
      price: "₹3,000",
      desc: "Temples, shopping and city sightseeing tour.",
    },
    {
      title: "Temple Tour Package",
      days: "2 Days",
      price: "₹5,500",
      desc: "Visit famous temples in Tamil Nadu.",
    },
    {
      title: "Custom Tour Package",
      days: "Flexible",
      price: "Contact Us",
      desc: "Plan your own travel itinerary with us.",
    },
  ];

  return (
    <div className="py-20 px-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">
        Our Packages
      </h2>

      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg, index) => (
          <PackageCard key={index} pkg={pkg} />
        ))}
      </div>
    </div>
  );
}

export default PackageList;