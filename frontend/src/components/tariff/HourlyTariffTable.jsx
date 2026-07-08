const data = [
  {
    car: "Swift Dzire",
    hrs5: "₹1,600",
    hrs8: "₹2,500",
    hrs10: "₹3,000",
    extraKm: "₹14",
  },
  {
    car: "Toyota Etios",
    hrs5: "₹1,600",
    hrs8: "₹2,500",
    hrs10: "₹3,000",
    extraKm: "₹14",
  },
  {
    car: "Maruti Baleno",
    hrs5: "₹1,600",
    hrs8: "₹2,500",
    hrs10: "₹3,000",
    extraKm: "₹14",
  },
  {
    car: "Maruti Ertiga",
    hrs5: "₹2,750",
    hrs8: "₹3,800",
    hrs10: "₹4,500",
    extraKm: "₹18",
  },
  {
    car: "Toyota Innova",
    hrs5: "₹2,750",
    hrs8: "₹3,800",
    hrs10: "₹4,500",
    extraKm: "₹18",
  },
  {
    car: "Toyota Innova Crysta",
    hrs5: "₹3,500",
    hrs8: "₹4,750",
    hrs10: "₹5,500",
    extraKm: "₹24",
  },
];

function HourlyTariffTable() {
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
        Local Tariff (Hourly Basis)
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-yellow-400 text-black">
            <tr>
              <th className="p-3">Car</th>
              <th className="p-3">5 Hours</th>
              <th className="p-3">8 Hours</th>
              <th className="p-3">10 Hours</th>
              <th className="p-3">Extra Km</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, i) => (
              <tr key={i} className="border-b text-center hover:bg-gray-50">
                <td className="p-3 font-medium">{item.car}</td>
                <td className="p-3">{item.hrs5}</td>
                <td className="p-3">{item.hrs8}</td>
                <td className="p-3 font-semibold">{item.hrs10}</td>
                <td className="p-3">{item.extraKm}/Km</td>
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
    </div>
  );
}

export default HourlyTariffTable;