
import React from 'react';
import { Service } from '../types';
import BookingForm from './BookingForm';

interface ServicePageProps {
  service: Service;
}

const ServicePage: React.FC<ServicePageProps> = ({ service }) => {
  return (
    <div className="animate-fade-in">
      {/* Service Hero */}
      <div className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-royal-blue/90 via-royal-blue/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              {service.description}
            </p>
            <a href="#booking-section" className="bg-gold text-white px-10 py-4 rounded-sm font-bold shadow-xl hover:bg-yellow-600 transition-all inline-block">
              BOOK THIS SERVICE
            </a>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-royal-blue text-3xl font-bold mb-6 flex items-center">
                <i className={`fa-solid ${service.icon} text-gold mr-4`}></i>
                The Royal Treatment
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {service.detailedDescription}
              </p>
              
              <div className="bg-slate-50 p-8 rounded-sm border-l-4 border-gold">
                <h4 className="font-bold text-royal-blue mb-4">What's Included:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((b, i) => (
                    <div key={i} className="flex items-center space-x-3 text-sm text-slate-700">
                      <i className="fa-solid fa-check text-gold"></i>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
               <div className="grid grid-cols-2 gap-4">
                  <img src={service.image} className="rounded-lg h-64 w-full object-cover shadow-xl" alt="Clean view 1" />
                  <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600" className="rounded-lg h-64 w-full object-cover shadow-xl mt-8" alt="Clean view 2" />
               </div>
               <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form with pre-selected service */}
      <div id="booking-section">
        <BookingForm preSelectedService={service.id} />
      </div>
    </div>
  );
};

export default ServicePage;
