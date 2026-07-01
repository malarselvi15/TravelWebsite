const data = [
  {
    car: "Swift Dzire A/c",
    minKm: 300,
    rate: 12.5,
    driver: 400,
    total: "₹4,150",
  },
  {
    car: "Toyota Etios GD",
    minKm: 300,
    rate: 12.5,
    driver: 400,
    total: "₹4,150",
  },
  {
    car: "Chevrolet Tavera",
    minKm: 350,
    rate: 17,
    driver: 400,
    total: "₹6,350",
  },
  {
    car: "Mahindra Xylo",
    minKm: 350,
    rate: 17,
    driver: 400,
    total: "₹6,350",
  },
  {
    car: "Toyota Innova",
    minKm: 350,
    rate: 18,
    driver: 500,
    total: "₹6,800",
  },
  {
    car: "Innova Crysta",
    minKm: 400,
    rate: 20,
    driver: 500,
    total: "₹8,500",
  },
  {
    car: "Force Traveller (Non-AC)",
    minKm: 400,
    rate: 24,
    driver: 600,
    total: "₹10,200",
  },
  {
    car: "Force Traveller (AC)",
    minKm: 400,
    rate: 28,
    driver: 600,
    total: "₹11,800",
  },
  {
    car: "Coach Bus (Non-AC)",
    minKm: 400,
    rate: 30,
    driver: 600,
    total: "₹12,600",
  },
  {
    car: "Coach Bus (AC)",
    minKm: 400,
    rate: 45,
    driver: 600,
    total: "₹18,600",
  },
];

function KmTariffTable() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">
        Out Station Tariff (KM Basis)
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border bg-white shadow-md">
          <thead className="bg-yellow-400 text-black">
            <tr>
              <th className="p-3">Car</th>
              <th className="p-3">Min Km</th>
              <th className="p-3">Rate/Km</th>
              <th className="p-3">Driver</th>
              <th className="p-3">Total</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, i) => (
              <tr key={i} className="text-center border-b">
                <td className="p-3">{item.car}</td>
                <td>{item.minKm}</td>
                <td>₹{item.rate}</td>
                <td>₹{item.driver}</td>
                <td className="font-semibold">{item.total}</td>
                <td>
                  <button className="bg-green-500 text-white px-3 py-1 rounded">
                    WhatsApp Now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default KmTariffTable;