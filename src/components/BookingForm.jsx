import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const BookingForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', service: '', phone: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "7897222542";

    const message = `Hello UrbanServices, I want to book a service.%0A*Name:* ${formData.name}%0A*Service:* ${formData.service}%0A*Phone:* ${formData.phone}`;
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-md px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl relative"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-black">
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-black mb-6">Book Your Service</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" placeholder="Your Name" required
            className="w-full p-3 border border-black rounded-xl focus:outline-none"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <select 
            className="w-full p-3 border border-black rounded-xl focus:outline-none"
            onChange={(e) => setFormData({...formData, service: e.target.value})}
            required
          >
            <option value="">Select Service</option>
            <option value="AC Cleaning">AC Cleaning</option>
            <option value="AC Cleaning">Home Cleaning</option>
            <option value="AC Cleaning">Pest Control</option>
            <option value="AC Cleaning">Office Cleaning</option>
            <option value="AC Cleaning">Room Cleaning</option>
            <option value="AC Cleaning">Bathroom Cleaning</option>
            <option value="Deep Cleaning">Deep Cleaning</option>
            <option value="Sofa Cleaning">Sofa Cleaning</option>
          </select>
          <input 
            type="tel" placeholder="Phone Number" required
            className="w-full p-3 border border-black rounded-xl focus:outline-none"
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
          <button type="submit" className="w-full bg-black text-white py-3 rounded-xl font-bold hover:cursor-pointer transition-all">
            Submit & WhatsApp
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default BookingForm;