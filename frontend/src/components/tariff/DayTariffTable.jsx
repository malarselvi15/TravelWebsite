const data = [
  {
    car: "Maruti Baleno",
    rent: "₹2,400",
    freeKm: 100,
    kmRate: 14,
    driver: "₹400",
    total: "₹2,800",
  },
  {
    car: "Swift Dzire A/c",
    rent: "₹2,400",
    freeKm: 100,
    kmRate: 14,
    driver: "₹400",
    total: "₹2,800",
  },
  {
    car: "Toyota Etios GD",
    rent: "₹2,400",
    freeKm: 100,
    kmRate: 14,
    driver: "₹400",
    total: "₹2,800",
  },
  {
    car: "Maruti Ertiga",
    rent: "₹3,600",
    freeKm: 100,
    kmRate: 18,
    driver: "₹400",
    total: "₹4,000",
  },
  {
    car: "Mahindra Xylo",
    rent: "₹3,400",
    freeKm: 100,
    kmRate: 15,
    driver: "₹400",
    total: "₹3,800",
  },
  {
    car: "Toyota Innova",
    rent: "₹3,600",
    freeKm: 100,
    kmRate: 18,
    driver: "₹400",
    total: "₹4,000",
  },
  {
    car: "Toyota Innova Crysta",
    rent: "₹4,600",
    freeKm: 100,
    kmRate: 24,
    driver: "₹400",
    total: "₹5,000",
  },
  {
    car: "Force Traveller (Non-AC)",
    rent: "₹4,800",
    freeKm: 100,
    kmRate: 19,
    driver: "₹400",
    total: "₹5,200",
  },
  {
    car: "Force Traveller (AC)",
    rent: "₹5,000",
    freeKm: 100,
    kmRate: 20,
    driver: "₹400",
    total: "₹5,400",
  },
  {
    car: "Force Urbania",
    rent: "₹10,100",
    freeKm: 100,
    kmRate: "-",
    driver: "₹400",
    total: "₹10,500",
  },
];

function DayTariffTable() {
  // WhatsApp Number
  const whatsappNumber = "919043294678";

  const handleWhatsApp = (car) => {
    const message = `Hello, I'm interested in booking the ${car}. Please share the details.`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">
        Out Station Tariff (Day Basis)
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-yellow-400 text-black">
            <tr>
              <th className="p-3">Car</th>
              <th className="p-3">Rent/Day</th>
              <th className="p-3">Free Km</th>
              <th className="p-3">Km Rate</th>
              <th className="p-3">Driver</th>
              <th className="p-3">Total</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, i) => (
              <tr key={i} className="text-center border-b hover:bg-gray-50">
                <td className="p-3 font-medium">{item.car}</td>
                <td>{item.rent}</td>
                <td>{item.freeKm}</td>
                <td>{item.kmRate === "-" ? "-" : `₹${item.kmRate}`}</td>
                <td>{item.driver}</td>
                <td className="font-semibold">{item.total}</td>
                <td className="p-3">
                  <button
                    onClick={() => handleWhatsApp(item.car)}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded transition"
                  >
                    WhatsApp Now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Force Urbania Note */}
      <p className="mt-4 text-center text-sm text-gray-600">
        <span className="font-semibold">Note:</span> Force Urbania tariff is
        applicable for <span className="font-semibold">12 Hours / 100 Km</span>.
      </p>
    </div>
  );
}

export default DayTariffTable;