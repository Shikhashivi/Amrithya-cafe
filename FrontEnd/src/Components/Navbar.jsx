import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 p-4 md:p-5 flex justify-between items-center text-white shadow-lg z-50">
      {/* Logo */}
      <Link to="/" className="text-lg md:text-2xl font-bold text-yellow-500">
        Amrithya
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-md font-semibold">
        <Link to="/" className="hover:text-yellow-400">HOME</Link>
        <Link to="/menu" className="hover:text-yellow-400">MENU</Link>
        <Link to="/events" className="hover:text-yellow-400">EVENTS</Link>
        <Link to="/about" className="hover:text-yellow-400">ABOUT</Link>
        <Link to="/contact" className="hover:text-yellow-400">CONTACT</Link>
      </ul>

      {/* Reservation Button */}
      <Link
        to="/reservation"
        className="hidden md:block px-6 py-2 border-2 border-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-500 transition"
      >
        Make Reservation
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 bg-gray-800 rounded"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 flex flex-col items-center py-4 space-y-4 md:hidden">
          <Link to="/" className="hover:text-yellow-400" onClick={() => setIsMobileMenuOpen(false)}>HOME</Link>
          <Link to="/menu" className="hover:text-yellow-400" onClick={() => setIsMobileMenuOpen(false)}>MENU</Link>
          <Link to="/events" className="hover:text-yellow-400" onClick={() => setIsMobileMenuOpen(false)}>EVENTS</Link>
          <Link to="/about" className="hover:text-yellow-400" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</Link>
          <Link to="/contact" className="hover:text-yellow-400" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</Link>
          <Link
            to="/reservation"
            className="px-6 py-2 border-2 border-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-500 transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Make Reservation
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
