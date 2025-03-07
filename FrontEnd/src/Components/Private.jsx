import React from "react";
import img from '../assets/home.png'
import { Link } from 'react-router-dom'
import Navbar from "./Navbar";

const Private = () => {
  return (
    <>
    <Navbar />
      <section className="flex flex-col items-center text-center py-12   px-4 md:px-16  bg-gray-900 ">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4 mt-20 uppercase tracking-wide">
          Private & Exclusive Dining
        </h2>
        <p className="text-gray-100 max-w-2xl mb-6">
          For those seeking exclusivity, our private dining areas offer a perfect setting for
          special celebrations, business meetings, and intimate gatherings.
        </p>

        {/* Image with overlay button */}
        <div className="relative w-full max-w-4xl">
          <img
            src={img}
            alt="Private Dining"
            className="w-full rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <button className="bg-black text-white px-6 py-2 border border-yellow-500 hover:bg-yellow-500 transition-all rounded-md">
              <Link to="/reservation">Make Reservation</Link>

            </button>
          </div>
        </div>
      </section>
    </>
  );
}
export default Private;