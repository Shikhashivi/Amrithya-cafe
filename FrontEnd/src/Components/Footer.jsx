import React from 'react'
import logo from '../assets/logo.png'


const Footer = () => {
  return (
    <div>
         <footer className=" flex flex-col bg-gray-900 text-center text-gray-300 py-6 mt-10">
                <img src={logo} alt="Amrithya Logo" className="w-40 mx-auto mb-4" />
                <ul className="gap-6">
                    <li><a href="/" className='cursor-pointer hover:text-yellow-400 mb-20'>Home</a></li>
                    <li><a href="/about" className='cursor-pointer hover:text-yellow-400 mb-20'>About</a></li>
                    <li><a href="/menu" className='cursor-pointer hover:text-yellow-400 mb-20'>Menu</a></li>
                    <li><a href="/contact" className='cursor-pointer hover:text-yellow-400 mb-20'>Contact</a></li>
                </ul>
                <p className="">153-C Rajpur Road,
                    opposite Pacific Mall, Dehra Dun,
                    <br/>  India 248001</p>
                <p>Operating Hours: Mon - Sun 12:00 PM - 03:00 AM</p>
                <p>Contact: +91 79064 10142</p>
                <div className="flex flex-col justify-center gap-4 mt-2">
                  <a href="/#" className="hover:text-yellow-400">Instagram</a>
                  <a href="#" className="hover:text-yellow-400">Facebook</a>
                  <a href="#" className="hover:text-yellow-400">WhatsApp</a>
                </div>
              </footer>
    </div>
  )
}

export default Footer