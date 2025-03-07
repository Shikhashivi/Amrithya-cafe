import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Reservation = () => {
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState({
    club: "",
    experience: "",
    time: "",
    table: "",
  });

  const handleNext = () => {
    navigate("/reservation-details", { state: bookingData });
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center bg-gray-900 text-white min-h-screen p-6">
        <div className="w-full max-w-md text-center">
          {/* Select Club */}
          <h1 className="text-xl font-bold mt-6 md:text-3xl">Select a Club</h1>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
              <button
                key={day}
                className={`px-1 py-2 rounded text-sm md:text-lg transition-all duration-300 ${
                  bookingData.club === day ? "bg-yellow-600 scale-105 shadow-lg" : "bg-yellow-500 hover:bg-yellow-400"
                }`}
                onClick={() => setBookingData({ ...bookingData, club: day })}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Select Experience */}
          <h1 className="text-xl font-bold mt-8 md:text-3xl">Select Experience</h1>
          <div className="mt-4 grid grid-cols-2 gap-1">
            {["12:00", "01:00", "02:00", "03:00"].map((time) => (
              <button
                key={time}
                className={`px-1 py-2 rounded text-sm md:text-lg transition-all duration-300 ${
                  bookingData.time === time ? "bg-yellow-600 scale-105 shadow-lg" : "bg-yellow-500 hover:bg-yellow-400"
                }`}
                onClick={() => setBookingData({ ...bookingData, time })}
              >
                {time}
              </button>
            ))}
          </div>

          {/* Select Table */}
          <h1 className="text-xl font-bold mt-8 md:text-3xl">Select Table</h1>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <button
                key={num}
                className={`px-1 py-2 rounded text-sm md:text-lg transition-all duration-300 ${
                  bookingData.table === num ? "bg-yellow-600 scale-105 shadow-lg" : "bg-yellow-500 hover:bg-yellow-400"
                }`}
                onClick={() => setBookingData({ ...bookingData, table: num })}
              >
                {num}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            className="mt-8 px-6 py-3 -ml-20  bg-yellow-500 hover:bg-yellow-400 rounded text-black font-bold text-lg w-full transition-all duration-300"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Reservation;
