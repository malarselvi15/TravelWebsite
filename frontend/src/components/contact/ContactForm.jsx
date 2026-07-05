import { useState } from "react";
import {
  FaUser,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaCar,
  FaUsers,
  FaWhatsapp,
  FaRegCommentDots,
} from "react-icons/fa";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickup: "",
    drop: "",
    date: "",
    time: "",
    vehicle: "",
    trip: "One Way",
    passengers: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `
🚖 *New Booking Request*

👤 Name: ${form.name}
📞 Phone: ${form.phone}

📍 Pickup: ${form.pickup}
📍 Drop: ${form.drop}

📅 Date: ${form.date}
🕒 Time: ${form.time}

🚗 Vehicle: ${form.vehicle}
🔁 Trip Type: ${form.trip}

👥 Passengers: ${form.passengers}

💬 Message:
${form.message}
`;

    // Replace with your WhatsApp number
    const phone = "919043294678";

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8">

      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        Book Your Ride
      </h2>

      <p className="text-gray-500 mb-8">
        Fill in your travel details and book instantly via WhatsApp.
      </p>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-5"
      >

        {/* Name */}
        <div className="relative">
          <FaUser className="absolute left-4 top-4 text-yellow-500" />

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full pl-12 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-yellow-400 outline-none"
          />
        </div>

        {/* Phone */}
        <div className="relative">
          <FaPhoneAlt className="absolute left-4 top-4 text-yellow-500" />

          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full pl-12 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-yellow-400 outline-none"
          />
        </div>

        {/* Pickup */}
        <div className="relative">
          <FaMapMarkerAlt className="absolute left-4 top-4 text-yellow-500" />

          <input
            type="text"
            name="pickup"
            placeholder="Pickup Location"
            value={form.pickup}
            onChange={handleChange}
            required
            className="w-full pl-12 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-yellow-400 outline-none"
          />
        </div>

        {/* Drop */}
        <div className="relative">
          <FaMapMarkerAlt className="absolute left-4 top-4 text-yellow-500" />

          <input
            type="text"
            name="drop"
            placeholder="Drop Location"
            value={form.drop}
            onChange={handleChange}
            required
            className="w-full pl-12 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-yellow-400 outline-none"
          />
        </div>

        {/* Date */}
        <div className="relative">
          <FaCalendarAlt className="absolute left-4 top-4 text-yellow-500" />

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="w-full pl-12 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-yellow-400 outline-none"
          />
        </div>

        {/* Time */}
        <div className="relative">
          <FaClock className="absolute left-4 top-4 text-yellow-500" />

          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            required
            className="w-full pl-12 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-yellow-400 outline-none"
          />
        </div>
                {/* Vehicle */}
        <div className="relative">
          <FaCar className="absolute left-4 top-4 text-yellow-500" />

          <select
            name="vehicle"
            value={form.vehicle}
            onChange={handleChange}
            required
            className="w-full pl-12 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-yellow-400 outline-none appearance-none bg-white"
          >
            <option value="">Select Vehicle</option>
            <option>Toyota Etios</option>
            <option>Maruti Suzuki Dzire</option>
            <option>Toyota Innova</option>
            <option>Maruti Ertiga</option>
            <option>Tempo Traveller</option>
            <option>Force Urbania</option>
            <option>Jaguar</option>
            <option>Mercedes-Benz E-Class</option>
            <option>Coach Bus</option>
          </select>
        </div>

        {/* Trip Type */}
        <div className="relative">
          <FaCar className="absolute left-4 top-4 text-yellow-500" />

          <select
            name="trip"
            value={form.trip}
            onChange={handleChange}
            className="w-full pl-12 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-yellow-400 outline-none appearance-none bg-white"
          >
            <option>One Way</option>
            <option>Round Trip</option>
            <option>Local</option>
            <option>Airport Transfer</option>
          </select>
        </div>

        {/* Passengers */}
        <div className="relative">
          <FaUsers className="absolute left-4 top-4 text-yellow-500" />

          <input
            type="number"
            min="1"
            name="passengers"
            placeholder="Passengers"
            value={form.passengers}
            onChange={handleChange}
            required
            className="w-full pl-12 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-yellow-400 outline-none"
          />
        </div>

        {/* Empty column for desktop */}
        <div></div>

        {/* Message */}
        <div className="relative md:col-span-2">
          <FaRegCommentDots className="absolute left-4 top-5 text-yellow-500" />

          <textarea
            rows="5"
            name="message"
            placeholder="Additional Notes (Optional)"
            value={form.message}
            onChange={handleChange}
            className="w-full pl-12 pr-4 py-4 rounded-xl border focus:ring-2 focus:ring-yellow-400 outline-none resize-none"
          />
        </div>

        {/* Button */}
        <div className="md:col-span-2 mt-2">
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-semibold text-lg transition duration-300 flex justify-center items-center gap-3 shadow-lg"
          >
            <FaWhatsapp className="text-2xl" />
            Book on WhatsApp
          </button>
        </div>

      </form>

    </div>
  );
}

export default ContactForm;