import { FaCalendarAlt, FaRupeeSign, FaArrowRight } from "react-icons/fa";

function PackageCard({ pkg }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden group">

      {/* Top Gradient */}
      <div className="h-2 bg-gradient-to-r from-yellow-400 to-orange-500"></div>

      <div className="p-6">

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-800">
          {pkg.title}
        </h3>

        {/* Days */}
        <div className="flex items-center gap-2 mt-3 text-gray-600">
          <FaCalendarAlt className="text-yellow-500" />
          <span>{pkg.days}</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-2 text-gray-700 font-semibold">
          <FaRupeeSign className="text-yellow-500" />
          <span>{pkg.price}</span>
        </div>

        {/* Description */}
        <p className="text-gray-500 mt-3">
          {pkg.desc}
        </p>

        {/* Button */}
        <button className="mt-6 w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition">
          Book Now
          <FaArrowRight />
        </button>

      </div>
    </div>
  );
}

export default PackageCard;