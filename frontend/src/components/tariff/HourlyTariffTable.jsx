const data = [
  { car: "Swift Dzire A/c", extraHrs: 200, extraKm: 13, total: "₹2,800" },
  { car: "Toyota Etios GD", extraHrs: 200, extraKm: 13, total: "₹2,800" },
  { car: "Chevrolet Tavera", extraHrs: 300, extraKm: 14, total: "₹3,600" },
  { car: "Mahindra Xylo", extraHrs: 300, extraKm: 14, total: "₹3,600" },
  { car: "Toyota Innova", extraHrs: 300, extraKm: 15, total: "₹3,800" },
  { car: "Innova Crysta", extraHrs: 300, extraKm: 16, total: "₹4,500" },
  { car: "Coach Bus (Non-AC)", extraHrs: 400, extraKm: 17, total: "₹5,000" },
  { car: "Coach Bus (AC)", extraHrs: 400, extraKm: 20, total: "₹5,500" },
];

function HourlyTariffTable() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">
        Local Tariff (Hourly Basis)
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-yellow-400 text-black">
            <tr>
              <th className="p-3">Car</th>
              <th className="p-3">Extra Hour</th>
              <th className="p-3">Extra Km</th>
              <th className="p-3">Total Amount</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, i) => (
              <tr key={i} className="border-b text-center">
                <td className="p-3">{item.car}</td>
                <td className="p-3">₹{item.extraHrs}</td>
                <td className="p-3">₹{item.extraKm}</td>
                <td className="p-3 font-semibold">{item.total}</td>
                <td className="p-3">
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

export default HourlyTariffTable;