import React from "react";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <>
    <Navbar />
    <div className="bg-[#f5f5eb] text-gray-800 p-8 md:p-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mt-20">CONTACT US</h2>
      <p className="text-center text-gray-600 mt-2">
        Feel free to reach out so we may enhance your experience at
      </p>

      <div className="mt-8 flex flex-col md:flex-row items-center md:items-start justify-between max-w-5xl mx-auto gap-8">
        {/* Contact Info */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <div>
            <h3 className="font-semibold text-lg">PHONE</h3>
            <p className="text-gray-600">+91 79064 10142</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">EMAIL</h3>
            <p className="text-gray-600">Amrithya@gmail.com</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">LOCATION</h3>
            <p className="text-gray-600">
              153-C Rajpur Road, opposite Pacific Mall,<br />
              Dehra Dun, India 248001
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">OPERATING HOURS</h3>
            <p className="text-gray-600">Mon – Sun: 12.00 pm – 03:00 am</p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-6 mt-4">
            <a href="#" className="text-gray-700 hover:text-gray-900 text-xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-xl">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        {/* Map Section */}
        <div className="relative w-full h-48 sm:h-64 md:h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.4958120420574!2d78.0681693755661!3d30.365275874763533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d76a65932679%3A0xa2158b256106db64!2sAmrithya%20the%20Eternal%20Dining%20by%20Brahmastra!5e0!3m2!1sen!2sin!4v1740157096997!5m2!1sen!2sin"
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;