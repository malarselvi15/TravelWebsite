import { FaCheckCircle } from "react-icons/fa";

function TermsAndConditions() {
  const terms = [
    "Parking & Toll Charges are extra.",
    "Night charges apply between 10:00 PM and 6:00 AM.",
    "Distance is calculated from our office to the pickup point.",
    "Air conditioning may not operate efficiently in hill stations.",
    "Additional charges apply for hill station permits and entry fees.",
    "One day booking is calculated from Midnight to Midnight.",
    "Driver allowance may apply for long-distance trips.",
    "GST will be charged as applicable.",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">

          <span className="uppercase tracking-[5px] text-yellow-500 font-semibold">
            IMPORTANT INFORMATION
          </span>

          <h2 className="text-5xl font-bold text-gray-900 mt-3">
            Terms & Conditions
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            Please review the following terms before confirming your booking.
            These guidelines ensure a smooth and hassle-free travel experience.
          </p>

        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">

          {/* Top Accent */}
          <div className="h-2 bg-yellow-400"></div>

          <div className="p-10">

            <div className="grid md:grid-cols-2 gap-6">

              {terms.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-yellow-400 hover:bg-yellow-50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400 transition">
                    <FaCheckCircle className="text-yellow-600 group-hover:text-white text-lg" />
                  </div>

                  <p className="text-gray-700 leading-7">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default TermsAndConditions;