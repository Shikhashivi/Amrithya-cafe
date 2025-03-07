import React from "react";
import Image from '../assets/home.png'
import Navbar from '../Components/Navbar'
import About from "./About";
import Luxury from "./Luxury";
import Menu from "./Menu";
import Private from "./Private";
import Contact from "./Contact";
import { Link } from "react-router-dom";
import Footer from "./Footer";


const Home = () => {
  return (
    <>
      <Navbar />
      <section className=" h-screen flex items-center justify-center   text-center text-white bg-cover bg-center bg-no-repeat bg-opacity-50" style={{ backgroundImage: `url(${Image})` }}>


        <div className="absolute inset-0   bg-opacity-50 " > </div>
        <div className="z-10 ">
          <h1 className="text-5xl md:text-4xl font-serif">Welcome to Amrithya</h1>
          <p className="text-lg mt-3">The Eternal Dining by Brahmastra</p>
          <button className="mt-6 px-6 py-1 border-2 text-sm backdrop-blur-md border-yellow-500 text-white font-mono cursor-pointer ">
            <Link to="/reservation">Make Reservation</Link>
          </button>
        </div>

      </section>
      <About />
      <Luxury />
      <Menu />
      <Private />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;