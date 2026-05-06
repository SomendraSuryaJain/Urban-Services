import { navLinks } from '../data/navData';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import BookingForm from './BookingForm';
import { Menu, X } from 'lucide-react'; // Hamburger icons ke liye

const Navbar = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle

  return (
    <nav className="w-full bg-white sticky top-0 z-50 mt-4  mb-2">
      {/* Container to handle padding across screens */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between py-0">
        
        {/* Logo Section */}
        <div className="flex items-center gap-0 shrink-0">
  <div className="w-40 h-18 md:w-40 md:h-19 ">
    <img src="./logo.jpeg" alt="UrbanServices Logo" className="w-full h-full object-fit" />
  </div>
  {/* <div className="flex flex-col">
    <span className="text-xl md:text-3xl font-semibold text-purple-900 leading-none">
      Urban
    </span>
    
    <span className="text-[10px] md:text-[12px] font-bold text-purple-900 uppercase tracking-widest pl-1 md:pl-2">
      Services
    </span>
  </div> */}
</div>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-10 ">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path} className="text-black font-semibold text-[19px] hover:underline transition-colors">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsFormOpen(true)}
            className="hidden sm:block bg-black text-white px-6 md:px-8 py-2 md:py-2.5 rounded-full font-bold hover:cursor-pointer transition-all shadow-lg shadow-green-900/20"
          >
            Book Now
          </button>

          {/* Hamburger Icon - Only for Mobile/Tablet */}
          <button 
            className="lg:hidden text-black" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Sidebar Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
        
        {/* Menu Content */}
        <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-xl p-6 flex flex-col">
          <div className="flex justify-end mb-8">
            <button onClick={() => setIsMenuOpen(false)}><X size={30} /></button>
          </div>
          
          <ul className="flex flex-col gap-6 mb-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link 
                  to={link.path} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl font-semibold text-black"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <button 
            onClick={() => { setIsFormOpen(true); setIsMenuOpen(false); }}
            className="w-full bg-black text-white py-3 rounded-full font-bold"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </nav>
  );
};

export default Navbar;