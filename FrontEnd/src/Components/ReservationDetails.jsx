import { useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const ReservationDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({ name: "", phone: "", email: "" });

  const handleConfirm = async () => {
    const booking = { ...location.state, ...userDetails }; // Corrected reference

    try {
      const response = await axios.post("https://amrithya-cafe-12.onrender.com/api/bookings", booking);
      console.log("✅ Booking Confirmed:", response.data);
      alert("Booking Confirmed!");
    } catch (error) {
      console.error("❌ Error:", error.message);

      if (error.response) {
        console.error("📌 Server responded with error:", error.response.data);
      } else if (error.request) {
        console.error("📌 No response from server:", error.request);
      } else {
        console.error("📌 Request setup issue:", error.message);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center bg-gray-800 text-white min-h-screen p-4">
        <h1 className="text-2xl font-bold mt-6 md:text-3xl">Confirm Your Booking</h1>

        <div className="mt-6 w-full max-w-md">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mt-4 p-2 rounded bg-gray-700 text-white text-sm md:text-lg"
            onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full mt-4 p-2 rounded bg-gray-700 text-white text-sm md:text-lg"
            onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="WhatsApp Number"
            className="w-full mt-4 p-2 rounded bg-gray-700 text-white text-sm md:text-lg"
            onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
          />
        </div>

        <button
          className="mt-6 px-6 py-2 bg-yellow-500 rounded text-black font-bold text-lg md:text-xl w-full max-w-sm"
          onClick={handleConfirm}
        >
          Confirm and Complete Booking
        </button>
      </div>
    </>
  );
};

export default ReservationDetails;
