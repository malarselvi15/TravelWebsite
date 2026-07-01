const data = [
  {
    car: "Swift Dzire A/c",
    rent: "₹2,400",
    freeKm: 100,
    kmRate: 11,
    driver: "₹400",
    total: "₹2,800",
  },
  {
    car: "Toyota Etios GD",
    rent: "₹2,400",
    freeKm: 100,
    kmRate: 11,
    driver: "₹400",
    total: "₹2,800",
  },
  {
    car: "Chevrolet Tavera",
    rent: "₹3,400",
    freeKm: 100,
    kmRate: 15,
    driver: "₹400",
    total: "₹3,800",
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
    rent: "₹3,400",
    freeKm: 100,
    kmRate: 16,
    driver: "₹400",
    total: "₹3,800",
  },
  {
    car: "Innova Crysta",
    rent: "₹4,600",
    freeKm: 100,
    kmRate: 17,
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
];

function DayTariffTable() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">
        Out Station Tariff (Day Basis)
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border bg-white shadow-md">
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
              <tr key={i} className="text-center border-b">
                <td className="p-3">{item.car}</td>
                <td>{item.rent}</td>
                <td>{item.freeKm}</td>
                <td>₹{item.kmRate}</td>
                <td>{item.driver}</td>
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

export default DayTariffTable;