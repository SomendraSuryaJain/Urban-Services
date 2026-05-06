

import React, { useState, useMemo } from 'react'; // useMemo optimization ke liye
import { useParams, useNavigate } from 'react-router-dom';
import { servicesData } from '../../../data/servicesData';
import { ChevronLeft, CheckCircle2, Clock, ShieldCheck, BadgeIndianRupee, Star, X, Phone } from 'lucide-react';
import ServiceBooking from './ServiceBooking'; 

const Home_Services_Page_Details = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Optimization: ID mismatch fix aur memoization
  const service = useMemo(() => {
    return servicesData.find(s => String(s.id) === String(serviceId));
  }, [serviceId]);

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-10 text-center font-poppins">
        <h2 className="text-2xl font-bold text-gray-800">Service Not Found</h2>
        <button onClick={() => navigate('/')} className="mt-4 text-blue-600 underline">Go back to home</button>
      </div>
    );
  }

  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);

  return (
    <>
      <div className={`min-h-screen pb-10 font-poppins transition-all duration-500 ${isBookingModalOpen ? 'blur-md scale-[0.98] pointer-events-none' : ''}`}>
        
        {/* --- HERO SECTION --- */}
        <div 
          className="relative w-full min-h-[500px] md:min-h-0 md:aspect-[21/9] flex items-center justify-center overflow-hidden"
          style={{
            // Note: Make sure hero.jpg is in the 'public' folder
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.9), rgba(255,255,255,0.2)), url(/hero.jpg)`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full pt-12 pb-16">
            {/* Fix: Added transition and cursor pointer */}
            <button 
              onClick={() => navigate(-1)} 
              className="flex items-center text-white mb-6 md:mb-12 cursor-pointer hover:bg-gray-900 transition-colors text-xs md:text-sm font-bold bg-black px-4 py-2 rounded-full backdrop-blur-sm w-fit"
            >
              <ChevronLeft size={16} /> <span>Back to Services</span>
            </button>
            
            <div className="space-y-4 md:space-y-6 max-w-4xl">
              <div className="flex items-center gap-2 bg-black text-white px-3 py-1 rounded-full w-fit text-[10px] md:text-xs font-black uppercase tracking-wider">
                <Star size={12} fill="currentColor" /> Premium Gorakhpur Service
              </div>

              <h1 className="text-3xl md:text-6xl font-black text-black leading-tight">
                {service.name} <br className="hidden md:block" />
                <span className="text-black">in Gorakhpur</span>
              </h1>

              <div className="flex items-center gap-3 md:gap-4 text-xl md:text-2xl font-bold text-black">
                <span className="text-lg font-medium">Starting at</span>
                <span className="bg-black px-4 py-1.5 md:px-6 md:py-2 rounded-xl text-white font-black shadow-lg">
                  {service.price}
                </span>
              </div>

              <p className="text-black text-sm md:text-lg leading-relaxed max-w-2xl font-medium opacity-90">
                {service.tagline || "Professional and reliable solutions for your home in Gorakhpur."}
              </p>
              
              <div className="pt-4 md:pt-6">
                <button 
                  onClick={openBookingModal} 
                  className="w-full sm:w-fit bg-black text-white px-10 py-3.5 md:px-12 md:py-4.5 rounded-2xl font-black flex items-center justify-center gap-3 shadow-2xl hover:scale-105 transition-all active:scale-95 text-base md:text-lg"
                >
                   Book Your Slot
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --- DETAILS GRID --- */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 mt-10 md:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
            <div className="lg:col-span-2 space-y-8 md:space-y-10">
              <div className="bg-black rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-6 md:mb-10 text-center md:text-left">What's Included</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  {service.features?.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white p-4 md:p-5 rounded-2xl md:rounded-3xl shadow-sm">
                      <div className="bg-black p-2 md:p-3 rounded-xl shrink-0">
                        <CheckCircle2 className="text-white" size={18} />
                      </div>
                      <span className="text-black font-bold text-sm md:text-lg leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="bg-black rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 h-fit space-y-6 shadow-lg mb-10 md:mb-0">
                <div className="text-center">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 md:mb-5">
                        <Phone className="text-black" size={22} />
                    </div>
                    <h4 className="font-black text-white text-xl md:text-2xl mb-2">Need Help?</h4>
                    <p className="text-white text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
                        Talk to our Gorakhpur expert team today.
                    </p>
                    
                    <a 
                      href="tel:+919876543210" 
                      className="w-full py-4 bg-white text-black font-black rounded-2xl border-2 transition-all flex items-center justify-center gap-3 active:scale-95 text-base md:text-lg"
                    >
                        <Phone size={18} fill="currentColor" /> Call Now
                    </a>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- BOOKING MODAL --- */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-[10000] flex items-end md:items-center justify-center p-0 md:p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={closeBookingModal}></div>
          <div className="bg-black rounded-t-[2.5rem] md:rounded-[2.5rem] p-6 md:p-8 max-w-xl w-full shadow-2xl relative z-[10001] max-h-[90vh] overflow-y-auto">
            <button onClick={closeBookingModal} className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-white rounded-full text-black hover:rotate-90 transition-transform">
              <X size={20} />
            </button>
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-2"> Book Now</h2>
              <div className="flex items-center gap-3">
                <span className="bg-white text-black text-[10px] font-black px-3 py-1 rounded-full uppercase">{service.name}</span>
                <span className="text-white font-bold">{service.price}</span>
              </div>
            </div>
            <ServiceBooking serviceName={service.name} servicePrice={service.price} onClose={closeBookingModal} /> 
          </div>
        </div>
      )}
    </>
  );
};

export default Home_Services_Page_Details;